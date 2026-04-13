import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const posts = [
  {
    slug: "placeholder-post-1",
    title: "[Post title — placeholder]",
    date: "2025-01-01",
    summary:
      "A short summary of what this post is about. Replace with your real article about .NET, Azure, microservices, or anything you want to share.",
    tags: [".NET", "Azure"],
  },
  {
    slug: "placeholder-post-2",
    title: "[Post title — placeholder]",
    date: "2025-01-01",
    summary:
      "Another placeholder post. Great topics: lessons learned from a project, a deep dive into event-driven architecture, or a guide on a tool you use.",
    tags: ["Microservices", "Architecture"],
  },
  {
    slug: "placeholder-post-3",
    title: "[Post title — placeholder]",
    date: "2025-01-01",
    summary:
      "A third placeholder. Think about what you know deeply that others would benefit from reading — that's your next post.",
    tags: ["C#", "Best Practices"],
  },
];

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-green-400">Blog</h1>
        <p className="text-gray-500 mb-12 text-sm uppercase tracking-widest">Thoughts & write-ups</p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-800 pb-8 group"
            >
              <p className="text-xs text-gray-600 mb-1 uppercase tracking-widest">{post.date}</p>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold text-white group-hover:text-green-400 transition mb-2">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">{post.summary}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full border border-gray-700 text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm italic">More posts coming soon.</p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
