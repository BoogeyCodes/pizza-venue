import { useEffect, useRef } from 'react'

/**
 * "Live kitchen" ambient background: warm embers / sparks drifting upward with
 * a gentle cursor parallax, over the dark red/gold Pizza Venue theme.
 * Fixed behind all content (z-index -1). Honors prefers-reduced-motion.
 */
export default function Embers() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const COLORS = ['255,42,42', '255,120,30', '255,192,30', '255,216,74']

    let w = 0
    let h = 0
    let parts = []
    let raf = 0
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 }

    const spawn = (atBottom) => {
      const z = Math.random()
      return {
        x: Math.random() * w,
        y: atBottom ? h + Math.random() * 40 : Math.random() * h,
        z,
        r: (0.6 + Math.random() * 1.8) * (0.6 + z) * DPR,
        vy: (0.25 + z * 0.7) * DPR,
        drift: (Math.random() - 0.5) * 0.3 * DPR,
        tw: Math.random() * Math.PI * 2,
        glow: Math.random() < 0.18,
        color: COLORS[(Math.random() * COLORS.length) | 0],
      }
    }

    const build = () => {
      const count = Math.min(180, Math.floor((w * h) / (13000 * DPR * DPR)))
      parts = Array.from({ length: count }, () => spawn(false))
    }
    const resize = () => {
      w = canvas.width = Math.floor(window.innerWidth * DPR)
      h = canvas.height = Math.floor(window.innerHeight * DPR)
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      build()
    }

    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      mouse.x += (mouse.tx - mouse.x) * 0.05
      mouse.y += (mouse.ty - mouse.y) * 0.05
      for (let i = 0; i < parts.length; i++) {
        const s = parts[i]
        const a = 0.3 + 0.7 * Math.abs(Math.sin(s.tw + t * (1 + s.z)))
        const px = s.x + mouse.x * s.z * 22
        const py = s.y + mouse.y * s.z * 22
        if (s.glow) {
          const g = ctx.createRadialGradient(px, py, 0, px, py, s.r * 7)
          g.addColorStop(0, `rgba(${s.color},${a * 0.45})`)
          g.addColorStop(1, 'rgba(0,0,0,0)')
          ctx.fillStyle = g
          ctx.beginPath()
          ctx.arc(px, py, s.r * 7, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.beginPath()
        ctx.arc(px, py, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${s.color},${(a * (0.5 + s.z * 0.5)).toFixed(3)})`
        ctx.fill()
        if (!reduced) {
          s.y -= s.vy
          s.x += s.drift
          if (s.y < -10) parts[i] = spawn(true)
        }
      }
      t += 0.016
      raf = requestAnimationFrame(draw)
    }

    const onMouse = (e) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    if (!reduced) window.addEventListener('mousemove', onMouse)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: -1 }}
    />
  )
}
