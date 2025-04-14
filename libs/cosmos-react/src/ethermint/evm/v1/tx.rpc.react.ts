import { buildUseMutation } from "../../../react-query";
import { MsgEthereumTx, MsgUpdateParams } from "./tx";
import { ethereumTx, updateParams } from "./tx.rpc.func";
export const useEthereumTx = buildUseMutation<MsgEthereumTx, Error>({
  builderMutationFn: ethereumTx
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});