'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface FormState {
  fullName: string
  company: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

const initialForm: FormState = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
}

function LurLogo() {
  return (
    <div className="relative w-8 h-8">
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00C853] to-[#5EF38C] opacity-90" />
      <div className="absolute inset-[2px] rounded-md" style={{ background: 'var(--lur-black)' }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="2.5" fill="url(#su-lg)" />
          <circle cx="2" cy="4" r="1.2" fill="rgba(0,200,83,0.7)" />
          <circle cx="12" cy="4" r="1.2" fill="rgba(94,243,140,0.7)" />
          <circle cx="2" cy="10" r="1.2" fill="rgba(94,243,140,0.7)" />
          <circle cx="12" cy="10" r="1.2" fill="rgba(0,200,83,0.7)" />
          <defs>
            <linearGradient id="su-lg" x1="0" y1="0" x2="14" y2="14" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00C853" />
              <stop offset="1" stopColor="#5EF38C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function SuccessScreen({ name }: { name: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'var(--lur-black)' }}>
      <div className="grid-bg fixed inset-0 pointer-events-none opacity-40" />
      <motion.div
        className="w-full max-w-sm text-center"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{
            background: 'rgba(0,200,83,0.1)',
            border: '1px solid rgba(0,200,83,0.25)',
            boxShadow: '0 0 40px rgba(0,200,83,0.1)',
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 className="font-display text-2xl font-bold text-white mb-3">
          Request submitted, {name.split(' ')[0]}!
        </h1>
        <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.48)' }}>
          Your account is under review. We&apos;ll approve your access within 24 hours
          and send you a confirmation. Feel free to reach out in the meantime.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href="mailto:raj@lurai.in"
            className="inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all duration-200"
            style={{
              background: 'rgba(0,200,83,0.08)',
              border: '1px solid rgba(0,200,83,0.18)',
              color: '#5EF38C',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Contact raj@lurai.in
          </a>
          <Link
            href="/signin"
            className="text-sm transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            Back to sign in
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default function SignUpPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [focused, setFocused] = useState<string | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [showPass, setShowPass] = useState(false)

  if (done) return <SuccessScreen name={form.fullName} />

  function field(key: keyof FormState) {
    return {
      value: form[key],
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setForm(prev => ({ ...prev, [key]: e.target.value })),
      onFocus: () => setFocused(key),
      onBlur: () => setFocused(null),
    }
  }

  function inputStyle(key: string) {
    const active = focused === key
    return {
      background: active ? 'rgba(0,200,83,0.04)' : 'rgba(255,255,255,0.04)',
      border: `1px solid ${active ? 'rgba(0,200,83,0.42)' : 'rgba(255,255,255,0.09)'}`,
      color: 'rgba(255,255,255,0.9)',
      caretColor: '#00C853',
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          fullName: form.fullName,
          company: form.company,
          phone: form.phone,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
      } else {
        setDone(true)
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-14"
      style={{ background: 'var(--lur-black)' }}
    >
      <div className="grid-bg fixed inset-0 pointer-events-none opacity-40" />
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,200,83,0.055) 0%, transparent 65%)' }}
      />

      <motion.div
        className="relative w-full max-w-md"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2.5 mb-8 group">
          <LurLogo />
          <span className="font-display font-bold text-xl tracking-tight text-white">
            Lur <span className="text-gradient">AI</span>
          </span>
        </Link>

        {/* Card */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'var(--glass-blur)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.45)',
          }}
        >
          <div className="mb-7">
            <h1 className="font-display text-2xl font-bold text-white mb-1.5">
              Request client access
            </h1>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Fill in your details and we&apos;ll approve your account within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Name + Company */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Full name <span style={{ color: '#00C853' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Smith"
                  {...field('fullName')}
                  className="w-full px-3.5 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                  style={inputStyle('fullName')}
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Company <span style={{ color: '#00C853' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Acme Inc."
                  {...field('company')}
                  className="w-full px-3.5 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                  style={inputStyle('company')}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Work email <span style={{ color: '#00C853' }}>*</span>
              </label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                {...field('email')}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={inputStyle('email')}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Phone number <span style={{ color: 'rgba(255,255,255,0.28)' }}>(optional)</span>
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                {...field('phone')}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={inputStyle('phone')}
              />
            </div>

            {/* Divider */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '8px 0' }} />

            {/* Password */}
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Password <span style={{ color: '#00C853' }}>*</span>
              </label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  required
                  placeholder="Min. 8 characters"
                  {...field('password')}
                  className="w-full px-4 py-3 pr-11 rounded-xl text-sm outline-none transition-all duration-200"
                  style={inputStyle('password')}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(p => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.3)' }}
                  tabIndex={-1}
                >
                  {showPass ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Confirm password */}
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Confirm password <span style={{ color: '#00C853' }}>*</span>
              </label>
              <input
                type={showPass ? 'text' : 'password'}
                required
                placeholder="Repeat password"
                {...field('confirmPassword')}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={inputStyle('confirmPassword')}
              />
            </div>

            {/* Error */}
            <AnimatePresence>
              {error && (
                <motion.div
                  key="err"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="flex items-start gap-2.5 px-4 py-3 rounded-xl text-sm"
                  style={{
                    background: 'rgba(239,68,68,0.07)',
                    border: '1px solid rgba(239,68,68,0.18)',
                    color: 'rgba(252,165,165,0.9)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-opacity duration-200"
              style={{
                background: 'linear-gradient(135deg, #00C853 0%, #5EF38C 100%)',
                boxShadow: loading ? 'none' : '0 4px 24px rgba(0,200,83,0.28)',
                opacity: loading ? 0.6 : 1,
              }}
              whileTap={loading ? {} : { scale: 0.985 }}
            >
              {loading ? 'Submitting request…' : 'Request access'}
            </motion.button>
          </form>
        </div>

        <p className="text-center mt-5 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Already have an account?{' '}
          <Link href="/signin" className="hover:text-white transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
