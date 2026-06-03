'use client'

import { motion } from 'framer-motion'

/* ── Contact icons ────────────────────────────────────────── */

function IconMail() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <rect x="1" y="2.5" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1 2.5l6.5 5.5L14 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M4 1.5h2.5l1 3L5.8 6.2c.8 1.6 2 2.8 3.5 3.5l1.7-1.7 3 1V11.5C14 12.8 11 14 8 11 5 8 1.5 5 1.5 2.5L4 1.5z"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconWhatsApp() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M7.5 1.5a6 6 0 0 1 4.77 9.6l.73 2.4-2.5-.8A6 6 0 1 1 7.5 1.5z"
        stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M5.5 5.8s.3-.35.65-.35c.2 0 .38.15.48.35l.4.8c.07.15.04.34-.08.46l-.2.2c-.07.07-.07.18-.01.26.2.3.6.7.9.9.08.06.19.06.26-.01l.22-.2c.12-.11.31-.14.46-.07l.8.4c.19.1.35.28.35.48 0 .35-.35.65-.35.65C6.5 9.5 4.5 7.5 5 5.8z"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconPin() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M7.5 1.5C5.29 1.5 3.5 3.29 3.5 5.5c0 3.5 4 8 4 8s4-4.5 4-8c0-2.21-1.79-4-4-4z"
        stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="7.5" cy="5.5" r="1.3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconWhatsAppLarge() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.06L2 22l5.12-1.34A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M8.5 8.9s.5-.6 1.05-.6c.3 0 .6.22.77.55l.65 1.3c.12.24.07.53-.12.7l-.38.38c-.12.12-.12.3-.02.43.48.7 1.4 1.62 2.1 2.1.13.09.3.1.43-.02l.38-.38c.18-.18.46-.24.7-.12l1.3.65c.33.17.55.47.55.77 0 .55-.6 1.05-.6 1.05C11.5 16 8 12.5 8.5 8.9z"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconCalendar() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="3" width="13" height="11.5" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1.5 6.5h13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M5 1.5v2.5M11 1.5v2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <rect x="4.5" y="9" width="2.5" height="2.5" rx="0.5" fill="currentColor" opacity="0.55" />
      <rect x="9" y="9" width="2.5" height="2.5" rx="0.5" fill="currentColor" opacity="0.35" />
    </svg>
  )
}

/* ── Logo ─────────────────────────────────────────────────── */

function FooterLogo() {
  return (
    <a href="#" className="flex items-center gap-2.5 mb-5 group w-fit">
      <div className="relative w-7 h-7">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00C853] to-[#5EF38C] opacity-90" />
        <div className="absolute inset-[2px] rounded-md bg-[#071A2E]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="2.5" fill="url(#ftlg)" />
            <circle cx="2" cy="4" r="1.2" fill="rgba(0,200,83,0.7)" />
            <circle cx="12" cy="4" r="1.2" fill="rgba(94,243,140,0.7)" />
            <circle cx="2" cy="10" r="1.2" fill="rgba(94,243,140,0.7)" />
            <circle cx="12" cy="10" r="1.2" fill="rgba(0,200,83,0.7)" />
            <line x1="3.2" y1="4" x2="5.5" y2="6" stroke="rgba(0,200,83,0.4)" strokeWidth="0.8" />
            <line x1="10.8" y1="4" x2="8.5" y2="6" stroke="rgba(94,243,140,0.4)" strokeWidth="0.8" />
            <line x1="3.2" y1="10" x2="5.5" y2="8" stroke="rgba(94,243,140,0.4)" strokeWidth="0.8" />
            <line x1="10.8" y1="10" x2="8.5" y2="8" stroke="rgba(0,200,83,0.4)" strokeWidth="0.8" />
            <defs>
              <linearGradient id="ftlg" x1="0" y1="0" x2="14" y2="14" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00C853" />
                <stop offset="1" stopColor="#5EF38C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <span className="font-display font-bold text-lg tracking-tight text-white">
        Lur <span className="text-gradient">AI</span>
      </span>
    </a>
  )
}

/* ── Data ─────────────────────────────────────────────────── */

const services = [
  'B2B Lead Generation',
  'Appointment Setting',
  'Cold Email Outreach',
  'LinkedIn Lead Generation',
  'Sales Funnel Optimization',
  'Lead Generation Consulting',
]

const industries = [
  'IT Services',
  'SaaS',
  'Manufacturing',
  'Construction',
  'Real Estate',
  'Healthcare',
  'Education',
  'Professional Services',
]

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Why Lur AI', href: '#why-us' },
  { label: 'Meet The Founder', href: '#founder' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#cta' },
]

const cities = [
  'Chennai', 'Coimbatore', 'Madurai', 'Trichy',
  'Salem', 'Tiruppur', 'Erode', 'Thanjavur',
]

const trustBadges = [
  'Founder-Led Execution',
  'Personalized Outreach',
  'Lead Generation Specialists',
  'Tamil Nadu Focused',
]

const contactItems = [
  {
    Icon: IconMail,
    label: 'Email',
    value: 'rajprabhuwork@gmail.com',
    href: 'mailto:rajprabhuwork@gmail.com',
  },
  {
    Icon: IconPhone,
    label: 'Phone',
    value: '+91 00000 00000',
    href: 'tel:+910000000000',
  },
  {
    Icon: IconWhatsApp,
    label: 'WhatsApp',
    value: 'Chat With Us',
    href: 'https://wa.me/',
  },
  {
    Icon: IconPin,
    label: 'Location',
    value: 'Tamil Nadu, India',
    href: null,
  },
]

/* ── Variants ─────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

/* ── Component ───────────────────────────────────────────── */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#050F1C' }}>

      {/* ── Top CTA strip ──────────────────────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(0,200,83,0.07) 0%, rgba(0,200,83,0.02) 100%)',
          borderTop: '1px solid rgba(0,200,83,0.18)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(0,200,83,0.10) 0%, transparent 65%)',
            filter: 'blur(50px)',
          }}
        />
        {/* Top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,83,0.55) 40%, rgba(94,243,140,0.35) 60%, transparent)' }}
        />

        <motion.div
          className="relative max-w-5xl mx-auto px-6 md:px-10 py-14 md:py-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-6 bg-[#00C853]/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00C853]/70">Get Started</span>
            <div className="h-px w-6 bg-[#00C853]/40" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold tracking-tight leading-[1.07] text-white mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', textWrap: 'balance' } as React.CSSProperties}
          >
            Ready To Generate More Leads{' '}
            <span className="text-gradient">And Grow Your Business?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-base text-white/42 leading-relaxed max-w-xl mx-auto mb-8"
          >
            Let&apos;s discuss your goals and identify the fastest path to more qualified opportunities.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="https://calendly.com/rajprabhuwork"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
            >
              <IconCalendar />
              Claim Your Free Lead Audit
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sans font-semibold text-sm whitespace-nowrap transition-all duration-200"
              style={{
                background: 'rgba(37,211,102,0.08)',
                border: '1px solid rgba(37,211,102,0.22)',
                color: '#25D366',
              }}
            >
              <IconWhatsAppLarge />
              Chat On WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Main content ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >

          {/* ── Brand + contact ── */}
          <motion.div
            className="sm:col-span-2 lg:col-span-2"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <FooterLogo />

            <p className="font-sans text-sm text-white/38 leading-relaxed mb-8 max-w-xs">
              Lur AI helps businesses generate more qualified leads, book more meetings, and create
              predictable growth through personalized outreach and lead generation systems.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              {contactItems.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(0,200,83,0.07)',
                      border: '1px solid rgba(0,200,83,0.12)',
                      color: '#00C853',
                    }}
                  >
                    <Icon />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-sans text-sm text-white/45 hover:text-white/80 transition-colors duration-200"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="font-sans text-sm text-white/45">{value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Services ── */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/28 mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="font-sans text-sm text-white/42 hover:text-white/78 transition-colors duration-200 leading-snug block"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Industries ── */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/28 mb-5">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {industries.map((ind) => (
                <li key={ind}>
                  <span className="font-sans text-sm text-white/42 leading-snug block">
                    {ind}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Quick links ── */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/28 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-sans text-sm text-white/42 hover:text-white/78 transition-colors duration-200 leading-snug block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* ── Local SEO ──────────────────────────────────────── */}
        <motion.div
          className="border-t pt-12 pb-12"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-4xl">
            <h3 className="font-display font-semibold text-white/55 text-base mb-3 leading-snug">
              Lead Generation Services Across Tamil Nadu
            </h3>
            <p className="font-sans text-sm text-white/28 leading-relaxed mb-6">
              Lur AI helps businesses generate qualified leads and sales opportunities across
              Chennai, Coimbatore, Madurai, Trichy, Salem, Tiruppur, Erode, Thanjavur, and
              throughout Tamil Nadu. Whether you&apos;re a startup, service provider, agency, or
              growing business, our lead generation systems are designed to help you attract the
              right prospects and create more business opportunities.
            </p>

            {/* City tags */}
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className="font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-1 rounded-full"
                  style={{
                    background: 'rgba(0,200,83,0.05)',
                    border: '1px solid rgba(0,200,83,0.12)',
                    color: 'rgba(0,200,83,0.55)',
                  }}
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Trust badges ───────────────────────────────────── */}
        <motion.div
          className="border-t py-8"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <circle cx="6.5" cy="6.5" r="5.5" stroke="#00C853" strokeWidth="1" opacity="0.4" />
                  <path d="M4 6.5l1.8 1.8L9.5 5" stroke="#00C853" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-sans text-xs text-white/32 whitespace-nowrap">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom bar ─────────────────────────────────────── */}
        <div
          className="border-t pt-7 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          {/* Copyright */}
          <p className="font-sans text-xs text-white/22 order-2 sm:order-1">
            © 2026 Lur AI. All Rights Reserved.
          </p>

          {/* Legal + social links */}
          <div className="flex items-center gap-5 order-1 sm:order-2">
            <a href="#" className="font-sans text-xs text-white/28 hover:text-white/55 transition-colors duration-200 whitespace-nowrap">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-xs text-white/28 hover:text-white/55 transition-colors duration-200 whitespace-nowrap">
              Terms &amp; Conditions
            </a>
            <div className="flex items-center gap-2 ml-1">
              <a
                href="https://linkedin.com/in/rajprabhu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: 'rgba(255,255,255,0.35)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'rgba(10,102,194,0.15)'
                  el.style.borderColor = 'rgba(10,102,194,0.3)'
                  el.style.color = 'rgba(10,102,194,0.9)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'rgba(255,255,255,0.04)'
                  el.style.borderColor = 'rgba(255,255,255,0.07)'
                  el.style.color = 'rgba(255,255,255,0.35)'
                }}
              >
                <IconLinkedIn />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: 'rgba(255,255,255,0.35)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'rgba(37,211,102,0.12)'
                  el.style.borderColor = 'rgba(37,211,102,0.28)'
                  el.style.color = '#25D366'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'rgba(255,255,255,0.04)'
                  el.style.borderColor = 'rgba(255,255,255,0.07)'
                  el.style.color = 'rgba(255,255,255,0.35)'
                }}
              >
                <IconWhatsAppLarge />
              </a>
            </div>
          </div>
        </div>

        {/* ── Final message ──────────────────────────────────── */}
        <p className="font-sans text-[11px] text-white/14 text-center mt-6 leading-relaxed tracking-wide">
          Helping Tamil Nadu Businesses Generate More Leads, More Conversations, And More Opportunities.
        </p>

      </div>

      {/* Bottom fade-out */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(5,15,28,0.6))' }}
      />
    </footer>
  )
}
