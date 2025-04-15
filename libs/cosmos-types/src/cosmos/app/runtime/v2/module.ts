import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** Module is the config object for the runtime module. */
export interface Module {
  /** app_name is the name of the app. */
  appName: string;
  /**
   * pre_blockers specifies the module names of pre blockers
   * to call in the order in which they should be called. If this is left empty
   * no pre blocker will be registered.
   */
  preBlockers: string[];
  /**
   * begin_blockers specifies the module names of begin blockers
   * to call in the order in which they should be called. If this is left empty
   * no begin blocker will be registered.
   */
  beginBlockers: string[];
  /**
   * end_blockers specifies the module names of the end blockers
   * to call in the order in which they should be called. If this is left empty
   * no end blocker will be registered.
   */
  endBlockers: string[];
  /**
   * tx_validators specifies the module names for tx validators
   * If this is left empty, no tx validation will be registered.
   */
  txValidators: string[];
  /**
   * init_genesis specifies the module names of init genesis functions
   * to call in the order in which they should be called. If this is left empty
   * no init genesis function will be registered.
   */
  initGenesis: string[];
  /**
   * export_genesis specifies the order in which to export module genesis data.
   * If this is left empty, the init_genesis order will be used for export genesis
   * if it is specified.
   */
  exportGenesis: string[];
  /**
   * order_migrations defines the order in which module migrations are performed.
   * If this is left empty, it uses the default migration order (alphabetically).
   */
  orderMigrations: string[];
  /** GasConfig is the config object for gas limits. */
  gasConfig?: GasConfig;
  /**
   * override_store_keys is an optional list of overrides for the module store keys
   * to be used in keeper construction.
   */
  overrideStoreKeys: StoreKeyConfig[];
  /**
   * skip_store_keys is an optional list of store keys to skip when constructing the
   * module's keeper. This is useful when a module does not have a store key.
   * NOTE: the provided environment variable will have a fake store service.
   */
  skipStoreKeys: string[];
}
/** GasConfig is the config object for gas limits. */
export interface GasConfig {
  /** validate_tx_gas_limit is the gas limit for validating a tx. */
  validateTxGasLimit: bigint;
  /** query_gas_limit is the gas limit for querying. */
  queryGasLimit: bigint;
  /** simulation_gas_limit is the gas limit for simulation. */
  simulationGasLimit: bigint;
}
/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */
export interface StoreKeyConfig {
  /** name of the module to override the store key of */
  moduleName: string;
  /** the kv store key to use instead of the module name. */
  kvStoreKey: string;
}
function createBaseModule(): Module {
  return {
    appName: "",
    preBlockers: [],
    beginBlockers: [],
    endBlockers: [],
    txValidators: [],
    initGenesis: [],
    exportGenesis: [],
    orderMigrations: [],
    gasConfig: undefined,
    overrideStoreKeys: [],
    skipStoreKeys: []
  };
}
export const Module = {
  typeUrl: "/cosmos.app.runtime.v2.Module",
  aminoType: "cosmos-sdk/Module",
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.appName !== "") {
      writer.uint32(10).string(message.appName);
    }
    for (const v of message.preBlockers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.beginBlockers) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.endBlockers) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.txValidators) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.initGenesis) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.exportGenesis) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.orderMigrations) {
      writer.uint32(66).string(v!);
    }
    if (message.gasConfig !== undefined) {
      GasConfig.encode(message.gasConfig, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.overrideStoreKeys) {
      StoreKeyConfig.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.skipStoreKeys) {
      writer.uint32(90).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appName = reader.string();
          break;
        case 2:
          message.preBlockers.push(reader.string());
          break;
        case 3:
          message.beginBlockers.push(reader.string());
          break;
        case 4:
          message.endBlockers.push(reader.string());
          break;
        case 5:
          message.txValidators.push(reader.string());
          break;
        case 6:
          message.initGenesis.push(reader.string());
          break;
        case 7:
          message.exportGenesis.push(reader.string());
          break;
        case 8:
          message.orderMigrations.push(reader.string());
          break;
        case 9:
          message.gasConfig = GasConfig.decode(reader, reader.uint32());
          break;
        case 10:
          message.overrideStoreKeys.push(StoreKeyConfig.decode(reader, reader.uint32()));
          break;
        case 11:
          message.skipStoreKeys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Module>): Module {
    const message = createBaseModule();
    message.appName = object.appName ?? "";
    message.preBlockers = object.preBlockers?.map(e => e) || [];
    message.beginBlockers = object.beginBlockers?.map(e => e) || [];
    message.endBlockers = object.endBlockers?.map(e => e) || [];
    message.txValidators = object.txValidators?.map(e => e) || [];
    message.initGenesis = object.initGenesis?.map(e => e) || [];
    message.exportGenesis = object.exportGenesis?.map(e => e) || [];
    message.orderMigrations = object.orderMigrations?.map(e => e) || [];
    message.gasConfig = object.gasConfig !== undefined && object.gasConfig !== null ? GasConfig.fromPartial(object.gasConfig) : undefined;
    message.overrideStoreKeys = object.overrideStoreKeys?.map(e => StoreKeyConfig.fromPartial(e)) || [];
    message.skipStoreKeys = object.skipStoreKeys?.map(e => e) || [];
    return message;
  }
};
function createBaseGasConfig(): GasConfig {
  return {
    validateTxGasLimit: BigInt(0),
    queryGasLimit: BigInt(0),
    simulationGasLimit: BigInt(0)
  };
}
export const GasConfig = {
  typeUrl: "/cosmos.app.runtime.v2.GasConfig",
  aminoType: "cosmos-sdk/GasConfig",
  encode(message: GasConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validateTxGasLimit !== BigInt(0)) {
      writer.uint32(8).uint64(message.validateTxGasLimit);
    }
    if (message.queryGasLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.queryGasLimit);
    }
    if (message.simulationGasLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.simulationGasLimit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GasConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validateTxGasLimit = reader.uint64();
          break;
        case 2:
          message.queryGasLimit = reader.uint64();
          break;
        case 3:
          message.simulationGasLimit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GasConfig>): GasConfig {
    const message = createBaseGasConfig();
    message.validateTxGasLimit = object.validateTxGasLimit !== undefined && object.validateTxGasLimit !== null ? BigInt(object.validateTxGasLimit.toString()) : BigInt(0);
    message.queryGasLimit = object.queryGasLimit !== undefined && object.queryGasLimit !== null ? BigInt(object.queryGasLimit.toString()) : BigInt(0);
    message.simulationGasLimit = object.simulationGasLimit !== undefined && object.simulationGasLimit !== null ? BigInt(object.simulationGasLimit.toString()) : BigInt(0);
    return message;
  }
};
function createBaseStoreKeyConfig(): StoreKeyConfig {
  return {
    moduleName: "",
    kvStoreKey: ""
  };
}
export const StoreKeyConfig = {
  typeUrl: "/cosmos.app.runtime.v2.StoreKeyConfig",
  aminoType: "cosmos-sdk/StoreKeyConfig",
  encode(message: StoreKeyConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.kvStoreKey !== "") {
      writer.uint32(18).string(message.kvStoreKey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoreKeyConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKeyConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.kvStoreKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<StoreKeyConfig>): StoreKeyConfig {
    const message = createBaseStoreKeyConfig();
    message.moduleName = object.moduleName ?? "";
    message.kvStoreKey = object.kvStoreKey ?? "";
    return message;
  }
};