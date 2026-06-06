'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function PendingPage() {
  const router = useRouter()
  const [signingOut, setSigningOut] = useState(false)

  async function handleSignOut() {
    setSigningOut(true)
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/signin')
    router.refresh()
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'var(--lur-black)' }}>
      <div className="grid-bg fixed inset-0 pointer-events-none opacity-40" />
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 65%)' }}
      />

      <motion.div
        className="relative w-full max-w-sm text-center"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Icon */}
        <motion.div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{
            background: 'rgba(0,212,255,0.07)',
            border: '1px solid rgba(0,212,255,0.18)',
          }}
          animate={{ boxShadow: ['0 0 20px rgba(0,212,255,0.08)', '0 0 40px rgba(0,212,255,0.18)', '0 0 20px rgba(0,212,255,0.08)'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(0,212,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </motion.div>

        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2 mb-6 group justify-center">
          <span className="font-display font-bold text-base tracking-tight text-white">
            Lur <span className="text-gradient">AI</span>
          </span>
        </Link>

        <h1 className="font-display text-2xl font-bold text-white mb-3">
          Access pending approval
        </h1>
        <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.48)' }}>
          Your account is being reviewed. We typically approve requests within 24 hours.
          You&apos;ll be able to sign in and access your dashboard once approved.
        </p>

        {/* Contact options */}
        <div
          className="rounded-2xl p-5 mb-6 text-left"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <p className="text-xs font-medium mb-3" style={{ color: 'rgba(255,255,255,0.38)' }}>
            NEED IT FASTER? REACH OUT DIRECTLY
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:raj@lurai.in"
              className="inline-flex items-center gap-2.5 text-sm font-medium transition-colors duration-200"
              style={{ color: '#5EF38C' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              raj@lurai.in
            </a>
            <a
              href="https://wa.me/916383568574"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm font-medium transition-colors duration-200"
              style={{ color: '#5EF38C' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.549 4.099 1.51 5.828L0 24l6.336-1.493A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.016-1.378l-.36-.213-3.76.886.901-3.669-.234-.377A9.818 9.818 0 1 1 12 21.818z" />
              </svg>
              WhatsApp us
            </a>
          </div>
        </div>

        <button
          onClick={handleSignOut}
          disabled={signingOut}
          className="text-xs transition-colors duration-200"
          style={{ color: 'rgba(255,255,255,0.28)' }}
        >
          {signingOut ? 'Signing out…' : 'Sign out'}
        </button>
      </motion.div>
    </div>
  )
}
