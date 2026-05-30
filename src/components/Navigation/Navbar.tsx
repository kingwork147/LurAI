'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollY } from '@/hooks/useScrollY'
import { useTheme } from '@/providers/ThemeProvider'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Process', href: '#process' },
  { label: 'Founder', href: '#founder' },
]

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function Navbar() {
  const scrollY = useScrollY()
  const scrolled = scrollY > 60
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="max-w-7xl mx-auto mt-4 flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500"
          style={{
            background: scrolled
              ? isDark ? 'rgba(7,26,46,0.95)' : 'rgba(250,250,248,0.92)'
              : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            border: scrolled
              ? isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.09)'
              : '1px solid transparent',
            boxShadow: scrolled
              ? isDark ? '0 8px 40px rgba(0,0,0,0.4)' : '0 8px 40px rgba(0,0,0,0.08)'
              : 'none',
          }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-7 h-7">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00C853] to-[#5EF38C] opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-[2px] rounded-md bg-lur-black" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="2.5" fill="url(#lg)" />
                  <circle cx="2" cy="4" r="1.2" fill="rgba(0,200,83,0.7)" />
                  <circle cx="12" cy="4" r="1.2" fill="rgba(94,243,140,0.7)" />
                  <circle cx="2" cy="10" r="1.2" fill="rgba(94,243,140,0.7)" />
                  <circle cx="12" cy="10" r="1.2" fill="rgba(0,200,83,0.7)" />
                  <line x1="3.2" y1="4" x2="5.5" y2="6" stroke="rgba(0,200,83,0.4)" strokeWidth="0.8" />
                  <line x1="10.8" y1="4" x2="8.5" y2="6" stroke="rgba(94,243,140,0.4)" strokeWidth="0.8" />
                  <line x1="3.2" y1="10" x2="5.5" y2="8" stroke="rgba(94,243,140,0.4)" strokeWidth="0.8" />
                  <line x1="10.8" y1="10" x2="8.5" y2="8" stroke="rgba(0,200,83,0.4)" strokeWidth="0.8" />
                  <defs>
                    <linearGradient id="lg" x1="0" y1="0" x2="14" y2="14" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00C853" />
                      <stop offset="1" stopColor="#5EF38C" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white">
              Lur <span className="text-gradient">AI</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg"
                style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(17,17,17,0.55)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300"
              style={{
                background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.10)',
                color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(17,17,17,0.55)',
              }}
              whileTap={{ scale: 0.94 }}
              aria-label="Toggle theme"
            >
              <motion.span
                key={theme}
                initial={{ rotate: -30, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </motion.span>
              <span>{isDark ? 'Light' : 'Dark'}</span>
            </motion.button>

            <a href="#" className="text-sm font-medium transition-colors duration-200"
              style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(17,17,17,0.55)' }}>
              Sign in
            </a>
            <a
              href="#cta"
              className="btn-primary text-sm font-medium text-white px-5 py-2.5"
            >
              Get Early Access
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-0.5 transition-transform duration-300 origin-center"
              style={{
                background: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(17,17,17,0.7)',
                transform: menuOpen ? 'rotate(45deg) translateY(4px)' : 'none',
              }}
            />
            <span
              className="block w-5 h-0.5 transition-opacity duration-300"
              style={{
                background: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(17,17,17,0.7)',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-0.5 transition-transform duration-300 origin-center"
              style={{
                background: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(17,17,17,0.7)',
                transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
              }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              backdropFilter: 'blur(40px)',
              background: isDark ? 'rgba(7,26,46,0.98)' : 'rgba(250,250,248,0.98)',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="font-display text-3xl font-semibold transition-colors"
                style={{ color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(17,17,17,0.85)' }}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 + 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                background: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.05)',
                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.10)',
                color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(17,17,17,0.55)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
              <span>Switch to {isDark ? 'Light' : 'Dark'} mode</span>
            </motion.button>
            <motion.a
              href="#cta"
              className="btn-primary text-base font-medium text-white px-8 py-3.5 mt-2"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
            >
              Get Early Access
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
