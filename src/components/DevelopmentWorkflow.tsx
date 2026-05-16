export default function DevelopmentWorkflow() {
  const workflows = [
    {
      title: "AI-Assisted Development",
      description: "Leverage AI tools to accelerate development, reduce repetitive work, and improve engineering productivity while maintaining code quality and architectural control."
    },
    {
      title: "Rapid Prototyping",
      description: "Quickly transform concepts into working prototypes for faster product validation and iteration."
    },
    {
      title: "Performance-First Engineering",
      description: "Focus on fast-loading, scalable, and SEO-friendly applications optimized for real-world usage."
    },
    {
      title: "Production-Ready Mindset",
      description: "Build maintainable, reusable, and scalable systems designed for long-term sustainability."
    },
    {
      title: "Problem Solving",
      description: "Break down complex requirements into practical, efficient, and user-centered solutions."
    }
  ];

  return (
    <section className="py-24 bg-zinc-950/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Development Workflow
          </h2>
          <p className="mt-4 text-zinc-400 font-light max-w-2xl">
            My modern approach to software engineering, balancing rapid execution with sustainable architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 ${idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center mb-6">
                <span className="text-emerald-500 font-bold">0{idx + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed font-light text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
