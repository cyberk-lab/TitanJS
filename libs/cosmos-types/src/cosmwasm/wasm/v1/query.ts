import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractCodeHistoryEntry, Model, AccessConfig, Params } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequest {
  /** address is the address of the contract to query */
  address: string;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponse {
  /** address is the address of the contract */
  address: string;
  contractInfo: ContractInfo;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequest {
  /** address is the address of the contract to query */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponse {
  entries: ContractCodeHistoryEntry[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequest {
  /** grpc-gateway_out does not support Go style CodeID */
  codeId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponse {
  /** contracts are a set of contract addresses */
  contracts: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequest {
  /** address is the address of the contract */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponse {
  models: Model[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequest {
  /** address is the address of the contract */
  address: string;
  queryData: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponse {
  /** Data contains the raw store data */
  data: Uint8Array;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequest {
  /** address is the address of the contract */
  address: string;
  /** QueryData contains the query data passed to the contract */
  queryData: Uint8Array;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponse {
  /** Data contains the json data returned from the smart contract */
  data: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequest {
  /** grpc-gateway_out does not support Go style CodeID */
  codeId: bigint;
}
/** QueryCodeInfoRequest is the request type for the Query/CodeInfo RPC method */
export interface QueryCodeInfoRequest {
  /** grpc-gateway_out does not support Go style CodeID */
  codeId: bigint;
}
/** QueryCodeInfoResponse is the response type for the Query/CodeInfo RPC method */
export interface QueryCodeInfoResponse {
  codeId: bigint;
  creator: string;
  checksum: Uint8Array;
  instantiatePermission: AccessConfig;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponse {
  codeId: bigint;
  creator: string;
  dataHash: Uint8Array;
  instantiatePermission: AccessConfig;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponse {
  codeInfo?: CodeInfoResponse;
  data: Uint8Array;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponse {
  codeInfos: CodeInfoResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponse {
  codeIds: bigint[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorRequest {
  /** CreatorAddress is the address of contract creator */
  creatorAddress: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorResponse {
  /** ContractAddresses result set */
  contractAddresses: string[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/**
 * QueryWasmLimitsConfigRequest is the request type for the
 * Query/WasmLimitsConfig RPC method.
 */
export interface QueryWasmLimitsConfigRequest {}
/**
 * QueryWasmLimitsConfigResponse is the response type for the
 * Query/WasmLimitsConfig RPC method. It contains the JSON encoded limits for
 * static validation of Wasm files.
 */
export interface QueryWasmLimitsConfigResponse {
  config: string;
}
/**
 * QueryBuildAddressRequest is the request type for the Query/BuildAddress RPC
 * method.
 */
export interface QueryBuildAddressRequest {
  /** CodeHash is the hash of the code */
  codeHash: string;
  /** CreatorAddress is the address of the contract instantiator */
  creatorAddress: string;
  /** Salt is a hex encoded salt */
  salt: string;
  /**
   * InitArgs are optional json encoded init args to be used in contract address
   * building if provided
   */
  initArgs: Uint8Array;
}
/**
 * QueryBuildAddressResponse is the response type for the Query/BuildAddress RPC
 * method.
 */
export interface QueryBuildAddressResponse {
  /** Address is the contract address */
  address: string;
}
function createBaseQueryContractInfoRequest(): QueryContractInfoRequest {
  return {
    address: ""
  };
}
export const QueryContractInfoRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
  aminoType: "wasm/QueryContractInfoRequest",
  encode(message: QueryContractInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoRequest();
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
  fromPartial(object: DeepPartial<QueryContractInfoRequest>): QueryContractInfoRequest {
    const message = createBaseQueryContractInfoRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryContractInfoResponse(): QueryContractInfoResponse {
  return {
    address: "",
    contractInfo: ContractInfo.fromPartial({})
  };
}
export const QueryContractInfoResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
  aminoType: "wasm/QueryContractInfoResponse",
  encode(message: QueryContractInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContractInfoResponse>): QueryContractInfoResponse {
    const message = createBaseQueryContractInfoResponse();
    message.address = object.address ?? "";
    message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfo.fromPartial(object.contractInfo) : undefined;
    return message;
  }
};
function createBaseQueryContractHistoryRequest(): QueryContractHistoryRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryContractHistoryRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
  aminoType: "wasm/QueryContractHistoryRequest",
  encode(message: QueryContractHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromPartial(object: DeepPartial<QueryContractHistoryRequest>): QueryContractHistoryRequest {
    const message = createBaseQueryContractHistoryRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryContractHistoryResponse(): QueryContractHistoryResponse {
  return {
    entries: [],
    pagination: undefined
  };
}
export const QueryContractHistoryResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
  aminoType: "wasm/QueryContractHistoryResponse",
  encode(message: QueryContractHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      ContractCodeHistoryEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryContractHistoryResponse>): QueryContractHistoryResponse {
    const message = createBaseQueryContractHistoryResponse();
    message.entries = object.entries?.map(e => ContractCodeHistoryEntry.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryContractsByCodeRequest(): QueryContractsByCodeRequest {
  return {
    codeId: BigInt(0),
    pagination: undefined
  };
}
export const QueryContractsByCodeRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
  aminoType: "wasm/QueryContractsByCodeRequest",
  encode(message: QueryContractsByCodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryContractsByCodeRequest>): QueryContractsByCodeRequest {
    const message = createBaseQueryContractsByCodeRequest();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryContractsByCodeResponse(): QueryContractsByCodeResponse {
  return {
    contracts: [],
    pagination: undefined
  };
}
export const QueryContractsByCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
  aminoType: "wasm/QueryContractsByCodeResponse",
  encode(message: QueryContractsByCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contracts) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(reader.string());
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
  fromPartial(object: DeepPartial<QueryContractsByCodeResponse>): QueryContractsByCodeResponse {
    const message = createBaseQueryContractsByCodeResponse();
    message.contracts = object.contracts?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllContractStateRequest(): QueryAllContractStateRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryAllContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
  aminoType: "wasm/QueryAllContractStateRequest",
  encode(message: QueryAllContractStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllContractStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromPartial(object: DeepPartial<QueryAllContractStateRequest>): QueryAllContractStateRequest {
    const message = createBaseQueryAllContractStateRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllContractStateResponse(): QueryAllContractStateResponse {
  return {
    models: [],
    pagination: undefined
  };
}
export const QueryAllContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
  aminoType: "wasm/QueryAllContractStateResponse",
  encode(message: QueryAllContractStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.models) {
      Model.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllContractStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.models.push(Model.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllContractStateResponse>): QueryAllContractStateResponse {
    const message = createBaseQueryAllContractStateResponse();
    message.models = object.models?.map(e => Model.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryRawContractStateRequest(): QueryRawContractStateRequest {
  return {
    address: "",
    queryData: new Uint8Array()
  };
}
export const QueryRawContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
  aminoType: "wasm/QueryRawContractStateRequest",
  encode(message: QueryRawContractStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRawContractStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.queryData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRawContractStateRequest>): QueryRawContractStateRequest {
    const message = createBaseQueryRawContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryRawContractStateResponse(): QueryRawContractStateResponse {
  return {
    data: new Uint8Array()
  };
}
export const QueryRawContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
  aminoType: "wasm/QueryRawContractStateResponse",
  encode(message: QueryRawContractStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRawContractStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateResponse();
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
  fromPartial(object: DeepPartial<QueryRawContractStateResponse>): QueryRawContractStateResponse {
    const message = createBaseQueryRawContractStateResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseQuerySmartContractStateRequest(): QuerySmartContractStateRequest {
  return {
    address: "",
    queryData: new Uint8Array()
  };
}
export const QuerySmartContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
  aminoType: "wasm/QuerySmartContractStateRequest",
  encode(message: QuerySmartContractStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySmartContractStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.queryData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySmartContractStateRequest>): QuerySmartContractStateRequest {
    const message = createBaseQuerySmartContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  }
};
function createBaseQuerySmartContractStateResponse(): QuerySmartContractStateResponse {
  return {
    data: new Uint8Array()
  };
}
export const QuerySmartContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
  aminoType: "wasm/QuerySmartContractStateResponse",
  encode(message: QuerySmartContractStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySmartContractStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateResponse();
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
  fromPartial(object: DeepPartial<QuerySmartContractStateResponse>): QuerySmartContractStateResponse {
    const message = createBaseQuerySmartContractStateResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryCodeRequest(): QueryCodeRequest {
  return {
    codeId: BigInt(0)
  };
}
export const QueryCodeRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
  aminoType: "wasm/QueryCodeRequest",
  encode(message: QueryCodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
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
          message.codeId = reader.uint64();
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
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    return message;
  }
};
function createBaseQueryCodeInfoRequest(): QueryCodeInfoRequest {
  return {
    codeId: BigInt(0)
  };
}
export const QueryCodeInfoRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeInfoRequest",
  aminoType: "wasm/QueryCodeInfoRequest",
  encode(message: QueryCodeInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCodeInfoRequest>): QueryCodeInfoRequest {
    const message = createBaseQueryCodeInfoRequest();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    return message;
  }
};
function createBaseQueryCodeInfoResponse(): QueryCodeInfoResponse {
  return {
    codeId: BigInt(0),
    creator: "",
    checksum: new Uint8Array(),
    instantiatePermission: AccessConfig.fromPartial({})
  };
}
export const QueryCodeInfoResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeInfoResponse",
  aminoType: "wasm/QueryCodeInfoResponse",
  encode(message: QueryCodeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(26).bytes(message.checksum);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.checksum = reader.bytes();
          break;
        case 4:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCodeInfoResponse>): QueryCodeInfoResponse {
    const message = createBaseQueryCodeInfoResponse();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.checksum = object.checksum ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  }
};
function createBaseCodeInfoResponse(): CodeInfoResponse {
  return {
    codeId: BigInt(0),
    creator: "",
    dataHash: new Uint8Array(),
    instantiatePermission: AccessConfig.fromPartial({})
  };
}
export const CodeInfoResponse = {
  typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
  aminoType: "wasm/CodeInfoResponse",
  encode(message: CodeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(26).bytes(message.dataHash);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CodeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.dataHash = reader.bytes();
          break;
        case 6:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CodeInfoResponse>): CodeInfoResponse {
    const message = createBaseCodeInfoResponse();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.dataHash = object.dataHash ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  }
};
function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    codeInfo: undefined,
    data: new Uint8Array()
  };
}
export const QueryCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
  aminoType: "wasm/QueryCodeResponse",
  encode(message: QueryCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeInfo !== undefined) {
      CodeInfoResponse.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
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
          message.codeInfo = CodeInfoResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = reader.bytes();
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
    message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfoResponse.fromPartial(object.codeInfo) : undefined;
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryCodesRequest(): QueryCodesRequest {
  return {
    pagination: undefined
  };
}
export const QueryCodesRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
  aminoType: "wasm/QueryCodesRequest",
  encode(message: QueryCodesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCodesRequest>): QueryCodesRequest {
    const message = createBaseQueryCodesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryCodesResponse(): QueryCodesResponse {
  return {
    codeInfos: [],
    pagination: undefined
  };
}
export const QueryCodesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
  aminoType: "wasm/QueryCodesResponse",
  encode(message: QueryCodesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.codeInfos) {
      CodeInfoResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeInfos.push(CodeInfoResponse.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryCodesResponse>): QueryCodesResponse {
    const message = createBaseQueryCodesResponse();
    message.codeInfos = object.codeInfos?.map(e => CodeInfoResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryPinnedCodesRequest(): QueryPinnedCodesRequest {
  return {
    pagination: undefined
  };
}
export const QueryPinnedCodesRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
  aminoType: "wasm/QueryPinnedCodesRequest",
  encode(message: QueryPinnedCodesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPinnedCodesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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
  fromPartial(object: DeepPartial<QueryPinnedCodesRequest>): QueryPinnedCodesRequest {
    const message = createBaseQueryPinnedCodesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryPinnedCodesResponse(): QueryPinnedCodesResponse {
  return {
    codeIds: [],
    pagination: undefined
  };
}
export const QueryPinnedCodesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
  aminoType: "wasm/QueryPinnedCodesResponse",
  encode(message: QueryPinnedCodesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPinnedCodesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64());
            }
          } else {
            message.codeIds.push(reader.uint64());
          }
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
  fromPartial(object: DeepPartial<QueryPinnedCodesResponse>): QueryPinnedCodesResponse {
    const message = createBaseQueryPinnedCodesResponse();
    message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryParamsRequest",
  aminoType: "wasm/QueryParamsRequest",
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
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryParamsResponse",
  aminoType: "wasm/QueryParamsResponse",
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
  }
};
function createBaseQueryContractsByCreatorRequest(): QueryContractsByCreatorRequest {
  return {
    creatorAddress: "",
    pagination: undefined
  };
}
export const QueryContractsByCreatorRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorRequest",
  aminoType: "wasm/QueryContractsByCreatorRequest",
  encode(message: QueryContractsByCreatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creatorAddress !== "") {
      writer.uint32(10).string(message.creatorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCreatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creatorAddress = reader.string();
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
  fromPartial(object: DeepPartial<QueryContractsByCreatorRequest>): QueryContractsByCreatorRequest {
    const message = createBaseQueryContractsByCreatorRequest();
    message.creatorAddress = object.creatorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryContractsByCreatorResponse(): QueryContractsByCreatorResponse {
  return {
    contractAddresses: [],
    pagination: undefined
  };
}
export const QueryContractsByCreatorResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorResponse",
  aminoType: "wasm/QueryContractsByCreatorResponse",
  encode(message: QueryContractsByCreatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractsByCreatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
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
  fromPartial(object: DeepPartial<QueryContractsByCreatorResponse>): QueryContractsByCreatorResponse {
    const message = createBaseQueryContractsByCreatorResponse();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryWasmLimitsConfigRequest(): QueryWasmLimitsConfigRequest {
  return {};
}
export const QueryWasmLimitsConfigRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryWasmLimitsConfigRequest",
  aminoType: "wasm/QueryWasmLimitsConfigRequest",
  encode(_: QueryWasmLimitsConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWasmLimitsConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWasmLimitsConfigRequest();
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
  fromPartial(_: DeepPartial<QueryWasmLimitsConfigRequest>): QueryWasmLimitsConfigRequest {
    const message = createBaseQueryWasmLimitsConfigRequest();
    return message;
  }
};
function createBaseQueryWasmLimitsConfigResponse(): QueryWasmLimitsConfigResponse {
  return {
    config: ""
  };
}
export const QueryWasmLimitsConfigResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryWasmLimitsConfigResponse",
  aminoType: "wasm/QueryWasmLimitsConfigResponse",
  encode(message: QueryWasmLimitsConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.config !== "") {
      writer.uint32(10).string(message.config);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWasmLimitsConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWasmLimitsConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryWasmLimitsConfigResponse>): QueryWasmLimitsConfigResponse {
    const message = createBaseQueryWasmLimitsConfigResponse();
    message.config = object.config ?? "";
    return message;
  }
};
function createBaseQueryBuildAddressRequest(): QueryBuildAddressRequest {
  return {
    codeHash: "",
    creatorAddress: "",
    salt: "",
    initArgs: new Uint8Array()
  };
}
export const QueryBuildAddressRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryBuildAddressRequest",
  aminoType: "wasm/QueryBuildAddressRequest",
  encode(message: QueryBuildAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeHash !== "") {
      writer.uint32(10).string(message.codeHash);
    }
    if (message.creatorAddress !== "") {
      writer.uint32(18).string(message.creatorAddress);
    }
    if (message.salt !== "") {
      writer.uint32(26).string(message.salt);
    }
    if (message.initArgs.length !== 0) {
      writer.uint32(34).bytes(message.initArgs);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBuildAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBuildAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeHash = reader.string();
          break;
        case 2:
          message.creatorAddress = reader.string();
          break;
        case 3:
          message.salt = reader.string();
          break;
        case 4:
          message.initArgs = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBuildAddressRequest>): QueryBuildAddressRequest {
    const message = createBaseQueryBuildAddressRequest();
    message.codeHash = object.codeHash ?? "";
    message.creatorAddress = object.creatorAddress ?? "";
    message.salt = object.salt ?? "";
    message.initArgs = object.initArgs ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryBuildAddressResponse(): QueryBuildAddressResponse {
  return {
    address: ""
  };
}
export const QueryBuildAddressResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryBuildAddressResponse",
  aminoType: "wasm/QueryBuildAddressResponse",
  encode(message: QueryBuildAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBuildAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBuildAddressResponse();
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
  fromPartial(object: DeepPartial<QueryBuildAddressResponse>): QueryBuildAddressResponse {
    const message = createBaseQueryBuildAddressResponse();
    message.address = object.address ?? "";
    return message;
  }
};