'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Demo conversations ───────────────────────────────────── */
const DEMOS = [
  {
    tag: 'Lead Gen',
    tagColor: '#00D4FF',
    query: 'Find high-intent B2B leads for our dental clinic software in the US.',
    lines: [
      { text: '**Prospect list built — 340 qualified leads:**', delay: 0 },
      { text: 'Segment: Dental clinics, 2–10 chairs, $500K+ revenue', delay: 200 },
      { text: '', delay: 350 },
      { text: '• Owner-operated practices — 187 contacts verified', delay: 500 },
      { text: '• Decision-maker emails confirmed: 94%', delay: 650 },
      { text: '• Intent signals detected (job postings, reviews)', delay: 800 },
      { text: '', delay: 950 },
      { text: '**Est. pipeline value: $1.7M** at avg deal size $5K', delay: 1100 },
      { text: 'Ready to launch outreach sequence', delay: 1200 },
    ],
    metric: { label: 'Pipeline value', value: '$1.7M', badge: '340 prospects' },
  },
  {
    tag: 'Outreach',
    tagColor: '#8B5CF6',
    query: 'Build a 5-step email sequence for our top 50 dental clinic prospects.',
    lines: [
      { text: '**Sequence created — 5 emails, 14-day cadence:**', delay: 0 },
      { text: '', delay: 200 },
      { text: 'Email 1 (Day 1) — Pain-led opener', delay: 350 },
      { text: '   Subject: "Why 63% of clinics lose patients at checkout"', delay: 480 },
      { text: '', delay: 580 },
      { text: 'Email 3 (Day 6) — Case study + social proof', delay: 700 },
      { text: '   Avg open rate benchmark: 41%', delay: 830 },
      { text: '', delay: 950 },
      { text: '**Projected replies: 18–24 per 100 sent**', delay: 1100 },
      { text: 'Auto-follow-up triggers configured in CRM', delay: 1220 },
    ],
    metric: { label: 'Reply rate', value: '22%', badge: 'vs 3% industry avg' },
  },
  {
    tag: 'Pipeline',
    tagColor: '#10B981',
    query: 'Analyze our CRM pipeline and forecast Q4 revenue.',
    lines: [
      { text: '**Pipeline audit complete — 84 open deals:**', delay: 0 },
      { text: '', delay: 200 },
      { text: 'Stage breakdown:', delay: 350 },
      { text: '• Discovery: 31 deals  |  Demo: 28  |  Proposal: 25', delay: 500 },
      { text: '', delay: 620 },
      { text: '⚠ 12 deals stalled > 14 days — re-engagement needed', delay: 740 },
      { text: '✓ Top 5 deals account for 61% of pipeline value', delay: 880 },
      { text: '', delay: 1000 },
      { text: '**Q4 revenue forecast: $380K – $440K**', delay: 1100 },
      { text: 'Recommended actions: 3 priority follow-ups today', delay: 1220 },
    ],
    metric: { label: 'Q4 Forecast', value: '$410K', badge: '84 active deals' },
  },
]

/* ── Sub-components ───────────────────────────────────────── */
function ThinkingDots() {
  return (
    <div className="flex items-center gap-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

function ResponseLine({ text, isLast }: { text: string; isLast: boolean }) {
  const bold = (t: string) =>
    t.split(/\*\*(.*?)\*\*/g).map((seg, i) =>
      i % 2 === 1
        ? <span key={i} className="text-white font-semibold">{seg}</span>
        : <span key={i}>{seg}</span>
    )

  if (text === '') return <div className="h-2" />

  return (
    <motion.p
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`text-sm leading-relaxed font-mono ${isLast && text !== '' ? 'typing-cursor' : ''}`}
      style={{ color: 'rgba(255,255,255,0.72)' }}
    >
      {bold(text)}
    </motion.p>
  )
}

function MetricBadge({ metric, color }: { metric: typeof DEMOS[0]['metric']; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mt-4 flex items-center gap-4 rounded-xl px-4 py-3"
      style={{
        background: `${color}10`,
        border: `1px solid ${color}22`,
      }}
    >
      <div>
        <div className="text-[10px] uppercase tracking-widest font-semibold mb-0.5" style={{ color: `${color}90` }}>
          {metric.label}
        </div>
        <div className="font-display font-bold text-xl" style={{ color }}>
          {metric.value}
        </div>
      </div>
      <div
        className="ml-auto text-[11px] font-medium px-2.5 py-1 rounded-full"
        style={{ background: `${color}18`, color: `${color}cc` }}
      >
        {metric.badge}
      </div>
    </motion.div>
  )
}

/* ── Main Component ───────────────────────────────────────── */
export default function ProductSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [demoIdx, setDemoIdx] = useState(0)
  const [stage, setStage] = useState<'idle' | 'user' | 'thinking' | 'responding' | 'done'>('idle')
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const demo = DEMOS[demoIdx]

  const runDemo = useCallback(() => {
    setStage('user')
    setVisibleLines([])

    const thinkTimer = setTimeout(() => {
      setStage('thinking')

      const respondTimer = setTimeout(() => {
        setStage('responding')
        demo.lines.forEach((line, i) => {
          const t = setTimeout(() => {
            setVisibleLines((prev) => [...prev, i])
            if (i === demo.lines.length - 1) {
              const doneTimer = setTimeout(() => setStage('done'), 800)
              return () => clearTimeout(doneTimer)
            }
          }, line.delay + 600)
          return () => clearTimeout(t)
        })
      }, 1400)
      return () => clearTimeout(respondTimer)
    }, 900)
    return () => clearTimeout(thinkTimer)
  }, [demo])

  // Restart demo cycle
  useEffect(() => {
    if (!isVisible) return
    const cleanup = runDemo()
    return cleanup
  }, [demoIdx, isVisible, runDemo])

  useEffect(() => {
    if (stage === 'done') {
      const t = setTimeout(() => {
        setDemoIdx((prev) => (prev + 1) % DEMOS.length)
      }, 3000)
      return () => clearTimeout(t)
    }
  }, [stage])

  // Trigger on scroll into view
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.product-left', {
        x: -40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          onEnter: () => setIsVisible(true),
        },
      })
      gsap.from('.product-right', {
        x: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="product" className="relative py-32 md:py-44 overflow-hidden">
      {/* Gradient ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 65% 50%, rgba(139,92,246,0.07) 0%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div className="product-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-6 bg-[#8B5CF6]/50" />
              <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#8B5CF6]/70">
                Revenue Infrastructure
              </span>
            </div>

            <h2
              className="font-display font-extrabold text-white tracking-tight mb-5 leading-tight"
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}
            >
              Revenue infrastructure<br />
              <span className="text-gradient">built with AI.</span>
            </h2>

            <p className="font-sans text-base text-white/45 leading-relaxed mb-8 max-w-md">
              Watch Lur AI build lead pipelines, write outreach sequences, and analyze
              your CRM — everything your revenue team needs, running on autopilot.
            </p>

            <div className="space-y-4">
              {[
                { icon: '◈', label: 'Lead generation running 24/7 on autopilot', color: '#00D4FF' },
                { icon: '◈', label: 'AI-personalized outreach at scale', color: '#8B5CF6' },
                { icon: '◈', label: 'CRM synced and pipeline always up to date', color: '#10B981' },
                { icon: '◈', label: 'Revenue forecasts you can actually rely on', color: '#00D4FF' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-sm font-bold" style={{ color: item.color }}>{item.icon}</span>
                  <span className="font-sans text-sm text-white/55">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Demo selector tabs */}
            <div className="flex items-center gap-2 mt-10">
              {DEMOS.map((d, i) => (
                <button
                  key={d.tag}
                  onClick={() => { if (i !== demoIdx) { setDemoIdx(i); setStage('idle') } }}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300"
                  style={{
                    background: i === demoIdx ? `${d.tagColor}18` : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${i === demoIdx ? `${d.tagColor}40` : 'rgba(255,255,255,0.08)'}`,
                    color: i === demoIdx ? d.tagColor : 'rgba(255,255,255,0.35)',
                  }}
                >
                  {d.tag}
                </button>
              ))}
            </div>
          </div>

          {/* Right — product mockup */}
          <div className="product-right">
            {/* Glow under window */}
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-24 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse, ${demo.tagColor}25, transparent 70%)`,
                filter: 'blur(20px)',
              }}
            />

            <div className="relative conic-border conic-border-active">
              <div className="glass-premium rounded-2xl overflow-hidden window-shadow">

                {/* ── Window title bar ─── */}
                <div
                  className="flex items-center gap-3 px-4 py-3 border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="font-display font-semibold text-xs text-white/40">
                      Lur AI — {demo.tag} Assistant
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: demo.tagColor, boxShadow: `0 0 6px ${demo.tagColor}` }}
                    />
                    <span className="font-sans text-[10px]" style={{ color: `${demo.tagColor}80` }}>Live</span>
                  </div>
                </div>

                {/* ── Chat area ─── */}
                <div className="p-5 space-y-4 min-h-[380px]">

                  {/* User message */}
                  <AnimatePresence mode="wait">
                    {(stage === 'user' || stage === 'thinking' || stage === 'responding' || stage === 'done') && (
                      <motion.div
                        key={`user-${demoIdx}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex justify-end"
                      >
                        <div
                          className="rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]"
                          style={{
                            background: `${demo.tagColor}14`,
                            border: `1px solid ${demo.tagColor}22`,
                          }}
                        >
                          <p className="font-sans text-sm text-white/80 leading-relaxed">{demo.query}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* AI response container */}
                  <AnimatePresence mode="wait">
                    {(stage === 'thinking' || stage === 'responding' || stage === 'done') && (
                      <motion.div
                        key={`ai-${demoIdx}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* AI header */}
                        <div className="flex items-center gap-2 mb-3">
                          <div
                            className="w-6 h-6 rounded-lg flex items-center justify-center"
                            style={{
                              background: `linear-gradient(135deg, ${demo.tagColor}, #7C3AED)`,
                            }}
                          >
                            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                              <circle cx="7" cy="7" r="2.5" fill="white" opacity="0.9" />
                              <circle cx="2" cy="4" r="1" fill="white" opacity="0.6" />
                              <circle cx="12" cy="4" r="1" fill="white" opacity="0.6" />
                              <circle cx="2" cy="10" r="1" fill="white" opacity="0.6" />
                              <circle cx="12" cy="10" r="1" fill="white" opacity="0.6" />
                              <line x1="3" y1="4" x2="5.5" y2="6" stroke="white" strokeWidth="0.8" opacity="0.4" />
                              <line x1="11" y1="4" x2="8.5" y2="6" stroke="white" strokeWidth="0.8" opacity="0.4" />
                              <line x1="3" y1="10" x2="5.5" y2="8" stroke="white" strokeWidth="0.8" opacity="0.4" />
                              <line x1="11" y1="10" x2="8.5" y2="8" stroke="white" strokeWidth="0.8" opacity="0.4" />
                            </svg>
                          </div>
                          <span className="font-display font-semibold text-xs text-white/50">Lur AI</span>
                          {stage === 'thinking' && (
                            <span className="text-xs font-sans" style={{ color: `${demo.tagColor}70` }}>
                              Reasoning…
                            </span>
                          )}
                        </div>

                        {/* Thinking animation */}
                        {stage === 'thinking' && <ThinkingDots />}

                        {/* Streamed response */}
                        {(stage === 'responding' || stage === 'done') && (
                          <div className="space-y-0.5">
                            {demo.lines.map((line, i) =>
                              visibleLines.includes(i) ? (
                                <ResponseLine
                                  key={i}
                                  text={line.text}
                                  isLast={i === demo.lines.length - 1 && stage === 'responding'}
                                />
                              ) : null
                            )}
                          </div>
                        )}

                        {/* Metric card */}
                        {stage === 'done' && (
                          <MetricBadge metric={demo.metric} color={demo.tagColor} />
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* ── Input bar ─── */}
                <div
                  className="px-4 py-3 border-t flex items-center gap-3"
                  style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.2)' }}
                >
                  <div
                    className="flex-1 rounded-xl px-3.5 py-2 text-sm font-sans text-white/20 flex items-center gap-2"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-30">
                      <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="1.5" />
                      <path d="M21 21l-4.35-4.35" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    Ask anything…
                  </div>
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${demo.tagColor}, #7C3AED)`,
                      boxShadow: `0 0 12px ${demo.tagColor}40`,
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
