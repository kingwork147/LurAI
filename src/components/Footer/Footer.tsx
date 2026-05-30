const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: 'AI Lead Generation', href: '#features' },
    { label: 'Sales Automation', href: '#features' },
    { label: 'Performance Marketing', href: '#features' },
    { label: 'CRM & Funnel Systems', href: '#features' },
  ],
  Company: [
    { label: 'How It Works', href: '#process' },
    { label: 'Founder', href: '#founder' },
    { label: 'Case Studies', href: '#' },
    { label: 'Book an Audit', href: '#cta' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

const socials = [
  {
    name: 'X / Twitter',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/kingwork147/LurAi',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-lur-black">
      {/* Top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0,200,83,0.15), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00C853] to-[#5EF38C] opacity-90" />
                <div className="absolute inset-[2px] rounded-md bg-lur-black" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="2.5" fill="url(#flg)" />
                    <circle cx="2" cy="4" r="1.2" fill="rgba(0,200,83,0.7)" />
                    <circle cx="12" cy="4" r="1.2" fill="rgba(94,243,140,0.7)" />
                    <circle cx="2" cy="10" r="1.2" fill="rgba(94,243,140,0.7)" />
                    <circle cx="12" cy="10" r="1.2" fill="rgba(0,200,83,0.7)" />
                    <line x1="3.2" y1="4" x2="5.5" y2="6" stroke="rgba(0,200,83,0.4)" strokeWidth="0.8" />
                    <line x1="10.8" y1="4" x2="8.5" y2="6" stroke="rgba(94,243,140,0.4)" strokeWidth="0.8" />
                    <line x1="3.2" y1="10" x2="5.5" y2="8" stroke="rgba(94,243,140,0.4)" strokeWidth="0.8" />
                    <line x1="10.8" y1="10" x2="8.5" y2="8" stroke="rgba(0,200,83,0.4)" strokeWidth="0.8" />
                    <defs>
                      <linearGradient id="flg" x1="0" y1="0" x2="14" y2="14" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00C853" />
                        <stop offset="1" stopColor="#5EF38C" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white">
                Lur <span className="text-gradient">AI</span>
              </span>
            </a>
            <p className="font-sans text-sm text-white/35 leading-relaxed max-w-[200px]">
              Revenue infrastructure built with AI. From Tamil Nadu, for the world.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-display font-semibold text-xs text-white/30 uppercase tracking-widest mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-white/45 hover:text-white/80 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/20">
            © {new Date().getFullYear()} Lur AI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            <span className="font-sans text-xs text-white/20">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
