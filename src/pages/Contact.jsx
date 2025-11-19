import React from 'react'
import PageShell from '../components/PageShell'
import { motion } from 'framer-motion'

const faqs = [
  { q: 'Is my data private?', a: 'Absolutely. Everything remains on your device unless you choose to sync.' },
  { q: 'Is there a free version?', a: 'Yes, with optional premium for advanced features.' },
  { q: 'Which platforms are supported?', a: 'iOS and Android at launch.' },
]

export default function Contact() {
  return (
    <PageShell>
      <section className="relative pt-24 pb-12">
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_10%_0%,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold">Contact</motion.h1>
          <p className="text-slate-300 mt-3 max-w-2xl">Have a question or want to say hi? Were all ears.</p>

          <div className="mt-10 grid lg:grid-cols-2 gap-8">
            <motion.form initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-300">Name</label>
                  <input className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm text-slate-300">Email</label>
                  <input type="email" className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="you@domain.com" />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm text-slate-300">Message</label>
                <textarea rows={5} className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Tell us anything..." />
              </div>
              <button type="button" className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-emerald-400 text-slate-900 font-semibold">Send</button>
            </motion.form>

            <div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-semibold">FAQs</h3>
                <div className="mt-4 space-y-4">
                  {faqs.map((f) => (
                    <details key={f.q} className="group rounded-xl border border-white/10 bg-white/5 p-4">
                      <summary className="cursor-pointer font-medium text-white/90">{f.q}</summary>
                      <p className="mt-2 text-sm text-slate-300">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
