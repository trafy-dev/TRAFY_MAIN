import { motion } from "framer-motion";
import { Check, FileText, Sparkles, Users } from "lucide-react";
import SectionTag from "../components/SectionTag";

const steps = [
  {
    title: "Create Profile",
    description: "Add your skills, experience and projects.",
    active: false,
  },
  {
    title: "Take Trafy Assessment",
    description: "Prove your skill level with real tasks.",
    active: true,
  },
  {
    title: "Get Matched",
    description: "Reviewed by vetted global AI companies.",
    active: false,
  },
  {
    title: "Start Working Remotely",
    description: "Onboard and get to work, from anywhere.",
    active: false,
  },
];

const rows = [
  {
    icon: FileText,
    title: "Skill Verification",
    description: "Automated coding & system design tasks.",
  },
  {
    icon: Sparkles,
    title: "Assessment Score: 92 / 100",
    description: "Top 8% percentile among global applicants.",
    highlight: true,
  },
  {
    icon: Users,
    title: "Company Matches",
    description: "3 AI companies reviewing your profile.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <SectionTag color="blue">How It Works</SectionTag>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          From sign-up to your first remote AI role.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr_260px]">
        <div className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`rounded-2xl border p-5 ${
                step.active
                  ? "border-green-hard bg-green-mild"
                  : "border-ink/10 bg-white/60"
              }`}
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-green-hard text-xs font-bold">
                {step.active ? <Check size={15} /> : i + 1}
              </div>
              <h4 className="font-display text-sm font-bold text-ink">{step.title}</h4>
              <p className="mt-1 text-xs text-ink/60">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-ink/10 bg-white"
        >
          <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3.5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-hard" />
              <span className="font-display text-sm font-semibold text-ink">
                Trafy Assessment
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white">
                View Report
              </button>
              <button className="text-xs font-medium text-ink/50">Retake</button>
            </div>
          </div>

          <div className="flex gap-2 border-b border-ink/10 px-5 py-3 text-xs font-medium">
            <span className="rounded-full bg-ink/5 px-3 py-1.5 text-ink/60">Profile</span>
            <span className="rounded-full bg-ink px-3 py-1.5 text-white">Assessment</span>
            <span className="rounded-full px-3 py-1.5 text-ink/60">Matches</span>
          </div>

          <div className="flex flex-col gap-3 p-5">
            {rows.map((row) => (
              <div
                key={row.title}
                className={`flex items-start gap-3 rounded-xl border p-4 ${
                  row.highlight
                    ? "border-green-hard bg-green-mild"
                    : "border-ink/10 bg-green-light/60"
                }`}
              >
                <row.icon size={18} className="mt-0.5 shrink-0 text-ink/70" />
                <div>
                  <p className="text-sm font-semibold text-ink">{row.title}</p>
                  <p className="text-xs text-ink/60">{row.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-3 rounded-2xl border border-ink/10 bg-white/60 p-5"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-ink/40">
            Trafy Copilot
          </p>
          <div className="rounded-xl border border-ink/10 bg-white p-3 text-sm text-ink/80">
            What should I improve next?
          </div>
          <div className="rounded-xl bg-ink/5 p-3 text-sm text-ink/80">
            Add a system design project to boost your score.
          </div>
          <div className="rounded-xl bg-green-hard p-3 text-sm font-semibold text-ink">
            Updated Score: 96
          </div>
        </motion.div>
      </div>
    </section>
  );
}
