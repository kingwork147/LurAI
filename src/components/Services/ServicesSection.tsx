'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── SVG Illustrations ────────────────────────────────────── */

const IllustrationB2B = ({ color }: { color: string }) => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    {/* Outer target rings */}
    <circle cx="26" cy="26" r="22" stroke={color} strokeWidth="0.7" opacity="0.18" />
    <circle cx="26" cy="26" r="15" stroke={color} strokeWidth="0.8" opacity="0.28" />
    <circle cx="26" cy="26" r="8"  stroke={color} strokeWidth="1"   opacity="0.5"  />
    {/* Crosshair lines */}
    <line x1="26" y1="4"  x2="26" y2="14" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
    <line x1="26" y1="38" x2="26" y2="48" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
    <line x1="4"  y1="26" x2="14" y2="26" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
    <line x1="38" y1="26" x2="48" y2="26" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
    {/* Centre dot */}
    <circle cx="26" cy="26" r="3" fill={color} opacity="0.85" />
    {/* Person node top-right */}
    <circle cx="42" cy="10" r="4" fill={color} opacity="0.12" stroke={color} strokeWidth="0.7" />
    <circle cx="42" cy="8.5" r="1.5" fill={color} opacity="0.6" />
    <path d="M38.5 14c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5" stroke={color} strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.45" />
  </svg>
)

const IllustrationCalendar = ({ color }: { color: string }) => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    {/* Calendar frame */}
    <rect x="6" y="10" width="40" height="36" rx="4" fill={color} opacity="0.07" stroke={color} strokeWidth="0.8" />
    {/* Header band */}
    <rect x="6" y="10" width="40" height="10" rx="4" fill={color} opacity="0.12" />
    <rect x="6" y="16" width="40" height="4"  fill={color} opacity="0.12" />
    {/* Hanger pins */}
    <line x1="16" y1="6"  x2="16" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
    <line x1="36" y1="6"  x2="36" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
    {/* Date grid dots */}
    {[14,22,30,38].map(x => [26,33,40].map(y => (
      <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill={color} opacity="0.25" />
    )))}
    {/* Highlighted "booked" cell */}
    <rect x="20" y="29" width="12" height="9" rx="2" fill={color} opacity="0.18" stroke={color} strokeWidth="0.7" />
    {/* Checkmark in booked cell */}
    <path d="M23 33.5l2.5 2.5 4-4" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
  </svg>
)

const IllustrationEmail = ({ color }: { color: string }) => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    {/* Envelope body */}
    <rect x="4" y="12" width="44" height="30" rx="4" fill={color} opacity="0.07" stroke={color} strokeWidth="0.8" />
    {/* Flap fold */}
    <path d="M4 16l22 15 22-15" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" fill="none" />
    {/* Bottom fold lines */}
    <line x1="4"  y1="42" x2="19" y2="29" stroke={color} strokeWidth="0.8" opacity="0.25" />
    <line x1="48" y1="42" x2="33" y2="29" stroke={color} strokeWidth="0.8" opacity="0.25" />
    {/* Personalisation "name" lines */}
    <line x1="18" y1="22" x2="34" y2="22" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
    <line x1="20" y1="26" x2="32" y2="26" stroke={color} strokeWidth="1"   strokeLinecap="round" opacity="0.3" />
    {/* Send arrow */}
    <circle cx="43" cy="10" r="6" fill={color} opacity="0.12" stroke={color} strokeWidth="0.7" />
    <path d="M40 10h6M44 8l2 2-2 2" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
  </svg>
)

const IllustrationLinkedIn = ({ color }: { color: string }) => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    {/* Central person */}
    <circle cx="26" cy="22" r="6" fill={color} opacity="0.1" stroke={color} strokeWidth="0.8" />
    <circle cx="26" cy="20" r="2.5" fill={color} opacity="0.55" />
    <path d="M20 28c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke={color} strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.4" />
    {/* Satellite nodes */}
    <circle cx="9"  cy="14" r="4" fill={color} opacity="0.1" stroke={color} strokeWidth="0.7" />
    <circle cx="9"  cy="13" r="1.5" fill={color} opacity="0.5" />
    <circle cx="43" cy="14" r="4" fill={color} opacity="0.1" stroke={color} strokeWidth="0.7" />
    <circle cx="43" cy="13" r="1.5" fill={color} opacity="0.5" />
    <circle cx="9"  cy="38" r="4" fill={color} opacity="0.1" stroke={color} strokeWidth="0.7" />
    <circle cx="9"  cy="37" r="1.5" fill={color} opacity="0.5" />
    <circle cx="43" cy="38" r="4" fill={color} opacity="0.1" stroke={color} strokeWidth="0.7" />
    <circle cx="43" cy="37" r="1.5" fill={color} opacity="0.5" />
    {/* Connection lines */}
    <line x1="13" y1="17" x2="21" y2="22" stroke={color} strokeWidth="0.8" opacity="0.3" strokeDasharray="2 1.5" />
    <line x1="39" y1="17" x2="31" y2="22" stroke={color} strokeWidth="0.8" opacity="0.3" strokeDasharray="2 1.5" />
    <line x1="13" y1="36" x2="21" y2="28" stroke={color} strokeWidth="0.8" opacity="0.3" strokeDasharray="2 1.5" />
    <line x1="39" y1="36" x2="31" y2="28" stroke={color} strokeWidth="0.8" opacity="0.3" strokeDasharray="2 1.5" />
    {/* Bottom pipeline bar */}
    <rect x="14" y="44" width="24" height="4" rx="2" fill={color} opacity="0.15" />
    <rect x="14" y="44" width="14" height="4" rx="2" fill={color} opacity="0.4" />
  </svg>
)

const IllustrationFunnel = ({ color }: { color: string }) => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    {/* Funnel tiers — narrowing */}
    <path d="M4 8h44l-10 12H14L4 8z"   fill={color} opacity="0.10" stroke={color} strokeWidth="0.7" strokeLinejoin="round" />
    <path d="M14 20h24l-8 12H22L14 20z" fill={color} opacity="0.18" stroke={color} strokeWidth="0.7" strokeLinejoin="round" />
    <path d="M22 32h8l-2 10h-4l-2-10z"  fill={color} opacity="0.32" stroke={color} strokeWidth="0.7" strokeLinejoin="round" />
    {/* Optimise arrows (right side) */}
    <path d="M41 22l4-3-4-3" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" fill="none" />
    <line x1="36" y1="19" x2="45" y2="19" stroke={color} strokeWidth="1" opacity="0.4" strokeLinecap="round" />
    <path d="M41 34l4-3-4-3" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" fill="none" />
    <line x1="36" y1="31" x2="45" y2="31" stroke={color} strokeWidth="1" opacity="0.3" strokeLinecap="round" />
    {/* Output star/glow */}
    <circle cx="26" cy="46" r="3.5" fill={color} opacity="0.25" />
    <circle cx="26" cy="46" r="1.8" fill={color} opacity="0.8"  />
  </svg>
)

const IllustrationConsulting = ({ color }: { color: string }) => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    {/* Rising bar chart */}
    <rect x="6"  y="36" width="6" height="10" rx="1.5" fill={color} opacity="0.22" />
    <rect x="16" y="28" width="6" height="18" rx="1.5" fill={color} opacity="0.35" />
    <rect x="26" y="20" width="6" height="26" rx="1.5" fill={color} opacity="0.52" />
    <rect x="36" y="12" width="6" height="34" rx="1.5" fill={color} opacity="0.72" />
    {/* Trend line */}
    <polyline points="9,34 19,26 29,18 39,10" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />
    {/* Lightbulb (strategy) */}
    <circle cx="43" cy="9" r="6.5" fill={color} opacity="0.1" stroke={color} strokeWidth="0.7" />
    <path d="M40.5 7a2.5 2.5 0 015 0c0 1.5-1 2-2.5 3v1" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
    <line x1="41.5" y1="12.5" x2="44.5" y2="12.5" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    {/* X-axis baseline */}
    <line x1="4" y1="48" x2="48" y2="48" stroke={color} strokeWidth="0.8" opacity="0.18" strokeLinecap="round" />
  </svg>
)

/* ── Service data ─────────────────────────────────────────── */
const services = [
  {
    number: '01',
    Illustration: IllustrationB2B,
    title: 'B2B Lead Generation',
    description:
      'We identify and connect with businesses that match your ideal customer profile, helping you generate qualified opportunities consistently.',
    outcome: 'More Qualified Prospects',
    color: '#00C853',
  },
  {
    number: '02',
    Illustration: IllustrationCalendar,
    title: 'Appointment Setting',
    description:
      'We help turn interested prospects into scheduled meetings, allowing you to focus on closing deals instead of chasing leads.',
    outcome: 'More Booked Meetings',
    color: '#5EF38C',
  },
  {
    number: '03',
    Illustration: IllustrationEmail,
    title: 'Cold Email Outreach',
    description:
      'Personalized email campaigns designed to start meaningful conversations with potential customers and decision-makers.',
    outcome: 'Higher Response Rates',
    color: '#00C853',
  },
  {
    number: '04',
    Illustration: IllustrationLinkedIn,
    title: 'LinkedIn Lead Generation',
    description:
      'Build relationships with business owners, founders, and decision-makers through targeted LinkedIn outreach.',
    outcome: 'Stronger Business Network',
    color: '#5EF38C',
  },
  {
    number: '05',
    Illustration: IllustrationFunnel,
    title: 'Sales Funnel Optimisation',
    description:
      'Improve the way leads move through your sales process to increase conversions and maximize opportunities.',
    outcome: 'Better Conversion Rates',
    color: '#00C853',
  },
  {
    number: '06',
    Illustration: IllustrationConsulting,
    title: 'Lead Generation Consulting',
    description:
      'Get expert guidance on building a repeatable lead generation system tailored to your business and industry.',
    outcome: 'A Predictable Growth System',
    color: '#5EF38C',
  },
]

/* ── Component ────────────────────────────────────────────── */
export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 45, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 82%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="relative py-32 md:py-44 overflow-hidden">

      {/* Backgrounds */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,200,83,0.06) 0%, rgba(94,243,140,0.03) 50%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ── Heading ───────────────────────────────────── */}
        <div ref={headingRef} className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-6 bg-[#00C853]/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00C853]/70">
              What We Do
            </span>
            <div className="h-px w-6 bg-[#00C853]/40" />
          </div>

          <h2
            className="font-display font-extrabold text-white tracking-tight mb-5 leading-[1.07]"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)', textWrap: 'balance' } as React.CSSProperties}
          >
            Lead Generation Services Designed For{' '}
            <span className="text-gradient">Business Growth</span>
          </h2>

          <p className="font-sans text-base md:text-lg text-white/45 leading-relaxed">
            Whether you&apos;re looking to generate more enquiries, book more meetings, or build a predictable
            sales pipeline, our services are designed to help your business attract and convert the right prospects.
          </p>
        </div>

        {/* ── 3×2 Service Grid ──────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map(({ number, Illustration, title, description, outcome, color }, i) => (
            <motion.div
              key={number}
              className="group conic-border"
              initial={{ y: 55, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
              whileHover={{ y: -5, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            >
              <div
                className="glass-premium glass-hover h-full rounded-2xl p-6 md:p-7 relative overflow-hidden flex flex-col"
              >
                {/* Top accent line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${color} 50%, transparent)` }}
                />

                {/* Corner ambient glow on hover */}
                <div
                  className="absolute -top-10 -left-10 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${color}12, transparent 70%)` }}
                />

                {/* Service number + illustration row */}
                <div className="flex items-start justify-between mb-5">
                  {/* Number pill */}
                  <span
                    className="font-mono text-[10px] font-semibold tracking-[0.2em] px-2.5 py-1 rounded-full"
                    style={{
                      color: `${color}80`,
                      background: `${color}0d`,
                      border: `1px solid ${color}1a`,
                    }}
                  >
                    {number}
                  </span>

                  {/* Illustration container */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center relative flex-shrink-0"
                    style={{
                      background: `${color}0a`,
                      border: `1px solid ${color}16`,
                    }}
                  >
                    <Illustration color={color} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-white text-lg leading-snug mb-2.5 tracking-tight">
                  {title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-white/45 leading-relaxed flex-1 mb-5">
                  {description}
                </p>

                {/* Outcome pill */}
                <div
                  className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full"
                  style={{
                    background: `${color}0d`,
                    border: `1px solid ${color}20`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: color, opacity: 0.75 }}
                  />
                  <span
                    className="font-sans text-[11px] font-medium leading-none"
                    style={{ color: `${color}85` }}
                  >
                    {outcome}
                  </span>
                </div>

                {/* Bottom glow on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}35, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Highlight Banner ──────────────────────────── */}
        <motion.div
          className="mt-14 md:mt-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        >
          <div className="relative glass-premium shimmer rounded-2xl overflow-hidden">
            {/* Left accent bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px]"
              style={{ background: 'linear-gradient(180deg, transparent, #00C853 30%, #5EF38C 70%, transparent)' }}
            />

            {/* Ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 45% 100% at 0% 50%, rgba(0,200,83,0.05) 0%, transparent 70%)' }}
            />

            <div className="relative px-8 md:px-12 py-9 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-xl">
                <p
                  className="font-display font-bold text-white leading-snug mb-2"
                  style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)' }}
                >
                  Not Sure Which Service Is Right For Your Business?
                </p>
                <p className="font-sans text-sm text-white/45 leading-relaxed">
                  Every business is different. We&apos;ll help you identify the fastest path to generating
                  more qualified opportunities.
                </p>
              </div>

              <div className="flex-shrink-0">
                <motion.a
                  href="#cta"
                  className="btn-primary px-7 py-3.5 text-sm font-semibold text-white inline-flex items-center gap-2.5 whitespace-nowrap"
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.15 }}
                >
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 flex-shrink-0">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Book A Free Strategy Call
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
