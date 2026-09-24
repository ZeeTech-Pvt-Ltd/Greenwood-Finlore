import Icon from '../components/Icon'
import RegistrationForm from '../components/RegistrationForm'
import { HERO } from '../data/content'

const TRUST_ICONS = { 0: 'lock', 1: 'bolt', 2: 'headset' }

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            {/* Above-the-fold elements render instantly (no reveal fade):
                the animation would delay FCP/LCP on mobile. */}
            <h1>
              {HERO.title[0]}{' '}
              <br />
              {HERO.title[1]}
            </h1>

            <p className="hero__lead">{HERO.lead}</p>

            <div className="hero__cta">
              <a className="btn btn--evergreen btn--lg" href="#join">
                Start Trading Today
              </a>
              <a className="btn btn--outline btn--lg" href="#how">
                See How It Works
              </a>
            </div>

            <div className="hero__trust">
              {HERO.trust.map((item, i) => (
                <span key={item}>
                  <Icon name={TRUST_ICONS[i]} size={16} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <RegistrationForm idPrefix="hero" title={HERO.formTitle} subtitle={HERO.formSubtitle} />
        </div>
      </div>
    </section>
  )
}
