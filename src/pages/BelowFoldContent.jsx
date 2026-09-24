// Everything below the hero on the homepage, in its own chunk. Loaded
// after the browser is idle so the entry bundle stays small and the
// first paint (FCP/LCP) isn't waiting on this code.

import { useEffect, useState } from 'react'
import About from '../sections/About'
import HowItWorks from '../sections/HowItWorks'
import ForestBand from '../sections/ForestBand'
import Assets from '../sections/Assets'
import Features from '../sections/Features'
import Security from '../sections/Security'
import Testimonials from '../sections/Testimonials'
import FaqSection from '../sections/FaqSection'
import FinalCta from '../sections/FinalCta'

// Mounts once the browser is idle, so the initial render stays light
// and the main thread is free for first paint + LCP.
export default function BelowFoldContent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const schedule = () => setShow(true)
    const id = window.requestIdleCallback
      ? window.requestIdleCallback(schedule, { timeout: 1500 })
      : window.setTimeout(schedule, 600)
    return () => (window.requestIdleCallback ? window.cancelIdleCallback(id) : window.clearTimeout(id))
  }, [])

  useEffect(() => {
    if (show) window.dispatchEvent(new Event('reveal:rescan'))
  }, [show])

  if (!show) return null

  return (
    <>
      <About />
      <HowItWorks />
      <ForestBand />
      <Assets />
      <Features />
      <Security />
      <Testimonials />
      <FaqSection />
      <FinalCta />
    </>
  )
}
