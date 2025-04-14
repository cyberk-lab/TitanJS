import { buildUseVueQuery } from "../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryRewardPoolRequest, QueryRewardPoolResponse } from "./query";
import { getParams, getRewardPool } from "./query.rpc.func";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetRewardPool = buildUseVueQuery<QueryRewardPoolRequest, QueryRewardPoolResponse>({
  builderQueryFn: getRewardPool,
  queryKeyPrefix: "RewardPoolQuery"
});