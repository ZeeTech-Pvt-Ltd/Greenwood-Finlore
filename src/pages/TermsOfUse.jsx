import LegalPage from '../components/LegalPage'
import useMeta from '../hooks/useMeta'
import { SITE_URL, SUPPORT_EMAIL } from '../data/content'

// Template legal text - needs lawyer review before launch.

export default function TermsOfUse() {
  useMeta({
    title: 'Terms of Use - Greenwood Finlore',
    description:
      'Read the Greenwood Finlore Terms of Use governing access to the website and trading platform.',
    keywords: 'Greenwood Finlore terms of use, trading platform terms Australia',
    canonical: `${SITE_URL}terms`,
  })

  return (
    <LegalPage title="Terms of Use">
      <p>Last updated: September 2026</p>

      <h2>1. Acceptance Of These Terms</h2>
      <p>
        By accessing or using greenwoodfinlore-au.com you agree to be bound by these Terms of Use.
        If you do not agree with any part of these terms, please do not use the website or the
        platform.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        The platform is intended for individuals who are at least 18 years old and who can form
        legally binding contracts. By registering you confirm that you meet these requirements
        and that use of the platform is lawful in your country of residence.
      </p>

      <h2>3. Accounts And Registration</h2>
      <p>
        You must provide accurate and complete information when registering. You are responsible
        for keeping your login details confidential and for all activity that occurs under your
        account. Notify us immediately if you believe your account has been compromised.
      </p>

      <h2>4. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the platform for any unlawful purpose.</li>
        <li>Attempt to gain unauthorised access to any part of the platform or its systems.</li>
        <li>Interfere with the operation of the platform or other users.</li>
        <li>Submit false or misleading information.</li>
        <li>Reverse engineer, copy or resell any part of the platform.</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        All content on this website, including text, graphics, logos and software, is the
        property of Greenwood Finlore or its licensors and is protected by applicable
        intellectual property laws. You may not reproduce or distribute it without written
        permission.
      </p>

      <h2>6. Risk Acknowledgment</h2>
      <p>
        Trading cryptocurrencies, forex, CFDs and other instruments carries substantial risk of
        loss. You acknowledge that you are solely responsible for your trading decisions and for
        any losses that result from them. Please read our Risk Disclosure before trading.
      </p>

      <h2>7. No Financial Advice</h2>
      <p>
        Nothing on this website constitutes financial, investment, legal or tax advice. Content is
        provided for general information and marketing purposes only. Always consult a qualified
        professional before making investment decisions.
      </p>

      <h2>8. Limitation Of Liability</h2>
      <p>
        To the maximum extent permitted by law, Greenwood Finlore is not liable for any direct,
        indirect, incidental or consequential losses arising from your use of the website or
        platform, including trading losses, service interruptions or reliance on website content.
      </p>

      <h2>9. Changes To These Terms</h2>
      <p>
        We may revise these Terms of Use at any time. Revised terms take effect when posted on
        this page. Continued use of the platform after changes means you accept the revised
        terms.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These terms are governed by the laws applicable in your jurisdiction of residence to the
        extent permitted by applicable law. Any disputes will be resolved in the courts with
        appropriate jurisdiction.
      </p>

      <h2>11. Contact</h2>
      <p>Questions about these terms can be sent to {SUPPORT_EMAIL}.</p>
    </LegalPage>
  )
}
