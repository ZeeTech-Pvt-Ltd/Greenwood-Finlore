import Icon from '../../src/components/Icon'
import FinalCta from '../../src/sections/FinalCta'
import { BreadcrumbJsonLd } from '../../src/components/JsonLd'
import { SITE_URL, STEPS } from '../../src/data/content'
import { ogBase } from '../../src/data/meta'

export const metadata = {
  title: 'How It Works - Trade With Greenwood Finlore in 3 Steps',
  description:
    'See how Greenwood Finlore works: the AI engine scans exchanges, secures price gaps and settles the difference in three simple steps.',
  keywords:
    'how Greenwood Finlore works, how to trade crypto Australia, AI trading platform explained, Greenwood Finlore steps',
  alternates: { canonical: `${SITE_URL}how-it-works` },
  openGraph: { ...ogBase,
    title: 'How It Works - Trade With Greenwood Finlore in 3 Steps',
    description:
      'See how Greenwood Finlore works: the AI engine scans exchanges, secures price gaps and settles the difference in three simple steps.',
    url: `${SITE_URL}how-it-works`,
  },
}

export default function HowItWorksPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'How It Works', slug: 'how-it-works' }]} />
      <section className="page-hero">
        <div className="container">
          <h1 data-reveal>How It Works</h1>
          <p data-reveal>
            From sign up to your first signal in three steps. The Greenwood engine does the
            scanning, the chasing and the settling - you watch the ledger grow.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="section-head">
            <span className="kicker" data-reveal>
              {STEPS.kicker}
            </span>
            <h2 data-reveal>{STEPS.title}</h2>
          </div>

          <div className="timeline">
            {STEPS.steps.map((step, i) => (
              <div
                className="timeline__item"
                key={step.title}
                data-reveal
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="timeline__num">0{i + 1}</span>
                <div>
                  <h3>
                    <Icon name={step.icon} size={22} strokeWidth={1.9} />
                    {step.title}
                  </h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker" data-reveal>
              Built in
            </span>
            <h2 data-reveal>Everything Working Behind The Scenes</h2>
          </div>

          <div className="card-grid card-grid--4">
            {STEPS.features.map((item, i) => (
              <div
                className="card"
                key={item.title}
                data-reveal
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="card__icon">
                  <Icon name={item.icon} size={24} strokeWidth={1.9} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
