import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** EventCreateClass is emitted on CreateClass. */
export interface EventCreateClass {
  /** id is a unique identifier of the class. */
  id: string;
  /** owner is the owner address of the class. */
  owner: string;
}
export interface EventCreateClassProtoMsg {
  typeUrl: "/titan.nftmint.EventCreateClass";
  value: Uint8Array;
}
/** EventCreateClass is emitted on CreateClass. */
export interface EventCreateClassAmino {
  /** id is a unique identifier of the class. */
  id: string;
  /** owner is the owner address of the class. */
  owner: string;
}
export interface EventCreateClassAminoMsg {
  type: "/titan.nftmint.EventCreateClass";
  value: EventCreateClassAmino;
}
/** EventUpdateClass is emitted on UpdateClass. */
export interface EventUpdateClass {
  /** id is a unique identifier of the class. */
  id: string;
}
export interface EventUpdateClassProtoMsg {
  typeUrl: "/titan.nftmint.EventUpdateClass";
  value: Uint8Array;
}
/** EventUpdateClass is emitted on UpdateClass. */
export interface EventUpdateClassAmino {
  /** id is a unique identifier of the class. */
  id: string;
}
export interface EventUpdateClassAminoMsg {
  type: "/titan.nftmint.EventUpdateClass";
  value: EventUpdateClassAmino;
}
/** EventTransferClass is emitted on TransferClass. */
export interface EventTransferClass {
  /** id is a unique identifier of the class. */
  id: string;
  /** old_owner is the old owner address of the class. */
  oldOwner: string;
  /** new_owner is the new owner address of the class. */
  newOwner: string;
}
export interface EventTransferClassProtoMsg {
  typeUrl: "/titan.nftmint.EventTransferClass";
  value: Uint8Array;
}
/** EventTransferClass is emitted on TransferClass. */
export interface EventTransferClassAmino {
  /** id is a unique identifier of the class. */
  id: string;
  /** old_owner is the old owner address of the class. */
  old_owner: string;
  /** new_owner is the new owner address of the class. */
  new_owner: string;
}
export interface EventTransferClassAminoMsg {
  type: "/titan.nftmint.EventTransferClass";
  value: EventTransferClassAmino;
}
function createBaseEventCreateClass(): EventCreateClass {
  return {
    id: "",
    owner: ""
  };
}
export const EventCreateClass = {
  typeUrl: "/titan.nftmint.EventCreateClass",
  is(o: any): o is EventCreateClass {
    return o && (o.$typeUrl === EventCreateClass.typeUrl || typeof o.id === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is EventCreateClassAmino {
    return o && (o.$typeUrl === EventCreateClass.typeUrl || typeof o.id === "string" && typeof o.owner === "string");
  },
  encode(message: EventCreateClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateClass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCreateClass>): EventCreateClass {
    const message = createBaseEventCreateClass();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventCreateClassAmino): EventCreateClass {
    const message = createBaseEventCreateClass();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: EventCreateClass): EventCreateClassAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: EventCreateClassAminoMsg): EventCreateClass {
    return EventCreateClass.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateClassProtoMsg): EventCreateClass {
    return EventCreateClass.decode(message.value);
  },
  toProto(message: EventCreateClass): Uint8Array {
    return EventCreateClass.encode(message).finish();
  },
  toProtoMsg(message: EventCreateClass): EventCreateClassProtoMsg {
    return {
      typeUrl: "/titan.nftmint.EventCreateClass",
      value: EventCreateClass.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventUpdateClass(): EventUpdateClass {
  return {
    id: ""
  };
}
export const EventUpdateClass = {
  typeUrl: "/titan.nftmint.EventUpdateClass",
  is(o: any): o is EventUpdateClass {
    return o && (o.$typeUrl === EventUpdateClass.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is EventUpdateClassAmino {
    return o && (o.$typeUrl === EventUpdateClass.typeUrl || typeof o.id === "string");
  },
  encode(message: EventUpdateClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateClass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateClass();
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
  fromPartial(object: DeepPartial<EventUpdateClass>): EventUpdateClass {
    const message = createBaseEventUpdateClass();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: EventUpdateClassAmino): EventUpdateClass {
    const message = createBaseEventUpdateClass();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: EventUpdateClass): EventUpdateClassAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: EventUpdateClassAminoMsg): EventUpdateClass {
    return EventUpdateClass.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateClassProtoMsg): EventUpdateClass {
    return EventUpdateClass.decode(message.value);
  },
  toProto(message: EventUpdateClass): Uint8Array {
    return EventUpdateClass.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateClass): EventUpdateClassProtoMsg {
    return {
      typeUrl: "/titan.nftmint.EventUpdateClass",
      value: EventUpdateClass.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventTransferClass(): EventTransferClass {
  return {
    id: "",
    oldOwner: "",
    newOwner: ""
  };
}
export const EventTransferClass = {
  typeUrl: "/titan.nftmint.EventTransferClass",
  is(o: any): o is EventTransferClass {
    return o && (o.$typeUrl === EventTransferClass.typeUrl || typeof o.id === "string" && typeof o.oldOwner === "string" && typeof o.newOwner === "string");
  },
  isAmino(o: any): o is EventTransferClassAmino {
    return o && (o.$typeUrl === EventTransferClass.typeUrl || typeof o.id === "string" && typeof o.old_owner === "string" && typeof o.new_owner === "string");
  },
  encode(message: EventTransferClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.oldOwner !== "") {
      writer.uint32(18).string(message.oldOwner);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventTransferClass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTransferClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.oldOwner = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventTransferClass>): EventTransferClass {
    const message = createBaseEventTransferClass();
    message.id = object.id ?? "";
    message.oldOwner = object.oldOwner ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
  fromAmino(object: EventTransferClassAmino): EventTransferClass {
    const message = createBaseEventTransferClass();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.old_owner !== undefined && object.old_owner !== null) {
      message.oldOwner = object.old_owner;
    }
    if (object.new_owner !== undefined && object.new_owner !== null) {
      message.newOwner = object.new_owner;
    }
    return message;
  },
  toAmino(message: EventTransferClass): EventTransferClassAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.old_owner = message.oldOwner === "" ? undefined : message.oldOwner;
    obj.new_owner = message.newOwner === "" ? undefined : message.newOwner;
    return obj;
  },
  fromAminoMsg(object: EventTransferClassAminoMsg): EventTransferClass {
    return EventTransferClass.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTransferClassProtoMsg): EventTransferClass {
    return EventTransferClass.decode(message.value);
  },
  toProto(message: EventTransferClass): Uint8Array {
    return EventTransferClass.encode(message).finish();
  },
  toProtoMsg(message: EventTransferClass): EventTransferClassProtoMsg {
    return {
      typeUrl: "/titan.nftmint.EventTransferClass",
      value: EventTransferClass.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};