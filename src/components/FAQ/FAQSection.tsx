'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Data ───────────────────────────────────────────────── */

const faqs = [
  {
    question: 'What does Lur AI actually do?',
    answer:
      'Lur AI helps businesses generate more qualified leads and sales opportunities through prospect research, personalized outreach, appointment setting, and lead generation systems designed for sustainable growth.',
  },
  {
    question: 'Who is Lur AI best suited for?',
    answer:
      'We work with startups, agencies, consultants, service providers, B2B companies, and growing businesses looking to generate more enquiries, meetings, and business opportunities.',
  },
  {
    question: 'How is Lur AI different from a traditional marketing agency?',
    answer:
      'Most agencies focus on a wide range of services such as social media, SEO, branding, and advertising. Lur AI specializes in lead generation and business growth systems, allowing us to focus on helping clients create more opportunities and sales conversations.',
  },
  {
    question: 'Do I need a large budget to get started?',
    answer:
      "Not at all. Every business is different, so we recommend starting with a strategy call to understand your goals and identify the most effective approach for your budget and stage of growth.",
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Lead generation is a process, not a one-time activity. While timelines vary depending on your industry, audience, and goals, most businesses begin seeing increased engagement and new opportunities within the first few weeks of implementation.',
  },
  {
    question: 'Will this work for my industry?',
    answer:
      "Lead generation principles remain consistent across industries. During our discovery call, we'll assess your business, target audience, and objectives to determine the most suitable strategy.",
  },
  {
    question: 'Do I need any technical knowledge?',
    answer:
      'No. We handle the strategy, setup, and execution. Our goal is to keep the process simple and focused on helping you grow your business.',
  },
  {
    question: 'What happens after I book a strategy call?',
    answer:
      "We'll discuss your business goals, current challenges, target audience, and growth objectives. Based on that conversation, we'll recommend the most suitable lead generation strategy for your business.",
  },
]

/* ── Toggle icon ────────────────────────────────────────── */

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-5 h-5 flex-shrink-0">
      {/* Horizontal bar — always visible */}
      <span
        className="absolute inset-y-1/2 left-0 right-0 h-[1.5px] rounded-full -translate-y-1/2 transition-colors duration-300"
        style={{ background: open ? '#00C853' : 'var(--icon-muted)' }}
      />
      {/* Vertical bar — fades + shrinks when open */}
      <motion.span
        className="absolute inset-x-1/2 top-0 bottom-0 w-[1.5px] rounded-full -translate-x-1/2"
        style={{ background: open ? '#00C853' : 'var(--icon-muted)' }}
        animate={{ scaleY: open ? 0 : 1, opacity: open ? 0 : 1 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  )
}

/* ── Single accordion item ──────────────────────────────── */

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      layout
      className="faq-item group relative overflow-hidden"
      initial={false}
    >
      {/* Card wrapper */}
      <div
        className="relative rounded-2xl transition-all duration-300"
        style={{
          background: isOpen ? 'var(--surface-card-mid)' : 'var(--surface-card)',
          border: isOpen
            ? '1px solid rgba(0,200,83,0.22)'
            : '1px solid var(--border-default)',
          boxShadow: isOpen
            ? '0 0 0 1px rgba(0,200,83,0.08), inset 0 1px 0 rgba(0,200,83,0.06)'
            : 'none',
        }}
      >
        {/* Left accent bar */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
          animate={{
            opacity: isOpen ? 1 : 0,
            scaleY: isOpen ? 1 : 0.5,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'linear-gradient(180deg, transparent, #00C853 30%, #5EF38C 70%, transparent)',
            transformOrigin: 'center',
          }}
        />

        {/* Top inner glow when open */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px"
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0,200,83,0.4) 40%, rgba(94,243,140,0.2) 60%, transparent)',
          }}
        />

        {/* Question row — clickable */}
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-5 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]/40 rounded-2xl"
          aria-expanded={isOpen}
        >
          {/* Number + question */}
          <div className="flex items-start gap-4 min-w-0">
            <span
              className="font-mono text-[10px] tracking-[0.2em] pt-0.5 flex-shrink-0 transition-colors duration-300"
              style={{ color: isOpen ? '#00C853' : 'var(--text-faint-inline)' }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <span
              className="font-display font-semibold text-[15px] md:text-base leading-snug transition-colors duration-300"
              style={{ color: isOpen ? 'var(--text-primary-inline)' : 'var(--text-body-inline)' }}
            >
              {faq.question}
            </span>
          </div>

          {/* Toggle icon */}
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
            style={{
              background: isOpen ? 'rgba(0,200,83,0.1)' : 'var(--surface-card-mid)',
              border: isOpen ? '1px solid rgba(0,200,83,0.2)' : '1px solid var(--border-default)',
            }}
          >
            <ToggleIcon open={isOpen} />
          </div>
        </button>

        {/* Answer panel */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div className="px-6 pb-6 pl-[3.75rem]">
                <p className="font-sans text-sm md:text-[15px] text-white/55 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

/* ── Section ────────────────────────────────────────────── */

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-heading', {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.faq-heading', start: 'top 82%' },
      })
      gsap.from('.faq-item', {
        y: 28, opacity: 0, duration: 0.65, ease: 'power2.out',
        stagger: 0.07,
        scrollTrigger: { trigger: '.faq-list', start: 'top 78%' },
      })
      gsap.from('.faq-banner', {
        y: 36, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.faq-banner', start: 'top 84%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="faq" className="relative py-32 md:py-44 overflow-hidden">

      {/* Backgrounds */}
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,200,83,0.07) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 md:px-10">

        {/* ── Heading ─────────────────────────────────────────── */}
        <div className="faq-heading text-center mb-14 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-6 bg-[#00C853]/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00C853]/70">
              FAQ
            </span>
            <div className="h-px w-6 bg-[#00C853]/40" />
          </div>
          <h2
            className="font-display font-extrabold tracking-tight leading-[1.08] text-white mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', textWrap: 'balance' } as React.CSSProperties}
          >
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-white/40 leading-relaxed">
            Everything you need to know before getting started with Lur AI.
          </p>
        </div>

        {/* ── Accordion list ──────────────────────────────────── */}
        <div className="faq-list flex flex-col gap-2.5 mb-16 md:mb-20">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* ── Closing banner ──────────────────────────────────── */}
        <motion.div
          className="faq-banner"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative rounded-3xl overflow-hidden text-center"
            style={{
              background: 'var(--surface-card)',
              border: '1px solid var(--border-default)',
            }}
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,83,0.5) 40%, rgba(94,243,140,0.3) 60%, transparent)' }}
            />
            {/* Ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 0%, rgba(0,200,83,0.06) 0%, transparent 70%)' }}
            />

            <div className="relative px-8 md:px-14 py-12 md:py-14">
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6"
                style={{ background: 'rgba(0,200,83,0.1)', border: '1px solid rgba(0,200,83,0.2)' }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="9" stroke="#00C853" strokeWidth="1.4" opacity="0.5" />
                  <path d="M11 7v4.5l3 3" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
                  <circle cx="11" cy="7.5" r="1" fill="#00C853" opacity="0" />
                  <text x="9.5" y="8.5" fill="#00C853" fontSize="5" fontFamily="sans-serif" opacity="0.9">?</text>
                </svg>
              </div>

              <h3
                className="font-display font-extrabold tracking-tight leading-[1.1] text-white mb-3"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', textWrap: 'balance' } as React.CSSProperties}
              >
                Still Have <span className="text-gradient">Questions?</span>
              </h3>
              <p className="font-sans text-base text-white/42 leading-relaxed max-w-lg mx-auto mb-8">
                We&apos;re happy to discuss your business goals and help you determine the best
                path forward.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#cta" className="btn-primary inline-flex items-center justify-center whitespace-nowrap">
                  Book A Free Strategy Call
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm text-white/65 border border-white/10 hover:border-white/22 hover:text-white/88 transition-all duration-200 whitespace-nowrap"
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
