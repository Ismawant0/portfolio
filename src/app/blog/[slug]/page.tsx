import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `/blog/${slug}`,
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
      card: "summary_large_image",
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Simple function to parse bold text **like this**
function parseMarkdown(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-zinc-100 font-semibold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-12">
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: {
              '@type': 'Person',
              name: 'Ismawanto',
              url: 'https://ismawanto.vercel.app',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://ismawanto.vercel.app/blog/${post.slug}`,
            },
          }),
        }}
      />
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
      <article className="max-w-none">
        <header className="mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-4 leading-tight tracking-tight">
            {post.title}
          </h1>
          <div className="text-zinc-500 text-sm font-mono uppercase tracking-widest">
            {post.date}
          </div>
        </header>

        <div className="flex flex-col gap-8">
          {post.content.split('\n\n').map((block, index) => {
            const trimmed = block.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith('### ')) {
              return (
                <h3 key={index} className="text-xl md:text-2xl font-bold text-zinc-100 mt-12 mb-2 tracking-tight">
                  {trimmed.replace('### ', '')}
                </h3>
              );
            }
            
            if (trimmed.startsWith('---')) {
              return <hr key={index} className="border-zinc-800 my-8" />;
            }

            if (trimmed === 'References' || trimmed === '**References**') {
              return (
                <h4 key={index} className="text-lg font-bold text-zinc-100 mt-8 mb-4">
                  References
                </h4>
              );
            }

            // Detect if this block is a reference (after the HR)
            const blocks = post.content.split('\n\n');
            const hrIndex = blocks.findIndex(b => b.trim().startsWith('---'));
            const isReferenceSection = hrIndex !== -1 && index > hrIndex;
            
            if (isReferenceSection && trimmed !== 'References' && trimmed !== '**References**') {
              return (
                <p key={index} className="text-zinc-500 text-xs font-light leading-relaxed">
                  {trimmed}
                </p>
              );
            }

            return (
              <p key={index} className="text-zinc-400 leading-relaxed font-light">
                {parseMarkdown(trimmed)}
              </p>
            );
          })}
        </div>
      </article>

      {/* Footer Spacer */}
      <div className="h-24" />
    </main>
  );
}
