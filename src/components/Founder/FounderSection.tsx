'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const principles = [
  'AI-First, Always',
  'Client Revenue Above All',
  'Built in India, For the World',
]

export default function FounderSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.founder-headline', {
        y: 50, opacity: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.founder-headline', start: 'top 80%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="founder" className="relative py-32 md:py-44 overflow-hidden">
      {/* Background orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(0,200,83,0.10) 0%, rgba(0,200,83,0.06) 45%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* ── Motto block ─────────────────────────────────────── */}
        <div className="founder-headline text-center mb-14 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-6 bg-[#00C853]/40" />
            <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#00C853]/70">
              The Foundation
            </span>
            <div className="h-px w-6 bg-[#00C853]/40" />
          </div>

          <h2
            className="font-display font-extrabold tracking-tight leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)' }}
          >
            <span className="text-gradient">Lur</span>
            <span className="text-white"> means money in —</span>
            <br />
            <span className="text-white">for the client.</span>{' '}
            <span className="text-gradient">No matter what.</span>
          </h2>

          <p className="font-sans text-base md:text-lg text-white/45 max-w-xl mx-auto leading-relaxed">
            Not a tagline. A covenant. Every system we ship exists for one purpose:
            to drive revenue into your business — full stop.
          </p>
        </div>

        {/* ── Founder card ────────────────────────────────────── */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-premium rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Accent top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C853]/60 to-transparent" />

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">

              {/* Avatar */}
              <div className="shrink-0 flex flex-col items-center gap-3">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center font-display font-extrabold text-lg text-white select-none"
                  style={{
                    background: 'linear-gradient(135deg, #00C853 0%, #5EF38C 100%)',
                    boxShadow:
                      '0 0 40px rgba(0,200,83,0.28), 0 0 80px rgba(94,243,140,0.18), inset 0 1px 0 rgba(255,255,255,0.2)',
                  }}
                >
                  RPR
                </div>
                <div className="hidden md:flex flex-col items-center gap-1">
                  <div className="w-px h-16 bg-gradient-to-b from-[#00C853]/40 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">

                {/* Name + title */}
                <div className="mb-6">
                  <div className="font-display font-bold text-xl text-white leading-snug">
                    Raj Prabhu Rajasekaran
                  </div>
                  <div className="font-sans text-sm text-white/40 mt-0.5">Founder &amp; CEO · Lur AI</div>
                  <div className="mt-3">
                    <span
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase rounded-full px-3 py-1"
                      style={{
                        color: 'rgba(0,200,83,0.65)',
                        background: 'rgba(0,200,83,0.07)',
                        border: '1px solid rgba(0,200,83,0.15)',
                      }}
                    >
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full"
                        style={{ background: '#00C853', boxShadow: '0 0 6px rgba(0,200,83,0.8)' }}
                      />
                      Agarathirunalur, Thiruvarur · Tamil Nadu, India
                    </span>
                  </div>
                </div>

                {/* Core principle quote */}
                <blockquote
                  className="relative pl-5 mb-6"
                  style={{ borderLeft: '2px solid rgba(0,200,83,0.55)' }}
                >
                  <p
                    className="font-display font-semibold text-white/80 leading-snug italic"
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
                  >
                    &ldquo;Even from a remote village in Agarathirunalur, Thiruvarur — you can build a company that changes the world. Geography is not destiny. Execution is.&rdquo;
                  </p>
                </blockquote>

                {/* Bio */}
                <p className="font-sans text-sm text-white/45 leading-relaxed mb-6">
                  Lur AI was born from a simple but radical belief: that world-class revenue infrastructure
                  shouldn&apos;t be locked behind Silicon Valley geography or venture capital. Built out of Tamil Nadu,
                  we design AI systems that make the playing field irrelevant — what matters is the result:
                  revenue in your pipeline, and growth you can measure.
                </p>

                {/* Principle chips */}
                <div className="flex flex-wrap gap-2">
                  {principles.map((p) => (
                    <span
                      key={p}
                      className="font-sans text-xs text-white/35 rounded-full px-3 py-1"
                      style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Motto stamp ─────────────────────────────────────── */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="font-mono text-[11px] tracking-[0.4em] uppercase text-white/18">
            Lur &nbsp;·&nbsp; Revenue In &nbsp;·&nbsp; No Matter What
          </p>
        </motion.div>
      </div>
    </section>
  )
}
