import Link from "next/link";
import { projects } from "@/data/projects";

function ProjectLink({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <div className="mb-8">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div className="text-zinc-100 font-medium border-b border-transparent group-hover:border-zinc-700 transition-all w-fit mb-1">
          {title}
        </div>
        <div className="text-zinc-500 font-light leading-relaxed">
          {description}
        </div>
      </a>
    </div>
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
        <h1 className="text-2xl font-bold text-zinc-100 mb-8">Projects</h1>
        <div className="flex flex-col">
          {projects.map((project) => (
            <ProjectLink
              key={project.id}
              title={project.title}
              description={project.description}
              href={project.liveUrl || "#"}
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
