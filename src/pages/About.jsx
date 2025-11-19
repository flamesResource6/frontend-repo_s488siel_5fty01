import React from 'react'
import PageShell from '../components/PageShell'
import { motion } from 'framer-motion'

const team = [
  { name: 'Ari', role: 'Product & Experience', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Jae', role: 'Design & Motion', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Remy', role: 'Engineering', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop' },
]

export default function About() {
  return (
    <PageShell>
      <section className="relative pt-24 pb-12">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_0%,rgba(236,72,153,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold">About MineO</motion.h1>
          <p className="text-slate-300 mt-3 max-w-2xl">Were building a warm, futuristic space for personal growthblending journaling, habits, and delightful animation into an uplifting daily ritual.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg">
                <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${m.img})` }} />
                <div className="p-5">
                  <h3 className="font-semibold group-hover:text-white/90 transition">{m.name}</h3>
                  <p className="text-slate-400 text-sm">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Our Mission</h3>
            <p className="text-slate-300 mt-2">Help people visualize growth as a playful, living journeynot a checklistand to celebrate every small win along the way.</p>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
