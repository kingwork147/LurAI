'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        y: 50, opacity: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* Big gradient orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(0,212,255,0.10) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <div className="cta-content">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-6 bg-[#00D4FF]/40" />
            <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#00D4FF]/70">
              Get started
            </span>
            <div className="h-px w-6 bg-[#00D4FF]/40" />
          </div>

          {/* Heading */}
          <h2
            className="font-display font-extrabold text-white tracking-tight mb-5 leading-tight"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
          >
            Ready to build your
            <br />
            <span className="text-gradient">revenue machine?</span>
          </h2>

          <p className="font-sans text-base md:text-lg text-white/45 leading-relaxed max-w-xl mx-auto mb-10">
            Book a free strategy audit. We&apos;ll analyze your pipeline and show you
            exactly how AI can grow your revenue — no obligation, no fluff.
          </p>

          {/* Form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            >
              <div
                className="flex-1 w-full relative"
                style={{
                  filter: focused ? 'drop-shadow(0 0 12px rgba(0,212,255,0.25))' : 'none',
                  transition: 'filter 0.3s ease',
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#00D4FF]/50 transition-colors duration-300"
                />
              </div>
              <motion.button
                type="submit"
                className="btn-primary px-6 py-3.5 text-sm font-semibold text-white whitespace-nowrap w-full sm:w-auto"
                whileTap={{ scale: 0.97 }}
              >
                Book Free Audit
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-display font-semibold text-white text-lg">Audit request received.</p>
              <p className="font-sans text-sm text-white/40">
                We&apos;ll reach out to <span className="text-[#00D4FF]/70">{email}</span> within 24 hours.
              </p>
            </motion.div>
          )}

          {!submitted && (
            <p className="mt-4 font-sans text-xs text-white/25">
              Free audit · No credit card required · Results in 30 days
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
