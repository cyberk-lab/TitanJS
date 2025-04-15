import { BaseAccount } from '@titanjs/cosmos-types/cosmos/auth/v1beta1/auth';
import { SignMode } from '@titanjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import { getAccount } from '@titanjs/cosmos-types/cosmos/auth/v1beta1/query.rpc.func';
import { getSimulate } from '@titanjs/cosmos-types/cosmos/tx/v1beta1/service.rpc.func';
import {
  Fee,
  SignerInfo,
  Tx,
  TxBody,
  TxRaw,
} from '@titanjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { BroadcastMode, BroadcastOptions, HttpEndpoint, DeliverTxResponse, Event, TxRpc } from '@titanjs/types';
import { fromBase64, isEmpty, toHttpEndpoint } from '@titanjs/utils';

import { defaultAccountParser, defaultBroadcastOptions } from '../defaults';
import {
  EncodedMessage,
  QueryClient,
} from '../types';
import {
  AsyncCometBroadcastResponse,
  CommitCometBroadcastResponse,
  IndexedTx,
  Status,
  SyncCometBroadcastResponse,
  TimeoutError,
  TxResponse,
} from '../types/rpc';
import { constructAuthInfo } from '../utils/direct';
import { broadcast, createQueryRpc, getPrefix, sleep } from '@titanjs/utils';
import { isBaseAccount } from '../utils';
import { QueryAccountRequest, QueryAccountResponse } from '@titanjs/cosmos-types/cosmos/auth/v1beta1/query';
import { SimulateRequest, SimulateResponse } from '@titanjs/cosmos-types/cosmos/tx/v1beta1/service';
import { TxMsgData } from '@titanjs/cosmos-types/cosmos/base/abci/v1beta1/abci';

/**
 * client for cosmos rpc
 */
export class RpcClient implements QueryClient {
  readonly endpoint: HttpEndpoint;

  protected chainId?: string;
  protected accountNumber?: bigint;
  readonly getAccount: (request: QueryAccountRequest) => Promise<QueryAccountResponse>;
  readonly getSimulate: (request: SimulateRequest) => Promise<SimulateResponse>;
  protected parseAccount: (encodedAccount: EncodedMessage) => BaseAccount =
    defaultAccountParser;
  protected _prefix?: string;
  protected txRpc: TxRpc;

  constructor(endpoint: string | HttpEndpoint, prefix?: string) {
    this.endpoint = toHttpEndpoint(endpoint);
    this.txRpc = createQueryRpc(this.endpoint);
    this._prefix = prefix;
  }

  setAccountParser(
    parseBaseAccount: (encodedAccount: EncodedMessage) => BaseAccount
  ) {
    this.parseAccount = parseBaseAccount;
  }

  async getPrefix() {
    return this._prefix ?? getPrefix(await this.getChainId());
  }

  /**
   * get basic account info by address
   */
  async getBaseAccount(address: string): Promise<BaseAccount> {
    const accountResp = await getAccount(this.txRpc, {
      address,
    });

    if (!accountResp || !accountResp.account) {
      throw new Error(`Account is undefined.`);
    }

    // if the account is a BaseAccount, return it
    if (isBaseAccount(accountResp.account)) {
      return accountResp.account;
    }

    // if there's a baseAccount in the account, and it's a BaseAccount, return it
    if (
      'baseAccount' in accountResp.account &&
      accountResp.account.baseAccount &&
      isBaseAccount(accountResp.account.baseAccount)
    ) {
      return accountResp.account.baseAccount;
    }

    // otherwise, parse the account from Any type.
    return this.parseAccount(accountResp.account);
  }

  /**
   * get status of the chain
   */
  protected async getStatus(): Promise<Status> {
    const data = await fetch(`${this.endpoint.url}/status`);
    const json = await data.json();
    return json['result'] ?? json;
  }

  /**
   * get chain id
   */
  getChainId = async () => {
    if (isEmpty(this.chainId)) {
      const status: Status = await this.getStatus();
      this.chainId = status.node_info.network;
    }
    return this.chainId;
  };

  /**
   * get the latest block height
   */
  async getLatestBlockHeight() {
    const status: Status = await this.getStatus();
    return BigInt(status.sync_info.latest_block_height);
  }

  /**
   * get account number by address
   */
  async getAccountNumber(address: string) {
    if (isEmpty(this.accountNumber)) {
      const account = await this.getBaseAccount(address);
      this.accountNumber = account.accountNumber;
    }
    return this.accountNumber;
  }

  /**
   * get sequence by address
   */
  async getSequence(address: string) {
    const account = await this.getBaseAccount(address);
    return account.sequence;
  }

  /**
   * get the account of the current signer
   */
  async simulate(txBody: TxBody, signerInfos: SignerInfo[]) {
    const tx = Tx.fromPartial({
      body: txBody,
      authInfo: constructAuthInfo(
        signerInfos.map((signerInfo) => {
          return {
            ...signerInfo,
            modeInfo: { single: { mode: SignMode.SIGN_MODE_UNSPECIFIED } },
          };
        }),
        Fee.fromPartial({})
      ).authInfo,
      signatures: [new Uint8Array()],
    });
    return await getSimulate(this.txRpc, {
      tx: void 0,
      txBytes: Tx.encode(tx).finish(),
    });
  }

  /**
   * Decode TxMsgData from base64-encoded data
   */
  protected decodeTxMsgData(data?: string): TxMsgData {
    return TxMsgData.decode(data ? fromBase64(data) : new Uint8Array());
  }

  /**
   * get the transaction by hash(id)
   */
  async getTx(id: string): Promise<IndexedTx | null> {
    const data = await fetch(`${this.endpoint.url}/tx?hash=0x${id}`);
    const json = await data.json();
    const tx: TxResponse = json['result'];
    if (!tx) return null;

    const txMsgData = this.decodeTxMsgData(tx.tx_result.data);
    return {
      height: tx.height,
      txIndex: tx.index,
      hash: tx.hash,
      code: tx.tx_result.code,
      events: tx.tx_result.events,
      rawLog: tx.tx_result.log,
      tx: fromBase64(tx.tx),
      msgResponses: txMsgData.msgResponses,
      gasUsed: BigInt(tx.tx_result.gas_used),
      gasWanted: BigInt(tx.tx_result.gas_wanted),
      data: tx.tx_result.data,
      log: tx.tx_result.log,
      info: tx.tx_result.info,
    };
  }

  /**
   * broadcast a transaction.
   * there're three modes:
   * - 'broadcast_tx_async': broadcast the transaction and return immediately.
   * - 'broadcast_tx_sync': broadcast the transaction and wait for the response.
   * - 'broadcast_tx_commit': broadcast the transaction and wait for the response and the transaction to be included in a block.
   */
  async broadcast(
    txBytes: Uint8Array,
    options?: BroadcastOptions
  ): Promise<DeliverTxResponse> {
    const {
      checkTx,
      deliverTx,
      timeoutMs,
      pollIntervalMs,
      useLegacyBroadcastTxCommit,
    } = {
      ...defaultBroadcastOptions,
      ...options,
    };

    const mode: BroadcastMode =
      checkTx && deliverTx
        ? 'broadcast_tx_commit'
        : checkTx
          ? 'broadcast_tx_sync'
          : 'broadcast_tx_async';
    const resp = await broadcast(
      this.endpoint,
      mode === 'broadcast_tx_commit' && !useLegacyBroadcastTxCommit
        ? 'broadcast_tx_async'
        : mode,
      txBytes
    );

    switch (mode) {
      case 'broadcast_tx_async':
        return {
          transactionHash: resp.hash,
          hash: resp.hash,
          code: resp.code,
          height: 0,
          txIndex: 0,
          events: [],
          msgResponses: [],
          gasUsed: 0n,
          gasWanted: 0n,
          rawLog: resp.log || "",
          data: [],

          origin: resp
        };
      case 'broadcast_tx_sync':

        return {
          transactionHash: resp.hash,
          hash: resp.hash,
          code: resp.code,
          height: 0,
          txIndex: 0,
          events: [],
          msgResponses: [],
          gasUsed: 0n,
          gasWanted: 0n,
          rawLog: resp.log || "",
          data: [],

          origin: resp
        };
      case 'broadcast_tx_commit':
        if (useLegacyBroadcastTxCommit) {
          const msgResponses = this.decodeTxMsgData(resp.deliver_tx.data).msgResponses;
          const data = msgResponses.map(res => {
            return {
              msgType: res.typeUrl,
              data: res.value
            }
          })

          return {
            transactionHash: resp.hash,
            hash: resp.hash,
            code: resp.deliver_tx.code,
            height: resp.height,
            txIndex: 0,
            events: resp.deliver_tx.events,
            msgResponses,
            data,
            gasUsed: BigInt(resp.deliver_tx.gas_used),
            gasWanted: BigInt(resp.deliver_tx.gas_wanted),
            rawLog: resp.deliver_tx.log || "",

            origin: resp
          };
        } else {
          let timedOut = false;
          const txPollTimeout = setTimeout(() => {
            timedOut = true;
          }, timeoutMs);

          const pollForTx = async (
            txId: string
          ): Promise<DeliverTxResponse> => {
            if (timedOut) {
              throw new TimeoutError(
                `Transaction with ID ${txId} was submitted but was not yet found on the chain. You might want to check later. There was a wait of ${timeoutMs / 1000
                } seconds.`,
                txId
              );
            }
            await sleep(pollIntervalMs);
            const result = await this.getTx(txId);

            return result
              ? {
                transactionHash: result.hash,
                hash: result.hash,
                code: result.code,
                height: result.height,
                txIndex: result.txIndex,
                events: result.events,
                msgResponses: result.msgResponses,
                gasUsed: result.gasUsed,
                gasWanted: result.gasWanted,
                rawLog: result.rawLog,
                data: result.msgResponses.map(res => {
                  return {
                    msgType: res.typeUrl,
                    data: res.value
                  }
                }),

                origin: result
              }
              : pollForTx(txId);
          };

          const transactionId = resp.hash.toUpperCase();

          return new Promise((resolve, reject) =>
            pollForTx(transactionId).then(
              (value) => {
                clearTimeout(txPollTimeout);
                resolve(value);
              },
              (error) => {
                clearTimeout(txPollTimeout);
                reject(error);
              }
            )
          );
        }
      default:
        throw new Error(`Wrong method: ${mode}`);
    }
  }
}
