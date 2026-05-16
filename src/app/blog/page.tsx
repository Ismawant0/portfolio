import Link from "next/link";
import { blogPosts } from "@/data/blog";

function BlogLink({ title, date, excerpt, slug }: { title: string; date: string; excerpt: string; slug: string }) {
  return (
    <div className="mb-10">
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
    </div>
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
        <h1 className="text-2xl font-bold text-zinc-100 mb-10">Blog</h1>
        <div className="flex flex-col">
          {blogPosts.map((post) => (
            <BlogLink
              key={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              slug={post.slug}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-xs text-zinc-600 font-light">
      </footer>
    </main>
  );
}
