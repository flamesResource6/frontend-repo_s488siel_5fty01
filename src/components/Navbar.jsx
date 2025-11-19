import React, { useEffect, useState } from 'react'
import { Menu, X, Download, Sparkles } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-tr from-fuchsia-500/40 via-blue-500/30 to-emerald-400/30 blur-sm opacity-0 group-hover:opacity-100 transition" />
              <div className="relative w-9 h-9 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-300" />
              </div>
            </div>
            <span className="text-white font-semibold tracking-tight">MineO</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `text-sm transition-colors ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a
              href="#install"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-emerald-400 text-slate-900 font-semibold shadow-[0_8px_30px_rgba(16,185,129,0.35)] hover:scale-[1.02] active:scale-[0.98] transition"
            >
              <Download className="w-4 h-4" /> Install App
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block px-3 py-2 rounded-lg ${isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="#install"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-emerald-400 text-slate-900 font-semibold text-center"
            >
              <Download className="inline w-4 h-4 mr-1" /> Install App
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
