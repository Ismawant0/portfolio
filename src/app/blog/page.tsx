import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical articles and insights on React, Next.js, AI, and modern software development by Ismawanto.",
};

function BlogLink({ title, date, excerpt, slug }: { title: string; date: string; excerpt: string; slug: string }) {
  return (
    <li className="mb-10 list-none">
      <Link
        href={`/blog/${slug}`}
        className="group block"
      >
        <div className="text-zinc-100 font-medium border-b border-transparent group-hover:border-zinc-700 transition-all w-fit mb-1">
          {title}
        </div>
        <div className="text-zinc-500 text-xs font-mono mb-2">
          {date}
        </div>
        <div className="text-zinc-400 font-light leading-relaxed">
          {excerpt}
        </div>
      </Link>
    </li>
  );
}

export default function Blog() {
  return (
    <main className="flex flex-col gap-12">
      {/* Back Button */}
      <nav>
        <Link 
          href="/" 
          className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-2"
        >
          ← Back
        </Link>
      </nav>

      {/* Blog List Section */}
      <section>
        <h1 className="text-3xl font-bold text-zinc-100 mb-10 tracking-tight">Blog</h1>
        <ul className="flex flex-col p-0 m-0">
          {blogPosts.map((post) => (
            <BlogLink
              key={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              slug={post.slug}
            />
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-xs text-zinc-600 font-light">
      </footer>
    </main>
  );
}
