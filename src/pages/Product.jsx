import useMeta from '../hooks/useMeta'
import Icon from '../components/Icon'
import FinalCta from '../sections/FinalCta'
import LiveChart from '../components/LiveChart'
import { BreadcrumbJsonLd, SoftwareApplicationJsonLd } from '../components/JsonLd'
import { SITE_URL, PRODUCT_PAGE } from '../data/content'

export default function Product() {
  useMeta({
    title: 'Greenwood Finlore Product - Charts, Signals and One Portfolio',
    description:
      'Explore the Greenwood Finlore product: readable charts, AI signals, copy trading and a learning library in one secure platform. Start free today.',
    keywords: 'Greenwood Finlore product, trading charts Australia, AI trading signals, copy trading Australia',
    canonical: `${SITE_URL}product`,
  })

  return (
    <>
      <SoftwareApplicationJsonLd />
      <BreadcrumbJsonLd items={[{ name: 'Product', slug: 'product' }]} />
      <section className="page-hero">
        <div className="container">
          <h1 data-reveal>{PRODUCT_PAGE.hero.title}</h1>
          <p data-reveal>{PRODUCT_PAGE.hero.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker" data-reveal>
              {PRODUCT_PAGE.intro.kicker}
            </span>
            <h2 data-reveal>{PRODUCT_PAGE.intro.title}</h2>
          </div>

          <div className="card-grid card-grid--3">
            {PRODUCT_PAGE.features.map((item, i) => (
              <div
                className="card"
                key={item.title}
                data-reveal
                style={{ transitionDelay: `${i * 50}ms` }}
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

      <section className="section section--alt">
        <div className="container">
          <div className="experience-grid">
            <div className="experience__chart" data-reveal>
              <LiveChart />
            </div>

            <div className="about__copy">
              <span className="kicker" data-reveal>
                {PRODUCT_PAGE.experience.kicker}
              </span>
              <h2 data-reveal>{PRODUCT_PAGE.experience.title}</h2>
              <p data-reveal>{PRODUCT_PAGE.experience.text}</p>
              <ul className="about__points">
                {PRODUCT_PAGE.experience.points.map((point) => (
                  <li key={point} data-reveal>
                    <span className="point-mark">
                      <Icon name="check" size={14} strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
