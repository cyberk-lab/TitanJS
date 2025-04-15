import { Any } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** QueryRequest is the request for the Query method */
export interface QueryRequest {
  request?: Any;
}
/** QueryResponse is the response for the Query method */
export interface QueryResponse {
  response?: Any;
}
/** ListQueryHandlersRequest is the request for the ListQueryHandlers method */
export interface ListQueryHandlersRequest {}
/** ListQueryHandlersResponse is the response for the ListQueryHandlers method */
export interface ListQueryHandlersResponse {
  handlers: Handler[];
}
/** Handler defines a query handler */
export interface Handler {
  requestName: string;
  responseName: string;
}
function createBaseQueryRequest(): QueryRequest {
  return {
    request: undefined
  };
}
export const QueryRequest = {
  typeUrl: "/cosmos.base.grpc.v2.QueryRequest",
  aminoType: "cosmos-sdk/QueryRequest",
  encode(message: QueryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.request !== undefined) {
      Any.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRequest>): QueryRequest {
    const message = createBaseQueryRequest();
    message.request = object.request !== undefined && object.request !== null ? Any.fromPartial(object.request) : undefined;
    return message;
  }
};
function createBaseQueryResponse(): QueryResponse {
  return {
    response: undefined
  };
}
export const QueryResponse = {
  typeUrl: "/cosmos.base.grpc.v2.QueryResponse",
  aminoType: "cosmos-sdk/QueryResponse",
  encode(message: QueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.response !== undefined) {
      Any.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryResponse>): QueryResponse {
    const message = createBaseQueryResponse();
    message.response = object.response !== undefined && object.response !== null ? Any.fromPartial(object.response) : undefined;
    return message;
  }
};
function createBaseListQueryHandlersRequest(): ListQueryHandlersRequest {
  return {};
}
export const ListQueryHandlersRequest = {
  typeUrl: "/cosmos.base.grpc.v2.ListQueryHandlersRequest",
  aminoType: "cosmos-sdk/ListQueryHandlersRequest",
  encode(_: ListQueryHandlersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListQueryHandlersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListQueryHandlersRequest();
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
  fromPartial(_: DeepPartial<ListQueryHandlersRequest>): ListQueryHandlersRequest {
    const message = createBaseListQueryHandlersRequest();
    return message;
  }
};
function createBaseListQueryHandlersResponse(): ListQueryHandlersResponse {
  return {
    handlers: []
  };
}
export const ListQueryHandlersResponse = {
  typeUrl: "/cosmos.base.grpc.v2.ListQueryHandlersResponse",
  aminoType: "cosmos-sdk/ListQueryHandlersResponse",
  encode(message: ListQueryHandlersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.handlers) {
      Handler.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListQueryHandlersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListQueryHandlersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.handlers.push(Handler.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListQueryHandlersResponse>): ListQueryHandlersResponse {
    const message = createBaseListQueryHandlersResponse();
    message.handlers = object.handlers?.map(e => Handler.fromPartial(e)) || [];
    return message;
  }
};
function createBaseHandler(): Handler {
  return {
    requestName: "",
    responseName: ""
  };
}
export const Handler = {
  typeUrl: "/cosmos.base.grpc.v2.Handler",
  aminoType: "cosmos-sdk/Handler",
  encode(message: Handler, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestName !== "") {
      writer.uint32(10).string(message.requestName);
    }
    if (message.responseName !== "") {
      writer.uint32(18).string(message.responseName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Handler {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHandler();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestName = reader.string();
          break;
        case 2:
          message.responseName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Handler>): Handler {
    const message = createBaseHandler();
    message.requestName = object.requestName ?? "";
    message.responseName = object.responseName ?? "";
    return message;
  }
};