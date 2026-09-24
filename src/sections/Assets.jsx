import Icon from '../components/Icon'
import { ASSETS } from '../data/content'

export default function Assets() {
  return (
    <section className="section assets-section">
      <div className="container">
        <div className="section-head">
          <span className="kicker" data-reveal>
            {ASSETS.kicker}
          </span>
          <h2 data-reveal>{ASSETS.title}</h2>
          <p className="section-head__lead" data-reveal>
            {ASSETS.text}
          </p>
        </div>

        <div className="assets-layout">
          <div className="asset-rows">
            {ASSETS.list.map((asset, i) => (
              <div
                className="asset-row"
                key={asset.name}
                data-reveal
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <img src={asset.icon} alt={`${asset.name} logo`} />
                <span className="asset-row__name">{asset.name}</span>
                <span className="asset-row__tag">{asset.tag}</span>
              </div>
            ))}
          </div>

          <div className="asset-bullets">
            {ASSETS.bullets.map((item, i) => (
              <div
                className="asset-bullet"
                key={item.title}
                data-reveal
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="card__icon card__icon--sm">
                  <Icon name={item.icon} size={20} strokeWidth={1.9} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="assets-note" data-reveal>
          {ASSETS.note}
        </p>
      </div>
    </section>
  )
}
