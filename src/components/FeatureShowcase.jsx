import React from 'react'
import { motion } from 'framer-motion'
import { Map, PenLine, Sparkles, CalendarCheck2, HeartHandshake } from 'lucide-react'

const features = [
  {
    icon: PenLine,
    title: 'Daily Journal',
    desc: 'Beautiful, mindful journaling with prompts, mood tagging, and rich media.',
    color: 'from-fuchsia-500/30 to-pink-500/20'
  },
  {
    icon: CalendarCheck2,
    title: 'Habit Tracker',
    desc: 'Build streaks and level up with playful rewards and progress rings.',
    color: 'from-emerald-400/30 to-teal-400/20'
  },
  {
    icon: Map,
    title: 'Journey Map',
    desc: 'Visual timeline of your life events. Add moments, connect memories.',
    color: 'from-indigo-400/30 to-sky-400/20'
  },
  {
    icon: Sparkles,
    title: 'Moments & Emotions',
    desc: 'Capture highlights and reflect with emotional tagging and insights.',
    color: 'from-amber-400/30 to-rose-400/20'
  },
]

export default function FeatureShowcase() {
  return (
    <section id="learn" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(147,51,234,0.08),transparent_60%),radial-gradient(800px_circle_at_80%_30%,rgba(34,197,94,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Everything you need to grow, playfully
        </motion.h2>
        <p className="text-center text-slate-300 mt-3 max-w-3xl mx-auto">MineO blends journaling, habits, and a visual journey into one delightful experience.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc, color }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 hover:shadow-[0_10px_40px_rgba(99,102,241,0.15)]"
            >
              <div className={`absolute -inset-10 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 blur-2xl transition`} />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-emerald-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 text-white font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
