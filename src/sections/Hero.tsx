import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { CornerDownRight } from "lucide-react";
import Button from "../components/Button";
import SectionTag from "../components/SectionTag";

const Scene3D = lazy(() => import("../components/Scene3D"));

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="pointer-events-none absolute right-6 top-6 hidden rounded-full border border-ink/15 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-ink/40 sm:block">
          Remote · Global · AI
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <SectionTag>Work Tech for Global AI Talent</SectionTag>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl"
            >
              Work remote for the world's{" "}
              <span className="relative inline-block rounded-lg bg-green-hard px-2 py-0.5">
                top AI companies
              </span>
              <span className="caret h-[0.85em] translate-y-1" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-ink/65"
            >
              Trafy connects global AI talent with leading tech companies. Get
              assessed, get matched, and start working — from anywhere in the
              world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button href="https://app.trafy.ai" variant="primary">
                Get Started as Talent
              </Button>
              <Button href="#companies" variant="dark">
                Hire Talent
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6 flex items-center gap-2 text-xs font-medium text-ink/45"
            >
              <CornerDownRight size={14} />
              No relocation. No borders. Just work.
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative h-[380px] overflow-hidden rounded-3xl border border-ink/10 bg-space sm:h-[460px]"
          >
            <div className="pointer-events-none absolute inset-0 bg-stars animate-twinkle" />
            <div className="absolute left-5 top-5 h-2 w-2 rounded-full bg-rose" />
            <div className="absolute bottom-5 right-5 rounded border border-white/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-white/40">
              [Talent × Companies]
            </div>
            <Suspense fallback={null}>
              <Scene3D color="#c6ff33" className="h-full w-full" />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
