import { Params, ParamsAmino, State, StateAmino } from "./evm";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the evm module's genesis state. */
export interface GenesisState {
  /** accounts is an array containing the ethereum genesis accounts. */
  accounts: GenesisAccount[];
  /** params defines all the parameters of the module. */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ethermint.evm.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the evm module's genesis state. */
export interface GenesisStateAmino {
  /** accounts is an array containing the ethereum genesis accounts. */
  accounts: GenesisAccountAmino[];
  /** params defines all the parameters of the module. */
  params: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/ethermint.evm.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * GenesisAccount defines an account to be initialized in the genesis state.
 * Its main difference between with Geth's GenesisAccount is that it uses a
 * custom storage type and that it doesn't contain the private key field.
 */
export interface GenesisAccount {
  /** address defines an ethereum hex formated address of an account */
  address: string;
  /** code defines the hex bytes of the account code. */
  code: string;
  /** storage defines the set of state key values for the account. */
  storage: State[];
}
export interface GenesisAccountProtoMsg {
  typeUrl: "/ethermint.evm.v1.GenesisAccount";
  value: Uint8Array;
}
/**
 * GenesisAccount defines an account to be initialized in the genesis state.
 * Its main difference between with Geth's GenesisAccount is that it uses a
 * custom storage type and that it doesn't contain the private key field.
 */
export interface GenesisAccountAmino {
  /** address defines an ethereum hex formated address of an account */
  address: string;
  /** code defines the hex bytes of the account code. */
  code: string;
  /** storage defines the set of state key values for the account. */
  storage: StateAmino[];
}
export interface GenesisAccountAminoMsg {
  type: "/ethermint.evm.v1.GenesisAccount";
  value: GenesisAccountAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    accounts: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/ethermint.evm.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || GenesisAccount.is(o.accounts[0])) && Params.is(o.params));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || GenesisAccount.isAmino(o.accounts[0])) && Params.isAmino(o.params));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      GenesisAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.accounts.push(GenesisAccount.decode(reader, reader.uint32()));
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
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
    message.accounts = object.accounts?.map(e => GenesisAccount.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.accounts = object.accounts?.map(e => GenesisAccount.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? GenesisAccount.toAmino(e) : undefined);
    } else {
      obj.accounts = message.accounts;
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
      typeUrl: "/ethermint.evm.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    GenesisAccount.registerTypeUrl();
    Params.registerTypeUrl();
  }
};
function createBaseGenesisAccount(): GenesisAccount {
  return {
    address: "",
    code: "",
    storage: []
  };
}
export const GenesisAccount = {
  typeUrl: "/ethermint.evm.v1.GenesisAccount",
  is(o: any): o is GenesisAccount {
    return o && (o.$typeUrl === GenesisAccount.typeUrl || typeof o.address === "string" && typeof o.code === "string" && Array.isArray(o.storage) && (!o.storage.length || State.is(o.storage[0])));
  },
  isAmino(o: any): o is GenesisAccountAmino {
    return o && (o.$typeUrl === GenesisAccount.typeUrl || typeof o.address === "string" && typeof o.code === "string" && Array.isArray(o.storage) && (!o.storage.length || State.isAmino(o.storage[0])));
  },
  encode(message: GenesisAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    for (const v of message.storage) {
      State.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.storage.push(State.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisAccount>): GenesisAccount {
    const message = createBaseGenesisAccount();
    message.address = object.address ?? "";
    message.code = object.code ?? "";
    message.storage = object.storage?.map(e => State.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisAccountAmino): GenesisAccount {
    const message = createBaseGenesisAccount();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    message.storage = object.storage?.map(e => State.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisAccount): GenesisAccountAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.code = message.code === "" ? undefined : message.code;
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? State.toAmino(e) : undefined);
    } else {
      obj.storage = message.storage;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisAccountAminoMsg): GenesisAccount {
    return GenesisAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisAccountProtoMsg): GenesisAccount {
    return GenesisAccount.decode(message.value);
  },
  toProto(message: GenesisAccount): Uint8Array {
    return GenesisAccount.encode(message).finish();
  },
  toProtoMsg(message: GenesisAccount): GenesisAccountProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.GenesisAccount",
      value: GenesisAccount.encode(message).finish()
    };
  },
  registerTypeUrl() {
    State.registerTypeUrl();
  }
};