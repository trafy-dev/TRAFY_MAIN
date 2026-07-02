import { Link } from "react-router-dom";

/* ── Reusable page wrapper for legal / info pages ────────────────── */
type LegalPageProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-xs text-ink/40">
        <Link to="/" className="transition-colors hover:text-ink">Home</Link>
        <span>/</span>
        <span className="text-ink/70">{title}</span>
      </nav>

      <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
      <p className="mt-3 text-sm text-ink/40">Last updated: {lastUpdated}</p>

      <div className="legal-prose mt-12">{children}</div>
    </section>
  );
}
