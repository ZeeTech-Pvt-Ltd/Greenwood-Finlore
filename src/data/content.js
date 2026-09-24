/**
 * All site copy lives here so it can be edited in one place.
 *
 * NOTE: testimonials, rating counts and any performance claims are
 * placeholder marketing copy (mirroring the reference site's structure) -
 * confirm numbers and wording before launch. Legal pages are template text.
 */

export const SITE_NAME = 'Greenwood Finlore'
export const SITE_URL = 'https://greenwoodfinlore-au.com/'
export const SUPPORT_EMAIL = 'support@greenwoodfinlore-au.com'

// Registration forms POST JSON to this CORS-open endpoint.
export const FORM_ENDPOINT = 'https://apexai-experts.com/homeMailAction.php'
export const OFFER_NAME = 'GreenwoodFinlore-Site'

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Product', to: '/product' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'FAQs', to: '/faq' },
]

export const HERO = {
  title: ['Trade Smarter In Australia With', 'Greenwood Finlore'],
  lead: 'Greenwood Finlore is an AI powered trading platform for Bitcoin, Ethereum and 300+ markets. The engine scans exchanges around the clock, spots price gaps before most traders wake up and helps your capital grow season after season.',
  trust: ['256-bit SSL encryption', 'AI driven market scanning', '24/7 Australian support'],
  formTitle: 'Open Your Free Account',
  formSubtitle:
    'Registration takes under two minutes. No card required, no obligation to deposit.',
}

export const ABOUT_PAGE = {
  story: {
    kicker: 'Our story',
    title: 'A Platform Grown From Australian Soil',
    paragraphs: [
      'Greenwood Finlore began in Melbourne with two traders who were tired of the same problem: the tools built overseas never matched Australian hours, Australian regulation or the way Australians actually invest. So they planted their own.',
      'Today Greenwood Finlore runs an AI driven engine that watches global markets around the clock, backed by real analysts in three timezones and a support desk that never closes. Your portfolio keeps growing while you get on with your day, and every morning opens with a clear report of what moved and why.',
    ],
    facts: ['Founded 2020', 'Melbourne HQ', '300+ instruments', 'Analysts in 3 timezones'],
  },
  values: {
    kicker: 'What we stand for',
    title: 'The Greenwood Rules',
    items: [
      {
        icon: 'shield',
        title: 'Safety First',
        text: '256-bit encryption, two-factor checks and 98% cold storage on every account. Protection is not a feature, it is the soil everything grows from.',
      },
      {
        icon: 'scale',
        title: 'Plain Language',
        text: 'Fees in a table, risks in the open, no asterisks hiding surprises. If we cannot explain it simply, we do not ship it.',
      },
      {
        icon: 'sparkle',
        title: 'Patience Over Pressure',
        text: 'No countdown timers, no flashing banners, no chasing you with promises. Steady growth, one season at a time.',
      },
      {
        icon: 'headset',
        title: 'Humans On The Line',
        text: 'A real person answers 24/7. Every client gets a dedicated account manager from the first day.',
      },
    ],
  },
  difference: {
    kicker: 'The Greenwood difference',
    title: 'Why Investors Stay',
    items: [
      {
        title: 'The Engine That Never Pauses',
        text: 'Our AI scans global markets around the clock and surfaces signals with a 91% accuracy rate. The gaps it finds are often gone by breakfast time.',
      },
      {
        title: 'Custody That Cannot Be Hacked',
        text: 'Client funds sit in segregated accounts, and 98% of digital assets live in offline cold wallets. Nobody can reach them but you.',
      },
      {
        title: 'Built For Australian Hours',
        text: 'AUD onboarding, local funding rails and analysts who know when Sydney opens and when Perth closes.',
      },
    ],
  },
}

export const PRODUCT_PAGE = {
  hero: {
    title: 'One Platform, Every Market, Every Season',
    lead: 'Charts, signals, portfolio tracking and a learning library in a single calm workspace, built so anyone in Australia can trade with confidence.',
  },
  intro: {
    kicker: 'Built for you',
    title: 'Everything You Need, Nothing In The Way',
  },
  features: [
    {
      icon: 'chart',
      title: 'Readable Charts',
      text: 'Clean price charts with 80+ indicators, designed to be read on a phone at a glance.',
    },
    {
      icon: 'pie',
      title: 'One Portfolio View',
      text: 'Crypto, equities, forex and commodities in a single ledger, updated live.',
    },
    {
      icon: 'bolt',
      title: 'Signals That Arrive',
      text: 'Entry and exit signals pushed to your phone the moment the engine spots them.',
    },
    {
      icon: 'device',
      title: 'Every Screen, In Sync',
      text: 'Start on desktop, check on mobile, finish on tablet. Nothing is lost between devices.',
    },
    {
      icon: 'book',
      title: 'The Learning Grove',
      text: 'Short courses and market guides that take you from first candle to full strategy.',
    },
    {
      icon: 'lock',
      title: 'Quiet Security',
      text: 'Every session runs on 256-bit SSL, and 98% of assets stay in offline cold storage.',
    },
  ],
  experience: {
    kicker: 'The trading experience',
    title: 'What A Session Feels Like',
    text: 'Log in, read the morning report, set your plan, get on with your day. The engine does the watching.',
    points: [
      'Live portfolio tracking with every position updating in real time',
      'Pro-grade charts with 80+ indicators to time your entries',
      'Instant orders on Bitcoin, Ethereum and 300+ other markets',
      'Custody with 98% cold storage and two-factor protection',
    ],
  },
}

export const STATS = [
  { value: '91%', label: 'AI signal accuracy' },
  { value: '37,000+', label: 'Australian members' },
  { value: '4.8/5', label: 'rating from 214 investors', hl: true },
  { value: '24/7', label: 'live human support' },
]

export const ABOUT = {
  kicker: 'Your gateway',
  title: 'One Platform, Rooted In Australian Markets',
  text: 'Greenwood Finlore connects Australian investors to the world of cryptocurrencies through one secure account. The AI engine reads market data from dozens of sources, finds opportunities and hands you a clear, simple view of what to do next. No jargon, no noise, just a platform built to help your portfolio grow.',
  points: [
    'AI assisted signals, day and night',
    'Beginner friendly. No trading experience required',
    'Bank grade security with 256-bit encryption',
    'Full control. Deposit, trade and withdraw anytime',
  ],
}

export const ASSETS = {
  kicker: 'Markets under the canopy',
  title: 'Every Market You Want, In One Account',
  text: 'Bitcoin, Ethereum and the altcoins investors talk about, plus forex, equities and commodities. One login covers the whole board.',
  list: [
    { icon: '/images/coins/btc.svg', name: 'Bitcoin', tag: 'BTC · the original digital asset' },
    { icon: '/images/coins/eth.svg', name: 'Ethereum', tag: 'ETH · smart contracts and DeFi' },
    { icon: '/images/coins/sol.svg', name: 'Solana', tag: 'SOL · the high speed chain' },
    { icon: '/images/coins/xrp.svg', name: 'Ripple', tag: 'XRP · cross-border payments' },
    { icon: '/images/coins/ada.svg', name: 'Cardano', tag: 'ADA · the research driven chain' },
    { icon: '/images/coins/doge.svg', name: 'Dogecoin', tag: 'DOGE · the community favourite' },
  ],
  bullets: [
    {
      icon: 'chart',
      title: 'Real Market Functionality',
      text: 'Order types, charts and tracking tools used by professionals, simplified for everyone.',
    },
    {
      icon: 'device',
      title: 'Interfaces Built For People',
      text: 'Every screen is designed to be read in seconds, not studied for hours.',
    },
    {
      icon: 'lock',
      title: 'Transactions You Can Trust',
      text: 'Deposits, trades and withdrawals protected at every step.',
    },
  ],
  note: '...plus 300+ equities, forex pairs, commodities, precious metals and CFDs.',
}

export const STEPS = {
  kicker: 'How Greenwood Finlore works',
  title: 'Three Steps From Sign Up To Your First Signal',
  steps: [
    {
      icon: 'rings',
      title: 'Scan The Exchanges',
      text: 'The engine watches price gaps across connected exchanges around the clock and spots when an asset trades cheaper in one place than another.',
    },
    {
      icon: 'coins',
      title: 'Buy At The Lower Price',
      text: 'The moment a gap opens, the engine secures the asset on the cheaper market while the window is still open.',
    },
    {
      icon: 'chart',
      title: 'Settle The Difference',
      text: 'The position closes on the higher priced market and the difference lands in your account. You watch the ledger, the engine does the chasing.',
    },
  ],
  features: [
    {
      icon: 'shield',
      title: 'Bank Grade Security',
      text: 'Encrypted connections, two-factor checks and offline cold storage on every account.',
    },
    {
      icon: 'sparkle',
      title: 'A Strategy For You',
      text: 'Tune the engine to your goals. Follow signals, copy experienced investors or build your own plan.',
    },
    {
      icon: 'bot',
      title: 'AI That Learns',
      text: 'The models study market behaviour around the clock and adapt their scans to what works.',
    },
    {
      icon: 'device',
      title: 'An Interface Anyone Can Read',
      text: 'Clean charts, plain language and a dashboard that never needs a manual.',
    },
  ],
}

export const JOIN = {
  kicker: 'Join the canopy',
  title: 'Step Into The Greenwood',
  text: 'Free registration, a dedicated account manager and the full platform to explore before you deposit a single dollar. Australian investors are planting roots here every day.',
  points: [
    'Free registration. No card required',
    'AI signals with a 91% accuracy rate',
    'Withdraw your funds whenever you want',
  ],
}

export const CALCULATOR = {
  kicker: 'Project your growth',
  title: 'See What Twelve Months Could Do',
  text: 'Slide to your starting amount. The projection compounds monthly at the illustrative 7.2% rate the platform has averaged for clients.',
  cardTitle: 'Growth Calculator',
  cardSubtitle: 'Illustrative 12 month projection',
  depositLabel: 'Starting Deposit',
  balanceLabel: 'Potential Balance After 12 Months',
  monthlyLabel: 'Illustrative Monthly Return',
  disclaimer:
    'Illustrative projection at a 7.2% monthly rate over 12 months. Trading involves significant risk and projections are not a guarantee of profit.',
}

export const FEATURES = {
  kicker: 'What is in the grove',
  title: 'The Tools Growing With Your Portfolio',
  text: 'Seven reasons Australian investors choose Greenwood Finlore.',
  items: [
    {
      icon: 'bot',
      title: 'The Greenwood Engine',
      text: 'AI scans global markets around the clock and surfaces signals with a 91% accuracy rate. The engine never sleeps and never rushes you.',
      wide: true,
    },
    {
      icon: 'copy',
      title: 'Copy Trading',
      text: 'Mirror experienced, profitable investors with a single click.',
    },
    {
      icon: 'pie',
      title: 'Fractional Shares',
      text: 'Own a slice of high value assets. Start small and grow.',
    },
    {
      icon: 'book',
      title: 'The Learning Grove',
      text: 'Short courses and guides that take you from first steps to full strategy.',
    },
    {
      icon: 'headset',
      title: '24/7 Human Support',
      text: 'Real people answer around the clock, every day of the year.',
    },
    {
      icon: 'globe',
      title: '300+ Global Markets',
      text: 'Crypto, equities, forex and commodities in one ledger.',
    },
    {
      icon: 'device',
      title: 'Trade From Anywhere',
      text: 'The full platform travels with you. Desktop at home, mobile on the train, nothing lost in between.',
      wide: true,
    },
  ],
}

export const RATING = { score: '4.8', stars: 5, meta: 'based on 214 reviews' }

export const TESTIMONIALS = {
  kicker: 'Field notes',
  title: 'What Australian Investors Say',
  text: 'A few notes from traders who put down roots with Greenwood Finlore.',
  items: [
    {
      name: 'Ellie P.',
      place: 'Sunshine Coast, Australia',
      text: 'I signed up with a small deposit and zero experience. The learning library got me started and the signals did the rest. A year later my portfolio is bigger than I planned and I still sleep well.',
      stars: 5,
    },
    {
      name: 'Nathan C.',
      place: 'Albury, Australia',
      text: 'The engine spotted a price gap on a weekend I would never have noticed. That one trade paid for the trip my family had been saving for.',
      stars: 5,
    },
    {
      name: 'Priya S.',
      place: 'Wagga Wagga, Australia',
      text: 'Copy trading was the turning point for me. I mirror two experienced investors, check the ledger over coffee and get on with my day.',
      stars: 5,
    },
    {
      name: 'Blake R.',
      place: 'Rockhampton, Australia',
      text: 'I asked the support team about withdrawing at 9pm on a Sunday. A real person answered in minutes and the money arrived two days later.',
      stars: 4,
    },
    {
      name: 'Megan T.',
      place: 'Bundaberg, Australia',
      text: 'Security was my first question. Cold storage, two-factor on everything and segregated accounts. That was all I needed to hear.',
      stars: 5,
    },
    {
      name: 'Jordan K.',
      place: 'Coffs Harbour, Australia',
      text: 'Started with $250 and the free courses. Eight months in I understand the market better than I ever did reading forums.',
      stars: 5,
    },
  ],
}

export const SECURITY = {
  kicker: 'Custody',
  title: 'Your Assets Stay Safe Under The Canopy',
  text: 'Greenwood Finlore protects your money and your data with the same standards global banks use, every minute of every day.',
  bigStat: '98%',
  bigStatLabel: 'of digital assets held in offline cold wallets with no internet connection',
  items: [
    {
      icon: 'lock',
      title: '256-Bit SSL Encryption',
      text: 'The same standard global banks use on every connection.',
    },
    {
      icon: 'shield',
      title: 'Two-Factor Authentication',
      text: 'An extra check on every login and every withdrawal.',
    },
    {
      icon: 'scale',
      title: 'KYC And AML Compliant',
      text: 'Every account is verified to keep the platform clean.',
    },
    {
      icon: 'wallet',
      title: 'Segregated Accounts',
      text: 'Client funds never mix with company operating funds.',
    },
  ],
}

export const FINAL_CTA = {
  title: 'Put Down Roots With Greenwood Finlore',
  text: 'Create your free account today and let the engine get to work. Your portfolio keeps growing season after season.',
  trust: '256-bit SSL encryption · Free registration · Withdraw anytime',
}

export const FAQS = [
  {
    q: 'What Exactly Is Greenwood Finlore?',
    a: 'Greenwood Finlore is an AI driven trading platform for Australian investors. It connects you to Bitcoin, Ethereum and 300+ global markets through one secure account, with signals, copy trading and learning tools included.',
  },
  {
    q: 'How Does The AI Find Opportunities?',
    a: 'The engine scans price data across connected exchanges around the clock. When it spots an asset trading cheaper on one exchange than another, it flags the gap so you can decide whether to act. Nothing trades without your approval.',
  },
  {
    q: 'How Much Do I Need To Start?',
    a: 'Nothing to open an account. Registration is free and the full platform is yours to explore. When you are ready to trade, most investors start with a few hundred dollars.',
  },
  {
    q: 'Is My Money Safe?',
    a: '256-bit SSL encryption protects every connection, two-factor authentication guards every withdrawal and 98% of digital assets stay in offline cold storage. The platform is fully KYC and AML compliant.',
  },
  {
    q: 'How Quickly Can I Withdraw?',
    a: 'Request a withdrawal anytime from your dashboard. Most withdrawals are processed within two business days to your registered payment method.',
  },
  {
    q: 'Do I Need Trading Experience?',
    a: 'No. The learning library takes you from first steps to full strategy, signals point the way and copy trading lets you follow experienced investors while you learn.',
  },
]

export const FOOTER = {
  blurb:
    'Greenwood Finlore is an AI driven multi-asset trading platform offering cryptocurrencies, equities, forex and more, with 256-bit encryption and 98% cold storage.',
  navTitle: 'Company',
  legalTitle: 'Legal',
  contactTitle: 'Contact',
  contact: [
    { icon: 'mail', text: SUPPORT_EMAIL },
    { icon: 'clock', text: 'Support 24/7' },
    { icon: 'globe', text: 'Now serving Australia' },
  ],
  risk: [
    'High Risk Warning: Trading cryptocurrencies, forex, CFDs and other leveraged instruments involves significant risk of loss and is not suitable for every investor. The value of digital assets can be highly volatile, and you may lose more than your initial investment. Past performance and AI projections are not indicative of future results. You should carefully consider your objectives, level of experience and risk appetite before trading, and never trade with funds you cannot afford to lose. Greenwood Finlore does not provide financial advice and is not authorised to do so. Nothing on this website constitutes a solicitation, recommendation or offer to buy or sell any financial instrument. Consult an independent financial advisor if you have any doubts. Accuracy figures, earnings projections and testimonials are illustrative marketing material, not guarantees.',
    'Trading services described on this website may not be available in all jurisdictions. It is your responsibility to ensure that your use of the platform complies with the laws and regulations applicable in your country of residence.',
  ],
  legalLinks: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Use', to: '/terms' },
    { label: 'Risk Disclosure', to: '/risk-disclosure' },
  ],
  copyright: 'Copyright 2026 © Greenwood Finlore. All rights reserved.',
}
