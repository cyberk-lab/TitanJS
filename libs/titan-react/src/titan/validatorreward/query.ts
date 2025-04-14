import { Params, ParamsAmino } from "./params";
import { Coin, CoinAmino } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/titan.validatorreward.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/titan.validatorreward.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/titan.validatorreward.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/titan.validatorreward.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryRewardPoolRequest is request type for the Query/RewardPool RPC method. */
export interface QueryRewardPoolRequest {}
export interface QueryRewardPoolRequestProtoMsg {
  typeUrl: "/titan.validatorreward.QueryRewardPoolRequest";
  value: Uint8Array;
}
/** QueryRewardPoolRequest is request type for the Query/RewardPool RPC method. */
export interface QueryRewardPoolRequestAmino {}
export interface QueryRewardPoolRequestAminoMsg {
  type: "/titan.validatorreward.QueryRewardPoolRequest";
  value: QueryRewardPoolRequestAmino;
}
/** QueryRewardPoolResponse is response type for the Query/RewardPool RPC method. */
export interface QueryRewardPoolResponse {
  pool: Coin[];
}
export interface QueryRewardPoolResponseProtoMsg {
  typeUrl: "/titan.validatorreward.QueryRewardPoolResponse";
  value: Uint8Array;
}
/** QueryRewardPoolResponse is response type for the Query/RewardPool RPC method. */
export interface QueryRewardPoolResponseAmino {
  pool: CoinAmino[];
}
export interface QueryRewardPoolResponseAminoMsg {
  type: "/titan.validatorreward.QueryRewardPoolResponse";
  value: QueryRewardPoolResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/titan.validatorreward.QueryParamsRequest",
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
      typeUrl: "/titan.validatorreward.QueryParamsRequest",
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
  typeUrl: "/titan.validatorreward.QueryParamsResponse",
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
      typeUrl: "/titan.validatorreward.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Params.registerTypeUrl();
  }
};
function createBaseQueryRewardPoolRequest(): QueryRewardPoolRequest {
  return {};
}
export const QueryRewardPoolRequest = {
  typeUrl: "/titan.validatorreward.QueryRewardPoolRequest",
  is(o: any): o is QueryRewardPoolRequest {
    return o && o.$typeUrl === QueryRewardPoolRequest.typeUrl;
  },
  isAmino(o: any): o is QueryRewardPoolRequestAmino {
    return o && o.$typeUrl === QueryRewardPoolRequest.typeUrl;
  },
  encode(_: QueryRewardPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardPoolRequest();
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
  fromPartial(_: DeepPartial<QueryRewardPoolRequest>): QueryRewardPoolRequest {
    const message = createBaseQueryRewardPoolRequest();
    return message;
  },
  fromAmino(_: QueryRewardPoolRequestAmino): QueryRewardPoolRequest {
    const message = createBaseQueryRewardPoolRequest();
    return message;
  },
  toAmino(_: QueryRewardPoolRequest): QueryRewardPoolRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryRewardPoolRequestAminoMsg): QueryRewardPoolRequest {
    return QueryRewardPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardPoolRequestProtoMsg): QueryRewardPoolRequest {
    return QueryRewardPoolRequest.decode(message.value);
  },
  toProto(message: QueryRewardPoolRequest): Uint8Array {
    return QueryRewardPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardPoolRequest): QueryRewardPoolRequestProtoMsg {
    return {
      typeUrl: "/titan.validatorreward.QueryRewardPoolRequest",
      value: QueryRewardPoolRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryRewardPoolResponse(): QueryRewardPoolResponse {
  return {
    pool: []
  };
}
export const QueryRewardPoolResponse = {
  typeUrl: "/titan.validatorreward.QueryRewardPoolResponse",
  is(o: any): o is QueryRewardPoolResponse {
    return o && (o.$typeUrl === QueryRewardPoolResponse.typeUrl || Array.isArray(o.pool) && (!o.pool.length || Coin.is(o.pool[0])));
  },
  isAmino(o: any): o is QueryRewardPoolResponseAmino {
    return o && (o.$typeUrl === QueryRewardPoolResponse.typeUrl || Array.isArray(o.pool) && (!o.pool.length || Coin.isAmino(o.pool[0])));
  },
  encode(message: QueryRewardPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRewardPoolResponse>): QueryRewardPoolResponse {
    const message = createBaseQueryRewardPoolResponse();
    message.pool = object.pool?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRewardPoolResponseAmino): QueryRewardPoolResponse {
    const message = createBaseQueryRewardPoolResponse();
    message.pool = object.pool?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRewardPoolResponse): QueryRewardPoolResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.pool = message.pool;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRewardPoolResponseAminoMsg): QueryRewardPoolResponse {
    return QueryRewardPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardPoolResponseProtoMsg): QueryRewardPoolResponse {
    return QueryRewardPoolResponse.decode(message.value);
  },
  toProto(message: QueryRewardPoolResponse): Uint8Array {
    return QueryRewardPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardPoolResponse): QueryRewardPoolResponseProtoMsg {
    return {
      typeUrl: "/titan.validatorreward.QueryRewardPoolResponse",
      value: QueryRewardPoolResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Coin.registerTypeUrl();
  }
};