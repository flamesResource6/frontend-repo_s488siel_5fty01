import React from 'react'
import PageShell from '../components/PageShell'
import Hero from '../components/Hero'
import FeatureShowcase from '../components/FeatureShowcase'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <FeatureShowcase />

      <section className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(500px_circle_at_10%_10%,rgba(236,72,153,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-white">Built for the journey</h2>
              <p className="mt-3 text-slate-300">MineO weaves habits, journals, and moments into a cohesive map of your growth. It feels like a game, but the rewards are real.</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {["Daily prompts","Streaks & XP","Smart insights","Private & secure"].map((t, i) => (
                  <div key={t} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-200">{t}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}>
              <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900" />
            </motion.div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
