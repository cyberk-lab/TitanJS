# Migration from CosmJS

This guide will help you migrate your code from CosmJS to TitanJS. We'll cover the main differences between the two libraries and provide examples of how to convert your code.

## Prerequisites

- Basic understanding of TypeScript
- Basic understanding of blockchain concepts
- Basic understanding of cryptography

## Main Differences

The main differences between CosmJS and TitanJS are:

1. **Package Structure**: TitanJS has a more modular package structure, with separate packages for different networks and functionalities.
2. **Signer Interface**: TitanJS provides a more flexible and extensible signer interface.
3. **Wallet Interface**: TitanJS provides a more flexible and extensible wallet interface.
4. **Auth Interface**: TitanJS provides a more flexible and extensible auth interface.

## Migration Steps

### Step 1: Install TitanJS

First, let's install TitanJS and its dependencies.

```bash
npm install @titanjs/types @titanjs/auth @titanjs/wallet @titanjs/utils
```

### Step 2: Update Imports

Update your imports from CosmJS to TitanJS. Here are some common imports and their TitanJS equivalents:

```ts
// CosmJS
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { calculateFee, GasPrice } from "@cosmjs/stargate";

// TitanJS
import { Secp256k1HDWallet } from "@titanjs/wallet/secp256k1";
import { DirectSigner } from "@titanjs/cosmos/signers/direct";
import { GasPrice } from "@titanjs/types";
```

### Step 3: Update Wallet Creation

Update your wallet creation code. Here's an example:

```ts
// CosmJS
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
  prefix: "cosmos",
});

// TitanJS
const wallet = Secp256k1HDWallet.fromMnemonic(mnemonic, [
  {
    prefix: "cosmos",
    hdPath: HDPath.cosmos().toString(),
  },
]);
```

### Step 4: Update Signer Creation

Update your signer creation code. Here's an example:

```ts
// CosmJS
const client = await SigningCosmWasmClient.connectWithSigner(
  rpcEndpoint,
  wallet,
  { gasPrice: GasPrice.fromString("0.025ucosm") }
);

// TitanJS
const signer = new DirectSigner(auth, [toEncoder(MsgSend)], rpcEndpoint);
```

### Step 5: Update Transaction Signing

Update your transaction signing code. Here's an example:

```ts
// CosmJS
const result = await client.signAndBroadcast(
  address,
  [msg],
  "auto",
  "memo"
);

// TitanJS
const result = await signer.signAndBroadcast(
  {
    messages: [msg],
    memo: "memo",
  },
  {
    gasPrice: GasPrice.fromString("0.025ucosm"),
  }
);
```

## Conclusion

In this guide, we've learned how to migrate your code from CosmJS to TitanJS. We've covered the main differences between the two libraries and provided examples of how to convert your code.

Remember that this is a basic guide, and you should test your code thoroughly after migration. If you encounter any issues, please refer to the TitanJS documentation or open an issue on the TitanJS GitHub repository.