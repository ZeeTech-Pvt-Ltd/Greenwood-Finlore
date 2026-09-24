import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import useMeta from '../hooks/useMeta'
import { SITE_URL } from '../data/content'

export default function SignIn() {
  useMeta({
    title: 'Sign In - Access Your Greenwood Finlore Account',
    description:
      'Sign in to your Greenwood Finlore account to view your portfolio, signals and account settings. Support is available 24/7.',
    keywords: 'Greenwood Finlore sign in, trading account login Australia, crypto platform login',
    canonical: `${SITE_URL}sign-in`,
  })

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
            <Link to="/sign-up">Create a free account</Link>.
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
              <Link to="/contact-us">contact page</Link>.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
