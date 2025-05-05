// @ts-nocheck
import { Bip39, Random } from '@titanlabjs/crypto';

export function generateMnemonic(): string {
  return Bip39.encode(Random.getBytes(16)).toString();
}
