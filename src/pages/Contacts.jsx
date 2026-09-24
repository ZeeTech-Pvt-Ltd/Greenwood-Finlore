import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import RegistrationForm from '../components/RegistrationForm'
import { BreadcrumbJsonLd } from '../components/JsonLd'
import useMeta from '../hooks/useMeta'
import { SITE_URL, SUPPORT_EMAIL, HERO } from '../data/content'

const CONTACT_ROWS = [
  {
    icon: 'mail',
    title: 'Email Us',
    text: 'Write to us and we reply within one business day.',
    href: `mailto:${SUPPORT_EMAIL}`,
    hrefText: SUPPORT_EMAIL,
  },
  {
    icon: 'clock',
    title: 'Support Hours',
    text: 'Our professional support team is available 24 hours a day, 7 days a week.',
  },
  {
    icon: 'globe',
    title: 'Availability',
    text: 'Greenwood Finlore is now available in Australia, with more regions coming soon.',
  },
]

export default function Contacts() {
  useMeta({
    title: 'Contact Us - Get in Touch with Greenwood Finlore',
    description:
      'Contact the Greenwood Finlore team. Support is available 24/7 by email, with a dedicated account manager for every client.',
    keywords: 'contact Greenwood Finlore, crypto trading support Australia, Greenwood Finlore help, 24/7 trading support',
    canonical: `${SITE_URL}contact-us`,
  })

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Contact Us', slug: 'contact-us' }]} />
      <section className="page-hero">
        <div className="container">
          <h1 data-reveal>Contact Us</h1>
          <p data-reveal>
            Questions about your account, deposits or trading? The Greenwood Finlore team is here
            for you around the clock.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <span className="kicker" data-reveal>
                Get in touch
              </span>
              <h2 data-reveal>We Are Here Around The Clock</h2>
              <p data-reveal>
                Email us any time, day or night. A real person reads every message and replies
                within one business day.
              </p>

              <ul className="contact-list">
                {CONTACT_ROWS.map((row, i) => (
                  <li key={row.title} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                    <span className="card__icon card__icon--sm">
                      <Icon name={row.icon} size={20} strokeWidth={1.9} />
                    </span>
                    <div>
                      <h3>{row.title}</h3>
                      <p>
                        {row.text}{' '}
                        {row.href && (
                          <a href={row.href} style={{ fontWeight: 600 }}>
                            {row.hrefText}
                          </a>
                        )}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="contact-faq" data-reveal>
                Looking for a quick answer? Check the <Link to="/faq">FAQs</Link>.
              </p>
            </div>

            <div className="contact-form" data-reveal>
              <RegistrationForm
                idPrefix="contact"
                title={HERO.formTitle}
                subtitle={HERO.formSubtitle}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
