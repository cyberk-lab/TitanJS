import { Denom } from "./token";
import { Params } from "../v1/transfer";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { PacketId, Packet } from "../../../core/channel/v1/channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisState {
  portId: string;
  denoms: Denom[];
  params: Params;
  /**
   * total_escrowed contains the total amount of tokens escrowed
   * by the transfer module
   */
  totalEscrowed: Coin[];
  /**
   * forwarded_packets contains the forwarded packets stored as part of the
   * packet forwarding lifecycle
   */
  forwardedPackets: ForwardedPacket[];
}
/** ForwardedPacket defines the genesis type necessary to retrieve and store forwarded packets. */
export interface ForwardedPacket {
  forwardKey: PacketId;
  packet: Packet;
}
function createBaseGenesisState(): GenesisState {
  return {
    portId: "",
    denoms: [],
    params: Params.fromPartial({}),
    totalEscrowed: [],
    forwardedPackets: []
  };
}
export const GenesisState = {
  typeUrl: "/ibc.applications.transfer.v2.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    for (const v of message.denoms) {
      Denom.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.totalEscrowed) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.forwardedPackets) {
      ForwardedPacket.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.portId = reader.string();
          break;
        case 2:
          message.denoms.push(Denom.decode(reader, reader.uint32()));
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 4:
          message.totalEscrowed.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.forwardedPackets.push(ForwardedPacket.decode(reader, reader.uint32()));
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
    message.portId = object.portId ?? "";
    message.denoms = object.denoms?.map(e => Denom.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.totalEscrowed = object.totalEscrowed?.map(e => Coin.fromPartial(e)) || [];
    message.forwardedPackets = object.forwardedPackets?.map(e => ForwardedPacket.fromPartial(e)) || [];
    return message;
  }
};
function createBaseForwardedPacket(): ForwardedPacket {
  return {
    forwardKey: PacketId.fromPartial({}),
    packet: Packet.fromPartial({})
  };
}
export const ForwardedPacket = {
  typeUrl: "/ibc.applications.transfer.v2.ForwardedPacket",
  aminoType: "cosmos-sdk/ForwardedPacket",
  encode(message: ForwardedPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.forwardKey !== undefined) {
      PacketId.encode(message.forwardKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ForwardedPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardedPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.forwardKey = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ForwardedPacket>): ForwardedPacket {
    const message = createBaseForwardedPacket();
    message.forwardKey = object.forwardKey !== undefined && object.forwardKey !== null ? PacketId.fromPartial(object.forwardKey) : undefined;
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    return message;
  }
};