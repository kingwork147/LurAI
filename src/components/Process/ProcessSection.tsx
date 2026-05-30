'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    title: 'Audit',
    subtitle: 'Free strategy session',
    description:
      'We analyze your current pipeline, marketing, and sales process to identify exactly where revenue is leaking and where AI can unlock the most growth.',
    color: '#00C853',
    detail: 'Free — no obligation',
  },
  {
    number: '02',
    title: 'Build',
    subtitle: 'Custom AI systems',
    description:
      'We build your lead generation, outreach automation, and CRM infrastructure from scratch — tailored to your industry, offer, and target customer.',
    color: '#5EF38C',
    detail: 'Live in under 48 hours',
  },
  {
    number: '03',
    title: 'Scale',
    subtitle: 'Revenue on autopilot',
    description:
      'Your AI revenue systems run continuously — generating leads, nurturing prospects, and filling your pipeline while you focus on closing.',
    color: '#00C853',
    detail: 'Results in 30 days',
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.process-heading',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.process-heading', start: 'top 80%' },
        }
      )

      gsap.fromTo(
        '.process-step',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.process-steps', start: 'top 80%' },
        }
      )

      // Connector line draw
      gsap.fromTo(
        '.connector-line',
        { scaleX: 0 },
        {
          scaleX: 1, duration: 1.2, ease: 'power2.inOut',
          scrollTrigger: { trigger: '.process-steps', start: 'top 75%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,200,83,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="process-heading text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-6 bg-[#00C853]/40" />
            <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#00C853]/70">
              How it works
            </span>
            <div className="h-px w-6 bg-[#00C853]/40" />
          </div>
          <h2 className="font-display font-extrabold text-white tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            From audit to{' '}
            <span className="text-gradient">revenue.</span>
          </h2>
          <p className="max-w-xl mx-auto font-sans text-white/45 text-base md:text-lg leading-relaxed">
            Three steps. No guesswork. We build your AI revenue system, go live fast,
            and let the results speak for themselves.
          </p>
        </div>

        {/* Steps */}
        <div className="process-steps relative">
          {/* Horizontal connector (desktop) */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[18%] right-[18%] h-px">
            <div
              className="connector-line h-full origin-left"
              style={{
                background: 'linear-gradient(90deg, #00C85330, #5EF38C30, #00C85330)',
                transform: 'scaleX(0)',
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {steps.map((step, i) => (
              <div key={step.number} className="process-step relative flex flex-col items-start lg:items-center">
                {/* Number bubble */}
                <div className="relative mb-6 lg:mb-8">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10"
                    style={{
                      background: `${step.color}12`,
                      border: `1px solid ${step.color}30`,
                    }}
                  >
                    <span
                      className="font-display font-bold text-lg"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-30"
                    style={{ background: step.color }}
                  />
                </div>

                {/* Content */}
                <div className="lg:text-center">
                  <div
                    className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase mb-2"
                    style={{ color: `${step.color}90` }}
                  >
                    {step.subtitle}
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-white/45 leading-relaxed max-w-xs lg:max-w-none mb-4">
                    {step.description}
                  </p>

                  {/* Detail pill */}
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[11px]"
                    style={{
                      background: `${step.color}10`,
                      border: `1px solid ${step.color}20`,
                      color: `${step.color}90`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: step.color, opacity: 0.7 }}
                    />
                    {step.detail}
                  </div>
                </div>

                {/* Arrow connector (mobile/tablet) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden mt-8 mb-2 text-white/15 text-2xl self-center">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
