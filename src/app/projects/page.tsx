import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the portfolio of projects built by Ismawanto, featuring e-commerce platforms, PWAs, and organizational websites.",
};

function ProjectLink({ title, description, href, category }: { title: string; description: string; href: string; category: string }) {
  return (
    <li className="mb-10 list-none">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View live project: ${title} (${category})`}
        className="group block"
      >
        <div className="flex items-center gap-3 mb-1">
          <div className="text-zinc-100 font-medium border-b border-transparent group-hover:border-zinc-700 transition-all w-fit">
            {title}
          </div>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-zinc-800 text-zinc-500 tracking-wider">
            {category}
          </span>
        </div>
        <div className="text-zinc-500 font-light leading-relaxed">
          {description}
        </div>
      </a>
    </li>
  );
}

export default function Projects() {
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

      {/* Projects List */}
      <section>
        <h1 className="text-3xl font-bold text-zinc-100 mb-10 tracking-tight">Projects</h1>
        <ul className="flex flex-col p-0 m-0">
          {projects.map((project) => (
            <ProjectLink
              key={project.id}
              title={project.title}
              description={project.description}
              href={project.liveUrl || "#"}
              category={project.category}
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
