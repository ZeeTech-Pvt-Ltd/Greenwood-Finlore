import { Link } from 'react-router-dom'
import FaqList from '../components/FaqList'

export default function FaqSection() {
  return (
    <section className="section faq-section" id="faq">
      <div className="container container--narrow">
        <div className="section-head">
          <span className="kicker" data-reveal>
            Common questions
          </span>
          <h2 data-reveal>Frequently Asked Questions</h2>
        </div>
        <div data-reveal>
          <FaqList />
        </div>
        <p className="faq-section__more" data-reveal>
          Still have questions? <Link to="/contact-us">Contact our team</Link>. We answer around
          the clock.
        </p>
      </div>
    </section>
  )
}
