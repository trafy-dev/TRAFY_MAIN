import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

type AnnouncementBarProps = {
  message: string;
  linkLabel: string;
  href: string;
};

export default function AnnouncementBar({ message, linkLabel, href }: AnnouncementBarProps) {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative z-50 overflow-hidden bg-ink text-white"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-center text-sm">
            <span className="text-green-hard">✦</span>
            <span className="font-medium">{message}</span>
            <a
              href={href}
              className="inline-flex items-center gap-1 font-semibold text-green-hard hover:underline"
            >
              {linkLabel}
              <ArrowRight size={14} />
            </a>
            <button
              onClick={() => setVisible(false)}
              aria-label="Dismiss announcement"
              className="absolute right-4 text-white/60 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
