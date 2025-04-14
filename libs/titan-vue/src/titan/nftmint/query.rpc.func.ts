import { buildQuery } from "../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QuerySystemInfoRequest, QuerySystemInfoResponse, QueryMintingInfoRequest, QueryMintingInfoResponse, QueryMintingInfosRequest, QueryMintingInfosResponse } from "./query";
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "titan.nftmint.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const getSystemInfo = buildQuery<QuerySystemInfoRequest, QuerySystemInfoResponse>({
  encode: QuerySystemInfoRequest.encode,
  decode: QuerySystemInfoResponse.decode,
  service: "titan.nftmint.Query",
  method: "SystemInfo",
  deps: [QuerySystemInfoRequest, QuerySystemInfoResponse]
});
export const getMintingInfo = buildQuery<QueryMintingInfoRequest, QueryMintingInfoResponse>({
  encode: QueryMintingInfoRequest.encode,
  decode: QueryMintingInfoResponse.decode,
  service: "titan.nftmint.Query",
  method: "MintingInfo",
  deps: [QueryMintingInfoRequest, QueryMintingInfoResponse]
});
export const getMintingInfos = buildQuery<QueryMintingInfosRequest, QueryMintingInfosResponse>({
  encode: QueryMintingInfosRequest.encode,
  decode: QueryMintingInfosResponse.decode,
  service: "titan.nftmint.Query",
  method: "MintingInfos",
  deps: [QueryMintingInfosRequest, QueryMintingInfosResponse]
});