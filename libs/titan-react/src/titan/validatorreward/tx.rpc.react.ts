import { buildUseMutation } from "../../react-query";
import { MsgSetRate, MsgSetAuthority, MsgFundRewardPool } from "./tx";
import { setRate, setAuthority, fundRewardPool } from "./tx.rpc.func";
export const useSetRate = buildUseMutation<MsgSetRate, Error>({
  builderMutationFn: setRate
});
export const useSetAuthority = buildUseMutation<MsgSetAuthority, Error>({
  builderMutationFn: setAuthority
});
export const useFundRewardPool = buildUseMutation<MsgFundRewardPool, Error>({
  builderMutationFn: fundRewardPool
});