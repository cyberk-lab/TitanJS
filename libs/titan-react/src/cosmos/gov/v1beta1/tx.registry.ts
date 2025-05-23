import { TelescopeGeneratedType } from "../../../types";
import { MsgSubmitProposal, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.gov.v1beta1.MsgSubmitProposal", MsgSubmitProposal], ["/cosmos.gov.v1beta1.MsgVote", MsgVote], ["/cosmos.gov.v1beta1.MsgVoteWeighted", MsgVoteWeighted], ["/cosmos.gov.v1beta1.MsgDeposit", MsgDeposit]];
export const MessageComposer = {
  encoded: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.encode(value).finish()
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value: MsgVote.encode(value).finish()
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
        value: MsgVoteWeighted.encode(value).finish()
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
        value
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value
      };
    }
  },
  fromPartial: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial(value)
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value: MsgVote.fromPartial(value)
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
        value: MsgVoteWeighted.fromPartial(value)
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    }
  }
};