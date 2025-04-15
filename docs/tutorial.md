# Tutorial

This tutorial will guide you through the process of building a custom signer for TitanJS. We'll start with a basic understanding of the components involved and then build a custom signer step by step.

## Prerequisites

- Basic understanding of TypeScript
- Basic understanding of blockchain concepts
- Basic understanding of cryptography

## Components

The main components involved in building a custom signer are:

1. **Auth**: A common implementation of an encryption algorithm that can be utilized across different networks.
2. **Wallet**: A wrapper built upon `Auth`, providing additional functionalities and convenience, particularly for Web3 usage.
3. **Signer**: A class that can be constructed from `Auth` or `Wallet`, focusing on providing a signing method specifically for directly signing human-readable messages.

## Step 1: Create a new project

First, let's create a new project and install the necessary dependencies.

```bash
mkdir titanjs-custom-signer
cd titanjs-custom-signer
npm init -y
npm install @titanjs/types @titanjs/auth @titanjs/wallet @titanjs/utils
```

## Step 2: Create a custom Auth

Let's create a custom `Auth` implementation. We'll create a new file `src/auth.ts`:

```ts
import { Auth, ByteAuth, IKey, ISignatureWraper } from "@titanjs/types";

export class CustomAuth implements Auth, ByteAuth {
  privateKey: Uint8Array;
  algo: string;
  hdPath: string;

  constructor(privateKey: Uint8Array, hdPath: string) {
    this.privateKey = privateKey;
    this.algo = "custom";
    this.hdPath = hdPath;
  }

  getPublicKey(isCompressed: boolean): IKey {
    // Implement your custom public key generation logic here
    return {} as IKey;
  }

  sign(data: Uint8Array): ISignatureWraper {
    // Implement your custom signing logic here
    return {} as ISignatureWraper;
  }
}
```

## Step 3: Create a custom Wallet

Now, let's create a custom `Wallet` implementation. We'll create a new file `src/wallet.ts`:

```ts
import { Wallet, IAccount, OfflineSigner } from "@titanjs/types";

export class CustomWallet implements Wallet<IAccount, any> {
  accounts: string[];

  constructor(accounts: string[]) {
    this.accounts = accounts;
  }

  async getAccount(address: string): Promise<IAccount> {
    // Implement your custom account retrieval logic here
    return {} as IAccount;
  }

  async toOfflineSigner(): Promise<OfflineSigner> {
    // Implement your custom offline signer conversion logic here
    return {} as OfflineSigner;
  }
}
```

## Step 4: Create a custom Signer

Finally, let's create a custom `Signer` implementation. We'll create a new file `src/signer.ts`:

```ts
import { UniSigner, IKey, AddressResponse, SignDocResponse, BroadcastResponse, SignResponse } from "@titanjs/types";
import { CustomAuth } from "./auth";
import { CustomWallet } from "./wallet";

export class CustomSigner implements UniSigner<any, any> {
  private auth: CustomAuth;
  private wallet: CustomWallet;

  constructor(auth: CustomAuth, wallet: CustomWallet) {
    this.auth = auth;
    this.wallet = wallet;
  }

  get publicKey(): IKey {
    return this.auth.getPublicKey(true);
  }

  getAddress(): AddressResponse {
    // Implement your custom address retrieval logic here
    return {} as AddressResponse;
  }

  signArbitrary(data: Uint8Array): IKey {
    return this.auth.sign(data);
  }

  async signDoc(doc: any): Promise<SignDocResponse<any>> {
    // Implement your custom document signing logic here
    return {} as SignDocResponse<any>;
  }

  async broadcastArbitrary(data: Uint8Array, options: any): Promise<BroadcastResponse> {
    // Implement your custom arbitrary broadcasting logic here
    return {} as BroadcastResponse;
  }

  async sign(args: any): Promise<SignResponse<any, any>> {
    // Implement your custom signing logic here
    return {} as SignResponse<any, any>;
  }

  async signAndBroadcast(args: any, options: any): Promise<BroadcastResponse> {
    // Implement your custom signing and broadcasting logic here
    return {} as BroadcastResponse;
  }

  async broadcast(tx: any, options: any): Promise<BroadcastResponse> {
    // Implement your custom broadcasting logic here
    return {} as BroadcastResponse;
  }
}
```

## Step 5: Use the custom Signer

Now, let's use our custom signer. We'll create a new file `src/index.ts`:

```ts
import { CustomAuth } from "./auth";
import { CustomWallet } from "./wallet";
import { CustomSigner } from "./signer";

const auth = new CustomAuth(new Uint8Array(32), "m/44'/118'/0'/0/0");
const wallet = new CustomWallet(["titan1..."]);
const signer = new CustomSigner(auth, wallet);

// Use the signer to sign and broadcast transactions
signer.signAndBroadcast({}, {}).then(console.log);
```

## Conclusion

In this tutorial, we've learned how to build a custom signer for TitanJS. We've created custom implementations of `Auth`, `Wallet`, and `Signer`, and we've seen how to use them together to sign and broadcast transactions.

Remember that this is a basic implementation, and you should add more error handling, validation, and security measures in a production environment.
