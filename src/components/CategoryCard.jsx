import { useItemModal } from '../context/ModalContext.jsx'
import Tilt from './Tilt.jsx'

const BASE = import.meta.env.BASE_URL

export default function CategoryCard({ cat }) {
  const { open } = useItemModal()

  const addItem = (item, variant) => {
    const label = variant ? `${item.name} (${variant.label})` : item.name
    open({ id: `${cat.id}-${label}`, name: label, price: variant ? variant.price : item.price })
  }

  return (
    <Tilt max={6} scale={1.01} className="relative h-full rounded-[22px]">
      <article className="h-full overflow-hidden rounded-[22px] border border-pv-red/20 bg-[linear-gradient(175deg,#17171c,#0b0b0d)] transition duration-300 hover:border-pv-gold/45 hover:shadow-[0_24px_60px_-28px_rgba(255,192,30,.4)]">
        <div className={`relative overflow-hidden ${cat.wide ? 'aspect-[40/9]' : 'aspect-[21/8]'}`}>
          <img src={BASE + cat.banner} alt={cat.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
          <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-pv-bg/92 to-transparent px-5 py-3.5">
            <span className="text-xl">{cat.emoji}</span>
            <h3 className="font-display text-xl uppercase text-white drop-shadow sm:text-2xl">{cat.name}</h3>
            {cat.pill && <span className="ml-auto rounded-full bg-pv-gold px-2.5 py-1 text-[0.6rem] font-extrabold uppercase tracking-wide text-pv-bg">{cat.pill}</span>}
          </div>
        </div>

        <div className="px-5 pb-5 pt-3">
          <div className={cat.wide ? 'grid grid-cols-1 gap-x-8 sm:grid-cols-2' : ''}>
            {cat.items.map((it) => (
              <Row key={it.name} item={it} onAdd={addItem} />
            ))}
          </div>
          {cat.note && (
            <div className="mt-3.5 rounded-xl bg-gradient-to-r from-pv-red to-pv-red-deep px-3 py-2.5 text-center text-sm font-semibold text-white">{cat.note}</div>
          )}
        </div>
      </article>
    </Tilt>
  )
}

function Row({ item, onAdd }) {
  const hasVariants = Array.isArray(item.variants)
  return (
    <div className="flex items-start gap-3 border-b border-dashed border-pv-red/15 py-2.5 last:border-b-0">
      <div className="min-w-0 flex-1">
        <div className="font-semibold text-pv-cream">{item.name}</div>
        {item.desc && <div className="mt-0.5 text-[0.82rem] leading-snug text-pv-muted">{item.desc}</div>}
        {hasVariants && (
          <div className="mt-1.5 flex flex-wrap gap-2">
            {item.variants.map((v) => (
              <button
                key={v.label}
                type="button"
                onClick={() => onAdd(item, v)}
                className="group relative z-20 flex items-center gap-1.5 rounded-full border border-pv-red/25 bg-pv-panel px-3 py-1 text-sm font-semibold transition hover:border-pv-gold hover:bg-pv-gold/15 active:scale-95"
              >
                <span className="text-[0.62rem] font-bold uppercase text-pv-muted group-hover:text-pv-gold">{v.label}</span>
                <span className="font-display text-pv-gold">{v.price}</span>
                <Plus />
              </button>
            ))}
          </div>
        )}
      </div>
      {!hasVariants && (
        <>
          <div className="whitespace-nowrap font-display text-lg text-pv-gold">{item.price}</div>
          <button type="button" onClick={() => onAdd(item)} aria-label={`Add ${item.name}`} className="relative z-20 grid h-8 w-8 flex-none place-items-center rounded-full bg-gradient-to-br from-pv-red to-pv-red-deep text-white shadow-md shadow-pv-red/30 transition hover:brightness-110 active:scale-90"><Plus /></button>
        </>
      )}
    </div>
  )
}

const Plus = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
)
