import { Params, ParamsAmino } from "./feemarket";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the feemarket module. */
  params: Params;
  /**
   * block_gas is the amount of gas wanted on the last block before the upgrade.
   * Zero by default.
   */
  blockGas: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ethermint.feemarket.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the feemarket module. */
  params: ParamsAmino;
  /**
   * block_gas is the amount of gas wanted on the last block before the upgrade.
   * Zero by default.
   */
  block_gas: string;
}
export interface GenesisStateAminoMsg {
  type: "/ethermint.feemarket.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    blockGas: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/ethermint.feemarket.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && typeof o.blockGas === "bigint");
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && typeof o.block_gas === "bigint");
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockGas !== BigInt(0)) {
      writer.uint32(24).uint64(message.blockGas);
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
        case 3:
          message.blockGas = reader.uint64();
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
    message.blockGas = object.blockGas !== undefined && object.blockGas !== null ? BigInt(object.blockGas.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.block_gas !== undefined && object.block_gas !== null) {
      message.blockGas = BigInt(object.block_gas);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.block_gas = message.blockGas !== BigInt(0) ? message.blockGas?.toString() : undefined;
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
      typeUrl: "/ethermint.feemarket.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Params.registerTypeUrl();
  }
};