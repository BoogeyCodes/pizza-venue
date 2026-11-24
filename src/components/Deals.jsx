import { useState } from 'react'
import SectionHead from './SectionHead.jsx'
import Reveal from './Reveal.jsx'
import Tilt from './Tilt.jsx'
import { deals } from '../data/menu.js'
import { useCart } from '../context/CartContext.jsx'

const BASE = import.meta.env.BASE_URL

export default function Deals() {
  return (
    <section id="deals" className="py-14">
      <div className="mx-auto max-w-6xl px-[max(18px,env(safe-area-inset-left))]">
        <Reveal>
          <SectionHead kicker="Best Value" title="Combo" highlight="Deals" sub="Twelve ways to feast — pizzas, wings, pasta & drinks bundled to save." />
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((d, i) => (
            <Reveal key={d.id} delay={(i % 3) * 80}>
              <DealCard deal={d} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function DealCard({ deal: d }) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  const addToCart = () => {
    add({ id: d.id, name: `Deal ${d.no}`, price: d.price, note: d.items.join(', ') })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1300)
  }

  return (
    <Tilt max={12} scale={1.03} className="relative h-full rounded-[22px]">
      <article className="group relative flex min-h-[320px] w-full overflow-hidden rounded-[22px] border border-pv-red/20 shadow-2xl shadow-black/60 transition duration-300 hover:border-pv-gold/60 hover:shadow-[0_26px_64px_-20px_rgba(255,42,42,.5)]">
        <img src={BASE + d.img} alt="" className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="relative z-10 flex w-full flex-col justify-end gap-2 bg-gradient-to-b from-pv-bg/10 via-pv-bg/45 to-pv-bg/95 p-5">
          <span className="mb-auto self-start rounded-full bg-pv-red px-3 py-1 text-[0.62rem] font-extrabold uppercase tracking-wide text-white">Deal {d.no}</span>
          <ul className="flex flex-col gap-0.5">
            {d.items.map((it) => (
              <li key={it} className="flex gap-2 text-sm text-pv-cream/90">
                <span className="mt-[0.5em] h-1.5 w-1.5 flex-none rounded-full bg-pv-gold" />
                {it}
              </li>
            ))}
          </ul>
          <div className="mt-1 flex items-end justify-between">
            <div className="rounded-xl bg-gradient-to-br from-pv-gold-light to-pv-gold px-3 py-1 font-display text-[1.6rem] leading-none text-pv-bg shadow-lg shadow-pv-gold/30"><small className="mr-1 text-xs">RS.</small>{d.price}</div>
            <button
              type="button"
              onClick={addToCart}
              className={`relative z-20 rounded-full px-5 py-2.5 font-display text-xs uppercase tracking-wide shadow-lg transition active:scale-95 ${
                added ? 'bg-[#25D366] text-white shadow-[#25D366]/40' : 'bg-gradient-to-br from-pv-red to-pv-red-deep text-white shadow-pv-red/40 hover:brightness-110'
              }`}
            >
              {added ? '✓ Added' : '+ Add'}
            </button>
          </div>
        </div>
      </article>
    </Tilt>
  )
}
