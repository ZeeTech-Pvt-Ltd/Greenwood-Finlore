import Link from 'next/link'
import FaqList from '../../src/components/FaqList'
import { BreadcrumbJsonLd, FaqJsonLd } from '../../src/components/JsonLd'
import { SITE_URL, FAQS } from '../../src/data/content'
import { ogBase } from '../../src/data/meta'

export const metadata = {
  title: 'Greenwood Finlore FAQs - Answers to Common Questions',
  description:
    'Answers to common Greenwood Finlore questions: account setup, security, assets, deposits and withdrawals. Create your free account today.',
  keywords: 'Greenwood Finlore FAQ, crypto trading questions, how to trade crypto Australia, Greenwood Finlore account help',
  alternates: { canonical: `${SITE_URL}faq` },
  openGraph: { ...ogBase,
    title: 'Greenwood Finlore FAQs - Answers to Common Questions',
    description:
      'Answers to common Greenwood Finlore questions: account setup, security, assets, deposits and withdrawals. Create your free account today.',
    url: `${SITE_URL}faq`,
  },
}

export default function Faqs() {
  return (
    <>
      <FaqJsonLd faqs={FAQS} />
      <BreadcrumbJsonLd items={[{ name: 'FAQs', slug: 'faq' }]} />
      <section className="section section--alt">
        <div className="container container--narrow">
          <div className="section-head">
            <span className="kicker" data-reveal>
              Help center
            </span>
            <h1 data-reveal style={{ fontSize: 'clamp(32px, 4vw, 48px)', margin: '14px 0 18px' }}>
              Frequently Asked Questions
            </h1>
            <p data-reveal>Everything you need to know about trading with Greenwood Finlore.</p>
          </div>
          <div data-reveal>
            <FaqList />
          </div>
          <p data-reveal style={{ textAlign: 'center', marginTop: 36, color: 'var(--muted)' }}>
            Still have questions?{' '}
            <Link href="/contact-us" style={{ fontWeight: 600 }}>
              Contact our team
            </Link>{' '}
            We are here 24/7.
          </p>
        </div>
      </section>
    </>
  )
}
