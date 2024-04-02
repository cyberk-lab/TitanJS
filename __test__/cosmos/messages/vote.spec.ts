import { DirectSigner } from "@interchainjs/cosmos/direct";
import { MsgVote } from "@interchainjs/cosmos-msgs/cosmos/gov/v1beta1/tx";

import { address, chain } from "../../data";
import { toConverter, toEncoder } from "@interchainjs/cosmos/utils";
import { Message } from "@interchainjs/cosmos/types";
import { AminoSigner } from "@interchainjs/cosmos/amino";
import { VoteOption } from "@interchainjs/cosmos-msgs/cosmos/gov/v1beta1/gov";
import { auth } from "../constants";

export const messages: Message<MsgVote>[] = [
  {
    typeUrl: MsgVote.typeUrl,
    value: {
      proposalId: 4n,
      voter: address.cosmoshub.genesis,
      option: VoteOption.VOTE_OPTION_YES,
    },
  },
];

describe("Vote", () => {
  it("should success with direct signing", async () => {
    const signer = new DirectSigner(
      auth,
      [toEncoder(MsgVote)],
      chain.cosmoshub.rpc
    );
    const resp = await (await signer.sign(messages)).broadcast({
      checkTx: true,
      deliverTx: true,
    });
    expect(resp.check_tx?.code).toEqual(0);
    expect(resp.deliver_tx?.code).toEqual(0);
  });

  it("should success with amino signing", async () => {
    const signer = new AminoSigner(
      auth,
      [toEncoder(MsgVote)],
      [toConverter(MsgVote)],
      chain.cosmoshub.rpc
    );
    const resp = await (await signer.sign(messages)).broadcast({
      checkTx: true,
      deliverTx: true,
    });
    expect(resp.check_tx?.code).toEqual(0);
    expect(resp.deliver_tx?.code).toEqual(0);
  });
});
