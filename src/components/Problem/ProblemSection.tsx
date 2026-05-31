'use client'

import { motion } from 'framer-motion'

/* ── SVG icons ─────────────────────────────────────────────── */
function IconInconsistent() {
  return (
    <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4">
      <rect x="1.5" y="10" width="3" height="6.5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="7.5" y="5.5" width="3" height="11" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="13.5" y="8" width="3" height="8.5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M2.5 7.5L7.5 4L10.5 6.5L15.5 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 1.5"/>
    </svg>
  )
}

function IconClock() {
  return (
    <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4">
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M9 5.5V9l2.5 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconGeneric() {
  return (
    <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M2 4l7 6 7-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.5 11l3 3M14.5 11l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function IconMissed() {
  return (
    <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4">
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M6 6l6 6M12 6l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

const PROBLEM_CARDS = [
  {
    Icon: IconInconsistent,
    title: 'Inconsistent Leads',
    desc: 'Some months are busy, others are quiet. Growth becomes unpredictable.',
  },
  {
    Icon: IconClock,
    title: 'Time-Consuming Prospecting',
    desc: 'Hours spent searching for contacts instead of closing deals.',
  },
  {
    Icon: IconGeneric,
    title: 'Generic Outreach',
    desc: 'Mass messages get ignored because they lack personalization.',
  },
  {
    Icon: IconMissed,
    title: 'Missed Opportunities',
    desc: 'Potential customers slip through the cracks without a proper system.',
  },
]

const fadeLeft = {
  hidden:   { opacity: 0, x: -28 },
  visible:  { opacity: 1, x: 0 },
}

const fadeRight = {
  hidden:   { opacity: 0, x: 28 },
  visible:  { opacity: 1, x: 0 },
}

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="problem-bg relative w-full overflow-hidden py-24 md:py-32"
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-bg opacity-35 pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 75% 20%, rgba(245,158,11,0.05) 0%, transparent 60%)' }} />
      <div className="absolute bottom-0 left-[-100px] w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(0,200,83,0.05) 0%, transparent 60%)' }} />

      {/* Subtle animated floating orbs */}
      <motion.div
        className="absolute top-[15%] right-[8%] w-48 h-48 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }}
        animate={{ y: [0, -18, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[5%] w-40 h-40 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,200,83,0.05) 0%, transparent 70%)', filter: 'blur(32px)' }}
        animate={{ y: [0, 14, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      <div className="relative z-[2] max-w-6xl mx-auto px-6">

        {/* ── Two-column layout ─────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: heading + body copy ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ staggerChildren: 0.13 }}
          >
            {/* Label */}
            <motion.div
              variants={fadeLeft}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="h-px w-6 bg-gradient-to-r from-[#F59E0B]/60 to-[#F59E0B]/20" />
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#F59E0B]/80">
                The Real Challenge
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeLeft}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold leading-[1.07] tracking-tight mb-7"
              style={{ fontSize: 'clamp(1.6rem, 2.7vw, 2.4rem)', textWrap: 'balance' } as React.CSSProperties}
            >
              <span className="text-white">
                Most Businesses Don&apos;t Have a Lead Generation Problem.
              </span>{' '}
              <span className="text-gradient">
                They Have a System Problem.
              </span>
            </motion.h2>

            {/* Body copy */}
            <motion.div
              variants={fadeLeft}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <p className="text-sm md:text-[15px] text-white/65 leading-relaxed">
                Many businesses rely on referrals, random marketing campaigns, or manual prospecting to generate leads. While these methods can work, they rarely create a{' '}
                <span className="text-white/90 font-medium">predictable flow of opportunities.</span>
              </p>
              <p className="text-sm md:text-[15px] text-white/65 leading-relaxed">
                Without a repeatable system for finding prospects, starting conversations, and nurturing opportunities, growth becomes{' '}
                <span className="text-white/90 font-medium">inconsistent and difficult to scale.</span>
              </p>
              <p className="text-sm md:text-[15px] text-white/65 leading-relaxed">
                Lur AI helps businesses build a structured outbound growth system that continuously identifies potential customers, starts meaningful conversations, and creates a{' '}
                <span className="text-[#00C853] font-medium">steady pipeline of opportunities.</span>
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: 2×2 problem cards ─── */}
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ staggerChildren: 0.09, delayChildren: 0.1 }}
          >
            {PROBLEM_CARDS.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                variants={fadeRight}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="glass-premium glass-hover group rounded-2xl p-5 cursor-default"
              >
                {/* Icon + dot */}
                <div className="flex items-start justify-between mb-3.5">
                  <div
                    className="problem-icon-box w-8 h-8 rounded-xl flex items-center justify-center text-[#F59E0B]/65 flex-shrink-0"
                    style={{
                      background: 'rgba(245,158,11,0.07)',
                      border: '1px solid rgba(245,158,11,0.1)',
                    }}
                  >
                    <Icon />
                  </div>
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 transition-colors duration-300"
                    style={{ background: 'rgba(245,158,11,0.22)' }}
                  />
                </div>

                <div className="font-display font-bold text-white text-sm leading-snug mb-1.5">
                  {title}
                </div>
                <div className="text-[11px] text-white/60 leading-relaxed">
                  {desc}
                </div>

                {/* Bottom accent line — reveals on hover */}
                <div
                  className="mt-3.5 h-px w-0 group-hover:w-full transition-all duration-500 ease-out rounded-full"
                  style={{ background: 'linear-gradient(90deg, rgba(245,158,11,0.3), transparent)' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Bottom highlight banner ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="mt-16 md:mt-20"
        >
          <div className="relative glass-premium shimmer rounded-2xl overflow-hidden">
            {/* Left accent bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px]"
              style={{ background: 'linear-gradient(180deg, transparent, #00C853 30%, #5EF38C 70%, transparent)' }}
            />

            {/* Ambient glow inside */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 50% 100% at 0% 50%, rgba(0,200,83,0.04) 0%, transparent 70%)' }}
            />

            <div className="relative px-8 md:px-12 py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <p
                className="font-display font-bold text-white/90 leading-snug max-w-2xl"
                style={{ fontSize: 'clamp(1rem, 1.7vw, 1.25rem)', textWrap: 'balance' } as React.CSSProperties}
              >
                &ldquo;The businesses that grow fastest aren&apos;t always the best.{' '}
                They&apos;re the ones with the{' '}
                <span className="text-white">most consistent pipeline.</span>&rdquo;
              </p>

              <div className="flex-shrink-0 md:text-right">
                <p className="text-[13px] text-white/55 leading-relaxed">
                  Lur AI helps you
                </p>
                <p className="text-[13px] font-semibold text-[#00C853]">
                  build that pipeline.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
