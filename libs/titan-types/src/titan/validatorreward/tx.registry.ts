import { TelescopeGeneratedType } from "../../types";
import { MsgSetRate, MsgSetAuthority, MsgFundRewardPool } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/titan.validatorreward.MsgSetRate", MsgSetRate], ["/titan.validatorreward.MsgSetAuthority", MsgSetAuthority], ["/titan.validatorreward.MsgFundRewardPool", MsgFundRewardPool]];
export const MessageComposer = {
  encoded: {
    setRate(value: MsgSetRate) {
      return {
        typeUrl: "/titan.validatorreward.MsgSetRate",
        value: MsgSetRate.encode(value).finish()
      };
    },
    setAuthority(value: MsgSetAuthority) {
      return {
        typeUrl: "/titan.validatorreward.MsgSetAuthority",
        value: MsgSetAuthority.encode(value).finish()
      };
    },
    fundRewardPool(value: MsgFundRewardPool) {
      return {
        typeUrl: "/titan.validatorreward.MsgFundRewardPool",
        value: MsgFundRewardPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setRate(value: MsgSetRate) {
      return {
        typeUrl: "/titan.validatorreward.MsgSetRate",
        value
      };
    },
    setAuthority(value: MsgSetAuthority) {
      return {
        typeUrl: "/titan.validatorreward.MsgSetAuthority",
        value
      };
    },
    fundRewardPool(value: MsgFundRewardPool) {
      return {
        typeUrl: "/titan.validatorreward.MsgFundRewardPool",
        value
      };
    }
  },
  fromPartial: {
    setRate(value: MsgSetRate) {
      return {
        typeUrl: "/titan.validatorreward.MsgSetRate",
        value: MsgSetRate.fromPartial(value)
      };
    },
    setAuthority(value: MsgSetAuthority) {
      return {
        typeUrl: "/titan.validatorreward.MsgSetAuthority",
        value: MsgSetAuthority.fromPartial(value)
      };
    },
    fundRewardPool(value: MsgFundRewardPool) {
      return {
        typeUrl: "/titan.validatorreward.MsgFundRewardPool",
        value: MsgFundRewardPool.fromPartial(value)
      };
    }
  }
};