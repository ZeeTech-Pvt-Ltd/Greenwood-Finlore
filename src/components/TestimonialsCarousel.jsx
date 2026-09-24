import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import { TESTIMONIALS } from '../data/content'

const AUTOPLAY_MS = 5000

/**
 * Testimonial slider: a scroll-snap track with prev/next controls and
 * autoplay. Three cards per view on desktop, two on tablet, one on
 * mobile. Autoplay loops at the end and pauses while the pointer is
 * over the slider, while it is offscreen, or for reduced motion users.
 */
export default function TestimonialsCarousel() {
  const trackRef = useRef(null)
  const hoverRef = useRef(false)
  const offscreenRef = useRef(false)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const update = () => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  // Recalculate after mount (reveals + below-fold idle mount can change
  // the width after first paint) and on window resize.
  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const scroll = (dir) => {
    const el = trackRef.current
    const card = el?.querySelector('.testimonial')
    if (!el || !card) return
    const gap = parseFloat(getComputedStyle(el).columnGap || '24')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({
      left: dir * (card.getBoundingClientRect().width + gap),
      behavior: reduced ? 'auto' : 'smooth',
    })
  }

  // Autoplay: advance every 5s, loop back at the end.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = trackRef.current
    if (!el) return

    const tick = () => {
      if (hoverRef.current || offscreenRef.current) return
      const track = trackRef.current
      if (!track) return
      if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 4) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scroll(1)
      }
    }
    const id = window.setInterval(tick, AUTOPLAY_MS)

    let observer = null
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          offscreenRef.current = entries.some((entry) => !entry.isIntersecting)
        },
        { threshold: 0.2 },
      )
      observer.observe(el)
    }

    return () => {
      window.clearInterval(id)
      observer?.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className="testimonials-carousel"
      onMouseEnter={() => {
        hoverRef.current = true
      }}
      onMouseLeave={() => {
        hoverRef.current = false
      }}
      onTouchStart={() => {
        hoverRef.current = true
      }}
      onTouchEnd={() => {
        hoverRef.current = false
      }}
    >
      <button
        className="testimonials-carousel__btn testimonials-carousel__btn--prev"
        type="button"
        aria-label="Previous testimonials"
        disabled={!canPrev}
        onClick={() => scroll(-1)}
      >
        <Icon name="arrow-left" size={18} strokeWidth={2.2} />
      </button>

      <div className="testimonials-carousel__track" ref={trackRef} onScroll={update}>
        {TESTIMONIALS.items.map((item) => (
          <figure className="testimonial" key={item.name}>
            <blockquote>{item.text}</blockquote>
            <figcaption>
              <span className="testimonial__avatar" aria-hidden="true">
                {item.name.charAt(0)}
              </span>
              <span className="testimonial__who">
                <strong>{item.name}</strong>
                <small>{item.place}</small>
              </span>
              <span className="testimonial__stars" aria-label={`${item.stars} out of 5 stars`}>
                {Array.from({ length: item.stars }).map((_, j) => (
                  <Icon key={j} name="star" size={13} filled />
                ))}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <button
        className="testimonials-carousel__btn testimonials-carousel__btn--next"
        type="button"
        aria-label="Next testimonials"
        disabled={!canNext}
        onClick={() => scroll(1)}
      >
        <Icon name="arrow-right" size={18} strokeWidth={2.2} />
      </button>
    </div>
  )
}
