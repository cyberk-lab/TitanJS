# TitanJS

A single, universal signing interface for any network. Birthed from the titan ecosystem for builders. Create adapters for any Web3 network.

## TitanJS: Titan Signing for Web3

[TitanJS](https://cyberk.io/stack/titanjs) is a **signing interface** designed for seamless interoperability across blockchain networks. It is one of the **core libraries of the [Titan JavaScript Stack](https://cyberk.io/stack)**, a modular framework that brings Web3 development to millions of JavaScript developers.

At its core, TitanJS provides a **flexible adapter pattern** that abstracts away blockchain signing complexities, making it easy to integrate new networks, manage accounts, and support diverse authentication protocols and signing algorithms—all in a unified, extensible framework.

## Overview

TitanJS sits at the foundation of the **[Titan JavaScript Stack](https://cyberk.io/stack)**, a set of tools that work together like nested building blocks:

- **[TitanJS](https://cyberk.io/stack/titanjs)** → Powers signing across Cosmos, Ethereum (EIP-712), and beyond.
- **[Titan Kit](https://cyberk.io/stack/titan-kit)** → Wallet adapters that connect dApps to multiple blockchain networks.
- **[Titan UI](https://cyberk.io/stack/titan-ui)** → A flexible UI component library for seamless app design.
- **[Create Titan App](https://cyberk.io/stack/create-titan-app)** → A developer-friendly starter kit for cross-chain applications. 

This modular architecture ensures **compatibility, extensibility, and ease of use**, allowing developers to compose powerful blockchain applications without deep protocol-specific knowledge.

### Visualizing TitanJS Components

The diagram below illustrates how TitanJS connects different signer types to various network classes, showcasing its adaptability for a wide range of blockchain environments.

```mermaid
graph LR
    signers --> cosmos_signer["Cosmos Network"]
    signers --> injective_signer["Injective Network"]
    signers --> ethereum_signer["Ethereum Network"]
    signers --> implement_signer["ANY Network"]

    cosmos_signer --> cosmos_amino["Amino Signer"]
    cosmos_signer --> cosmos_direct["Direct Signer"]

    ethereum_signer --> ethereum_eip712["EIP712 Signer"]

    injective_signer --> injective_amino["Amino Signer"]
    injective_signer --> injective_direct["Direct Signer"]

    implement_signer --> any_signer["Any Signer"]

    style signers fill:#f9f,stroke:#333,stroke-width:2px
```

```mermaid
graph LR
    encoders[Encoders] --> auth["@titanjs/auth"]
    encoders --> utils["@titanjs/utils"]
    encoders --> cosmos_types["@titanjs/cosmos-types"]

    auth --> secp256k1_auth["Secp256k1 Auth"]
    auth --> ethSecp256k1_auth["EthSecp256k1 Auth"]

    utils --> signer_utils["Signer Utilities"]
    utils --> crypto_utils["Crypto Utilities"]

    style encoders fill:#f9f,stroke:#333,stroke-width:2px
    style auth fill:#ccf,stroke:#333,stroke-width:2px
    style utils fill:#ccf,stroke:#333,stroke-width:2px
```
