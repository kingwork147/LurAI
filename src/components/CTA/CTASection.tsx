'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
      <path d="M7 2h3l1.5 4-2 1.5c1 2 2.5 3.5 4.5 4.5L15.5 10l4 1.5V15a2 2 0 0 1-2 2C7.5 17 5 9 5 4a2 2 0 0 1 2-2z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
      <path d="M11 2C6.03 2 2 6.03 2 11c0 1.6.42 3.1 1.14 4.4L2 20l4.74-1.12A9 9 0 1 0 11 2z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 8.5s.5-.5 1-.5c.28 0 .55.22.7.5l.6 1.2c.1.22.05.5-.1.68l-.3.32c-.1.1-.1.26-.02.38.3.44.88 1.02 1.32 1.32.12.08.28.08.38-.02l.32-.3c.18-.16.46-.2.68-.1l1.2.6c.28.15.5.42.5.7 0 .5-.5 1-.5 1C10.5 14.5 7.5 11.5 8 8.5z"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M5 14l6 6L23 8" stroke="#00C853" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const inputBase = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '0.75rem',
  color: 'rgba(255,255,255,0.85)',
  outline: 'none',
  width: '100%',
  padding: '0.75rem 1rem',
  fontSize: '0.9rem',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s',
}

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

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
      gsap.from('.cta-form', {
        y: 36, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-form', start: 'top 80%' },
      })
      gsap.from('.cta-alts', {
        y: 20, opacity: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.cta-alts', start: 'top 88%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/mdavoyzr', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const borderColor = (field: string) =>
    focusedField === field ? 'rgba(0,200,83,0.55)' : 'rgba(255,255,255,0.1)'

  return (
    <section ref={sectionRef} id="cta" className="relative py-32 md:py-48 overflow-hidden">

      {/* Backgrounds */}
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,200,83,0.11) 0%, rgba(0,200,83,0.04) 45%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-2xl mx-auto px-6 md:px-10">

        {/* Eyebrow */}
        <div className="cta-eyebrow flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-6 bg-[#00C853]/40" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00C853]/70">Get In Touch</span>
          <div className="h-px w-6 bg-[#00C853]/40" />
        </div>

        {/* Headline */}
        <div className="cta-headline text-center mb-4">
          <h2
            className="font-display font-extrabold tracking-tight leading-[1.06] text-white"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', textWrap: 'balance' } as React.CSSProperties}
          >
            Let&apos;s Build Your{' '}
            <span className="text-gradient">Lead Generation System</span>
          </h2>
        </div>

        {/* Subtext */}
        <p className="cta-sub font-sans text-base text-white/42 leading-relaxed text-center mb-12">
          Fill in the form and we&apos;ll reach out with a tailored strategy for your business.
        </p>

        {/* Form card */}
        <div
          className="cta-form rounded-3xl p-8 md:p-10 mb-8"
          style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)' }}
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 text-center gap-4"
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-2"
                  style={{ background: 'rgba(0,200,83,0.1)', border: '1px solid rgba(0,200,83,0.25)' }}
                >
                  <IconCheck />
                </div>
                <h3 className="font-display font-bold text-white text-xl">We&apos;ve Got Your Details</h3>
                <p className="font-sans text-sm text-white/45 max-w-xs leading-relaxed">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours with a tailored strategy.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 font-sans text-xs text-white/30 hover:text-white/55 transition-colors underline underline-offset-2"
                >
                  Submit another response
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs text-white/40 tracking-wide">Full Name *</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Raj Kumar"
                      style={{ ...inputBase, borderColor: borderColor('name') }}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs text-white/40 tracking-wide">Phone Number *</label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      style={{ ...inputBase, borderColor: borderColor('phone') }}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs text-white/40 tracking-wide">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="raj@yourbusiness.com"
                    style={{ ...inputBase, borderColor: borderColor('email') }}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Business */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs text-white/40 tracking-wide">Business / Company Name</label>
                  <input
                    name="business"
                    type="text"
                    placeholder="Your Business Name"
                    style={{ ...inputBase, borderColor: borderColor('business') }}
                    onFocus={() => setFocusedField('business')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs text-white/40 tracking-wide">Tell Us About Your Goal</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="What are you trying to achieve? What challenges are you facing?"
                    style={{ ...inputBase, resize: 'none', borderColor: borderColor('message') }}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {status === 'error' && (
                  <p className="font-sans text-xs text-red-400/80 text-center">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full py-4 text-base font-semibold text-white mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={status !== 'submitting' ? { scale: 1.01 } : {}}
                  whileTap={status !== 'submitting' ? { scale: 0.98 } : {}}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send My Details'}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Alternative contact options */}
        <div className="cta-alts flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="tel:+916383568574"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-sans font-medium text-sm text-white/55 border border-white/10 hover:border-white/22 hover:text-white/80 transition-all duration-200 whitespace-nowrap"
          >
            <IconPhone />
            Call Us Directly
          </a>
          <motion.a
            href="https://wa.me/916383568574"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-sans font-medium text-sm whitespace-nowrap transition-all duration-200"
            style={{
              background: 'rgba(37,211,102,0.07)',
              border: '1px solid rgba(37,211,102,0.2)',
              color: '#25D366',
            }}
            whileHover={{ background: 'rgba(37,211,102,0.14)', borderColor: 'rgba(37,211,102,0.38)' }}
            whileTap={{ scale: 0.97 }}
          >
            <IconWhatsApp />
            Chat on WhatsApp
          </motion.a>
        </div>

        {/* Trust line */}
        <p className="font-sans text-xs text-white/22 text-center mt-10 tracking-wide">
          No pressure. No long sales pitch. Just a conversation about your growth.
        </p>

      </div>
    </section>
  )
}
