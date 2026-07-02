import { motion } from "framer-motion";
import Button from "../components/Button";

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-green-hard py-24">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-20" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl"
        >
          Ready to work without borders?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-ink/70"
        >
          Join Trafy as talent or start hiring vetted global AI engineers today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="https://app.trafy.ai" variant="dark">
            Join as Talent
          </Button>
          <Button href="mailto:hello@trafy.ai" variant="outline" className="border-ink/25">
            Talk to Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
