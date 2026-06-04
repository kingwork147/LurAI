'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function IconLinkedIn() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconTransparency() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <ellipse cx="10" cy="10" rx="8" ry="5.5" stroke="#00C853" strokeWidth="1.3" opacity="0.65" />
      <circle cx="10" cy="10" r="2.5" fill="#00C853" opacity="0.8" />
      <circle cx="10" cy="10" r="1" fill="white" opacity="0.55" />
    </svg>
  )
}

function IconPersonal() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="7" r="3.5" stroke="#5EF38C" strokeWidth="1.3" opacity="0.7" />
      <path d="M3 18c0-3.9 3.1-6.5 7-6.5s7 2.6 7 6.5" stroke="#5EF38C" strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
    </svg>
  )
}

function IconImprove() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M17 10a7 7 0 1 1-1.5-4.3" stroke="#00C853" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
      <polyline points="7,10 9.5,12.5 13.5,8" stroke="#00C853" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
    </svg>
  )
}

const principles = [
  { Icon: IconTransparency, title: 'Transparency',           desc: 'Clear communication and honest expectations.',              color: '#00C853' },
  { Icon: IconPersonal,     title: 'Personal Attention',     desc: 'Direct founder involvement from strategy to execution.',    color: '#5EF38C' },
  { Icon: IconImprove,      title: 'Continuous Improvement', desc: 'Campaigns refined constantly for better performance.',      color: '#00C853' },
]

export default function FounderSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fo-eyebrow', {
        y: 28, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.fo-eyebrow', start: 'top 85%' },
      })
      gsap.from('.fo-photo', {
        x: -40, opacity: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.fo-photo', start: 'top 78%' },
      })
      gsap.from('.fo-quote', {
        y: 32, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.fo-quote', start: 'top 80%' },
      })
      gsap.from('.fo-para', {
        y: 20, opacity: 0, duration: 0.7, ease: 'power2.out',
        stagger: 0.09,
        scrollTrigger: { trigger: '.fo-story', start: 'top 78%' },
      })
      gsap.from('.fo-principle', {
        y: 24, opacity: 0, duration: 0.65, ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.fo-principles', start: 'top 82%' },
      })
      gsap.from('.fo-promise', {
        y: 32, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.fo-promise', start: 'top 82%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="founder" className="relative py-32 md:py-44 overflow-hidden">

      {/* Backgrounds */}
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,200,83,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Eyebrow + headline */}
        <div className="fo-eyebrow text-center mb-14 md:mb-18">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-6 bg-[#00C853]/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00C853]/70">The Founder</span>
            <div className="h-px w-6 bg-[#00C853]/40" />
          </div>
          <h2
            className="font-display font-extrabold tracking-tight leading-[1.08] text-white"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', textWrap: 'balance' } as React.CSSProperties}
          >
            Meet <span className="text-gradient">Raj Prabhu</span>
          </h2>
        </div>

        {/* Main two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-14 items-start mb-10">

          {/* ── Left: Portrait card ─────────────────────────── */}
          <div className="fo-photo">
            <div className="relative rounded-3xl overflow-hidden" style={{ height: '460px' }}>
              <Image
                src="/founder.jpg"
                alt="Raj Prabhu Rajasekaran — Founder, Lur AI"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(5,18,35,0.96) 0%, rgba(5,18,35,0.5) 38%, transparent 62%)' }}
              />

              {/* Available badge — top right */}
              <div
                className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(0,200,83,0.15)', border: '1px solid rgba(0,200,83,0.3)', backdropFilter: 'blur(8px)' }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#00C853]"
                  style={{ boxShadow: '0 0 6px rgba(0,200,83,0.9)', animation: 'pulse 2s infinite' }}
                />
                <span className="font-mono text-[10px] text-[#00C853] tracking-widest">Available</span>
              </div>

              {/* Name + actions overlay — bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="font-display font-bold text-white text-lg leading-tight">
                  Raj Prabhu Rajasekaran
                </div>
                <div className="font-sans text-sm text-white/50 mt-0.5">
                  Founder &amp; CEO · Lur AI
                </div>
                <div className="flex items-center gap-1.5 mt-2.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#00C853', boxShadow: '0 0 5px rgba(0,200,83,0.8)' }}
                  />
                  <span className="font-mono text-[10px] tracking-widest text-[#00C853]/55">Tamil Nadu, India</span>
                </div>

                <div className="flex items-center gap-2.5 mt-5">
                  <a
                    href="https://linkedin.com/in/rajprabhu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-sans font-medium text-xs transition-all duration-200"
                    style={{
                      background: 'rgba(10,102,194,0.18)',
                      border: '1px solid rgba(10,102,194,0.35)',
                      color: '#7ab8f5',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <IconLinkedIn />
                    LinkedIn
                  </a>
                  <a
                    href="#cta"
                    className="btn-primary text-xs px-4 py-2.5 flex-1 text-center"
                  >
                    Book a Free Call
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Content ──────────────────────────────── */}
          <div className="flex flex-col gap-8">

            {/* Pull quote */}
            <div className="fo-quote relative pl-6" style={{ borderLeft: '3px solid rgba(0,200,83,0.5)' }}>
              <div
                className="absolute -top-3 -left-1 font-serif text-7xl leading-none text-[#00C853]/15 select-none pointer-events-none"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                &ldquo;
              </div>
              <p
                className="font-display font-semibold text-white/88 leading-snug relative z-10"
                style={{ fontSize: 'clamp(1.15rem, 2vw, 1.45rem)', textWrap: 'balance' } as React.CSSProperties}
              >
                I started Lur AI to help businesses build a repeatable system for finding the right prospects and generating qualified opportunities — without depending on luck or referrals.
              </p>
              <div className="mt-3 font-mono text-[10px] tracking-widest text-[#00C853]/50 uppercase">
                — Raj Prabhu, Founder
              </div>
            </div>

            {/* Story */}
            <div className="fo-story space-y-3.5">
              <p className="fo-para font-sans text-sm md:text-[15px] text-white/55 leading-relaxed">
                Like many business owners, I saw how difficult it was to consistently generate new opportunities. Some months were busy, while others depended entirely on referrals, networking, or chance.
              </p>
              <p className="fo-para font-sans text-sm md:text-[15px] text-white/55 leading-relaxed">
                Rather than acting like a traditional agency, I work directly with every client to understand their goals, identify growth opportunities, and build lead generation systems tailored to their business.
              </p>
              <div
                className="fo-para rounded-2xl px-6 py-5 space-y-1.5"
                style={{ background: 'rgba(0,200,83,0.04)', border: '1px solid rgba(0,200,83,0.12)' }}
              >
                {['No unnecessary complexity.', 'No generic marketing packages.', 'Just focused execution designed to help businesses grow.'].map((line, i) => (
                  <p key={i} className="font-display font-semibold text-white/80 text-sm md:text-base leading-snug">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Principle cards */}
            <div className="fo-principles grid grid-cols-1 sm:grid-cols-3 gap-3">
              {principles.map((p) => (
                <motion.div
                  key={p.title}
                  className="fo-principle rounded-2xl p-5 relative overflow-hidden group cursor-default"
                  style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)' }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${p.color}66, transparent)` }}
                  />
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${p.color}12`, border: `1px solid ${p.color}22` }}
                  >
                    <p.Icon />
                  </div>
                  <div className="font-display font-semibold text-[13px] text-white leading-snug mb-1">
                    {p.title}
                  </div>
                  <div className="font-sans text-[11px] text-white/42 leading-relaxed">
                    {p.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Promise banner — full width */}
        <div
          className="fo-promise relative rounded-2xl overflow-hidden"
          style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)' }}
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px]"
            style={{ background: 'linear-gradient(180deg, transparent, #00C853 30%, #5EF38C 70%, transparent)' }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 50% 100% at 0% 50%, rgba(0,200,83,0.05) 0%, transparent 70%)' }}
          />
          <div className="relative px-8 md:px-10 py-7 md:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p
                className="font-display font-bold text-white/92 leading-snug mb-1.5"
                style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', textWrap: 'balance' } as React.CSSProperties}
              >
                When You Work With Lur AI, You Work{' '}
                <span className="text-gradient">Directly With Me.</span>
              </p>
              <p className="font-sans text-sm text-white/40 leading-relaxed max-w-lg">
                No account managers. No outsourced communication. Just direct collaboration focused on helping your business grow.
              </p>
            </div>
            <div className="flex-shrink-0 text-right">
              <div
                className="font-serif italic text-white/75"
                style={{ fontSize: 'clamp(1.3rem, 2vw, 1.7rem)', fontFamily: 'Georgia, serif', letterSpacing: '-0.01em' }}
              >
                Raj Prabhu
              </div>
              <div className="font-mono text-[10px] tracking-[0.25em] text-[#00C853]/55 uppercase mt-0.5">
                Founder, Lur AI
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
