import { buildTx } from "../../helper-func-types";
import { MsgSetRate, MsgSetAuthority, MsgFundRewardPool } from "./tx";
export const setRate = buildTx<MsgSetRate>({
  msg: MsgSetRate
});
export const setAuthority = buildTx<MsgSetAuthority>({
  msg: MsgSetAuthority
});
export const fundRewardPool = buildTx<MsgFundRewardPool>({
  msg: MsgFundRewardPool
});