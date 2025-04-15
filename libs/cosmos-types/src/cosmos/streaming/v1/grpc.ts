import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** ListenDeliverBlockRequest is the request type for the ListenDeliverBlock RPC method */
export interface ListenDeliverBlockRequest {
  blockHeight: bigint;
  txs: Uint8Array[];
  events: Event[];
  txResults: ExecTxResult[];
}
/** ListenDeliverBlockResponse is the response type for the ListenDeliverBlock RPC method */
export interface ListenDeliverBlockResponse {}
/** ListenStateChangesRequest is the request type for the ListenStateChanges RPC method */
export interface ListenStateChangesRequest {
  blockHeight: bigint;
  changeSet: StoreKVPair[];
  appHash: Uint8Array;
}
/** ListenStateChangesResponse is the response type for the ListenStateChanges RPC method */
export interface ListenStateChangesResponse {}
/** StoreKVPair is a single key-value pair, associated with a store. */
export interface StoreKVPair {
  /**
   * address defines the address of the account the state changes are coming from.
   * In case of modules you can expect a stringified
   */
  address: Uint8Array;
  /** key defines the key of the address that changed. */
  key: Uint8Array;
  /** value defines the value that changed, empty in case of removal. */
  value: Uint8Array;
  /** delete defines if the key was removed. */
  delete: boolean;
}
/** Event is a single event, associated with a transaction. */
export interface Event {
  type: string;
  attributes: EventAttribute[];
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
  key: string;
  value: string;
}
/** ExecTxResult contains results of executing one individual transaction. */
export interface ExecTxResult {
  code: number;
  data: Uint8Array;
  log: string;
  info: string;
  gasWanted: bigint;
  gasUsed: bigint;
  events: Event[];
  codespace: string;
}
function createBaseListenDeliverBlockRequest(): ListenDeliverBlockRequest {
  return {
    blockHeight: BigInt(0),
    txs: [],
    events: [],
    txResults: []
  };
}
export const ListenDeliverBlockRequest = {
  typeUrl: "/cosmos.streaming.v1.ListenDeliverBlockRequest",
  aminoType: "cosmos-sdk/ListenDeliverBlockRequest",
  encode(message: ListenDeliverBlockRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.txs) {
      writer.uint32(18).bytes(v!);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.txResults) {
      ExecTxResult.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenDeliverBlockRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenDeliverBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.txs.push(reader.bytes());
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 4:
          message.txResults.push(ExecTxResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListenDeliverBlockRequest>): ListenDeliverBlockRequest {
    const message = createBaseListenDeliverBlockRequest();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.txs = object.txs?.map(e => e) || [];
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.txResults = object.txResults?.map(e => ExecTxResult.fromPartial(e)) || [];
    return message;
  }
};
function createBaseListenDeliverBlockResponse(): ListenDeliverBlockResponse {
  return {};
}
export const ListenDeliverBlockResponse = {
  typeUrl: "/cosmos.streaming.v1.ListenDeliverBlockResponse",
  aminoType: "cosmos-sdk/ListenDeliverBlockResponse",
  encode(_: ListenDeliverBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenDeliverBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenDeliverBlockResponse();
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
  fromPartial(_: DeepPartial<ListenDeliverBlockResponse>): ListenDeliverBlockResponse {
    const message = createBaseListenDeliverBlockResponse();
    return message;
  }
};
function createBaseListenStateChangesRequest(): ListenStateChangesRequest {
  return {
    blockHeight: BigInt(0),
    changeSet: [],
    appHash: new Uint8Array()
  };
}
export const ListenStateChangesRequest = {
  typeUrl: "/cosmos.streaming.v1.ListenStateChangesRequest",
  aminoType: "cosmos-sdk/ListenStateChangesRequest",
  encode(message: ListenStateChangesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.changeSet) {
      StoreKVPair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(26).bytes(message.appHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenStateChangesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenStateChangesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.changeSet.push(StoreKVPair.decode(reader, reader.uint32()));
          break;
        case 3:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListenStateChangesRequest>): ListenStateChangesRequest {
    const message = createBaseListenStateChangesRequest();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.changeSet = object.changeSet?.map(e => StoreKVPair.fromPartial(e)) || [];
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  }
};
function createBaseListenStateChangesResponse(): ListenStateChangesResponse {
  return {};
}
export const ListenStateChangesResponse = {
  typeUrl: "/cosmos.streaming.v1.ListenStateChangesResponse",
  aminoType: "cosmos-sdk/ListenStateChangesResponse",
  encode(_: ListenStateChangesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenStateChangesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenStateChangesResponse();
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
  fromPartial(_: DeepPartial<ListenStateChangesResponse>): ListenStateChangesResponse {
    const message = createBaseListenStateChangesResponse();
    return message;
  }
};
function createBaseStoreKVPair(): StoreKVPair {
  return {
    address: new Uint8Array(),
    key: new Uint8Array(),
    value: new Uint8Array(),
    delete: false
  };
}
export const StoreKVPair = {
  typeUrl: "/cosmos.streaming.v1.StoreKVPair",
  aminoType: "cosmos-sdk/StoreKVPair",
  encode(message: StoreKVPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(26).bytes(message.value);
    }
    if (message.delete === true) {
      writer.uint32(32).bool(message.delete);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoreKVPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.value = reader.bytes();
          break;
        case 4:
          message.delete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<StoreKVPair>): StoreKVPair {
    const message = createBaseStoreKVPair();
    message.address = object.address ?? new Uint8Array();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.delete = object.delete ?? false;
    return message;
  }
};
function createBaseEvent(): Event {
  return {
    type: "",
    attributes: []
  };
}
export const Event = {
  typeUrl: "/cosmos.streaming.v1.Event",
  aminoType: "cosmos-sdk/Event",
  encode(message: Event, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      EventAttribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Event {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(EventAttribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Event>): Event {
    const message = createBaseEvent();
    message.type = object.type ?? "";
    message.attributes = object.attributes?.map(e => EventAttribute.fromPartial(e)) || [];
    return message;
  }
};
function createBaseEventAttribute(): EventAttribute {
  return {
    key: "",
    value: ""
  };
}
export const EventAttribute = {
  typeUrl: "/cosmos.streaming.v1.EventAttribute",
  aminoType: "cosmos-sdk/EventAttribute",
  encode(message: EventAttribute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAttribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventAttribute>): EventAttribute {
    const message = createBaseEventAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseExecTxResult(): ExecTxResult {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    events: [],
    codespace: ""
  };
}
export const ExecTxResult = {
  typeUrl: "/cosmos.streaming.v1.ExecTxResult",
  aminoType: "cosmos-sdk/ExecTxResult",
  encode(message: ExecTxResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExecTxResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecTxResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64();
          break;
        case 6:
          message.gasUsed = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExecTxResult>): ExecTxResult {
    const message = createBaseExecTxResult();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  }
};