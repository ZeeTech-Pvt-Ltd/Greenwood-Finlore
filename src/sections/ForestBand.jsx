import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Calculator from '../components/Calculator'
import { ChartLineArt } from '../components/Art'
import { JOIN, CALCULATOR } from '../data/content'

/**
 * The one dark band on the homepage: the deep evergreen trading strip.
 * Join copy on the left, the growth calculator on the right.
 */
export default function ForestBand() {
  return (
    <section className="forest-band" id="join">
      <ChartLineArt className="forest-band__chart" />
      <div className="container">
        <div className="forest-grid">
          <div className="forest__copy">
            <span className="kicker kicker--gold" data-reveal>
              {JOIN.kicker}
            </span>
            <h2 data-reveal>{JOIN.title}</h2>
            <p data-reveal>{JOIN.text}</p>
            <ul className="forest__points">
              {JOIN.points.map((point) => (
                <li key={point} data-reveal>
                  <span className="point-mark point-mark--gold">
                    <Icon name="check" size={14} strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Link className="btn btn--gold btn--lg" to="/sign-up" data-reveal>
              Create Your Free Account
            </Link>
          </div>

          <div className="forest__calc" data-reveal>
            <div className="forest__calc-head">
              <span className="kicker kicker--gold">{CALCULATOR.kicker}</span>
              <h3>{CALCULATOR.title}</h3>
              <p>{CALCULATOR.text}</p>
            </div>
            <Calculator />
          </div>
        </div>
      </div>
    </section>
  )
}
