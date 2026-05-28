'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const NeuralCanvas = dynamic(() => import('./NeuralCanvas'), { ssr: false })

/* ── Floating stat card ─────────────────────────────────────── */
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

/* ── Mini sparkline SVG ───────────────────────────────────── */
function Sparkline({ color }: { color: string }) {
  const pts = [0, 30, 10, 45, 20, 15, 40, 50, 35, 20, 55, 40, 60, 10, 80, 35, 100, 25]
  let path = `M ${pts[0]} ${50 - pts[1]}`
  for (let i = 2; i < pts.length; i += 2) {
    path += ` L ${pts[i]} ${50 - pts[i + 1]}`
  }
  return (
    <svg width="100" height="50" viewBox="0 0 100 50" fill="none">
      <path d={path} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`${path} L 100 50 L 0 50 Z`} fill={`url(#sg-${color.replace('#', '')})`} />
      <defs>
        <linearGradient id={`sg-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor={color} stopOpacity="0.25" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function HeroSection() {
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    gsap.set(eyebrowRef.current, { y: 20, opacity: 0 })
    gsap.set([line1Ref.current, line2Ref.current], { y: 70, opacity: 0, clipPath: 'inset(0 0 100% 0)' })
    gsap.set(subtitleRef.current, { y: 30, opacity: 0 })
    gsap.set(ctaRef.current, { y: 20, opacity: 0 })
    gsap.set(scrollRef.current, { opacity: 0 })
  }, [])

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 })
    tl.to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
      .to(line1Ref.current, { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'power4.out' }, '-=0.4')
      .to(line2Ref.current, { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'power4.out' }, '-=0.8')
      .to(subtitleRef.current, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, '-=0.5')
      .to(ctaRef.current, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .to(scrollRef.current, { opacity: 1, duration: 0.8 }, '-=0.2')
    return () => { tl.kill() }
  }, [])

  return (
    <section
      className="relative w-full h-screen min-h-[720px] flex flex-col items-center justify-center overflow-hidden noise-overlay"
      id="hero"
    >
      {/* 3D canvas */}
      <NeuralCanvas />

      {/* Layered radial glows */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 35%, rgba(0,212,255,0.09) 0%, rgba(124,58,237,0.05) 40%, transparent 70%)' }} />
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 45%, rgba(0,212,255,0.06) 0%, transparent 60%)' }} />

      {/* Vignette */}
      <div className="hero-vignette absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 110% 110% at 50% 50%, transparent 35%, rgba(3,3,3,0.8) 100%)' }} />

      {/* Bottom fade */}
      <div className="hero-bottom-fade absolute bottom-0 left-0 right-0 z-[2] h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #030303)' }} />

      {/* ── Hero text ────────────────────────────────────── */}
      <div className="relative z-[3] text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div ref={eyebrowRef} className="mb-6 md:mb-8 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#00D4FF]/50" />
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse"
              style={{ boxShadow: '0 0 8px rgba(0,212,255,0.8)' }} />
            <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#00D4FF]/80">
              Introducing Lur AI
            </span>
          </div>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#00D4FF]/50" />
        </div>

        {/* Headline line 1 */}
        <div className="overflow-hidden mb-2">
          <div ref={line1Ref} className="font-display font-extrabold text-white leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}>
            Revenue Growth.
          </div>
        </div>

        {/* Headline line 2 */}
        <div className="overflow-hidden mb-8 md:mb-10">
          <div ref={line2Ref} className="font-display font-extrabold leading-none tracking-tight text-gradient"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}>
            Built With AI.
          </div>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} className="max-w-2xl mx-auto mb-10 md:mb-12">
          <p className="font-sans text-base md:text-lg font-normal text-white/50 leading-relaxed"
            style={{ textWrap: 'balance' } as React.CSSProperties}>
            AI-powered lead generation, sales automation, and CRM infrastructure
            for businesses ready to scale. We build the systems — you collect the revenue.
          </p>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#cta" className="btn-primary px-8 py-4 text-sm font-semibold text-white glow-strong">
            Book a Free Audit
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
      </div>

      {/* ── Floating context cards ──────────────────────── */}

      {/* Top-right: leads */}
      <FloatCard
        className="absolute top-[22%] right-[5%] z-[3] hidden xl:block"
        delay={1.8} offsetY={-12}
      >
        <div className="glass-premium rounded-2xl p-4 min-w-[140px]">
          <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-2">Leads This Week</div>
          <div className="font-display text-2xl font-extrabold text-gradient leading-none">1,240</div>
          <div className="mt-2">
            <Sparkline color="#00D4FF" />
          </div>
          <div className="text-[10px] text-white/25 mt-1">qualified prospects</div>
        </div>
      </FloatCard>

      {/* Top-left: close rate */}
      <FloatCard
        className="absolute top-[28%] left-[5%] z-[3] hidden xl:block"
        delay={2} offsetY={10}
      >
        <div className="glass-premium rounded-2xl p-4 min-w-[150px]">
          <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-2">Close Rate</div>
          <div className="flex items-end gap-1">
            <div className="font-display text-2xl font-extrabold text-white leading-none">43</div>
            <div className="font-display text-base font-bold text-[#8B5CF6] mb-0.5">%</div>
          </div>
          {/* Mini bar chart */}
          <div className="flex items-end gap-0.5 mt-2 h-8">
            {[40, 48, 38, 55, 50, 62, 58, 70, 65, 43].map((v, i) => (
              <div key={i} className="flex-1 rounded-sm" style={{
                height: `${v}%`,
                background: `linear-gradient(to top, #8B5CF6, #00D4FF)`,
                opacity: 0.5 + (i / 10) * 0.5,
              }} />
            ))}
          </div>
          <div className="text-[10px] text-white/25 mt-1.5">qualified leads</div>
        </div>
      </FloatCard>

      {/* Bottom-right: live status */}
      <FloatCard
        className="absolute bottom-[18%] right-[6%] z-[3] hidden xl:block"
        delay={2.2} offsetY={-8}
      >
        <div className="glass-premium rounded-2xl px-4 py-3 flex items-center gap-3">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-emerald-400"
              style={{ boxShadow: '0 0 8px rgba(52,211,153,0.9)' }} />
            <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-40" />
          </div>
          <div>
            <div className="font-display font-semibold text-xs text-white/60">Revenue system</div>
            <div className="font-display font-bold text-sm text-emerald-400">Running 24/7</div>
          </div>
        </div>
      </FloatCard>

      {/* Bottom-left: pipeline value */}
      <FloatCard
        className="absolute bottom-[24%] left-[5%] z-[3] hidden xl:block"
        delay={2.4} offsetY={12}
      >
        <div className="glass-premium rounded-2xl p-4">
          <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-1">Pipeline Value</div>
          <div className="font-display text-xl font-extrabold text-white">$2.4M</div>
          <div className="font-sans text-xs text-white/30 mt-0.5">generated this quarter</div>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-xs text-emerald-400">↑ 3x</span>
            <span className="text-[10px] text-white/25">vs last quarter</span>
          </div>
        </div>
      </FloatCard>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2">
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/20">Scroll</span>
        <div className="w-px h-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00D4FF]/50 to-transparent animate-scan-line" />
        </div>
      </div>
    </section>
  )
}
