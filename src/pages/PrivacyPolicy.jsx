import LegalPage from '../components/LegalPage'
import useMeta from '../hooks/useMeta'
import { SITE_URL, SUPPORT_EMAIL } from '../data/content'

// Template legal text - needs lawyer review before launch.

export default function PrivacyPolicy() {
  useMeta({
    title: 'Privacy Policy - Greenwood Finlore',
    description:
      'Read the Greenwood Finlore Privacy Policy to understand how your personal data is collected, used and protected.',
    keywords: 'Greenwood Finlore privacy policy, trading platform data protection Australia',
    canonical: `${SITE_URL}privacy`,
  })

  return (
    <LegalPage title="Privacy Policy">
      <p>Last updated: September 2026</p>

      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy explains how Greenwood Finlore collects, uses, stores and protects
        your personal information when you use greenwoodfinlore-au.com and its related services.
        By using the platform you agree to the practices described here.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We collect the following categories of information:</p>
      <ul>
        <li>Registration details you provide, including your first and last name, email address and phone number.</li>
        <li>Account activity such as deposits, trades, withdrawals and settings.</li>
        <li>Technical data such as IP address, browser type, device type and pages visited.</li>
        <li>Verification documents where required by law, such as proof of identity.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Create and manage your account.</li>
        <li>Process transactions and respond to support requests.</li>
        <li>Comply with anti-money laundering and identity verification laws.</li>
        <li>Improve the platform and prevent fraud and abuse.</li>
        <li>Send service updates and, where you consent, marketing communications.</li>
      </ul>

      <h2>4. Cookies And Tracking</h2>
      <p>
        The website uses cookies and similar technologies to keep you signed in, remember your
        preferences and understand how visitors use the site. You can control cookies through
        your browser settings at any time.
      </p>

      <h2>5. Sharing And Disclosure</h2>
      <p>
        We do not sell your personal information. We share it only with service providers who
        help us run the platform, with regulatory authorities where required by law, and with
        third parties when necessary to protect our rights or the safety of our users.
      </p>

      <h2>6. Data Security</h2>
      <p>
        Your data is protected with 256-bit SSL encryption in transit and industry standard
        safeguards at rest. Access to personal information is restricted to authorised staff who
        need it to do their jobs. No method of transmission or storage is completely secure, but
        we work continuously to protect your information.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        You may request access to, correction of or deletion of your personal information at any
        time by contacting us at {SUPPORT_EMAIL}. We will respond to reasonable requests within
        the timeframes required by applicable law.
      </p>

      <h2>8. Retention</h2>
      <p>
        We keep your personal information only as long as needed to provide the services and to
        meet our legal obligations. When information is no longer required it is securely deleted
        or anonymised.
      </p>

      <h2>9. Changes To This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be posted on
        this page with a new effective date. Continued use of the platform after changes means
        you accept the updated policy.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about this policy can be sent to {SUPPORT_EMAIL}. We are happy to explain how
        your data is handled.
      </p>
    </LegalPage>
  )
}
