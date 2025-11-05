export default function About() {
  const skills = [
    'JavaScript/TypeScript',
    'React / Vite',
    'Node.js',
    'Python / FastAPI',
    'MongoDB',
    'CI/CD',
    'Testing (Jest, Pytest)',
    'Cloud & Containers',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">About</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I'm a product-minded engineer who enjoys turning complex problems into simple, elegant interfaces. I care about performance, accessibility, and developer experience.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I move quickly but thoughtfully, with strong attention to detail and a bias for action. I love working across the stack and collaborating with design.
            </p>
          </div>
          <div>
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-5">
              <h3 className="font-semibold text-gray-900">Core Skills</h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {skills.map((s) => (
                  <li key={s} className="text-sm text-gray-700 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
