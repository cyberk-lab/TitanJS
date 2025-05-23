# @titanlabjs/auth

<p align="center">
  <img src="https://raw.githubusercontent.com/hyperweb-io/titanlabjs/refs/heads/main/assets/logo.svg" width="280">
</p>

<p align="center" width="100%">
  <a href="https://github.com/hyperweb-io/titanlabjs/actions/workflows/run-tests.yaml">
    <img height="20" src="https://github.com/hyperweb-io/titanlabjs/actions/workflows/run-tests.yaml/badge.svg" />
  </a>
   <a href="https://github.com/hyperweb-io/titanlabjs/blob/main/LICENSE-MIT"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://github.com/hyperweb-io/titanlabjs/blob/main/LICENSE-Apache"><img height="20" src="https://img.shields.io/badge/license-Apache-blue.svg"></a>
</p>

Authentication/Wallet for web3 accounts.

## Usage

```sh
npm install @titanlabjs/auth
```

Taking `secp256k1` as example.

```ts
// import * from "@titanlabjs/auth"; // Error: use sub-imports, to ensure small app size
import { Secp256k1Auth } from "@titanlabjs/auth/secp256k1";

const [directAuth] = Secp256k1Auth.fromMnemonic(generateMnemonic(), [
  "m/44'/118'/0'/0/0",
]);
const signature = auth.sign(Uint8Array.from([1, 2, 3]));
console.log(signature.toHex());
```

It's easy to derive _cosmos/injective/ethereum_ network HD path (taking `cosmos` as example)

```ts
import { HDPath } from "@titanlabjs/types";

// derive with Cosmos default HD path "m/44'/118'/0'/0/0"
const [auth] = Secp256k1Auth.fromMnemonic("<MNEMONIC_WORDS>", [
  // use cosmos hdpath built by HDPath
  // we can get cosmos hdpath "m/44'/118'/0'/0/0" by this:
  HDPath.cosmos().toString(),
]);
// is identical to
const [auth] = Secp256k1Auth.fromMnemonic("<MNEMONIC_WORDS>", [
  "m/44'/118'/0'/0/0",
]);
```

`Auth` objected can be utilized by different signers. See

- [@titanlabjs/cosmos](/networks/cosmos/README.md)
- [@titanlabjs/ethereum](/networks/ethereum/README.md)
- [@titanlabjs/injective](/networks/injective/README.md)

## Implementations

- **secp256k1 auth** from `@titanlabjs/auth/secp256k1`
- **ethSecp256k1 auth** from `@titanlabjs/auth/ethSecp256k1`

## Interchain JavaScript Stack ⚛️

A unified toolkit for building applications and smart contracts in the Interchain ecosystem

| Category              | Tools                                                                                                                  | Description                                                                                           |
|----------------------|------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| **Chain Information**   | [**Chain Registry**](https://github.com/hyperweb-io/chain-registry), [**Utils**](https://www.npmjs.com/package/@chain-registry/utils), [**Client**](https://www.npmjs.com/package/@chain-registry/client) | Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application. |
| **Wallet Connectors**| [**Interchain Kit**](https://github.com/hyperweb-io/interchain-kit)<sup>beta</sup>, [**Cosmos Kit**](https://github.com/hyperweb-io/cosmos-kit) | Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface. |
| **Signing Clients**          | [**InterchainJS**](https://github.com/hyperweb-io/titanlabjs)<sup>beta</sup>, [**CosmJS**](https://github.com/cosmos/cosmjs) | A single, universal signing interface for any network |
| **SDK Clients**              | [**Telescope**](https://github.com/hyperweb-io/telescope)                                                          | Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules. |
| **Starter Kits**     | [**Create Interchain App**](https://github.com/hyperweb-io/create-interchain-app)<sup>beta</sup>, [**Create Cosmos App**](https://github.com/hyperweb-io/create-cosmos-app) | Set up a modern Interchain app by running one command. |
| **UI Kits**          | [**Interchain UI**](https://github.com/hyperweb-io/interchain-ui)                                                   | The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit. |
| **Testing Frameworks**          | [**Starship**](https://github.com/hyperweb-io/starship)                                                             | Unified Testing and Development for the Interchain. |
| **TypeScript Smart Contracts** | [**Create Hyperweb App**](https://github.com/hyperweb-io/create-hyperweb-app)                              | Build and deploy full-stack blockchain applications with TypeScript |
| **CosmWasm Contracts** | [**CosmWasm TS Codegen**](https://github.com/CosmWasm/ts-codegen)                                                   | Convert your CosmWasm smart contracts into dev-friendly TypeScript classes. |

## Credits

🛠 Built by Hyperweb (formerly Cosmology) — if you like our tools, please checkout and contribute to [our github ⚛️](https://github.com/hyperweb-io)

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
