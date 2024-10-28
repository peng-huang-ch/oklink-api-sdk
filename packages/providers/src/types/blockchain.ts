export interface BlockchainSummary {
  chainFullName: string;
  chainShortName: string;
  symbol: string;
  lastHeight: string;
  lastBlockTime: string;
  circulatingSupply: string;
  circulatingSupplyProportion: string;
  transactions: string;
}

export interface BlockchainDetail {
  chainFullName: string;
  chainShortName: string;
  symbol: string;
  rank: string;
  mineable: boolean;
  algorithm: string;
  consensus: string;
  diffEstimation: string;
  currentDiff: string;
  diffAdjustTime: string;
  circulatingSupply: string;
  totalSupply: string;
  tps: string;
  lastHeight: string;
  lastBlockTime: string;
  issueDate: string;
}

export interface BlockchainStatistics {
  chainFullName: string;
  chainShortName: string;
  symbol: string;
  lastHeight: string;
  firstExchangeHistoricalTime: string; // Unix timestamp
  firstBlockTime: string; // Unix timestamp
  firstBlockHeight: string;
  avgBlockInterval: string;
  avgBlockSize24h: string;
  avgBlockSize24hPercent: string;
  mediaBlockSize: string;
  halveTime: string; // Unix timestamp
}

export interface BlockchainHolders {
  chainFullName: string;
  chainShortName: string;
  symbol: string;
  validAddressCount: string;
  newAddressCount24h: string;
  totalAddresses: string;
  newTotalAddresses24h: string;
  contractAddresses: string;
  newContractAddresses24h: string;
  externalAddresses: string;
  newExternalAddresses24h: string;
  activeAddresses: string;
  newActiveAddresses: string;
}

export interface BlockchainGasFee {
  chainFullName: string;
  chainShortName: string;
  symbol: string;
  validAddressCount: string;
  newAddressCount24h: string;
  totalAddresses: string;
  newTotalAddresses24h: string;
  contractAddresses: string;
  newContractAddresses24h: string;
  externalAddresses: string;
  newExternalAddresses24h: string;
  activeAddresses: string;
  newActiveAddresses: string;
}

export interface BlockchainTransaction {
  chainFullName: string;
  chainShortName: string;
  symbol: string;
  pendingTransactionCount: string;
  transactionValue24h: string;
  totalTransactionCount: string;
  tranRate: string;
  avgTransactionCount24h: string;
  avgTransactionCount24hPercent: string;
  pendingTransactionSize: string;
}

/** Response for the basic information of the chain computing power */
export interface BlockchainHashrate {
  chainFullName: string;
  chainShortName: string;
  /** Chain native tokens, e.g. btc */
  symbol: string;
  /** The total network hash rate in the past week */
  hashrate: string;
  /**
   * The 24-hour rise and fall of the computing power of the entire network,
   * For example: a positive number means an increase; 0.02, which means an increase of 2%
   * For example: a negative number means a decline: -0.02, which means a decline of 2%
   */
  hashrateChange24h: string;
}

/** Response for the basic mining information of the chains */
export interface BlockChainMine {
  chainFullName: string;
  chainShortName: string;
  /** Chain native tokens, e.g. btc */
  symbol: string;
  /** 24-hour average block reward */
  avgMineReward24h: string;
  /** Revenue per unit of computing power. */
  minerIncomePerUnit: string;
  /** The number of coins earned per unit of computing power */
  minerIncomePerUnitCoin: string;
}

/** Response for block details of the chains.*/
export interface BlockDetails {
  chainFullName: string;
  chainShortName: string;
  hash: string;
  height: string;
  validator: string;
  blockTime: string;
  txnCount: string;
  amount: string;
  blockSize: string;
  mineReward: string;
  totalFee: string;
  feeSymbol: string;
  ommerBlock: string;
  merkleRootHash: string;
  gasUsed: string;
  gasLimit: string;
  gasAvgPrice: string;
  state: string;
  burnt: string;
  netWork: string;
  txnInternal: string;
  miner: string;
  difficuity: string;
  nonce: string;
  tips: string;
  confirm: string;
  baseFeePerGas?: string;
}

/** Pagination */
export interface Pagination {
  /** chain full name */
  chainFullName: string;
  /** chain short name */
  chainShortName: string;
  /** page */
  page: string;
  /** limit */
  limit: string;
  /** total page. */
  totalPage: string;
}

/** The list of blocks under the blockchain. */
export interface BlockList {
  hash: string;
  height: string;
  validator: string;
  blockTime: string;
  txnCount: string;
  blockSize: string;
  mineReward: string;
  totalFee: string;
  feeSymbol: string;
  avgFee: string;
  ommerBlock: string;
  gasUsed: string;
  gasLimit: string;
  gasAvgPrice: string;
  state: string;
  burnt: string;
  netWork?: string;
}

export interface PageBlockList extends Pagination {
  blockList: BlockList[];
}


/**
 * Represents the transaction list under the blockchain.
 * @interface TransactionList
 */
export interface TransactionList {
  /** The unique identifier for the transaction. */
  txid: string;
  /** The method ID associated with the transaction. */
  methodId: string;
  /** The hash of the block containing this transaction. */
  blockHash: string;
  /** The height of the block containing this transaction. */
  height: string;
  /** The time at which the transaction occurred. */
  transactionTime: string;
  /** The address from which the transaction originated. */
  from: string;
  /** Indicates if the transaction is from a contract. */
  isFromContract: boolean;
  /** Indicates if the transaction is to a contract. */
  isToContract: boolean;
  /** The address to which the transaction is directed. */
  to: string;
  /** The amount involved in the transaction. */
  amount: string;
  /** The symbol of the transaction currency. */
  transactionSymbol: string;
  /** The transaction fee associated with this transaction. */
  txfee: string;
  /** The current state of the transaction. */
  state: string;
  /** The token ID associated with the transaction. */
  tokenId: string;
  /** The contract address of the token involved in the transaction. */
  tokenContractAddress: string;
}


export interface TransactionListMulti {
  /** The block height in the blockchain. */
  height: string;
  /** The unique identifier or hash of the transaction. */
  txId: string;
  /** The hash of the block containing this transaction. */
  blockHash: string;
  /** The time at which the transaction occurred. */
  transactionTime: string;
  /** The address from which the transaction originated. */
  from: string;
  /** Indicates if the transaction is from a contract. */
  isFromContract: boolean;
  /** Indicates if the transaction is to a contract. */
  isToContract: boolean;
  /** The address to which the transaction is directed. */
  to: string;
  /** The amount involved in the transaction. */
  amount: string;
  /** The symbol of the transaction currency. */
  transactionSymbol: string;
  /** The transaction fee associated with this transaction. */
  txFee: string;
  /** The current state of the transaction. */
  state: string;
  /** The token ID associated with the transaction. */
  tokenId: string;
  /** The contract address of the token involved in the transaction. */
  tokenContractAddress: string;
}

/**
 * Response containing paginated transaction list data.
 * @interface PageTransactionListMulti
 * @extends {Pagination}
 * @property {TransactionListMulti[]} transactionList - Array of transaction details
 */
export interface PageTransactionListMulti extends Pagination {
  transactionList: TransactionListMulti[];
}

/**
 * Response containing paginated transaction list data.
 * @interface PageTransactionList
 * @extends {Pagination}
 * @property {TransactionList[]} transactionList - Array of transaction details.
 */
export interface PageTransactionList extends Pagination {
  transactionList: TransactionList[];
}


/**
 * Represents the height and block time of a blockchain.
 * @interface BlockHeight
 */
export interface BlockHeight  {
  /** The height of the block in the blockchain. */
  height: string;
  /** The time at which the block was created. */
  blockTime: string;
}


/**
 * Represents the countdown information for blockchain blocks.
 * @interface BlockCountDown
 */
export interface BlockCountDown  {
  /** The current latest block height. */
  currentBlockHeight: string;
  /** The block height you want to query. */
  countDownBlockHeight: string;
  /** Remaining number of blocks. */
  remainingBlock: string;
  /** Estimated remaining time for block verification to be completed, the unit is second. */
  estimateTime: string;
}


/**
 * Represents the minted blocks.
 * @interface BlockMinted
 */
export interface MintedBlock  {
  /** The block height. */
  height: string;
  /** The block time. */
  blockTime: string;
  /** Mine reward. */
  mineReward: string;
}


/**
 * Response containing paginated block list data.
 * @interface PageMintedBlock
 * @extends {Pagination}
 * @property {MintedBlock[]} blockList - Array of block list.
 */
export interface PageMintedBlock extends Pagination {
  blockList: MintedBlock[];
}