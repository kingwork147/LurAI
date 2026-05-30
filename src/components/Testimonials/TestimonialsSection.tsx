'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote:
      'Our pipeline tripled in 90 days. Lur AI built our entire lead gen and outreach system in under a week — qualified leads started coming in before we even finished onboarding.',
    name: 'Sarah Chen',
    title: 'VP of Sales',
    company: 'Nexus Clinics',
    avatar: 'SC',
    gradientFrom: '#00C853',
    gradientTo: '#5EF38C',
    stars: 5,
  },
  {
    quote:
      'We were manually prospecting for hours a day. Now our AI outreach system runs 24/7, books meetings automatically, and our close rate went from 18% to 43% in two months.',
    name: 'Marcus Williams',
    title: 'Founder',
    company: 'Orbital SaaS',
    avatar: 'MW',
    gradientFrom: '#00C853',
    gradientTo: '#5EF38C',
    stars: 5,
  },
  {
    quote:
      'Lur AI didn\'t just build us a CRM — they built our entire revenue infrastructure. Lead gen, follow-ups, pipeline tracking. We went from $40K to $120K MRR in one quarter.',
    name: 'Priya Sharma',
    title: 'CEO',
    company: 'Quantum Real Estate',
    avatar: 'PS',
    gradientFrom: '#00C853',
    gradientTo: '#5EF38C',
    stars: 5,
  },
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-heading', {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.testimonial-heading', start: 'top 80%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="testimonial-heading text-center mb-14 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-6 bg-[#00C853]/40" />
            <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#00C853]/70">
              Testimonials
            </span>
            <div className="h-px w-6 bg-[#00C853]/40" />
          </div>
          <h2
            className="font-display font-extrabold text-white tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Revenue results from{' '}
            <span className="text-gradient">real businesses.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="testimonial-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
            >
              <div className="glass glass-hover rounded-2xl p-6 md:p-7 h-full flex flex-col relative overflow-hidden group">
                {/* Quote glow */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${t.gradientFrom}40, transparent)`,
                  }}
                />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.stars)].map((_, si) => (
                    <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill={t.gradientFrom} opacity="0.9">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-sans text-sm text-white/60 leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${t.gradientFrom}, ${t.gradientTo})`,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm text-white">
                      {t.name}
                    </div>
                    <div className="font-sans text-xs text-white/35">
                      {t.title} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust logos row */}
        <div className="mt-16 text-center">
          <p className="font-sans text-xs text-white/20 tracking-widest uppercase mb-8">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-20">
            {['Nexus', 'Orbital', 'Quantum', 'Axion', 'Meridian', 'Zenith'].map((name) => (
              <span key={name} className="font-display font-bold text-lg text-white tracking-wider">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
