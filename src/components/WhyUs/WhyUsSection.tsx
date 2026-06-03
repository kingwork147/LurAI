'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Inline SVG icons ───────────────────────────────────── */

function IconTarget({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="10" stroke={color} strokeWidth="1.3" opacity="0.35" />
      <circle cx="13" cy="13" r="6.5" stroke={color} strokeWidth="1.3" opacity="0.6" />
      <circle cx="13" cy="13" r="3" fill={color} opacity="0.85" />
      <line x1="13" y1="3" x2="13" y2="6.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.45" />
      <line x1="13" y1="19.5" x2="13" y2="23" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.45" />
      <line x1="3" y1="13" x2="6.5" y2="13" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.45" />
      <line x1="19.5" y1="13" x2="23" y2="13" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}

function IconFounder({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="8.5" r="4" stroke={color} strokeWidth="1.3" opacity="0.75" />
      <path d="M4.5 22c0-4.7 3.8-7.5 8.5-7.5s8.5 2.8 8.5 7.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
      <circle cx="21" cy="7.5" r="2.8" fill={color} opacity="0.12" stroke={color} strokeWidth="0.8" />
      <polyline points="19.6,7.5 21,8.9 23.2,6.2" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
    </svg>
  )
}

function IconMessage({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <rect x="2.5" y="5" width="21" height="14" rx="3" stroke={color} strokeWidth="1.3" opacity="0.65" />
      <path d="M6.5 19l-3.5 4.5 6-3" stroke={color} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
      <line x1="7" y1="10.5" x2="19" y2="10.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="7" y1="14.5" x2="14" y2="14.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
    </svg>
  )
}

function IconGrowth({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <polyline points="3,21 8.5,15.5 13,18.5 19.5,9 23.5,12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" fill="none" />
      <circle cx="23.5" cy="7" r="2.5" fill={color} opacity="0.75" />
      <polyline points="21,7 23.5,7 23.5,9.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
      <line x1="3" y1="22.5" x2="23.5" y2="22.5" stroke={color} strokeWidth="1" opacity="0.18" />
      <line x1="3" y1="22.5" x2="3" y2="8" stroke={color} strokeWidth="1" opacity="0.18" />
    </svg>
  )
}

function IconLightning({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M15 3L6.5 15h7.5l-3 8L22 11h-7.5z" fill={color} opacity="0.14" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="21" cy="5.5" r="1.8" fill={color} opacity="0.5" />
      <circle cx="5" cy="19.5" r="1.3" fill={color} opacity="0.3" />
    </svg>
  )
}

function IconChart({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <rect x="3" y="16.5" width="4" height="7" rx="1" fill={color} opacity="0.3" />
      <rect x="10" y="12" width="4" height="11.5" rx="1" fill={color} opacity="0.48" />
      <rect x="17" y="7.5" width="4" height="16" rx="1" fill={color} opacity="0.65" />
      <polyline points="5,14.5 12,10 19,5.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" fill="none" />
      <circle cx="19" cy="5.5" r="2" fill={color} opacity="0.8" />
      <line x1="3" y1="23.5" x2="24" y2="23.5" stroke={color} strokeWidth="0.9" opacity="0.18" />
    </svg>
  )
}

/* ── Data ───────────────────────────────────────────────── */

const features = [
  {
    number: '01',
    Icon: IconTarget,
    title: 'Lead Generation Specialists',
    description:
      'Unlike full-service agencies that offer everything, we focus on lead generation and business growth. Every strategy is built around helping you create more opportunities.',
    color: '#00C853',
  },
  {
    number: '02',
    Icon: IconFounder,
    title: 'Founder-Led Execution',
    description:
      'Work directly with the person building and managing your lead generation system. No account managers. No communication gaps.',
    color: '#5EF38C',
  },
  {
    number: '03',
    Icon: IconMessage,
    title: 'Personalized Outreach',
    description:
      "We don't rely on generic templates. Every campaign is tailored to your audience, industry, and business goals.",
    color: '#00C853',
  },
  {
    number: '04',
    Icon: IconGrowth,
    title: 'Built For Growing Businesses',
    description:
      "Whether you're a startup, service provider, agency, or established business, our systems are designed to help you scale consistently.",
    color: '#5EF38C',
  },
  {
    number: '05',
    Icon: IconLightning,
    title: 'Fast & Agile',
    description:
      'Without layers of approvals and bureaucracy, we can adapt quickly, test new approaches, and optimize campaigns faster.',
    color: '#00C853',
  },
  {
    number: '06',
    Icon: IconChart,
    title: 'Focused On Results',
    description:
      'We measure success by conversations started, opportunities created, and business growth — not vanity metrics.',
    color: '#5EF38C',
  },
]

type RowValue = boolean | string

const comparisonRows: { feature: string; traditional: RowValue; lurai: RowValue }[] = [
  { feature: 'General Marketing Services', traditional: true,      lurai: false     },
  { feature: 'Lead Generation Focus',      traditional: 'Partial', lurai: true      },
  { feature: 'Direct Founder Access',      traditional: 'Rare',    lurai: true      },
  { feature: 'Personalized Execution',     traditional: 'Limited', lurai: true      },
  { feature: 'Fast Adaptation',            traditional: 'Limited', lurai: true      },
  { feature: 'Designed For Growth',        traditional: true,      lurai: true      },
]

/* ── Cell renderer ──────────────────────────────────────── */

function CellValue({ value }: { value: RowValue }) {
  if (value === true) {
    return (
      <span
        className="inline-flex items-center justify-center w-6 h-6 rounded-full"
        style={{ background: 'rgba(0,200,83,0.12)', border: '1px solid rgba(0,200,83,0.28)' }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <polyline points="2,6 5,9 10,3" stroke="#00C853" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    )
  }
  if (value === false) {
    return (
      <span
        className="inline-flex items-center justify-center w-6 h-6 rounded-full"
        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <line x1="3" y1="3" x2="9" y2="9" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="9" y1="3" x2="3" y2="9" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
    )
  }
  return (
    <span
      className="font-mono text-[10px] tracking-wide px-2.5 py-1 rounded-full"
      style={{
        color: 'rgba(245,158,11,0.8)',
        background: 'rgba(245,158,11,0.07)',
        border: '1px solid rgba(245,158,11,0.15)',
      }}
    >
      {value}
    </span>
  )
}

/* ── Component ──────────────────────────────────────────── */

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.wu-heading', {
        y: 45, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.wu-heading', start: 'top 82%' },
      })
      gsap.from('.wu-card', {
        y: 40, opacity: 0, duration: 0.75, ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: { trigger: '.wu-grid', start: 'top 80%' },
      })
      gsap.from('.wu-row', {
        x: -20, opacity: 0, duration: 0.55, ease: 'power2.out',
        stagger: 0.07,
        scrollTrigger: { trigger: '.wu-table', start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="why-us" className="relative py-32 md:py-44 overflow-hidden">

      {/* Backgrounds */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,200,83,0.07) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ── Heading ─────────────────────────────────────────── */}
        <div className="wu-heading text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-6 bg-[#00C853]/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00C853]/70">
              Why Lur AI
            </span>
            <div className="h-px w-6 bg-[#00C853]/40" />
          </div>
          <h2
            className="font-display font-extrabold tracking-tight leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', textWrap: 'balance' } as React.CSSProperties}
          >
            <span className="text-white">Why Businesses Choose </span>
            <span className="text-gradient">Lur AI</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
            We&apos;re not a traditional marketing agency. We focus on one thing — helping businesses
            generate more qualified leads and sales opportunities through proven systems and
            personalized execution.
          </p>
        </div>

        {/* ── Feature cards grid ──────────────────────────────── */}
        <div className="wu-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-24 md:mb-32">
          {features.map((feat) => (
            <motion.div
              key={feat.number}
              className="wu-card conic-border group"
              whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            >
              <div className="glass-premium glass-hover h-full rounded-2xl p-6 md:p-7 relative overflow-hidden">

                {/* Top accent — hover reveal */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${feat.color}55, transparent)` }}
                />
                {/* Corner glow — hover reveal */}
                <div
                  className="absolute -top-10 -right-10 w-36 h-36 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${feat.color}10, transparent 70%)` }}
                />

                {/* Number pill + icon row */}
                <div className="flex items-start justify-between mb-5">
                  <span
                    className="font-mono text-[10px] tracking-[0.2em] px-2.5 py-1 rounded-lg"
                    style={{
                      color: `${feat.color}75`,
                      background: `${feat.color}0D`,
                      border: `1px solid ${feat.color}18`,
                    }}
                  >
                    {feat.number}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${feat.color}0D`,
                      border: `1px solid ${feat.color}20`,
                    }}
                  >
                    <feat.Icon color={feat.color} />
                  </div>
                </div>

                {/* Text */}
                <h3 className="font-display font-semibold text-[17px] text-white leading-snug mb-2.5 tracking-tight">
                  {feat.title}
                </h3>
                <p className="font-sans text-sm text-white/42 leading-relaxed">
                  {feat.description}
                </p>

                {/* Bottom accent — hover reveal */}
                <div
                  className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500 ease-out rounded-full"
                  style={{ background: `linear-gradient(90deg, ${feat.color}40, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Comparison table ────────────────────────────────── */}
        <motion.div
          className="mb-20 md:mb-28"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-6 bg-[#00C853]/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00C853]/70">
              The Difference
            </span>
          </div>

          <div className="wu-table glass-premium rounded-2xl overflow-hidden">

            {/* Header row */}
            <div className="grid" style={{ gridTemplateColumns: '1fr 160px 140px' }}>
              <div className="px-6 md:px-8 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/22">Feature</span>
              </div>
              <div
                className="px-4 py-4 border-b border-l text-center"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/22">
                  Traditional Agency
                </span>
              </div>
              <div
                className="px-4 py-4 border-b border-l text-center"
                style={{
                  borderColor: 'rgba(255,255,255,0.06)',
                  background: 'rgba(0,200,83,0.04)',
                }}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#00C853]/65">
                  Lur AI
                </span>
              </div>
            </div>

            {/* Data rows */}
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className="wu-row grid"
                style={{
                  gridTemplateColumns: '1fr 160px 140px',
                  borderBottom: i < comparisonRows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : undefined,
                }}
              >
                <div className="px-6 md:px-8 py-4 flex items-center">
                  <span className="font-sans text-sm text-white/60">{row.feature}</span>
                </div>
                <div
                  className="px-4 py-4 flex items-center justify-center border-l"
                  style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                >
                  <CellValue value={row.traditional} />
                </div>
                <div
                  className="px-4 py-4 flex items-center justify-center border-l"
                  style={{
                    borderColor: 'rgba(255,255,255,0.05)',
                    background: 'rgba(0,200,83,0.025)',
                  }}
                >
                  <CellValue value={row.lurai} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom banner ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative glass-premium rounded-3xl overflow-hidden">
            {/* Left accent bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px]"
              style={{ background: 'linear-gradient(180deg, transparent, #00C853 30%, #5EF38C 70%, transparent)' }}
            />
            {/* Inner glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 55% 100% at 0% 50%, rgba(0,200,83,0.06) 0%, transparent 70%)' }}
            />
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,83,0.5) 40%, rgba(94,243,140,0.3) 60%, transparent)' }}
            />

            <div className="relative px-8 md:px-14 py-12 md:py-16 flex flex-col md:flex-row items-center gap-8 md:gap-16">
              {/* Copy */}
              <div className="flex-1 text-center md:text-left">
                <h3
                  className="font-display font-extrabold leading-[1.1] tracking-tight mb-3"
                  style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.6rem)', textWrap: 'balance' } as React.CSSProperties}
                >
                  <span className="text-white">Your Next Customer Is Already </span>
                  <span className="text-gradient">Looking For A Solution.</span>
                </h3>
                <p className="font-sans text-base text-white/42 leading-relaxed">
                  Let&apos;s build a system that helps them find you.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row gap-3 shrink-0">
                <a href="#cta" className="btn-primary whitespace-nowrap">
                  Book A Free Strategy Call
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm text-white/65 border border-white/10 hover:border-white/22 hover:text-white/85 transition-all duration-200 whitespace-nowrap"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
