import Icon from '../components/Icon'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import { RATING, TESTIMONIALS } from '../data/content'

export default function Testimonials() {
  return (
    <section className="section section--alt testimonials-section">
      <div className="container">
        <div className="section-head">
          <span className="kicker" data-reveal>
            {TESTIMONIALS.kicker}
          </span>
          <h2 data-reveal>{TESTIMONIALS.title}</h2>
          <p className="section-head__lead" data-reveal>
            {TESTIMONIALS.text}
          </p>
        </div>

        <div className="rating-seal" data-reveal>
          <span className="rating-seal__score">{RATING.score}</span>
          <span className="rating-seal__stars" aria-label={`${RATING.score} out of 5 stars`}>
            {Array.from({ length: RATING.stars }).map((_, i) => (
              <Icon key={i} name="star" size={16} filled />
            ))}
          </span>
          <span className="rating-seal__meta">{RATING.meta}</span>
        </div>

        <div data-reveal>
          <TestimonialsCarousel />
        </div>
      </div>
    </section>
  )
}
