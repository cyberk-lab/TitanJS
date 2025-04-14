import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** MsgCreateClass represents a message to create new class. */
export interface MsgCreateClass {
  creator: string;
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uriHash: string;
  data: string;
}
export interface MsgCreateClassProtoMsg {
  typeUrl: "/titan.nftmint.MsgCreateClass";
  value: Uint8Array;
}
/** MsgCreateClass represents a message to create new class. */
export interface MsgCreateClassAmino {
  creator: string;
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uri_hash: string;
  data: string;
}
export interface MsgCreateClassAminoMsg {
  type: "/titan.nftmint.MsgCreateClass";
  value: MsgCreateClassAmino;
}
/** MsgCreateClassResponse defines the Msg/CreateClass response type. */
export interface MsgCreateClassResponse {
  id: string;
}
export interface MsgCreateClassResponseProtoMsg {
  typeUrl: "/titan.nftmint.MsgCreateClassResponse";
  value: Uint8Array;
}
/** MsgCreateClassResponse defines the Msg/CreateClass response type. */
export interface MsgCreateClassResponseAmino {
  id: string;
}
export interface MsgCreateClassResponseAminoMsg {
  type: "/titan.nftmint.MsgCreateClassResponse";
  value: MsgCreateClassResponseAmino;
}
/** MsgUpdateClass represents a message to update a class. */
export interface MsgUpdateClass {
  creator: string;
  id: string;
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uriHash: string;
  data: string;
}
export interface MsgUpdateClassProtoMsg {
  typeUrl: "/titan.nftmint.MsgUpdateClass";
  value: Uint8Array;
}
/** MsgUpdateClass represents a message to update a class. */
export interface MsgUpdateClassAmino {
  creator: string;
  id: string;
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uri_hash: string;
  data: string;
}
export interface MsgUpdateClassAminoMsg {
  type: "/titan.nftmint.MsgUpdateClass";
  value: MsgUpdateClassAmino;
}
/** MsgUpdateClassResponse defines the Msg/UpdateClass response type. */
export interface MsgUpdateClassResponse {}
export interface MsgUpdateClassResponseProtoMsg {
  typeUrl: "/titan.nftmint.MsgUpdateClassResponse";
  value: Uint8Array;
}
/** MsgUpdateClassResponse defines the Msg/UpdateClass response type. */
export interface MsgUpdateClassResponseAmino {}
export interface MsgUpdateClassResponseAminoMsg {
  type: "/titan.nftmint.MsgUpdateClassResponse";
  value: MsgUpdateClassResponseAmino;
}
/** MsgTransferClass represents a message to transfer a class to new owner. */
export interface MsgTransferClass {
  creator: string;
  classId: string;
  receiver: string;
}
export interface MsgTransferClassProtoMsg {
  typeUrl: "/titan.nftmint.MsgTransferClass";
  value: Uint8Array;
}
/** MsgTransferClass represents a message to transfer a class to new owner. */
export interface MsgTransferClassAmino {
  creator: string;
  class_id: string;
  receiver: string;
}
export interface MsgTransferClassAminoMsg {
  type: "/titan.nftmint.MsgTransferClass";
  value: MsgTransferClassAmino;
}
/** MsgTransferClassResponse defines the Msg/TransferClass response type. */
export interface MsgTransferClassResponse {}
export interface MsgTransferClassResponseProtoMsg {
  typeUrl: "/titan.nftmint.MsgTransferClassResponse";
  value: Uint8Array;
}
/** MsgTransferClassResponse defines the Msg/TransferClass response type. */
export interface MsgTransferClassResponseAmino {}
export interface MsgTransferClassResponseAminoMsg {
  type: "/titan.nftmint.MsgTransferClassResponse";
  value: MsgTransferClassResponseAmino;
}
/** MsgMint represents a message to mint new NFT. */
export interface MsgMint {
  creator: string;
  receiver: string;
  classId: string;
  uri: string;
  uriHash: string;
  data: string;
}
export interface MsgMintProtoMsg {
  typeUrl: "/titan.nftmint.MsgMint";
  value: Uint8Array;
}
/** MsgMint represents a message to mint new NFT. */
export interface MsgMintAmino {
  creator: string;
  receiver: string;
  class_id: string;
  uri: string;
  uri_hash: string;
  data: string;
}
export interface MsgMintAminoMsg {
  type: "/titan.nftmint.MsgMint";
  value: MsgMintAmino;
}
/** MsgMintResponse defines the Msg/Mint response type. */
export interface MsgMintResponse {
  id: string;
}
export interface MsgMintResponseProtoMsg {
  typeUrl: "/titan.nftmint.MsgMintResponse";
  value: Uint8Array;
}
/** MsgMintResponse defines the Msg/Mint response type. */
export interface MsgMintResponseAmino {
  id: string;
}
export interface MsgMintResponseAminoMsg {
  type: "/titan.nftmint.MsgMintResponse";
  value: MsgMintResponseAmino;
}
function createBaseMsgCreateClass(): MsgCreateClass {
  return {
    creator: "",
    name: "",
    symbol: "",
    description: "",
    uri: "",
    uriHash: "",
    data: ""
  };
}
export const MsgCreateClass = {
  typeUrl: "/titan.nftmint.MsgCreateClass",
  is(o: any): o is MsgCreateClass {
    return o && (o.$typeUrl === MsgCreateClass.typeUrl || typeof o.creator === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.description === "string" && typeof o.uri === "string" && typeof o.uriHash === "string" && typeof o.data === "string");
  },
  isAmino(o: any): o is MsgCreateClassAmino {
    return o && (o.$typeUrl === MsgCreateClass.typeUrl || typeof o.creator === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.description === "string" && typeof o.uri === "string" && typeof o.uri_hash === "string" && typeof o.data === "string");
  },
  encode(message: MsgCreateClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(50).string(message.uriHash);
    }
    if (message.data !== "") {
      writer.uint32(58).string(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.uri = reader.string();
          break;
        case 6:
          message.uriHash = reader.string();
          break;
        case 7:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateClass>): MsgCreateClass {
    const message = createBaseMsgCreateClass();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data ?? "";
    return message;
  },
  fromAmino(object: MsgCreateClassAmino): MsgCreateClass {
    const message = createBaseMsgCreateClass();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    return message;
  },
  toAmino(message: MsgCreateClass): MsgCreateClassAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.description = message.description === "" ? undefined : message.description;
    obj.uri = message.uri === "" ? undefined : message.uri;
    obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
    obj.data = message.data === "" ? undefined : message.data;
    return obj;
  },
  fromAminoMsg(object: MsgCreateClassAminoMsg): MsgCreateClass {
    return MsgCreateClass.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateClassProtoMsg): MsgCreateClass {
    return MsgCreateClass.decode(message.value);
  },
  toProto(message: MsgCreateClass): Uint8Array {
    return MsgCreateClass.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClass): MsgCreateClassProtoMsg {
    return {
      typeUrl: "/titan.nftmint.MsgCreateClass",
      value: MsgCreateClass.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateClassResponse(): MsgCreateClassResponse {
  return {
    id: ""
  };
}
export const MsgCreateClassResponse = {
  typeUrl: "/titan.nftmint.MsgCreateClassResponse",
  is(o: any): o is MsgCreateClassResponse {
    return o && (o.$typeUrl === MsgCreateClassResponse.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is MsgCreateClassResponseAmino {
    return o && (o.$typeUrl === MsgCreateClassResponse.typeUrl || typeof o.id === "string");
  },
  encode(message: MsgCreateClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateClassResponse>): MsgCreateClassResponse {
    const message = createBaseMsgCreateClassResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgCreateClassResponseAmino): MsgCreateClassResponse {
    const message = createBaseMsgCreateClassResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgCreateClassResponse): MsgCreateClassResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: MsgCreateClassResponseAminoMsg): MsgCreateClassResponse {
    return MsgCreateClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateClassResponseProtoMsg): MsgCreateClassResponse {
    return MsgCreateClassResponse.decode(message.value);
  },
  toProto(message: MsgCreateClassResponse): Uint8Array {
    return MsgCreateClassResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClassResponse): MsgCreateClassResponseProtoMsg {
    return {
      typeUrl: "/titan.nftmint.MsgCreateClassResponse",
      value: MsgCreateClassResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateClass(): MsgUpdateClass {
  return {
    creator: "",
    id: "",
    name: "",
    symbol: "",
    description: "",
    uri: "",
    uriHash: "",
    data: ""
  };
}
export const MsgUpdateClass = {
  typeUrl: "/titan.nftmint.MsgUpdateClass",
  is(o: any): o is MsgUpdateClass {
    return o && (o.$typeUrl === MsgUpdateClass.typeUrl || typeof o.creator === "string" && typeof o.id === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.description === "string" && typeof o.uri === "string" && typeof o.uriHash === "string" && typeof o.data === "string");
  },
  isAmino(o: any): o is MsgUpdateClassAmino {
    return o && (o.$typeUrl === MsgUpdateClass.typeUrl || typeof o.creator === "string" && typeof o.id === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.description === "string" && typeof o.uri === "string" && typeof o.uri_hash === "string" && typeof o.data === "string");
  },
  encode(message: MsgUpdateClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(50).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(58).string(message.uriHash);
    }
    if (message.data !== "") {
      writer.uint32(66).string(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.symbol = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.uri = reader.string();
          break;
        case 7:
          message.uriHash = reader.string();
          break;
        case 8:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateClass>): MsgUpdateClass {
    const message = createBaseMsgUpdateClass();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateClassAmino): MsgUpdateClass {
    const message = createBaseMsgUpdateClass();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    return message;
  },
  toAmino(message: MsgUpdateClass): MsgUpdateClassAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id === "" ? undefined : message.id;
    obj.name = message.name === "" ? undefined : message.name;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.description = message.description === "" ? undefined : message.description;
    obj.uri = message.uri === "" ? undefined : message.uri;
    obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
    obj.data = message.data === "" ? undefined : message.data;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassAminoMsg): MsgUpdateClass {
    return MsgUpdateClass.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassProtoMsg): MsgUpdateClass {
    return MsgUpdateClass.decode(message.value);
  },
  toProto(message: MsgUpdateClass): Uint8Array {
    return MsgUpdateClass.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClass): MsgUpdateClassProtoMsg {
    return {
      typeUrl: "/titan.nftmint.MsgUpdateClass",
      value: MsgUpdateClass.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateClassResponse(): MsgUpdateClassResponse {
  return {};
}
export const MsgUpdateClassResponse = {
  typeUrl: "/titan.nftmint.MsgUpdateClassResponse",
  is(o: any): o is MsgUpdateClassResponse {
    return o && o.$typeUrl === MsgUpdateClassResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateClassResponseAmino {
    return o && o.$typeUrl === MsgUpdateClassResponse.typeUrl;
  },
  encode(_: MsgUpdateClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateClassResponse>): MsgUpdateClassResponse {
    const message = createBaseMsgUpdateClassResponse();
    return message;
  },
  fromAmino(_: MsgUpdateClassResponseAmino): MsgUpdateClassResponse {
    const message = createBaseMsgUpdateClassResponse();
    return message;
  },
  toAmino(_: MsgUpdateClassResponse): MsgUpdateClassResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassResponseAminoMsg): MsgUpdateClassResponse {
    return MsgUpdateClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassResponseProtoMsg): MsgUpdateClassResponse {
    return MsgUpdateClassResponse.decode(message.value);
  },
  toProto(message: MsgUpdateClassResponse): Uint8Array {
    return MsgUpdateClassResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClassResponse): MsgUpdateClassResponseProtoMsg {
    return {
      typeUrl: "/titan.nftmint.MsgUpdateClassResponse",
      value: MsgUpdateClassResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgTransferClass(): MsgTransferClass {
  return {
    creator: "",
    classId: "",
    receiver: ""
  };
}
export const MsgTransferClass = {
  typeUrl: "/titan.nftmint.MsgTransferClass",
  is(o: any): o is MsgTransferClass {
    return o && (o.$typeUrl === MsgTransferClass.typeUrl || typeof o.creator === "string" && typeof o.classId === "string" && typeof o.receiver === "string");
  },
  isAmino(o: any): o is MsgTransferClassAmino {
    return o && (o.$typeUrl === MsgTransferClass.typeUrl || typeof o.creator === "string" && typeof o.class_id === "string" && typeof o.receiver === "string");
  },
  encode(message: MsgTransferClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferClass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTransferClass>): MsgTransferClass {
    const message = createBaseMsgTransferClass();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: MsgTransferClassAmino): MsgTransferClass {
    const message = createBaseMsgTransferClass();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: MsgTransferClass): MsgTransferClassAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: MsgTransferClassAminoMsg): MsgTransferClass {
    return MsgTransferClass.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferClassProtoMsg): MsgTransferClass {
    return MsgTransferClass.decode(message.value);
  },
  toProto(message: MsgTransferClass): Uint8Array {
    return MsgTransferClass.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferClass): MsgTransferClassProtoMsg {
    return {
      typeUrl: "/titan.nftmint.MsgTransferClass",
      value: MsgTransferClass.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgTransferClassResponse(): MsgTransferClassResponse {
  return {};
}
export const MsgTransferClassResponse = {
  typeUrl: "/titan.nftmint.MsgTransferClassResponse",
  is(o: any): o is MsgTransferClassResponse {
    return o && o.$typeUrl === MsgTransferClassResponse.typeUrl;
  },
  isAmino(o: any): o is MsgTransferClassResponseAmino {
    return o && o.$typeUrl === MsgTransferClassResponse.typeUrl;
  },
  encode(_: MsgTransferClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgTransferClassResponse>): MsgTransferClassResponse {
    const message = createBaseMsgTransferClassResponse();
    return message;
  },
  fromAmino(_: MsgTransferClassResponseAmino): MsgTransferClassResponse {
    const message = createBaseMsgTransferClassResponse();
    return message;
  },
  toAmino(_: MsgTransferClassResponse): MsgTransferClassResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferClassResponseAminoMsg): MsgTransferClassResponse {
    return MsgTransferClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferClassResponseProtoMsg): MsgTransferClassResponse {
    return MsgTransferClassResponse.decode(message.value);
  },
  toProto(message: MsgTransferClassResponse): Uint8Array {
    return MsgTransferClassResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferClassResponse): MsgTransferClassResponseProtoMsg {
    return {
      typeUrl: "/titan.nftmint.MsgTransferClassResponse",
      value: MsgTransferClassResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgMint(): MsgMint {
  return {
    creator: "",
    receiver: "",
    classId: "",
    uri: "",
    uriHash: "",
    data: ""
  };
}
export const MsgMint = {
  typeUrl: "/titan.nftmint.MsgMint",
  is(o: any): o is MsgMint {
    return o && (o.$typeUrl === MsgMint.typeUrl || typeof o.creator === "string" && typeof o.receiver === "string" && typeof o.classId === "string" && typeof o.uri === "string" && typeof o.uriHash === "string" && typeof o.data === "string");
  },
  isAmino(o: any): o is MsgMintAmino {
    return o && (o.$typeUrl === MsgMint.typeUrl || typeof o.creator === "string" && typeof o.receiver === "string" && typeof o.class_id === "string" && typeof o.uri === "string" && typeof o.uri_hash === "string" && typeof o.data === "string");
  },
  encode(message: MsgMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.classId !== "") {
      writer.uint32(26).string(message.classId);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(42).string(message.uriHash);
    }
    if (message.data !== "") {
      writer.uint32(50).string(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.classId = reader.string();
          break;
        case 4:
          message.uri = reader.string();
          break;
        case 5:
          message.uriHash = reader.string();
          break;
        case 6:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMint>): MsgMint {
    const message = createBaseMsgMint();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.classId = object.classId ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data ?? "";
    return message;
  },
  fromAmino(object: MsgMintAmino): MsgMint {
    const message = createBaseMsgMint();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    return message;
  },
  toAmino(message: MsgMint): MsgMintAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.uri = message.uri === "" ? undefined : message.uri;
    obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
    obj.data = message.data === "" ? undefined : message.data;
    return obj;
  },
  fromAminoMsg(object: MsgMintAminoMsg): MsgMint {
    return MsgMint.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintProtoMsg): MsgMint {
    return MsgMint.decode(message.value);
  },
  toProto(message: MsgMint): Uint8Array {
    return MsgMint.encode(message).finish();
  },
  toProtoMsg(message: MsgMint): MsgMintProtoMsg {
    return {
      typeUrl: "/titan.nftmint.MsgMint",
      value: MsgMint.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgMintResponse(): MsgMintResponse {
  return {
    id: ""
  };
}
export const MsgMintResponse = {
  typeUrl: "/titan.nftmint.MsgMintResponse",
  is(o: any): o is MsgMintResponse {
    return o && (o.$typeUrl === MsgMintResponse.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is MsgMintResponseAmino {
    return o && (o.$typeUrl === MsgMintResponse.typeUrl || typeof o.id === "string");
  },
  encode(message: MsgMintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMintResponse>): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgMintResponseAmino): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgMintResponse): MsgMintResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: MsgMintResponseAminoMsg): MsgMintResponse {
    return MsgMintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintResponseProtoMsg): MsgMintResponse {
    return MsgMintResponse.decode(message.value);
  },
  toProto(message: MsgMintResponse): Uint8Array {
    return MsgMintResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintResponse): MsgMintResponseProtoMsg {
    return {
      typeUrl: "/titan.nftmint.MsgMintResponse",
      value: MsgMintResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};