import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** Module is the config object of the consensus module. */
export interface Module {
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
function createBaseModule(): Module {
  return {
    authority: ""
  };
}
export const Module = {
  typeUrl: "/cosmos.consensus.module.v1.Module",
  aminoType: "cosmos-sdk/Module",
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Module>): Module {
    const message = createBaseModule();
    message.authority = object.authority ?? "";
    return message;
  }
};