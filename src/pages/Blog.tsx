import { Link } from "react-router-dom";

const posts = [
  {
    date: "Jun 28, 2026",
    category: "Product",
    title: "Introducing Trafy Cohort — Learn AI by Building Real Products",
    excerpt: "Our new mentored programme bridges the gap between learning AI and landing a role at a top company. Here's how it works.",
    readTime: "5 min read",
  },
  {
    date: "Jun 15, 2026",
    category: "Engineering",
    title: "How We Built Our AI Assessment Engine",
    excerpt: "A behind-the-scenes look at the technology powering Trafy's skill verification system — from LLM-based evaluation to adaptive difficulty.",
    readTime: "8 min read",
  },
  {
    date: "May 30, 2026",
    category: "Industry",
    title: "The State of Remote AI Hiring in 2026",
    excerpt: "We analysed 10,000+ placements to understand the trends shaping how AI companies hire remote talent globally.",
    readTime: "6 min read",
  },
  {
    date: "May 12, 2026",
    category: "Product",
    title: "Trafy Build: Ship AI Products in 3 Days",
    excerpt: "How our rapid build service turns ideas into production-ready AI products with a curated team of senior engineers.",
    readTime: "4 min read",
  },
  {
    date: "Apr 25, 2026",
    category: "Culture",
    title: "Building a Remote-First Company Without Borders",
    excerpt: "Our team spans 12 countries. Here's what we've learned about building culture, trust, and velocity in a distributed team.",
    readTime: "7 min read",
  },
];

const categoryColors: Record<string, string> = {
  Product: "bg-green-hard/15 text-green-hard",
  Engineering: "bg-blue/10 text-blue",
  Industry: "bg-yellow/20 text-yellow",
  Culture: "bg-rose/10 text-rose",
};

export default function Blog() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-32 pb-24">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-xs text-ink/40">
        <Link to="/" className="transition-colors hover:text-ink">Home</Link>
        <span>/</span>
        <span className="text-ink/70">Blog</span>
      </nav>

      <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
        Blog
      </h1>
      <p className="mt-4 max-w-xl text-lg text-ink/50">
        Insights on AI careers, remote hiring, and building products at the frontier.
      </p>

      {/* Posts */}
      <div className="mt-14 space-y-4">
        {posts.map((post) => (
          <article
            key={post.title}
            className="group cursor-pointer rounded-2xl border border-ink/8 bg-white/60 p-6 transition-all duration-300 hover:border-ink/15 hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[post.category] || "bg-ink/5 text-ink/50"}`}>
                {post.category}
              </span>
              <span className="text-xs text-ink/30">{post.date}</span>
              <span className="text-xs text-ink/30">·</span>
              <span className="text-xs text-ink/30">{post.readTime}</span>
            </div>
            <h2 className="mt-3 font-display text-xl font-bold transition-colors group-hover:text-green-hard">
              {post.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/50">{post.excerpt}</p>
          </article>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-16 rounded-2xl bg-ink p-8 text-center">
        <h2 className="font-display text-xl font-bold text-white">Stay in the loop</h2>
        <p className="mt-2 text-sm text-white/50">Get articles, product updates, and industry insights delivered to your inbox.</p>
        <a
          href="mailto:blog@trafy.ai?subject=Subscribe to Newsletter"
          className="mt-5 inline-flex items-center rounded-xl bg-green-hard px-6 py-2.5 text-sm font-semibold text-ink transition-all hover:brightness-110"
        >
          Subscribe to Newsletter
        </a>
      </div>
    </section>
  );
}
