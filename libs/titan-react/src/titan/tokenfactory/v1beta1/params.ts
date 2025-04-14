import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** Params defines the parameters for the tokenfactory module. */
export interface Params {
  /**
   * DenomCreationFee defines the fee to be charged on the creation of a new
   * denom. The fee is drawn from the MsgCreateDenom's sender account, and
   * transferred to the community pool.
   */
  denomCreationFee: Coin[];
  /**
   * DenomCreationGasConsume defines the gas cost for creating a new denom.
   * This is intended as a spam deterrence mechanism.
   * 
   * See: https://github.com/CosmWasm/token-factory/issues/11
   */
  denomCreationGasConsume?: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/titan.tokenfactory.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsAmino {
  /**
   * DenomCreationFee defines the fee to be charged on the creation of a new
   * denom. The fee is drawn from the MsgCreateDenom's sender account, and
   * transferred to the community pool.
   */
  denom_creation_fee: CoinAmino[];
  /**
   * DenomCreationGasConsume defines the gas cost for creating a new denom.
   * This is intended as a spam deterrence mechanism.
   * 
   * See: https://github.com/CosmWasm/token-factory/issues/11
   */
  denom_creation_gas_consume?: string;
}
export interface ParamsAminoMsg {
  type: "/titan.tokenfactory.v1beta1.Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    denomCreationFee: [],
    denomCreationGasConsume: undefined
  };
}
export const Params = {
  typeUrl: "/titan.tokenfactory.v1beta1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.denomCreationFee) && (!o.denomCreationFee.length || Coin.is(o.denomCreationFee[0])));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.denom_creation_fee) && (!o.denom_creation_fee.length || Coin.isAmino(o.denom_creation_fee[0])));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.denomCreationGasConsume !== undefined) {
      writer.uint32(16).uint64(message.denomCreationGasConsume);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.denomCreationGasConsume = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.denomCreationFee = object.denomCreationFee?.map(e => Coin.fromPartial(e)) || [];
    message.denomCreationGasConsume = object.denomCreationGasConsume !== undefined && object.denomCreationGasConsume !== null ? BigInt(object.denomCreationGasConsume.toString()) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.denomCreationFee = object.denom_creation_fee?.map(e => Coin.fromAmino(e)) || [];
    if (object.denom_creation_gas_consume !== undefined && object.denom_creation_gas_consume !== null) {
      message.denomCreationGasConsume = BigInt(object.denom_creation_gas_consume);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.denomCreationFee) {
      obj.denom_creation_fee = message.denomCreationFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.denom_creation_fee = message.denomCreationFee;
    }
    obj.denom_creation_gas_consume = message.denomCreationGasConsume !== BigInt(0) ? message.denomCreationGasConsume?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/titan.tokenfactory.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Coin.registerTypeUrl();
  }
};