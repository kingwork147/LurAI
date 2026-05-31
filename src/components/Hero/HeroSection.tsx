'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'

/* ── Cycling booked call notifications ─────────────────────── */
const BOOKED_CALLS = [
  { name: 'Marcus T.',  company: 'SaaS Startup',    time: '2 min ago'  },
  { name: 'Priya K.',   company: 'Growth Agency',   time: '8 min ago'  },
  { name: 'James W.',   company: 'B2B Software',    time: '15 min ago' },
  { name: 'Sofia R.',   company: 'Consulting Firm', time: '24 min ago' },
  { name: 'Daniel L.',  company: 'E-commerce Co.',  time: '32 min ago' },
]

function BookedCallCard() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % BOOKED_CALLS.length), 3200)
    return () => clearInterval(t)
  }, [])

  const call = BOOKED_CALLS[idx]

  return (
    <div className="glass-premium rounded-2xl p-4 min-w-[210px]">
      <div className="flex items-center gap-2 mb-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span className="text-[9px] font-mono uppercase tracking-widest text-white/35">Strategy Call Booked</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-display font-extrabold text-lg text-white leading-tight">{call.name}</div>
          <div className="text-xs font-medium text-white/55 mt-0.5">{call.company}</div>
          <div className="mt-2.5">
            <span className="text-[9px] bg-[#00C853]/10 border border-[#00C853]/15 text-[#00C853] px-2.5 py-0.5 rounded-full font-mono uppercase tracking-wider">
              {call.time}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/* ── Floating wrapper ───────────────────────────────────────── */
function FloatCard({
  children,
  className,
  delay = 0,
  offsetY = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  offsetY?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: [0, offsetY, 0] }}
        transition={{ duration: 6 + delay, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

/* ── Upward-trending sparkline ──────────────────────────────── */
function Sparkline({ color }: { color: string }) {
  const pts = [0, 4, 10, 8, 18, 12, 26, 18, 34, 24, 44, 32, 54, 42, 66, 52, 80, 62, 100, 75]
  let path = `M ${pts[0]} ${60 - pts[1]}`
  for (let i = 2; i < pts.length; i += 2) {
    path += ` L ${pts[i]} ${60 - pts[i + 1]}`
  }
  return (
    <svg width="100" height="40" viewBox="0 0 100 60" fill="none">
      <path d={path} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`${path} L 100 60 L 0 60 Z`} fill={`url(#sg-${color.replace('#', '')})`} />
      <defs>
        <linearGradient id={`sg-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor={color} stopOpacity="0.3" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ── Achievement cards data ─────────────────────────────────── */
const ACHIEVEMENTS = [
  {
    icon: '📈',
    title: 'More Qualified Leads',
    desc: 'Reach decision-makers that match your ideal customer profile.',
  },
  {
    icon: '🎯',
    title: 'Better Prospect Targeting',
    desc: 'Identify high-intent prospects using intelligent research and data.',
  },
  {
    icon: '🤝',
    title: 'More Sales Conversations',
    desc: 'Turn cold outreach into meaningful business opportunities.',
  },
  {
    icon: '⚡',
    title: 'Faster Business Growth',
    desc: 'Create a predictable pipeline without expanding your sales team.',
  },
]

const TRUST_ITEMS = [
  'Founder-Led Execution',
  'AI-Powered Lead Generation',
  'Personalized Outreach',
  'Built for Startups & Growing Businesses',
]

export default function HeroSection() {
  const eyebrowRef  = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const ctaRef      = useRef<HTMLDivElement>(null)
  const proofRef    = useRef<HTMLDivElement>(null)
  const scrollRef   = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    gsap.set(eyebrowRef.current,  { y: 20, opacity: 0 })
    gsap.set(headlineRef.current, { y: 50, opacity: 0 })
    gsap.set(subtitleRef.current, { y: 30, opacity: 0 })
    gsap.set(ctaRef.current,      { y: 20, opacity: 0 })
    gsap.set(proofRef.current,    { y: 16, opacity: 0 })
    gsap.set(scrollRef.current,   { opacity: 0 })
  }, [])

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 })
    tl.to(eyebrowRef.current,  { y: 0, opacity: 1, duration: 0.8,  ease: 'power3.out' })
      .to(headlineRef.current, { y: 0, opacity: 1, duration: 1.1,  ease: 'power4.out' }, '-=0.4')
      .to(subtitleRef.current, { y: 0, opacity: 1, duration: 0.9,  ease: 'power3.out' }, '-=0.5')
      .to(ctaRef.current,      { y: 0, opacity: 1, duration: 0.8,  ease: 'power3.out' }, '-=0.6')
      .to(proofRef.current,    { y: 0, opacity: 1, duration: 0.7,  ease: 'power3.out' }, '-=0.5')
      .to(scrollRef.current,   { opacity: 1, duration: 0.8 }, '-=0.2')
    return () => { tl.kill() }
  }, [])

  return (
    <section className="relative w-full overflow-hidden noise-overlay" id="hero">

      {/* ── Shared background layer ────────────────────────── */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 30%, rgba(0,200,83,0.09) 0%, rgba(0,212,255,0.04) 40%, transparent 70%)' }} />
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 35%, rgba(0,200,83,0.05) 0%, transparent 60%)' }} />
      <div className="hero-vignette absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 110% 110% at 50% 50%, transparent 35%, rgba(7,26,46,0.82) 100%)' }} />
      <div className="hero-bottom-fade absolute bottom-0 left-0 right-0 z-[2] h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #071A2E)' }} />

      {/* ── Above-fold viewport area ───────────────────────── */}
      <div className="relative h-screen min-h-[700px] flex flex-col items-center justify-center z-[3] px-6">

        {/* Eyebrow */}
        <div ref={eyebrowRef} className="mb-6 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#00C853]/50" />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00C853]/15 bg-[#00C853]/5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C853] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00C853]" />
            </span>
            <span className="font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-[#00C853]/80">
              Founder-Led AI Growth Systems
            </span>
          </div>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#00C853]/50" />
        </div>

        {/* Headline */}
        <div ref={headlineRef} className="text-center max-w-4xl mx-auto mb-6 md:mb-7">
          <h1
            className="font-display font-extrabold text-white leading-[1.06] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4.8vw, 4.25rem)', textWrap: 'balance' } as React.CSSProperties}
          >
            Get More Qualified Leads.{' '}
            <span className="text-gradient">More Sales Conversations.</span>{' '}
            More Business Growth.
          </h1>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} className="max-w-2xl mx-auto text-center mb-9 md:mb-10">
          <p
            className="font-sans text-base md:text-lg font-normal text-white/50 leading-relaxed"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            Lur AI helps{' '}
            <span className="text-white/70 font-medium">startups, agencies, and growing businesses</span>{' '}
            generate high-quality leads through AI-powered prospecting, personalized outreach,
            and founder-led execution — without the cost of building a large sales team.
          </p>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-7">
          <a href="#cta" className="btn-primary px-8 py-4 text-sm font-semibold text-white glow-strong">
            Book a Free Strategy Call
          </a>
          <a
            href="#product"
            className="group flex items-center gap-2 text-sm font-medium text-white/45 hover:text-white transition-colors duration-300 animated-underline"
          >
            <span>See How Lur AI Works</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >→</motion.span>
          </a>
        </div>

        {/* Trust strip */}
        <div ref={proofRef} className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
          {TRUST_ITEMS.map((label, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-emerald-400 flex-shrink-0" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[11px] font-medium text-white/35 tracking-wide">{label}</span>
            </div>
          ))}
        </div>

        {/* ── Floating data cards ──────────────────────────── */}

        {/* Top-right: booked meetings growth */}
        <FloatCard className="absolute top-[18%] right-[5%] hidden xl:block" delay={1.8} offsetY={-12}>
          <div className="glass-premium rounded-2xl p-4 min-w-[160px]">
            <div className="flex items-center justify-between mb-1">
              <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Meetings / Mo</div>
              <span className="text-[9px] font-semibold text-emerald-400">↑ 41%</span>
            </div>
            <div className="font-display text-2xl font-extrabold text-gradient leading-none">+124</div>
            <div className="mt-2">
              <Sparkline color="#00C853" />
            </div>
            <div className="text-[10px] text-white/25 mt-1">booked this month</div>
          </div>
        </FloatCard>

        {/* Top-left: strategy call booked */}
        <FloatCard className="absolute top-[22%] left-[5%] hidden xl:block" delay={2.0} offsetY={10}>
          <BookedCallCard />
        </FloatCard>

        {/* Bottom-right: prospects found */}
        <FloatCard className="absolute bottom-[22%] right-[6%] hidden xl:block" delay={2.2} offsetY={-8}>
          <div className="glass-premium rounded-2xl px-4 py-3">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-white/30">Prospects Found</span>
            </div>
            <div className="font-display font-bold text-base text-white">847 ICP matches</div>
            <div className="text-[10px] text-white/30 mt-0.5">identified today</div>
          </div>
        </FloatCard>

        {/* Bottom-left: reply rate */}
        <FloatCard className="absolute bottom-[27%] left-[5%] hidden xl:block" delay={2.4} offsetY={12}>
          <div className="glass-premium rounded-2xl p-4">
            <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-1">Reply Rate</div>
            <div className="flex items-baseline gap-1">
              <div className="font-display text-3xl font-extrabold text-white">28.4</div>
              <div className="font-display text-lg font-bold text-[#5EF38C]">%</div>
            </div>
            <div className="text-[10px] text-white/30 mt-0.5">vs 2–4% industry avg</div>
            <div className="flex items-end gap-0.5 mt-2 h-7">
              {[3, 4, 5, 6, 7, 9, 10, 13, 14, 16].map((v, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{
                  height: `${(v / 16) * 100}%`,
                  background: 'linear-gradient(to top, #5EF38C, #00C853)',
                  opacity: 0.4 + (i / 9) * 0.6,
                }} />
              ))}
            </div>
          </div>
        </FloatCard>

        {/* Scroll indicator */}
        <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/20">Scroll</span>
          <div className="w-px h-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#00C853]/50 to-transparent animate-scan-line" />
          </div>
        </div>
      </div>

      {/* ── "What We Help You Achieve" — below fold ─────────── */}
      <div className="relative z-[3] max-w-5xl mx-auto px-6 pb-24">
        {/* Section label */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/8 to-white/8" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/25 whitespace-nowrap">
            What We Help You Achieve
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/8 to-white/8" />
        </div>

        {/* Achievement cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ACHIEVEMENTS.map((card, i) => (
            <motion.div
              key={i}
              className="glass-premium glass-hover rounded-2xl p-5 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.07, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-2xl mb-3 select-none">{card.icon}</div>
              <div className="font-display font-bold text-white text-sm leading-snug mb-2">
                {card.title}
              </div>
              <div className="text-[11px] text-white/40 leading-relaxed">
                {card.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}
