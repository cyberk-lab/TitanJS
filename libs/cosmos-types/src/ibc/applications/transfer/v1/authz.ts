import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Hop } from "./transfer";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** Allocation defines the spend limit for a particular port and channel */
export interface Allocation {
  /** the port on which the packet will be sent */
  sourcePort: string;
  /** the channel by which the packet will be sent */
  sourceChannel: string;
  /** spend limitation on the channel */
  spendLimit: Coin[];
  /** allow list of receivers, an empty allow list permits any receiver address */
  allowList: string[];
  /**
   * allow list of memo strings, an empty list prohibits all memo strings;
   * a list only with "*" permits any memo string
   */
  allowedPacketData: string[];
  /** Forwarding options that are allowed. */
  allowedForwarding: AllowedForwarding[];
}
/** AllowedForwarding defines which options are allowed for forwarding. */
export interface AllowedForwarding {
  /**
   * a list of allowed source port ID/channel ID pairs through which the packet is allowed to be forwarded until final
   * destination
   */
  hops: Hop[];
}
/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 */
export interface TransferAuthorization {
  /** port and channel amounts */
  allocations: Allocation[];
}
function createBaseAllocation(): Allocation {
  return {
    sourcePort: "",
    sourceChannel: "",
    spendLimit: [],
    allowList: [],
    allowedPacketData: [],
    allowedForwarding: []
  };
}
export const Allocation = {
  typeUrl: "/ibc.applications.transfer.v1.Allocation",
  aminoType: "cosmos-sdk/Allocation",
  encode(message: Allocation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourcePort !== "") {
      writer.uint32(10).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(18).string(message.sourceChannel);
    }
    for (const v of message.spendLimit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.allowList) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.allowedPacketData) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.allowedForwarding) {
      AllowedForwarding.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Allocation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourcePort = reader.string();
          break;
        case 2:
          message.sourceChannel = reader.string();
          break;
        case 3:
          message.spendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.allowList.push(reader.string());
          break;
        case 5:
          message.allowedPacketData.push(reader.string());
          break;
        case 6:
          message.allowedForwarding.push(AllowedForwarding.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Allocation>): Allocation {
    const message = createBaseAllocation();
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.spendLimit = object.spendLimit?.map(e => Coin.fromPartial(e)) || [];
    message.allowList = object.allowList?.map(e => e) || [];
    message.allowedPacketData = object.allowedPacketData?.map(e => e) || [];
    message.allowedForwarding = object.allowedForwarding?.map(e => AllowedForwarding.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAllowedForwarding(): AllowedForwarding {
  return {
    hops: []
  };
}
export const AllowedForwarding = {
  typeUrl: "/ibc.applications.transfer.v1.AllowedForwarding",
  aminoType: "cosmos-sdk/AllowedForwarding",
  encode(message: AllowedForwarding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.hops) {
      Hop.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllowedForwarding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedForwarding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hops.push(Hop.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AllowedForwarding>): AllowedForwarding {
    const message = createBaseAllowedForwarding();
    message.hops = object.hops?.map(e => Hop.fromPartial(e)) || [];
    return message;
  }
};
function createBaseTransferAuthorization(): TransferAuthorization {
  return {
    allocations: []
  };
}
export const TransferAuthorization = {
  typeUrl: "/ibc.applications.transfer.v1.TransferAuthorization",
  aminoType: "cosmos-sdk/TransferAuthorization",
  encode(message: TransferAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allocations) {
      Allocation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransferAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allocations.push(Allocation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TransferAuthorization>): TransferAuthorization {
    const message = createBaseTransferAuthorization();
    message.allocations = object.allocations?.map(e => Allocation.fromPartial(e)) || [];
    return message;
  }
};