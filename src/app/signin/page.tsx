'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

function LurLogo() {
  return (
    <div className="relative w-8 h-8">
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00C853] to-[#5EF38C] opacity-90 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-[2px] rounded-md" style={{ background: 'var(--lur-black)' }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="2.5" fill="url(#si-lg)" />
          <circle cx="2" cy="4" r="1.2" fill="rgba(0,200,83,0.7)" />
          <circle cx="12" cy="4" r="1.2" fill="rgba(94,243,140,0.7)" />
          <circle cx="2" cy="10" r="1.2" fill="rgba(94,243,140,0.7)" />
          <circle cx="12" cy="10" r="1.2" fill="rgba(0,200,83,0.7)" />
          <defs>
            <linearGradient id="si-lg" x1="0" y1="0" x2="14" y2="14" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00C853" />
              <stop offset="1" stopColor="#5EF38C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [emailFocused, setEmailFocused] = useState(false)
  const [passFocused, setPassFocused] = useState(false)

  function inputStyle(focused: boolean) {
    return {
      background: focused ? 'rgba(0,200,83,0.04)' : 'rgba(255,255,255,0.04)',
      border: `1px solid ${focused ? 'rgba(0,200,83,0.42)' : 'rgba(255,255,255,0.09)'}`,
      color: 'rgba(255,255,255,0.9)',
      caretColor: '#00C853',
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const supabase = createClient()

      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })

      if (signInError) {
        setError(
          signInError.message === 'Invalid login credentials'
            ? 'Incorrect email or password.'
            : signInError.message,
        )
        return
      }

      // Check profile approval status
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { setError('Sign-in failed. Please try again.'); return }

      const { data: profile } = await supabase
        .from('profiles')
        .select('status')
        .eq('id', user.id)
        .single()

      if (profile?.status === 'approved') {
        router.push('/dashboard')
      } else {
        router.push('/pending')
      }
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'var(--lur-black)' }}>
      <div className="grid-bg fixed inset-0 pointer-events-none opacity-40" />
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,200,83,0.06) 0%, transparent 65%)' }}
      />

      <motion.div
        className="relative w-full max-w-sm"
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
            <h1 className="font-display text-2xl font-bold text-white mb-1.5">Welcome back</h1>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Sign in to your client dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                required
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={inputStyle(emailFocused)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                onFocus={() => setPassFocused(true)}
                onBlur={() => setPassFocused(false)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={inputStyle(passFocused)}
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  key="err"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm"
                  style={{
                    background: 'rgba(239,68,68,0.07)',
                    border: '1px solid rgba(239,68,68,0.18)',
                    color: 'rgba(252,165,165,0.9)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
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
              {loading ? 'Signing in…' : 'Sign in'}
            </motion.button>
          </form>
        </div>

        <p className="text-center mt-5 text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
          New client?{' '}
          <Link href="/signup" className="font-medium transition-colors duration-200 hover:text-white" style={{ color: '#5EF38C' }}>
            Sign up
          </Link>
        </p>

        <div className="mt-3 text-center">
          <Link href="/" className="text-xs transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.22)' }}>
            ← Back to lurai.in
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
