import Link from 'next/link'
import Icon from '../../src/components/Icon'
import { SITE_URL } from '../../src/data/content'
import { ogBase } from '../../src/data/meta'

export const metadata = {
  title: 'Thank You - Greenwood Finlore Registration Received',
  description:
    'Your Greenwood Finlore registration has been received. Our team will contact you shortly to activate your free account.',
  alternates: { canonical: `${SITE_URL}thank-you` },
  robots: 'noindex, follow',
  openGraph: { ...ogBase,
    title: 'Thank You - Greenwood Finlore Registration Received',
    description:
      'Your Greenwood Finlore registration has been received. Our team will contact you shortly to activate your free account.',
    url: `${SITE_URL}thank-you`,
  },
}

export default function ThankYou() {
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
          <Link className="btn btn--evergreen" href="/">
            Back to home
          </Link>
          <Link className="btn btn--outline" href="/faq">
            Read the FAQs
          </Link>
        </div>
      </div>
    </section>
  )
}
