import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import SkillsMarquee from "./sections/SkillsMarquee";
import TalentFeatures from "./sections/TalentFeatures";
import HowItWorks from "./sections/HowItWorks";
import ForCompanies from "./sections/ForCompanies";
import CTASection from "./sections/CTASection";

/* ── Pages ──────────────────────────────────────────────────────── */
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Accessibility from "./pages/Accessibility";
import Sitemap from "./pages/Sitemap";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Press from "./pages/Press";

const navLinks = [
  { label: "For Talent", href: "#talent" },
  { label: "How it Works", href: "#how" },
  { label: "For Companies", href: "#companies" },
  { label: "Contact", href: "#contact" },
];

const footerColumns = [
  {
    title: "For Talent",
    links: [
      { label: "Get Started", href: "https://app.trafy.ai" },
      { label: "AI Assessment", href: "#how" },
      { label: "Free Portfolio", href: "#talent" },
      { label: "Skill Badges", href: "#talent" },
    ],
  },
  {
    title: "For Companies",
    links: [
      { label: "Hire Talent", href: "#companies" },
      { label: "Private Workspace", href: "#companies" },
      { label: "AI Assistant", href: "#companies" },
      { label: "Enterprise", href: "mailto:enterprise@trafy.ai" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Trafy Build", href: "https://build.trafy.ai" },
      { label: "Trafy Cohort", href: "https://academy.trafy.ai" },
      { label: "Community", href: "https://www.linkedin.com/company/trafy-ai/" },
      { label: "Follow Us", href: "https://www.instagram.com/trafy.ai" },
    ],
  },
];

/* ── Scroll to top on route change ──────────────────────────────── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* ── Landing page (home) ────────────────────────────────────────── */
function LandingPage() {
  return (
    <main>
      <Hero />
      <SkillsMarquee />
      <TalentFeatures />
      <HowItWorks />
      <ForCompanies />
      <CTASection />
    </main>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <AnnouncementBar
        message="Trafy is live — remote AI careers without borders."
        linkLabel="Explore the platform"
        href="https://app.trafy.ai"
      />
      <Navbar
        logoLabel="Trafy"
        links={navLinks}
        primaryCta={{ label: "Get Started", href: "https://app.trafy.ai" }}
        secondaryCta={{ label: "For Companies", href: "#companies" }}
      />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/press" element={<Press />} />
      </Routes>

      <Footer
        siteLabel="Trafy"
        tagline="Work Tech connecting global AI talent with the world's top AI companies."
        columns={footerColumns}
      />
    </>
  );
}

export default App;
