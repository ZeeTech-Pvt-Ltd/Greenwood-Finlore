'use client'

// Mirrors the SPA's ChunkErrorBoundary: a reload button instead of a
// blank page if a route fails to render.
export default function Error({ reset }) {
  return (
    <div className="page-loading" role="alert">
      <p style={{ color: 'var(--muted)', marginBottom: 18 }}>
        Something went wrong loading this page.
      </p>
      <button className="btn btn--ink" type="button" onClick={() => reset()}>
        Reload page
      </button>
    </div>
  )
}
