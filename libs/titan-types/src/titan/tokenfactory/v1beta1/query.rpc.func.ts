import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse } from "./query";
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "titan.tokenfactory.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const getDenomAuthorityMetadata = buildQuery<QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse>({
  encode: QueryDenomAuthorityMetadataRequest.encode,
  decode: QueryDenomAuthorityMetadataResponse.decode,
  service: "titan.tokenfactory.v1beta1.Query",
  method: "DenomAuthorityMetadata",
  deps: [QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse]
});
export const getDenomsFromCreator = buildQuery<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>({
  encode: QueryDenomsFromCreatorRequest.encode,
  decode: QueryDenomsFromCreatorResponse.decode,
  service: "titan.tokenfactory.v1beta1.Query",
  method: "DenomsFromCreator",
  deps: [QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse]
});