import {
  BaseAccount,
  ModuleAccount,
} from '@interchainjs/cosmos-types/cosmos/auth/v1beta1/auth';
import { PubKey as Secp256k1PubKey } from '@interchainjs/cosmos-types/cosmos/crypto/secp256k1/keys';
import {
  BaseVestingAccount,
  ContinuousVestingAccount,
  DelayedVestingAccount,
  PeriodicVestingAccount,
} from '@interchainjs/cosmos-types/cosmos/vesting/v1beta1/vesting';
import { EthAccount } from '@interchainjs/cosmos-types/ethermint/types/v1/account';
import { BroadcastOptions, IKey, SignerConfig } from '@interchainjs/types';
import { Key } from '@interchainjs/utils';
import { bytesToHex as assertBytes } from '@noble/hashes/utils';
import { ripemd160 } from '@noble/hashes/ripemd160';
import { sha256 } from '@noble/hashes/sha256';

import { CosmosAccount, EncodedMessage, FeeOptions, SignerOptions } from './types';
import { toDecoder } from './utils';
import { Secp256k1Auth } from '@interchainjs/auth/secp256k1';
import { WalletOptions } from './types/wallet';

export const defaultBroadcastOptions: BroadcastOptions = {
  checkTx: true,
  deliverTx: false,
  timeoutMs: 60_000,
  pollIntervalMs: 3_000
};

export const defaultFeeOptions: FeeOptions = {
  multiplier: 1.6,
  gasPrice: 'average',
};

/**
 * Default signer configuration for Cosmos chains.
 */
export const defaultSignerConfig: SignerConfig = {
  publicKey: {
    isCompressed: true,
    hash: (publicKey: Key) => Key.from(ripemd160(sha256(publicKey.value))),
  },
  message: {
    hash: (message: Uint8Array) => {
      const hashed = sha256(message);
      assertBytes(hashed);
      return hashed;
    },
  },
};

export const defaultPublicKeyEncoder = (key: IKey): EncodedMessage => {
  return {
    typeUrl: Secp256k1PubKey.typeUrl,
    value: Secp256k1PubKey.encode(
      Secp256k1PubKey.fromPartial({ key: key.value })
    ).finish(),
  };
};

const accountCodecs = [
  BaseAccount,
  ModuleAccount,
  BaseVestingAccount,
  ContinuousVestingAccount,
  DelayedVestingAccount,
  PeriodicVestingAccount,
  EthAccount,
];

export const defaultAccountParser = (
  encodedAccount: EncodedMessage
): BaseAccount => {
  const codec = accountCodecs.find(
    (codec) => codec.typeUrl === encodedAccount.typeUrl
  );

  if (!codec) {
    throw new Error(
      `No corresponding account found for account type ${encodedAccount.typeUrl}.`
    );
  }

  const decoder = toDecoder(codec);
  const account = decoder.fromPartial(decoder.decode(encodedAccount.value));
  const baseAccount =
    (account as any).baseVestingAccount?.baseAccount ||
    (account as any).baseAccount ||
    account;
  return baseAccount;
};

export const defaultSignerOptions: Required<SignerOptions> = {
  ...defaultSignerConfig,
  parseAccount: defaultAccountParser,
  createAccount: CosmosAccount,
  encodePublicKey: defaultPublicKeyEncoder,
  prefix: undefined,
};

export const defaultWalletOptions: WalletOptions = {
  bip39Password: undefined,
  createAuthsFromMnemonic: Secp256k1Auth.fromMnemonic,
  signerConfig: defaultSignerOptions,
}