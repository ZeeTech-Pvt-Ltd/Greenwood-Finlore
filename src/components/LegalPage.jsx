// Shared wrapper for the legal pages (template text - needs lawyer review
// before launch).

export default function LegalPage({ title, children }) {
  return (
    <div className="container legal">
      <h1>{title}</h1>
      {children}
    </div>
  )
}
