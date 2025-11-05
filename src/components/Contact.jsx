import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! I will reply shortly.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Contact</h2>
          <p className="mt-3 text-gray-600">Have a project in mind or just want to say hi? Let's talk.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700"><Mail /></span>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <a href="mailto:you@example.com" className="font-medium text-gray-900">you@example.com</a>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">Open to freelance and full-time opportunities.</p>
          </div>
          <form onSubmit={onSubmit} className="md:col-span-2 rounded-xl border border-gray-200 bg-white shadow-sm p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Name</label>
                <input required name="name" className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input required type="email" name="email" className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-600 mb-1">Message</label>
              <textarea required name="message" rows="4" className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-2.5 text-white font-medium shadow hover:bg-indigo-500 transition">
                Send <Send className="ml-2 h-4 w-4" />
              </button>
              <span className="text-sm text-emerald-600">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
