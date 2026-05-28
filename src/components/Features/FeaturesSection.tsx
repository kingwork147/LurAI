'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Inline SVG illustrations ───────────────────────────── */

const IllustrationLeadGen = ({ color }: { color: string }) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    {/* Funnel */}
    <path d="M8 12 H56 L42 30 L42 52 L22 52 L22 30 Z" fill={color} opacity="0.08" stroke={color} strokeWidth="0.8" strokeLinejoin="round" />
    {/* Incoming dots (leads) */}
    <circle cx="16" cy="8" r="2.5" fill={color} opacity="0.55" />
    <circle cx="32" cy="6" r="2.5" fill={color} opacity="0.7" />
    <circle cx="48" cy="8" r="2.5" fill={color} opacity="0.55" />
    {/* Flow arrow inside funnel */}
    <line x1="32" y1="34" x2="32" y2="46" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
    <polyline points="28,43 32,48 36,43" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.45" />
    {/* Output node */}
    <circle cx="32" cy="54" r="3" fill={color} opacity="0.35" />
    <circle cx="32" cy="54" r="1.5" fill={color} opacity="0.75" />
  </svg>
)

const IllustrationSalesAuto = ({ color }: { color: string }) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    {/* Outbound bubble */}
    <rect x="6" y="8" width="30" height="18" rx="4" fill={color} opacity="0.1" stroke={color} strokeWidth="0.8" />
    <path d="M12 26 L8 32 L20 26" fill={color} opacity="0.08" stroke={color} strokeWidth="0.6" strokeLinejoin="round" />
    {/* Reply bubble */}
    <rect x="28" y="32" width="30" height="16" rx="4" fill={color} opacity="0.1" stroke={color} strokeWidth="0.8" />
    <path d="M52 48 L56 54 L44 48" fill={color} opacity="0.08" stroke={color} strokeWidth="0.6" strokeLinejoin="round" />
    {/* Dots in outbound bubble */}
    <circle cx="15" cy="17" r="1.5" fill={color} opacity="0.55" />
    <circle cx="21" cy="17" r="1.5" fill={color} opacity="0.55" />
    <circle cx="27" cy="17" r="1.5" fill={color} opacity="0.55" />
    {/* Automation glow node */}
    <circle cx="46" cy="40" r="5" fill={color} opacity="0.15" stroke={color} strokeWidth="0.7" />
    <circle cx="46" cy="40" r="2.5" fill={color} opacity="0.7" />
    {/* Bolt / auto symbol */}
    <polyline points="47,36 44,40 46,40 45,44" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
  </svg>
)

const IllustrationMarketing = ({ color }: { color: string }) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    {/* Chart frame */}
    <rect x="6" y="8" width="52" height="40" rx="4" fill={color} opacity="0.05" stroke={color} strokeWidth="0.7" />
    {/* Bar chart — rising */}
    <rect x="12" y="34" width="6" height="10" rx="1" fill={color} opacity="0.3" />
    <rect x="22" y="28" width="6" height="16" rx="1" fill={color} opacity="0.45" />
    <rect x="32" y="22" width="6" height="22" rx="1" fill={color} opacity="0.6" />
    <rect x="42" y="14" width="6" height="30" rx="1" fill={color} opacity="0.78" />
    {/* Trend line */}
    <polyline points="15,32 25,26 35,20 45,12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.55" />
    {/* Target dot */}
    <circle cx="45" cy="12" r="3" fill={color} opacity="0.5" />
    <circle cx="45" cy="12" r="1.5" fill={color} opacity="0.9" />
    {/* X-axis */}
    <line x1="6" y1="52" x2="58" y2="52" stroke={color} strokeWidth="0.8" opacity="0.2" />
  </svg>
)

const IllustrationContent = ({ color }: { color: string }) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    {/* Document */}
    <rect x="10" y="6" width="32" height="44" rx="3" fill={color} opacity="0.06" stroke={color} strokeWidth="0.8" />
    {/* Lines on doc */}
    <line x1="16" y1="16" x2="36" y2="16" stroke={color} strokeWidth="1.3" opacity="0.5" strokeLinecap="round" />
    <line x1="16" y1="22" x2="36" y2="22" stroke={color} strokeWidth="1.3" opacity="0.35" strokeLinecap="round" />
    <line x1="16" y1="28" x2="28" y2="28" stroke={color} strokeWidth="1.3" opacity="0.25" strokeLinecap="round" />
    <line x1="16" y1="36" x2="34" y2="36" stroke={color} strokeWidth="1.3" opacity="0.2" strokeLinecap="round" />
    {/* AI node */}
    <circle cx="50" cy="18" r="9" fill={color} opacity="0.08" stroke={color} strokeWidth="0.7" />
    <circle cx="50" cy="18" r="3.5" fill={color} opacity="0.55" />
    {/* Orbiting dot */}
    <circle cx="50" cy="9" r="1.5" fill={color} opacity="0.4" />
    <circle cx="59" cy="18" r="1.5" fill={color} opacity="0.4" />
    {/* Connection dashes */}
    <line x1="42" y1="20" x2="46" y2="19" stroke={color} strokeWidth="0.7" opacity="0.3" strokeDasharray="2 1" />
  </svg>
)

const IllustrationCRM = ({ color }: { color: string }) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    {/* Pipeline stages — narrowing funnel */}
    <rect x="4" y="20" width="12" height="24" rx="2" fill={color} opacity="0.22" stroke={color} strokeWidth="0.7" />
    <rect x="20" y="22" width="10" height="20" rx="2" fill={color} opacity="0.32" stroke={color} strokeWidth="0.7" />
    <rect x="34" y="24" width="8" height="16" rx="2" fill={color} opacity="0.45" stroke={color} strokeWidth="0.7" />
    <rect x="46" y="26" width="6" height="12" rx="2" fill={color} opacity="0.62" stroke={color} strokeWidth="0.7" />
    {/* Flow arrows */}
    <line x1="16" y1="32" x2="20" y2="32" stroke={color} strokeWidth="1" opacity="0.3" strokeDasharray="2 1" />
    <line x1="30" y1="32" x2="34" y2="32" stroke={color} strokeWidth="1" opacity="0.3" strokeDasharray="2 1" />
    <line x1="42" y1="32" x2="46" y2="32" stroke={color} strokeWidth="1" opacity="0.3" strokeDasharray="2 1" />
    {/* Revenue checkmark at end */}
    <circle cx="58" cy="32" r="4.5" fill={color} opacity="0.35" />
    <polyline points="55.5,32 57.5,34 61,29.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.75" />
  </svg>
)

const IllustrationAnalytics = ({ color }: { color: string }) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    {/* Dashboard frame */}
    <rect x="4" y="8" width="56" height="48" rx="4" fill={color} opacity="0.05" stroke={color} strokeWidth="0.7" />
    {/* Top KPI tiles */}
    <rect x="8" y="12" width="22" height="14" rx="2" fill={color} opacity="0.1" stroke={color} strokeWidth="0.6" />
    <rect x="34" y="12" width="22" height="14" rx="2" fill={color} opacity="0.1" stroke={color} strokeWidth="0.6" />
    {/* Sparklines in tiles */}
    <polyline points="10,22 14,19 18,21 22,16 28,18" stroke={color} strokeWidth="1" fill="none" opacity="0.55" />
    <polyline points="36,22 40,17 44,19 48,14 54,16" stroke={color} strokeWidth="1" fill="none" opacity="0.55" />
    {/* Bottom bar chart */}
    <rect x="8" y="30" width="48" height="22" rx="2" fill={color} opacity="0.05" stroke={color} strokeWidth="0.6" />
    <rect x="12" y="42" width="5" height="8" rx="1" fill={color} opacity="0.28" />
    <rect x="20" y="38" width="5" height="12" rx="1" fill={color} opacity="0.4" />
    <rect x="28" y="35" width="5" height="15" rx="1" fill={color} opacity="0.55" />
    <rect x="36" y="33" width="5" height="17" rx="1" fill={color} opacity="0.65" />
    <rect x="44" y="31" width="5" height="19" rx="1" fill={color} opacity="0.78" />
  </svg>
)

/* ── Feature definitions ────────────────────────────────── */
const features = [
  {
    Illustration: IllustrationLeadGen,
    title: 'AI Lead Generation',
    description: 'Building systems that continuously attract and qualify high-intent leads — without manual prospecting.',
    color: '#00D4FF',
    tags: ['Inbound', 'Outbound', 'Qualification'],
  },
  {
    Illustration: IllustrationSalesAuto,
    title: 'AI Sales Automation',
    description: 'Automating outreach, follow-ups, and qualification so your team closes deals instead of chasing them.',
    color: '#8B5CF6',
    tags: ['Outreach', 'Follow-up', 'Nurture'],
  },
  {
    Illustration: IllustrationMarketing,
    title: 'Performance Marketing',
    description: 'Data-driven campaigns built for conversions — every dollar tracked, tested, and optimized for ROI.',
    color: '#00D4FF',
    tags: ['Paid Ads', 'SEO', 'Conversion'],
  },
  {
    Illustration: IllustrationContent,
    title: 'AI Content Systems',
    description: 'Scalable content engines that generate authority-building assets and fuel your lead generation at scale.',
    color: '#10B981',
    tags: ['SEO Content', 'Email Copy', 'Social'],
  },
  {
    Illustration: IllustrationCRM,
    title: 'CRM & Funnel Systems',
    description: 'Infrastructure that tracks every lead, automates hand-offs, and converts pipeline into predictable revenue.',
    color: '#F59E0B',
    tags: ['CRM Setup', 'Pipelines', 'Automation'],
  },
  {
    Illustration: IllustrationAnalytics,
    title: 'Revenue Analytics',
    description: 'Real-time dashboards showing exactly where revenue comes from and which levers to pull for growth.',
    color: '#8B5CF6',
    tags: ['Dashboards', 'Forecasting', 'Attribution'],
  },
]

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current,
        { y: 50, opacity: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-44 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #00D4FF33, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-6 bg-[#00D4FF]/40" />
            <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#00D4FF]/70">
              Core Services
            </span>
            <div className="h-px w-6 bg-[#00D4FF]/40" />
          </div>
          <h2 className="font-display font-extrabold text-white tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', textWrap: 'balance' } as React.CSSProperties}>
            Everything you need to{' '}
            <span className="text-gradient">grow.</span>
          </h2>
          <p className="max-w-xl mx-auto font-sans text-white/40 text-base md:text-lg leading-relaxed">
            Six revenue systems working together — designed to generate leads,
            automate sales, and turn your pipeline into predictable growth.
          </p>
        </div>

        {/* Grid */}
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              className="feature-card conic-border group"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            >
              <div className="glass-premium glass-hover h-full rounded-2xl p-6 md:p-7 relative overflow-hidden">
                {/* Ambient inner glow */}
                <div
                  className="absolute -top-12 -left-12 w-36 h-36 rounded-full pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle, ${feat.color}15, transparent 70%)` }}
                />

                {/* Illustration */}
                <div className="mb-5 w-16 h-16 relative">
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{ background: `${feat.color}10`, border: `1px solid ${feat.color}18` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <feat.Illustration color={feat.color} />
                  </div>
                </div>

                {/* Text */}
                <h3 className="font-display font-semibold text-lg text-white mb-2.5 tracking-tight">
                  {feat.title}
                </h3>
                <p className="font-sans text-sm text-white/42 leading-relaxed mb-4">
                  {feat.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {feat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5 rounded-full"
                      style={{
                        background: `${feat.color}10`,
                        color: `${feat.color}90`,
                        border: `1px solid ${feat.color}18`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover reveal */}
                <div className="mt-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs font-medium animated-underline" style={{ color: feat.color }}>
                    Learn more
                  </span>
                  <span style={{ color: feat.color }} className="text-xs">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
