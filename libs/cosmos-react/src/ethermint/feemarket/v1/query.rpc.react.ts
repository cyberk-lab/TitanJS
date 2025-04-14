import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryBlockGasRequest, QueryBlockGasResponse } from "./query";
import { getParams, getBaseFee, getBlockGas } from "./query.rpc.func";
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetBaseFee = buildUseQuery<QueryBaseFeeRequest, QueryBaseFeeResponse>({
  builderQueryFn: getBaseFee,
  queryKeyPrefix: "BaseFeeQuery"
});
export const useGetBlockGas = buildUseQuery<QueryBlockGasRequest, QueryBlockGasResponse>({
  builderQueryFn: getBlockGas,
  queryKeyPrefix: "BlockGasQuery"
});