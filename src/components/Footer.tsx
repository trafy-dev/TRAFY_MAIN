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

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

/* ── Social links data ────────────────────────────────────────────── */
const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/trafy-ai/", icon: LinkedInIcon },
  { label: "X (Twitter)", href: "https://x.com/trafy_ai", icon: XIcon },
  { label: "GitHub", href: "https://github.com/trafy-ai", icon: GitHubIcon },
  { label: "YouTube", href: "https://youtube.com/@trafy-ai", icon: YouTubeIcon },
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
            <a href="#top" className="group inline-flex items-center gap-2.5 transition-opacity hover:opacity-80">
              <span className="flex h-9 items-center justify-center rounded-xl bg-green-hard px-3 font-display text-base font-extrabold tracking-tight text-ink shadow-lg shadow-green-hard/20">
                Trafy
              </span>
              {suffix && (
                <span className="font-display text-xl font-bold tracking-tight">{suffix}</span>
              )}
            </a>

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
              &copy; {new Date().getFullYear()} Trafy Technologies Pvt. Ltd. All rights reserved.
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
