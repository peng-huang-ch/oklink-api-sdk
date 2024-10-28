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
