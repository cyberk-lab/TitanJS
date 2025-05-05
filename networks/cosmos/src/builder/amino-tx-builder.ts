import { SignMode } from '@titanlabjs/cosmos-types/cosmos/tx/signing/v1beta1/signing';
import { AuthInfo } from '@titanlabjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { TxRaw } from '@titanlabjs/cosmos-types/cosmos/tx/v1beta1/tx';
import { SignDocResponse } from '@titanlabjs/types';

import { type AminoSignerBase } from '../signers/amino';
import { BaseCosmosSigBuilder, BaseCosmosTxBuilder, STAGING_AUTH_INFO } from '../base';
import { BaseCosmosTxBuilderContext } from '../base/builder-context';
import { CosmosAminoDoc, CosmosSignArgs } from '../types';
import { encodeStdSignDoc, toAminoMsgs, toFee } from '../utils';

/**
 * Amino signature builder
 */
export class AminoSigBuilder extends BaseCosmosSigBuilder<CosmosAminoDoc> {
  async buildDocBytes(doc: CosmosAminoDoc): Promise<Uint8Array> {
    return encodeStdSignDoc(doc);
  }
}

/**
 * Amino transaction builder
 */
export class AminoTxBuilder extends BaseCosmosTxBuilder<CosmosAminoDoc> {
  constructor(
    protected ctx: BaseCosmosTxBuilderContext<AminoSignerBase<CosmosAminoDoc>>
  ) {
    super(SignMode.SIGN_MODE_LEGACY_AMINO_JSON, ctx);
  }

  async buildDoc({
    messages,
    fee,
    memo,
    options,
  }: CosmosSignArgs): Promise<CosmosAminoDoc> {
    const signDoc: CosmosAminoDoc = {
      chain_id:
        options?.chainId ?? (await this.ctx.signer.queryClient.getChainId()),
      account_number: (
        options?.accountNumber ??
        (await this.ctx.signer.queryClient.getAccountNumber(
          await this.ctx.signer.getAddress()
        ))
      ).toString(),
      sequence: (
        options?.sequence ??
        (await this.ctx.signer.queryClient.getSequence(
          await this.ctx.signer.getAddress()
        ))
      ).toString(),
      fee,
      msgs: toAminoMsgs(messages, this.ctx.signer.getConverterFromTypeUrl),
      memo: memo ?? '',
    };
    return signDoc;
  }

  async buildDocBytes(doc: CosmosAminoDoc): Promise<Uint8Array> {
    return encodeStdSignDoc(doc);
  }

  async syncSignedDoc(txRaw: TxRaw, signResp: SignDocResponse<CosmosAminoDoc>): Promise<TxRaw> {
    const authFee = toFee(signResp.signDoc.fee);
    const authInfo = this.ctx.getStagingData<AuthInfo>(STAGING_AUTH_INFO);

    const { encode: authEncode } = await this.buildAuthInfo(authInfo.signerInfos, authFee);
    const authInfoBytes = authEncode();

    return {
      bodyBytes: txRaw.bodyBytes,
      authInfoBytes: authInfoBytes,
      signatures: [signResp.signature.value]
    };
  }
}
