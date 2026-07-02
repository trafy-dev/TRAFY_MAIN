import { Link } from "react-router-dom";

const openings = [
  {
    title: "Senior Full-Stack Engineer",
    team: "Engineering",
    location: "Remote (Global)",
    type: "Full-Time",
  },
  {
    title: "AI/ML Research Engineer",
    team: "AI Platform",
    location: "Remote (Global)",
    type: "Full-Time",
  },
  {
    title: "Product Designer",
    team: "Design",
    location: "Remote (Global)",
    type: "Full-Time",
  },
  {
    title: "Growth Marketing Lead",
    team: "Marketing",
    location: "Remote (Global)",
    type: "Full-Time",
  },
  {
    title: "Technical Content Writer",
    team: "Content",
    location: "Remote (Global)",
    type: "Contract",
  },
];

const perks = [
  { icon: "🌍", title: "100% Remote", desc: "Work from anywhere in the world. No office politics, just results." },
  { icon: "💰", title: "Competitive Pay", desc: "Global-benchmark compensation regardless of where you live." },
  { icon: "📚", title: "Learning Budget", desc: "Annual stipend for courses, conferences, books, and tools." },
  { icon: "🏥", title: "Health Coverage", desc: "Comprehensive health insurance for you and your family." },
  { icon: "🏖️", title: "Flexible PTO", desc: "Unlimited paid time off — we trust you to manage your schedule." },
  { icon: "💻", title: "Equipment Budget", desc: "Top-of-the-line setup. We'll cover your workstation needs." },
];

export default function Careers() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-32 pb-24">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-xs text-ink/40">
        <Link to="/" className="transition-colors hover:text-ink">Home</Link>
        <span>/</span>
        <span className="text-ink/70">Careers</span>
      </nav>

      <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
        Build the future of AI&nbsp;careers
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/60">
        We're a remote-first team on a mission to connect every AI professional with the perfect opportunity.
        Join us and help shape how the world hires AI talent.
      </p>

      {/* Perks */}
      <div className="mt-16">
        <h2 className="font-display text-xs font-bold uppercase tracking-widest text-ink/30">Why Join Trafy</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="rounded-2xl border border-ink/8 bg-green-mild/20 p-5 transition-all duration-300 hover:border-ink/12 hover:shadow-sm">
              <span className="text-xl">{p.icon}</span>
              <h3 className="mt-2 font-display text-sm font-bold">{p.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-ink/50">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Openings */}
      <div className="mt-20">
        <h2 className="font-display text-xs font-bold uppercase tracking-widest text-ink/30">Open Positions</h2>
        <div className="mt-8 space-y-3">
          {openings.map((job) => (
            <a
              key={job.title}
              href={`mailto:careers@trafy.ai?subject=Application: ${job.title}`}
              className="group flex items-center justify-between rounded-2xl border border-ink/8 bg-white/60 px-6 py-5 transition-all duration-300 hover:border-ink/15 hover:shadow-md"
            >
              <div>
                <h3 className="font-display text-base font-bold">{job.title}</h3>
                <div className="mt-1 flex items-center gap-3 text-xs text-ink/40">
                  <span>{job.team}</span>
                  <span className="h-1 w-1 rounded-full bg-ink/20" />
                  <span>{job.location}</span>
                  <span className="h-1 w-1 rounded-full bg-ink/20" />
                  <span>{job.type}</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-ink/30 transition-colors group-hover:text-green-hard">
                Apply →
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* General */}
      <div className="mt-16 rounded-2xl bg-ink p-8 text-center">
        <h2 className="font-display text-xl font-bold text-white">Don't see your role?</h2>
        <p className="mt-2 text-sm text-white/50">Send us your resume — we're always looking for exceptional talent.</p>
        <a
          href="mailto:careers@trafy.ai?subject=General Application"
          className="mt-5 inline-flex items-center rounded-xl bg-green-hard px-6 py-2.5 text-sm font-semibold text-ink transition-all hover:brightness-110"
        >
          Send General Application
        </a>
      </div>
    </section>
  );
}
