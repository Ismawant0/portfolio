import Link from "next/link";

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
        <h1 className="text-2xl font-bold text-zinc-100 mb-8">Blog</h1>
        <div className="prose prose-zinc prose-invert">
          <p className="text-zinc-500 font-light italic">
            Writing about software engineering, productivity, and digital products. Coming soon.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-xs text-zinc-600 font-light">
      </footer>
    </main>
  );
}
