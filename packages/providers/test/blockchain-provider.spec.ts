import 'dotenv/config';
import { describe, expect, it } from 'vitest';

import { BlockChainProvider } from '../src/blockchain-provider.js';

describe('blockchain', function () {
  const keys = [process.env.OKLINK_KEY!];
  const blockchain = new BlockChainProvider({
    keys,
  });
  const chainShortName = 'ETH';

  describe('fundamental data', () => {
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

  describe('block data', () => {
    it('getBlockFills', async () => {
      const height = 735732;
      const result = await blockchain.getBlockFills(chainShortName, height);
      console.log(result.data);
      expect(result.isOk()).toBeTruthy();
      expect(result.getOrThrow()).toBeTruthy();
      expect(result.data[0]).toMatchObject({
        chainFullName: 'Ethereum',
        chainShortName: 'ETH',
        hash: '0x545f02750b8fffe8354140b8ec2414fd72fa34a5ca93c58fe25f94c07ebb44ff',
        height: '735732',
        validator: 'NanoPool',
        blockTime: '1450873643000',
        txnCount: '4',
        amount: '12.950329114',
        blockSize: '1509',
        mineReward: '5.012841864',
        totalFee: '0.012841864',
        feeSymbol: 'ETH',
        ommerBlock: '0',
        merkleRootHash: '0xcfb7cc8bc5f11bb9c3e05a9fec1a17b63b0899a75624038a762ce800bda588b3',
        gasUsed: '249382',
        gasLimit: '3141592',
        gasAvgPrice: '0.000000051494751025',
        state: '',
        burnt: '',
        netWork: '',
        txnInternal: '0',
        miner: '0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5',
        difficuity: '8518354788907',
        nonce: 'e246c1795e5cc38f',
        tips: '',
        // confirm: '20328832',
        baseFeePerGas: '',
      });
    });

    it('getBlockList', async () => {
      const result = await blockchain.getBlockList(chainShortName, undefined, 10, 1);
      expect(result.isOk()).toBeTruthy();
      expect(result.data[0]).haveOwnProperty('page');
      expect(result.data[0]).haveOwnProperty('limit');
      expect(result.data[0]).haveOwnProperty('totalPage');
      expect(result.data[0].blockList.length).toBe(10)
      expect(result.data[0].blockList[0]).haveOwnProperty('height');
    });

    it('getTransactionList', async () => {
      const result = await blockchain.getTransactionList(chainShortName, 18126560, 'transaction', 1);
      expect(result.isOk()).toBeTruthy();
      expect(result.data[0]).haveOwnProperty('page');
      expect(result.data[0]).haveOwnProperty('limit');
      expect(result.data[0]).haveOwnProperty('totalPage');
      expect(result.data[0].blockList.length).toBe(1)
      expect(result.data[0].blockList[0]).haveOwnProperty('txid');
    });

    it('getTransactionListMulti', async () => {
      const result = await blockchain.getTransactionListMulti(chainShortName, 18809970, 18809972, 'transaction', 1);
      expect(result.isOk()).toBeTruthy();
      expect(result.data[0].transactionList[0]).toMatchObject({
        "height": "18809972",
        "txId": "0xb86c039478b97be1e4de569ffa227dd57c0aeb793955328d7d17674f9ec0cee1",
        "blockHash": "0x5248621464bded6029e20a0b2da1e103bb31bc4048d8623619b82eb6c2da25ce",
        "transactionTime": "1702867319000",
        "from": "0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5",
        "isFromContract": false,
        "isToContract": false,
        "to": "0x5c8d0eed35a9e632bb8c0abe4662b6ab3326850b",
        "amount": "0.150851832900380503",
        "transactionSymbol": "ETH",
        "txFee": "0.000926296864164",
        "state": "success",
        "tokenId": "",
        "tokenContractAddress": ""
      });
    });

    it('getBlockHeighByTime', async () => {
      const result = await blockchain.getBlockHeighByTime(chainShortName, 1702366480000);
      expect(result.isOk()).toBeTruthy();
      expect(result.data[0]).toMatchObject({
        "height": "18768649",
        "blockTime": "1702366475000"
      });
    });

    it('getBlockCountDown', async () => {
      const result = await blockchain.getBlockCountDown(chainShortName, 41064934);
      expect(result.isOk()).toBeTruthy();
      expect(result.data[0]).toMatchObject({
        "countDownBlockHeight": "41064934",
      });
    });

    it('getMinedBlockList', async () => {
      const result = await blockchain.getMinedBlockList(chainShortName, '0x4838b106fce9647bdf1e7877bf73ce8b0bad5f97');
      expect(result.isOk()).toBeTruthy();
      expect(result.data[0]).haveOwnProperty('page');
      expect(result.data[0]).haveOwnProperty('limit');
      expect(result.data[0]).haveOwnProperty('totalPage');
      expect(result.data[0].blockList[0]).haveOwnProperty('height');
      expect(result.data[0].blockList[0]).haveOwnProperty('blockTime');
      expect(result.data[0].blockList[0]).haveOwnProperty('mineReward');
    });
  });
});
