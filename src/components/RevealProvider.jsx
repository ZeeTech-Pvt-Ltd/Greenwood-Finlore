'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Replaces the SPA's useReveal hook + ScrollToTop:
 * scrolls to top on every pathname change (including back/forward) and
 * re-runs the IntersectionObserver scan for [data-reveal] elements.
 * Also listens for the 'reveal:rescan' event dispatched after lazy
 * content mounts (Home's below-the-fold sections).
 */
export default function RevealProvider({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })

    let observer = null
    const scan = () => {
      const elements = document.querySelectorAll('[data-reveal]:not(.is-visible)')
      if (!elements.length) return
      observer?.disconnect()
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px' },
      )
      elements.forEach((el) => observer.observe(el))
    }

    scan()
    window.addEventListener('reveal:rescan', scan)
    return () => {
      window.removeEventListener('reveal:rescan', scan)
      observer?.disconnect()
    }
  }, [pathname])

  return children
}
