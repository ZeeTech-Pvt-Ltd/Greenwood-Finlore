import Icon from '../components/Icon'
import { SECURITY } from '../data/content'

export default function Security() {
  return (
    <section className="section security-section">
      <div className="container">
        <div className="section-head">
          <span className="kicker" data-reveal>
            {SECURITY.kicker}
          </span>
          <h2 data-reveal>{SECURITY.title}</h2>
          <p className="section-head__lead" data-reveal>
            {SECURITY.text}
          </p>
        </div>

        <div className="card-grid card-grid--4">
          {SECURITY.items.map((item, i) => (
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

        <div className="security__band" data-reveal>
          <span className="security__big-stat">{SECURITY.bigStat}</span>
          <span className="security__big-label">{SECURITY.bigStatLabel}</span>
        </div>
      </div>
    </section>
  )
}
