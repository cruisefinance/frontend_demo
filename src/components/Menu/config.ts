import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0xaD04791c59547CCd826A164FFB9061Cf12b93fD4',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/pool',
      },
    ],
  },
  {
    label: "T-Rex's Den",
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: "T-Rex's Nests",
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {

        label: 'QuickSwap',
        href: 'https://info.quickswap.exchange/token/0xaD04791c59547CCd826A164FFB9061Cf12b93fD4',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/DinosaurFinance',
      },
      {
        label: 'Docs',
        href: 'https://dinosaurfinance.gitbook.io/dinosaur-finance/',
      },
      {
        label: 'Medium',
        href: 'https://dinosaurfinance.medium.com/welcome-in-defi-jungle-b7630bc3923e',
      }
    ],
  },
  {
    label: 'Socials',
    icon: "socialsIcon",
    items: [
      {
        label: 'twitter',
        href: 'https://dinosaurfinance.medium.com/welcome-in-defi-jungle-b7630bc3923e',
      },
      {
        label: 'telegram',
        href: 'https://t.me/dinosaurfinance',
      }
    ]
  },
  {
    label: 'Audit (SOON)',
    icon: 'AuditIcon',
    href: 'https://dinosaur-frontend.vercel.app/',
  },

]

export default config
