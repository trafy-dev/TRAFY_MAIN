import { motion } from "framer-motion";
import { Users, ShieldCheck, MailOpen, Bot } from "lucide-react";
import Button from "../components/Button";

const features = [
  {
    icon: Users,
    title: "Hire Global AI Talent",
    description:
      "Access a vetted global pool of assessed AI engineers, without the search overhead.",
  },
  {
    icon: ShieldCheck,
    title: "Private Project Workspace",
    description:
      "An inbuilt, secure IDE workspace keeps company code and IP private and sandboxed.",
  },
  {
    icon: MailOpen,
    title: "Temporary Candidate Email",
    description:
      "Auto-generated disposable project email servers keep candidate communication contained.",
  },
  {
    icon: Bot,
    title: "AI Assistant Support",
    description:
      "A built-in AI assistant helps manage screening, onboarding and day-to-day collaboration.",
  },
];

export default function ForCompanies() {
  return (
    <section id="companies" className="bg-ink py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-green-hard" />
              For Companies
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Hire vetted global AI talent, without the risk.
            </h2>
          </div>
          <Button href="#contact" variant="primary">
            Hire Talent
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-green-hard">
                <f.icon size={20} className="text-ink" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
