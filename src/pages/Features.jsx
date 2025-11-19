import React from 'react'
import PageShell from '../components/PageShell'
import { motion } from 'framer-motion'
import { Map, PenLine, CalendarCheck2, Sparkles, Filter, Search } from 'lucide-react'

const blocks = [
  { icon: PenLine, title: 'Daily Journal', points: ['Prompts & templates', 'Mood tagging', 'Rich media support', 'Private by default'] },
  { icon: CalendarCheck2, title: 'Habit Tracker', points: ['Streaks & goals', 'Gamified XP', 'Progress rings', 'Reminders'] },
  { icon: Map, title: 'Journey Map', points: ['Timeline view', 'Connect moments', 'Milestones', 'Animated map'] },
  { icon: Sparkles, title: 'Moments & Emotions', points: ['Emotion tagging', 'Reflection cues', 'Collections', 'Shareable visuals'] },
]

export default function Features() {
  return (
    <PageShell>
      <section className="relative pt-24 pb-12">
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_0%,rgba(34,197,94,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold">Features</motion.h1>
          <p className="text-slate-300 mt-3 max-w-2xl">A closer look at everything that makes MineO your favorite growth companion.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {blocks.map(({ icon: Icon, title, points }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center"><Icon className="w-5 h-5 text-emerald-300" /></div>
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-slate-300 text-sm">
                  {points.map(p => (<li key={p} className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">{p}</li>))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {["Daily Journal","Habit Tracker","Journey Map"].map((t, i) => (
              <motion.div key={t} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }} className="rounded-2xl overflow-hidden border border-white/10">
                <div className="h-56 bg-gradient-to-br from-slate-800 to-slate-900" />
                <div className="p-5">
                  <h4 className="font-semibold">{t}</h4>
                  <p className="text-slate-300 text-sm mt-1">Interactive preview showing how it feels in the app.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
