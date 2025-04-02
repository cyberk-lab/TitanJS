# TitanJS

A single, universal signing interface for any network. Birthed from the titan ecosystem for builders. Create adapters for any Web3 network.

## TitanJS: Titan Signing for Web3

[TitanJS](https://cyberk.io/stack/titanjs) serves as a **signature processing layer** built to enable smooth communication between different blockchain systems. As a **fundamental component of the [Titan JavaScript Stack](https://cyberk.io/stack)**, this modular system empowers Web3 creation for the vast community of JavaScript programmers.

The essence of TitanJS lies in its **versatile connector architecture** which simplifies the complexities of blockchain signatures, enabling straightforward network additions, identity management, and support for various verification methods and signing techniques—all within one cohesive, expandable system.

## Overview

TitanJS sits at the foundation of the **[Titan JavaScript Stack](https://cyberk.io/stack)**, a set of tools that work together like nested building blocks:

- **[TitanJS](https://cyberk.io/stack/titanjs)** → Powers signing across Cosmos, Ethereum (EIP-712), and beyond.
- **[Titan Kit](https://cyberk.io/stack/titan-kit)** → Wallet adapters that connect dApps to multiple blockchain networks.

### Visualizing TitanJS Components

The diagram below illustrates how TitanJS connects different signer types to various network classes, showcasing its adaptability for a wide range of blockchain environments.

```mermaid
graph LR
    signers --> cosmos_signer["Cosmos Network"]
    signers --> Titan_signer["Titan Network"]
    signers --> ethereum_signer["Ethereum Network"]
    signers --> implement_signer["ANY Network"]

    cosmos_signer --> cosmos_amino["Amino Signer"]
    cosmos_signer --> cosmos_direct["Direct Signer"]

    ethereum_signer --> ethereum_eip712["EIP712 Signer"]

    Titan_signer --> Titan_amino["Amino Signer"]
    Titan_signer --> Titan_direct["Direct Signer"]

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
