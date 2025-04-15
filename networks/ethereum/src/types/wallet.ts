import { IGenericOfflineSigner, SIGN_MODE } from "@titanjs/types";
import { Transaction, TransactionRequest, Signer as ethersOfflineSigner } from "ethers";

export interface IEthereumGenericOfflineSigner extends IGenericOfflineSigner<string, unknown, string, TransactionRequest, string> {
}

export class EthereumGenericOfflineSigner implements IEthereumGenericOfflineSigner {
  constructor(public offlineSigner: ethersOfflineSigner) {
  }

  readonly signMode: string = SIGN_MODE.ETHEREUM_TX;

  getAccounts(): Promise<readonly string[]> {
    return this.offlineSigner.getAddress().then((address) => [address]);
  }

  async sign(args: TransactionRequest): Promise<string> {
    const tx = await this.offlineSigner.populateTransaction(args);
    delete tx.from;
    const txObj = Transaction.from(tx);
    return this.offlineSigner.signTransaction(txObj);
  }
}