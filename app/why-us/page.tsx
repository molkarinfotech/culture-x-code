import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Us — molkarinfotech',
  description: 'Four genuine commitments we make to every client. No lock-in, no middlemen, no billable-hour padding.',
}

const REASONS = [
  ['01 — Cost model',    'You pay once.',                        'There\'s no monthly fee for a website you already paid to build. When the project is done, it\'s yours — the code, the database, the domain configuration. **Forever.** In three years, a $39/mo Shopify plan costs you $1,404. A custom store built once pays for itself.'],
  ['02 — Communication', 'You talk to the builder.',             'Not a project manager. Not a support ticket system. The person answering your question is the same person who wrote the code. **Decisions happen in hours, not weeks.** No account manager relay. No offshore handoff.'],
  ['03 — Technology',    'We use AI where it actually helps.',   'Not as a buzzword. Ethnic Story\'s admin portal uses Google Vision AI to tag products automatically — removing hours of manual work. We find the **right technology for the right problem**, not the trendiest one.'],
  ['04 — Outcomes',      'We care about your ROI, not billable hours.', 'A solution that takes two weeks and costs half as much but **solves your actual problem** is better than a six-month project that overdelivers on features nobody uses. We\'ll tell you honestly if a simpler answer exists.'],
] as [string,string,string][]

function renderBold(text: string) {
  return text.split('**').map((part, i) =>
    i % 2 === 1 ? <strong key={i} style={{ color: 'var(--text)', fontWeight: 600 }}>{part}</strong> : part
  )
}

export default function WhyUsPage() {
  return (
    <>
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 60px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p className="section-eyebrow">Why molkarinfotech</p>
          <h1 className="section-title">Four things that are genuinely true.</h1>
          <p className="section-desc">Not marketing copy. Actual commitments we make to every client.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2, background: 'var(--border)' }}>
            {REASONS.map(([num, title, body]) => (
              <div key={num} style={{ background: 'var(--surface)', padding: '44px 40px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>{num}</div>
                <h2 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text)', marginBottom: 12, lineHeight: 1.4 }}>{title}</h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.8 }}>{renderBold(body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(40px, 5vw, 80px) clamp(24px, 5vw, 60px)', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>See it in action.</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', maxWidth: 480 }}>Read the Ethnic Story case study — a real project that demonstrates all four principles.</p>
          </div>
          <Link href="/work" className="btn-primary" style={{ flexShrink: 0 }}>View Case Study →</Link>
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
