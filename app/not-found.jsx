import Link from 'next/link'

// Next emits its own "noindex" robots meta for not-found pages, so the
// only metadata needed here is the title (no canonical/og:url, matching
// the SPA, which removed them on 404).
export const metadata = {
  title: '404 Page Not Found - Greenwood Finlore Trading Platform',
}

export default function NotFound() {
  return (
    <section className="centered-page">
      <div className="container">
        <div className="centered-page__icon">404</div>
        <h1>Page Not Found</h1>
        <p>
          The page you are looking for does not exist or has moved. Head back home and keep
          growing.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn btn--evergreen" href="/">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
