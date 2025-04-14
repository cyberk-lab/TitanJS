import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  rate: string;
  authority: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/titan.validatorreward.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  rate: string;
  authority: string;
}
export interface ParamsAminoMsg {
  type: "/titan.validatorreward.Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    rate: "",
    authority: ""
  };
}
export const Params = {
  typeUrl: "/titan.validatorreward.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.rate === "string" && typeof o.authority === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.rate === "string" && typeof o.authority === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.rate, 18).atomics);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.rate = object.rate ?? "";
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.rate = message.rate === "" ? undefined : Decimal.fromUserInput(message.rate, 18).atomics;
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/titan.validatorreward.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};