import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryBlockGasRequest, QueryBlockGasResponse } from "./query";
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "ethermint.feemarket.v1.Query",
  method: "Params"
});
export const getBaseFee = buildQuery<QueryBaseFeeRequest, QueryBaseFeeResponse>({
  encode: QueryBaseFeeRequest.encode,
  decode: QueryBaseFeeResponse.decode,
  service: "ethermint.feemarket.v1.Query",
  method: "BaseFee"
});
export const getBlockGas = buildQuery<QueryBlockGasRequest, QueryBlockGasResponse>({
  encode: QueryBlockGasRequest.encode,
  decode: QueryBlockGasResponse.decode,
  service: "ethermint.feemarket.v1.Query",
  method: "BlockGas"
});