import { MsgEthereumTx, MsgEthereumTxAmino } from "./tx";
import { TraceConfig, TraceConfigAmino, Log, LogAmino, Params, ParamsAmino } from "./evm";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp } from "../../../helpers";
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
  /** address is the ethereum hex address to query the account for. */
  address: string;
}
export interface QueryAccountRequestProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryAccountRequest";
  value: Uint8Array;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestAmino {
  /** address is the ethereum hex address to query the account for. */
  address: string;
}
export interface QueryAccountRequestAminoMsg {
  type: "/ethermint.evm.v1.QueryAccountRequest";
  value: QueryAccountRequestAmino;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
  /** balance is the balance of the EVM denomination. */
  balance: string;
  /** code_hash is the hex-formatted code bytes from the EOA. */
  codeHash: string;
  /** nonce is the account's sequence number. */
  nonce: bigint;
}
export interface QueryAccountResponseProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryAccountResponse";
  value: Uint8Array;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseAmino {
  /** balance is the balance of the EVM denomination. */
  balance: string;
  /** code_hash is the hex-formatted code bytes from the EOA. */
  code_hash: string;
  /** nonce is the account's sequence number. */
  nonce: string;
}
export interface QueryAccountResponseAminoMsg {
  type: "/ethermint.evm.v1.QueryAccountResponse";
  value: QueryAccountResponseAmino;
}
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequest {
  /** address is the ethereum hex address to query the account for. */
  address: string;
}
export interface QueryCosmosAccountRequestProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryCosmosAccountRequest";
  value: Uint8Array;
}
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequestAmino {
  /** address is the ethereum hex address to query the account for. */
  address: string;
}
export interface QueryCosmosAccountRequestAminoMsg {
  type: "/ethermint.evm.v1.QueryCosmosAccountRequest";
  value: QueryCosmosAccountRequestAmino;
}
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponse {
  /** cosmos_address is the cosmos address of the account. */
  cosmosAddress: string;
  /** sequence is the account's sequence number. */
  sequence: bigint;
  /** account_number is the account number */
  accountNumber: bigint;
}
export interface QueryCosmosAccountResponseProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryCosmosAccountResponse";
  value: Uint8Array;
}
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponseAmino {
  /** cosmos_address is the cosmos address of the account. */
  cosmos_address: string;
  /** sequence is the account's sequence number. */
  sequence: string;
  /** account_number is the account number */
  account_number: string;
}
export interface QueryCosmosAccountResponseAminoMsg {
  type: "/ethermint.evm.v1.QueryCosmosAccountResponse";
  value: QueryCosmosAccountResponseAmino;
}
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequest {
  /** cons_address is the validator cons address to query the account for. */
  consAddress: string;
}
export interface QueryValidatorAccountRequestProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryValidatorAccountRequest";
  value: Uint8Array;
}
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequestAmino {
  /** cons_address is the validator cons address to query the account for. */
  cons_address: string;
}
export interface QueryValidatorAccountRequestAminoMsg {
  type: "/ethermint.evm.v1.QueryValidatorAccountRequest";
  value: QueryValidatorAccountRequestAmino;
}
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponse {
  /** account_address is the cosmos address of the account in bech32 format. */
  accountAddress: string;
  /** sequence is the account's sequence number. */
  sequence: bigint;
  /** account_number is the account number */
  accountNumber: bigint;
}
export interface QueryValidatorAccountResponseProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryValidatorAccountResponse";
  value: Uint8Array;
}
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponseAmino {
  /** account_address is the cosmos address of the account in bech32 format. */
  account_address: string;
  /** sequence is the account's sequence number. */
  sequence: string;
  /** account_number is the account number */
  account_number: string;
}
export interface QueryValidatorAccountResponseAminoMsg {
  type: "/ethermint.evm.v1.QueryValidatorAccountResponse";
  value: QueryValidatorAccountResponseAmino;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
  /** address is the ethereum hex address to query the balance for. */
  address: string;
}
export interface QueryBalanceRequestProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryBalanceRequest";
  value: Uint8Array;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequestAmino {
  /** address is the ethereum hex address to query the balance for. */
  address: string;
}
export interface QueryBalanceRequestAminoMsg {
  type: "/ethermint.evm.v1.QueryBalanceRequest";
  value: QueryBalanceRequestAmino;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
  /** balance is the balance of the EVM denomination. */
  balance: string;
}
export interface QueryBalanceResponseProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryBalanceResponse";
  value: Uint8Array;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponseAmino {
  /** balance is the balance of the EVM denomination. */
  balance: string;
}
export interface QueryBalanceResponseAminoMsg {
  type: "/ethermint.evm.v1.QueryBalanceResponse";
  value: QueryBalanceResponseAmino;
}
/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequest {
  /** address is the ethereum hex address to query the storage state for. */
  address: string;
  /** key defines the key of the storage state */
  key: string;
}
export interface QueryStorageRequestProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryStorageRequest";
  value: Uint8Array;
}
/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequestAmino {
  /** address is the ethereum hex address to query the storage state for. */
  address: string;
  /** key defines the key of the storage state */
  key: string;
}
export interface QueryStorageRequestAminoMsg {
  type: "/ethermint.evm.v1.QueryStorageRequest";
  value: QueryStorageRequestAmino;
}
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponse {
  /** value defines the storage state value hash associated with the given key. */
  value: string;
}
export interface QueryStorageResponseProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryStorageResponse";
  value: Uint8Array;
}
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponseAmino {
  /** value defines the storage state value hash associated with the given key. */
  value: string;
}
export interface QueryStorageResponseAminoMsg {
  type: "/ethermint.evm.v1.QueryStorageResponse";
  value: QueryStorageResponseAmino;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequest {
  /** address is the ethereum hex address to query the code for. */
  address: string;
}
export interface QueryCodeRequestProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryCodeRequest";
  value: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequestAmino {
  /** address is the ethereum hex address to query the code for. */
  address: string;
}
export interface QueryCodeRequestAminoMsg {
  type: "/ethermint.evm.v1.QueryCodeRequest";
  value: QueryCodeRequestAmino;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponse {
  /** code represents the code bytes from an ethereum address. */
  code: Uint8Array;
}
export interface QueryCodeResponseProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryCodeResponse";
  value: Uint8Array;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponseAmino {
  /** code represents the code bytes from an ethereum address. */
  code: string;
}
export interface QueryCodeResponseAminoMsg {
  type: "/ethermint.evm.v1.QueryCodeResponse";
  value: QueryCodeResponseAmino;
}
/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequest {
  /** hash is the ethereum transaction hex hash to query the logs for. */
  hash: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryTxLogsRequestProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryTxLogsRequest";
  value: Uint8Array;
}
/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequestAmino {
  /** hash is the ethereum transaction hex hash to query the logs for. */
  hash: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryTxLogsRequestAminoMsg {
  type: "/ethermint.evm.v1.QueryTxLogsRequest";
  value: QueryTxLogsRequestAmino;
}
/** QueryTxLogsResponse is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponse {
  /** logs represents the ethereum logs generated from the given transaction. */
  logs: Log[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryTxLogsResponseProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryTxLogsResponse";
  value: Uint8Array;
}
/** QueryTxLogsResponse is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponseAmino {
  /** logs represents the ethereum logs generated from the given transaction. */
  logs: LogAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryTxLogsResponseAminoMsg {
  type: "/ethermint.evm.v1.QueryTxLogsResponse";
  value: QueryTxLogsResponseAmino;
}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/ethermint.evm.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponse {
  /** params define the evm module parameters. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponseAmino {
  /** params define the evm module parameters. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/ethermint.evm.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** EthCallRequest defines EthCall request */
export interface EthCallRequest {
  /** args uses the same json format as the json rpc api. */
  args: Uint8Array;
  /** gas_cap defines the default gas cap to be used */
  gasCap: bigint;
  /** proposer_address of the requested block in hex format */
  proposerAddress: Uint8Array;
  /** chain_id is the eip155 chain id parsed from the requested block header */
  chainId: bigint;
}
export interface EthCallRequestProtoMsg {
  typeUrl: "/ethermint.evm.v1.EthCallRequest";
  value: Uint8Array;
}
/** EthCallRequest defines EthCall request */
export interface EthCallRequestAmino {
  /** args uses the same json format as the json rpc api. */
  args: string;
  /** gas_cap defines the default gas cap to be used */
  gas_cap: string;
  /** proposer_address of the requested block in hex format */
  proposer_address: string;
  /** chain_id is the eip155 chain id parsed from the requested block header */
  chain_id: string;
}
export interface EthCallRequestAminoMsg {
  type: "/ethermint.evm.v1.EthCallRequest";
  value: EthCallRequestAmino;
}
/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponse {
  /** gas returns the estimated gas */
  gas: bigint;
}
export interface EstimateGasResponseProtoMsg {
  typeUrl: "/ethermint.evm.v1.EstimateGasResponse";
  value: Uint8Array;
}
/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponseAmino {
  /** gas returns the estimated gas */
  gas: string;
}
export interface EstimateGasResponseAminoMsg {
  type: "/ethermint.evm.v1.EstimateGasResponse";
  value: EstimateGasResponseAmino;
}
/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequest {
  /** msg is the MsgEthereumTx for the requested transaction */
  msg?: MsgEthereumTx;
  /** trace_config holds extra parameters to trace functions. */
  traceConfig?: TraceConfig;
  /**
   * predecessors is an array of transactions included in the same block
   * need to be replayed first to get correct context for tracing.
   */
  predecessors: MsgEthereumTx[];
  /** block_number of requested transaction */
  blockNumber: bigint;
  /** block_hash of requested transaction */
  blockHash: string;
  /** block_time of requested transaction */
  blockTime: Date;
  /** proposer_address is the proposer of the requested block */
  proposerAddress: Uint8Array;
  /** chain_id is the the eip155 chain id parsed from the requested block header */
  chainId: bigint;
}
export interface QueryTraceTxRequestProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryTraceTxRequest";
  value: Uint8Array;
}
/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequestAmino {
  /** msg is the MsgEthereumTx for the requested transaction */
  msg?: MsgEthereumTxAmino;
  /** trace_config holds extra parameters to trace functions. */
  trace_config?: TraceConfigAmino;
  /**
   * predecessors is an array of transactions included in the same block
   * need to be replayed first to get correct context for tracing.
   */
  predecessors: MsgEthereumTxAmino[];
  /** block_number of requested transaction */
  block_number: string;
  /** block_hash of requested transaction */
  block_hash: string;
  /** block_time of requested transaction */
  block_time: string;
  /** proposer_address is the proposer of the requested block */
  proposer_address: string;
  /** chain_id is the the eip155 chain id parsed from the requested block header */
  chain_id: string;
}
export interface QueryTraceTxRequestAminoMsg {
  type: "/ethermint.evm.v1.QueryTraceTxRequest";
  value: QueryTraceTxRequestAmino;
}
/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponse {
  /** data is the response serialized in bytes */
  data: Uint8Array;
}
export interface QueryTraceTxResponseProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryTraceTxResponse";
  value: Uint8Array;
}
/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponseAmino {
  /** data is the response serialized in bytes */
  data: string;
}
export interface QueryTraceTxResponseAminoMsg {
  type: "/ethermint.evm.v1.QueryTraceTxResponse";
  value: QueryTraceTxResponseAmino;
}
/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequest {
  /** txs is an array of messages in the block */
  txs: MsgEthereumTx[];
  /** trace_config holds extra parameters to trace functions. */
  traceConfig?: TraceConfig;
  /** block_number of the traced block */
  blockNumber: bigint;
  /** block_hash (hex) of the traced block */
  blockHash: string;
  /** block_time of the traced block */
  blockTime: Date;
  /** proposer_address is the address of the requested block */
  proposerAddress: Uint8Array;
  /** chain_id is the eip155 chain id parsed from the requested block header */
  chainId: bigint;
}
export interface QueryTraceBlockRequestProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryTraceBlockRequest";
  value: Uint8Array;
}
/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequestAmino {
  /** txs is an array of messages in the block */
  txs: MsgEthereumTxAmino[];
  /** trace_config holds extra parameters to trace functions. */
  trace_config?: TraceConfigAmino;
  /** block_number of the traced block */
  block_number: string;
  /** block_hash (hex) of the traced block */
  block_hash: string;
  /** block_time of the traced block */
  block_time: string;
  /** proposer_address is the address of the requested block */
  proposer_address: string;
  /** chain_id is the eip155 chain id parsed from the requested block header */
  chain_id: string;
}
export interface QueryTraceBlockRequestAminoMsg {
  type: "/ethermint.evm.v1.QueryTraceBlockRequest";
  value: QueryTraceBlockRequestAmino;
}
/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponse {
  /** data is the response serialized in bytes */
  data: Uint8Array;
}
export interface QueryTraceBlockResponseProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryTraceBlockResponse";
  value: Uint8Array;
}
/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponseAmino {
  /** data is the response serialized in bytes */
  data: string;
}
export interface QueryTraceBlockResponseAminoMsg {
  type: "/ethermint.evm.v1.QueryTraceBlockResponse";
  value: QueryTraceBlockResponseAmino;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequest {}
export interface QueryBaseFeeRequestProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryBaseFeeRequest";
  value: Uint8Array;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequestAmino {}
export interface QueryBaseFeeRequestAminoMsg {
  type: "/ethermint.evm.v1.QueryBaseFeeRequest";
  value: QueryBaseFeeRequestAmino;
}
/** QueryBaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponse {
  /** base_fee is the EIP1559 base fee */
  baseFee: string;
}
export interface QueryBaseFeeResponseProtoMsg {
  typeUrl: "/ethermint.evm.v1.QueryBaseFeeResponse";
  value: Uint8Array;
}
/** QueryBaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponseAmino {
  /** base_fee is the EIP1559 base fee */
  base_fee: string;
}
export interface QueryBaseFeeResponseAminoMsg {
  type: "/ethermint.evm.v1.QueryBaseFeeResponse";
  value: QueryBaseFeeResponseAmino;
}
function createBaseQueryAccountRequest(): QueryAccountRequest {
  return {
    address: ""
  };
}
export const QueryAccountRequest = {
  typeUrl: "/ethermint.evm.v1.QueryAccountRequest",
  is(o: any): o is QueryAccountRequest {
    return o && (o.$typeUrl === QueryAccountRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryAccountRequestAmino {
    return o && (o.$typeUrl === QueryAccountRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAccountRequestAmino): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAccountRequest): QueryAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountRequestAminoMsg): QueryAccountRequest {
    return QueryAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountRequestProtoMsg): QueryAccountRequest {
    return QueryAccountRequest.decode(message.value);
  },
  toProto(message: QueryAccountRequest): Uint8Array {
    return QueryAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountRequest): QueryAccountRequestProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryAccountRequest",
      value: QueryAccountRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryAccountResponse(): QueryAccountResponse {
  return {
    balance: "",
    codeHash: "",
    nonce: BigInt(0)
  };
}
export const QueryAccountResponse = {
  typeUrl: "/ethermint.evm.v1.QueryAccountResponse",
  is(o: any): o is QueryAccountResponse {
    return o && (o.$typeUrl === QueryAccountResponse.typeUrl || typeof o.balance === "string" && typeof o.codeHash === "string" && typeof o.nonce === "bigint");
  },
  isAmino(o: any): o is QueryAccountResponseAmino {
    return o && (o.$typeUrl === QueryAccountResponse.typeUrl || typeof o.balance === "string" && typeof o.code_hash === "string" && typeof o.nonce === "bigint");
  },
  encode(message: QueryAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }
    if (message.codeHash !== "") {
      writer.uint32(18).string(message.codeHash);
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(24).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = reader.string();
          break;
        case 2:
          message.codeHash = reader.string();
          break;
        case 3:
          message.nonce = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    message.balance = object.balance ?? "";
    message.codeHash = object.codeHash ?? "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAccountResponseAmino): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    if (object.code_hash !== undefined && object.code_hash !== null) {
      message.codeHash = object.code_hash;
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    return message;
  },
  toAmino(message: QueryAccountResponse): QueryAccountResponseAmino {
    const obj: any = {};
    obj.balance = message.balance === "" ? undefined : message.balance;
    obj.code_hash = message.codeHash === "" ? undefined : message.codeHash;
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountResponseAminoMsg): QueryAccountResponse {
    return QueryAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountResponseProtoMsg): QueryAccountResponse {
    return QueryAccountResponse.decode(message.value);
  },
  toProto(message: QueryAccountResponse): Uint8Array {
    return QueryAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountResponse): QueryAccountResponseProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryAccountResponse",
      value: QueryAccountResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryCosmosAccountRequest(): QueryCosmosAccountRequest {
  return {
    address: ""
  };
}
export const QueryCosmosAccountRequest = {
  typeUrl: "/ethermint.evm.v1.QueryCosmosAccountRequest",
  is(o: any): o is QueryCosmosAccountRequest {
    return o && (o.$typeUrl === QueryCosmosAccountRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryCosmosAccountRequestAmino {
    return o && (o.$typeUrl === QueryCosmosAccountRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryCosmosAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCosmosAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCosmosAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCosmosAccountRequest>): QueryCosmosAccountRequest {
    const message = createBaseQueryCosmosAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryCosmosAccountRequestAmino): QueryCosmosAccountRequest {
    const message = createBaseQueryCosmosAccountRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryCosmosAccountRequest): QueryCosmosAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryCosmosAccountRequestAminoMsg): QueryCosmosAccountRequest {
    return QueryCosmosAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCosmosAccountRequestProtoMsg): QueryCosmosAccountRequest {
    return QueryCosmosAccountRequest.decode(message.value);
  },
  toProto(message: QueryCosmosAccountRequest): Uint8Array {
    return QueryCosmosAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCosmosAccountRequest): QueryCosmosAccountRequestProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryCosmosAccountRequest",
      value: QueryCosmosAccountRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryCosmosAccountResponse(): QueryCosmosAccountResponse {
  return {
    cosmosAddress: "",
    sequence: BigInt(0),
    accountNumber: BigInt(0)
  };
}
export const QueryCosmosAccountResponse = {
  typeUrl: "/ethermint.evm.v1.QueryCosmosAccountResponse",
  is(o: any): o is QueryCosmosAccountResponse {
    return o && (o.$typeUrl === QueryCosmosAccountResponse.typeUrl || typeof o.cosmosAddress === "string" && typeof o.sequence === "bigint" && typeof o.accountNumber === "bigint");
  },
  isAmino(o: any): o is QueryCosmosAccountResponseAmino {
    return o && (o.$typeUrl === QueryCosmosAccountResponse.typeUrl || typeof o.cosmos_address === "string" && typeof o.sequence === "bigint" && typeof o.account_number === "bigint");
  },
  encode(message: QueryCosmosAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cosmosAddress !== "") {
      writer.uint32(10).string(message.cosmosAddress);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.accountNumber !== BigInt(0)) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCosmosAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCosmosAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cosmosAddress = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        case 3:
          message.accountNumber = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCosmosAccountResponse>): QueryCosmosAccountResponse {
    const message = createBaseQueryCosmosAccountResponse();
    message.cosmosAddress = object.cosmosAddress ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCosmosAccountResponseAmino): QueryCosmosAccountResponse {
    const message = createBaseQueryCosmosAccountResponse();
    if (object.cosmos_address !== undefined && object.cosmos_address !== null) {
      message.cosmosAddress = object.cosmos_address;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.account_number !== undefined && object.account_number !== null) {
      message.accountNumber = BigInt(object.account_number);
    }
    return message;
  },
  toAmino(message: QueryCosmosAccountResponse): QueryCosmosAccountResponseAmino {
    const obj: any = {};
    obj.cosmos_address = message.cosmosAddress === "" ? undefined : message.cosmosAddress;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    obj.account_number = message.accountNumber !== BigInt(0) ? message.accountNumber?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCosmosAccountResponseAminoMsg): QueryCosmosAccountResponse {
    return QueryCosmosAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCosmosAccountResponseProtoMsg): QueryCosmosAccountResponse {
    return QueryCosmosAccountResponse.decode(message.value);
  },
  toProto(message: QueryCosmosAccountResponse): Uint8Array {
    return QueryCosmosAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCosmosAccountResponse): QueryCosmosAccountResponseProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryCosmosAccountResponse",
      value: QueryCosmosAccountResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryValidatorAccountRequest(): QueryValidatorAccountRequest {
  return {
    consAddress: ""
  };
}
export const QueryValidatorAccountRequest = {
  typeUrl: "/ethermint.evm.v1.QueryValidatorAccountRequest",
  is(o: any): o is QueryValidatorAccountRequest {
    return o && (o.$typeUrl === QueryValidatorAccountRequest.typeUrl || typeof o.consAddress === "string");
  },
  isAmino(o: any): o is QueryValidatorAccountRequestAmino {
    return o && (o.$typeUrl === QueryValidatorAccountRequest.typeUrl || typeof o.cons_address === "string");
  },
  encode(message: QueryValidatorAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consAddress !== "") {
      writer.uint32(10).string(message.consAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValidatorAccountRequest>): QueryValidatorAccountRequest {
    const message = createBaseQueryValidatorAccountRequest();
    message.consAddress = object.consAddress ?? "";
    return message;
  },
  fromAmino(object: QueryValidatorAccountRequestAmino): QueryValidatorAccountRequest {
    const message = createBaseQueryValidatorAccountRequest();
    if (object.cons_address !== undefined && object.cons_address !== null) {
      message.consAddress = object.cons_address;
    }
    return message;
  },
  toAmino(message: QueryValidatorAccountRequest): QueryValidatorAccountRequestAmino {
    const obj: any = {};
    obj.cons_address = message.consAddress === "" ? undefined : message.consAddress;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorAccountRequestAminoMsg): QueryValidatorAccountRequest {
    return QueryValidatorAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorAccountRequestProtoMsg): QueryValidatorAccountRequest {
    return QueryValidatorAccountRequest.decode(message.value);
  },
  toProto(message: QueryValidatorAccountRequest): Uint8Array {
    return QueryValidatorAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorAccountRequest): QueryValidatorAccountRequestProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryValidatorAccountRequest",
      value: QueryValidatorAccountRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryValidatorAccountResponse(): QueryValidatorAccountResponse {
  return {
    accountAddress: "",
    sequence: BigInt(0),
    accountNumber: BigInt(0)
  };
}
export const QueryValidatorAccountResponse = {
  typeUrl: "/ethermint.evm.v1.QueryValidatorAccountResponse",
  is(o: any): o is QueryValidatorAccountResponse {
    return o && (o.$typeUrl === QueryValidatorAccountResponse.typeUrl || typeof o.accountAddress === "string" && typeof o.sequence === "bigint" && typeof o.accountNumber === "bigint");
  },
  isAmino(o: any): o is QueryValidatorAccountResponseAmino {
    return o && (o.$typeUrl === QueryValidatorAccountResponse.typeUrl || typeof o.account_address === "string" && typeof o.sequence === "bigint" && typeof o.account_number === "bigint");
  },
  encode(message: QueryValidatorAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.accountNumber !== BigInt(0)) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        case 3:
          message.accountNumber = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValidatorAccountResponse>): QueryValidatorAccountResponse {
    const message = createBaseQueryValidatorAccountResponse();
    message.accountAddress = object.accountAddress ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryValidatorAccountResponseAmino): QueryValidatorAccountResponse {
    const message = createBaseQueryValidatorAccountResponse();
    if (object.account_address !== undefined && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.account_number !== undefined && object.account_number !== null) {
      message.accountNumber = BigInt(object.account_number);
    }
    return message;
  },
  toAmino(message: QueryValidatorAccountResponse): QueryValidatorAccountResponseAmino {
    const obj: any = {};
    obj.account_address = message.accountAddress === "" ? undefined : message.accountAddress;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    obj.account_number = message.accountNumber !== BigInt(0) ? message.accountNumber?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorAccountResponseAminoMsg): QueryValidatorAccountResponse {
    return QueryValidatorAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorAccountResponseProtoMsg): QueryValidatorAccountResponse {
    return QueryValidatorAccountResponse.decode(message.value);
  },
  toProto(message: QueryValidatorAccountResponse): Uint8Array {
    return QueryValidatorAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorAccountResponse): QueryValidatorAccountResponseProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryValidatorAccountResponse",
      value: QueryValidatorAccountResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    address: ""
  };
}
export const QueryBalanceRequest = {
  typeUrl: "/ethermint.evm.v1.QueryBalanceRequest",
  is(o: any): o is QueryBalanceRequest {
    return o && (o.$typeUrl === QueryBalanceRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryBalanceRequestAmino {
    return o && (o.$typeUrl === QueryBalanceRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    balance: ""
  };
}
export const QueryBalanceResponse = {
  typeUrl: "/ethermint.evm.v1.QueryBalanceResponse",
  is(o: any): o is QueryBalanceResponse {
    return o && (o.$typeUrl === QueryBalanceResponse.typeUrl || typeof o.balance === "string");
  },
  isAmino(o: any): o is QueryBalanceResponseAmino {
    return o && (o.$typeUrl === QueryBalanceResponse.typeUrl || typeof o.balance === "string");
  },
  encode(message: QueryBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance ?? "";
    return message;
  },
  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    return message;
  },
  toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino {
    const obj: any = {};
    obj.balance = message.balance === "" ? undefined : message.balance;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryStorageRequest(): QueryStorageRequest {
  return {
    address: "",
    key: ""
  };
}
export const QueryStorageRequest = {
  typeUrl: "/ethermint.evm.v1.QueryStorageRequest",
  is(o: any): o is QueryStorageRequest {
    return o && (o.$typeUrl === QueryStorageRequest.typeUrl || typeof o.address === "string" && typeof o.key === "string");
  },
  isAmino(o: any): o is QueryStorageRequestAmino {
    return o && (o.$typeUrl === QueryStorageRequest.typeUrl || typeof o.address === "string" && typeof o.key === "string");
  },
  encode(message: QueryStorageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStorageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryStorageRequest>): QueryStorageRequest {
    const message = createBaseQueryStorageRequest();
    message.address = object.address ?? "";
    message.key = object.key ?? "";
    return message;
  },
  fromAmino(object: QueryStorageRequestAmino): QueryStorageRequest {
    const message = createBaseQueryStorageRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    return message;
  },
  toAmino(message: QueryStorageRequest): QueryStorageRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.key = message.key === "" ? undefined : message.key;
    return obj;
  },
  fromAminoMsg(object: QueryStorageRequestAminoMsg): QueryStorageRequest {
    return QueryStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorageRequestProtoMsg): QueryStorageRequest {
    return QueryStorageRequest.decode(message.value);
  },
  toProto(message: QueryStorageRequest): Uint8Array {
    return QueryStorageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageRequest): QueryStorageRequestProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryStorageRequest",
      value: QueryStorageRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryStorageResponse(): QueryStorageResponse {
  return {
    value: ""
  };
}
export const QueryStorageResponse = {
  typeUrl: "/ethermint.evm.v1.QueryStorageResponse",
  is(o: any): o is QueryStorageResponse {
    return o && (o.$typeUrl === QueryStorageResponse.typeUrl || typeof o.value === "string");
  },
  isAmino(o: any): o is QueryStorageResponseAmino {
    return o && (o.$typeUrl === QueryStorageResponse.typeUrl || typeof o.value === "string");
  },
  encode(message: QueryStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryStorageResponse>): QueryStorageResponse {
    const message = createBaseQueryStorageResponse();
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: QueryStorageResponseAmino): QueryStorageResponse {
    const message = createBaseQueryStorageResponse();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: QueryStorageResponse): QueryStorageResponseAmino {
    const obj: any = {};
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: QueryStorageResponseAminoMsg): QueryStorageResponse {
    return QueryStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorageResponseProtoMsg): QueryStorageResponse {
    return QueryStorageResponse.decode(message.value);
  },
  toProto(message: QueryStorageResponse): Uint8Array {
    return QueryStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageResponse): QueryStorageResponseProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryStorageResponse",
      value: QueryStorageResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryCodeRequest(): QueryCodeRequest {
  return {
    address: ""
  };
}
export const QueryCodeRequest = {
  typeUrl: "/ethermint.evm.v1.QueryCodeRequest",
  is(o: any): o is QueryCodeRequest {
    return o && (o.$typeUrl === QueryCodeRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryCodeRequestAmino {
    return o && (o.$typeUrl === QueryCodeRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryCodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCodeRequest>): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryCodeRequestAmino): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryCodeRequest): QueryCodeRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryCodeRequestAminoMsg): QueryCodeRequest {
    return QueryCodeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCodeRequestProtoMsg): QueryCodeRequest {
    return QueryCodeRequest.decode(message.value);
  },
  toProto(message: QueryCodeRequest): Uint8Array {
    return QueryCodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeRequest): QueryCodeRequestProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryCodeRequest",
      value: QueryCodeRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    code: new Uint8Array()
  };
}
export const QueryCodeResponse = {
  typeUrl: "/ethermint.evm.v1.QueryCodeResponse",
  is(o: any): o is QueryCodeResponse {
    return o && (o.$typeUrl === QueryCodeResponse.typeUrl || o.code instanceof Uint8Array || typeof o.code === "string");
  },
  isAmino(o: any): o is QueryCodeResponseAmino {
    return o && (o.$typeUrl === QueryCodeResponse.typeUrl || o.code instanceof Uint8Array || typeof o.code === "string");
  },
  encode(message: QueryCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code.length !== 0) {
      writer.uint32(10).bytes(message.code);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCodeResponse>): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    message.code = object.code ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryCodeResponseAmino): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    if (object.code !== undefined && object.code !== null) {
      message.code = bytesFromBase64(object.code);
    }
    return message;
  },
  toAmino(message: QueryCodeResponse): QueryCodeResponseAmino {
    const obj: any = {};
    obj.code = message.code ? base64FromBytes(message.code) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCodeResponseAminoMsg): QueryCodeResponse {
    return QueryCodeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCodeResponseProtoMsg): QueryCodeResponse {
    return QueryCodeResponse.decode(message.value);
  },
  toProto(message: QueryCodeResponse): Uint8Array {
    return QueryCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeResponse): QueryCodeResponseProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryCodeResponse",
      value: QueryCodeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTxLogsRequest(): QueryTxLogsRequest {
  return {
    hash: "",
    pagination: undefined
  };
}
export const QueryTxLogsRequest = {
  typeUrl: "/ethermint.evm.v1.QueryTxLogsRequest",
  is(o: any): o is QueryTxLogsRequest {
    return o && (o.$typeUrl === QueryTxLogsRequest.typeUrl || typeof o.hash === "string");
  },
  isAmino(o: any): o is QueryTxLogsRequestAmino {
    return o && (o.$typeUrl === QueryTxLogsRequest.typeUrl || typeof o.hash === "string");
  },
  encode(message: QueryTxLogsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTxLogsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTxLogsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTxLogsRequest>): QueryTxLogsRequest {
    const message = createBaseQueryTxLogsRequest();
    message.hash = object.hash ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTxLogsRequestAmino): QueryTxLogsRequest {
    const message = createBaseQueryTxLogsRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTxLogsRequest): QueryTxLogsRequestAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTxLogsRequestAminoMsg): QueryTxLogsRequest {
    return QueryTxLogsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTxLogsRequestProtoMsg): QueryTxLogsRequest {
    return QueryTxLogsRequest.decode(message.value);
  },
  toProto(message: QueryTxLogsRequest): Uint8Array {
    return QueryTxLogsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTxLogsRequest): QueryTxLogsRequestProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryTxLogsRequest",
      value: QueryTxLogsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryTxLogsResponse(): QueryTxLogsResponse {
  return {
    logs: [],
    pagination: undefined
  };
}
export const QueryTxLogsResponse = {
  typeUrl: "/ethermint.evm.v1.QueryTxLogsResponse",
  is(o: any): o is QueryTxLogsResponse {
    return o && (o.$typeUrl === QueryTxLogsResponse.typeUrl || Array.isArray(o.logs) && (!o.logs.length || Log.is(o.logs[0])));
  },
  isAmino(o: any): o is QueryTxLogsResponseAmino {
    return o && (o.$typeUrl === QueryTxLogsResponse.typeUrl || Array.isArray(o.logs) && (!o.logs.length || Log.isAmino(o.logs[0])));
  },
  encode(message: QueryTxLogsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTxLogsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTxLogsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logs.push(Log.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTxLogsResponse>): QueryTxLogsResponse {
    const message = createBaseQueryTxLogsResponse();
    message.logs = object.logs?.map(e => Log.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTxLogsResponseAmino): QueryTxLogsResponse {
    const message = createBaseQueryTxLogsResponse();
    message.logs = object.logs?.map(e => Log.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTxLogsResponse): QueryTxLogsResponseAmino {
    const obj: any = {};
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? Log.toAmino(e) : undefined);
    } else {
      obj.logs = message.logs;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTxLogsResponseAminoMsg): QueryTxLogsResponse {
    return QueryTxLogsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTxLogsResponseProtoMsg): QueryTxLogsResponse {
    return QueryTxLogsResponse.decode(message.value);
  },
  toProto(message: QueryTxLogsResponse): Uint8Array {
    return QueryTxLogsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTxLogsResponse): QueryTxLogsResponseProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryTxLogsResponse",
      value: QueryTxLogsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Log.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/ethermint.evm.v1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/ethermint.evm.v1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Params.registerTypeUrl();
  }
};
function createBaseEthCallRequest(): EthCallRequest {
  return {
    args: new Uint8Array(),
    gasCap: BigInt(0),
    proposerAddress: new Uint8Array(),
    chainId: BigInt(0)
  };
}
export const EthCallRequest = {
  typeUrl: "/ethermint.evm.v1.EthCallRequest",
  is(o: any): o is EthCallRequest {
    return o && (o.$typeUrl === EthCallRequest.typeUrl || (o.args instanceof Uint8Array || typeof o.args === "string") && typeof o.gasCap === "bigint" && (o.proposerAddress instanceof Uint8Array || typeof o.proposerAddress === "string") && typeof o.chainId === "bigint");
  },
  isAmino(o: any): o is EthCallRequestAmino {
    return o && (o.$typeUrl === EthCallRequest.typeUrl || (o.args instanceof Uint8Array || typeof o.args === "string") && typeof o.gas_cap === "bigint" && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string") && typeof o.chain_id === "bigint");
  },
  encode(message: EthCallRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.args.length !== 0) {
      writer.uint32(10).bytes(message.args);
    }
    if (message.gasCap !== BigInt(0)) {
      writer.uint32(16).uint64(message.gasCap);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(26).bytes(message.proposerAddress);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(32).int64(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EthCallRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEthCallRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.args = reader.bytes();
          break;
        case 2:
          message.gasCap = reader.uint64();
          break;
        case 3:
          message.proposerAddress = reader.bytes();
          break;
        case 4:
          message.chainId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EthCallRequest>): EthCallRequest {
    const message = createBaseEthCallRequest();
    message.args = object.args ?? new Uint8Array();
    message.gasCap = object.gasCap !== undefined && object.gasCap !== null ? BigInt(object.gasCap.toString()) : BigInt(0);
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EthCallRequestAmino): EthCallRequest {
    const message = createBaseEthCallRequest();
    if (object.args !== undefined && object.args !== null) {
      message.args = bytesFromBase64(object.args);
    }
    if (object.gas_cap !== undefined && object.gas_cap !== null) {
      message.gasCap = BigInt(object.gas_cap);
    }
    if (object.proposer_address !== undefined && object.proposer_address !== null) {
      message.proposerAddress = bytesFromBase64(object.proposer_address);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    return message;
  },
  toAmino(message: EthCallRequest): EthCallRequestAmino {
    const obj: any = {};
    obj.args = message.args ? base64FromBytes(message.args) : undefined;
    obj.gas_cap = message.gasCap !== BigInt(0) ? message.gasCap?.toString() : undefined;
    obj.proposer_address = message.proposerAddress ? base64FromBytes(message.proposerAddress) : undefined;
    obj.chain_id = message.chainId !== BigInt(0) ? message.chainId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EthCallRequestAminoMsg): EthCallRequest {
    return EthCallRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EthCallRequestProtoMsg): EthCallRequest {
    return EthCallRequest.decode(message.value);
  },
  toProto(message: EthCallRequest): Uint8Array {
    return EthCallRequest.encode(message).finish();
  },
  toProtoMsg(message: EthCallRequest): EthCallRequestProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.EthCallRequest",
      value: EthCallRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEstimateGasResponse(): EstimateGasResponse {
  return {
    gas: BigInt(0)
  };
}
export const EstimateGasResponse = {
  typeUrl: "/ethermint.evm.v1.EstimateGasResponse",
  is(o: any): o is EstimateGasResponse {
    return o && (o.$typeUrl === EstimateGasResponse.typeUrl || typeof o.gas === "bigint");
  },
  isAmino(o: any): o is EstimateGasResponseAmino {
    return o && (o.$typeUrl === EstimateGasResponse.typeUrl || typeof o.gas === "bigint");
  },
  encode(message: EstimateGasResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gas !== BigInt(0)) {
      writer.uint32(8).uint64(message.gas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateGasResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateGasResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gas = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EstimateGasResponse>): EstimateGasResponse {
    const message = createBaseEstimateGasResponse();
    message.gas = object.gas !== undefined && object.gas !== null ? BigInt(object.gas.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EstimateGasResponseAmino): EstimateGasResponse {
    const message = createBaseEstimateGasResponse();
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = BigInt(object.gas);
    }
    return message;
  },
  toAmino(message: EstimateGasResponse): EstimateGasResponseAmino {
    const obj: any = {};
    obj.gas = message.gas !== BigInt(0) ? message.gas?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EstimateGasResponseAminoMsg): EstimateGasResponse {
    return EstimateGasResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: EstimateGasResponseProtoMsg): EstimateGasResponse {
    return EstimateGasResponse.decode(message.value);
  },
  toProto(message: EstimateGasResponse): Uint8Array {
    return EstimateGasResponse.encode(message).finish();
  },
  toProtoMsg(message: EstimateGasResponse): EstimateGasResponseProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.EstimateGasResponse",
      value: EstimateGasResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTraceTxRequest(): QueryTraceTxRequest {
  return {
    msg: undefined,
    traceConfig: undefined,
    predecessors: [],
    blockNumber: BigInt(0),
    blockHash: "",
    blockTime: new Date(),
    proposerAddress: new Uint8Array(),
    chainId: BigInt(0)
  };
}
export const QueryTraceTxRequest = {
  typeUrl: "/ethermint.evm.v1.QueryTraceTxRequest",
  is(o: any): o is QueryTraceTxRequest {
    return o && (o.$typeUrl === QueryTraceTxRequest.typeUrl || Array.isArray(o.predecessors) && (!o.predecessors.length || MsgEthereumTx.is(o.predecessors[0])) && typeof o.blockNumber === "bigint" && typeof o.blockHash === "string" && Timestamp.is(o.blockTime) && (o.proposerAddress instanceof Uint8Array || typeof o.proposerAddress === "string") && typeof o.chainId === "bigint");
  },
  isAmino(o: any): o is QueryTraceTxRequestAmino {
    return o && (o.$typeUrl === QueryTraceTxRequest.typeUrl || Array.isArray(o.predecessors) && (!o.predecessors.length || MsgEthereumTx.isAmino(o.predecessors[0])) && typeof o.block_number === "bigint" && typeof o.block_hash === "string" && Timestamp.isAmino(o.block_time) && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string") && typeof o.chain_id === "bigint");
  },
  encode(message: QueryTraceTxRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg !== undefined) {
      MsgEthereumTx.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    if (message.traceConfig !== undefined) {
      TraceConfig.encode(message.traceConfig, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.predecessors) {
      MsgEthereumTx.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.blockNumber !== BigInt(0)) {
      writer.uint32(40).int64(message.blockNumber);
    }
    if (message.blockHash !== "") {
      writer.uint32(50).string(message.blockHash);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(58).fork()).ldelim();
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(72).int64(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraceTxRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraceTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = MsgEthereumTx.decode(reader, reader.uint32());
          break;
        case 3:
          message.traceConfig = TraceConfig.decode(reader, reader.uint32());
          break;
        case 4:
          message.predecessors.push(MsgEthereumTx.decode(reader, reader.uint32()));
          break;
        case 5:
          message.blockNumber = reader.int64();
          break;
        case 6:
          message.blockHash = reader.string();
          break;
        case 7:
          message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        case 9:
          message.chainId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTraceTxRequest>): QueryTraceTxRequest {
    const message = createBaseQueryTraceTxRequest();
    message.msg = object.msg !== undefined && object.msg !== null ? MsgEthereumTx.fromPartial(object.msg) : undefined;
    message.traceConfig = object.traceConfig !== undefined && object.traceConfig !== null ? TraceConfig.fromPartial(object.traceConfig) : undefined;
    message.predecessors = object.predecessors?.map(e => MsgEthereumTx.fromPartial(e)) || [];
    message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? BigInt(object.blockNumber.toString()) : BigInt(0);
    message.blockHash = object.blockHash ?? "";
    message.blockTime = object.blockTime ?? undefined;
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTraceTxRequestAmino): QueryTraceTxRequest {
    const message = createBaseQueryTraceTxRequest();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgEthereumTx.fromAmino(object.msg);
    }
    if (object.trace_config !== undefined && object.trace_config !== null) {
      message.traceConfig = TraceConfig.fromAmino(object.trace_config);
    }
    message.predecessors = object.predecessors?.map(e => MsgEthereumTx.fromAmino(e)) || [];
    if (object.block_number !== undefined && object.block_number !== null) {
      message.blockNumber = BigInt(object.block_number);
    }
    if (object.block_hash !== undefined && object.block_hash !== null) {
      message.blockHash = object.block_hash;
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = fromTimestamp(Timestamp.fromAmino(object.block_time));
    }
    if (object.proposer_address !== undefined && object.proposer_address !== null) {
      message.proposerAddress = bytesFromBase64(object.proposer_address);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    return message;
  },
  toAmino(message: QueryTraceTxRequest): QueryTraceTxRequestAmino {
    const obj: any = {};
    obj.msg = message.msg ? MsgEthereumTx.toAmino(message.msg) : undefined;
    obj.trace_config = message.traceConfig ? TraceConfig.toAmino(message.traceConfig) : undefined;
    if (message.predecessors) {
      obj.predecessors = message.predecessors.map(e => e ? MsgEthereumTx.toAmino(e) : undefined);
    } else {
      obj.predecessors = message.predecessors;
    }
    obj.block_number = message.blockNumber !== BigInt(0) ? message.blockNumber?.toString() : undefined;
    obj.block_hash = message.blockHash === "" ? undefined : message.blockHash;
    obj.block_time = message.blockTime ? Timestamp.toAmino(toTimestamp(message.blockTime)) : undefined;
    obj.proposer_address = message.proposerAddress ? base64FromBytes(message.proposerAddress) : undefined;
    obj.chain_id = message.chainId !== BigInt(0) ? message.chainId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTraceTxRequestAminoMsg): QueryTraceTxRequest {
    return QueryTraceTxRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraceTxRequestProtoMsg): QueryTraceTxRequest {
    return QueryTraceTxRequest.decode(message.value);
  },
  toProto(message: QueryTraceTxRequest): Uint8Array {
    return QueryTraceTxRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraceTxRequest): QueryTraceTxRequestProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryTraceTxRequest",
      value: QueryTraceTxRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    MsgEthereumTx.registerTypeUrl();
    TraceConfig.registerTypeUrl();
  }
};
function createBaseQueryTraceTxResponse(): QueryTraceTxResponse {
  return {
    data: new Uint8Array()
  };
}
export const QueryTraceTxResponse = {
  typeUrl: "/ethermint.evm.v1.QueryTraceTxResponse",
  is(o: any): o is QueryTraceTxResponse {
    return o && (o.$typeUrl === QueryTraceTxResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isAmino(o: any): o is QueryTraceTxResponseAmino {
    return o && (o.$typeUrl === QueryTraceTxResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  encode(message: QueryTraceTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraceTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraceTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTraceTxResponse>): QueryTraceTxResponse {
    const message = createBaseQueryTraceTxResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryTraceTxResponseAmino): QueryTraceTxResponse {
    const message = createBaseQueryTraceTxResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryTraceTxResponse): QueryTraceTxResponseAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTraceTxResponseAminoMsg): QueryTraceTxResponse {
    return QueryTraceTxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraceTxResponseProtoMsg): QueryTraceTxResponse {
    return QueryTraceTxResponse.decode(message.value);
  },
  toProto(message: QueryTraceTxResponse): Uint8Array {
    return QueryTraceTxResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTraceTxResponse): QueryTraceTxResponseProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryTraceTxResponse",
      value: QueryTraceTxResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTraceBlockRequest(): QueryTraceBlockRequest {
  return {
    txs: [],
    traceConfig: undefined,
    blockNumber: BigInt(0),
    blockHash: "",
    blockTime: new Date(),
    proposerAddress: new Uint8Array(),
    chainId: BigInt(0)
  };
}
export const QueryTraceBlockRequest = {
  typeUrl: "/ethermint.evm.v1.QueryTraceBlockRequest",
  is(o: any): o is QueryTraceBlockRequest {
    return o && (o.$typeUrl === QueryTraceBlockRequest.typeUrl || Array.isArray(o.txs) && (!o.txs.length || MsgEthereumTx.is(o.txs[0])) && typeof o.blockNumber === "bigint" && typeof o.blockHash === "string" && Timestamp.is(o.blockTime) && (o.proposerAddress instanceof Uint8Array || typeof o.proposerAddress === "string") && typeof o.chainId === "bigint");
  },
  isAmino(o: any): o is QueryTraceBlockRequestAmino {
    return o && (o.$typeUrl === QueryTraceBlockRequest.typeUrl || Array.isArray(o.txs) && (!o.txs.length || MsgEthereumTx.isAmino(o.txs[0])) && typeof o.block_number === "bigint" && typeof o.block_hash === "string" && Timestamp.isAmino(o.block_time) && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string") && typeof o.chain_id === "bigint");
  },
  encode(message: QueryTraceBlockRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      MsgEthereumTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.traceConfig !== undefined) {
      TraceConfig.encode(message.traceConfig, writer.uint32(26).fork()).ldelim();
    }
    if (message.blockNumber !== BigInt(0)) {
      writer.uint32(40).int64(message.blockNumber);
    }
    if (message.blockHash !== "") {
      writer.uint32(50).string(message.blockHash);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(58).fork()).ldelim();
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(72).int64(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraceBlockRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraceBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(MsgEthereumTx.decode(reader, reader.uint32()));
          break;
        case 3:
          message.traceConfig = TraceConfig.decode(reader, reader.uint32());
          break;
        case 5:
          message.blockNumber = reader.int64();
          break;
        case 6:
          message.blockHash = reader.string();
          break;
        case 7:
          message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        case 9:
          message.chainId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTraceBlockRequest>): QueryTraceBlockRequest {
    const message = createBaseQueryTraceBlockRequest();
    message.txs = object.txs?.map(e => MsgEthereumTx.fromPartial(e)) || [];
    message.traceConfig = object.traceConfig !== undefined && object.traceConfig !== null ? TraceConfig.fromPartial(object.traceConfig) : undefined;
    message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? BigInt(object.blockNumber.toString()) : BigInt(0);
    message.blockHash = object.blockHash ?? "";
    message.blockTime = object.blockTime ?? undefined;
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTraceBlockRequestAmino): QueryTraceBlockRequest {
    const message = createBaseQueryTraceBlockRequest();
    message.txs = object.txs?.map(e => MsgEthereumTx.fromAmino(e)) || [];
    if (object.trace_config !== undefined && object.trace_config !== null) {
      message.traceConfig = TraceConfig.fromAmino(object.trace_config);
    }
    if (object.block_number !== undefined && object.block_number !== null) {
      message.blockNumber = BigInt(object.block_number);
    }
    if (object.block_hash !== undefined && object.block_hash !== null) {
      message.blockHash = object.block_hash;
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = fromTimestamp(Timestamp.fromAmino(object.block_time));
    }
    if (object.proposer_address !== undefined && object.proposer_address !== null) {
      message.proposerAddress = bytesFromBase64(object.proposer_address);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    return message;
  },
  toAmino(message: QueryTraceBlockRequest): QueryTraceBlockRequestAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? MsgEthereumTx.toAmino(e) : undefined);
    } else {
      obj.txs = message.txs;
    }
    obj.trace_config = message.traceConfig ? TraceConfig.toAmino(message.traceConfig) : undefined;
    obj.block_number = message.blockNumber !== BigInt(0) ? message.blockNumber?.toString() : undefined;
    obj.block_hash = message.blockHash === "" ? undefined : message.blockHash;
    obj.block_time = message.blockTime ? Timestamp.toAmino(toTimestamp(message.blockTime)) : undefined;
    obj.proposer_address = message.proposerAddress ? base64FromBytes(message.proposerAddress) : undefined;
    obj.chain_id = message.chainId !== BigInt(0) ? message.chainId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTraceBlockRequestAminoMsg): QueryTraceBlockRequest {
    return QueryTraceBlockRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraceBlockRequestProtoMsg): QueryTraceBlockRequest {
    return QueryTraceBlockRequest.decode(message.value);
  },
  toProto(message: QueryTraceBlockRequest): Uint8Array {
    return QueryTraceBlockRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraceBlockRequest): QueryTraceBlockRequestProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryTraceBlockRequest",
      value: QueryTraceBlockRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    MsgEthereumTx.registerTypeUrl();
    TraceConfig.registerTypeUrl();
  }
};
function createBaseQueryTraceBlockResponse(): QueryTraceBlockResponse {
  return {
    data: new Uint8Array()
  };
}
export const QueryTraceBlockResponse = {
  typeUrl: "/ethermint.evm.v1.QueryTraceBlockResponse",
  is(o: any): o is QueryTraceBlockResponse {
    return o && (o.$typeUrl === QueryTraceBlockResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isAmino(o: any): o is QueryTraceBlockResponseAmino {
    return o && (o.$typeUrl === QueryTraceBlockResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  encode(message: QueryTraceBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTraceBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraceBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTraceBlockResponse>): QueryTraceBlockResponse {
    const message = createBaseQueryTraceBlockResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryTraceBlockResponseAmino): QueryTraceBlockResponse {
    const message = createBaseQueryTraceBlockResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryTraceBlockResponse): QueryTraceBlockResponseAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTraceBlockResponseAminoMsg): QueryTraceBlockResponse {
    return QueryTraceBlockResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraceBlockResponseProtoMsg): QueryTraceBlockResponse {
    return QueryTraceBlockResponse.decode(message.value);
  },
  toProto(message: QueryTraceBlockResponse): Uint8Array {
    return QueryTraceBlockResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTraceBlockResponse): QueryTraceBlockResponseProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryTraceBlockResponse",
      value: QueryTraceBlockResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryBaseFeeRequest(): QueryBaseFeeRequest {
  return {};
}
export const QueryBaseFeeRequest = {
  typeUrl: "/ethermint.evm.v1.QueryBaseFeeRequest",
  is(o: any): o is QueryBaseFeeRequest {
    return o && o.$typeUrl === QueryBaseFeeRequest.typeUrl;
  },
  isAmino(o: any): o is QueryBaseFeeRequestAmino {
    return o && o.$typeUrl === QueryBaseFeeRequest.typeUrl;
  },
  encode(_: QueryBaseFeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseFeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryBaseFeeRequest>): QueryBaseFeeRequest {
    const message = createBaseQueryBaseFeeRequest();
    return message;
  },
  fromAmino(_: QueryBaseFeeRequestAmino): QueryBaseFeeRequest {
    const message = createBaseQueryBaseFeeRequest();
    return message;
  },
  toAmino(_: QueryBaseFeeRequest): QueryBaseFeeRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBaseFeeRequestAminoMsg): QueryBaseFeeRequest {
    return QueryBaseFeeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBaseFeeRequestProtoMsg): QueryBaseFeeRequest {
    return QueryBaseFeeRequest.decode(message.value);
  },
  toProto(message: QueryBaseFeeRequest): Uint8Array {
    return QueryBaseFeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBaseFeeRequest): QueryBaseFeeRequestProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryBaseFeeRequest",
      value: QueryBaseFeeRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryBaseFeeResponse(): QueryBaseFeeResponse {
  return {
    baseFee: ""
  };
}
export const QueryBaseFeeResponse = {
  typeUrl: "/ethermint.evm.v1.QueryBaseFeeResponse",
  is(o: any): o is QueryBaseFeeResponse {
    return o && (o.$typeUrl === QueryBaseFeeResponse.typeUrl || typeof o.baseFee === "string");
  },
  isAmino(o: any): o is QueryBaseFeeResponseAmino {
    return o && (o.$typeUrl === QueryBaseFeeResponse.typeUrl || typeof o.base_fee === "string");
  },
  encode(message: QueryBaseFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseFee !== "") {
      writer.uint32(10).string(message.baseFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBaseFeeResponse>): QueryBaseFeeResponse {
    const message = createBaseQueryBaseFeeResponse();
    message.baseFee = object.baseFee ?? "";
    return message;
  },
  fromAmino(object: QueryBaseFeeResponseAmino): QueryBaseFeeResponse {
    const message = createBaseQueryBaseFeeResponse();
    if (object.base_fee !== undefined && object.base_fee !== null) {
      message.baseFee = object.base_fee;
    }
    return message;
  },
  toAmino(message: QueryBaseFeeResponse): QueryBaseFeeResponseAmino {
    const obj: any = {};
    obj.base_fee = message.baseFee === "" ? undefined : message.baseFee;
    return obj;
  },
  fromAminoMsg(object: QueryBaseFeeResponseAminoMsg): QueryBaseFeeResponse {
    return QueryBaseFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBaseFeeResponseProtoMsg): QueryBaseFeeResponse {
    return QueryBaseFeeResponse.decode(message.value);
  },
  toProto(message: QueryBaseFeeResponse): Uint8Array {
    return QueryBaseFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBaseFeeResponse): QueryBaseFeeResponseProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.QueryBaseFeeResponse",
      value: QueryBaseFeeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};