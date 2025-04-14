import { MsgEthereumTxResponse } from "./tx";
import { buildUseVueQuery } from "../../../vue-query";
import { QueryAccountRequest, QueryAccountResponse, QueryCosmosAccountRequest, QueryCosmosAccountResponse, QueryValidatorAccountRequest, QueryValidatorAccountResponse, QueryBalanceRequest, QueryBalanceResponse, QueryStorageRequest, QueryStorageResponse, QueryCodeRequest, QueryCodeResponse, QueryParamsRequest, QueryParamsResponse, EthCallRequest, EstimateGasResponse, QueryTraceTxRequest, QueryTraceTxResponse, QueryTraceBlockRequest, QueryTraceBlockResponse, QueryBaseFeeRequest, QueryBaseFeeResponse } from "./query";
import { getAccount, getCosmosAccount, getValidatorAccount, getBalance, getStorage, getCode, getParams, getEthCall, getEstimateGas, getTraceTx, getTraceBlock, getBaseFee } from "./query.rpc.func";
export const useGetAccount = buildUseVueQuery<QueryAccountRequest, QueryAccountResponse>({
  builderQueryFn: getAccount,
  queryKeyPrefix: "AccountQuery"
});
export const useGetCosmosAccount = buildUseVueQuery<QueryCosmosAccountRequest, QueryCosmosAccountResponse>({
  builderQueryFn: getCosmosAccount,
  queryKeyPrefix: "CosmosAccountQuery"
});
export const useGetValidatorAccount = buildUseVueQuery<QueryValidatorAccountRequest, QueryValidatorAccountResponse>({
  builderQueryFn: getValidatorAccount,
  queryKeyPrefix: "ValidatorAccountQuery"
});
export const useGetBalance = buildUseVueQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: getBalance,
  queryKeyPrefix: "BalanceQuery"
});
export const useGetStorage = buildUseVueQuery<QueryStorageRequest, QueryStorageResponse>({
  builderQueryFn: getStorage,
  queryKeyPrefix: "StorageQuery"
});
export const useGetCode = buildUseVueQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: getCode,
  queryKeyPrefix: "CodeQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetEthCall = buildUseVueQuery<EthCallRequest, MsgEthereumTxResponse>({
  builderQueryFn: getEthCall,
  queryKeyPrefix: "EthCallQuery"
});
export const useGetEstimateGas = buildUseVueQuery<EthCallRequest, EstimateGasResponse>({
  builderQueryFn: getEstimateGas,
  queryKeyPrefix: "EstimateGasQuery"
});
export const useGetTraceTx = buildUseVueQuery<QueryTraceTxRequest, QueryTraceTxResponse>({
  builderQueryFn: getTraceTx,
  queryKeyPrefix: "TraceTxQuery"
});
export const useGetTraceBlock = buildUseVueQuery<QueryTraceBlockRequest, QueryTraceBlockResponse>({
  builderQueryFn: getTraceBlock,
  queryKeyPrefix: "TraceBlockQuery"
});
export const useGetBaseFee = buildUseVueQuery<QueryBaseFeeRequest, QueryBaseFeeResponse>({
  builderQueryFn: getBaseFee,
  queryKeyPrefix: "BaseFeeQuery"
});