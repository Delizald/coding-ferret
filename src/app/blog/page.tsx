import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-green-400">Blog</h1>
          <p className="text-gray-500 text-sm uppercase tracking-widest">Thoughts & write-ups</p>
        </div>

        {posts.length === 0 ? (
          <div className="flex justify-center">
            <div className="border border-green-400/30 rounded-2xl px-12 py-16 bg-green-400/5 text-center">
              <p className="text-3xl font-semibold text-green-400 mb-3">Coming Soon</p>
              <p className="text-gray-400 text-sm">Posts are in the works. Check back later.</p>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-gray-800 pb-10 group">
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
        )}
      </div>

      <Footer />
    </main>
  );
}
