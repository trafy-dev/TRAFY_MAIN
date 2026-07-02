type SectionTagProps = {
  children: string;
  color?: "green" | "rose" | "blue" | "yellow";
};

const dotColor = {
  green: "bg-green-hard",
  rose: "bg-rose",
  blue: "bg-blue",
  yellow: "bg-yellow",
};

export default function SectionTag({ children, color = "green" }: SectionTagProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-ink/70">
      <span className={`h-1.5 w-1.5 rounded-full ${dotColor[color]}`} />
      {children}
    </span>
  );
}
