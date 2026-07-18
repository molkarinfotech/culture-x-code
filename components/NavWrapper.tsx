'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion'

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/work',     label: 'Work' },
  { href: '/why-us',   label: 'Why Us' },
  { href: '/process',  label: 'Process' },
]

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1]
const EASE_IN:  [number, number, number, number] = [0.4, 0, 1, 1]

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

export default function NavWrapper() {
  const pathname = usePathname()
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mobileOpen, setMobileOpen] = useState(false)
  const reduced = useReducedMotion()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMobileOpen(false) }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [mobileOpen])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null
    const preferred = stored ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(preferred as 'light' | 'dark')
    document.documentElement.setAttribute('data-theme', preferred)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('theme', next) } catch {}
  }

  const drawerVariants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : -12, transition: { duration: 0.18, ease: EASE_IN } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: EASE_OUT } },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: reduced ? 0 : -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: reduced ? 0 : i * 0.05, duration: 0.24, ease: EASE_OUT },
    }),
  }

  return (
    <>
      <nav className="pf-nav" ref={menuRef}>
        <Link href="/" className="pf-nav-logo">molkarinfotech</Link>

        <ul className="pf-nav-links">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={pathname === href ? 'active' : ''}>{label}</Link>
            </li>
          ))}
        </ul>

        <div className="pf-nav-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <Link href="/contact" className="btn-primary pf-nav-cta">Start a Project</Link>

          <button
            className="hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <ul className="mobile-nav-links">
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.li key={href} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                  <Link
                    href={href}
                    className={pathname === href ? 'active' : ''}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
              <motion.li custom={NAV_LINKS.length} variants={itemVariants} initial="hidden" animate="visible">
                <Link href="/contact" className="btn-primary mobile-cta" onClick={() => setMobileOpen(false)}>
                  Start a Project
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
