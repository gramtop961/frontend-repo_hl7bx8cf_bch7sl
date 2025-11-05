import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-rose-50" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium tracking-wide text-indigo-600">Software Engineer</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-gray-900">
              Hi, I'm <span className="text-indigo-600">Your Name</span> — I build fast, reliable web apps
            </h1>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Full‑stack developer focused on delightful user experiences, robust APIs, and modern cloud-native architectures.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-500 transition">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="/resume.pdf" className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-50 transition">
                Download Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Available for freelance</span>
              <span className="hidden sm:inline">•</span>
              <span className="inline">Remote friendly</span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
              <div className="text-xs text-gray-500">src/components/Feature.jsx</div>
              <pre className="mt-3 overflow-auto rounded-md bg-gray-900 p-4 text-sm text-gray-100">
{`export function Feature() {
  return (
    <div className=\"card\">Performance • Accessibility • DX
      <button>Ship it! 🚀</button>
    </div>
  )
}`}
              </pre>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-indigo-50 py-3 text-indigo-700 text-sm">React</div>
                <div className="rounded-lg bg-emerald-50 py-3 text-emerald-700 text-sm">FastAPI</div>
                <div className="rounded-lg bg-rose-50 py-3 text-rose-700 text-sm">MongoDB</div>
              </div>
            </div>
            <div className="pointer-events-none absolute -z-0 inset-0 [mask-image:radial-gradient(240px_120px_at_70%_30%,#000_10%,transparent_60%)]">
              <div className="absolute -top-10 right-0 h-40 w-40 rounded-full bg-indigo-300/40 blur-3xl" />
              <div className="absolute bottom-0 left-10 h-40 w-40 rounded-full bg-rose-300/40 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
