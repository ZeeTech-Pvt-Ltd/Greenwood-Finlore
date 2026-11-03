'use client'
import { lazy, Suspense, useEffect, useState } from 'react'

// Below-the-fold sections live in their own chunk, fetched only after
// the browser is idle - keeps the entry bundle small for first paint.
const BelowFoldContent = lazy(() => import('./BelowFoldContent'))

export default function HomeBelowFold() {
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
