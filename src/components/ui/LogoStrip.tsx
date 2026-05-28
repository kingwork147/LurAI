'use client'

/* ── Infinite marquee logo strip ─────────────────────────── */

const LOGOS: { name: string; color?: string }[] = [
  { name: 'Nexus', color: '#00D4FF' },
  { name: 'Orbital', color: '#8B5CF6' },
  { name: 'Quantum', color: '#10B981' },
  { name: 'Axiom', color: '#F59E0B' },
  { name: 'Meridian', color: '#00D4FF' },
  { name: 'Zenith', color: '#EC4899' },
  { name: 'Vertex', color: '#8B5CF6' },
  { name: 'Parallax', color: '#06B6D4' },
  { name: 'Cipher', color: '#84CC16' },
  { name: 'Epoch', color: '#F97316' },
  { name: 'Nimbus', color: '#00D4FF' },
  { name: 'Stratum', color: '#8B5CF6' },
]

function LogoItem({ logo }: { logo: typeof LOGOS[0] }) {
  return (
    <div className="flex items-center gap-2 mx-8 shrink-0 group">
      {/* Icon dot */}
      <div
        className="w-2 h-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: logo.color, boxShadow: `0 0 6px ${logo.color}80` }}
      />
      <span
        className="font-display font-bold text-sm md:text-base tracking-wider whitespace-nowrap transition-all duration-300"
        style={{ color: 'rgba(255,255,255,0.22)' }}
      >
        {logo.name.toUpperCase()}
      </span>
    </div>
  )
}

export default function LogoStrip() {
  const doubled = [...LOGOS, ...LOGOS]

  return (
    <div className="relative py-12 overflow-hidden">
      {/* Dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

      {/* Edge fades */}
      <div
        className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #030303, transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(-90deg, #030303, transparent)' }}
      />

      {/* Label */}
      <div className="text-center mb-5">
        <span className="font-sans text-[10px] font-semibold tracking-[0.35em] uppercase text-white/18">
          Trusted by teams at
        </span>
      </div>

      {/* Marquee */}
      <div className="flex overflow-hidden">
        <div className="marquee-track flex">
          {doubled.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </div>
  )
}
