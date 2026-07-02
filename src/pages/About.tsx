import { Link } from "react-router-dom";

const values = [
  { title: "Remote-First", desc: "We believe talent has no borders. Our platform connects AI professionals with global opportunities, regardless of location.", icon: "🌍" },
  { title: "Merit-Based", desc: "Skills matter, not pedigree. Every candidate is assessed on real ability through our AI-powered evaluation system.", icon: "⚡" },
  { title: "Transparent", desc: "No hidden fees, no gatekeeping. We build trust through radical transparency in how we match and compensate talent.", icon: "🔍" },
  { title: "Builder Mentality", desc: "We ship fast, iterate constantly, and never stop improving. Our platform evolves daily based on user feedback.", icon: "🛠️" },
];

const milestones = [
  { year: "2024", event: "Trafy founded with a vision to democratise AI careers globally." },
  { year: "2025", event: "Launched Trafy Assessment — AI-powered skill evaluation for engineers." },
  { year: "2025", event: "Trafy Build launched — custom AI product development in days." },
  { year: "2026", event: "Trafy Cohort launched — mentored, project-based AI learning programme." },
  { year: "2026", event: "Platform serves AI talent and companies across 30+ countries." },
];

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-32 pb-24">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-xs text-ink/40">
        <Link to="/" className="transition-colors hover:text-ink">Home</Link>
        <span>/</span>
        <span className="text-ink/70">About</span>
      </nav>

      {/* Hero */}
      <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
        Building the world's talent layer for&nbsp;AI
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/60">
        Trafy is a Work Tech platform connecting the world's best AI talent with the companies that need them most.
        We combine rigorous skill assessment with intelligent matching to create a meritocratic, borderless
        hiring ecosystem.
      </p>

      {/* Values */}
      <div className="mt-20">
        <h2 className="font-display text-xs font-bold uppercase tracking-widest text-ink/30">Our Values</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="group rounded-2xl border border-ink/8 bg-green-mild/30 p-6 transition-all duration-300 hover:border-ink/15 hover:shadow-lg hover:shadow-green-hard/5"
            >
              <span className="text-2xl">{v.icon}</span>
              <h3 className="mt-3 font-display text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-20">
        <h2 className="font-display text-xs font-bold uppercase tracking-widest text-ink/30">Our Journey</h2>
        <div className="mt-8 space-y-0">
          {milestones.map((m, i) => (
            <div key={i} className="relative flex gap-6 pb-8 last:pb-0">
              {/* Line */}
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-green-hard">
                  {m.year.slice(-2)}
                </div>
                {i < milestones.length - 1 && <div className="w-px flex-1 bg-ink/10" />}
              </div>
              <div className="pt-1">
                <span className="text-xs font-semibold text-ink/30">{m.year}</span>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ecosystem */}
      <div className="mt-20">
        <h2 className="font-display text-xs font-bold uppercase tracking-widest text-ink/30">The Trafy Ecosystem</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { name: "Trafy", desc: "AI talent marketplace", href: "https://trafy.ai", color: "bg-green-hard/15" },
            { name: "Trafy Build", desc: "Custom AI product dev", href: "https://build.trafy.ai", color: "bg-blue/10" },
            { name: "Trafy Cohort", desc: "AI learning programme", href: "https://academy.trafy.ai", color: "bg-yellow/15" },
          ].map((p) => (
            <a
              key={p.name}
              href={p.href}
              className={`group rounded-2xl border border-ink/8 ${p.color} p-5 transition-all duration-300 hover:border-ink/15 hover:shadow-md`}
            >
              <h3 className="font-display text-base font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-ink/50">{p.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ink/40 transition-colors group-hover:text-ink">
                Visit →
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 rounded-2xl bg-ink p-10 text-center">
        <h2 className="font-display text-2xl font-bold text-white">Want to join the team?</h2>
        <p className="mt-3 text-sm text-white/50">We're always looking for exceptional people who share our mission.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/careers"
            className="inline-flex items-center rounded-xl bg-green-hard px-6 py-2.5 text-sm font-semibold text-ink transition-all hover:brightness-110"
          >
            View Careers
          </Link>
          <a
            href="mailto:hello@trafy.ai"
            className="inline-flex items-center rounded-xl border border-white/15 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:border-white/30"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
