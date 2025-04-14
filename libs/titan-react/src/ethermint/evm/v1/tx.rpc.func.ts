import { buildTx } from "../../../helper-func-types";
import { MsgEthereumTx, MsgUpdateParams } from "./tx";
export const ethereumTx = buildTx<MsgEthereumTx>({
  msg: MsgEthereumTx
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});