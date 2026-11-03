import useMeta from '../hooks/useMeta'
import Icon from '../components/Icon'
import LiveChart from '../components/LiveChart'
import FinalCta from '../sections/FinalCta'
import { BreadcrumbJsonLd } from '../components/JsonLd'
import { SITE_URL, FEATURES } from '../data/content'

// The engine opens the page as a two-column spotlight with a live chart;
// the remaining features follow as cards in a three column grid.
const [engine, ...rest] = FEATURES.items

export default function FeaturesPage() {
  useMeta({
    title: 'Greenwood Finlore Features - AI Tools for Smart Trading',
    description:
      'Explore Greenwood Finlore features: AI signals, copy trading, fractional shares, 300+ markets, the learning library and 24/7 human support.',
    keywords:
      'Greenwood Finlore features, AI trading signals, copy trading Australia, crypto trading tools, trading platform Australia',
    canonical: `${SITE_URL}features`,
  })

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Features', slug: 'features' }]} />
      <section className="page-hero">
        <div className="container">
          <h1 data-reveal>Features</h1>
          <p data-reveal>
            Seven tools in one platform. The Greenwood engine, copy trading, fractional shares,
            the learning library and more - all under one secure roof.
          </p>
        </div>
      </section>

      {/* Engine spotlight */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about__copy">
              <span className="kicker kicker--chip" data-reveal>
                The flagship tool
              </span>
              <h2 data-reveal>{engine.title}</h2>
              <p data-reveal>{engine.text}</p>
            </div>

            <div className="about__art" data-reveal>
              <LiveChart
                symbol="BTCUSDT"
                pair="BTC / USDT"
                mode="area"
                interval="4h"
                intervalLabel="4H trend"
                stats="change"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Remaining features as cards */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker" data-reveal>
              {FEATURES.kicker}
            </span>
            <h2 data-reveal>{FEATURES.title}</h2>
            <p className="section-head__lead" data-reveal>
              {FEATURES.text}
            </p>
          </div>

          <div className="card-grid card-grid--3">
            {rest.map((item, i) => (
              <div
                className="card"
                key={item.title}
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 60}ms` }}
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
