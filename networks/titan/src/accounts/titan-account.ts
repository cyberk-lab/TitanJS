import { AccountBase } from '@titanlabjs/types/account';
import { Key } from '@titanlabjs/utils';
import { keccak_256 } from '@noble/hashes/sha3';

/**
 * Account for Injective chain.
 */
export class TitanAccount extends AccountBase {
  /**
   * Create inj address by pubkey.
   */
  getAddressByPubKey(): string {
    const uncompressedPubKey = this.auth.getPublicKey(false);

    const pubkeyHex = uncompressedPubKey.toHex().substring(2);

    const pubkeyHexKey = Key.fromHex(pubkeyHex);

    const addressBytes = keccak_256(pubkeyHexKey.value).subarray(-20);

    return Key.from(addressBytes).toBech32(this.prefix);
  }
}