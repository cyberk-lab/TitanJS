import { buildTx } from "../../helper-func-types";
import { MsgCreateClass, MsgUpdateClass, MsgTransferClass, MsgMint } from "./tx";
export const createClass = buildTx<MsgCreateClass>({
  msg: MsgCreateClass
});
export const updateClass = buildTx<MsgUpdateClass>({
  msg: MsgUpdateClass
});
export const transferClass = buildTx<MsgTransferClass>({
  msg: MsgTransferClass
});
export const mint = buildTx<MsgMint>({
  msg: MsgMint
});