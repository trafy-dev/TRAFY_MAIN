const skills = [
  "LLM Engineering",
  "Computer Vision",
  "MLOps",
  "Data Science",
  "AI Product",
  "NLP",
  "Robotics",
  "Applied Research",
  "Prompt Engineering",
  "AI Infrastructure",
];

export default function SkillsMarquee() {
  return (
    <div className="border-y border-ink/10 bg-white/40 py-7">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-ink/40">
        Talent assessed and matched across
      </p>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-10">
          {[...skills, ...skills].map((s, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-lg font-semibold text-ink/30"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
