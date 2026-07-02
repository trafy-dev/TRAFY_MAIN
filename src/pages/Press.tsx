import { Link } from "react-router-dom";

const releases = [
  {
    date: "June 30, 2026",
    title: "Trafy Cohort: Applications Open for Second Intake",
    body: "Trafy today announced that applications for the second cohort of its mentored AI learning programme are now open. The programme focuses on practical, project-based learning and has already placed 90% of its first cohort graduates into AI roles.",
  },
  {
    date: "May 15, 2026",
    title: "Trafy Reaches 10,000 Verified AI Professionals",
    body: "Trafy's talent platform has surpassed 10,000 verified AI professionals across 30+ countries, making it one of the fastest-growing AI-focused talent networks globally.",
  },
  {
    date: "March 20, 2026",
    title: "Trafy Build Launches Rapid AI Product Development Service",
    body: "Trafy has launched Trafy Build, a new service that provides customised AI product development with delivery in as little as 3 working days. The service leverages Trafy's curated network of senior AI engineers.",
  },
  {
    date: "January 10, 2026",
    title: "Trafy Launches AI Assessment Platform",
    body: "Trafy has launched its AI-powered skill assessment platform, enabling companies to verify the capabilities of AI engineering candidates through adaptive, real-world evaluation scenarios.",
  },
];

const mediaKit = [
  { label: "Brand Guidelines", desc: "Logo usage, colours, typography", format: "PDF" },
  { label: "Logo Pack", desc: "SVG, PNG in all variants", format: "ZIP" },
  { label: "Company Fact Sheet", desc: "Key stats, timeline, team info", format: "PDF" },
];

export default function Press() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-32 pb-24">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-xs text-ink/40">
        <Link to="/" className="transition-colors hover:text-ink">Home</Link>
        <span>/</span>
        <span className="text-ink/70">Press</span>
      </nav>

      <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
        Press &amp; Media
      </h1>
      <p className="mt-4 max-w-xl text-lg text-ink/50">
        News, press releases, and media resources from Trafy.
      </p>

      {/* Press Contact */}
      <div className="mt-10 rounded-2xl border border-ink/8 bg-green-mild/30 p-6">
        <h2 className="font-display text-sm font-bold">Media Enquiries</h2>
        <p className="mt-2 text-sm text-ink/50">
          For press enquiries, interview requests, or media partnerships, please contact:
        </p>
        <a href="mailto:press@trafy.ai" className="mt-2 inline-block text-sm font-semibold text-ink hover:underline">
          press@trafy.ai
        </a>
      </div>

      {/* Releases */}
      <div className="mt-16">
        <h2 className="font-display text-xs font-bold uppercase tracking-widest text-ink/30">Press Releases</h2>
        <div className="mt-8 space-y-4">
          {releases.map((r) => (
            <article key={r.title} className="rounded-2xl border border-ink/8 bg-white/60 p-6 transition-all duration-300 hover:border-ink/15 hover:shadow-sm">
              <span className="text-xs font-medium text-ink/30">{r.date}</span>
              <h3 className="mt-2 font-display text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/50">{r.body}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Media Kit */}
      <div className="mt-16">
        <h2 className="font-display text-xs font-bold uppercase tracking-widest text-ink/30">Media Kit</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {mediaKit.map((item) => (
            <div
              key={item.label}
              className="group cursor-pointer rounded-2xl border border-ink/8 bg-white/60 p-5 transition-all duration-300 hover:border-ink/15 hover:shadow-sm"
            >
              <h3 className="font-display text-sm font-bold">{item.label}</h3>
              <p className="mt-1 text-xs text-ink/40">{item.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-ink/5 px-2.5 py-1 text-xs font-semibold text-ink/40">
                {item.format}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink/30">
          Contact <a href="mailto:press@trafy.ai" className="underline hover:text-ink">press@trafy.ai</a> to request media kit downloads.
        </p>
      </div>
    </section>
  );
}
