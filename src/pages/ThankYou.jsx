import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import useMeta from '../hooks/useMeta'
import { SITE_URL } from '../data/content'

export default function ThankYou() {
  useMeta({
    title: 'Thank You - Greenwood Finlore Registration Received',
    description:
      'Your Greenwood Finlore registration has been received. Our team will contact you shortly to activate your free account.',
    canonical: `${SITE_URL}thank-you`,
    robots: 'noindex, follow',
  })

  return (
    <section className="centered-page">
      <div className="container">
        <div className="centered-page__icon centered-page__icon--success">
          <Icon name="check" size={34} strokeWidth={2.5} />
        </div>
        <h1>Thank You!</h1>
        <p>
          Your registration has been received. One of our account managers will contact you
          shortly to activate your account and walk you through your first trade.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn btn--evergreen" to="/">
            Back to home
          </Link>
          <Link className="btn btn--outline" to="/faq">
            Read the FAQs
          </Link>
        </div>
      </div>
    </section>
  )
}
