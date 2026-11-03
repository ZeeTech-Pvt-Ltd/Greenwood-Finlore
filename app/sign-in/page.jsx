'use client'
import Link from 'next/link'
import Icon from '../../src/components/Icon'

export default function SignIn() {
  return (
    <section className="auth-wrap">
      <div className="container container--narrow">
        <div className="auth-card">
          <span className="auth-card__icon">
            <Icon name="user" size={28} />
          </span>
          <h1>Sign In</h1>
          <p>
            Account activation is handled by our team after registration. New to Greenwood Finlore?{' '}
            <Link href="/sign-up">Create a free account</Link>.
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="form-field">
              <span>Email Address *</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>
            <label className="form-field">
              <span>Password *</span>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                autoComplete="current-password"
                required
              />
            </label>
            <button className="btn btn--evergreen btn--block" type="submit">
              Sign In
            </button>
            <p className="auth-card__note">
              Trouble signing in? Write to our 24/7 support team via the{' '}
              <Link href="/contact-us">contact page</Link>.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
