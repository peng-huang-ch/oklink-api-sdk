import { HttpProvider } from './http-provider.js';
import { Result } from './result.js';
import type { BlockchainDetail, BlockchainSummary, BlockchainStatistics, BlockchainHolders, BlockchainGasFee, BlockchainTransaction, BlockchainHashrate, BlockChainMine } from './types';

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
}
