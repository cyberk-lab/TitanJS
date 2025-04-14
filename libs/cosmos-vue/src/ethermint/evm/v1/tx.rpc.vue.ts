import { buildUseVueMutation } from "../../../vue-query";
import { MsgEthereumTx, MsgUpdateParams } from "./tx";
import { ethereumTx, updateParams } from "./tx.rpc.func";
export const useEthereumTx = buildUseVueMutation<MsgEthereumTx, Error>({
  builderMutationFn: ethereumTx
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});