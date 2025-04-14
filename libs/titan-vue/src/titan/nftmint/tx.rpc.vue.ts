import { buildUseVueMutation } from "../../vue-query";
import { MsgCreateClass, MsgUpdateClass, MsgTransferClass, MsgMint } from "./tx";
import { createClass, updateClass, transferClass, mint } from "./tx.rpc.func";
export const useCreateClass = buildUseVueMutation<MsgCreateClass, Error>({
  builderMutationFn: createClass
});
export const useUpdateClass = buildUseVueMutation<MsgUpdateClass, Error>({
  builderMutationFn: updateClass
});
export const useTransferClass = buildUseVueMutation<MsgTransferClass, Error>({
  builderMutationFn: transferClass
});
export const useMint = buildUseVueMutation<MsgMint, Error>({
  builderMutationFn: mint
});