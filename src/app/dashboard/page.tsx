'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

interface Profile {
  full_name: string
  company: string
  status: string
}

const metrics = [
  { label: 'Leads Generated', value: '—', trend: 'Campaign active' },
  { label: 'Meetings Booked', value: '—', trend: 'Campaign active' },
  { label: 'Response Rate', value: '—', trend: 'Campaign active' },
  { label: 'Pipeline Value', value: '—', trend: 'Campaign active' },
]

function LurLogo() {
  return (
    <div className="relative w-7 h-7">
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00C853] to-[#5EF38C] opacity-90" />
      <div className="absolute inset-[2px] rounded-md" style={{ background: 'var(--lur-black)' }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="2.5" fill="url(#d-lg)" />
          <circle cx="2" cy="4" r="1.2" fill="rgba(0,200,83,0.7)" />
          <circle cx="12" cy="4" r="1.2" fill="rgba(94,243,140,0.7)" />
          <circle cx="2" cy="10" r="1.2" fill="rgba(94,243,140,0.7)" />
          <circle cx="12" cy="10" r="1.2" fill="rgba(0,200,83,0.7)" />
          <defs>
            <linearGradient id="d-lg" x1="0" y1="0" x2="14" y2="14" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00C853" />
              <stop offset="1" stopColor="#5EF38C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  const router = useRouter()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [signingOut, setSigningOut] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function init() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) { router.push('/signin'); return }

      const { data } = await supabase
        .from('profiles')
        .select('full_name, company, status')
        .eq('id', user.id)
        .single()

      if (!data || data.status !== 'approved') {
        router.push('/pending')
        return
      }

      setProfile(data)
      setLoading(false)
    }
    init()
  }, [router])

  async function handleSignOut() {
    setSigningOut(true)
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/signin')
    router.refresh()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--lur-black)' }}>
        <div
          className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
          style={{ borderColor: 'rgba(0,200,83,0.4)', borderTopColor: 'transparent' }}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--lur-black)' }}>
      {/* Nav */}
      <header
        className="sticky top-0 z-40 px-6 py-4 flex items-center justify-between"
        style={{
          background: 'rgba(7,26,46,0.96)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <Link href="/" className="flex items-center gap-2.5 group">
          <LurLogo />
          <span className="font-display font-bold text-base tracking-tight text-white">
            Lur <span className="text-gradient">AI</span>
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {profile && (
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-xs font-medium text-white">{profile.full_name}</span>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{profile.company}</span>
            </div>
          )}
          <span
            className="hidden sm:block text-xs px-2.5 py-1 rounded-md font-medium"
            style={{
              background: 'rgba(0,200,83,0.08)',
              border: '1px solid rgba(0,200,83,0.15)',
              color: '#5EF38C',
            }}
          >
            Client Portal
          </span>
          <button
            onClick={handleSignOut}
            disabled={signingOut}
            className="text-xs px-4 py-2 rounded-xl transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            {signingOut ? 'Signing out…' : 'Sign out'}
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display text-3xl font-bold text-white mb-2">
            {profile ? `Welcome back, ${profile.full_name.split(' ')[0]}` : 'Campaign Dashboard'}
          </h1>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.42)' }}>
            Real-time performance metrics for your lead generation campaign.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl p-5"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.38)' }}>{m.label}</p>
              <p className="font-display text-2xl font-bold text-white mb-1.5">{m.value}</p>
              <span className="text-xs font-medium" style={{ color: '#00C853' }}>{m.trend}</span>
            </motion.div>
          ))}
        </div>

        {/* Status banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.5 }}
          className="rounded-2xl p-5 mb-8 flex items-start gap-4"
          style={{ background: 'rgba(0,200,83,0.04)', border: '1px solid rgba(0,200,83,0.13)' }}
        >
          <div className="mt-1.5 flex-shrink-0">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: '#00C853', boxShadow: '0 0 8px rgba(0,200,83,0.7)' }}
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-0.5">Campaign Active</p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Your outreach campaign is live and running. Our team is actively managing your pipeline.
              Metrics and leads will populate here as results come in.
            </p>
          </div>
        </motion.div>

        {/* Leads table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.46, duration: 0.5 }}
          className="rounded-2xl overflow-hidden mb-6"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div
            className="px-6 py-4 flex items-center justify-between"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <h2 className="text-sm font-semibold text-white">Recent Leads</h2>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#00C853', boxShadow: '0 0 5px rgba(0,200,83,0.6)' }} />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Live</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <p className="text-sm font-medium text-white mb-1">No leads yet</p>
            <p className="text-xs max-w-xs" style={{ color: 'rgba(255,255,255,0.32)' }}>
              Qualified leads will appear here once your campaign starts generating results.
            </p>
          </div>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.54, duration: 0.5 }}
          className="rounded-2xl p-6"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <h3 className="text-sm font-semibold text-white mb-1">Need help?</h3>
          <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.38)' }}>
            Contact your Lur AI account manager directly.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:raj@lurai.in" className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: '#00C853' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              raj@lurai.in
            </a>
            <a href="https://wa.me/916383568574" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: '#5EF38C' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.549 4.099 1.51 5.828L0 24l6.336-1.493A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.016-1.378l-.36-.213-3.76.886.901-3.669-.234-.377A9.818 9.818 0 1 1 12 21.818z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
