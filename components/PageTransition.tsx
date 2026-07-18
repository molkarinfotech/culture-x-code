'use client'

import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1]
const EASE_IN:  [number, number, number, number] = [0.4, 0, 1, 1]

// ── Progress bar ──────────────────────────────────────────────────────────────
function NavProgress() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const [width, setWidth] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    setWidth(0)
    setVisible(true)

    let w = 0
    const tick = () => {
      w = w < 70 ? w + 4 : w < 85 ? w + 0.6 : w
      setWidth(w)
      if (w < 85) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    timerRef.current = setTimeout(() => {
      setWidth(100)
      setTimeout(() => setVisible(false), 300)
    }, 420)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [pathname])

  if (!visible) return null
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        width: `${width}%`,
        background: 'var(--accent)',
        zIndex: 9999,
        transition: width === 100 ? 'width 0.25s ease, opacity 0.3s ease' : 'width 0.08s linear',
        opacity: visible ? 1 : 0,
        pointerEvents: 'none',
        borderRadius: '0 2px 2px 0',
      }}
    />
  )
}

// ── Page transition ────────────────────────────────────────────────────────────
const makeVariants = (reduced: boolean): Variants => ({
  initial: reduced
    ? { opacity: 0 }
    : { opacity: 0, y: 20, filter: 'blur(4px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: reduced
      ? { duration: 0.15 }
      : { duration: 0.42, ease: EASE_OUT },
  },
  exit: reduced
    ? { opacity: 0, transition: { duration: 0.1 } }
    : { opacity: 0, y: -10, filter: 'blur(2px)', transition: { duration: 0.2, ease: EASE_IN } },
})

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const reduced = useReducedMotion() ?? false
  const variants = makeVariants(reduced)

  return (
    <>
      <NavProgress />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ willChange: 'opacity, transform' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
