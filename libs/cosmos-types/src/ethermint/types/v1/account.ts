import { BaseAccount } from "../../../cosmos/auth/v1beta1/auth";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccount {
  /** base_account is an authtypes.BaseAccount */
  baseAccount?: BaseAccount;
  /** code_hash is the hash calculated from the code contents */
  codeHash: string;
}
function createBaseEthAccount(): EthAccount {
  return {
    baseAccount: undefined,
    codeHash: ""
  };
}
export const EthAccount = {
  typeUrl: "/ethermint.types.v1.EthAccount",
  encode(message: EthAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.codeHash !== "") {
      writer.uint32(18).string(message.codeHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EthAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEthAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.codeHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EthAccount>): EthAccount {
    const message = createBaseEthAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
    message.codeHash = object.codeHash ?? "";
    return message;
  }
};