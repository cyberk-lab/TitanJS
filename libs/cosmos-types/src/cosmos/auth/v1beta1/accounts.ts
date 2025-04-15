import { Any } from "../../../google/protobuf/any";
import { BaseAccount } from "./auth";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryLegacyAccount defines a query that can be implemented by an x/account
 * to return an auth understandable representation of an account.
 * This query is only used for accounts retro-compatibility at gRPC
 * level, the state machine must not make any assumptions around this.
 */
export interface QueryLegacyAccount {}
/**
 * QueryLegacyAccountResponse defines the response type of the
 * `QueryLegacyAccount` query.
 */
export interface QueryLegacyAccountResponse {
  /**
   * account represents the google.Protobuf.Any wrapped account
   * the type wrapped by the any does not need to comply with the
   * sdk.AccountI interface.
   */
  account?: Any;
  /**
   * base represents the account as a BaseAccount, this can return
   * nil if the account cannot be represented as a BaseAccount.
   * This is used in the gRPC QueryAccountInfo method.
   */
  base?: BaseAccount;
}
function createBaseQueryLegacyAccount(): QueryLegacyAccount {
  return {};
}
export const QueryLegacyAccount = {
  typeUrl: "/cosmos.auth.v1beta1.QueryLegacyAccount",
  aminoType: "cosmos-sdk/QueryLegacyAccount",
  encode(_: QueryLegacyAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLegacyAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLegacyAccount();
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
  fromPartial(_: DeepPartial<QueryLegacyAccount>): QueryLegacyAccount {
    const message = createBaseQueryLegacyAccount();
    return message;
  }
};
function createBaseQueryLegacyAccountResponse(): QueryLegacyAccountResponse {
  return {
    account: undefined,
    base: undefined
  };
}
export const QueryLegacyAccountResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryLegacyAccountResponse",
  aminoType: "cosmos-sdk/QueryLegacyAccountResponse",
  encode(message: QueryLegacyAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    if (message.base !== undefined) {
      BaseAccount.encode(message.base, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLegacyAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLegacyAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.base = BaseAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLegacyAccountResponse>): QueryLegacyAccountResponse {
    const message = createBaseQueryLegacyAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
    message.base = object.base !== undefined && object.base !== null ? BaseAccount.fromPartial(object.base) : undefined;
    return message;
  }
};