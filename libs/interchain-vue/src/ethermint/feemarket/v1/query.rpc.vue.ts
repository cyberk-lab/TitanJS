import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryBlockGasRequest, QueryBlockGasResponse } from "./query";
import { getParams, getBaseFee, getBlockGas } from "./query.rpc.func";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetBaseFee = buildUseVueQuery<QueryBaseFeeRequest, QueryBaseFeeResponse>({
  builderQueryFn: getBaseFee,
  queryKeyPrefix: "BaseFeeQuery"
});
export const useGetBlockGas = buildUseVueQuery<QueryBlockGasRequest, QueryBlockGasResponse>({
  builderQueryFn: getBlockGas,
  queryKeyPrefix: "BlockGasQuery"
});