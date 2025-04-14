import { buildUseVueQuery } from "../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QuerySystemInfoRequest, QuerySystemInfoResponse, QueryMintingInfoRequest, QueryMintingInfoResponse, QueryMintingInfosRequest, QueryMintingInfosResponse } from "./query";
import { getParams, getSystemInfo, getMintingInfo, getMintingInfos } from "./query.rpc.func";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetSystemInfo = buildUseVueQuery<QuerySystemInfoRequest, QuerySystemInfoResponse>({
  builderQueryFn: getSystemInfo,
  queryKeyPrefix: "SystemInfoQuery"
});
export const useGetMintingInfo = buildUseVueQuery<QueryMintingInfoRequest, QueryMintingInfoResponse>({
  builderQueryFn: getMintingInfo,
  queryKeyPrefix: "MintingInfoQuery"
});
export const useGetMintingInfos = buildUseVueQuery<QueryMintingInfosRequest, QueryMintingInfosResponse>({
  builderQueryFn: getMintingInfos,
  queryKeyPrefix: "MintingInfosQuery"
});