import { lazy, Suspense, useEffect, useState } from 'react'
import useMeta from '../hooks/useMeta'
import { FaqJsonLd } from '../components/JsonLd'
import { SITE_URL, FAQS } from '../data/content'

import Hero from '../sections/Hero'
import StatsBand from '../sections/StatsBand'
import MarketTicker from '../components/MarketTicker'

// Below-the-fold sections live in their own chunk, fetched only after
// the browser is idle - keeps the entry bundle small for first paint.
const BelowFoldContent = lazy(() => import('./BelowFoldContent'))

function BelowTheFold() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const schedule = () => setShow(true)
    const id = window.requestIdleCallback
      ? window.requestIdleCallback(schedule, { timeout: 1500 })
      : window.setTimeout(schedule, 600)
    return () => (window.requestIdleCallback ? window.cancelIdleCallback(id) : window.clearTimeout(id))
  }, [])

  // No fallback UI: the hero + stats render instantly either way.
  return show ? (
    <Suspense fallback={null}>
      <BelowFoldContent />
    </Suspense>
  ) : null
}

export default function Home() {
  useMeta({
    title: 'Greenwood Finlore - AI Powered Trading Platform | Australia',
    description:
      'Greenwood Finlore is an AI powered trading platform for Bitcoin, Ethereum and 300+ markets. Trade smarter in Australia. Join free today.',
    keywords:
      'Greenwood Finlore, AI trading platform, crypto trading Australia, buy Bitcoin Australia, Ethereum trading, automated trading Australia',
    canonical: SITE_URL,
  })

  return (
    <>
      <FaqJsonLd faqs={FAQS} />
      <Hero />
      <StatsBand />
      <MarketTicker />
      <BelowTheFold />
    </>
  )
}
