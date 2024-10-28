import { HttpProvider } from './http-provider.js';
import { Result } from './result.js';
import type { BlockchainDetail, BlockchainSummary, BlockchainStatistics, BlockchainHolders, BlockchainGasFee, BlockchainTransaction, BlockchainHashrate, BlockChainMine, PageBlockList, PageTransactionList, BlockHeight, PageMintedBlock } from './types';

export class BlockChainProvider extends HttpProvider {
  /**
   * https://www.oklink.com/docs/en/#fundamental-blockchain-data-fundamental-data
   * Gets blockchain summary information for a specific chain
   * @param chainShortName - Optional chain identifier (e.g. "ETH", "BTC")
   * @returns Promise containing the blockchain summary data
   * @example
   * ```typescript
   * const provider = new BlockChainProvider();
   * const result = await provider.getSummary("ETH");
   * console.log(result.isOk())
   * console.log(result.data)
   * ```
   */
  async getSummary(chainShortName?: string): Promise<Result<BlockchainSummary[]>> {
    const endpoint = '/api/v5/explorer/blockchain/summary';
    return await this.sendRequest(endpoint, { chainShortName });
  }

  /**
   * https://www.oklink.com/docs/en/#fundamental-blockchain-data-fundamental-data-get-blockchain-details
   * Get the details of the chains currently supported by OKLink.
   * @param chainShortName - chain identifier (e.g. "ETH", "BTC")
   * @returns Promise containing the blockchain detail data
   * @example
   * ```typescript
   * const provider = new BlockChainProvider();
   * const result = await provider.getInfo("ETH");
   * console.log(result.isOk())
   * console.log(result.data)
   * ```
   */
  async getInfo(chainShortName: string): Promise<Result<BlockchainDetail[]>> {
    const endpoint = '/api/v5/explorer/blockchain/info';
    return await this.sendRequest(endpoint, { chainShortName });
  }

  /**
   * https://www.oklink.com/docs/en/#fundamental-blockchain-data-fundamental-data-get-block-statistics
   * Obtain the basic information of the detailed blocks of the chains.
   * @param chainShortName - chain identifier (e.g. "ETH", "BTC")
   * @returns Promise containing the blockchain detail data
   * @example
   * ```typescript
   * const provider = new BlockChainProvider();
   * const result = await provider.getInfo("ETH");
   * console.log(result.isOk())
   * console.log(result.data)
   * ```
   */
  async getBlock(chainShortName: string): Promise<Result<BlockchainStatistics[]>> {
    const endpoint = '/api/v5/explorer/blockchain/block';
    return await this.sendRequest(endpoint, { chainShortName });
  }

  /**
   * https://www.oklink.com/docs/en/#fundamental-blockchain-data-fundamental-data-get-address-statistics-by-chain
   * Get the basic information of the currency Holder addresses of the chains.
   * @param chainShortName - chain identifier (e.g. "ETH", "BTC")
   * @returns Promise containing the he basic information of the currency Holder addresses
   * @example
   * ```typescript
   * const provider = new BlockChainProvider();
   * const result = await provider.getAddress("ETH");
   * console.log(result.isOk())
   * console.log(result.data)
   * ```
   */
  async getAddress(chainShortName: string): Promise<Result<BlockchainHolders[]>> {
    const endpoint = '/api/v5/explorer/blockchain/address';
    return await this.sendRequest(endpoint, { chainShortName });
  }

  /**
   * https://www.oklink.com/docs/en/#fundamental-blockchain-data-fundamental-data-get-transaction-or-gas-fee
   * Get the basic information of the gas fee of the chains.
   * @param chainShortName - chain identifier (e.g. "ETH", "BTC")
   * @returns Promise containing the gas fee information for the specified blockchain
   * @example
   * ```typescript
   * const provider = new BlockChainProvider();
   * const result = await provider.getGasFee("ETH");
   * console.log(result.isOk())
   * console.log(result.data) // Array of BlockchainGasFee objects
   * ```
   */
  async getGasFee(chainShortName: string): Promise<Result<BlockchainGasFee[]>> {
    const endpoint = '/api/v5/explorer/blockchain/fee';
    return await this.sendRequest(endpoint, { chainShortName });
  }

  /**
   * https://www.oklink.com/docs/en/#fundamental-blockchain-data-fundamental-data-get-transaction-details-by-chain
   * Get the basic transaction information on the chains.
   * @param chainShortName - chain identifier (e.g. "ETH", "BTC")
   * @returns Promise the basic transaction information
   * @example
   * ```typescript
   * const provider = new BlockChainProvider();
   * const result = await provider.getTransaction("ETH");
   * console.log(result.isOk())
   * console.log(result.data)
   * ```
   */
  async getTransaction(chainShortName: string): Promise<Result<BlockchainTransaction[]>> {
    const endpoint = '/api/v5/explorer/blockchain/transaction';
    return await this.sendRequest(endpoint, { chainShortName });
  }

  /**
   * https://www.oklink.com/docs/en/#fundamental-blockchain-data-fundamental-data-get-transaction-details-by-chain
   * Get the basic information of the chain computing power.
   * @param chainShortName - chain identifier (e.g. "ETH", "BTC")
   * @returns
   * @example
   * ```typescript
   * const provider = new BlockChainProvider();
   * const result = await provider.getHashrate("ETH");
   * console.log(result.isOk())
   * console.log(result.data)
   * ```
   */
  async getHashrate(chainShortName: string): Promise<Result<BlockchainHashrate[]>> {
    const endpoint = '/api/v5/explorer/blockchain/hashes';
    return await this.sendRequest(endpoint, { chainShortName });
  }

  /**
   * https://www.oklink.com/docs/en/#fundamental-blockchain-data-fundamental-data-get-transaction-details-by-chain
   * Obtain the basic mining information of the chains.
   * @param chainShortName - chain identifier (e.g. "ETH", "BTC")
   * @returns
   * @example
   * ```typescript
   * const provider = new BlockChainProvider();
   * const result = await provider.getMine("ETH");
   * console.log(result.isOk())
   * console.log(result.data)
   * ```
   */
  async getMine(chainShortName: string): Promise<Result<BlockChainMine[]>> {
    const endpoint = '/api/v5/explorer/blockchain/mine';
    return await this.sendRequest(endpoint, { chainShortName });
  }

  /** The Block data */
  /**
   * @see https://www.oklink.com/docs/en/#fundamental-blockchain-data-block-data-get-block-details
   * Obtain the basic mining information of the chains.
   * @param {string} chainShortName - chain identifier (e.g. "ETH", "BTC")
   * @param {number} height - block height
   * @param {string} [netWork] - the abbreviated name of the blockchain network, required for USDT
   * @returns {Promise<Result<BlockChainMine[]>>}
   * @example
   * ```typescript
   * const provider = new BlockChainProvider();
   * const result = await provider.getBlockFills("ETH");
   * console.log(result.isOk())
   * console.log(result.data)
   * ```
   */
  async getBlockFills(chainShortName: string, height: number, netWork?: string): Promise<Result<BlockChainMine[]>> {
    const endpoint = '/api/v5/explorer/block/block-fills';
    return await this.sendRequest(endpoint, { chainShortName, height, netWork });
  }

  /**
   * @see https://www.oklink.com/docs/en/#fundamental-blockchain-data-block-data-get-block-list
   * Get the block list information of the chains, and only return nearly 10,000 block list data.
   * @param {string} chainShortName - chain identifier (e.g. "ETH", "BTC")
   * @param {number} [height] - block height
   * @param {number} [limit] - The number of results returned per request. The maximum is 100. The default is 20.
   * @param {number} [page] - The number of results returned per request. The maximum is 100. The default is 20.
   * @returns {Promise<Result<PageBlockList[]>>}
   * @example
   * ```typescript
   * const provider = new BlockChainProvider();
   * const result = await provider.getBlockList("ETH");
   * console.log(result.isOk())
   * ```
   */
  async getBlockList(chainShortName: string, height?: number, limit?: number, page?: number): Promise<Result<PageBlockList[]>> {
    const endpoint = '/api/v5/explorer/block/block-list';
    return await this.sendRequest(endpoint, { chainShortName, height, limit, page });
  }

  /**
   * @see https://www.oklink.com/docs/en/#fundamental-blockchain-data-block-data-get-block-transaction-list
   * Get the list of transactions in a block under the blockchain.
   * @param {string} chainShortName - chain identifier (e.g. "ETH", "BTC")
   * @param {number} height - block height
   * @param {string} [protocolType] - Protocol type. Can be:
   *   - "transaction": normal transaction (default)
   *   - "internal": internal transaction  
   *   - "token_20"
   *   - "token_721"
   *   - "token_1155"
   *   - "token_10"
   * @param {number} [limit] - The number of results per page. Max 100, default 20.
   * @param {number} [page] - The page number to return.
   * @returns {Promise<Result<PageTransactionList[]>>} Promise resolving to transaction list with pagination
   * @example
   * ```typescript
   * const provider = new BlockChainProvider();
   * const result = await provider.getTransactionList("ETH", 12345678);
   * console.log(result.isOk());
   * console.log(result.data[0].blockList); // Array of transactions
   * ```
   */
  async getTransactionList(chainShortName: string, height: number, protocolType?: string, limit?: number, page?: number): Promise<Result<PageBlockList[]>> {
    const endpoint = '/api/v5/explorer/block/transaction-list';
    return await this.sendRequest(endpoint, { chainShortName, height, protocolType, limit, page });
  }

  /**
   * @see https://www.oklink.com/docs/en/#fundamental-blockchain-data-block-data-get-block-transaction-list-in-batches
   * Get block transaction list in batches.
   * @param {string} chainShortName - chain identifier (e.g. "ETH", "BTC")
   * @param {number} startBlockHeight - The starting block height
   * @param {number} endBlockHeight - The end block height
   * @param {string} [protocolType] - Protocol type. Can be:
   *   - "transaction": normal transaction (default)
   *   - "internal": internal transaction  
   *   - "token_20"
   *   - "token_721"
   *   - "token_1155"
   *   - "token_10"
   * @param {number} [limit] - The number of results per page. Max 100, default 20.
   * @param {number} [page] - The page number to return.
   * @returns {Promise<Result<PageTransactionList[]>>} Promise resolving to transaction list with pagination
   * @example
   * ```typescript
   * const provider = new BlockChainProvider();
   * const result = await provider.getTransactionList("ETH", 12345678);
   * console.log(result.isOk());
   * console.log(result.data[0].blockList); // Array of transactions
   * ```
   */
  async getTransactionListMulti(chainShortName: string, startBlockHeight: number, endBlockHeight: number,protocolType?: string, limit?: number, page?: number): Promise<Result<PageTransactionList[]>> {
    const endpoint = '/api/v5/explorer/block/transaction-list-multi';
    return await this.sendRequest(endpoint, { chainShortName, startBlockHeight, endBlockHeight, protocolType, limit, page });
  }


  /**
   * @see https://www.oklink.com/docs/en/#fundamental-blockchain-data-block-data-get-block-height-based-on-timestamp
   * 
   * Retrieves the block height based on a specified timestamp.
   * 
   * @param {string} chainShortName - The chain identifier (e.g., "ETH", "BTC").
   * @param {number} time - The specific time to query, in Unix timestamp format (milliseconds), e.g., 1597026383085.
   * @param {number} [closest=0] - Determines the block height to return:
   *   - "before": the most recent block that was validated before (including) the given timestamp.
   *   - "after": the most recent block that was validated after (including) the given timestamp.
   *   The default is `after`.
   * @returns {Promise<Result<BlockHeight[]>>} A promise that resolves to an array of block heights.
   * @example
   * ```typescript
   * const provider = new BlockChainProvider();
   * const result = await provider.getBlockHeighByTime("ETH", 12345678);
   * console.log(result.isOk());
   * console.log(result.data[0]); // Array of transactions
   * * ```
   */
  async getBlockHeighByTime(chainShortName: string, time: number, closest?: string): Promise<Result<BlockHeight[]>> {
    const endpoint = '/api/v5/explorer/block/block-height-by-time';
    return await this.sendRequest(endpoint, { chainShortName, time, closest });
  }


  /**
   * @see https://www.oklink.com/docs/en/#fundamental-blockchain-data-block-data-get-block-countdown-time
   * 
   * Query the estimated time remaining, in seconds, until a certain block is validated .
   * 
   * @param {string} chainShortName - The chain identifier (e.g., "ETH", "BTC").
   * @param {number} countDownBlockHeight - The specific block height you want to query
   * @returns {Promise<Result<BlockHeight[]>>} A promise that resolves to an array of block heights.
   * @example
   * ```typescript
   * const provider = new BlockChainProvider();
   * const result = await provider.getBlockHeighByTime("ETH", 12345678);
   * console.log(result.isOk());
   * console.log(result.data[0]); // Array of transactions
   * * ```
   */
  async getBlockCountDown(chainShortName: string, countDownBlockHeight: number): Promise<Result<BlockHeight[]>> {
    const endpoint = '/api/v5/explorer/block/block-count-down';
    return await this.sendRequest(endpoint, { chainShortName, countDownBlockHeight });
  }


  /**
   * @see https://www.oklink.com/docs/en/#fundamental-blockchain-data-block-data-get-block-countdown-time
   * 
   * Query the estimated time remaining, in seconds, until a certain block is validated .
   * 
   * @param {string} chainShortName - The chain identifier (e.g., "ETH", "BTC").
   * @param {string} address - Validator address.
   * @param {number} [limit] - The number of results per page. Max 100, default 20.
   * @param {number} [page] - The page number to return.
   * @returns {Promise<Result<BlockHeight[]>>} A promise that resolves to an array of block heights.
   * @example
   * ```typescript
   * const provider = new BlockChainProvider();
   * const result = await provider.getBlockHeighByTime("ETH", 12345678);
   * console.log(result.isOk());
   * console.log(result.data[0]); // Array of transactions
   * * ```
   */
  async getMinedBlockList(chainShortName: string, address: string, limit?: number, page?: string): Promise<Result<PageMintedBlock[]>> {
    const endpoint = '/api/v5/explorer/block/mined-block-list';
    return await this.sendRequest(endpoint, { chainShortName, address, limit, page });
  }
}
