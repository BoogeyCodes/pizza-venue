import { useMemo, useState } from 'react'
import SectionHead from './SectionHead.jsx'
import CategoryCard from './CategoryCard.jsx'
import Reveal from './Reveal.jsx'
import { categories } from '../data/menu.js'

export default function Menu() {
  const [active, setActive] = useState('all')
  const [query, setQuery] = useState('')

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = active === 'all' ? categories : categories.filter((c) => c.id === active)
    if (!q) return list
    return list
      .map((c) => {
        if (c.name.toLowerCase().includes(q)) return c
        const items = c.items.filter((it) => it.name.toLowerCase().includes(q))
        return items.length ? { ...c, items } : null
      })
      .filter(Boolean)
  }, [active, query])

  return (
    <section id="menu" className="py-14">
      <div className="mx-auto max-w-6xl px-[max(18px,env(safe-area-inset-left))]">
        <Reveal>
          <SectionHead kicker="The Full Menu" title="Made" highlight="Live" sub="Everything from our live kitchen — search or filter, then add to your cart." />
        </Reveal>

        <div className="mx-auto mb-7 max-w-md">
          <div className="flex items-center gap-2 rounded-full border border-pv-red/25 bg-pv-panel px-4 py-2.5 focus-within:border-pv-gold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pv-muted"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" strokeLinecap="round" /></svg>
            <input id="pv-search" type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tikka, stuffer, wings…" className="w-full bg-transparent text-pv-cream outline-none placeholder:text-pv-muted/70" />
            {query && (
              <button type="button" onClick={() => setQuery('')} aria-label="Clear" className="text-pv-muted hover:text-pv-cream"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
            )}
          </div>
        </div>

        <div className="mb-9 flex flex-wrap justify-center gap-2.5">
          <Pill label="✨ All" active={active === 'all'} onClick={() => setActive('all')} />
          {categories.map((c) => (
            <Pill key={c.id} label={`${c.emoji} ${c.name}`} active={active === c.id} onClick={() => setActive(c.id)} />
          ))}
        </div>

        {shown.length === 0 ? (
          <div className="py-10 text-center text-pv-muted">
            <div className="mb-2 text-4xl">🔍</div>
            <p className="font-display text-lg uppercase text-pv-cream">No items match “{query}”</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {shown.map((c) => (
              <Reveal key={c.id} className={c.wide ? 'md:col-span-2' : ''}>
                <div id={c.id} className="h-full scroll-mt-24">
                  <CategoryCard cat={c} />
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function Pill({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-bold uppercase tracking-wide transition duration-200 ${
        active ? 'border-pv-gold bg-gradient-to-br from-pv-red to-pv-red-deep text-white' : 'border-pv-red/25 bg-pv-panel text-pv-cream hover:-translate-y-0.5 hover:border-pv-gold hover:text-pv-gold'
      }`}
    >
      {label}
    </button>
  )
}
