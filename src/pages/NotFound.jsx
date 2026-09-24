import { Link } from 'react-router-dom'
import useMeta from '../hooks/useMeta'

export default function NotFound() {
  useMeta({ title: 'Page Not Found - Greenwood Finlore', canonical: null, robots: 'noindex, follow' })

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
          <Link className="btn btn--evergreen" to="/">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
