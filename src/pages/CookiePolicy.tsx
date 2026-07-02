import LegalPage from "../components/LegalPage";

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" lastUpdated="July 1, 2026">
      <h2>1. What Are Cookies</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They help the website
        remember your preferences, understand how you use the site, and improve your experience. Dmerz Technology
        Pvt. Ltd., the company behind Trafy ("Trafy", "we", "us"), uses cookies and similar technologies on <strong>trafy.ai</strong> and
        its sub-domains (the "Platform").
      </p>

      <h2>2. Types of Cookies We Use</h2>

      <h3>2.1 Strictly Necessary Cookies</h3>
      <p>
        These cookies are essential for the Platform to function properly. They enable core features such as
        authentication, security, and session management. You cannot opt out of these cookies.
      </p>
      <table>
        <thead>
          <tr><th>Cookie</th><th>Purpose</th><th>Duration</th></tr>
        </thead>
        <tbody>
          <tr><td>session_id</td><td>Maintains your login session</td><td>Session</td></tr>
          <tr><td>csrf_token</td><td>Protects against cross-site request forgery</td><td>Session</td></tr>
          <tr><td>cookie_consent</td><td>Remembers your cookie preferences</td><td>1 year</td></tr>
        </tbody>
      </table>

      <h3>2.2 Analytics Cookies</h3>
      <p>
        These cookies help us understand how visitors interact with the Platform by collecting and reporting
        information anonymously. This data helps us improve our services.
      </p>
      <table>
        <thead>
          <tr><th>Cookie</th><th>Provider</th><th>Purpose</th><th>Duration</th></tr>
        </thead>
        <tbody>
          <tr><td>_ga</td><td>Google Analytics</td><td>Distinguishes unique users</td><td>2 years</td></tr>
          <tr><td>_ga_*</td><td>Google Analytics</td><td>Stores session state</td><td>2 years</td></tr>
        </tbody>
      </table>

      <h3>2.3 Functional Cookies</h3>
      <p>
        These cookies enable enhanced functionality and personalisation, such as remembering your language
        preferences, region, or display settings.
      </p>

      <h3>2.4 Marketing Cookies</h3>
      <p>
        These cookies are used to deliver advertisements relevant to you and your interests. They may be set
        by our advertising partners to build a profile of your interests and show you relevant content on
        other websites.
      </p>

      <h2>3. How to Manage Cookies</h2>
      <p>You can control and manage cookies in several ways:</p>
      <ul>
        <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies through their settings. Note that blocking cookies may affect the functionality of the Platform.</li>
        <li><strong>Cookie Banner:</strong> When you first visit our Platform, you can choose which categories of cookies to accept through our cookie consent banner.</li>
        <li><strong>Opt-Out Links:</strong> For third-party analytics and marketing cookies, you can use opt-out mechanisms provided by those services (e.g., Google Analytics Opt-Out Browser Add-on).</li>
      </ul>

      <h2>4. Third-Party Cookies</h2>
      <p>
        Some cookies on our Platform are set by third-party services that appear on our pages. We do not control
        these cookies. Please refer to the respective third-party privacy policies for more information:
      </p>
      <ul>
        <li><a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Privacy Policy</a></li>
        <li><a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noreferrer">LinkedIn Privacy Policy</a></li>
      </ul>

      <h2>5. Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our
        data practices. We encourage you to review this page periodically.
      </p>

      <h2>6. Contact Us</h2>
      <p>If you have questions about our use of cookies, please contact us at:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:privacy@trafy.ai">privacy@trafy.ai</a></li>
        <li><strong>Company:</strong> Dmerz Technology Pvt. Ltd. (operating as Trafy)</li>
      </ul>
    </LegalPage>
  );
}
