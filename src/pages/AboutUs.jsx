import useMeta from '../hooks/useMeta'
import Icon from '../components/Icon'
import FinalCta from '../sections/FinalCta'
import LiveChart from '../components/LiveChart'
import { BreadcrumbJsonLd } from '../components/JsonLd'
import { SITE_URL, ABOUT_PAGE } from '../data/content'

export default function AboutUs() {
  useMeta({
    title: 'About Greenwood Finlore - Our Story, Mission and Values',
    description:
      'Learn about Greenwood Finlore: an AI powered trading platform grown in Melbourne with bank grade security. Join Australian investors today.',
    keywords: 'about Greenwood Finlore, crypto trading platform, AI trading company Australia, Greenwood Finlore story',
    canonical: `${SITE_URL}about-us`,
  })

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'About Us', slug: 'about-us' }]} />
      <section className="page-hero">
        <div className="container">
          <h1 data-reveal>About Greenwood Finlore</h1>
          <p data-reveal>
            We built Greenwood Finlore to make world-class investing simple, secure and always
            growing. Powered by an AI engine, protected by bank-grade security.
          </p>
        </div>
      </section>

      {/* Our story */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about__copy">
              <span className="kicker kicker--chip" data-reveal>
                {ABOUT_PAGE.story.kicker}
              </span>
              <h2 data-reveal>{ABOUT_PAGE.story.title}</h2>
              {ABOUT_PAGE.story.paragraphs.map((paragraph) => (
                <p key={paragraph} data-reveal>
                  {paragraph}
                </p>
              ))}
              <div className="facts-row" data-reveal>
                {ABOUT_PAGE.story.facts.map((fact) => (
                  <span className="fact-chip" key={fact}>
                    {fact}
                  </span>
                ))}
              </div>
            </div>

            <div className="about__art" data-reveal>
              <LiveChart
                symbol="ETHUSDT"
                pair="ETH / USDT"
                mode="area"
                interval="4h"
                intervalLabel="4H trend"
                stats="change"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker" data-reveal>
              {ABOUT_PAGE.values.kicker}
            </span>
            <h2 data-reveal>{ABOUT_PAGE.values.title}</h2>
          </div>

          <div className="card-grid card-grid--4">
            {ABOUT_PAGE.values.items.map((item, i) => (
              <div className="card" key={item.title} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
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

      {/* What sets us apart */}
      <section className="section section--evergreen">
        <div className="container">
          <div className="section-head">
            <span className="kicker kicker--gold" data-reveal>
              {ABOUT_PAGE.difference.kicker}
            </span>
            <h2 data-reveal>{ABOUT_PAGE.difference.title}</h2>
          </div>

          <div className="steps-row steps-row--dark">
            {ABOUT_PAGE.difference.items.map((item, i) => (
              <div
                className="step step--dark"
                key={item.title}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="step__num step__num--gold">0{i + 1}</span>
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
