import { useState } from "react";
import { Link } from "react-router-dom";

type FooterColumn = {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
};

type FooterProps = {
  siteLabel: string;
  tagline: string;
  columns: FooterColumn[];
};

/* ── Social icons (inline SVG for zero-dep) ───────────────────────── */
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

/* ── Social links data ────────────────────────────────────────────── */
const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/trafy.ai", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/trafy-ai/", icon: LinkedInIcon },
  { label: "X (Twitter)", href: "https://x.com/trafyai", icon: XIcon },
  { label: "Facebook", href: "https://www.facebook.com/trafyedu?mibextid=wwXIfr", icon: FacebookIcon },
];

/* ── Legal / bottom-bar links ─────────────────────────────────────── */
const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Sitemap", href: "/sitemap" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "mailto:hello@trafy.ai" },
];

/* ── Footer component ─────────────────────────────────────────────── */
export default function Footer({ siteLabel, tagline, columns }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const suffix = siteLabel.replace(/^Trafy\s*/, "").trim();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer id="footer" className="relative overflow-hidden border-t border-ink/10 bg-ink text-white">
      {/* ── Decorative glow ──────────────────────────────────── */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-green-hard/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10">
        {/* ── Top area: brand + columns + newsletter ─────────── */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="group inline-flex items-center gap-2.5 transition-opacity hover:opacity-80">
              <img src="/trafy-logo-light.svg" alt="Trafy" className="h-9 w-auto" />
              {suffix && (
                <span className="font-display text-xl font-bold tracking-tight">{suffix}</span>
              )}
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              {tagline}
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-200 hover:border-green-hard/60 hover:text-green-hard hover:shadow-md hover:shadow-green-hard/10"
                  aria-label={`Trafy on ${label}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-white/30">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external !== false &&
                          (link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {}))}
                        className="group/link inline-flex items-center gap-1 text-sm text-white/55 transition-colors duration-200 hover:text-green-hard"
                      >
                        {link.label}
                        {link.href.startsWith("http") && (
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="opacity-0 transition-opacity group-hover/link:opacity-100"
                            aria-hidden="true"
                          >
                            <path d="M3 9l6-6M9 3v6M9 3H3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-white/30">
              Stay Updated
            </h4>
            <p className="mb-4 text-sm text-white/50">
              Get the latest on AI talent, product launches, and industry insights.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 rounded-xl border border-green-hard/30 bg-green-hard/10 px-4 py-3 text-sm text-green-hard">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                You&rsquo;re subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-green-hard/60 focus:ring-1 focus:ring-green-hard/30"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-green-hard px-4 py-2.5 text-sm font-semibold text-ink transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-green-hard/20 active:scale-[0.97]"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── Company quick links ───────────────────────────────── */}
        <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/8 pt-8">
          <span className="mr-2 text-xs font-semibold uppercase tracking-widest text-white/25">Company</span>
          {companyLinks.map(({ label, href }) =>
            href.startsWith("mailto") ? (
              <a
                key={label}
                href={href}
                className="text-sm text-white/45 transition-colors duration-200 hover:text-green-hard"
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                to={href}
                className="text-sm text-white/45 transition-colors duration-200 hover:text-green-hard"
              >
                {label}
              </Link>
            )
          )}
        </div>

        {/* ── Bottom bar ────────────────────────────────────────── */}
        <div className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-white/8 pt-8 sm:flex-row sm:items-center">
          {/* Left — copyright + legal links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-xs text-white/35">
              &copy; {new Date().getFullYear()} Dmerz Technology Pvt. Ltd. All rights reserved.
            </p>
            <span className="hidden h-3 w-px bg-white/15 sm:inline-block" aria-hidden="true" />
            {legalLinks.map(({ label, href }, i) => (
              <span key={label} className="inline-flex items-center gap-4">
                <Link to={href} className="text-xs text-white/35 transition-colors duration-200 hover:text-white/70">
                  {label}
                </Link>
                {i < legalLinks.length - 1 && (
                  <span className="h-0.5 w-0.5 rounded-full bg-white/20" aria-hidden="true" />
                )}
              </span>
            ))}
          </div>

          {/* Right — status + back to top */}
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs text-white/35">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-hard/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-hard" />
              </span>
              All systems operational
            </span>

            <a
              href="#top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-200 hover:border-green-hard/50 hover:text-green-hard hover:-translate-y-0.5"
              aria-label="Back to top"
            >
              <ArrowUpIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
