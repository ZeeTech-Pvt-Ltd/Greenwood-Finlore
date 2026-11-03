import { SITE_URL } from '../../src/data/content'
import { ogBase } from '../../src/data/meta'

// Metadata lives here because page.jsx below is a client component
// (its dummy form uses an onSubmit handler), and metadata exports are
// only allowed in Server Components.
export const metadata = {
  title: 'Sign In - Access Your Greenwood Finlore Account Now',
  description:
    'Sign in to your Greenwood Finlore account to view your portfolio, signals and account settings. Support is available 24/7.',
  keywords: 'Greenwood Finlore sign in, trading account login Australia, crypto platform login',
  alternates: { canonical: `${SITE_URL}sign-in` },
  openGraph: { ...ogBase,
    title: 'Sign In - Access Your Greenwood Finlore Account Now',
    description:
      'Sign in to your Greenwood Finlore account to view your portfolio, signals and account settings. Support is available 24/7.',
    url: `${SITE_URL}sign-in`,
  },
}

export default function SignInLayout({ children }) {
  return children
}
