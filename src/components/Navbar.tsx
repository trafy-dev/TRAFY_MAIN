import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./Button";

type NavLink = { label: string; href: string };

type NavbarProps = {
  logoLabel: string;
  links: NavLink[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export default function Navbar({ logoLabel, links, primaryCta, secondaryCta }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const suffix = logoLabel.replace(/^Trafy\s*/, "").trim();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-green-light/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 items-center justify-center rounded-lg bg-green-hard px-2.5 font-display text-sm font-extrabold tracking-tight text-ink">
            Trafy
          </span>
          {suffix && (
            <span className="font-display text-xl font-bold tracking-tight">{suffix}</span>
          )}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={secondaryCta.href} variant="outline">
            {secondaryCta.label}
          </Button>
          <Button href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-ink/10 lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-ink/80"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-3">
                <Button href={secondaryCta.href} variant="outline" className="w-full">
                  {secondaryCta.label}
                </Button>
                <Button href={primaryCta.href} variant="primary" className="w-full">
                  {primaryCta.label}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
