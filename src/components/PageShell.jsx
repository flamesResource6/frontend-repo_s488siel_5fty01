import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={typeof window !== 'undefined' ? window.location.pathname : 'page'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="pt-16"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <footer className="relative mt-24 border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(500px_circle_at_70%_0%,rgba(99,102,241,0.15),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-lg font-semibold">MineO</h3>
            <p className="text-slate-400 mt-1">A gamified self-growth and journaling universe.</p>
          </div>
          <div className="md:text-right">
            <a href="#install" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-emerald-400 text-slate-900 font-semibold shadow-[0_8px_30px_rgba(16,185,129,0.35)]">Install App</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
