import { describe, expect, it } from 'vitest';

import { BlockChainProvider } from '../src/blockchain-provider.js';

describe('blockchain', function () {
  const keys = [process.env.OKLINK_KEY!];
  const blockchain = new BlockChainProvider({
    keys,
  });
  const chainShortName = 'ETH';

  it('getSummary', async () => {
    const result = await blockchain.getSummary(chainShortName);
    expect(result.isOk()).toBeTruthy();
    expect(result.getOrThrow()).toBeTruthy();
    expect(result.data[0]).haveOwnProperty('chainFullName');
    expect(result.data[0]).haveOwnProperty('lastHeight');
    expect(result.data[0]).haveOwnProperty('circulatingSupply');
  });

  it('getInfo', async () => {
    const result = await blockchain.getInfo(chainShortName);
    expect(result.isOk()).toBeTruthy();
    expect(result.data[0]).haveOwnProperty('chainShortName', chainShortName);
    expect(result.data[0]).haveOwnProperty('rank');
  });

  it('getBlock', async () => {
    const result = await blockchain.getBlock(chainShortName);
    expect(result.isOk()).toBeTruthy();
    expect(result.data[0]).haveOwnProperty('lastHeight');
    expect(result.data[0]).haveOwnProperty('firstBlockHeight');
  });

  it('getAddress', async () => {
    const result = await blockchain.getAddress(chainShortName);
    expect(result.isOk()).toBeTruthy();
    expect(result.data[0]).haveOwnProperty('chainShortName', chainShortName);
    expect(result.data[0]).haveOwnProperty('totalAddresses');
  });

  it('getGasFee', async () => {
    const result = await blockchain.getGasFee(chainShortName);
    expect(result.isOk()).toBeTruthy();
    expect(result.data[0]).haveOwnProperty('chainShortName', chainShortName);
    expect(result.data[0]).haveOwnProperty('baseFee');
  });

  it('getTransaction', async () => {
    const result = await blockchain.getTransaction(chainShortName);
    expect(result.isOk()).toBeTruthy();
    expect(result.data[0]).haveOwnProperty('chainShortName', chainShortName);
    expect(result.data[0]).haveOwnProperty('pendingTransactionCount');
  });

  it('getHashrate', async () => {
    const result = await blockchain.getHashrate(chainShortName);
    expect(result.isOk()).toBeTruthy();
    expect(result.data[0]).haveOwnProperty('chainShortName', chainShortName);
    expect(result.data[0]).haveOwnProperty('hashRate');
  });

  it('getMine', async () => {
    const result = await blockchain.getMine(chainShortName);
    expect(result.isOk()).toBeTruthy();
    expect(result.data[0]).haveOwnProperty('chainShortName', chainShortName);
    expect(result.data[0]).haveOwnProperty('minerIncomePerUnit');
  });
});
