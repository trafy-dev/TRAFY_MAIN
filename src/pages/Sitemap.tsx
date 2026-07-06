import { Link } from "react-router-dom";

const sections = [
  {
    title: "Platform",
    links: [
      { label: "Home", to: "/" },
      { label: "For Talent", to: "/#talent" },
      { label: "How It Works", to: "/#how" },
      { label: "For Companies", to: "/#companies" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Trafy Build", href: "https://build.trafy.ai" },
      { label: "Trafy Cohort", href: "https://academy.trafy.ai" },
      { label: "Trafy App", href: "https://app.trafy.ai" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Blog", to: "/blog" },
      { label: "Press", to: "/press" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Cookie Policy", to: "/cookies" },
      { label: "Accessibility", to: "/accessibility" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/trafy.ai" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/trafy-ai/" },
      { label: "X (Twitter)", href: "https://x.com/trafyai" },
      { label: "Facebook", href: "https://www.facebook.com/trafyedu?mibextid=wwXIfr" },
      { label: "Email", href: "mailto:hello@trafy.ai" },
    ],
  },
];

export default function Sitemap() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-32 pb-24">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-xs text-ink/40">
        <Link to="/" className="transition-colors hover:text-ink">Home</Link>
        <span>/</span>
        <span className="text-ink/70">Sitemap</span>
      </nav>

      <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">Sitemap</h1>
      <p className="mt-4 text-lg text-ink/50">A complete overview of all pages and resources on Trafy.</p>

      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-display text-xs font-bold uppercase tracking-widest text-ink/30">{section.title}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {section.links.map((link) => (
                <li key={link.label}>
                  {"to" in link ? (
                    <Link to={link.to!} className="text-sm text-ink/60 transition-colors hover:text-ink">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1 text-sm text-ink/60 transition-colors hover:text-ink">
                      {link.label}
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">
                        <path d="M3 9l6-6M9 3v6M9 3H3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
