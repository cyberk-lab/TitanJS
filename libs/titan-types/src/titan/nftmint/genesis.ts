import { Params, ParamsAmino } from "./params";
import { SystemInfo, SystemInfoAmino } from "./system_info";
import { MintingInfo, MintingInfoAmino } from "./minting_info";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** GenesisState defines the nftmint module's genesis state. */
export interface GenesisState {
  params: Params;
  systemInfo: SystemInfo;
  mintingInfoList: MintingInfo[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/titan.nftmint.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the nftmint module's genesis state. */
export interface GenesisStateAmino {
  params: ParamsAmino;
  system_info: SystemInfoAmino;
  minting_info_list: MintingInfoAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/titan.nftmint.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    systemInfo: SystemInfo.fromPartial({}),
    mintingInfoList: []
  };
}
export const GenesisState = {
  typeUrl: "/titan.nftmint.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && SystemInfo.is(o.systemInfo) && Array.isArray(o.mintingInfoList) && (!o.mintingInfoList.length || MintingInfo.is(o.mintingInfoList[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && SystemInfo.isAmino(o.system_info) && Array.isArray(o.minting_info_list) && (!o.minting_info_list.length || MintingInfo.isAmino(o.minting_info_list[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.systemInfo !== undefined) {
      SystemInfo.encode(message.systemInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.mintingInfoList) {
      MintingInfo.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.systemInfo = SystemInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.mintingInfoList.push(MintingInfo.decode(reader, reader.uint32()));
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.systemInfo = object.systemInfo !== undefined && object.systemInfo !== null ? SystemInfo.fromPartial(object.systemInfo) : undefined;
    message.mintingInfoList = object.mintingInfoList?.map(e => MintingInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.system_info !== undefined && object.system_info !== null) {
      message.systemInfo = SystemInfo.fromAmino(object.system_info);
    }
    message.mintingInfoList = object.minting_info_list?.map(e => MintingInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.system_info = message.systemInfo ? SystemInfo.toAmino(message.systemInfo) : undefined;
    if (message.mintingInfoList) {
      obj.minting_info_list = message.mintingInfoList.map(e => e ? MintingInfo.toAmino(e) : undefined);
    } else {
      obj.minting_info_list = message.mintingInfoList;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/titan.nftmint.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Params.registerTypeUrl();
    SystemInfo.registerTypeUrl();
    MintingInfo.registerTypeUrl();
  }
};