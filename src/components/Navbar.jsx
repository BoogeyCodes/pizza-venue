import { useState } from 'react'
import Logo from './Logo.jsx'
import { brand } from '../data/menu.js'

const links = [
  { href: '#deals', label: 'Deals' },
  { href: '#menu', label: 'Menu' },
  { href: '#pizzas', label: 'Pizzas' },
  { href: '#branches', label: 'Branches' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-pv-red/20 bg-pv-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-[max(18px,env(safe-area-inset-left))] py-2.5">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo size={38} />
          <span className="leading-none">
            <span className="block font-display text-lg uppercase tracking-wide">
              <span className="text-pv-red">Pizza</span>
              <span className="text-pv-gold">Venue</span>
            </span>
            <span className="mt-0.5 block text-[0.54rem] font-bold uppercase tracking-[0.2em] text-pv-muted">
              {brand.badge} · {brand.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="group relative py-1.5 text-sm font-bold uppercase tracking-wide text-pv-cream transition hover:text-pv-gold">
              {l.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-pv-gold to-pv-red transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#branches" className="relative hidden items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-pv-red to-pv-red-deep px-5 py-2.5 font-display text-sm uppercase tracking-wide text-white shadow-lg shadow-pv-red/50 sm:inline-flex">
            <span className="pv-sheen" />📞 Order Now
          </a>
          <button type="button" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="grid h-10 w-10 place-items-center rounded-lg border border-pv-red/30 text-pv-gold md:hidden">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-pv-red/15 bg-pv-bg px-5 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 font-semibold uppercase tracking-wide text-pv-cream transition hover:bg-white/5 hover:text-pv-gold">{l.label}</a>
          ))}
          <a href={`tel:${brand.phoneRaw}`} onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-pv-red to-pv-red-deep px-5 py-2.5 font-display uppercase tracking-wide text-white">📞 {brand.phone}</a>
        </nav>
      )}
    </header>
  )
}
