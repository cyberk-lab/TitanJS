import { AminoSigner } from "@interchainjs/cosmos/amino";
import { StargateMsgs } from "@interchainjs/cosmos-msgs/stargate";
import { TxImpl } from "@interchainjs/cosmos-msgs/stargate.tx";
import { SigningClient } from "./signing-client";
import { OfflineSigner } from "./types/wallet";
import { SignerOptions } from "./types/signing-client";
import { HttpEndpoint } from "@interchainjs/types";
import { toConverter, toEncoder } from "@interchainjs/cosmos/utils";
import { defaultAuth } from "./utils";

export class StargateSigningClient extends SigningClient {
  readonly helpers: TxImpl;

  constructor(
    aminoSigner: AminoSigner,
    offlineSigner: OfflineSigner,
    options: SignerOptions = {}
  ) {
    super(aminoSigner, offlineSigner, options);
    this.aminoSigner.addEncoders(StargateMsgs.map((g) => toEncoder(g)));
    this.aminoSigner.addConverters(StargateMsgs.map((g) => toConverter(g)));
    this.helpers = new TxImpl();
    this.helpers.init(this.txRpc);
  }

  static connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options: SignerOptions = {}
  ): StargateSigningClient {
    const aminoSigner = new AminoSigner(defaultAuth, [], []);
    const signingClient = new StargateSigningClient(
      aminoSigner,
      signer,
      options
    );
    signingClient.setEndpoint(endpoint);
    return signingClient;
  }
}
