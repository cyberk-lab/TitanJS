import { AddrDerivation, SignerConfig } from '@titanjs/types';

import { defaultSignerOptions, defaultWalletOptions } from '../defaults';
import {
  ICosmosAccount,
} from '@titanjs/cosmos/types';
import {
  HDWallet,
} from '@titanjs/cosmos/wallets/secp256k1hd';
import {
  WalletOptions,
} from '@titanjs/cosmos/types/wallet';

/**
 * Cosmos HD Wallet for secp256k1
 */
export class EthSecp256k1HDWallet extends HDWallet {
  constructor(
    accounts: ICosmosAccount[],
    options: SignerConfig
  ) {
    const opts = { ...defaultSignerOptions.Cosmos, ...options };
    super(accounts, opts);
  }

  /**
   * Create a new HD wallet from mnemonic
   * @param mnemonic
   * @param derivations infos for derivate addresses
   * @param options wallet options
   * @returns HD wallet
   */
  static fromMnemonic(
    mnemonic: string,
    derivations: AddrDerivation[],
    options?: WalletOptions
  ) {
    const opts = { ...defaultWalletOptions, ...options };

    return super.fromMnemonic(mnemonic, derivations, opts);
  }
}
