export default function SectionHead({ kicker, title, highlight, sub }) {
  return (
    <div className="mb-10 text-center">
      <div className="text-xs font-extrabold uppercase tracking-[0.26em] text-pv-gold">
        {kicker}
      </div>
      <h2 className="mt-2 font-display text-[clamp(2.2rem,6vw,3.5rem)] uppercase leading-none">
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-pv-gold-light to-pv-red bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {sub && <p className="mx-auto mt-3 max-w-[56ch] text-pv-muted">{sub}</p>}
    </div>
  )
}
