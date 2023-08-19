/* eslint-disable @typescript-eslint/no-explicit-any */
import { TxResponse } from "interchain-query/cosmos/base/abci/v1beta1/abci";
import { AuthInfo, TxBody, TxRaw } from "interchain-query/cosmos/tx/v1beta1/tx";

import { TxBodyParser } from "../../const/tx";
import {
  PartialProtoDoc,
  ProtoDoc,
  StdSignDoc,
  TelescopeData,
  WrapType,
  WrapTypeUrl,
} from "../../types";
import { toBytes } from "../utils/bytes";
import { standardizeFee } from "../utils/fee";
import { getMsgParser, getMsgParserPool } from "../utils/parser";
import { MsgParser } from "./msg";
import { MsgBaseParser } from "./msg.base";

export class MsgParserPool extends MsgBaseParser<any, any> {
  private _pool: Record<string, MsgParser<any, any>> = {};

  constructor(parsers: MsgParser<any, any>[]) {
    super(parsers[0].args);
    this._pool = Object.fromEntries(
      parsers.map((parser) => [parser.protoType, parser])
    );
  }

  static with(...parsers: (MsgParser<any, any> | string)[]) {
    const _parsers = parsers.map((parser) => {
      return typeof parser === "string" ? getMsgParser(parser) : parser;
    });
    return new MsgParserPool(_parsers);
  }

  static withTelescope(...data: TelescopeData<any, any>[]) {
    const parsers = data.map((d) => {
      return MsgParser.fromTelescope(d);
    });
    return new MsgParserPool(parsers);
  }

  add(...parsers: (MsgParser<any, any> | string)[]) {
    parsers.forEach((parser) => {
      if (typeof parser === "string") {
        const _parser = getMsgParser(parser);
        this._pool[_parser.protoType] = _parser;
      } else {
        this._pool[parser.protoType] = parser;
      }
    });
  }

  merge(...pools: (MsgParserPool | string)[]) {
    pools.forEach((pool) => {
      if (typeof pool === "string") {
        const _pool = getMsgParserPool(pool);
        this.add(..._pool.parsers);
      } else {
        this.add(...pool.parsers);
      }
    });
  }

  get parsers() {
    return Array.from(Object.values(this._pool));
  }

  private _getParser(type: string) {
    const parser = this._pool[type];
    if (!parser) {
      throw new Error(
        `Please add the parser with typeUrl: ${type} in the pool (using \`add\` method).`
      );
    }
    return parser;
  }

  toStdDoc({
    msgs,
    fee,
    memo,
    accountNumber,
    sequence,
    chainId,
  }: ProtoDoc<WrapTypeUrl<any>>): StdSignDoc<any> {
    return {
      msgs: msgs.map((msg) => {
        const parser = this._getParser(msg.typeUrl);
        return parser.fromProto(msg).toAmino().pop() as WrapType<any>;
      }),
      fee: standardizeFee(fee),
      memo,
      account_number: accountNumber.toString(),
      sequence: sequence.toString(),
      chain_id: chainId,
    };
  }

  async signOffline(protoDoc: ProtoDoc<WrapTypeUrl<any>>): Promise<TxRaw> {
    const { msgs, fee, memo, sequence } = protoDoc;

    const txBody: TxBody = TxBodyParser.createProtoData({
      messages: msgs.map((msg) => {
        const parser = this._pool[msg.typeUrl];
        if (!parser) {
          throw new Error(`No parser provided for typeUrl ${this.protoType}`);
        }
        return parser.fromProto(msg).encode().pop() as WrapTypeUrl<Uint8Array>;
      }),
      memo,
    }) as TxBody;

    const authInfo: AuthInfo = this.createAuthInfo({
      pubkey: this.auth.key.pubkey,
      sequence,
      fee,
    });

    const signature = this.auth.sign(toBytes(this.toStdDoc(protoDoc)));

    return this.createTxRaw({
      txBody,
      authInfo,
      signatures: [signature],
    });
  }

  async sign(
    partialProtoDoc: PartialProtoDoc<WrapTypeUrl<any>>
  ): Promise<TxRaw> {
    const protoDoc = await this.createProtoDoc(partialProtoDoc);
    return await this.signOffline(protoDoc);
  }

  async signAndBroadcast(
    partialProtoDoc: PartialProtoDoc<WrapTypeUrl<any>>,
    checkTx = true,
    commitTx = false
  ): Promise<TxResponse | undefined> {
    return await this.broadcast(
      await this.sign(partialProtoDoc),
      checkTx,
      commitTx
    );
  }
}
