import { HttpEndpoint, Price } from "@cosmonauts/types";
import { SignerInfo, TxBody } from "../codegen/cosmos/tx/v1beta1/tx";
import { Coin } from "../codegen/cosmos/base/v1beta1/coin";
import { Event } from "../codegen/tendermint/abci/types";

/** Direct/Proto message */
export interface Message<T = any> {
  typeUrl: string;
  value: T;
}

export interface EncodedMessage {
  typeUrl: string;
  value: Uint8Array;
}

/** Amino message */
export interface AminoMessage {
  type: string;
  value: any;
}

export interface Encoder {
  typeUrl: string;
  encode: (data: any) => Uint8Array;
}

export interface AminoConverter {
  typeUrl: string;
  aminoType: string;
  fromAmino: (data: any) => any;
  toAmino: (data: any) => any;
}

export interface StdFee {
  amount: Coin[];
  gas: string;
  /** The granter address that is used for paying with feegrants */
  granter?: string;
  /** The fee payer address. The payer must have signed the transaction. */
  payer?: string;
}

export interface StdSignDoc {
  chain_id: string;
  account_number: string;
  sequence: string;
  fee: StdFee;
  msgs: AminoMessage[];
  memo: string;
}

export type BroadcastMode =
  | "broadcast_tx_async"
  | "broadcast_tx_sync"
  | "broadcast_tx_commit";

export interface CheckTxResult {
  code: number;
  data: string;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gas_wanted: string;
  gas_used: string;
  events: Event[];
  codespace: string;
  sender: string;
  priority: string;
  /**
   * mempool_error is set by CometBFT.
   * ABCI applictions creating a ResponseCheckTX should not set mempool_error.
   */
  mempool_error: string;
}

export interface DeliverTxResult {
  code: number;
  data: string;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gas_wanted: string;
  gas_used: string;
  events: Event[];
  codespace: string;
}

export interface BroadcastResult {
  hash: string;
  add_tx?: {
    code?: number;
    data?: string;
    log?: string;
    codespace?: string;
  };
  check_tx?: CheckTxResult;
  deliver_tx?: DeliverTxResult & { height: string };
}

export interface FeeOptions {
  multiplier?: number;
  gasPrice?: Price | string | "average" | "high" | "low";
}

export interface SignerOptions {
  chainId?: string;
  accountNumber?: bigint;
  sequence?: bigint;
}

export type TxBodyOptions = Partial<
  Pick<
    TxBody,
    "timeoutHeight" | "extensionOptions" | "nonCriticalExtensionOptions"
  >
>;

export interface BroadcastOptions {
  checkTx?: boolean;
  deliverTx?: boolean;
}

export interface QueryClient {
  readonly endpoint: HttpEndpoint;
  getChainId: () => Promise<string>;
  getAccountNumber: () => Promise<bigint>;
  getSequence: () => Promise<bigint>;
  estimateFee: (
    txBody: TxBody,
    signerInfos: SignerInfo[],
    options?: FeeOptions
  ) => Promise<StdFee>;
  broadcast: (
    txBytes: Uint8Array,
    options?: BroadcastOptions
  ) => Promise<BroadcastResult>;
}
