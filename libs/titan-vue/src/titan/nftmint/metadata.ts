import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** Metadata represents class's and token's metadata. */
export interface Metadata {
  data: string;
}
export interface MetadataProtoMsg {
  typeUrl: "/titan.nftmint.Metadata";
  value: Uint8Array;
}
/** Metadata represents class's and token's metadata. */
export interface MetadataAmino {
  data: string;
}
export interface MetadataAminoMsg {
  type: "/titan.nftmint.Metadata";
  value: MetadataAmino;
}
function createBaseMetadata(): Metadata {
  return {
    data: ""
  };
}
export const Metadata = {
  typeUrl: "/titan.nftmint.Metadata",
  is(o: any): o is Metadata {
    return o && (o.$typeUrl === Metadata.typeUrl || typeof o.data === "string");
  },
  isAmino(o: any): o is MetadataAmino {
    return o && (o.$typeUrl === Metadata.typeUrl || typeof o.data === "string");
  },
  encode(message: Metadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.data = object.data ?? "";
    return message;
  },
  fromAmino(object: MetadataAmino): Metadata {
    const message = createBaseMetadata();
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    return message;
  },
  toAmino(message: Metadata): MetadataAmino {
    const obj: any = {};
    obj.data = message.data === "" ? undefined : message.data;
    return obj;
  },
  fromAminoMsg(object: MetadataAminoMsg): Metadata {
    return Metadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MetadataProtoMsg): Metadata {
    return Metadata.decode(message.value);
  },
  toProto(message: Metadata): Uint8Array {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message: Metadata): MetadataProtoMsg {
    return {
      typeUrl: "/titan.nftmint.Metadata",
      value: Metadata.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};