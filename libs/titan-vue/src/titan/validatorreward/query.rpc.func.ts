import { buildQuery } from "../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryRewardPoolRequest, QueryRewardPoolResponse } from "./query";
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "titan.validatorreward.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const getRewardPool = buildQuery<QueryRewardPoolRequest, QueryRewardPoolResponse>({
  encode: QueryRewardPoolRequest.encode,
  decode: QueryRewardPoolResponse.decode,
  service: "titan.validatorreward.Query",
  method: "RewardPool",
  deps: [QueryRewardPoolRequest, QueryRewardPoolResponse]
});