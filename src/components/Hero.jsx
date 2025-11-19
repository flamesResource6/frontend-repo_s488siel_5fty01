import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              MineO
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-indigo-300 to-emerald-300">Your gamified self-growth universe</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-5 text-lg text-slate-200 max-w-xl"
            >
              Track habits, write daily journals, capture moments, and navigate your life on a living Journey Map. Playfully build the person you want to become.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4"
            >
              <a id="install" href="#download" className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-emerald-400 text-slate-900 font-semibold shadow-[0_8px_40px_rgba(99,102,241,0.35)] hover:scale-[1.02] active:scale-[0.98] transition">
                Install App
              </a>
              <a href="#learn" className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/20 text-white hover:bg-white/10 transition">
                Learn More
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mt-10 flex items-center gap-6 text-slate-300"
            >
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10" />
                ))}
              </div>
              <p className="text-sm">Join thousands building their journey</p>
            </motion.div>
          </div>

          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mx-auto w-[320px] h-[640px] rounded-[2rem] p-3 bg-gradient-to-b from-white/10 to-white/5 border border-white/20 backdrop-blur-md shadow-2xl"
            >
              <div className="w-full h-full rounded-[1.6rem] bg-slate-900/80 border border-white/10 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1480&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                <div className="relative z-10 p-6 space-y-4">
                  <div className="h-3 w-16 rounded-full bg-white/30 mx-auto" />
                  <div className="space-y-3">
                    <div className="h-4 w-2/3 bg-white/10 rounded" />
                    <div className="h-3 w-1/2 bg-white/10 rounded" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-20 rounded-xl bg-white/10 border border-white/10" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  )
}
