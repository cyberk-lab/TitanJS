import { MsgEthereumTxResponse } from "./tx";
import { buildUseQuery } from "../../../react-query";
import { QueryAccountRequest, QueryAccountResponse, QueryCosmosAccountRequest, QueryCosmosAccountResponse, QueryValidatorAccountRequest, QueryValidatorAccountResponse, QueryBalanceRequest, QueryBalanceResponse, QueryStorageRequest, QueryStorageResponse, QueryCodeRequest, QueryCodeResponse, QueryParamsRequest, QueryParamsResponse, EthCallRequest, EstimateGasResponse, QueryTraceTxRequest, QueryTraceTxResponse, QueryTraceBlockRequest, QueryTraceBlockResponse, QueryBaseFeeRequest, QueryBaseFeeResponse } from "./query";
import { getAccount, getCosmosAccount, getValidatorAccount, getBalance, getStorage, getCode, getParams, getEthCall, getEstimateGas, getTraceTx, getTraceBlock, getBaseFee } from "./query.rpc.func";
export const useGetAccount = buildUseQuery<QueryAccountRequest, QueryAccountResponse>({
  builderQueryFn: getAccount,
  queryKeyPrefix: "AccountQuery"
});
export const useGetCosmosAccount = buildUseQuery<QueryCosmosAccountRequest, QueryCosmosAccountResponse>({
  builderQueryFn: getCosmosAccount,
  queryKeyPrefix: "CosmosAccountQuery"
});
export const useGetValidatorAccount = buildUseQuery<QueryValidatorAccountRequest, QueryValidatorAccountResponse>({
  builderQueryFn: getValidatorAccount,
  queryKeyPrefix: "ValidatorAccountQuery"
});
export const useGetBalance = buildUseQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: getBalance,
  queryKeyPrefix: "BalanceQuery"
});
export const useGetStorage = buildUseQuery<QueryStorageRequest, QueryStorageResponse>({
  builderQueryFn: getStorage,
  queryKeyPrefix: "StorageQuery"
});
export const useGetCode = buildUseQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: getCode,
  queryKeyPrefix: "CodeQuery"
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetEthCall = buildUseQuery<EthCallRequest, MsgEthereumTxResponse>({
  builderQueryFn: getEthCall,
  queryKeyPrefix: "EthCallQuery"
});
export const useGetEstimateGas = buildUseQuery<EthCallRequest, EstimateGasResponse>({
  builderQueryFn: getEstimateGas,
  queryKeyPrefix: "EstimateGasQuery"
});
export const useGetTraceTx = buildUseQuery<QueryTraceTxRequest, QueryTraceTxResponse>({
  builderQueryFn: getTraceTx,
  queryKeyPrefix: "TraceTxQuery"
});
export const useGetTraceBlock = buildUseQuery<QueryTraceBlockRequest, QueryTraceBlockResponse>({
  builderQueryFn: getTraceBlock,
  queryKeyPrefix: "TraceBlockQuery"
});
export const useGetBaseFee = buildUseQuery<QueryBaseFeeRequest, QueryBaseFeeResponse>({
  builderQueryFn: getBaseFee,
  queryKeyPrefix: "BaseFeeQuery"
});