'use client'

/* ── Infinite marquee logo strip ─────────────────────────── */

const LOGOS: { name: string; color?: string }[] = [
  { name: 'Nexus', color: '#00C853' },
  { name: 'Orbital', color: '#5EF38C' },
  { name: 'Quantum', color: '#00D4FF' },
  { name: 'Axiom', color: '#F59E0B' },
  { name: 'Meridian', color: '#00C853' },
  { name: 'Zenith', color: '#5EF38C' },
  { name: 'Vertex', color: '#00C853' },
  { name: 'Parallax', color: '#00D4FF' },
  { name: 'Cipher', color: '#5EF38C' },
  { name: 'Epoch', color: '#F97316' },
  { name: 'Nimbus', color: '#00C853' },
  { name: 'Stratum', color: '#5EF38C' },
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
        className="logo-strip-name font-display font-bold text-sm md:text-base tracking-wider whitespace-nowrap transition-all duration-300"
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
