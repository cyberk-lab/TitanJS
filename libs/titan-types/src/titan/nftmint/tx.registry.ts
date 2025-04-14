import { TelescopeGeneratedType } from "../../types";
import { MsgCreateClass, MsgUpdateClass, MsgTransferClass, MsgMint } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/titan.nftmint.MsgCreateClass", MsgCreateClass], ["/titan.nftmint.MsgUpdateClass", MsgUpdateClass], ["/titan.nftmint.MsgTransferClass", MsgTransferClass], ["/titan.nftmint.MsgMint", MsgMint]];
export const MessageComposer = {
  encoded: {
    createClass(value: MsgCreateClass) {
      return {
        typeUrl: "/titan.nftmint.MsgCreateClass",
        value: MsgCreateClass.encode(value).finish()
      };
    },
    updateClass(value: MsgUpdateClass) {
      return {
        typeUrl: "/titan.nftmint.MsgUpdateClass",
        value: MsgUpdateClass.encode(value).finish()
      };
    },
    transferClass(value: MsgTransferClass) {
      return {
        typeUrl: "/titan.nftmint.MsgTransferClass",
        value: MsgTransferClass.encode(value).finish()
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/titan.nftmint.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createClass(value: MsgCreateClass) {
      return {
        typeUrl: "/titan.nftmint.MsgCreateClass",
        value
      };
    },
    updateClass(value: MsgUpdateClass) {
      return {
        typeUrl: "/titan.nftmint.MsgUpdateClass",
        value
      };
    },
    transferClass(value: MsgTransferClass) {
      return {
        typeUrl: "/titan.nftmint.MsgTransferClass",
        value
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/titan.nftmint.MsgMint",
        value
      };
    }
  },
  fromPartial: {
    createClass(value: MsgCreateClass) {
      return {
        typeUrl: "/titan.nftmint.MsgCreateClass",
        value: MsgCreateClass.fromPartial(value)
      };
    },
    updateClass(value: MsgUpdateClass) {
      return {
        typeUrl: "/titan.nftmint.MsgUpdateClass",
        value: MsgUpdateClass.fromPartial(value)
      };
    },
    transferClass(value: MsgTransferClass) {
      return {
        typeUrl: "/titan.nftmint.MsgTransferClass",
        value: MsgTransferClass.fromPartial(value)
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/titan.nftmint.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    }
  }
};