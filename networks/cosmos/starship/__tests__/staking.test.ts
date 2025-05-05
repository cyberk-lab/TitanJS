/// <reference types="@types/jest" />

import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Asset } from '@chain-registry/types';
import { DirectSigner } from '@titanlabjs/cosmos/signers/direct';
import { OfflineDirectSigner } from '@titanlabjs/cosmos/types/wallet';
import {
  assertIsDeliverTxSuccess,
  toEncoders,
} from '@titanlabjs/cosmos/utils';
import { Secp256k1HDWallet } from '@titanlabjs/cosmos/wallets/secp256k1hd';
import {
  BondStatus,
  bondStatusToJSON,
} from 'titanlabjs/cosmos/staking/v1beta1/staking';
import { MsgDelegate } from 'titanlabjs/cosmos/staking/v1beta1/tx';
import { BigNumber } from 'bignumber.js'; // Using `fromWallet` to construct Signer
import { useChain } from 'starshipjs';

import { generateMnemonic } from '../src';
import { getBalance } from "@titanlabjs/cosmos-types/cosmos/bank/v1beta1/query.rpc.func";
import { getValidators, getDelegation } from "@titanlabjs/cosmos-types/cosmos/staking/v1beta1/query.rpc.func";

import { QueryBalanceRequest, QueryBalanceResponse } from '@titanlabjs/cosmos-types/cosmos/bank/v1beta1/query';
import { QueryDelegationRequest, QueryDelegationResponse, QueryValidatorsRequest, QueryValidatorsResponse } from '@titanlabjs/cosmos-types/cosmos/staking/v1beta1/query';

const cosmosHdPath = "m/44'/118'/0'/0/0";

describe('Staking tokens testing', () => {
  let directWallet: OfflineDirectSigner, denom: string, address: string;
  let chainInfo: ChainInfo,
    getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet;

  // Variables used accross testcases
  let validatorAddress: string;
  let delegationAmount: string;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('osmosis'));
    denom = (await getCoin()).base;

    const mnemonic = generateMnemonic();
    const prefix = chainInfo.chain.bech32_prefix;

    directWallet = await Secp256k1HDWallet.fromMnemonic(mnemonic, [
      {
        hdPath: cosmosHdPath,
        prefix,
      },
    ]);

    address = (await directWallet.getAccounts())[0].address;
    // (await directWallet.getAccount()).getAddress(prefix) as string;

    // Transfer osmosis and ibc tokens to address, send only osmo to address
    await creditFromFaucet(address);
  }, 200000);

  it('check address has tokens', async () => {
    const { balance } = await getBalance(await getRpcEndpoint(), {
      address,
      denom,
    });

    expect(balance!.amount).toEqual('10000000000');
  }, 10000);

  it('query validator address', async () => {
    const { validators } = await getValidators(await getRpcEndpoint(), {
      status: bondStatusToJSON(BondStatus.BOND_STATUS_BONDED),
    });
    let allValidators = validators;
    if (validators.length > 1) {
      allValidators = validators.sort((a, b) =>
        new BigNumber(b.tokens).minus(new BigNumber(a.tokens)).toNumber()
      );
    }

    expect(allValidators.length).toBeGreaterThan(0);

    // set validator address to the first one
    validatorAddress = allValidators[0].operatorAddress;
  });

  it('stake tokens to genesis validator', async () => {
    const directSigner = await DirectSigner.fromWallet(
      directWallet,
      toEncoders(MsgDelegate),
      await getRpcEndpoint(),
      { prefix: chainInfo.chain.bech32_prefix }
    );

    const { balance } = await getBalance(await getRpcEndpoint(), {
      address,
      denom,
    });

    // Stake half of the tokens
    // eslint-disable-next-line no-undef
    delegationAmount = (BigInt(balance!.amount) / BigInt(2)).toString();
    const msg = {
      typeUrl: MsgDelegate.typeUrl,
      value: MsgDelegate.fromPartial({
        delegatorAddress: address,
        validatorAddress: validatorAddress,
        amount: {
          amount: delegationAmount,
          denom: balance!.denom,
        },
      }),
    };

    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const result = await directSigner.signAndBroadcast(
      {
        messages: [msg],
        fee,
        memo: '',
      },
      {
        deliverTx: true,
      }
    );
    assertIsDeliverTxSuccess(result);
  });

  it('query delegation', async () => {
    const { delegationResponse } = await getDelegation(await getRpcEndpoint(), {
      delegatorAddr: address,
      validatorAddr: validatorAddress,
    });

    // Assert that the delegation amount is the set delegation amount
    // eslint-disable-next-line no-undef
    expect(BigInt(delegationResponse!.balance.amount)).toBeGreaterThan(
      BigInt(0)
    );
    expect(delegationResponse!.balance.amount).toEqual(delegationAmount);
    expect(delegationResponse!.balance.denom).toEqual(denom);
  });
});
