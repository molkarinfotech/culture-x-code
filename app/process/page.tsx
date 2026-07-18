import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Process — molkarinfotech',
  description: 'Four steps from first conversation to a product in your hands — with no surprises in between.',
}

const STEPS = [
  ['01','You describe your business',         'We start with a 15-minute conversation — no pitch deck, no jargon. Just an honest discussion about what you do, who your customers are, and what you want the technology to achieve.','Week 1'],
  ['02','We propose the right solution',       'We come back with a clear proposal: what we\'d build, how long it takes, and what it costs. You\'ll understand every line before you agree to anything.',                          'Week 1–2'],
  ['03','We build — you see progress weekly',  'Development happens in short cycles. You get a live preview environment and a weekly update. The first working version is usually visible within days, not months.',                'Weeks 2–6'],
  ['04','We hand over — and stay reachable',   'Full source code, deployment configuration, and a documented handover. You own everything. We stay available for questions, updates, and future work on your terms.',               'Launch +'],
] as [string,string,string,string][]

export default function ProcessPage() {
  return (
    <>
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 60px)', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p className="section-eyebrow">How it works</p>
          <h1 className="section-title">What happens after you get in touch.</h1>
          <p className="section-desc">Four steps from first conversation to a product in your hands — with no surprises in between.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 2, background: 'var(--border)' }}>
            {STEPS.map(([num, title, desc, when]) => (
              <div key={num} style={{ background: 'var(--bg)', padding: '40px 32px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--border-strong)', lineHeight: 1, marginBottom: 20 }}>{num}</div>
                <h2 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', marginBottom: 10 }}>{title}</h2>
                <p style={{ fontSize: '0.84rem', color: 'var(--muted)', lineHeight: 1.75 }}>{desc}</p>
                <div style={{ marginTop: 20, fontSize: '0.72rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{when}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(60px, 8vw, 120px) clamp(24px, 5vw, 60px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px 80px', alignItems: 'center' }}>
          <div>
            <p className="section-eyebrow">Let&rsquo;s talk</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 700, lineHeight: 1.12, marginBottom: 20, color: 'var(--text)' }}>
              Tell us about your business.{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)' }}>Let&rsquo;s figure out the right thing to build.</em>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: 36 }}>No pitch deck, no sales process. An honest conversation about what you&rsquo;re trying to achieve. If we&rsquo;re not the right fit, we&rsquo;ll tell you.</p>
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
