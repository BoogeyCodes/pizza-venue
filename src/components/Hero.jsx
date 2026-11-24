import Tilt from './Tilt.jsx'

const BASE = import.meta.env.BASE_URL

const stats = [
  { n: '13', s: 'Signature Pizzas' },
  { n: '12', s: 'Combo Deals' },
  { n: '5', s: 'Branches' },
]

export default function Hero() {
  return (
    <section id="top">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-[max(18px,env(safe-area-inset-left))] py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
        <div className="animate-fade-up">
          <span className="mb-3 inline-flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.24em] text-pv-gold">
            <span className="h-2.5 w-2.5 animate-glow rounded-full bg-pv-red shadow-[0_0_12px_#ff2a2a]" />
            Live Kitchen · 5 Branches
          </span>
          <div className="font-script text-2xl text-pv-gold-light sm:text-3xl">Pleasure in every bite</div>
          <h1 className="mt-1 font-display text-[clamp(3rem,10vw,6rem)] uppercase leading-[0.86]">
            <span className="text-pv-red">Pizza</span>
            <br />
            <span className="bg-gradient-to-r from-pv-gold-light to-pv-gold bg-clip-text text-transparent">Venue</span>
          </h1>
          <p className="mt-5 max-w-[44ch] text-lg text-pv-muted">
            Fresh-fired signature pizzas, cheese-stuffed crusts, oven-baked wings &amp; pasta — made
            live in our kitchen and delivered hot across Lahore &amp; beyond.
          </p>
          <div className="mb-7 mt-7 flex flex-wrap gap-3">
            <a href="#menu" className="pv-btn"><span className="pv-sheen" />Explore Menu →</a>
            <a href="#deals" className="pv-btn-ghost">🔥 Hot Deals</a>
          </div>
          <div className="flex flex-wrap gap-7">
            {stats.map((s) => (
              <div key={s.s}>
                <div className="font-display text-2xl text-pv-gold">{s.n}</div>
                <div className="mt-0.5 text-xs uppercase tracking-wide text-pv-muted">{s.s}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Spinning 3D pizza */}
        <div className="relative grid min-h-[380px] place-items-center" style={{ perspective: '1100px' }}>
          <div className="absolute aspect-square w-[86%] animate-glow rounded-full bg-[radial-gradient(circle,rgba(255,42,42,.5),transparent_66%)] blur-[52px]" />
          {/* spinning conic fire-ring */}
          <div
            className="absolute aspect-square w-[min(480px,96%)] animate-spin-slow rounded-full"
            style={{
              background: 'conic-gradient(from 0deg,#ff2a2a,#ffc01e,#ff2a2a,#ffd84a,#ff2a2a)',
              WebkitMask: 'radial-gradient(transparent 56%,#000 59%)',
              mask: 'radial-gradient(transparent 56%,#000 59%)',
              opacity: 0.6,
              filter: 'blur(1px)',
            }}
          />
          {/* ground shadow */}
          <div className="absolute bottom-[10%] h-8 w-[70%] rounded-[50%] bg-black/55 blur-xl" />
          <Tilt max={16} className="relative z-[1] w-[min(430px,86%)]">
            <div style={{ transform: 'rotateX(16deg)', transformStyle: 'preserve-3d' }}>
              <img
                src={BASE + 'images/food/disc.jpg'}
                alt="Pizza Venue signature pizza"
                className="aspect-square w-full animate-spin-slow rounded-full border-[6px] border-pv-gold/40 object-cover shadow-[0_0_0_2px_rgba(255,42,42,.45),0_50px_90px_-24px_#000]"
              />
            </div>
            {/* floating badge, pops forward in 3D */}
            <div
              className="absolute -right-2 top-2 z-[6] grid h-24 w-24 -rotate-6 place-items-center rounded-full bg-gradient-to-br from-pv-red to-pv-red-deep text-center leading-[0.9] text-white shadow-[0_18px_40px_-8px_rgba(255,42,42,.8)]"
              style={{ transform: 'translateZ(80px) rotate(-8deg)' }}
            >
              <span>
                <small className="block text-[0.58rem] tracking-[0.12em] text-pv-gold-light">FROM</small>
                <b className="block font-display text-2xl">600</b>
                <small className="block text-[0.58rem] tracking-[0.12em]">RS.</small>
              </span>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  )
}
