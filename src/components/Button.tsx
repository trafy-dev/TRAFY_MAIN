import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "dark" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
};

const styles = {
  primary: "bg-green-hard text-ink hover:bg-ink hover:text-green-hard",
  dark: "bg-ink text-white hover:bg-black",
  outline: "border border-ink/15 text-ink hover:border-ink/60 bg-transparent",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold font-display transition-colors duration-200 whitespace-nowrap";

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`${base} ${styles[variant]} ${className}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
