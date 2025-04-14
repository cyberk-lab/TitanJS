import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** SystemInfo defines the system info of this module. */
export interface SystemInfo {
  /**
   * next_class_id is the unique identifier of the next class that will be
   * created.
   */
  nextClassId: bigint;
}
export interface SystemInfoProtoMsg {
  typeUrl: "/titan.nftmint.SystemInfo";
  value: Uint8Array;
}
/** SystemInfo defines the system info of this module. */
export interface SystemInfoAmino {
  /**
   * next_class_id is the unique identifier of the next class that will be
   * created.
   */
  next_class_id: string;
}
export interface SystemInfoAminoMsg {
  type: "/titan.nftmint.SystemInfo";
  value: SystemInfoAmino;
}
function createBaseSystemInfo(): SystemInfo {
  return {
    nextClassId: BigInt(0)
  };
}
export const SystemInfo = {
  typeUrl: "/titan.nftmint.SystemInfo",
  is(o: any): o is SystemInfo {
    return o && (o.$typeUrl === SystemInfo.typeUrl || typeof o.nextClassId === "bigint");
  },
  isAmino(o: any): o is SystemInfoAmino {
    return o && (o.$typeUrl === SystemInfo.typeUrl || typeof o.next_class_id === "bigint");
  },
  encode(message: SystemInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextClassId !== BigInt(0)) {
      writer.uint32(8).uint64(message.nextClassId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SystemInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextClassId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SystemInfo>): SystemInfo {
    const message = createBaseSystemInfo();
    message.nextClassId = object.nextClassId !== undefined && object.nextClassId !== null ? BigInt(object.nextClassId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SystemInfoAmino): SystemInfo {
    const message = createBaseSystemInfo();
    if (object.next_class_id !== undefined && object.next_class_id !== null) {
      message.nextClassId = BigInt(object.next_class_id);
    }
    return message;
  },
  toAmino(message: SystemInfo): SystemInfoAmino {
    const obj: any = {};
    obj.next_class_id = message.nextClassId !== BigInt(0) ? message.nextClassId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SystemInfoAminoMsg): SystemInfo {
    return SystemInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: SystemInfoProtoMsg): SystemInfo {
    return SystemInfo.decode(message.value);
  },
  toProto(message: SystemInfo): Uint8Array {
    return SystemInfo.encode(message).finish();
  },
  toProtoMsg(message: SystemInfo): SystemInfoProtoMsg {
    return {
      typeUrl: "/titan.nftmint.SystemInfo",
      value: SystemInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};