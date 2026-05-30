'use client'

import { useRef, useEffect } from 'react'

const CHARS = '0123456789$%+-.,'
const CHAR_POOL = CHARS.split('')

function randChar() {
  return CHAR_POOL[Math.floor(Math.random() * CHAR_POOL.length)]
}

interface Column {
  x:        number
  y:        number
  speed:    number
  trailLen: number
  color:    string
  glyphs:   string[]
}

function isLight() {
  return document.documentElement.classList.contains('light')
}

function pickColor(light: boolean): string {
  if (light) {
    const r = Math.random()
    if (r < 0.55) return '#00A843'
    if (r < 0.85) return '#009935'
    return '#00C853'
  }
  const r = Math.random()
  if (r < 0.55) return '#00C853'
  if (r < 0.85) return '#5EF38C'
  return '#00D4FF'
}

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const el = canvasRef.current
    if (!el) return
    const c   = el as HTMLCanvasElement
    const ctx = c.getContext('2d')!
    let raf: number
    let cols: Column[] = []

    const FS  = 12
    const GAP = 24

    function init() {
      const light = isLight()
      c.width  = c.offsetWidth
      c.height = c.offsetHeight

      const count = Math.floor(c.width / GAP)
      cols = Array.from({ length: count }, (_, i) => {
        const trailLen = 12 + Math.floor(Math.random() * 16)
        return {
          x:        i * GAP + GAP / 2,
          y:        -Math.random() * c.height,
          speed:    0.8 + Math.random() * 1.6,
          trailLen,
          color:    pickColor(light),
          glyphs:   Array.from({ length: trailLen + 2 }, randChar),
        }
      })

      ctx.fillStyle = light ? '#ffffff' : '#030303'
      ctx.fillRect(0, 0, c.width, c.height)
    }

    init()
    window.addEventListener('resize', init)

    // Re-init when light/dark class toggles
    const observer = new MutationObserver(() => init())
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    function draw() {
      const light = isLight()
      ctx.fillStyle = light ? 'rgba(255,255,255,0.14)' : 'rgba(3,3,3,0.12)'
      ctx.fillRect(0, 0, c.width, c.height)

      ctx.font      = `${FS}px "SF Mono","Fira Code","Cascadia Code",monospace`
      ctx.textAlign = 'center'

      for (const col of cols) {
        for (let k = 1; k < col.trailLen; k++) {
          const cy = col.y - k * FS
          if (cy < -FS || cy > c.height + FS) continue

          ctx.globalAlpha = (1 - k / col.trailLen) * 0.65
          ctx.fillStyle   = col.color
          ctx.shadowBlur  = 0

          if (Math.random() < 0.03) col.glyphs[k] = randChar()
          ctx.fillText(col.glyphs[k] ?? '0', col.x, cy)
        }

        if (col.y > 0 && col.y < c.height) {
          ctx.globalAlpha = 1
          ctx.shadowColor = col.color
          ctx.shadowBlur  = 10
          ctx.fillStyle   = light ? '#1d1d1f' : '#ffffff'
          col.glyphs[0]   = randChar()
          ctx.fillText(col.glyphs[0], col.x, col.y)
          ctx.shadowBlur  = 0
        }

        col.y += col.speed

        if (col.y - col.trailLen * FS > c.height) {
          col.y        = -(col.trailLen * FS + Math.random() * 200)
          col.speed    = 0.8 + Math.random() * 1.6
          col.trailLen = 12 + Math.floor(Math.random() * 16)
          col.color    = pickColor(light)
          col.glyphs   = Array.from({ length: col.trailLen + 2 }, randChar)
        }
      }

      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', init)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
