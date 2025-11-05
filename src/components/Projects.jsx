import { Code2, Globe, ServerCog } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Kanban',
    description: 'Collaborative task board with optimistic UI and WebSocket sync.',
    tags: ['React', 'FastAPI', 'WebSocket', 'MongoDB'],
    icon: Code2,
    link: '#',
  },
  {
    title: 'API Starter Kit',
    description: 'Production-ready FastAPI template with auth, caching, and tracing.',
    tags: ['FastAPI', 'Redis', 'OpenAPI'],
    icon: ServerCog,
    link: '#',
  },
  {
    title: 'Portfolio Site',
    description: 'Lightweight, accessible personal website with dark mode and MDX.',
    tags: ['Vite', 'Tailwind', 'MDX'],
    icon: Globe,
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Selected Projects</h2>
          <a href="#contact" className="text-sm text-indigo-600 hover:text-indigo-500">Get in touch →</a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-gray-200 hover:border-indigo-300 bg-white shadow-sm hover:shadow-md transition p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600">{p.title}</h3>
              </div>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-gray-100 text-gray-700 px-2.5 py-1">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
