import { FaqJsonLd } from '../src/components/JsonLd'
import Hero from '../src/sections/Hero'
import StatsBand from '../src/sections/StatsBand'
import MarketTicker from '../src/components/MarketTicker'
import HomeBelowFold from '../src/components/HomeBelowFold'
import { SITE_URL, FAQS } from '../src/data/content'
import { ogBase } from '../src/data/meta'

export const metadata = {
  title: 'Greenwood Finlore - AI Powered Trading in Australia',
  description:
    'Greenwood Finlore is an AI powered trading platform for Bitcoin, Ethereum and 300+ markets. Trade smarter in Australia. Join free today.',
  keywords:
    'Greenwood Finlore, AI trading platform, crypto trading Australia, buy Bitcoin Australia, Ethereum trading, automated trading Australia',
  alternates: { canonical: SITE_URL },
  openGraph: { ...ogBase,
    title: 'Greenwood Finlore - AI Powered Trading in Australia',
    description:
      'Greenwood Finlore is an AI powered trading platform for Bitcoin, Ethereum and 300+ markets. Trade smarter in Australia. Join free today.',
    url: SITE_URL,
  },
}

export default function Home() {
  return (
    <>
      <FaqJsonLd faqs={FAQS} />
      <Hero />
      <StatsBand />
      <MarketTicker />
      <HomeBelowFold />
    </>
  )
}
