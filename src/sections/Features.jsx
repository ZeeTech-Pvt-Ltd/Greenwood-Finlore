import Icon from '../components/Icon'
import { FEATURES } from '../data/content'

/**
 * The feature bento: two wide tiles (engine, mobile) bookending five
 * standard tiles, in a three column grid.
 */
export default function Features() {
  return (
    <section className="section section--alt features-section">
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

        <div className="bento">
          {FEATURES.items.map((item, i) => (
            <div
              className={`bento__tile${item.wide ? ' bento__tile--wide' : ''}`}
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
  )
}
