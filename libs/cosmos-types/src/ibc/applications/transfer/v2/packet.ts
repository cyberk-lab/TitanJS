import { Token } from "./token";
import { Hop } from "../v1/transfer";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketData {
  /** the token denomination to be transferred */
  denom: string;
  /** the token amount to be transferred */
  amount: string;
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /** optional memo */
  memo: string;
}
/**
 * FungibleTokenPacketDataV2 defines a struct for the packet payload
 * See FungibleTokenPacketDataV2 spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketDataV2 {
  /** the tokens to be transferred */
  tokens: Token[];
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /** optional memo */
  memo: string;
  /** optional forwarding information */
  forwarding: ForwardingPacketData;
}
/**
 * ForwardingPacketData defines a list of port ID, channel ID pairs determining the path
 * through which a packet must be forwarded, and the destination memo string to be used in the
 * final destination of the tokens.
 */
export interface ForwardingPacketData {
  /** optional memo consumed by final destination chain */
  destinationMemo: string;
  /** optional intermediate path through which packet will be forwarded. */
  hops: Hop[];
}
function createBaseFungibleTokenPacketData(): FungibleTokenPacketData {
  return {
    denom: "",
    amount: "",
    sender: "",
    receiver: "",
    memo: ""
  };
}
export const FungibleTokenPacketData = {
  typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketData",
  aminoType: "cosmos-sdk/FungibleTokenPacketData",
  encode(message: FungibleTokenPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    if (message.memo !== "") {
      writer.uint32(42).string(message.memo);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FungibleTokenPacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFungibleTokenPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
          break;
        case 5:
          message.memo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FungibleTokenPacketData>): FungibleTokenPacketData {
    const message = createBaseFungibleTokenPacketData();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.memo = object.memo ?? "";
    return message;
  }
};
function createBaseFungibleTokenPacketDataV2(): FungibleTokenPacketDataV2 {
  return {
    tokens: [],
    sender: "",
    receiver: "",
    memo: "",
    forwarding: ForwardingPacketData.fromPartial({})
  };
}
export const FungibleTokenPacketDataV2 = {
  typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketDataV2",
  aminoType: "cosmos-sdk/FungibleTokenPacketDataV2",
  encode(message: FungibleTokenPacketDataV2, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.memo !== "") {
      writer.uint32(34).string(message.memo);
    }
    if (message.forwarding !== undefined) {
      ForwardingPacketData.encode(message.forwarding, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FungibleTokenPacketDataV2 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFungibleTokenPacketDataV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens.push(Token.decode(reader, reader.uint32()));
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.memo = reader.string();
          break;
        case 5:
          message.forwarding = ForwardingPacketData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FungibleTokenPacketDataV2>): FungibleTokenPacketDataV2 {
    const message = createBaseFungibleTokenPacketDataV2();
    message.tokens = object.tokens?.map(e => Token.fromPartial(e)) || [];
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.memo = object.memo ?? "";
    message.forwarding = object.forwarding !== undefined && object.forwarding !== null ? ForwardingPacketData.fromPartial(object.forwarding) : undefined;
    return message;
  }
};
function createBaseForwardingPacketData(): ForwardingPacketData {
  return {
    destinationMemo: "",
    hops: []
  };
}
export const ForwardingPacketData = {
  typeUrl: "/ibc.applications.transfer.v2.ForwardingPacketData",
  aminoType: "cosmos-sdk/ForwardingPacketData",
  encode(message: ForwardingPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.destinationMemo !== "") {
      writer.uint32(10).string(message.destinationMemo);
    }
    for (const v of message.hops) {
      Hop.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ForwardingPacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardingPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destinationMemo = reader.string();
          break;
        case 2:
          message.hops.push(Hop.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ForwardingPacketData>): ForwardingPacketData {
    const message = createBaseForwardingPacketData();
    message.destinationMemo = object.destinationMemo ?? "";
    message.hops = object.hops?.map(e => Hop.fromPartial(e)) || [];
    return message;
  }
};