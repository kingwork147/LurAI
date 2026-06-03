'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function IconTarget() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" stroke="currentColor" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <path d="M12 3V6M12 18V21M3 12H6M18 12H21" stroke="currentColor" strokeLinecap="round" />
    </svg>
  )
}

function IconChat() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" strokeWidth="1.5">
      <path
        d="M21 12c0 4.418-4.029 8-9 8a9.77 9.77 0 01-4-.844L3 20l1.168-3.79C3.437 14.975 3 13.536 3 12c0-4.418 4.029-8 9-8s9 3.582 9 8z"
        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M8 12h.01M12 12h.01M16 12h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}

function IconFunnel() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" strokeWidth="1.5">
      <path d="M3 4.5h18L14 12.5V19l-4-2V12.5L3 4.5z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 flex-shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="6.5" fill="rgba(0,200,83,0.12)" stroke="rgba(0,200,83,0.28)" />
      <path d="M4.5 7l2 2 3-3" stroke="#00C853" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const steps = [
  {
    number: '01',
    Icon: IconTarget,
    title: 'Identify Your Ideal Customers',
    description:
      'We research your target market, identify decision-makers, and build a list of prospects that match your ideal customer profile.',
    points: ['Business Research', 'Decision Maker Identification', 'Prospect Database Building'],
  },
  {
    number: '02',
    Icon: IconChat,
    title: 'Start Meaningful Conversations',
    description:
      'We reach out to potential customers with personalized messaging designed to create genuine interest and start valuable business conversations.',
    points: ['Personalized Outreach', 'Multi-Channel Communication', 'Higher Response Rates'],
  },
  {
    number: '03',
    Icon: IconFunnel,
    title: 'Convert Interest Into Opportunities',
    description:
      'When prospects show interest, we help move them into your sales process so you can focus on closing deals instead of chasing leads.',
    points: ['Lead Qualification', 'Appointment Generation', 'Opportunity Tracking'],
  },
]

const results = [
  { value: '3x', label: 'More Qualified Enquiries' },
  { value: '2x', label: 'More Sales Conversations' },
  { value: '5x', label: 'More Business Opportunities' },
  { value: '80%', label: 'Less Time Spent Prospecting' },
]

export default function LeadGenerationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.lg-heading',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.lg-heading', start: 'top 82%' },
        }
      )

      gsap.fromTo(
        '.lg-step',
        { y: 55, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.16, ease: 'power3.out',
          scrollTrigger: { trigger: '.lg-steps', start: 'top 80%' },
        }
      )

      gsap.fromTo(
        '.lg-connector',
        { scaleX: 0 },
        {
          scaleX: 1, duration: 1.5, ease: 'power2.inOut',
          scrollTrigger: { trigger: '.lg-steps', start: 'top 75%' },
        }
      )

      gsap.fromTo(
        '.lg-result',
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.lg-results', start: 'top 82%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="lead-generation" className="relative py-32 md:py-44 overflow-hidden">

      {/* Backgrounds */}
      <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[650px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,200,83,0.07) 0%, rgba(0,200,83,0.03) 45%, transparent 68%)',
          filter: 'blur(80px)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ── Heading ───────────────────────────────── */}
        <div className="lg-heading text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-6 bg-[#00C853]/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00C853]/70">
              Our Lead Generation Process
            </span>
            <div className="h-px w-6 bg-[#00C853]/40" />
          </div>

          <h2
            className="font-display font-extrabold tracking-tight leading-[1.07] mb-5"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            <span className="text-white">How We Turn Strangers Into</span>
            <br />
            <span className="text-gradient">Sales Opportunities</span>
          </h2>

          <p className="font-sans text-base md:text-lg text-white/45 leading-relaxed">
            We help Tamil Nadu businesses consistently generate qualified enquiries,
            sales conversations, and new business opportunities through a proven lead generation system.
          </p>
        </div>

        {/* ── 3-Step Timeline ───────────────────────── */}
        <div className="lg-steps relative">

          {/* Animated connector line — desktop only */}
          <div className="hidden lg:block absolute top-[2.6rem] left-[20%] right-[20%] h-px overflow-hidden">
            <div
              className="lg-connector h-full origin-left"
              style={{
                background: 'linear-gradient(90deg, rgba(0,200,83,0.2), rgba(94,243,140,0.45), rgba(0,200,83,0.2))',
                transform: 'scaleX(0)',
              }}
            />
            {/* Travelling dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
              style={{ background: '#5EF38C', boxShadow: '0 0 8px rgba(94,243,140,0.8)' }}
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 1.5 }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-7">
            {steps.map(({ number, Icon, title, description, points }, i) => (
              <div key={number} className="lg-step flex flex-col">
                <div
                  className="glass-premium rounded-2xl p-7 md:p-8 h-full flex flex-col relative overflow-hidden group transition-all duration-500"
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {/* Hover top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(90deg, transparent, #00C853 50%, transparent)' }}
                  />

                  {/* Corner ambient on hover */}
                  <div
                    className="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(0,200,83,0.1) 0%, transparent 70%)' }}
                  />

                  {/* Step number + icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="relative w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(0,200,83,0.08)', border: '1px solid rgba(0,200,83,0.18)' }}
                    >
                      <span className="font-display font-bold text-sm text-[#00C853]">{number}</span>
                    </div>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-[#00C853]/65 group-hover:text-[#00C853] transition-colors duration-300"
                      style={{ background: 'rgba(0,200,83,0.06)', border: '1px solid rgba(0,200,83,0.1)' }}
                    >
                      <Icon />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display font-bold text-white leading-snug mb-3 tracking-tight"
                    style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)' }}
                  >
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-white/48 leading-relaxed mb-6 flex-1">
                    {description}
                  </p>

                  {/* Key points */}
                  <ul className="space-y-2.5 border-t border-white/5 pt-5">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span className="font-sans text-xs text-white/60 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom glow on hover */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,83,0.35), transparent)' }}
                  />
                </div>

                {/* Mobile down-arrow connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-3">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-5 bg-gradient-to-b from-[#00C853]/35 to-transparent" />
                      <svg viewBox="0 0 10 6" fill="none" className="w-2.5 h-2.5">
                        <path d="M1 1l4 4 4-4" stroke="rgba(0,200,83,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Results Banner ──────────────────────────── */}
        <div className="lg-results mt-20 md:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 text-center"
          >
            <p
              className="font-display font-bold text-white/85 leading-snug"
              style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)' }}
            >
              What Happens When Lead Generation Becomes Predictable?
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map(({ value, label }, i) => (
              <div
                key={i}
                className="lg-result glass-premium rounded-2xl p-6 md:p-7 text-center relative overflow-hidden group"
              >
                {/* Corner glow */}
                <div
                  className="absolute -top-5 -right-5 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(0,200,83,0.14) 0%, transparent 70%)' }}
                />

                <div
                  className="font-display font-extrabold text-gradient leading-none mb-2.5"
                  style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)' }}
                >
                  {value}
                </div>
                <div className="font-sans text-xs text-white/50 leading-snug">{label}</div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,83,0.3), transparent)' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA Block ───────────────────────────────── */}
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
        >
          <div className="glass-premium rounded-3xl px-8 md:px-16 py-12 md:py-14 text-center relative overflow-hidden">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C853]/50 to-transparent" />

            {/* Ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 65% 55% at 50% 0%, rgba(0,200,83,0.07) 0%, transparent 70%)' }}
            />

            <h3
              className="relative font-display font-extrabold text-white tracking-tight leading-tight mb-8"
              style={{ fontSize: 'clamp(1.55rem, 3.2vw, 2.5rem)', textWrap: 'balance' } as React.CSSProperties}
            >
              Ready To Build A Consistent Flow Of
              <br className="hidden md:block" />{' '}
              <span className="text-gradient">New Business Opportunities?</span>
            </h3>

            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA */}
              <motion.a
                href="#cta"
                className="btn-primary px-8 py-4 text-sm font-semibold text-white inline-flex items-center gap-2.5 w-full sm:w-auto justify-center"
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.15 }}
              >
                <ArrowRightIcon />
                Book A Free Strategy Call
              </motion.a>

              {/* WhatsApp secondary */}
              <motion.a
                href="https://wa.me/916383568574?text=Hi%2C%20I%27d%20like%20to%20discuss%20lead%20generation%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white/70 hover:text-white transition-all duration-300 w-full sm:w-auto justify-center"
                style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(37,211,102,0.35)' }}
                transition={{ duration: 0.15 }}
              >
                <span className="text-[#25D366]"><WhatsAppIcon /></span>
                Contact Us On WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
