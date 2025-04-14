import { Params, ParamsAmino } from "./params";
import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp, DeepPartial } from "../../helpers";
/** GenesisState defines the validatorreward module's genesis state. */
export interface GenesisState {
  params: Params;
  /**
   * last_distribute_time is the last block time when the validator reward is
   * distributed.
   */
  lastDistributeTime?: Date;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/titan.validatorreward.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the validatorreward module's genesis state. */
export interface GenesisStateAmino {
  params: ParamsAmino;
  /**
   * last_distribute_time is the last block time when the validator reward is
   * distributed.
   */
  last_distribute_time?: string;
}
export interface GenesisStateAminoMsg {
  type: "/titan.validatorreward.GenesisState";
  value: GenesisStateAmino;
}
/** TimestampProto is a wrapper around google.protobuf.Timestamp. */
export interface TimestampProto {
  timestamp?: Date;
}
export interface TimestampProtoProtoMsg {
  typeUrl: "/titan.validatorreward.TimestampProto";
  value: Uint8Array;
}
/** TimestampProto is a wrapper around google.protobuf.Timestamp. */
export interface TimestampProtoAmino {
  timestamp?: string;
}
export interface TimestampProtoAminoMsg {
  type: "/titan.validatorreward.TimestampProto";
  value: TimestampProtoAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    lastDistributeTime: undefined
  };
}
export const GenesisState = {
  typeUrl: "/titan.validatorreward.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastDistributeTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastDistributeTime), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastDistributeTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lastDistributeTime = object.lastDistributeTime ?? undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.last_distribute_time !== undefined && object.last_distribute_time !== null) {
      message.lastDistributeTime = fromTimestamp(Timestamp.fromAmino(object.last_distribute_time));
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.last_distribute_time = message.lastDistributeTime ? Timestamp.toAmino(toTimestamp(message.lastDistributeTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/titan.validatorreward.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Params.registerTypeUrl();
  }
};
function createBaseTimestampProto(): TimestampProto {
  return {
    timestamp: undefined
  };
}
export const TimestampProto = {
  typeUrl: "/titan.validatorreward.TimestampProto",
  is(o: any): o is TimestampProto {
    return o && o.$typeUrl === TimestampProto.typeUrl;
  },
  isAmino(o: any): o is TimestampProtoAmino {
    return o && o.$typeUrl === TimestampProto.typeUrl;
  },
  encode(message: TimestampProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TimestampProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TimestampProto>): TimestampProto {
    const message = createBaseTimestampProto();
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromAmino(object: TimestampProtoAmino): TimestampProto {
    const message = createBaseTimestampProto();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message: TimestampProto): TimestampProtoAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    return obj;
  },
  fromAminoMsg(object: TimestampProtoAminoMsg): TimestampProto {
    return TimestampProto.fromAmino(object.value);
  },
  fromProtoMsg(message: TimestampProtoProtoMsg): TimestampProto {
    return TimestampProto.decode(message.value);
  },
  toProto(message: TimestampProto): Uint8Array {
    return TimestampProto.encode(message).finish();
  },
  toProtoMsg(message: TimestampProto): TimestampProtoProtoMsg {
    return {
      typeUrl: "/titan.validatorreward.TimestampProto",
      value: TimestampProto.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};