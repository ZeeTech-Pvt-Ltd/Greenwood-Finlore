import Icon from '../components/Icon'
import { STEPS } from '../data/content'

export default function HowItWorks() {
  return (
    <section className="section section--alt how-section" id="how">
      <div className="container">
        <div className="section-head">
          <span className="kicker" data-reveal>
            {STEPS.kicker}
          </span>
          <h2 data-reveal>{STEPS.title}</h2>
        </div>

        <div className="steps-row">
          {STEPS.steps.map((step, i) => (
            <div
              className="step"
              key={step.title}
              data-reveal
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="step__num">0{i + 1}</span>
              <span className="step__icon">
                <Icon name={step.icon} size={24} strokeWidth={1.9} />
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

        <div className="steps-features">
          {STEPS.features.map((item, i) => (
            <div
              className="steps-feature"
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
    </section>
  )
}
