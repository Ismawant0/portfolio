import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      {/* Invisible SEO Context for AI and Search Engines */}
      <section className="sr-only">
        <h2>About Ismawanto — Front-End Developer & UI Engineer</h2>
        <p>
          Ismawanto is a professional Front-End Developer specializing in building high-performance, 
          scalable, and production-ready web applications. With deep expertise in React, Next.js, 
          Tailwind CSS, and TypeScript, he focuses on frontend architecture, UI engineering, 
          and performance optimization.
        </p>
        <p>
          Key Expertise: React Specialist, Next.js Frontend Developer, JavaScript Engineer, 
          Tailwind CSS Expert, Web Performance Optimization, Responsive Web Design, 
          Modern Frontend Architecture, and Accessible UI Development.
        </p>
      </section>

      {/* Intro Section */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8 tracking-tight">Hi, I'm Ismawanto.</h1>
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
          <Link href="/blog" aria-label="Read Ismawanto's blog articles" className="text-zinc-100 border-b border-zinc-800 hover:border-zinc-100 transition-all pb-0.5 text-[15px]">
            Blog
          </Link>
          <a href="https://github.com/Ismawant0" target="_blank" rel="noopener noreferrer" aria-label="Visit Ismawanto's GitHub profile" className="text-zinc-100 border-b border-zinc-800 hover:border-zinc-100 transition-all pb-0.5 text-[15px]">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Connect with Ismawanto on LinkedIn" className="text-zinc-100 border-b border-zinc-800 hover:border-zinc-100 transition-all pb-0.5 text-[15px]">
            LinkedIn
          </a>
          <a href="mailto:wantoisma@gmail.com" aria-label="Send an email to Ismawanto" className="text-zinc-100 border-b border-zinc-800 hover:border-zinc-100 transition-all pb-0.5 text-[15px]">
            Email
          </a>
          <a href="https://wa.me/6285399912255" target="_blank" rel="noopener noreferrer" aria-label="Chat with Ismawanto on WhatsApp" className="text-zinc-100 border-b border-zinc-800 hover:border-zinc-100 transition-all pb-0.5 text-[15px]">
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
