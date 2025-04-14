import { buildUseQuery } from "../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryRewardPoolRequest, QueryRewardPoolResponse } from "./query";
import { getParams, getRewardPool } from "./query.rpc.func";
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetRewardPool = buildUseQuery<QueryRewardPoolRequest, QueryRewardPoolResponse>({
  builderQueryFn: getRewardPool,
  queryKeyPrefix: "RewardPoolQuery"
});