import LegalPage from "../components/LegalPage";

export default function Accessibility() {
  return (
    <LegalPage title="Accessibility Statement" lastUpdated="July 1, 2026">
      <h2>Our Commitment</h2>
      <p>
        Trafy Technologies Pvt. Ltd. ("Trafy") is committed to ensuring digital accessibility for people of all
        abilities. We are continually improving the user experience for everyone and applying the relevant
        accessibility standards to ensure we provide equal access to all users.
      </p>

      <h2>Standards We Follow</h2>
      <p>
        We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1</strong> at Level AA.
        These guidelines explain how to make web content more accessible for people with disabilities and more
        user-friendly for everyone.
      </p>

      <h2>Measures We Take</h2>
      <ul>
        <li>Semantic HTML structure with proper heading hierarchy throughout all pages.</li>
        <li>Sufficient colour contrast ratios for text and interactive elements.</li>
        <li>Keyboard navigability across all interactive components.</li>
        <li>ARIA labels and roles for screen reader compatibility.</li>
        <li>Alt text for images and descriptive labels for icons.</li>
        <li>Responsive design that works across devices and screen sizes.</li>
        <li>Focus indicators for keyboard navigation.</li>
        <li>Reduced motion options for users who prefer minimal animation.</li>
      </ul>

      <h2>Known Limitations</h2>
      <p>
        While we strive for full accessibility, some areas of the Platform may not yet be fully optimised. We are
        actively working to identify and resolve any accessibility barriers. Known limitations include:
      </p>
      <ul>
        <li>Some third-party embedded content may not meet all accessibility standards.</li>
        <li>Certain interactive data visualisations may have limited screen reader support.</li>
      </ul>

      <h2>Feedback &amp; Assistance</h2>
      <p>
        We welcome your feedback on the accessibility of the Trafy Platform. If you encounter any accessibility
        barriers or need assistance, please contact us:
      </p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:accessibility@trafy.ai">accessibility@trafy.ai</a></li>
        <li><strong>Response Time:</strong> We aim to respond to accessibility feedback within 2 business days.</li>
      </ul>
      <p>
        We take accessibility feedback seriously and will make reasonable efforts to address reported issues promptly.
      </p>
    </LegalPage>
  );
}
