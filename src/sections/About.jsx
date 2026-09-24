import Icon from '../components/Icon'
import { ABOUT } from '../data/content'

export default function About() {
  return (
    <section className="section about-section" id="gateway">
      <div className="container">
        <div className="section-head">
          <span className="kicker" data-reveal>
            {ABOUT.kicker}
          </span>
          <h2 data-reveal>{ABOUT.title}</h2>
          <p className="section-head__lead" data-reveal>
            {ABOUT.text}
          </p>
        </div>

        <ul className="about__points about__points--grid">
          {ABOUT.points.map((point) => (
            <li key={point} data-reveal>
              <span className="point-mark">
                <Icon name="check" size={14} strokeWidth={3} />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
