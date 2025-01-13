import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryAuthorityRequest, QueryAuthorityResponse, ReactiveQueryCurrentPlanRequest, ReactiveQueryAppliedPlanRequest, ReactiveQueryUpgradedConsensusStateRequest, ReactiveQueryModuleVersionsRequest, ReactiveQueryAuthorityRequest } from "./query";
/** Query defines the gRPC upgrade querier service. */
export interface Query {
  /** CurrentPlan queries the current upgrade plan. */
  currentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse>;
  /** AppliedPlan queries a previously applied upgrade plan by its name. */
  appliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse>;
  /**
   * UpgradedConsensusState queries the consensus state that will serve
   * as a trusted kernel for the next version of this chain. It will only be
   * stored at the last height of this chain.
   * UpgradedConsensusState RPC not supported with legacy querier
   * This rpc is deprecated now that IBC has its own replacement
   * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
   */
  upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
  /**
   * ModuleVersions queries the list of module versions from state.
   * 
   * Since: cosmos-sdk 0.43
   */
  moduleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse>;
  /**
   * Returns the account with authority to conduct upgrades
   * 
   * Since: cosmos-sdk 0.46
   */
  authority(request?: QueryAuthorityRequest): Promise<QueryAuthorityResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CurrentPlan queries the current upgrade plan. */
  currentPlan = async (request: QueryCurrentPlanRequest = {}): Promise<QueryCurrentPlanResponse> => {
    const data = QueryCurrentPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
    return promise.then(data => QueryCurrentPlanResponse.decode(new BinaryReader(data)));
  };
  /* AppliedPlan queries a previously applied upgrade plan by its name. */
  appliedPlan = async (request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse> => {
    const data = QueryAppliedPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
    return promise.then(data => QueryAppliedPlanResponse.decode(new BinaryReader(data)));
  };
  /* UpgradedConsensusState queries the consensus state that will serve
   as a trusted kernel for the next version of this chain. It will only be
   stored at the last height of this chain.
   UpgradedConsensusState RPC not supported with legacy querier
   This rpc is deprecated now that IBC has its own replacement
   (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54) */
  upgradedConsensusState = async (request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse> => {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
    return promise.then(data => QueryUpgradedConsensusStateResponse.decode(new BinaryReader(data)));
  };
  /* ModuleVersions queries the list of module versions from state.
  
   Since: cosmos-sdk 0.43 */
  moduleVersions = async (request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse> => {
    const data = QueryModuleVersionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
    return promise.then(data => QueryModuleVersionsResponse.decode(new BinaryReader(data)));
  };
  /* Returns the account with authority to conduct upgrades
  
   Since: cosmos-sdk 0.46 */
  authority = async (request: QueryAuthorityRequest = {}): Promise<QueryAuthorityResponse> => {
    const data = QueryAuthorityRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "Authority", data);
    return promise.then(data => QueryAuthorityResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    currentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse> {
      return queryService.currentPlan(request);
    },
    appliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse> {
      return queryService.appliedPlan(request);
    },
    upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse> {
      return queryService.upgradedConsensusState(request);
    },
    moduleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse> {
      return queryService.moduleVersions(request);
    },
    authority(request?: QueryAuthorityRequest): Promise<QueryAuthorityResponse> {
      return queryService.authority(request);
    }
  };
};
export interface UseCurrentPlanQuery<TData> extends VueQueryParams<QueryCurrentPlanResponse, TData> {
  request?: ReactiveQueryCurrentPlanRequest;
}
export interface UseAppliedPlanQuery<TData> extends VueQueryParams<QueryAppliedPlanResponse, TData> {
  request: ReactiveQueryAppliedPlanRequest;
}
export interface UseUpgradedConsensusStateQuery<TData> extends VueQueryParams<QueryUpgradedConsensusStateResponse, TData> {
  request: ReactiveQueryUpgradedConsensusStateRequest;
}
export interface UseModuleVersionsQuery<TData> extends VueQueryParams<QueryModuleVersionsResponse, TData> {
  request: ReactiveQueryModuleVersionsRequest;
}
export interface UseAuthorityQuery<TData> extends VueQueryParams<QueryAuthorityResponse, TData> {
  request?: ReactiveQueryAuthorityRequest;
}
export const useQueryService = (rpc: Ref<ProtobufRpcClient | undefined>): ComputedRef<QueryClientImpl | undefined> => {
  const _queryClients = new WeakMap();
  return computed(() => {
    if (rpc.value) {
      if (_queryClients.has(rpc.value)) {
        return _queryClients.get(rpc.value);
      }
      const queryService = new QueryClientImpl(rpc.value);
      _queryClients.set(rpc.value, queryService);
      return queryService;
    }
  });
};
export const createRpcQueryHooks = (rpc: Ref<ProtobufRpcClient | undefined>) => {
  const queryService = useQueryService(rpc);
  const useCurrentPlan = <TData = QueryCurrentPlanResponse,>({
    request,
    options
  }: UseCurrentPlanQuery<TData>) => {
    const queryKey = ["currentPlanQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryCurrentPlanResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.currentPlan(params);
      },
      ...options
    });
  };
  const useAppliedPlan = <TData = QueryAppliedPlanResponse,>({
    request,
    options
  }: UseAppliedPlanQuery<TData>) => {
    const queryKey = ["appliedPlanQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAppliedPlanResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.appliedPlan(params);
      },
      ...options
    });
  };
  const useUpgradedConsensusState = <TData = QueryUpgradedConsensusStateResponse,>({
    request,
    options
  }: UseUpgradedConsensusStateQuery<TData>) => {
    const queryKey = ["upgradedConsensusStateQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryUpgradedConsensusStateResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.upgradedConsensusState(params);
      },
      ...options
    });
  };
  const useModuleVersions = <TData = QueryModuleVersionsResponse,>({
    request,
    options
  }: UseModuleVersionsQuery<TData>) => {
    const queryKey = ["moduleVersionsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryModuleVersionsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.moduleVersions(params);
      },
      ...options
    });
  };
  const useAuthority = <TData = QueryAuthorityResponse,>({
    request,
    options
  }: UseAuthorityQuery<TData>) => {
    const queryKey = ["authorityQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAuthorityResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.authority(params);
      },
      ...options
    });
  };
  return {
    /** CurrentPlan queries the current upgrade plan. */useCurrentPlan,
    /** AppliedPlan queries a previously applied upgrade plan by its name. */useAppliedPlan,
    /**
     * UpgradedConsensusState queries the consensus state that will serve
     * as a trusted kernel for the next version of this chain. It will only be
     * stored at the last height of this chain.
     * UpgradedConsensusState RPC not supported with legacy querier
     * This rpc is deprecated now that IBC has its own replacement
     * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
     */
    useUpgradedConsensusState,
    /**
     * ModuleVersions queries the list of module versions from state.
     * 
     * Since: cosmos-sdk 0.43
     */
    useModuleVersions,
    /**
     * Returns the account with authority to conduct upgrades
     * 
     * Since: cosmos-sdk 0.46
     */
    useAuthority
  };
};