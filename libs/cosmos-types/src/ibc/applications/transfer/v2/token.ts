import { Hop } from "../v1/transfer";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** Token defines a struct which represents a token to be transferred. */
export interface Token {
  /** the token denomination */
  denom: Denom;
  /** the token amount to be transferred */
  amount: string;
}
/** Denom holds the base denom of a Token and a trace of the chains it was sent through. */
export interface Denom {
  /** the base token denomination */
  base: string;
  /** the trace of the token */
  trace: Hop[];
}
function createBaseToken(): Token {
  return {
    denom: Denom.fromPartial({}),
    amount: ""
  };
}
export const Token = {
  typeUrl: "/ibc.applications.transfer.v2.Token",
  aminoType: "cosmos-sdk/Token",
  encode(message: Token, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Token {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
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
  fromPartial(object: DeepPartial<Token>): Token {
    const message = createBaseToken();
    message.denom = object.denom !== undefined && object.denom !== null ? Denom.fromPartial(object.denom) : undefined;
    message.amount = object.amount ?? "";
    return message;
  }
};
function createBaseDenom(): Denom {
  return {
    base: "",
    trace: []
  };
}
export const Denom = {
  typeUrl: "/ibc.applications.transfer.v2.Denom",
  aminoType: "cosmos-sdk/Denom",
  encode(message: Denom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }
    for (const v of message.trace) {
      Hop.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Denom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base = reader.string();
          break;
        case 3:
          message.trace.push(Hop.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Denom>): Denom {
    const message = createBaseDenom();
    message.base = object.base ?? "";
    message.trace = object.trace?.map(e => Hop.fromPartial(e)) || [];
    return message;
  }
};