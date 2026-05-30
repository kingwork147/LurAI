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

function pickColor(): string {
  const r = Math.random()
  if (r < 0.55) return '#00C853'   // primary brand green
  if (r < 0.85) return '#5EF38C'   // mint glow
  return '#00D4FF'                  // cyan — sparingly
}

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const el = canvasRef.current
    if (!el) return
    // Capture as non-null so nested functions don't need repeated checks
    const c   = el as HTMLCanvasElement
    const ctx = c.getContext('2d')!
    let raf: number
    let cols: Column[] = []

    const FS  = 12
    const GAP = 24

    function init() {
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
          color:    pickColor(),
          glyphs:   Array.from({ length: trailLen + 2 }, randChar),
        }
      })

      ctx.fillStyle = '#030303'
      ctx.fillRect(0, 0, c.width, c.height)
    }

    init()
    window.addEventListener('resize', init)

    function draw() {
      ctx.fillStyle = 'rgba(3,3,3,0.12)'
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
          ctx.fillStyle   = '#ffffff'
          col.glyphs[0]   = randChar()
          ctx.fillText(col.glyphs[0], col.x, col.y)
          ctx.shadowBlur  = 0
        }

        col.y += col.speed

        if (col.y - col.trailLen * FS > c.height) {
          col.y        = -(col.trailLen * FS + Math.random() * 200)
          col.speed    = 0.8 + Math.random() * 1.6
          col.trailLen = 12 + Math.floor(Math.random() * 16)
          col.color    = pickColor()
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
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
