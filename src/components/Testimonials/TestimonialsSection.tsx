'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Trust card icons ───────────────────────────────────── */

function IconChat({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="3.5" width="16" height="10.5" rx="2.5" stroke={color} strokeWidth="1.3" opacity="0.7" />
      <path d="M5 14l-2.5 3.5 5-2.5" stroke={color} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <line x1="6" y1="8" x2="14" y2="8" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
      <line x1="6" y1="11" x2="10.5" y2="11" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
    </svg>
  )
}

function IconTarget({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke={color} strokeWidth="1.2" opacity="0.3" />
      <circle cx="10" cy="10" r="5" stroke={color} strokeWidth="1.2" opacity="0.55" />
      <circle cx="10" cy="10" r="2.2" fill={color} opacity="0.85" />
      <line x1="10" y1="2" x2="10" y2="5" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <line x1="10" y1="15" x2="10" y2="18" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <line x1="2" y1="10" x2="5" y2="10" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <line x1="15" y1="10" x2="18" y2="10" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}

function IconPerson({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="6.5" r="3.5" stroke={color} strokeWidth="1.3" opacity="0.75" />
      <path d="M3 18c0-3.9 3.1-6.5 7-6.5s7 2.6 7 6.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
      <circle cx="16" cy="5" r="2.5" fill={color} opacity="0.12" stroke={color} strokeWidth="0.8" />
      <polyline points="14.8,5 16,6.2 17.8,3.7" stroke={color} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
    </svg>
  )
}

function IconGrowth({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <polyline points="2,16 6.5,11 10,13.5 15,7 18.5,10" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" fill="none" />
      <circle cx="18.5" cy="6" r="2" fill={color} opacity="0.75" />
      <polyline points="16.5,6 18.5,6 18.5,8" stroke={color} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
      <line x1="2" y1="17.5" x2="18.5" y2="17.5" stroke={color} strokeWidth="0.9" opacity="0.18" />
    </svg>
  )
}

/* ── Data ───────────────────────────────────────────────── */

const featured = {
  quote:
    'Lur AI helped us rethink how we approach lead generation. Instead of relying entirely on referrals, we now have a more structured process for reaching potential customers and creating new opportunities.',
  name: 'Client Name',
  title: 'Business Owner',
  initials: 'CN',
}

const cards = [
  {
    quote:
      'The communication was clear, the process was simple, and the focus was always on generating real business opportunities.',
    title: 'Business Founder',
    initials: 'BF',
    color: '#00C853',
  },
  {
    quote:
      'What stood out most was the personalized approach. Every recommendation was tailored to our business instead of using a one-size-fits-all strategy.',
    title: 'Managing Director',
    initials: 'MD',
    color: '#5EF38C',
  },
  {
    quote:
      'Working directly with the founder made a huge difference. We always knew what was happening and what the next steps were.',
    title: 'Business Owner',
    initials: 'BO',
    color: '#00C853',
  },
]

const trustCards = [
  {
    Icon: IconChat,
    title: 'Clear Communication',
    description: 'Regular updates and transparent reporting.',
    color: '#00C853',
  },
  {
    Icon: IconTarget,
    title: 'Personalized Strategy',
    description: 'Tailored to your business and goals.',
    color: '#5EF38C',
  },
  {
    Icon: IconPerson,
    title: 'Direct Founder Access',
    description: 'Work directly with the person managing your growth system.',
    color: '#00C853',
  },
  {
    Icon: IconGrowth,
    title: 'Long-Term Focus',
    description: 'Built for sustainable growth, not short-term tricks.',
    color: '#5EF38C',
  },
]

/* ── Quote mark decoration ──────────────────────────────── */

function QuoteMark({ size = 72, color = 'rgba(0,200,83,0.18)' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 72 50"
      fill="none"
      aria-hidden="true"
    >
      <text x="0" y="46" fontFamily="Georgia, serif" fontSize="72" fill={color} opacity="1">
        &ldquo;
      </text>
    </svg>
  )
}

/* ── Avatar initials ────────────────────────────────────── */

function Avatar({ initials, size = 'md' }: { initials: string; size?: 'sm' | 'md' | 'lg' }) {
  const dim = size === 'lg' ? 'w-14 h-14 text-sm' : size === 'sm' ? 'w-8 h-8 text-[10px]' : 'w-10 h-10 text-xs'
  return (
    <div
      className={`${dim} rounded-full flex items-center justify-center font-semibold text-white flex-shrink-0`}
      style={{ background: 'linear-gradient(135deg, #00C853, #5EF38C)' }}
    >
      {initials}
    </div>
  )
}

/* ── Component ──────────────────────────────────────────── */

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tm-heading', {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.tm-heading', start: 'top 82%' },
      })
      gsap.from('.tm-featured', {
        y: 36, opacity: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.tm-featured', start: 'top 80%' },
      })
      gsap.from('.tm-card', {
        y: 32, opacity: 0, duration: 0.75, ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.tm-grid', start: 'top 80%' },
      })
      gsap.from('.tm-trust-label', {
        y: 28, opacity: 0, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: '.tm-trust-label', start: 'top 82%' },
      })
      gsap.from('.tm-trust-card', {
        y: 28, opacity: 0, duration: 0.7, ease: 'power2.out',
        stagger: 0.09,
        scrollTrigger: { trigger: '.tm-trust-grid', start: 'top 80%' },
      })
      gsap.from('.tm-cta', {
        y: 36, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.tm-cta', start: 'top 82%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 md:py-44 overflow-hidden">

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
        <div className="tm-heading text-center mb-14 md:mb-18">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-6 bg-[#00C853]/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00C853]/70">
              Client Stories
            </span>
            <div className="h-px w-6 bg-[#00C853]/40" />
          </div>
          <h2
            className="font-display font-extrabold tracking-tight leading-[1.08] text-white mb-5"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', textWrap: 'balance' } as React.CSSProperties}
          >
            Businesses Trust Lur AI To{' '}
            <span className="text-gradient">Generate More Opportunities</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
            Every business is different, but the goal is always the same — more conversations,
            more opportunities, and more growth.
          </p>
        </div>

        {/* ── Featured testimonial ────────────────────────────── */}
        <motion.div
          className="tm-featured mb-5"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative glass-premium rounded-3xl overflow-hidden">
            {/* Accent top line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,83,0.55) 40%, rgba(94,243,140,0.3) 60%, transparent)' }}
            />
            {/* Left accent bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px]"
              style={{ background: 'linear-gradient(180deg, transparent, #00C853 30%, #5EF38C 70%, transparent)' }}
            />
            {/* Ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 55% 80% at 0% 50%, rgba(0,200,83,0.06) 0%, transparent 70%)' }}
            />

            <div className="relative px-8 md:px-14 py-10 md:py-14">
              {/* Large quote mark */}
              <div className="absolute top-6 right-8 md:right-14 opacity-70 select-none pointer-events-none">
                <QuoteMark size={80} color="rgba(0,200,83,0.15)" />
              </div>

              <blockquote
                className="font-display font-semibold text-white/82 leading-[1.55] mb-8 max-w-3xl"
                style={{ fontSize: 'clamp(1.05rem, 2vw, 1.35rem)' }}
              >
                &ldquo;{featured.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Avatar initials={featured.initials} size="lg" />
                <div>
                  <div className="font-display font-bold text-base text-white leading-tight">
                    {featured.name}
                  </div>
                  <div className="font-sans text-sm text-white/40 mt-0.5">{featured.title}</div>
                </div>
                {/* Verified badge */}
                <span
                  className="ml-2 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{
                    color: 'rgba(0,200,83,0.65)',
                    background: 'rgba(0,200,83,0.07)',
                    border: '1px solid rgba(0,200,83,0.15)',
                  }}
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ background: '#00C853', boxShadow: '0 0 5px rgba(0,200,83,0.9)' }}
                  />
                  Verified Client
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 3-card grid ──────────────────────────────────────── */}
        <div className="tm-grid grid grid-cols-1 md:grid-cols-3 gap-4 mb-24 md:mb-32">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="tm-card conic-border group"
              whileHover={{ y: -5, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } }}
            >
              <div className="glass-premium glass-hover h-full rounded-2xl p-6 md:p-7 relative overflow-hidden flex flex-col">
                {/* Hover top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${card.color}55, transparent)` }}
                />

                {/* Quote mark */}
                <div className="mb-4 select-none pointer-events-none -ml-1">
                  <QuoteMark size={44} color={`${card.color}25`} />
                </div>

                {/* Quote */}
                <blockquote className="font-sans text-sm text-white/58 leading-relaxed flex-1 mb-6">
                  &ldquo;{card.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--divider)' }}>
                  <Avatar initials={card.initials} size="sm" />
                  <div>
                    <div className="font-sans text-xs text-white/38">{card.title}</div>
                    <div
                      className="flex items-center gap-1 mt-0.5"
                    >
                      <span
                        className="inline-block w-1 h-1 rounded-full"
                        style={{ background: card.color, boxShadow: `0 0 4px ${card.color}` }}
                      />
                      <span className="font-mono text-[9px] tracking-widest text-[#00C853]/50 uppercase">
                        Lur AI Client
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom accent — hover */}
                <div
                  className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${card.color}35, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Trust section ────────────────────────────────────── */}
        <div className="mb-20 md:mb-28">
          {/* Label + heading */}
          <div className="tm-trust-label text-center mb-10 md:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-6 bg-[#00C853]/40" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00C853]/70">
                Our Commitment
              </span>
              <div className="h-px w-6 bg-[#00C853]/40" />
            </div>
            <h3
              className="font-display font-extrabold text-white tracking-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', textWrap: 'balance' } as React.CSSProperties}
            >
              What You Can <span className="text-gradient">Expect</span>
            </h3>
          </div>

          {/* 4-card grid */}
          <div className="tm-trust-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trustCards.map((tc, i) => (
              <motion.div
                key={i}
                className="tm-trust-card glass-premium rounded-2xl p-6 relative overflow-hidden group"
                whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              >
                {/* Hover top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `linear-gradient(90deg, transparent, ${tc.color}55, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `${tc.color}0D`,
                    border: `1px solid ${tc.color}20`,
                  }}
                >
                  <tc.Icon color={tc.color} />
                </div>

                <div className="font-display font-semibold text-[15px] text-white leading-snug mb-2">
                  {tc.title}
                </div>
                <div className="font-sans text-xs text-white/42 leading-relaxed">
                  {tc.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA banner ────────────────────────────────── */}
        <motion.div
          className="tm-cta"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative glass-premium rounded-3xl overflow-hidden text-center">
            {/* Decorative quote marks */}
            <div className="absolute top-6 left-8 opacity-40 select-none pointer-events-none">
              <QuoteMark size={56} color="rgba(0,200,83,0.18)" />
            </div>

            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,83,0.5) 40%, rgba(94,243,140,0.3) 60%, transparent)' }}
            />
            {/* Ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,200,83,0.07) 0%, transparent 70%)' }}
            />

            <div className="relative px-8 md:px-14 py-14 md:py-18">
              <h3
                className="font-display font-extrabold tracking-tight leading-[1.1] text-white mb-4"
                style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.8rem)', textWrap: 'balance' } as React.CSSProperties}
              >
                Ready To Generate More{' '}
                <span className="text-gradient">Business Opportunities?</span>
              </h3>
              <p className="font-sans text-base text-white/42 leading-relaxed max-w-xl mx-auto mb-8">
                Let&apos;s discuss your goals and identify the best lead generation strategy for
                your business.
              </p>
              <a href="#cta" className="btn-primary inline-flex">
                Book A Free Strategy Call
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
