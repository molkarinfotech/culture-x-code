import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact — molkarinfotech',
  description: 'Start a conversation. No pitch deck, no sales process.',
}

export default function ContactPage() {
  return (
    <>
      <section style={{ padding: 'clamp(60px, 8vw, 120px) clamp(24px, 5vw, 60px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px 80px', alignItems: 'center' }}>
          <div>
            <p className="section-eyebrow">Let&rsquo;s talk</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 700, lineHeight: 1.12, marginBottom: 20, color: 'var(--text)' }}>
              Tell us about your business.{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)' }}>Let&rsquo;s figure out the right thing to build.</em>
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: 36 }}>No pitch deck, no sales process. An honest conversation about what you&rsquo;re trying to achieve, whether we can help, and roughly what it would cost. If we&rsquo;re not the right fit, we&rsquo;ll tell you.</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="mailto:molkarinfotech@gmail.com" className="btn-primary">Send us an email →</a>
              <a href="https://github.com/molkarinfotech" className="btn-secondary" target="_blank" rel="noopener noreferrer">View GitHub</a>
            </div>
            <p style={{ marginTop: 20, fontSize: '0.8rem', color: 'var(--faint)' }}>molkarinfotech@gmail.com · Response within 24 hours</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 36, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
            {[
              ['No lock-in contracts',    'Month-to-month is fine. The code is always yours.'],
              ['Fixed-scope quotes',       'You know the cost before we start. No surprise invoices.'],
              ['Full documentation',       'Every project comes with a handover document you can actually use.'],
              ['Post-launch availability', 'We don\'t disappear after launch. Questions, updates, new features — we\'re here.'],
            ].map(([title, desc]) => (
              <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <svg style={{ width: 20, height: 20, flexShrink: 0, color: 'var(--accent)', marginTop: 2 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text)', marginBottom: 3 }}>{title}</strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{desc}</span>
                </div>
              </div>
            ))}
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
