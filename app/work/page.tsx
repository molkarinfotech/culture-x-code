import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Work — molkarinfotech',
  description: 'Ethnic Story: from Instagram DMs to a fully automated e-commerce platform with AI product tagging and a complete admin portal.',
}

const FEATURES = [
  ['01','Smart Product Management',   'Google Vision API integration for automated image tagging and categorisation. Upload a photo — the system labels it. No manual curation needed.'],
  ['02','Full E-Commerce Pipeline',   'Stripe payment processing with webhooks, real-time order confirmation, inventory tracking, and a complete admin portal for order management.'],
  ['03','Authentication & Accounts',  'Supabase Auth with secure session management, user profiles, order history, and role-based access control separating admin and customer views.'],
  ['04','Performance & SEO',          'Server-side rendering via Next.js App Router, optimised images, and Vercel Edge Network delivery for fast organic discovery from day one.'],
] as [string,string,string][]

const META = [
  ['Client',       'Ethnic Story'],
  ['Category',     'E-Commerce · Fashion · Ethnic Wear'],
  ['Deliverables', 'Full-Stack Web App, Admin Portal, Stripe Integration, Vision AI'],
  ['Year',         '2026'],
  ['Status',       '✓ Live & Production'],
] as [string,string][]

const TECH = ['Next.js 16','React 19','TypeScript','Supabase','Stripe','Google Vision API','Tailwind CSS','Framer Motion','PostgreSQL','Vercel']

const ADMIN_ITEMS = [
  'Product management with bulk upload and Google Vision auto-tagging',
  'Live inventory levels with stock status and low-stock alerts',
  'Order management — status, fulfilment, refund triggers',
  'Stripe webhook event log — full payment audit trail',
  'Analytics dashboard — revenue, orders, top products',
  'Role-based access control — admin vs. customer at database level',
]

export default function WorkPage() {
  return (
    <>
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 60px)', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p className="section-eyebrow">Featured case study</p>
          <h1 className="section-title">Ethnic Story — From Instagram DMs to a fully automated online store.</h1>

          {/* Story + meta */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px 80px', alignItems: 'start', marginBottom: 72, marginTop: 48 }}>
            <div>
              <span style={{ display: 'inline-block', padding: '5px 12px', background: 'var(--tag-bg)', color: 'var(--tag-text)', borderRadius: 99, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24 }}>Case Study · 2026 · E-Commerce</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: 20, color: 'var(--text)' }}>A thriving fashion brand. An ordering process that wasn&rsquo;t keeping up.</h2>
              <p style={{ fontSize: '0.925rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: 18 }}>Ethnic Story was taking orders over Instagram DMs. Every sale meant a manual back-and-forth of photos, prices, and bank transfers. Beautiful products, exhausting process.</p>
              <p style={{ fontSize: '0.925rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: 18 }}>We built them a production-grade e-commerce platform: custom storefront, Stripe payments, AI-powered product tagging via Google Vision, and an admin portal the owner runs solo — no developer needed day-to-day.</p>
              <p style={{ fontSize: '0.925rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: 24 }}>The store runs itself. The owner manages it from a dashboard.</p>
              <a href="https://ethnic-story-ai-gen-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.84rem', fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>Visit the live store →</a>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 28 }}>
                {TECH.map(t => <span key={t} style={{ padding: '6px 13px', background: 'var(--bg)', color: 'var(--muted)', border: '1px solid var(--border)', borderRadius: 99, fontSize: '0.75rem', fontWeight: 500 }}>{t}</span>)}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {META.map(([label, value]) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 5, paddingBottom: 20, borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)' }}>{label}</span>
                  <span style={{ fontSize: '0.9rem', color: label === 'Status' ? '#3a9e5c' : 'var(--text)', fontWeight: label === 'Status' ? 500 : 400 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 2, background: 'var(--border)', marginBottom: 2 }}>
            {FEATURES.map(([num, title, desc]) => (
              <div key={num} style={{ background: 'var(--bg)', padding: '36px 32px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--border-strong)', lineHeight: 1, marginBottom: 16 }}>{num}</div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--muted)', lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Admin spotlight */}
          <div style={{ background: 'var(--accent)', color: 'var(--bg)', padding: 'clamp(36px, 5vw, 48px) clamp(28px, 5vw, 56px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px 60px', alignItems: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, lineHeight: 1.25 }}>The admin portal is the product.</h3>
            <div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.8, opacity: 0.85, marginBottom: 20 }}>The owner manages stock levels, processes orders, uploads new products with automatic AI tagging, monitors every payment, and runs the entire operation — all from one dashboard.</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
                {ADMIN_ITEMS.map(item => (
                  <li key={item} style={{ fontSize: '0.84rem', opacity: 0.85, paddingLeft: 18, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, fontSize: '0.75rem' }}>→</span>{item}
                  </li>
                ))}
              </ul>
              <Link href="/architecture" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: '0.84rem', fontWeight: 600, color: 'var(--bg)', opacity: 0.9, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.35)', padding: '9px 18px', borderRadius: 'var(--radius)', background: 'rgba(255,255,255,0.1)' }}>
                Explore the full system architecture →
              </Link>
            </div>
          </div>
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
