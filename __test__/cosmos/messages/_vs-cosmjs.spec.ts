import { Secp256k1HdWallet } from "@cosmjs/amino";
import { SigningStargateClient } from "@cosmjs/stargate";
import { address, chain, seed } from "../../data";
import { AminoSigner } from "@cosmonauts/cosmos/amino";
import { toConverter, toEncoder } from "@cosmonauts/cosmos/utils";
import { MsgSend } from "@cosmonauts/cosmos-msgs/cosmos/bank/v1beta1/tx";
import { MsgTransfer } from "@cosmonauts/cosmos-msgs/ibc/applications/transfer/v1/tx";
import { messages } from "./send-tokens.spec";
// import { messages } from "./send-ibc-tokens.spec";
import {
  AminoWallet,
  DirectWallet,
  SignDoc,
  StdFee,
  StdSignDoc,
} from "@cosmonauts/cosmos/types";
import { Key, toHex } from "@cosmonauts/utils";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { DirectSigner } from "@cosmonauts/cosmos/direct";
import { auth } from "../constants";

async function getDirectClient() {
  return await SigningStargateClient.connectWithSigner(
    chain.osmosis.rpc,
    await DirectSecp256k1HdWallet.fromMnemonic(seed.genesis, {
      prefix: chain.osmosis.prefix,
    })
  );
}

async function getAminoClient() {
  return await SigningStargateClient.connectWithSigner(
    chain.osmosis.rpc,
    await Secp256k1HdWallet.fromMnemonic(seed.genesis, {
      prefix: chain.osmosis.prefix,
    })
  );
}

export const fee: StdFee = {
  gas: "20000000",
  amount: [
    {
      denom: chain.osmosis.denom,
      amount: "400000",
    },
  ],
};

export const memo = "for test";

async function getDirectWallet(): Promise<DirectWallet> {
  const offlineSigner = await DirectSecp256k1HdWallet.fromMnemonic(
    seed.genesis,
    {
      prefix: chain.osmosis.prefix,
    }
  );
  return {
    async getAccount() {
      const accounts = await offlineSigner.getAccounts();
      return {
        algo: accounts[0].algo,
        publicKey: Key.from(accounts[0].pubkey),
      };
    },
    async sign(doc: SignDoc) {
      const { signature, signed } = await offlineSigner.signDirect(
        address.osmosis.genesis,
        doc
      );
      return {
        signature: Key.fromBase64(signature.signature),
        signed,
      };
    },
  };
}

async function getAminoWallet(): Promise<AminoWallet> {
  const offlineSigner = await Secp256k1HdWallet.fromMnemonic(seed.genesis, {
    prefix: chain.osmosis.prefix,
  });
  return {
    async getAccount() {
      const accounts = await offlineSigner.getAccounts();
      return {
        algo: accounts[0].algo,
        publicKey: Key.from(accounts[0].pubkey),
      };
    },
    async sign(doc: StdSignDoc) {
      const { signature, signed } = await offlineSigner.signAmino(
        address.osmosis.genesis,
        doc
      );
      return {
        signature: Key.fromBase64(signature.signature),
        signed: signed as any,
      };
    },
  };
}

describe("Compare with @cosmjs 1.0", () => {
  it("direct signing results should match", async () => {
    const client = await getDirectClient();
    const signer = new DirectSigner(
      auth,
      [toEncoder(MsgSend), toEncoder(MsgTransfer)],
      chain.osmosis.rpc
    );

    const txRaw = await client.sign(
      address.osmosis.genesis,
      messages,
      fee,
      memo
    );
    const {
      txRaw: { bodyBytes, authInfoBytes, signatures },
    } = await signer.sign(messages, fee, memo);

    expect(toHex(signatures[0])).toBe(toHex(txRaw.signatures[0]));
    expect(toHex(bodyBytes)).toBe(toHex(txRaw.bodyBytes));
    expect(toHex(authInfoBytes)).toBe(toHex(txRaw.authInfoBytes));
  });

  it("direct signing from Wallet results should match", async () => {
    const client = await getDirectClient();

    const signer = await DirectSigner.fromWallet(
      await getDirectWallet(),
      [toEncoder(MsgSend), toEncoder(MsgTransfer)],
      chain.osmosis.rpc
    );

    const txRaw = await client.sign(
      address.osmosis.genesis,
      messages,
      fee,
      memo
    );
    const {
      txRaw: { bodyBytes, authInfoBytes, signatures },
    } = await signer.sign(messages, fee, memo);

    expect(toHex(signatures[0])).toBe(toHex(txRaw.signatures[0]));
    expect(toHex(bodyBytes)).toBe(toHex(txRaw.bodyBytes));
    expect(toHex(authInfoBytes)).toBe(toHex(txRaw.authInfoBytes));
  });

  it("amino signing results should match", async () => {
    const client = await getAminoClient();
    const signer = new AminoSigner(
      auth,
      [toEncoder(MsgSend), toEncoder(MsgTransfer)],
      [toConverter(MsgSend), toConverter(MsgTransfer)],
      chain.osmosis.rpc
    );

    const txRaw = await client.sign(
      address.osmosis.genesis,
      messages,
      fee,
      memo
    );
    const {
      txRaw: { bodyBytes, authInfoBytes, signatures },
    } = await signer.sign(messages, fee, memo);

    expect(toHex(signatures[0])).toBe(toHex(txRaw.signatures[0]));
    expect(toHex(bodyBytes)).toBe(toHex(txRaw.bodyBytes));
    expect(toHex(authInfoBytes)).toBe(toHex(txRaw.authInfoBytes));
  });

  it("amino signing from Wallet results should match", async () => {
    const client = await getAminoClient();

    const signer = await AminoSigner.fromWallet(
      await getAminoWallet(),
      [toEncoder(MsgSend), toEncoder(MsgTransfer)],
      [toConverter(MsgSend), toConverter(MsgTransfer)],
      chain.osmosis.rpc
    );

    const txRaw = await client.sign(
      address.osmosis.genesis,
      messages,
      fee,
      memo
    );
    const {
      txRaw: { bodyBytes, authInfoBytes, signatures },
    } = await signer.sign(messages, fee, memo);

    expect(toHex(signatures[0])).toBe(toHex(txRaw.signatures[0]));
    expect(toHex(bodyBytes)).toBe(toHex(txRaw.bodyBytes));
    expect(toHex(authInfoBytes)).toBe(toHex(txRaw.authInfoBytes));
  });
});
