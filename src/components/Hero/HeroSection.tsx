'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'

const NeuralCanvas = dynamic(() => import('./NeuralCanvas'), { ssr: false })

/* ── Cycling deal closed notifications ──────────────────── */
const DEALS = [
  { company: 'Apex Dynamics',    value: '$24,500',  source: 'AI Outreach'   },
  { company: 'Meridian Group',   value: '$67,200',  source: 'Auto Follow-up' },
  { company: 'NovaTech Inc.',    value: '$41,800',  source: 'Lead Scoring'  },
  { company: 'Cascade Partners', value: '$89,000',  source: 'Nurture Seq.'  },
  { company: 'Vertex Capital',   value: '$112,000', source: 'Cold AI Email' },
]

function LiveDealCard() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % DEALS.length), 3200)
    return () => clearInterval(t)
  }, [])

  const deal = DEALS[idx]

  return (
    <div className="glass-premium rounded-2xl p-4 min-w-[210px]">
      <div className="flex items-center gap-2 mb-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span className="text-[9px] font-mono uppercase tracking-widest text-white/35">Deal Closed</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-display font-extrabold text-2xl text-white leading-none">{deal.value}</div>
          <div className="text-xs font-medium text-white/55 mt-1">{deal.company}</div>
          <div className="mt-2.5">
            <span className="text-[9px] bg-[#00C853]/10 border border-[#00C853]/15 text-[#00C853] px-2.5 py-0.5 rounded-full font-mono uppercase tracking-wider">
              via {deal.source}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/* ── Floating wrapper ───────────────────────────────────── */
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

/* ── Upward-trending sparkline ──────────────────────────── */
function Sparkline({ color }: { color: string }) {
  const pts = [0, 8, 15, 18, 10, 14, 30, 28, 25, 22, 45, 38, 40, 32, 60, 48, 80, 44, 100, 55]
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

export default function HeroSection() {
  const eyebrowRef  = useRef<HTMLDivElement>(null)
  const line1Ref    = useRef<HTMLDivElement>(null)
  const line2Ref    = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const ctaRef      = useRef<HTMLDivElement>(null)
  const proofRef    = useRef<HTMLDivElement>(null)
  const scrollRef   = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    gsap.set(eyebrowRef.current,  { y: 20, opacity: 0 })
    gsap.set([line1Ref.current, line2Ref.current], { y: 70, opacity: 0, clipPath: 'inset(0 0 100% 0)' })
    gsap.set(subtitleRef.current, { y: 30, opacity: 0 })
    gsap.set(ctaRef.current,      { y: 20, opacity: 0 })
    gsap.set(proofRef.current,    { y: 16, opacity: 0 })
    gsap.set(scrollRef.current,   { opacity: 0 })
  }, [])

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 })
    tl.to(eyebrowRef.current,  { y: 0, opacity: 1, duration: 0.8,  ease: 'power3.out' })
      .to(line1Ref.current,    { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'power4.out' }, '-=0.4')
      .to(line2Ref.current,    { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'power4.out' }, '-=0.8')
      .to(subtitleRef.current, { y: 0, opacity: 1, duration: 0.9,  ease: 'power3.out' }, '-=0.5')
      .to(ctaRef.current,      { y: 0, opacity: 1, duration: 0.8,  ease: 'power3.out' }, '-=0.6')
      .to(proofRef.current,    { y: 0, opacity: 1, duration: 0.7,  ease: 'power3.out' }, '-=0.5')
      .to(scrollRef.current,   { opacity: 1, duration: 0.8 }, '-=0.2')
    return () => { tl.kill() }
  }, [])

  return (
    <section
      className="relative w-full h-screen min-h-[720px] flex flex-col items-center justify-center overflow-hidden noise-overlay"
      id="hero"
    >
      {/* 3D canvas */}
      <NeuralCanvas />

      {/* Radial glows */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 35%, rgba(0,200,83,0.08) 0%, rgba(0,212,255,0.04) 40%, transparent 70%)' }} />
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 45%, rgba(0,200,83,0.05) 0%, transparent 60%)' }} />

      {/* Vignette */}
      <div className="hero-vignette absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 110% 110% at 50% 50%, transparent 35%, rgba(7,26,46,0.82) 100%)' }} />

      {/* Bottom fade */}
      <div className="hero-bottom-fade absolute bottom-0 left-0 right-0 z-[2] h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #071A2E)' }} />

      {/* ── Hero copy ────────────────────────────────────── */}
      <div className="relative z-[3] text-center px-6 max-w-5xl mx-auto">

        {/* Eyebrow — live proof */}
        <div ref={eyebrowRef} className="mb-6 md:mb-8 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#00C853]/50" />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00C853]/15 bg-[#00C853]/5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C853] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00C853]" />
            </span>
            <span className="font-mono text-[10px] font-semibold tracking-[0.25em] uppercase text-[#00C853]/80">
              $40M+ in pipeline generated
            </span>
          </div>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#00C853]/50" />
        </div>

        {/* Headline */}
        <div className="overflow-hidden mb-2">
          <div ref={line1Ref}
            className="font-display font-extrabold text-white leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.6rem, 5.8vw, 5.25rem)' }}>
            Your Pipeline,
          </div>
        </div>
        <div className="overflow-hidden mb-8 md:mb-10">
          <div ref={line2Ref}
            className="font-display font-extrabold leading-none tracking-tight text-gradient"
            style={{ fontSize: 'clamp(2.6rem, 5.8vw, 5.25rem)' }}>
            On Autopilot.
          </div>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} className="max-w-2xl mx-auto mb-10 md:mb-12">
          <p className="font-sans text-base md:text-lg font-normal text-white/50 leading-relaxed"
            style={{ textWrap: 'balance' } as React.CSSProperties}>
            AI that prospects, qualifies, follows up, and books meetings — 24/7, without a sales hire.
            Clients average{' '}
            <span className="text-white/75 font-semibold">3.4× pipeline growth</span>
            {' '}in their first 90 days.
          </p>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#cta" className="btn-primary px-8 py-4 text-sm font-semibold text-white glow-strong">
            Book a Free Revenue Audit
          </a>
          <a href="#product"
            className="group flex items-center gap-2 text-sm font-medium text-white/45 hover:text-white transition-colors duration-300 animated-underline">
            <span>See how it works</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >→</motion.span>
          </a>
        </div>

        {/* Trust strip */}
        <div ref={proofRef} className="flex items-center justify-center gap-6 mt-8 flex-wrap">
          {['No sales hire needed', 'Live in 7 days', '90-day guarantee'].map((label, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-emerald-400 flex-shrink-0" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[11px] font-medium text-white/35 tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Floating cards ──────────────────────────────── */}

      {/* Top-right: revenue sparkline */}
      <FloatCard className="absolute top-[20%] right-[5%] z-[3] hidden xl:block" delay={1.8} offsetY={-12}>
        <div className="glass-premium rounded-2xl p-4 min-w-[160px]">
          <div className="flex items-center justify-between mb-1">
            <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Revenue / Mo</div>
            <span className="text-[9px] font-semibold text-emerald-400">↑ 34%</span>
          </div>
          <div className="font-display text-2xl font-extrabold text-gradient leading-none">$847K</div>
          <div className="mt-2">
            <Sparkline color="#00C853" />
          </div>
          <div className="text-[10px] text-white/25 mt-1">avg. client result</div>
        </div>
      </FloatCard>

      {/* Top-left: live deal closed */}
      <FloatCard className="absolute top-[24%] left-[5%] z-[3] hidden xl:block" delay={2.0} offsetY={10}>
        <LiveDealCard />
      </FloatCard>

      {/* Bottom-right: live pipeline count */}
      <FloatCard className="absolute bottom-[18%] right-[6%] z-[3] hidden xl:block" delay={2.2} offsetY={-8}>
        <div className="glass-premium rounded-2xl px-4 py-3">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[9px] font-mono uppercase tracking-widest text-white/30">Pipeline Live</span>
          </div>
          <div className="font-display font-bold text-base text-white">1,247 leads</div>
          <div className="text-[10px] text-white/30 mt-0.5">being worked right now</div>
        </div>
      </FloatCard>

      {/* Bottom-left: ROI */}
      <FloatCard className="absolute bottom-[24%] left-[5%] z-[3] hidden xl:block" delay={2.4} offsetY={12}>
        <div className="glass-premium rounded-2xl p-4">
          <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-1">Average ROI</div>
          <div className="flex items-baseline gap-1">
            <div className="font-display text-3xl font-extrabold text-white">14.2</div>
            <div className="font-display text-lg font-bold text-[#5EF38C]">×</div>
          </div>
          <div className="text-[10px] text-white/30 mt-0.5">across 200+ clients</div>
          <div className="flex items-end gap-0.5 mt-2 h-7">
            {[5, 7, 6, 9, 8, 11, 10, 13, 12, 14].map((v, i) => (
              <div key={i} className="flex-1 rounded-sm" style={{
                height: `${(v / 14) * 100}%`,
                background: 'linear-gradient(to top, #5EF38C, #00C853)',
                opacity: 0.4 + (i / 9) * 0.6,
              }} />
            ))}
          </div>
        </div>
      </FloatCard>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2">
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/20">Scroll</span>
        <div className="w-px h-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00C853]/50 to-transparent animate-scan-line" />
        </div>
      </div>
    </section>
  )
}
