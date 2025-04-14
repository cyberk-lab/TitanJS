import { EthSecp256k1Auth } from "@interchainjs/auth/ethSecp256k1";
import { AminoSigner } from "@interchainjs/cosmos/signers/amino";
import { DirectSigner } from "@interchainjs/cosmos/signers/direct";
import { SigningClient } from "@interchainjs/cosmos/signing-client";
import { AminoGenericOfflineSigner } from "@interchainjs/cosmos/types/wallet";
import { toConverters, toEncoders } from "@interchainjs/cosmos/utils";
import { MsgSubmitProposal, MsgVote } from "interchainjs/cosmos/gov/v1/tx";
import { TextProposal } from "interchainjs/cosmos/gov/v1beta1/gov";
import { MsgDelegate } from "interchainjs/cosmos/staking/v1beta1/tx";
import { ConfigContext, generateMnemonic, useChain, useRegistry } from "starshipjs";
import { defaultSignerOptions } from "./defaults";
import { EthSecp256k1HDWallet } from "./wallets/ethSecp256k1hd";
import {
    assetLists as allAssetLists,
    chains as allChains,
} from "@chain-registry/v2";
import path from "path";

const hdPath = "m/44'/60'/0'/0/0";

const titan = allChains.find((chain) => chain.chainName === 'titantestnet');
jest.setTimeout(70_000)
describe('Titan', () => {
    beforeAll(async () => {
        const configFile = path.join(__dirname, 'starship', 'configs', 'config.yaml');
        ConfigContext.setConfigFile(configFile);
        ConfigContext.setRegistry(await useRegistry(configFile));
    })
    it('should be defined', async () => {
        // const { chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } = useChain('titantestnet');
        console.log(titan)

        const denom = titan?.fees?.feeTokens?.[0]?.denom;

        const commonPrefix = titan?.bech32Prefix;
        const rpcEndpoint = titan?.apis?.rpc?.[0].address;
        // Initialize auth
        const [directAuth] = EthSecp256k1Auth.fromMnemonic(generateMnemonic(), [
            hdPath,
        ]);
        const [aminoAuth] = EthSecp256k1Auth.fromMnemonic(generateMnemonic(), [
            hdPath,
        ]);
        const directSigner = new DirectSigner(
            directAuth,
            toEncoders(MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote),
            rpcEndpoint,
            defaultSignerOptions.Cosmos
        );
        const aminoSigner = new AminoSigner(
            aminoAuth,
            toEncoders(MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote),
            toConverters(MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote),
            rpcEndpoint,
            defaultSignerOptions.Cosmos
        );
        const directAddress = await directSigner.getAddress();
        const aminoAddress = await aminoSigner.getAddress();

        // Initialize wallet
        const directWallet = EthSecp256k1HDWallet.fromMnemonic(generateMnemonic(), [
            {
                prefix: commonPrefix,
                hdPath: hdPath,
            },
        ]);
        const aminoWallet = EthSecp256k1HDWallet.fromMnemonic(generateMnemonic(), [
            {
                prefix: commonPrefix,
                hdPath: hdPath,
            },
        ]);
        const directOfflineSigner = directWallet.toOfflineDirectSigner();
        const aminoOfflineSigner = aminoWallet.toOfflineAminoSigner();
        const directOfflineAddress = (await directOfflineSigner.getAccounts())[0].address;
        const aminoOfflineAddress = (await aminoOfflineSigner.getAccounts())[0].address;
        const testingOfflineAddress = aminoOfflineAddress;
        const signingClient = await SigningClient.connectWithSigner(
            rpcEndpoint,
            new AminoGenericOfflineSigner(aminoOfflineSigner),
            {
                signerOptions: defaultSignerOptions.Cosmos,
                broadcast: {
                    checkTx: true,
                    deliverTx: true,
                    useLegacyBroadcastTxCommit: true,
                }
            }
        );
        const acc = await signingClient.getAccountNumber("titan1re8c5aftat0rswfv8nk0xkcqu8ly2qdqz06g5l")
        expect(acc).toBeDefined()
    });
});

