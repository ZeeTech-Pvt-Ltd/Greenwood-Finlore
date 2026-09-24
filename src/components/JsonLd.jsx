import { SITE_URL, SITE_NAME } from '../data/content'

/**
 * Structured data (JSON-LD) injected per page. Deliberately clean:
 * no AggregateRating / review markup, so Google review-snippet
 * validation is never triggered by placeholder marketing numbers.
 */

export function FaqJsonLd({ faqs }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

export function BreadcrumbJsonLd({ items }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: `${SITE_URL}${item.slug}`,
      })),
    ],
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

export function SoftwareApplicationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Greenwood Finlore is an AI powered trading platform for Bitcoin, Ethereum and 300+ markets, available in Australia.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'AUD',
      description: 'Free registration',
    },
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}
