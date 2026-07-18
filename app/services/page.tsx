import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services — molkarinfotech',
  description: 'Six outcomes built around your business. Custom e-commerce, AI integration, backend infrastructure, and more.',
}

const SERVICES = [
  ['Your own online store',        'E-Commerce',     'A custom storefront with payments, inventory management, admin portal, and order pipeline — built for your specific products and how you sell them.',       'Stripe · Supabase · Next.js'],
  ['Your brand, built to convert', 'Design & UX',    'Pixel-perfect interfaces that feel like your business. Clean, fast, and designed to turn browsers into buyers.',                                         'Framer Motion · Tailwind CSS'],
  ['Customers find you on Google', 'SEO & Speed',    'Server-rendered pages, fast load times, semantic markup. The technical foundations that drive organic discovery — built in from day one.',            'Next.js SSR · Vercel Edge'],
  ['Your data, forever yours',     'Backend',        'Secure databases, authentication, and API infrastructure that you own outright. No vendor lock-in. Full source code on handover.',                    'Supabase · PostgreSQL · TypeScript'],
  ['Works on every device',        'Mobile-first',   'Every project is designed at 375px first. Touch targets, responsive layouts, and tested across all screen sizes before launch.',                        'Responsive CSS · Touch UX'],
  ['AI where it actually helps',   'AI Integration', 'Automated image tagging, content classification, smart search. We find the right AI tool for your specific workflow — not the trendiest one.',         'Google Vision · LLM APIs'],
] as [string,string,string,string][]

export default function ServicesPage() {
  return (
    <>
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 60px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto 48px' }}>
          <p className="section-eyebrow">What you get</p>
          <h1 className="section-title">Six outcomes, built around your business</h1>
          <p className="section-desc">Every service is framed around what you walk away with — not what technologies we use to build it.</p>
        </div>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2, background: 'var(--border)' }}>
            {SERVICES.map(([title, tag, desc, tech]) => (
              <div key={title} style={{ background: 'var(--surface)', padding: '40px 32px', transition: 'background 0.2s', cursor: 'default' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-light)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--surface)')}
              >
                <div style={{ display: 'inline-block', padding: '4px 10px', background: 'var(--tag-bg)', color: 'var(--tag-text)', borderRadius: 99, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20 }}>{tag}</div>
                <h2 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)', marginBottom: 10, lineHeight: 1.4 }}>{title}</h2>
                <p style={{ fontSize: '0.84rem', color: 'var(--muted)', lineHeight: 1.75 }}>{desc}</p>
                <p style={{ marginTop: 20, fontSize: '0.75rem', color: 'var(--faint)', fontWeight: 500 }}>{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(40px, 5vw, 80px) clamp(24px, 5vw, 60px)', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>Ready to talk about your project?</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', maxWidth: 480 }}>No pitch deck, no sales process. An honest conversation about what you need and what it would cost.</p>
          </div>
          <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>Start a Conversation →</Link>
        </div>
      </section>

      <footer className="pf-footer">
        <div className="footer-logo">molkarinfotech</div>
        <div className="footer-copy">&copy; 2026 molkarinfotech. All rights reserved.</div>
        <div className="footer-links">
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/process">Process</Link>
          <a href="mailto:molkarinfotech@gmail.com">Contact</a>
        </div>
      </footer>
    </>
  )
}
