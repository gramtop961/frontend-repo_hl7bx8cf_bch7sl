import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-black/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-xl">SE<span className="text-indigo-600">.</span></a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition-colors">
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-gray-200 dark:bg-white/20" />
            <a href="mailto:you@example.com" className="p-2 rounded hover:bg-gray-100 dark:hover:bg-white/10" aria-label="Email"><Mail size={18} /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-gray-100 dark:hover:bg-white/10" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-gray-100 dark:hover:bg-white/10" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </nav>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 dark:hover:bg-white/10" aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-white/10">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <a href="mailto:you@example.com" className="p-2 rounded hover:bg-gray-100 dark:hover:bg-white/10" aria-label="Email"><Mail size={18} /></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-gray-100 dark:hover:bg-white/10" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-gray-100 dark:hover:bg-white/10" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
