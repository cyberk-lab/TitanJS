import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** EventFeeMarket is the event type for the fee market module */
export interface EventFeeMarket {
  /** base_fee for EIP-1559 blocks */
  baseFee: string;
}
export interface EventFeeMarketProtoMsg {
  typeUrl: "/ethermint.feemarket.v1.EventFeeMarket";
  value: Uint8Array;
}
/** EventFeeMarket is the event type for the fee market module */
export interface EventFeeMarketAmino {
  /** base_fee for EIP-1559 blocks */
  base_fee: string;
}
export interface EventFeeMarketAminoMsg {
  type: "/ethermint.feemarket.v1.EventFeeMarket";
  value: EventFeeMarketAmino;
}
/** EventBlockGas defines an Ethereum block gas event */
export interface EventBlockGas {
  /** height of the block */
  height: string;
  /** amount of gas wanted by the block */
  amount: string;
}
export interface EventBlockGasProtoMsg {
  typeUrl: "/ethermint.feemarket.v1.EventBlockGas";
  value: Uint8Array;
}
/** EventBlockGas defines an Ethereum block gas event */
export interface EventBlockGasAmino {
  /** height of the block */
  height: string;
  /** amount of gas wanted by the block */
  amount: string;
}
export interface EventBlockGasAminoMsg {
  type: "/ethermint.feemarket.v1.EventBlockGas";
  value: EventBlockGasAmino;
}
function createBaseEventFeeMarket(): EventFeeMarket {
  return {
    baseFee: ""
  };
}
export const EventFeeMarket = {
  typeUrl: "/ethermint.feemarket.v1.EventFeeMarket",
  is(o: any): o is EventFeeMarket {
    return o && (o.$typeUrl === EventFeeMarket.typeUrl || typeof o.baseFee === "string");
  },
  isAmino(o: any): o is EventFeeMarketAmino {
    return o && (o.$typeUrl === EventFeeMarket.typeUrl || typeof o.base_fee === "string");
  },
  encode(message: EventFeeMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseFee !== "") {
      writer.uint32(10).string(message.baseFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventFeeMarket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFeeMarket();
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
  fromPartial(object: DeepPartial<EventFeeMarket>): EventFeeMarket {
    const message = createBaseEventFeeMarket();
    message.baseFee = object.baseFee ?? "";
    return message;
  },
  fromAmino(object: EventFeeMarketAmino): EventFeeMarket {
    const message = createBaseEventFeeMarket();
    if (object.base_fee !== undefined && object.base_fee !== null) {
      message.baseFee = object.base_fee;
    }
    return message;
  },
  toAmino(message: EventFeeMarket): EventFeeMarketAmino {
    const obj: any = {};
    obj.base_fee = message.baseFee === "" ? undefined : message.baseFee;
    return obj;
  },
  fromAminoMsg(object: EventFeeMarketAminoMsg): EventFeeMarket {
    return EventFeeMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: EventFeeMarketProtoMsg): EventFeeMarket {
    return EventFeeMarket.decode(message.value);
  },
  toProto(message: EventFeeMarket): Uint8Array {
    return EventFeeMarket.encode(message).finish();
  },
  toProtoMsg(message: EventFeeMarket): EventFeeMarketProtoMsg {
    return {
      typeUrl: "/ethermint.feemarket.v1.EventFeeMarket",
      value: EventFeeMarket.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventBlockGas(): EventBlockGas {
  return {
    height: "",
    amount: ""
  };
}
export const EventBlockGas = {
  typeUrl: "/ethermint.feemarket.v1.EventBlockGas",
  is(o: any): o is EventBlockGas {
    return o && (o.$typeUrl === EventBlockGas.typeUrl || typeof o.height === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is EventBlockGasAmino {
    return o && (o.$typeUrl === EventBlockGas.typeUrl || typeof o.height === "string" && typeof o.amount === "string");
  },
  encode(message: EventBlockGas, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== "") {
      writer.uint32(10).string(message.height);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBlockGas {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBlockGas();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventBlockGas>): EventBlockGas {
    const message = createBaseEventBlockGas();
    message.height = object.height ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: EventBlockGasAmino): EventBlockGas {
    const message = createBaseEventBlockGas();
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EventBlockGas): EventBlockGasAmino {
    const obj: any = {};
    obj.height = message.height === "" ? undefined : message.height;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: EventBlockGasAminoMsg): EventBlockGas {
    return EventBlockGas.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBlockGasProtoMsg): EventBlockGas {
    return EventBlockGas.decode(message.value);
  },
  toProto(message: EventBlockGas): Uint8Array {
    return EventBlockGas.encode(message).finish();
  },
  toProtoMsg(message: EventBlockGas): EventBlockGasProtoMsg {
    return {
      typeUrl: "/ethermint.feemarket.v1.EventBlockGas",
      value: EventBlockGas.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};