import Logo from './Logo.jsx'
import { brand } from '../data/menu.js'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-pv-red/20 bg-[#070709]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 px-[max(18px,env(safe-area-inset-left))] pb-8 pt-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo size={38} />
            <div className="font-display text-xl uppercase leading-none">
              <span className="text-pv-red">Pizza</span><span className="text-pv-gold">Venue</span>
            </div>
          </div>
          <div className="mt-2 font-script text-lg text-pv-gold-light">{brand.tagline}</div>
          <p className="mt-2 max-w-[36ch] text-sm text-pv-muted">Live-kitchen pizzas, stuffer crusts, wings, burgers &amp; pasta — made fresh and delivered hot across Lahore, Nankana Sahib &amp; Pakpattan.</p>
        </div>

        <div>
          <h4 className="mb-3.5 font-display text-base uppercase">Order &amp; Contact</h4>
          <Ci icon="📞" k="Call / UAN" v={<a href={`tel:${brand.phoneRaw}`} className="hover:text-pv-gold">{brand.phone}</a>} />
          <Ci icon="📞" k="Also" v={brand.phone2} />
          <Ci icon="💬" k="WhatsApp" v={<a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-pv-gold">{brand.whatsappDisplay}</a>} />
        </div>

        <div>
          <h4 className="mb-3.5 font-display text-base uppercase">Hours</h4>
          <Ci icon="🕛" k="Open Daily" v={brand.timing} />
          <Ci icon="🔥" k="Kitchen" v="Live &amp; fresh to order" />
        </div>
      </div>
      <div className="border-t border-pv-red/20">
        <div className="mx-auto max-w-6xl px-[max(18px,env(safe-area-inset-left))] py-4 text-center text-sm text-pv-muted/70">© {new Date().getFullYear()} Pizza Venue · {brand.tagline}</div>
      </div>
    </footer>
  )
}

function Ci({ icon, k, v }) {
  return (
    <div className="mb-3.5 flex items-start gap-3">
      <span className="grid h-9 w-9 flex-none place-items-center rounded-xl border border-pv-red/20 text-pv-gold">{icon}</span>
      <span>
        <span className="text-xs uppercase tracking-wide text-pv-muted">{k}</span>
        <br />
        <span className="font-semibold text-pv-cream">{v}</span>
      </span>
    </div>
  )
}
