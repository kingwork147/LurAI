'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { prefix: '', value: 3, suffix: 'x', label: 'Pipeline Growth', sub: 'average across client accounts' },
  { prefix: '', value: 47, suffix: '%', label: 'Higher Close Rate', sub: 'with AI-powered qualification' },
  { prefix: '<', value: 48, suffix: 'h', label: 'Time to Launch', sub: 'from kickoff to live system' },
  { prefix: '', value: 200, suffix: '+', label: 'Systems Built', sub: 'across 30+ industries' },
]

function StatCounter({ stat, trigger }: { stat: typeof stats[0]; trigger: boolean }) {
  const [display, setDisplay] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!trigger || hasRun.current) return
    hasRun.current = true

    const start = performance.now()
    const duration = 2000

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // cubic ease out

      setDisplay(parseFloat((eased * stat.value).toFixed(stat.value % 1 !== 0 ? 1 : 0)))

      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [trigger, stat.value])

  return (
    <div className="font-display font-extrabold tracking-tight text-gradient leading-none"
      style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
      {stat.prefix}{display}{stat.suffix}
    </div>
  )
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-item', {
        y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          onEnter: () => setTriggered(true),
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* Background divider lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      </div>

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item flex flex-col items-start lg:items-center text-left lg:text-center">
              <StatCounter stat={stat} trigger={triggered} />
              <div className="mt-3 font-display font-semibold text-base text-white/80 mb-1">
                {stat.label}
              </div>
              <div className="font-sans text-xs text-white/30 leading-snug">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
