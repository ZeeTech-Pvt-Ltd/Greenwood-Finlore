import Script from 'next/script'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import RevealProvider from '../src/components/RevealProvider'
import { SITE_URL, SITE_NAME } from '../src/data/content'
import '../src/styles/global.css'

// Site-wide defaults; each page overrides title/description/canonical.
// Deliberately no og:url/canonical/keywords here - they would leak onto
// the 404 page, where the SPA removed them.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Greenwood Finlore - AI Powered Trading in Australia',
  description:
    'Greenwood Finlore is an AI powered trading platform for Bitcoin, Ethereum and 300+ markets. Trade smarter in Australia. Join free today.',
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}og-image.png` }],
  },
  twitter: { card: 'summary_large_image' },
  verification: { google: 'WIm_p0RlltbNnakVgHXBf_D8C8HgRXjSCabfPaC2mIE' },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f4f7ee',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* ARD: AI agents discover the catalog via this link */}
        <link rel="ai-catalog" href="/ai-catalog.json" />

        {/* Fonts: one simple family - Inter for headings, body and data.
            Static instances instead of the full variable axes. Loaded
            non-blocking so the stylesheet doesn't delay first paint.
            The media="print" link downloads without render-blocking and
            the afterInteractive script flips it to "all" - React drops
            an inline onload attribute on <link>, so the script replaces
            the SPA's onload="this.media='all'" trick. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* display=optional: no font swap after first paint, so no CLS.
            The preloaded stylesheet makes the fonts available early on
            normal connections; slow connections get the system fallback. */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=optional"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=optional"
          media="print"
        />
        <Script
          id="font-media"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "document.querySelectorAll('link[media=\"print\"]').forEach(function (l) { l.onload = function () { l.media = 'all' }; l.media = 'all' })",
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=optional"
          />
        </noscript>

        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PER578H538" strategy="afterInteractive" />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-PER578H538');",
          }}
        />

        {/* Simple Organization + WebSite schema: no rating data, so no
            review-snippet validation is triggered. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  name: 'Greenwood Finlore',
                  url: 'https://greenwoodfinlore-au.com/',
                  logo: 'https://greenwoodfinlore-au.com/favicon.svg',
                  email: 'support@greenwoodfinlore-au.com',
                },
                {
                  '@type': 'WebSite',
                  name: 'Greenwood Finlore',
                  url: 'https://greenwoodfinlore-au.com/',
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <RevealProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </RevealProvider>
      </body>
    </html>
  )
}
