# TitanJS

<p align="center">
  <img src="https://titanlabs.gitbook.io/~gitbook/image?url=https%3A%2F%2F2627271644-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FnY9gfwjbYpW5DOTj5kl3%252Ficon%252FcGZnicQGwFhxRoSU6Kex%252Ftitan-logo.png%3Falt%3Dmedia%26token%3D34515297-e082-4a0e-b03a-b4654ae3a1c9&width=128&dpr=2&quality=100&sign=cbd96490&sv=2" width="64">
</p>

<p align="center" width="100%">
   <a href="https://github.com/hyperweb-io/titanlabjs/blob/main/LICENSE-MIT"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://github.com/hyperweb-io/titanlabjs/blob/main/LICENSE-Apache"><img height="20" src="https://img.shields.io/badge/license-Apache-blue.svg"></a>
</p>

TitanJS is a universal signing interface for any network. Birthed from the Titan ecosystem for builders. Create adapters for any Web3 network.

Strongly supports the Titan Network.

## Table of Contents

- [Introduction](#titanjs-universal-signing-for-web3)
- [Overview](#overview)
- [Tutorials and Docs](#tutorial-for-building-a-custom-signer)
- [Auth](#auth)
- [Supported Networks](#supported-networks)
  - [Titan Network](#titan-network)
  - [Cosmos Network](#cosmos-network)
  - [Ethereum Network](#ethereum-network)
- [Disclaimer](#disclaimer)

## TitanJS: Universal Signing for Web3

TitanJS is a **universal signing interface** designed for seamless interoperability across blockchain networks. It is one of the **core libraries of the Titan JavaScript Stack**, a modular framework that brings Web3 development to millions of JavaScript developers.

At its core, TitanJS provides a **flexible adapter pattern** that abstracts away blockchain signing complexities, making it easy to integrate new networks, manage accounts, and support diverse authentication protocols and signing algorithms—all in a unified, extensible framework.

## Overview

TitanJS sits at the foundation of the **Titan JavaScript Stack**, a set of tools that work together like nested building blocks:

- **TitanJS** → Powers signing across Titan, Cosmos, Ethereum (EIP-712), and beyond.
- **Titan Kit** → Wallet adapters that connect dApps to multiple blockchain networks.

This modular architecture ensures **compatibility, extensibility, and ease of use**, allowing developers to compose powerful blockchain applications without deep protocol-specific knowledge.

### Visualizing TitanJS Components

The diagram below illustrates how TitanJS connects different signer types to various network classes, showcasing its adaptability for a wide range of blockchain environments.

```mermaid
graph LR
    signers --> titan_signer["Titan Network"]
    signers --> cosmos_signer["Cosmos Network"]
    signers --> ethereum_signer["Ethereum Network"]
    signers --> implement_signer["ANY Network"]

    titan_signer --> titan_amino["Amino Signer"]
    titan_signer --> titan_direct["Direct Signer"]

    cosmos_signer --> cosmos_amino["Amino Signer"]
    cosmos_signer --> cosmos_direct["Direct Signer"]

    ethereum_signer --> ethereum_eip712["EIP712 Signer"]

    implement_signer --> any_signer["Any Signer"]

    style signers fill:#f9f,stroke:#333,stroke-width:2px
```

```mermaid
graph LR
    encoders[Encoders] --> auth["@titanjs/auth"]
    encoders --> utils["@titanjs/utils"]
    encoders --> titan_types["@titanjs/titan-types"]

    auth --> secp256k1_auth["Secp256k1 Auth"]
    auth --> ethSecp256k1_auth["EthSecp256k1 Auth"]

    utils --> signer_utils["Signer Utilities"]
    utils --> crypto_utils["Crypto Utilities"]

    style encoders fill:#f9f,stroke:#333,stroke-width:2px
    style auth fill:#ccf,stroke:#333,stroke-width:2px
    style utils fill:#ccf,stroke:#333,stroke-width:2px
```

---

## Tutorials & Documentation

| Topic                            | Documentation |
|----------------------------------|--------------|
| **Building a Custom Signer**     | [Tutorial](/docs/tutorial.md) |
| **Advanced Documentation**       | [View Docs](/docs/) |

---

## Auth

The authentication module is universally applied across different networks.

| Package | Description |
|---------|-------------|
| [@titanjs/auth](/packages/auth/README.md) | Handles authentication across blockchain networks. |
| [Advanced Docs: `Auth vs. Wallet vs. Signer`](/docs/auth-wallet-signer.md) | Explanation of the differences between authentication, wallets, and signers. |

---

## Supported Networks

### Titan Network

| Feature | Package |
|---------|---------|
| **Transactions** | [@titanjs/titan](/networks/titan/README.md) |
| **Titan Types** | [@titanjs/titan-types](/networks/titan-msgs/README.md) |

### Cosmos Network

| Feature | Package |
|---------|---------|
| **Transactions** | [@titanjs/cosmos](/networks/cosmos/README.md) |
| **Cosmos Types** | [@titanjs/cosmos-types](/networks/cosmos-msgs/README.md) |

### Ethereum Network

| Feature | Package |
|---------|---------|
| **Transactions** | [@titanjs/ethereum](/networks/ethereum/README.md) |
| **Ethereum Types** | [@titanjs/ethereum-types](/networks/ethereum-msgs/README.md) |

---

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED "AS IS", AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
