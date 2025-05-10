import { AminoSigner } from './signers/amino';
import { DirectSigner } from './signers/direct';
import { RpcClient } from './query/rpc';
import {
  AminoConverter,
  Encoder,
  QueryClient,
} from './types';
import {
  IAminoGenericOfflineSigner,
  ICosmosGenericOfflineSigner,
  IDirectGenericOfflineSigner,
  isOfflineAminoSigner,
  isOfflineDirectSigner,
  OfflineSigner,
} from './types/wallet';
import { toConverter, toEncoder } from './utils';
import { TxBody, TxRaw } from '@titanlabjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { TxRpc } from '@titanlabjs/cosmos-types/types';
import { BroadcastOptions, DeliverTxResponse, HttpEndpoint, SIGN_MODE, StdFee, TelescopeGeneratedCodec } from '@titanlabjs/types';
import { fromBase64 } from '@titanlabjs/utils';

import {
  Block,
  BlockResponse,
  IndexedTx,
  SearchTxQuery,
  SearchTxResponse,
  TxResponse,
} from './types/query';
import {
  EncodeObject,
  SigningOptions,
} from './types/signing-client';

/**
 * SigningClient is a client that can sign and broadcast transactions.
 */
export class SigningClient {
  readonly client: QueryClient | null | undefined;
  readonly offlineSigner: ICosmosGenericOfflineSigner;
  readonly options: SigningOptions;

  readonly signers: Record<string, DirectSigner | AminoSigner> = {};

  readonly addresses: string[] = [];

  readonly encoders: Encoder[] = [];
  readonly converters: AminoConverter[] = [];

  protected txRpc: TxRpc;

  constructor(
    client: QueryClient | null | undefined,
    offlineSigner: ICosmosGenericOfflineSigner,
    options: SigningOptions = {}
  ) {
    this.client = client;

    this.offlineSigner = offlineSigner;
    this.encoders = options.registry?.map(([, g]) => toEncoder(g)) || [];
    this.converters = options.registry?.map(([, g]) => toConverter(g)) || [];

    this.options = options;

    this.txRpc = {
      request(): Promise<Uint8Array> {
        throw new Error('Not implemented yet');
      },
      signAndBroadcast: this.signAndBroadcast,
    };
  }

  static async connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: ICosmosGenericOfflineSigner,
    options: SigningOptions = {}
  ): Promise<SigningClient> {
    const signingClient = new SigningClient(
      new RpcClient(endpoint, options.signerOptions?.prefix),
      signer,
      options
    );

    await signingClient.connect();

    return signingClient;
  }

  async connect() {
    let signers;

    switch (this.offlineSigner.signMode) {
      case SIGN_MODE.DIRECT:
        signers = await DirectSigner.fromWalletToSigners(
          this.offlineSigner as IDirectGenericOfflineSigner,
          this.encoders,
          this.endpoint,
          this.options.signerOptions
        )
        break;

      case SIGN_MODE.AMINO:
        signers = await AminoSigner.fromWalletToSigners(
          this.offlineSigner as IAminoGenericOfflineSigner,
          this.encoders,
          this.converters,
          this.endpoint,
          this.options.signerOptions
        );
        break;

      default:
        break;
    }

    for (const signer of signers) {
      this.signers[await signer.getAddress()] = signer;
    }
  }

  /**
   * register converters
   */
  addConverters = (converters: (AminoConverter | TelescopeGeneratedCodec<any, any, any>)[]) => {
    // Create a Set of existing typeUrls for quick lookup
    const existingTypeUrls = new Set(this.converters.map(c => c.typeUrl));

    // Filter out converters with duplicate typeUrls
    const newConverters = converters.filter(converter => !existingTypeUrls.has(converter.typeUrl));

    // Add only the unique converters
    this.converters.push(...newConverters.map(toConverter));
  };

  /**
   * register encoders
   */
  addEncoders = (encoders: (Encoder | TelescopeGeneratedCodec<any, any, any>)[]) => {
    // Create a Set of existing typeUrls for quick lookup
    const existingTypeUrls = new Set(this.encoders.map(c => c.typeUrl));

    // Filter out converters with duplicate typeUrls
    const newEncoders = encoders.filter(encoder => !existingTypeUrls.has(encoder.typeUrl));

    // Add only the unique converters
    this.encoders.push(...newEncoders.map(toEncoder));
  };

  private get queryClient() {
    return this.client;
  }

  async getChainId() {
    return await this.queryClient.getChainId();
  }

  async getAccountNumber(address: string) {
    return await this.queryClient.getAccountNumber(address);
  }

  async getSequence(address: string) {
    return await this.queryClient.getSequence(address);
  }

  getSinger(signerAddress: string) {
    const signer = this.signers[signerAddress];

    if (!signer) {
      throw new Error(`No signer found for address ${signerAddress}`);
    }

    return signer;
  }

  async sign(
    signerAddress: string,
    messages: EncodeObject[],
    fee: StdFee,
    memo: string
  ): Promise<TxRaw> {
    const signer = this.getSinger(signerAddress);

    const resp = await signer.sign({
      messages,
      fee,
      memo,
    });

    return resp.tx;
  }

  private signWithAutoFee = async (
    signerAddress: string,
    messages: EncodeObject[],
    fee: StdFee | 'auto',
    memo = ''
  ): Promise<TxRaw> => {
    const usedFee = fee === 'auto' ? undefined : fee;
    return await this.sign(signerAddress, messages, usedFee, memo);
  };

  async simulate(
    signerAddress: string,
    messages: EncodeObject[],
    memo: string | undefined
  ): Promise<bigint> {
    const signer = this.getSinger(signerAddress);

    const resp = await signer.estimateFee({
      messages,
      memo,
      options: this.options,
    });

    return BigInt(resp.gas);
  }

  async broadcastTxSync(tx: Uint8Array): Promise<DeliverTxResponse> {
    const broadcasted = await this.queryClient.broadcast(tx, {
      checkTx: true,
      deliverTx: false,
    });

    return broadcasted;
  }

  public async signAndBroadcastSync(
    signerAddress: string,
    messages: EncodeObject[],
    fee: StdFee | 'auto',
    memo = ''
  ): Promise<DeliverTxResponse> {
    const txRaw = await this.signWithAutoFee(
      signerAddress,
      messages,
      fee,
      memo
    );
    const txBytes = TxRaw.encode(txRaw).finish();
    return this.broadcastTxSync(txBytes);
  }

  public async broadcastTx(
    tx: Uint8Array,
    broadcast: BroadcastOptions
  ): Promise<DeliverTxResponse> {
    const resp = await this.queryClient.broadcast(tx, broadcast);

    return resp;
  }

  signAndBroadcast = async (
    signerAddress: string,
    messages: EncodeObject[],
    fee: StdFee | 'auto',
    memo = ''
  ): Promise<DeliverTxResponse> => {
    const txRaw = await this.signWithAutoFee(
      signerAddress,
      messages,
      fee,
      memo
    );
    const txBytes = TxRaw.encode(txRaw).finish();
    return this.broadcastTx(
      txBytes,
      this.options.broadcast,
    );
  };

  get endpoint(): HttpEndpoint {
    return typeof this.queryClient.endpoint === 'string' ?
      { url: this.queryClient.endpoint, headers: {} }
      : this.queryClient.endpoint;
  }

  async getTx(id: string): Promise<IndexedTx | null> {
    const data = await fetch(`${this.endpoint.url}/tx?hash=0x${id}`);
    const json = await data.json();
    const tx: TxResponse = json['result'];
    if (!tx) return null;
    const txRaw = TxRaw.decode(fromBase64(tx.tx));
    const txBody = TxBody.decode(txRaw.bodyBytes);
    return {
      height: tx.height,
      txIndex: tx.index,
      hash: tx.hash,
      code: tx.tx_result.code,
      events: tx.tx_result.events,
      rawLog: tx.tx_result.log,
      tx: fromBase64(tx.tx),
      msgResponses: txBody.messages,
      gasUsed: tx?.tx_result?.gas_used ? BigInt(tx?.tx_result?.gas_used) : 0n,
      gasWanted: tx?.tx_result?.gas_wanted ? BigInt(tx?.tx_result?.gas_wanted) : 0n,
    };
  }

  async searchTx(query: SearchTxQuery): Promise<IndexedTx[]> {
    let rawQuery: string;
    if (typeof query === 'string') {
      rawQuery = query;
    } else if (Array.isArray(query)) {
      rawQuery = query.map((t) => `${t.key}=${t.value}`).join(' AND ');
    } else {
      throw new Error('Got unsupported query type.');
    }
    const orderBy: 'asc' | 'desc' = 'asc';
    const data = await fetch(
      `${this.endpoint.url}/tx_search?query="${rawQuery}"&order_by="${orderBy}"`
      // `${this.endpoint.url}/tx_search?query="${rawQuery}"&order_by="${orderBy}"&page=1&per_page=100`
    );
    const json = await data.json();

    const { txs }: SearchTxResponse = json['result'];
    return txs.map((tx) => {
      return {
        height: Number.parseInt(tx.height),
        txIndex: tx.index,
        hash: tx.hash,
        code: 0,
        // events: tx.tx_result.tags,
        events: [],
        rawLog: tx.tx_result.log || '',
        tx: fromBase64(tx.tx),
        msgResponses: [],
        gasUsed: tx?.tx_result?.gas_used ? BigInt(tx.tx_result.gas_used) : 0n,
        gasWanted: tx?.tx_result?.gas_wanted ? BigInt(tx.tx_result.gas_wanted) : 0n,
      } as IndexedTx;
    });
  }

  async getBlock(height?: number): Promise<Block> {
    const data = await fetch(
      height == void 0
        ? `${this.endpoint.url}/block?height=${height}`
        : `${this.endpoint.url}/block`
    );
    const json = await data.json();
    const { block_id, block }: BlockResponse = json['result'];
    return {
      id: block_id.hash.toUpperCase(),
      header: {
        version: {
          block: block.header.version.block,
          app: block.header.version.app,
        },
        height: Number(block.header.height),
        chainId: block.header.chain_id,
        time: block.header.time,
      },
      txs: block.data.txs.map((tx: string) => fromBase64(tx)),
    };
  }
}
