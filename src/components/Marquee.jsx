const text = (
  <span className="inline-flex items-center gap-6 whitespace-nowrap px-6 font-display text-base uppercase tracking-wide">
    🔥 Live Kitchen <b className="text-pv-gold">•</b> Pleasure in every bite{' '}
    <b className="text-pv-gold">•</b> Deals from Rs.1350 <b className="text-pv-gold">•</b> Open 12 PM – 3 AM{' '}
    <b className="text-pv-gold">•</b> 5 Branches <b className="text-pv-gold">•</b>
  </span>
)

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-pv-red/20 bg-gradient-to-r from-pv-red/10 to-pv-gold/5">
      <div className="flex w-max animate-marquee py-2.5">
        {text}
        {text}
      </div>
    </div>
  )
}
