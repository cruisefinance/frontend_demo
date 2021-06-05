import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'DINO-USDC LP',
    decimal: 18,
    lpAddresses: {
      137: '0x09833c4fbd1d28971b89a84fed3e8c16e45dea7d',
    },
    tokenSymbol: 'DINO',
    tokenAddresses: {
      137: '0xad04791c59547ccd826a164ffb9061cf12b93fd4',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'DINO-WMATIC LP',
    decimal: 18,
    lpAddresses: {
      137: '0xdf401ad81944e68188334966f944a3b0c05cc3f3',
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },

  // {
  //   pid: 1,
  //   risk: 5,
  //   lpSymbol: 'EGG-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
  //   },
  //   tokenSymbol: 'EGG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 2,
  //   risk: 3,
  //   lpSymbol: 'USDC-USDT LP',
  //   lpAddresses: {
  //     137: '0x2cF7252e74036d1Da831d11089D326296e64a728'
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 2,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'DINO',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x09833c4fbd1d28971b89a84fed3e8c16e45dea7d', 
  //   },
  //   tokenSymbol: 'DINO',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xad04791c59547ccd826a164ffb9061cf12b93fd4',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'DINO',
    decimal: 18,
    lpAddresses: {
      137: '0x09833c4fbd1d28971b89a84fed3e8c16e45dea7d'
    },
    tokenSymbol: 'DINO',
    tokenAddresses: {
      137: '0xad04791c59547ccd826a164ffb9061cf12b93fd4'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 3,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WMATIC',
    decimal: 18,
    lpAddresses: {
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827'
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },



]

export default farms
