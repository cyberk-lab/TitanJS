import { buildUseQuery } from "../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QuerySystemInfoRequest, QuerySystemInfoResponse, QueryMintingInfoRequest, QueryMintingInfoResponse, QueryMintingInfosRequest, QueryMintingInfosResponse } from "./query";
import { getParams, getSystemInfo, getMintingInfo, getMintingInfos } from "./query.rpc.func";
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetSystemInfo = buildUseQuery<QuerySystemInfoRequest, QuerySystemInfoResponse>({
  builderQueryFn: getSystemInfo,
  queryKeyPrefix: "SystemInfoQuery"
});
export const useGetMintingInfo = buildUseQuery<QueryMintingInfoRequest, QueryMintingInfoResponse>({
  builderQueryFn: getMintingInfo,
  queryKeyPrefix: "MintingInfoQuery"
});
export const useGetMintingInfos = buildUseQuery<QueryMintingInfosRequest, QueryMintingInfosResponse>({
  builderQueryFn: getMintingInfos,
  queryKeyPrefix: "MintingInfosQuery"
});