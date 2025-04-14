import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** MintingInfo defines the minting info for a class. */
export interface MintingInfo {
  /** class_id is a unique identifier of the class. */
  classId: string;
  /** owner is the owner address of the class. */
  owner: string;
  /**
   * next_token_id is the unique identifier of the next token that will be
   * minted under this class.
   */
  nextTokenId: bigint;
}
export interface MintingInfoProtoMsg {
  typeUrl: "/titan.nftmint.MintingInfo";
  value: Uint8Array;
}
/** MintingInfo defines the minting info for a class. */
export interface MintingInfoAmino {
  /** class_id is a unique identifier of the class. */
  class_id: string;
  /** owner is the owner address of the class. */
  owner: string;
  /**
   * next_token_id is the unique identifier of the next token that will be
   * minted under this class.
   */
  next_token_id: string;
}
export interface MintingInfoAminoMsg {
  type: "/titan.nftmint.MintingInfo";
  value: MintingInfoAmino;
}
function createBaseMintingInfo(): MintingInfo {
  return {
    classId: "",
    owner: "",
    nextTokenId: BigInt(0)
  };
}
export const MintingInfo = {
  typeUrl: "/titan.nftmint.MintingInfo",
  is(o: any): o is MintingInfo {
    return o && (o.$typeUrl === MintingInfo.typeUrl || typeof o.classId === "string" && typeof o.owner === "string" && typeof o.nextTokenId === "bigint");
  },
  isAmino(o: any): o is MintingInfoAmino {
    return o && (o.$typeUrl === MintingInfo.typeUrl || typeof o.class_id === "string" && typeof o.owner === "string" && typeof o.next_token_id === "bigint");
  },
  encode(message: MintingInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.nextTokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.nextTokenId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MintingInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.nextTokenId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MintingInfo>): MintingInfo {
    const message = createBaseMintingInfo();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    message.nextTokenId = object.nextTokenId !== undefined && object.nextTokenId !== null ? BigInt(object.nextTokenId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MintingInfoAmino): MintingInfo {
    const message = createBaseMintingInfo();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.next_token_id !== undefined && object.next_token_id !== null) {
      message.nextTokenId = BigInt(object.next_token_id);
    }
    return message;
  },
  toAmino(message: MintingInfo): MintingInfoAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.next_token_id = message.nextTokenId !== BigInt(0) ? message.nextTokenId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MintingInfoAminoMsg): MintingInfo {
    return MintingInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: MintingInfoProtoMsg): MintingInfo {
    return MintingInfo.decode(message.value);
  },
  toProto(message: MintingInfo): Uint8Array {
    return MintingInfo.encode(message).finish();
  },
  toProtoMsg(message: MintingInfo): MintingInfoProtoMsg {
    return {
      typeUrl: "/titan.nftmint.MintingInfo",
      value: MintingInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};