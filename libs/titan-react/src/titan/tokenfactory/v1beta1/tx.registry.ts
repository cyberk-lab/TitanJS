import { TelescopeGeneratedType } from "../../../types";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/titan.tokenfactory.v1beta1.MsgCreateDenom", MsgCreateDenom], ["/titan.tokenfactory.v1beta1.MsgMint", MsgMint], ["/titan.tokenfactory.v1beta1.MsgBurn", MsgBurn], ["/titan.tokenfactory.v1beta1.MsgChangeAdmin", MsgChangeAdmin], ["/titan.tokenfactory.v1beta1.MsgSetDenomMetadata", MsgSetDenomMetadata], ["/titan.tokenfactory.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const MessageComposer = {
  encoded: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/titan.tokenfactory.v1beta1.MsgCreateDenom",
        value: MsgCreateDenom.encode(value).finish()
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/titan.tokenfactory.v1beta1.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/titan.tokenfactory.v1beta1.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },
    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/titan.tokenfactory.v1beta1.MsgChangeAdmin",
        value: MsgChangeAdmin.encode(value).finish()
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/titan.tokenfactory.v1beta1.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/titan.tokenfactory.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/titan.tokenfactory.v1beta1.MsgCreateDenom",
        value
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/titan.tokenfactory.v1beta1.MsgMint",
        value
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/titan.tokenfactory.v1beta1.MsgBurn",
        value
      };
    },
    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/titan.tokenfactory.v1beta1.MsgChangeAdmin",
        value
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/titan.tokenfactory.v1beta1.MsgSetDenomMetadata",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/titan.tokenfactory.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/titan.tokenfactory.v1beta1.MsgCreateDenom",
        value: MsgCreateDenom.fromPartial(value)
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/titan.tokenfactory.v1beta1.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/titan.tokenfactory.v1beta1.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },
    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/titan.tokenfactory.v1beta1.MsgChangeAdmin",
        value: MsgChangeAdmin.fromPartial(value)
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/titan.tokenfactory.v1beta1.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/titan.tokenfactory.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};