'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Principle card icons ───────────────────────────────── */

function IconTransparency({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <ellipse cx="10" cy="10" rx="8" ry="5.5" stroke={color} strokeWidth="1.3" opacity="0.65" />
      <circle cx="10" cy="10" r="2.5" fill={color} opacity="0.8" />
      <circle cx="10" cy="10" r="1" fill="white" opacity="0.55" />
      <line x1="1" y1="10" x2="3.5" y2="10" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <line x1="16.5" y1="10" x2="19" y2="10" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
    </svg>
  )
}

function IconPersonal({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="7" r="3.5" stroke={color} strokeWidth="1.3" opacity="0.7" />
      <path d="M3 18c0-3.9 3.1-6.5 7-6.5s7 2.6 7 6.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
      <circle cx="16" cy="5.5" r="2.5" fill={color} opacity="0.12" stroke={color} strokeWidth="0.8" />
      <polyline points="14.8,5.5 16,6.7 17.8,4.2" stroke={color} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
    </svg>
  )
}

function IconImprove({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M17 10a7 7 0 1 1-1.5-4.3" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
      <polyline points="13,3.5 15.5,5.7 13.5,8" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      <polyline points="7,10 9.5,12.5 13.5,8" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
    </svg>
  )
}

/* ── LinkedIn icon ──────────────────────────────────────── */

function IconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

/* ── Data ───────────────────────────────────────────────── */

const principles = [
  {
    Icon: IconTransparency,
    title: 'Transparency',
    description: 'Clear communication, honest expectations, and measurable progress.',
    color: '#00C853',
  },
  {
    Icon: IconPersonal,
    title: 'Personal Attention',
    description: 'Every project receives direct founder involvement from strategy to execution.',
    color: '#5EF38C',
  },
  {
    Icon: IconImprove,
    title: 'Continuous Improvement',
    description: 'Campaigns are constantly refined to improve performance and create better opportunities.',
    color: '#00C853',
  },
]

const storyParagraphs = [
  "Like many business owners, I saw how difficult it was to consistently generate new opportunities. Some months were busy, while others depended entirely on referrals, networking, or chance.",
  "I started Lur AI to solve that problem.",
  "My goal is simple: help businesses create a repeatable system for finding the right prospects, starting meaningful conversations, and generating qualified opportunities.",
  "Rather than acting like a traditional agency, I work directly with every client to understand their goals, identify growth opportunities, and build lead generation systems tailored to their business.",
]

const storyClosing = [
  "No unnecessary complexity.",
  "No generic marketing packages.",
  "Just focused execution designed to help businesses grow.",
]

/* ── Component ──────────────────────────────────────────── */

export default function FounderSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fo-eyebrow', {
        y: 30, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.fo-eyebrow', start: 'top 82%' },
      })
      gsap.from('.fo-left', {
        x: -36, opacity: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.fo-left', start: 'top 80%' },
      })
      gsap.from('.fo-heading', {
        y: 32, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.fo-heading', start: 'top 82%' },
      })
      gsap.from('.fo-para', {
        y: 24, opacity: 0, duration: 0.75, ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.fo-story', start: 'top 78%' },
      })
      gsap.from('.fo-principle', {
        y: 28, opacity: 0, duration: 0.7, ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.fo-principles', start: 'top 82%' },
      })
      gsap.from('.fo-promise', {
        y: 36, opacity: 0, duration: 1, ease: 'power3.out',
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
          background: 'radial-gradient(ellipse, rgba(0,200,83,0.07) 0%, rgba(0,200,83,0.04) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ── Eyebrow + subtitle ──────────────────────────────── */}
        <div className="fo-eyebrow text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-6 bg-[#00C853]/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00C853]/70">
              The Founder
            </span>
            <div className="h-px w-6 bg-[#00C853]/40" />
          </div>
          <h2
            className="font-display font-extrabold tracking-tight leading-[1.08] text-white mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', textWrap: 'balance' } as React.CSSProperties}
          >
            Meet The <span className="text-gradient">Founder</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-white/42 max-w-xl mx-auto leading-relaxed">
            Lur AI was built with a simple belief — growing a business shouldn&apos;t depend on luck,
            referrals, or expensive sales teams.
          </p>
        </div>

        {/* ── Two-column layout ────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-16 xl:gap-20 items-start">

          {/* ── Left: Identity card ─────────────────────────── */}
          <div className="fo-left flex flex-col items-center lg:items-start gap-0">
            <div className="glass-premium rounded-3xl p-8 w-full flex flex-col items-center lg:items-start gap-6 relative overflow-hidden">
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,83,0.5) 40%, rgba(94,243,140,0.3) 60%, transparent)' }}
              />
              {/* Inner glow */}
              <div
                className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,200,83,0.05) 0%, transparent 100%)' }}
              />

              {/* Photo */}
              <div className="relative">
                <div
                  className="relative"
                  style={{
                    padding: '3px',
                    borderRadius: '9999px',
                    background: 'linear-gradient(135deg, #00C853, #5EF38C, #00C853)',
                    boxShadow: '0 0 48px rgba(0,200,83,0.4), 0 0 100px rgba(94,243,140,0.18)',
                  }}
                >
                  <div className="relative w-44 h-44 rounded-full overflow-hidden">
                    <Image
                      src="/founder.jpg"
                      alt="Raj Prabhu Rajasekaran — Founder, Lur AI"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* Online indicator */}
                <span
                  className="absolute bottom-2 right-2 w-4 h-4 rounded-full border-2"
                  style={{
                    background: '#00C853',
                    borderColor: '#0a1628',
                    boxShadow: '0 0 8px rgba(0,200,83,0.9)',
                  }}
                />
              </div>

              {/* Name + title */}
              <div className="text-center lg:text-left">
                <div className="font-display font-bold text-xl text-white leading-tight">
                  Raj Prabhu Rajasekaran
                </div>
                <div className="font-sans text-sm text-white/42 mt-1">
                  Founder &amp; CEO · Lur AI
                </div>

                {/* Location badge */}
                <div className="mt-3 inline-flex items-center gap-1.5">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#00C853', boxShadow: '0 0 5px rgba(0,200,83,0.8)' }}
                  />
                  <span
                    className="font-mono text-[10px] tracking-widest text-[#00C853]/55"
                  >
                    Tamil Nadu, India
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />

              {/* Action buttons */}
              <div className="w-full flex flex-col gap-2.5">
                <a
                  href="https://linkedin.com/in/rajprabhu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-sans font-semibold text-sm transition-all duration-200"
                  style={{
                    color: 'rgba(255,255,255,0.75)',
                    background: 'rgba(10,102,194,0.12)',
                    border: '1px solid rgba(10,102,194,0.28)',
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(10,102,194,0.22)'
                    ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(10,102,194,0.48)'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.95)'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(10,102,194,0.12)'
                    ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(10,102,194,0.28)'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.75)'
                  }}
                >
                  <span style={{ color: '#0A66C2' }}><IconLinkedIn /></span>
                  Connect on LinkedIn
                </a>
                <a href="#cta" className="btn-primary w-full text-center">
                  Book a Free Call
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: Story + principles + promise ─────────── */}
          <div className="flex flex-col gap-10">

            {/* Heading */}
            <div className="fo-heading">
              <h3
                className="font-display font-extrabold text-white leading-[1.1] tracking-tight"
                style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', textWrap: 'balance' } as React.CSSProperties}
              >
                Helping Businesses Build{' '}
                <span className="text-gradient">Predictable Growth Systems</span>
              </h3>
            </div>

            {/* Story */}
            <div className="fo-story space-y-4">
              <p className="fo-para font-sans text-sm md:text-[15px] text-[#00C853] font-semibold leading-relaxed">
                Hi, I&apos;m Raj Prabhu, the founder of Lur AI.
              </p>
              {storyParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="fo-para font-sans text-sm md:text-[15px] text-white/58 leading-relaxed"
                >
                  {para}
                </p>
              ))}

              {/* Closing emphasis lines */}
              <div className="fo-para pl-5" style={{ borderLeft: '2px solid rgba(0,200,83,0.45)' }}>
                {storyClosing.map((line, i) => (
                  <p
                    key={i}
                    className="font-display font-semibold text-white/80 leading-snug"
                    style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)', marginBottom: i < storyClosing.length - 1 ? '0.3rem' : 0 }}
                  >
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
                  className="fo-principle glass-premium rounded-2xl p-5 relative overflow-hidden group"
                  whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                >
                  {/* Accent top line — hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: `linear-gradient(90deg, transparent, ${p.color}55, transparent)` }}
                  />

                  {/* Icon */}
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center mb-3.5"
                    style={{
                      background: `${p.color}0D`,
                      border: `1px solid ${p.color}20`,
                    }}
                  >
                    <p.Icon color={p.color} />
                  </div>

                  <div className="font-display font-semibold text-[13px] text-white leading-snug mb-1.5">
                    {p.title}
                  </div>
                  <div className="font-sans text-[11px] text-white/45 leading-relaxed">
                    {p.description}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Personal promise banner */}
            <div className="fo-promise relative glass-premium rounded-2xl overflow-hidden">
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{ background: 'linear-gradient(180deg, transparent, #00C853 30%, #5EF38C 70%, transparent)' }}
              />
              {/* Inner glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 60% 100% at 0% 50%, rgba(0,200,83,0.06) 0%, transparent 70%)' }}
              />
              {/* Top line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,83,0.45) 40%, rgba(94,243,140,0.25) 60%, transparent)' }}
              />

              <div className="relative px-7 md:px-9 py-7 md:py-8 flex flex-col sm:flex-row sm:items-end gap-6">
                {/* Promise copy */}
                <div className="flex-1">
                  <p
                    className="font-display font-bold text-white/92 leading-snug mb-2"
                    style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', textWrap: 'balance' } as React.CSSProperties}
                  >
                    When You Work With Lur AI, You Work{' '}
                    <span className="text-gradient">Directly With Me.</span>
                  </p>
                  <p className="font-sans text-xs md:text-sm text-white/42 leading-relaxed max-w-md">
                    No account managers. No outsourced communication. No layers of management. Just
                    direct collaboration focused on helping your business grow.
                  </p>
                </div>

                {/* Signature */}
                <div className="flex-shrink-0 text-right sm:text-right">
                  <div
                    className="font-serif italic text-white/80 mb-0.5"
                    style={{
                      fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
                      fontFamily: "'Georgia', 'Times New Roman', serif",
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Raj Prabhu
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.25em] text-[#00C853]/60 uppercase">
                    Founder, Lur AI
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
