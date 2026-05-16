import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      {/* Intro Section */}
      <section>
        <h1 className="text-2xl font-bold text-zinc-100 mb-6">Hi, I'm Ismawanto.</h1>
        <div className="prose prose-zinc prose-invert max-w-none">
          <p className="text-zinc-300 leading-relaxed font-light mb-4">
            I’m a Front-End Developer building modern, fast, and production-ready web applications. 
            I focus on clean architecture, performance optimization, and intuitive user experiences 
            using React, Next.js, and Tailwind CSS.
          </p>
          <p className="text-zinc-400 leading-relaxed font-light mb-8">
            I enjoy turning complex ideas into practical digital products and continuously exploring 
            better ways to build software — including modern AI-assisted workflows that improve 
            development speed and efficiency without sacrificing quality.
          </p>
          <Link 
            href="/projects" 
            className="text-zinc-100 font-medium border-b border-zinc-800 hover:border-zinc-100 transition-all pb-0.5"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* Connect Section */}
      <section id="contact" className="flex flex-col gap-4">
        <p className="text-zinc-400 font-light">
          You can explore my code or connect with me online.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <Link href="/blog" className="text-zinc-100 border-b border-zinc-800 hover:border-zinc-100 transition-all pb-0.5 text-[15px]">
            Blog
          </Link>
          <a href="https://github.com/Ismawant0" target="_blank" rel="noopener noreferrer" className="text-zinc-100 border-b border-zinc-800 hover:border-zinc-100 transition-all pb-0.5 text-[15px]">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-100 border-b border-zinc-800 hover:border-zinc-100 transition-all pb-0.5 text-[15px]">
            LinkedIn
          </a>
          <a href="mailto:wantoisma@gmail.com" className="text-zinc-100 border-b border-zinc-800 hover:border-zinc-100 transition-all pb-0.5 text-[15px]">
            Email
          </a>
          <a href="https://wa.me/6285399912255" target="_blank" rel="noopener noreferrer" className="text-zinc-100 border-b border-zinc-800 hover:border-zinc-100 transition-all pb-0.5 text-[15px]">
            WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-xs text-zinc-600 font-light">
      </footer>
    </main>
  );
}
