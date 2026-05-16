import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-12">
      {/* Back Button */}
      <nav>
        <Link 
          href="/blog" 
          className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-2"
        >
          ← Blog
        </Link>
      </nav>

      {/* Article Section */}
      <article>
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="text-zinc-500 text-sm font-mono">
            {post.date}
          </div>
        </header>

        <div className="prose prose-zinc prose-invert max-w-none">
          {/* Simple rendering logic for paragraphs and headings */}
          {post.content.split('\n\n').map((block, index) => {
            if (block.startsWith('# ')) {
              return <h1 key={index} className="text-2xl font-bold text-zinc-100 mt-8 mb-4">{block.replace('# ', '')}</h1>;
            }
            if (block.startsWith('## ')) {
              return <h2 key={index} className="text-xl font-bold text-zinc-100 mt-8 mb-4">{block.replace('## ', '')}</h2>;
            }
            if (block.startsWith('### ')) {
              return <h3 key={index} className="text-lg font-bold text-zinc-100 mt-6 mb-3">{block.replace('### ', '')}</h3>;
            }
            if (block.includes('- ')) {
               const items = block.split('\n').filter(line => line.trim().startsWith('- '));
               if (items.length > 0) {
                 return (
                   <ul key={index} className="list-disc list-inside space-y-2 text-zinc-400 font-light mb-4">
                     {items.map((item, i) => <li key={i}>{item.replace('- ', '')}</li>)}
                   </ul>
                 );
               }
            }
            return <p key={index} className="text-zinc-400 leading-relaxed font-light mb-6 whitespace-pre-wrap">{block.trim()}</p>;
          })}
        </div>
      </article>

      {/* Footer */}
      <footer className="mt-12 text-xs text-zinc-600 font-light">
      </footer>
    </main>
  );
}
