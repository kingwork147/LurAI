'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Icons ──────────────────────────────────────────────────── */

function IconCalendar() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2.5" y="4" width="17" height="15.5" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 8.5h17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M7 2.5v3M15 2.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="6.5" y="11.5" width="3" height="3" rx="0.75" fill="currentColor" opacity="0.6" />
      <rect x="12" y="11.5" width="3" height="3" rx="0.75" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

function IconWhatsApp() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M11 2C6.03 2 2 6.03 2 11c0 1.6.42 3.1 1.14 4.4L2 20l4.74-1.12A9 9 0 1 0 11 2z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
      />
      <path
        d="M8 8.5s.5-.5 1-.5c.28 0 .55.22.7.5l.6 1.2c.1.22.05.5-.1.68l-.3.32c-.1.1-.1.26-.02.38.3.44.88 1.02 1.32 1.32.12.08.28.08.38-.02l.32-.3c.18-.16.46-.2.68-.1l1.2.6c.28.15.5.42.5.7 0 .5-.5 1-.5 1C10.5 14.5 7.5 11.5 8 8.5z"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L3.5 4.5v5C3.5 13.5 6.5 17 10 18c3.5-1 6.5-4.5 6.5-8.5v-5L10 2z"
        stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M7.5 10l1.5 1.5L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconPerson() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3.5 17c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function IconBulb() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5a5.5 5.5 0 0 1 3.5 9.7V14a1 1 0 0 1-1 1H7.5a1 1 0 0 1-1-1v-1.8A5.5 5.5 0 0 1 10 2.5z"
        stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M7.5 16.5h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function IconArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 10h14M12 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ── Data ────────────────────────────────────────────────────── */

const trustPoints = [
  {
    Icon: IconPerson,
    title: 'Direct Founder Access',
    desc: 'Work directly with the founder from your first conversation.',
  },
  {
    Icon: IconBulb,
    title: 'Tailored Recommendations',
    desc: 'Get insights specific to your business and market.',
  },
  {
    Icon: IconArrow,
    title: 'Growth-Focused Strategy',
    desc: 'Every recommendation is built around generating more opportunities.',
  },
]

/* ── Section ─────────────────────────────────────────────────── */

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-eyebrow', {
        y: 30, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-eyebrow', start: 'top 85%' },
      })
      gsap.from('.cta-headline', {
        y: 44, opacity: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-headline', start: 'top 82%' },
      })
      gsap.from('.cta-sub', {
        y: 24, opacity: 0, duration: 0.9, ease: 'power2.out',
        scrollTrigger: { trigger: '.cta-sub', start: 'top 84%' },
      })
      gsap.from('.cta-card', {
        y: 36, opacity: 0, duration: 0.85, ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: { trigger: '.cta-cards', start: 'top 78%' },
      })
      gsap.from('.cta-trust-banner', {
        y: 28, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-trust-banner', start: 'top 82%' },
      })
      gsap.from('.cta-trust-point', {
        y: 24, opacity: 0, duration: 0.7, ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.cta-trust-points', start: 'top 80%' },
      })
      gsap.from('.cta-closing', {
        y: 48, opacity: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-closing', start: 'top 80%' },
      })
      gsap.from('.cta-footer-text', {
        y: 18, opacity: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.cta-footer-text', start: 'top 90%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="cta" className="relative py-32 md:py-48 overflow-hidden">

      {/* ── Backgrounds ──────────────────────────────────────── */}
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />

      {/* Strong central glow — this is the final section */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,200,83,0.11) 0%, rgba(0,200,83,0.04) 45%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(0,200,83,0.06) 0%, transparent 60%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* ── Eyebrow ──────────────────────────────────────────── */}
        <div className="cta-eyebrow flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-6 bg-[#00C853]/40" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00C853]/70">
            Ready To Grow?
          </span>
          <div className="h-px w-6 bg-[#00C853]/40" />
        </div>

        {/* ── Main headline ────────────────────────────────────── */}
        <div className="cta-headline text-center mb-6">
          <h2
            className="font-display font-extrabold tracking-tight leading-[1.06] text-white"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', textWrap: 'balance' } as React.CSSProperties}
          >
            Let&apos;s Build A Predictable{' '}
            <span className="text-gradient">Lead Generation System</span>
            {' '}For Your Business
          </h2>
        </div>

        {/* ── Subheadline ──────────────────────────────────────── */}
        <p className="cta-sub font-sans text-base md:text-lg text-white/42 leading-relaxed max-w-2xl mx-auto text-center mb-16 md:mb-20">
          Whether you&apos;re looking to generate more enquiries, book more meetings, or create a
          steady flow of new business opportunities, we&apos;ll help you identify the right strategy
          and next steps.
        </p>

        {/* ── Dual CTA cards ───────────────────────────────────── */}
        <div className="cta-cards grid grid-cols-1 md:grid-cols-2 gap-5 mb-14 md:mb-16">

          {/* Primary card — Book Strategy Call */}
          <motion.div
            className="cta-card relative rounded-3xl overflow-hidden"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'rgba(0,200,83,0.05)',
              border: '1px solid rgba(0,200,83,0.22)',
              boxShadow: '0 0 0 1px rgba(0,200,83,0.06), inset 0 1px 0 rgba(0,200,83,0.08)',
            }}
          >
            {/* Top glow line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,83,0.5) 40%, rgba(94,243,140,0.3) 60%, transparent)' }}
            />
            {/* Ambient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,200,83,0.07) 0%, transparent 70%)' }}
            />

            <div className="relative p-8 md:p-9 flex flex-col h-full">
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6 text-[#00C853]"
                style={{ background: 'rgba(0,200,83,0.1)', border: '1px solid rgba(0,200,83,0.22)' }}
              >
                <IconCalendar />
              </div>

              <h3 className="font-display font-bold text-white text-xl md:text-2xl leading-snug mb-3">
                Book A Free Strategy Call
              </h3>
              <p className="font-sans text-sm md:text-[15px] text-white/50 leading-relaxed mb-8 flex-1">
                Schedule a no-obligation conversation to discuss your business, growth goals, and
                lead generation opportunities.
              </p>

              <a
                href="https://calendly.com/rajprabhuwork"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2.5 whitespace-nowrap"
              >
                <IconCalendar />
                Book My Free Strategy Call
              </a>
            </div>
          </motion.div>

          {/* Secondary card — WhatsApp */}
          <motion.div
            className="cta-card relative rounded-3xl overflow-hidden"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Subtle WhatsApp glow on hover */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,211,102,0.04) 0%, transparent 70%)' }}
            />

            <div className="relative p-8 md:p-9 flex flex-col h-full">
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6"
                style={{
                  background: 'rgba(37,211,102,0.08)',
                  border: '1px solid rgba(37,211,102,0.18)',
                  color: '#25D366',
                }}
              >
                <IconWhatsApp />
              </div>

              <h3 className="font-display font-bold text-white text-xl md:text-2xl leading-snug mb-3">
                Chat On WhatsApp
              </h3>
              <p className="font-sans text-sm md:text-[15px] text-white/50 leading-relaxed mb-8 flex-1">
                Prefer a quick conversation? Send us a message and let&apos;s discuss how we can
                help your business grow.
              </p>

              <motion.a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-sans font-semibold text-sm whitespace-nowrap transition-all duration-200"
                style={{
                  background: 'rgba(37,211,102,0.1)',
                  border: '1px solid rgba(37,211,102,0.25)',
                  color: '#25D366',
                }}
                whileHover={{
                  background: 'rgba(37,211,102,0.18)',
                  borderColor: 'rgba(37,211,102,0.45)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                <IconWhatsApp />
                Start WhatsApp Conversation
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* ── Trust statement ──────────────────────────────────── */}
        <div className="cta-trust-banner relative rounded-2xl overflow-hidden mb-10">
          {/* Left accent bar */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px]"
            style={{ background: 'linear-gradient(180deg, transparent, #00C853 30%, #5EF38C 70%, transparent)' }}
          />
          <div
            className="relative pl-8 pr-8 py-7 md:py-8 flex flex-col md:flex-row md:items-center md:gap-10"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '1rem',
            }}
          >
            {/* Shield icon */}
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 mb-4 md:mb-0 text-[#00C853]"
              style={{ background: 'rgba(0,200,83,0.08)', border: '1px solid rgba(0,200,83,0.15)' }}
            >
              <IconShield />
            </div>

            <div>
              <p className="font-display font-bold text-white text-base md:text-lg leading-snug mb-1">
                No Pressure. No Long Sales Pitch.
              </p>
              <p className="font-sans text-sm text-white/45 leading-relaxed">
                Our first conversation is simply about understanding your business, your goals, and
                whether we&apos;re the right fit to work together.
              </p>
            </div>
          </div>
        </div>

        {/* ── Three trust points ───────────────────────────────── */}
        <div className="cta-trust-points grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20 md:mb-28">
          {trustPoints.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={i}
              className="cta-trust-point group relative rounded-2xl p-6 cursor-default"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(0,200,83,0.12)' }}
              />

              <div
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl mb-4 text-[#00C853]"
                style={{ background: 'rgba(0,200,83,0.08)', border: '1px solid rgba(0,200,83,0.14)' }}
              >
                <Icon />
              </div>

              <p className="font-display font-semibold text-white text-[15px] leading-snug mb-1.5">
                {title}
              </p>
              <p className="font-sans text-xs text-white/45 leading-relaxed">
                {desc}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,83,0.3), transparent)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Final closing statement ──────────────────────────── */}
        <div className="cta-closing">
          <div
            className="relative rounded-3xl overflow-hidden text-center px-8 md:px-16 py-16 md:py-20"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,83,0.55) 40%, rgba(94,243,140,0.35) 60%, transparent)' }}
            />
            {/* Strong ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 0%, rgba(0,200,83,0.08) 0%, transparent 65%)' }}
            />
            {/* Bottom glow */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 100%, rgba(0,200,83,0.05) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }}
            />

            <div className="relative">
              {/* Decorative quote-mark */}
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8"
                style={{
                  background: 'rgba(0,200,83,0.07)',
                  border: '1px solid rgba(0,200,83,0.15)',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 4L4.5 14 14 24" stroke="#00C853" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                  <path d="M23.5 4L14 14l9.5 10" stroke="#5EF38C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
                </svg>
              </div>

              <h2
                className="font-display font-extrabold tracking-tight leading-[1.06] text-white mb-5"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)', textWrap: 'balance' } as React.CSSProperties}
              >
                Your Next Customer Is Already{' '}
                <span className="text-gradient">Looking For A Solution.</span>
              </h2>

              <p
                className="font-sans text-white/45 leading-relaxed max-w-xl mx-auto mb-10"
                style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}
              >
                The question is whether they&apos;ll find your business or your competitor&apos;s
                first.{' '}
                <span className="text-white/70 font-medium">
                  Let&apos;s build a system that helps them find you.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <motion.a
                  href="https://calendly.com/rajprabhuwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  Book A Free Strategy Call
                </motion.a>
                <a
                  href="mailto:rajprabhuwork@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm text-white/60 border border-white/10 hover:border-white/22 hover:text-white/85 transition-all duration-200 whitespace-nowrap"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer transition text ───────────────────────────── */}
        <p className="cta-footer-text font-sans text-xs text-white/22 text-center mt-14 tracking-wide leading-relaxed">
          Helping Tamil Nadu businesses generate more leads, more conversations, and more opportunities.
        </p>

      </div>
    </section>
  )
}
