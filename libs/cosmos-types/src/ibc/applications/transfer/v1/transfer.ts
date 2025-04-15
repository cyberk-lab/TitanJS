import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface Params {
  /**
   * send_enabled enables or disables all cross-chain token transfers from this
   * chain.
   */
  sendEnabled: boolean;
  /**
   * receive_enabled enables or disables all cross-chain token transfers to this
   * chain.
   */
  receiveEnabled: boolean;
}
/**
 * Forwarding defines a list of port ID, channel ID pairs determining the path
 * through which a packet must be forwarded, and an unwind boolean indicating if
 * the coin should be unwinded to its native chain before forwarding.
 */
export interface Forwarding {
  /** optional unwinding for the token transfered */
  unwind: boolean;
  /** optional intermediate path through which packet will be forwarded */
  hops: Hop[];
}
/**
 * Hop defines a port ID, channel ID pair specifying where tokens must be forwarded
 * next in a multihop transfer.
 */
export interface Hop {
  portId: string;
  channelId: string;
}
function createBaseParams(): Params {
  return {
    sendEnabled: false,
    receiveEnabled: false
  };
}
export const Params = {
  typeUrl: "/ibc.applications.transfer.v1.Params",
  aminoType: "cosmos-sdk/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sendEnabled === true) {
      writer.uint32(8).bool(message.sendEnabled);
    }
    if (message.receiveEnabled === true) {
      writer.uint32(16).bool(message.receiveEnabled);
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
          message.sendEnabled = reader.bool();
          break;
        case 2:
          message.receiveEnabled = reader.bool();
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
    message.sendEnabled = object.sendEnabled ?? false;
    message.receiveEnabled = object.receiveEnabled ?? false;
    return message;
  }
};
function createBaseForwarding(): Forwarding {
  return {
    unwind: false,
    hops: []
  };
}
export const Forwarding = {
  typeUrl: "/ibc.applications.transfer.v1.Forwarding",
  aminoType: "cosmos-sdk/Forwarding",
  encode(message: Forwarding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unwind === true) {
      writer.uint32(8).bool(message.unwind);
    }
    for (const v of message.hops) {
      Hop.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Forwarding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwarding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unwind = reader.bool();
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
  fromPartial(object: DeepPartial<Forwarding>): Forwarding {
    const message = createBaseForwarding();
    message.unwind = object.unwind ?? false;
    message.hops = object.hops?.map(e => Hop.fromPartial(e)) || [];
    return message;
  }
};
function createBaseHop(): Hop {
  return {
    portId: "",
    channelId: ""
  };
}
export const Hop = {
  typeUrl: "/ibc.applications.transfer.v1.Hop",
  aminoType: "cosmos-sdk/Hop",
  encode(message: Hop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Hop {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Hop>): Hop {
    const message = createBaseHop();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  }
};