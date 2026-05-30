'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const ringX = useSpring(dotX, { stiffness: 180, damping: 22, mass: 0.6 })
  const ringY = useSpring(dotY, { stiffness: 180, damping: 22, mass: 0.6 })

  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const isTouchDevice =
      typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches
    if (isTouchDevice) return

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      if (!isVisible) setIsVisible(true)

      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null
      if (el) {
        const clickable = el.closest('a, button, [role="button"], input, textarea, select, label')
        setIsPointer(!!clickable)
        setIsHovering(!!clickable)
      }
    }

    const onLeave = () => setIsVisible(false)
    const onEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [dotX, dotY, isVisible])

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-[#00C853]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          border: '1px solid rgba(0,200,83,0.5)',
        }}
        animate={{
          opacity: isVisible ? 0.7 : 0,
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          background: isHovering ? 'rgba(0,200,83,0.06)' : 'transparent',
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
    </>
  )
}
