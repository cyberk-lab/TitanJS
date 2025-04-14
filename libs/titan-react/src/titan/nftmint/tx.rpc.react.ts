import { buildUseMutation } from "../../react-query";
import { MsgCreateClass, MsgUpdateClass, MsgTransferClass, MsgMint } from "./tx";
import { createClass, updateClass, transferClass, mint } from "./tx.rpc.func";
export const useCreateClass = buildUseMutation<MsgCreateClass, Error>({
  builderMutationFn: createClass
});
export const useUpdateClass = buildUseMutation<MsgUpdateClass, Error>({
  builderMutationFn: updateClass
});
export const useTransferClass = buildUseMutation<MsgTransferClass, Error>({
  builderMutationFn: transferClass
});
export const useMint = buildUseMutation<MsgMint, Error>({
  builderMutationFn: mint
});