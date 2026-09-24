import { Link } from 'react-router-dom'

/**
 * Brand mark: growth rings - concentric circles like the cross-section
 * of an evergreen trunk, the Greenwood Finlore signature. Every ring is
 * a season of growth.
 */
export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo${light ? ' logo--light' : ''}`} aria-label="Greenwood Finlore - home">
      <svg className="logo__mark" viewBox="0 0 36 36" role="img" aria-hidden="true">
        <rect x="1" y="1" width="34" height="34" rx="9" fill="#fbfdf7" stroke="#c0d0aa" />
        {/* growth rings */}
        <circle cx="18" cy="18" r="12.5" fill="none" stroke="#156344" strokeWidth="2" />
        <circle cx="18" cy="18" r="7.5" fill="none" stroke="#c9a24a" strokeWidth="2" />
        <circle cx="18" cy="18" r="3" fill="#1f8a58" />
      </svg>
      <span className="logo__word">
        Greenwood <em>Finlore</em>
      </span>
    </Link>
  )
}
