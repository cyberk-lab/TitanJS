import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { SystemInfo, SystemInfoAmino } from "./system_info";
import { MintingInfo, MintingInfoAmino } from "./minting_info";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/titan.nftmint.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/titan.nftmint.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/titan.nftmint.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/titan.nftmint.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QuerySystemInfoRequest is request type for the Query/QuerySystemInfo RPC
 * method.
 */
export interface QuerySystemInfoRequest {}
export interface QuerySystemInfoRequestProtoMsg {
  typeUrl: "/titan.nftmint.QuerySystemInfoRequest";
  value: Uint8Array;
}
/**
 * QuerySystemInfoRequest is request type for the Query/QuerySystemInfo RPC
 * method.
 */
export interface QuerySystemInfoRequestAmino {}
export interface QuerySystemInfoRequestAminoMsg {
  type: "/titan.nftmint.QuerySystemInfoRequest";
  value: QuerySystemInfoRequestAmino;
}
/**
 * QuerySystemInfoResponse is response type for the Query/QuerySystemInfo
 * RPC method.
 */
export interface QuerySystemInfoResponse {
  systemInfo: SystemInfo;
}
export interface QuerySystemInfoResponseProtoMsg {
  typeUrl: "/titan.nftmint.QuerySystemInfoResponse";
  value: Uint8Array;
}
/**
 * QuerySystemInfoResponse is response type for the Query/QuerySystemInfo
 * RPC method.
 */
export interface QuerySystemInfoResponseAmino {
  system_info: SystemInfoAmino;
}
export interface QuerySystemInfoResponseAminoMsg {
  type: "/titan.nftmint.QuerySystemInfoResponse";
  value: QuerySystemInfoResponseAmino;
}
/**
 * QueryMintingInfoRequest is request type for the Query/QueryMintingInfo RPC
 * method.
 */
export interface QueryMintingInfoRequest {
  classId: string;
}
export interface QueryMintingInfoRequestProtoMsg {
  typeUrl: "/titan.nftmint.QueryMintingInfoRequest";
  value: Uint8Array;
}
/**
 * QueryMintingInfoRequest is request type for the Query/QueryMintingInfo RPC
 * method.
 */
export interface QueryMintingInfoRequestAmino {
  class_id: string;
}
export interface QueryMintingInfoRequestAminoMsg {
  type: "/titan.nftmint.QueryMintingInfoRequest";
  value: QueryMintingInfoRequestAmino;
}
/**
 * QueryMintingInfoResponse is response type for the Query/QueryMintingInfo RPC
 * method.
 */
export interface QueryMintingInfoResponse {
  mintingInfo: MintingInfo;
}
export interface QueryMintingInfoResponseProtoMsg {
  typeUrl: "/titan.nftmint.QueryMintingInfoResponse";
  value: Uint8Array;
}
/**
 * QueryMintingInfoResponse is response type for the Query/QueryMintingInfo RPC
 * method.
 */
export interface QueryMintingInfoResponseAmino {
  minting_info: MintingInfoAmino;
}
export interface QueryMintingInfoResponseAminoMsg {
  type: "/titan.nftmint.QueryMintingInfoResponse";
  value: QueryMintingInfoResponseAmino;
}
/**
 * QueryMintingInfosRequest is request type for the Query/QueryMintingInfos RPC
 * method.
 */
export interface QueryMintingInfosRequest {
  pagination?: PageRequest;
}
export interface QueryMintingInfosRequestProtoMsg {
  typeUrl: "/titan.nftmint.QueryMintingInfosRequest";
  value: Uint8Array;
}
/**
 * QueryMintingInfosRequest is request type for the Query/QueryMintingInfos RPC
 * method.
 */
export interface QueryMintingInfosRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryMintingInfosRequestAminoMsg {
  type: "/titan.nftmint.QueryMintingInfosRequest";
  value: QueryMintingInfosRequestAmino;
}
/**
 * QueryMintingInfosResponse is response type for the Query/QueryMintingInfos
 * RPC method.
 */
export interface QueryMintingInfosResponse {
  mintingInfo: MintingInfo[];
  pagination?: PageResponse;
}
export interface QueryMintingInfosResponseProtoMsg {
  typeUrl: "/titan.nftmint.QueryMintingInfosResponse";
  value: Uint8Array;
}
/**
 * QueryMintingInfosResponse is response type for the Query/QueryMintingInfos
 * RPC method.
 */
export interface QueryMintingInfosResponseAmino {
  minting_info: MintingInfoAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryMintingInfosResponseAminoMsg {
  type: "/titan.nftmint.QueryMintingInfosResponse";
  value: QueryMintingInfosResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/titan.nftmint.QueryParamsRequest",
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
      typeUrl: "/titan.nftmint.QueryParamsRequest",
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
  typeUrl: "/titan.nftmint.QueryParamsResponse",
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
      typeUrl: "/titan.nftmint.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Params.registerTypeUrl();
  }
};
function createBaseQuerySystemInfoRequest(): QuerySystemInfoRequest {
  return {};
}
export const QuerySystemInfoRequest = {
  typeUrl: "/titan.nftmint.QuerySystemInfoRequest",
  is(o: any): o is QuerySystemInfoRequest {
    return o && o.$typeUrl === QuerySystemInfoRequest.typeUrl;
  },
  isAmino(o: any): o is QuerySystemInfoRequestAmino {
    return o && o.$typeUrl === QuerySystemInfoRequest.typeUrl;
  },
  encode(_: QuerySystemInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySystemInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySystemInfoRequest();
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
  fromPartial(_: DeepPartial<QuerySystemInfoRequest>): QuerySystemInfoRequest {
    const message = createBaseQuerySystemInfoRequest();
    return message;
  },
  fromAmino(_: QuerySystemInfoRequestAmino): QuerySystemInfoRequest {
    const message = createBaseQuerySystemInfoRequest();
    return message;
  },
  toAmino(_: QuerySystemInfoRequest): QuerySystemInfoRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySystemInfoRequestAminoMsg): QuerySystemInfoRequest {
    return QuerySystemInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySystemInfoRequestProtoMsg): QuerySystemInfoRequest {
    return QuerySystemInfoRequest.decode(message.value);
  },
  toProto(message: QuerySystemInfoRequest): Uint8Array {
    return QuerySystemInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySystemInfoRequest): QuerySystemInfoRequestProtoMsg {
    return {
      typeUrl: "/titan.nftmint.QuerySystemInfoRequest",
      value: QuerySystemInfoRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySystemInfoResponse(): QuerySystemInfoResponse {
  return {
    systemInfo: SystemInfo.fromPartial({})
  };
}
export const QuerySystemInfoResponse = {
  typeUrl: "/titan.nftmint.QuerySystemInfoResponse",
  is(o: any): o is QuerySystemInfoResponse {
    return o && (o.$typeUrl === QuerySystemInfoResponse.typeUrl || SystemInfo.is(o.systemInfo));
  },
  isAmino(o: any): o is QuerySystemInfoResponseAmino {
    return o && (o.$typeUrl === QuerySystemInfoResponse.typeUrl || SystemInfo.isAmino(o.system_info));
  },
  encode(message: QuerySystemInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.systemInfo !== undefined) {
      SystemInfo.encode(message.systemInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySystemInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySystemInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.systemInfo = SystemInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySystemInfoResponse>): QuerySystemInfoResponse {
    const message = createBaseQuerySystemInfoResponse();
    message.systemInfo = object.systemInfo !== undefined && object.systemInfo !== null ? SystemInfo.fromPartial(object.systemInfo) : undefined;
    return message;
  },
  fromAmino(object: QuerySystemInfoResponseAmino): QuerySystemInfoResponse {
    const message = createBaseQuerySystemInfoResponse();
    if (object.system_info !== undefined && object.system_info !== null) {
      message.systemInfo = SystemInfo.fromAmino(object.system_info);
    }
    return message;
  },
  toAmino(message: QuerySystemInfoResponse): QuerySystemInfoResponseAmino {
    const obj: any = {};
    obj.system_info = message.systemInfo ? SystemInfo.toAmino(message.systemInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySystemInfoResponseAminoMsg): QuerySystemInfoResponse {
    return QuerySystemInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySystemInfoResponseProtoMsg): QuerySystemInfoResponse {
    return QuerySystemInfoResponse.decode(message.value);
  },
  toProto(message: QuerySystemInfoResponse): Uint8Array {
    return QuerySystemInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySystemInfoResponse): QuerySystemInfoResponseProtoMsg {
    return {
      typeUrl: "/titan.nftmint.QuerySystemInfoResponse",
      value: QuerySystemInfoResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    SystemInfo.registerTypeUrl();
  }
};
function createBaseQueryMintingInfoRequest(): QueryMintingInfoRequest {
  return {
    classId: ""
  };
}
export const QueryMintingInfoRequest = {
  typeUrl: "/titan.nftmint.QueryMintingInfoRequest",
  is(o: any): o is QueryMintingInfoRequest {
    return o && (o.$typeUrl === QueryMintingInfoRequest.typeUrl || typeof o.classId === "string");
  },
  isAmino(o: any): o is QueryMintingInfoRequestAmino {
    return o && (o.$typeUrl === QueryMintingInfoRequest.typeUrl || typeof o.class_id === "string");
  },
  encode(message: QueryMintingInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMintingInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintingInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMintingInfoRequest>): QueryMintingInfoRequest {
    const message = createBaseQueryMintingInfoRequest();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: QueryMintingInfoRequestAmino): QueryMintingInfoRequest {
    const message = createBaseQueryMintingInfoRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: QueryMintingInfoRequest): QueryMintingInfoRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    return obj;
  },
  fromAminoMsg(object: QueryMintingInfoRequestAminoMsg): QueryMintingInfoRequest {
    return QueryMintingInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMintingInfoRequestProtoMsg): QueryMintingInfoRequest {
    return QueryMintingInfoRequest.decode(message.value);
  },
  toProto(message: QueryMintingInfoRequest): Uint8Array {
    return QueryMintingInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMintingInfoRequest): QueryMintingInfoRequestProtoMsg {
    return {
      typeUrl: "/titan.nftmint.QueryMintingInfoRequest",
      value: QueryMintingInfoRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryMintingInfoResponse(): QueryMintingInfoResponse {
  return {
    mintingInfo: MintingInfo.fromPartial({})
  };
}
export const QueryMintingInfoResponse = {
  typeUrl: "/titan.nftmint.QueryMintingInfoResponse",
  is(o: any): o is QueryMintingInfoResponse {
    return o && (o.$typeUrl === QueryMintingInfoResponse.typeUrl || MintingInfo.is(o.mintingInfo));
  },
  isAmino(o: any): o is QueryMintingInfoResponseAmino {
    return o && (o.$typeUrl === QueryMintingInfoResponse.typeUrl || MintingInfo.isAmino(o.minting_info));
  },
  encode(message: QueryMintingInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintingInfo !== undefined) {
      MintingInfo.encode(message.mintingInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMintingInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintingInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintingInfo = MintingInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMintingInfoResponse>): QueryMintingInfoResponse {
    const message = createBaseQueryMintingInfoResponse();
    message.mintingInfo = object.mintingInfo !== undefined && object.mintingInfo !== null ? MintingInfo.fromPartial(object.mintingInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryMintingInfoResponseAmino): QueryMintingInfoResponse {
    const message = createBaseQueryMintingInfoResponse();
    if (object.minting_info !== undefined && object.minting_info !== null) {
      message.mintingInfo = MintingInfo.fromAmino(object.minting_info);
    }
    return message;
  },
  toAmino(message: QueryMintingInfoResponse): QueryMintingInfoResponseAmino {
    const obj: any = {};
    obj.minting_info = message.mintingInfo ? MintingInfo.toAmino(message.mintingInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMintingInfoResponseAminoMsg): QueryMintingInfoResponse {
    return QueryMintingInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMintingInfoResponseProtoMsg): QueryMintingInfoResponse {
    return QueryMintingInfoResponse.decode(message.value);
  },
  toProto(message: QueryMintingInfoResponse): Uint8Array {
    return QueryMintingInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMintingInfoResponse): QueryMintingInfoResponseProtoMsg {
    return {
      typeUrl: "/titan.nftmint.QueryMintingInfoResponse",
      value: QueryMintingInfoResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    MintingInfo.registerTypeUrl();
  }
};
function createBaseQueryMintingInfosRequest(): QueryMintingInfosRequest {
  return {
    pagination: undefined
  };
}
export const QueryMintingInfosRequest = {
  typeUrl: "/titan.nftmint.QueryMintingInfosRequest",
  is(o: any): o is QueryMintingInfosRequest {
    return o && o.$typeUrl === QueryMintingInfosRequest.typeUrl;
  },
  isAmino(o: any): o is QueryMintingInfosRequestAmino {
    return o && o.$typeUrl === QueryMintingInfosRequest.typeUrl;
  },
  encode(message: QueryMintingInfosRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMintingInfosRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintingInfosRequest();
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
  fromPartial(object: DeepPartial<QueryMintingInfosRequest>): QueryMintingInfosRequest {
    const message = createBaseQueryMintingInfosRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMintingInfosRequestAmino): QueryMintingInfosRequest {
    const message = createBaseQueryMintingInfosRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMintingInfosRequest): QueryMintingInfosRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMintingInfosRequestAminoMsg): QueryMintingInfosRequest {
    return QueryMintingInfosRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMintingInfosRequestProtoMsg): QueryMintingInfosRequest {
    return QueryMintingInfosRequest.decode(message.value);
  },
  toProto(message: QueryMintingInfosRequest): Uint8Array {
    return QueryMintingInfosRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMintingInfosRequest): QueryMintingInfosRequestProtoMsg {
    return {
      typeUrl: "/titan.nftmint.QueryMintingInfosRequest",
      value: QueryMintingInfosRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryMintingInfosResponse(): QueryMintingInfosResponse {
  return {
    mintingInfo: [],
    pagination: undefined
  };
}
export const QueryMintingInfosResponse = {
  typeUrl: "/titan.nftmint.QueryMintingInfosResponse",
  is(o: any): o is QueryMintingInfosResponse {
    return o && (o.$typeUrl === QueryMintingInfosResponse.typeUrl || Array.isArray(o.mintingInfo) && (!o.mintingInfo.length || MintingInfo.is(o.mintingInfo[0])));
  },
  isAmino(o: any): o is QueryMintingInfosResponseAmino {
    return o && (o.$typeUrl === QueryMintingInfosResponse.typeUrl || Array.isArray(o.minting_info) && (!o.minting_info.length || MintingInfo.isAmino(o.minting_info[0])));
  },
  encode(message: QueryMintingInfosResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.mintingInfo) {
      MintingInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMintingInfosResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintingInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintingInfo.push(MintingInfo.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryMintingInfosResponse>): QueryMintingInfosResponse {
    const message = createBaseQueryMintingInfosResponse();
    message.mintingInfo = object.mintingInfo?.map(e => MintingInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMintingInfosResponseAmino): QueryMintingInfosResponse {
    const message = createBaseQueryMintingInfosResponse();
    message.mintingInfo = object.minting_info?.map(e => MintingInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMintingInfosResponse): QueryMintingInfosResponseAmino {
    const obj: any = {};
    if (message.mintingInfo) {
      obj.minting_info = message.mintingInfo.map(e => e ? MintingInfo.toAmino(e) : undefined);
    } else {
      obj.minting_info = message.mintingInfo;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMintingInfosResponseAminoMsg): QueryMintingInfosResponse {
    return QueryMintingInfosResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMintingInfosResponseProtoMsg): QueryMintingInfosResponse {
    return QueryMintingInfosResponse.decode(message.value);
  },
  toProto(message: QueryMintingInfosResponse): Uint8Array {
    return QueryMintingInfosResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMintingInfosResponse): QueryMintingInfosResponseProtoMsg {
    return {
      typeUrl: "/titan.nftmint.QueryMintingInfosResponse",
      value: QueryMintingInfosResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    MintingInfo.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};