import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <Navbar />

      <article className="max-w-2xl mx-auto px-6 pt-32 pb-20">
        {/* Back link */}
        <Link
          href="/blog"
          className="text-xs text-gray-500 uppercase tracking-widest hover:text-green-400 transition mb-10 inline-block"
        >
          ← Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">{post.date}</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{post.title}</h1>
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
        </header>

        {/* Body */}
        <div
          className="prose prose-invert prose-green max-w-none
            prose-headings:text-white prose-headings:font-semibold
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-a:text-green-400 prose-a:no-underline hover:prose-a:underline
            prose-code:text-green-300 prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded
            prose-pre:bg-gray-800/60 prose-pre:border prose-pre:border-gray-700 prose-pre:rounded-xl
            prose-strong:text-white
            prose-li:text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>

      <Footer />
    </main>
  );
}
