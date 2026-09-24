import Icon from '../components/Icon'
import RegistrationForm from '../components/RegistrationForm'
import { ChartLineArt } from '../components/Art'
import { FINAL_CTA, HERO } from '../data/content'

export default function FinalCta() {
  return (
    <section className="section final-section">
      <div className="container">
        <div className="final-cta">
          <ChartLineArt className="final-cta__chart" />
          <div className="final-cta__copy">
            <h2 data-reveal>{FINAL_CTA.title}</h2>
            <p data-reveal>{FINAL_CTA.text}</p>
            <ul className="final-cta__trust" data-reveal>
              {FINAL_CTA.trust.split(' · ').map((item) => (
                <li key={item}>
                  <Icon name="check" size={15} strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="final-cta__form" data-reveal>
            <RegistrationForm idPrefix="final" title={HERO.formTitle} subtitle={HERO.formSubtitle} />
          </div>
        </div>
      </div>
    </section>
  )
}
