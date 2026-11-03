import Icon from '../../src/components/Icon'
import FinalCta from '../../src/sections/FinalCta'
import { BreadcrumbJsonLd } from '../../src/components/JsonLd'
import { SITE_URL, TESTIMONIALS, RATING } from '../../src/data/content'
import { ogBase } from '../../src/data/meta'

export const metadata = {
  title: 'Greenwood Finlore Reviews - Australian Investor Ratings',
  description:
    'Read Greenwood Finlore reviews from Australian investors. Rated 4.8 out of 5 based on 214 reviews for AI signals, security and 24/7 support.',
  keywords:
    'Greenwood Finlore reviews, crypto trading platform reviews Australia, Greenwood Finlore testimonials, AI trading platform ratings',
  alternates: { canonical: `${SITE_URL}reviews` },
  openGraph: { ...ogBase,
    title: 'Greenwood Finlore Reviews - Australian Investor Ratings',
    description:
      'Read Greenwood Finlore reviews from Australian investors. Rated 4.8 out of 5 based on 214 reviews for AI signals, security and 24/7 support.',
    url: `${SITE_URL}reviews`,
  },
}

export default function Reviews() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Reviews', slug: 'reviews' }]} />
      <section className="page-hero">
        <div className="container">
          <h1 data-reveal>Reviews</h1>
          <p data-reveal>
            Unfiltered notes from Australian investors trading with Greenwood Finlore. Rated 4.8
            out of 5 by clients across the country.
          </p>
        </div>
      </section>

      <section className="section">
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

          <div className="card-grid card-grid--3">
            {TESTIMONIALS.items.map((item, i) => (
              <figure
                className="testimonial"
                key={item.name}
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              >
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
        </div>
      </section>

      <FinalCta />
    </>
  )
}
