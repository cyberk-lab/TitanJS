import { buildUseVueMutation } from "../../vue-query";
import { MsgSetRate, MsgSetAuthority, MsgFundRewardPool } from "./tx";
import { setRate, setAuthority, fundRewardPool } from "./tx.rpc.func";
export const useSetRate = buildUseVueMutation<MsgSetRate, Error>({
  builderMutationFn: setRate
});
export const useSetAuthority = buildUseVueMutation<MsgSetAuthority, Error>({
  builderMutationFn: setAuthority
});
export const useFundRewardPool = buildUseVueMutation<MsgFundRewardPool, Error>({
  builderMutationFn: fundRewardPool
});