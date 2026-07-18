import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'molkarinfotech — Technology that grows your business',
  description: 'A boutique technology partner for small and medium businesses.',
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        minHeight: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: 'clamp(60px, 8vw, 120px) clamp(24px, 5vw, 60px) 60px',
        maxWidth: 1100, margin: '0 auto',
      }}>
        <p style={{
          fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 28,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--accent)' }} />
          Boutique technology partner
        </p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
          fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.02em',
          marginBottom: 28, maxWidth: 780, color: 'var(--text)',
        }}>
          Technology that{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 300 }}>grows</em>
          <br />your business.
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: 'var(--muted)',
          maxWidth: 520, marginBottom: 44, lineHeight: 1.75,
        }}>
          Not a subscription. Not a template. A custom-built digital solution — designed around
          how your business actually works, and handed over to you completely.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 44 }}>
          {[
            '✦ One-time cost — you own it forever',
            '✦ Built in weeks, not months',
            '✦ Direct line to your developer',
          ].map(chip => (
            <span key={chip} style={{
              padding: '7px 14px', background: 'var(--accent-light)',
              color: 'var(--accent)', borderRadius: 99,
              fontSize: '0.8rem', fontWeight: 500,
              border: '1px solid var(--border-strong)',
            }}>{chip}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/work" className="btn-primary">See Our Work</Link>
          <Link href="/contact" className="btn-secondary">Start a Conversation</Link>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div style={{
        borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
        padding: '28px clamp(24px, 5vw, 60px)',
        display: 'flex', alignItems: 'center', gap: 16,
        background: 'var(--surface)', overflow: 'hidden', flexWrap: 'wrap',
      }}>
        <span style={{
          fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: 'var(--faint)',
          whiteSpace: 'nowrap', flexShrink: 0, paddingRight: 16,
          borderRight: '1px solid var(--border)',
        }}>We work with</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {['Retail stores','Medical practices','Service providers','Restaurants & cafes','Tradies','Grocers & chemists','Fashion brands','Any small business'].map(item => (
            <span key={item} style={{
              padding: '6px 14px', background: 'var(--bg)', border: '1px solid var(--border)',
              borderRadius: 99, fontSize: '0.8rem', color: 'var(--muted)', whiteSpace: 'nowrap',
            }}>{item}</span>
          ))}
        </div>
      </div>

      {/* ── PROBLEM ── */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 60px)', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p className="section-eyebrow">The real problem</p>
          <h2 className="section-title">Most small businesses are being sold the wrong solution.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2, background: 'var(--border)', marginTop: 48 }}>
            {([
              ['01','The subscription trap','Shopify, Wix, and Squarespace charge you monthly — forever. After three years you\'ve paid for the site three times over, and you still own nothing.','We build it once. You own it forever.'],
              ['02','The template ceiling','Page builders give you 80% of a website. The last 20% — your actual differentiator — is always locked behind "not supported."','We build around your business, not a template.'],
              ['03','The disappearing developer','Finding someone who stays accountable after launch — who answers your calls and still cares six months later — is the hard part.','We document everything and stay reachable.'],
            ] as [string,string,string,string][]).map(([num, title, body, fix]) => (
              <div key={num} style={{ background: 'var(--surface)', padding: '44px 36px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 700, color: 'var(--border-strong)', lineHeight: 1, marginBottom: 24 }}>{num}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)', marginBottom: 14, lineHeight: 1.4 }}>{title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75 }}>{body}</p>
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border)', fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.04em' }}>→ {fix}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 60px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p className="section-eyebrow">Who we are</p>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.5, color: 'var(--text)', maxWidth: 680, marginBottom: 24 }}>
            We&rsquo;re a boutique technology firm. <strong style={{ fontWeight: 600, fontStyle: 'normal' }}>Small by design.</strong>
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: 580, lineHeight: 1.8, marginBottom: 60 }}>
            When you hire molkarinfotech, you&rsquo;re working directly with the people building your product — not an account manager relaying messages to an offshore team.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 2, background: 'var(--border)' }}>
            {[
              ['Principle 01','Empathy before architecture','We start every project by understanding your business model, your customers, and what success looks like to you. The tech comes second — always.'],
              ['Principle 02','Innovation at the right price','AI integration, modern frameworks, production-grade infrastructure — delivered without the enterprise price tag.'],
              ['Principle 03','You own everything','Source code, database, domain configuration, full documentation. We build it, hand it over completely, and stay here if you need us.'],
            ].map(([num, title, body]) => (
              <div key={num} style={{ background: 'var(--bg)', padding: '36px 32px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>{num}</div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', marginBottom: 12, lineHeight: 1.4 }}>{title}</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--muted)', lineHeight: 1.75 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
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
