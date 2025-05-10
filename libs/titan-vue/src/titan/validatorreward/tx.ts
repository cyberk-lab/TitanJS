import { Coin, CoinAmino } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@titanlabjs/math";
import { DeepPartial } from "../../helpers";
/** MsgSetRate allow authority config `rate` */
export interface MsgSetRate {
  authority: string;
  rate: string;
}
export interface MsgSetRateProtoMsg {
  typeUrl: "/titan.validatorreward.MsgSetRate";
  value: Uint8Array;
}
/** MsgSetRate allow authority config `rate` */
export interface MsgSetRateAmino {
  authority: string;
  rate: string;
}
export interface MsgSetRateAminoMsg {
  type: "/titan.validatorreward.MsgSetRate";
  value: MsgSetRateAmino;
}
/** MsgSetRateResponse defines the Msg/SetRate response type. */
export interface MsgSetRateResponse { }
export interface MsgSetRateResponseProtoMsg {
  typeUrl: "/titan.validatorreward.MsgSetRateResponse";
  value: Uint8Array;
}
/** MsgSetRateResponse defines the Msg/SetRate response type. */
export interface MsgSetRateResponseAmino { }
export interface MsgSetRateResponseAminoMsg {
  type: "/titan.validatorreward.MsgSetRateResponse";
  value: MsgSetRateResponseAmino;
}
/** MsgSetAuthority allow authority config `authority` */
export interface MsgSetAuthority {
  authority: string;
  newAuthority: string;
}
export interface MsgSetAuthorityProtoMsg {
  typeUrl: "/titan.validatorreward.MsgSetAuthority";
  value: Uint8Array;
}
/** MsgSetAuthority allow authority config `authority` */
export interface MsgSetAuthorityAmino {
  authority: string;
  new_authority: string;
}
export interface MsgSetAuthorityAminoMsg {
  type: "/titan.validatorreward.MsgSetAuthority";
  value: MsgSetAuthorityAmino;
}
/** MsgSetAuthorityResponse defines the Msg/SetAuthority response type. */
export interface MsgSetAuthorityResponse { }
export interface MsgSetAuthorityResponseProtoMsg {
  typeUrl: "/titan.validatorreward.MsgSetAuthorityResponse";
  value: Uint8Array;
}
/** MsgSetAuthorityResponse defines the Msg/SetAuthority response type. */
export interface MsgSetAuthorityResponseAmino { }
export interface MsgSetAuthorityResponseAminoMsg {
  type: "/titan.validatorreward.MsgSetAuthorityResponse";
  value: MsgSetAuthorityResponseAmino;
}
/** MsgFundRewardPool allow anyone to fund the reward pool */
export interface MsgFundRewardPool {
  depositor: string;
  /** repeated cosmos.base.v1beta1.Coin amount = 2 [(gogoproto.nullable) = false] */
  amount: Coin[];
}
export interface MsgFundRewardPoolProtoMsg {
  typeUrl: "/titan.validatorreward.MsgFundRewardPool";
  value: Uint8Array;
}
/** MsgFundRewardPool allow anyone to fund the reward pool */
export interface MsgFundRewardPoolAmino {
  depositor: string;
  /** repeated cosmos.base.v1beta1.Coin amount = 2 [(gogoproto.nullable) = false] */
  amount: CoinAmino[];
}
export interface MsgFundRewardPoolAminoMsg {
  type: "/titan.validatorreward.MsgFundRewardPool";
  value: MsgFundRewardPoolAmino;
}
/** MsgFundRewardPoolResponse defines the Msg/FundRewardPool response type. */
export interface MsgFundRewardPoolResponse { }
export interface MsgFundRewardPoolResponseProtoMsg {
  typeUrl: "/titan.validatorreward.MsgFundRewardPoolResponse";
  value: Uint8Array;
}
/** MsgFundRewardPoolResponse defines the Msg/FundRewardPool response type. */
export interface MsgFundRewardPoolResponseAmino { }
export interface MsgFundRewardPoolResponseAminoMsg {
  type: "/titan.validatorreward.MsgFundRewardPoolResponse";
  value: MsgFundRewardPoolResponseAmino;
}
function createBaseMsgSetRate(): MsgSetRate {
  return {
    authority: "",
    rate: ""
  };
}
export const MsgSetRate = {
  typeUrl: "/titan.validatorreward.MsgSetRate",
  is(o: any): o is MsgSetRate {
    return o && (o.$typeUrl === MsgSetRate.typeUrl || typeof o.authority === "string" && typeof o.rate === "string");
  },
  isAmino(o: any): o is MsgSetRateAmino {
    return o && (o.$typeUrl === MsgSetRate.typeUrl || typeof o.authority === "string" && typeof o.rate === "string");
  },
  encode(message: MsgSetRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.rate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.rate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetRate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetRate>): MsgSetRate {
    const message = createBaseMsgSetRate();
    message.authority = object.authority ?? "";
    message.rate = object.rate ?? "";
    return message;
  },
  fromAmino(object: MsgSetRateAmino): MsgSetRate {
    const message = createBaseMsgSetRate();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    }
    return message;
  },
  toAmino(message: MsgSetRate): MsgSetRateAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.rate = message.rate === "" ? undefined : Decimal.fromUserInput(message.rate, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: MsgSetRateAminoMsg): MsgSetRate {
    return MsgSetRate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetRateProtoMsg): MsgSetRate {
    return MsgSetRate.decode(message.value);
  },
  toProto(message: MsgSetRate): Uint8Array {
    return MsgSetRate.encode(message).finish();
  },
  toProtoMsg(message: MsgSetRate): MsgSetRateProtoMsg {
    return {
      typeUrl: "/titan.validatorreward.MsgSetRate",
      value: MsgSetRate.encode(message).finish()
    };
  },
  registerTypeUrl() { }
};
function createBaseMsgSetRateResponse(): MsgSetRateResponse {
  return {};
}
export const MsgSetRateResponse = {
  typeUrl: "/titan.validatorreward.MsgSetRateResponse",
  is(o: any): o is MsgSetRateResponse {
    return o && o.$typeUrl === MsgSetRateResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetRateResponseAmino {
    return o && o.$typeUrl === MsgSetRateResponse.typeUrl;
  },
  encode(_: MsgSetRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRateResponse();
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
  fromPartial(_: DeepPartial<MsgSetRateResponse>): MsgSetRateResponse {
    const message = createBaseMsgSetRateResponse();
    return message;
  },
  fromAmino(_: MsgSetRateResponseAmino): MsgSetRateResponse {
    const message = createBaseMsgSetRateResponse();
    return message;
  },
  toAmino(_: MsgSetRateResponse): MsgSetRateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetRateResponseAminoMsg): MsgSetRateResponse {
    return MsgSetRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetRateResponseProtoMsg): MsgSetRateResponse {
    return MsgSetRateResponse.decode(message.value);
  },
  toProto(message: MsgSetRateResponse): Uint8Array {
    return MsgSetRateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetRateResponse): MsgSetRateResponseProtoMsg {
    return {
      typeUrl: "/titan.validatorreward.MsgSetRateResponse",
      value: MsgSetRateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() { }
};
function createBaseMsgSetAuthority(): MsgSetAuthority {
  return {
    authority: "",
    newAuthority: ""
  };
}
export const MsgSetAuthority = {
  typeUrl: "/titan.validatorreward.MsgSetAuthority",
  is(o: any): o is MsgSetAuthority {
    return o && (o.$typeUrl === MsgSetAuthority.typeUrl || typeof o.authority === "string" && typeof o.newAuthority === "string");
  },
  isAmino(o: any): o is MsgSetAuthorityAmino {
    return o && (o.$typeUrl === MsgSetAuthority.typeUrl || typeof o.authority === "string" && typeof o.new_authority === "string");
  },
  encode(message: MsgSetAuthority, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.newAuthority !== "") {
      writer.uint32(18).string(message.newAuthority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetAuthority {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAuthority();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.newAuthority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetAuthority>): MsgSetAuthority {
    const message = createBaseMsgSetAuthority();
    message.authority = object.authority ?? "";
    message.newAuthority = object.newAuthority ?? "";
    return message;
  },
  fromAmino(object: MsgSetAuthorityAmino): MsgSetAuthority {
    const message = createBaseMsgSetAuthority();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.new_authority !== undefined && object.new_authority !== null) {
      message.newAuthority = object.new_authority;
    }
    return message;
  },
  toAmino(message: MsgSetAuthority): MsgSetAuthorityAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.new_authority = message.newAuthority === "" ? undefined : message.newAuthority;
    return obj;
  },
  fromAminoMsg(object: MsgSetAuthorityAminoMsg): MsgSetAuthority {
    return MsgSetAuthority.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetAuthorityProtoMsg): MsgSetAuthority {
    return MsgSetAuthority.decode(message.value);
  },
  toProto(message: MsgSetAuthority): Uint8Array {
    return MsgSetAuthority.encode(message).finish();
  },
  toProtoMsg(message: MsgSetAuthority): MsgSetAuthorityProtoMsg {
    return {
      typeUrl: "/titan.validatorreward.MsgSetAuthority",
      value: MsgSetAuthority.encode(message).finish()
    };
  },
  registerTypeUrl() { }
};
function createBaseMsgSetAuthorityResponse(): MsgSetAuthorityResponse {
  return {};
}
export const MsgSetAuthorityResponse = {
  typeUrl: "/titan.validatorreward.MsgSetAuthorityResponse",
  is(o: any): o is MsgSetAuthorityResponse {
    return o && o.$typeUrl === MsgSetAuthorityResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetAuthorityResponseAmino {
    return o && o.$typeUrl === MsgSetAuthorityResponse.typeUrl;
  },
  encode(_: MsgSetAuthorityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetAuthorityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAuthorityResponse();
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
  fromPartial(_: DeepPartial<MsgSetAuthorityResponse>): MsgSetAuthorityResponse {
    const message = createBaseMsgSetAuthorityResponse();
    return message;
  },
  fromAmino(_: MsgSetAuthorityResponseAmino): MsgSetAuthorityResponse {
    const message = createBaseMsgSetAuthorityResponse();
    return message;
  },
  toAmino(_: MsgSetAuthorityResponse): MsgSetAuthorityResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetAuthorityResponseAminoMsg): MsgSetAuthorityResponse {
    return MsgSetAuthorityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetAuthorityResponseProtoMsg): MsgSetAuthorityResponse {
    return MsgSetAuthorityResponse.decode(message.value);
  },
  toProto(message: MsgSetAuthorityResponse): Uint8Array {
    return MsgSetAuthorityResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetAuthorityResponse): MsgSetAuthorityResponseProtoMsg {
    return {
      typeUrl: "/titan.validatorreward.MsgSetAuthorityResponse",
      value: MsgSetAuthorityResponse.encode(message).finish()
    };
  },
  registerTypeUrl() { }
};
function createBaseMsgFundRewardPool(): MsgFundRewardPool {
  return {
    depositor: "",
    amount: []
  };
}
export const MsgFundRewardPool = {
  typeUrl: "/titan.validatorreward.MsgFundRewardPool",
  is(o: any): o is MsgFundRewardPool {
    return o && (o.$typeUrl === MsgFundRewardPool.typeUrl || typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isAmino(o: any): o is MsgFundRewardPoolAmino {
    return o && (o.$typeUrl === MsgFundRewardPool.typeUrl || typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: MsgFundRewardPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundRewardPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundRewardPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFundRewardPool>): MsgFundRewardPool {
    const message = createBaseMsgFundRewardPool();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgFundRewardPoolAmino): MsgFundRewardPool {
    const message = createBaseMsgFundRewardPool();
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgFundRewardPool): MsgFundRewardPoolAmino {
    const obj: any = {};
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgFundRewardPoolAminoMsg): MsgFundRewardPool {
    return MsgFundRewardPool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundRewardPoolProtoMsg): MsgFundRewardPool {
    return MsgFundRewardPool.decode(message.value);
  },
  toProto(message: MsgFundRewardPool): Uint8Array {
    return MsgFundRewardPool.encode(message).finish();
  },
  toProtoMsg(message: MsgFundRewardPool): MsgFundRewardPoolProtoMsg {
    return {
      typeUrl: "/titan.validatorreward.MsgFundRewardPool",
      value: MsgFundRewardPool.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Coin.registerTypeUrl();
  }
};
function createBaseMsgFundRewardPoolResponse(): MsgFundRewardPoolResponse {
  return {};
}
export const MsgFundRewardPoolResponse = {
  typeUrl: "/titan.validatorreward.MsgFundRewardPoolResponse",
  is(o: any): o is MsgFundRewardPoolResponse {
    return o && o.$typeUrl === MsgFundRewardPoolResponse.typeUrl;
  },
  isAmino(o: any): o is MsgFundRewardPoolResponseAmino {
    return o && o.$typeUrl === MsgFundRewardPoolResponse.typeUrl;
  },
  encode(_: MsgFundRewardPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundRewardPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundRewardPoolResponse();
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
  fromPartial(_: DeepPartial<MsgFundRewardPoolResponse>): MsgFundRewardPoolResponse {
    const message = createBaseMsgFundRewardPoolResponse();
    return message;
  },
  fromAmino(_: MsgFundRewardPoolResponseAmino): MsgFundRewardPoolResponse {
    const message = createBaseMsgFundRewardPoolResponse();
    return message;
  },
  toAmino(_: MsgFundRewardPoolResponse): MsgFundRewardPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFundRewardPoolResponseAminoMsg): MsgFundRewardPoolResponse {
    return MsgFundRewardPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundRewardPoolResponseProtoMsg): MsgFundRewardPoolResponse {
    return MsgFundRewardPoolResponse.decode(message.value);
  },
  toProto(message: MsgFundRewardPoolResponse): Uint8Array {
    return MsgFundRewardPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFundRewardPoolResponse): MsgFundRewardPoolResponseProtoMsg {
    return {
      typeUrl: "/titan.validatorreward.MsgFundRewardPoolResponse",
      value: MsgFundRewardPoolResponse.encode(message).finish()
    };
  },
  registerTypeUrl() { }
};