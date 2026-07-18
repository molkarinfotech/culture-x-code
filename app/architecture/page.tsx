'use client'

import { useState } from 'react'
import type { Metadata } from 'next'

// Note: metadata export is not supported in client components.
// Move to a parent layout or use a separate metadata file if needed.

const FONT_URL =
  'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,400&display=swap'

const CSS = `
@import url('${FONT_URL}');
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg: #0a0a0a; --surface: #111111; --surface2: #1a1a1a; --surface3: #202020;
  --border: #2a2a2a; --accent: #c9a96e; --accent2: #e8c97e;
  --text: #f0ede8; --muted: #a8a8a8; --faint: #6a6a6a;
  --tag-bg: #1e1a14; --tag-text: #c9a96e;
  --font-body: 'DM Sans', sans-serif; --font-display: 'Fraunces', serif;
}
html { scroll-behavior: smooth; }
body { font-family: var(--font-body); font-size: 16px; color: var(--text); background: var(--bg); -webkit-font-smoothing: antialiased; }

/* NAV */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  display: flex; justify-content: space-between; align-items: center;
  padding: 18px 48px;
  background: rgba(10,10,10,0.92); backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}
.nav-logo { font-family: var(--font-display); font-size: 1.2rem; color: var(--accent); text-decoration: none; letter-spacing: 0.01em; white-space: nowrap; }
.nav-links { display: flex; gap: 32px; list-style: none; }
.nav-links a { color: var(--muted); text-decoration: none; font-size: 0.82rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; transition: color 0.2s; }
.nav-links a:hover { color: var(--text); }
.nav-links a.active { color: var(--accent); }
.nav-btn { padding: 9px 20px; background: var(--accent); color: #0a0a0a; border: none; border-radius: 4px; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; text-decoration: none; cursor: pointer; transition: background 0.2s; font-family: var(--font-body); white-space: nowrap; }
.nav-btn:hover { background: var(--accent2); }

/* HERO */
.hero { padding: 140px 48px 64px; text-align: center; position: relative; overflow: hidden; }
.hero::before { content: ''; position: absolute; top: -160px; left: 50%; transform: translateX(-50%); width: 640px; height: 640px; background: radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 68%); pointer-events: none; }
.hero-eyebrow { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 20px; }
.hero h1 { font-family: var(--font-display); font-size: clamp(2.4rem, 5vw, 4.2rem); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 20px; color: var(--text); }
.hero h1 em { font-style: italic; color: var(--accent); }
.hero-sub { font-size: clamp(1rem, 1.5vw, 1.05rem); color: var(--muted); max-width: 520px; margin: 0 auto 36px; line-height: 1.75; }
.hero-back { display: inline-flex; align-items: center; gap: 8px; color: var(--muted); text-decoration: none; font-size: 0.875rem; font-weight: 500; transition: color 0.2s, border-color 0.2s; border: 1px solid var(--border); padding: 11px 22px; border-radius: 4px; }
.hero-back:hover { color: var(--text); border-color: var(--accent); }

/* TABS */
.tabs-wrapper { padding: 0 48px 80px; max-width: 1300px; margin: 0 auto; }
.tab-bar { display: flex; gap: 2px; margin-bottom: 2px; background: var(--border); border-radius: 4px 4px 0 0; overflow: hidden; }
.tab-btn { flex: 1; padding: 16px 20px; background: var(--surface2); border: none; cursor: pointer; font-family: var(--font-body); font-size: 0.875rem; font-weight: 600; color: var(--muted); letter-spacing: 0.03em; transition: background 0.2s, color 0.2s; text-align: center; }
.tab-btn:hover { background: var(--surface3); color: var(--text); }
.tab-btn.active { background: var(--surface); color: var(--accent); }

/* PANEL SHARED */
.panel-section { margin-bottom: 48px; }
.panel-label { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 14px; padding-left: 2px; }

/* FLOW */
.flow-row { display: flex; align-items: stretch; gap: 0; background: var(--border); overflow: hidden; }
.flow-node { flex: 1; background: var(--surface); padding: 24px 16px; text-align: center; position: relative; }
.flow-node:not(:last-child)::after { content: '›'; position: absolute; right: -10px; top: 50%; transform: translateY(-50%); color: var(--accent); font-size: 1.3rem; z-index: 2; background: var(--surface); padding: 2px 3px; line-height: 1; }
.flow-node-icon { width: 38px; height: 38px; margin: 0 auto 12px; background: var(--tag-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--accent); }
.flow-node-icon svg { width: 17px; height: 17px; }
.flow-node-title { font-size: 0.875rem; font-weight: 600; color: var(--text); margin-bottom: 5px; }
.flow-node-sub { font-size: 0.78rem; color: var(--muted); line-height: 1.5; }

/* FEATURE CARDS */
.features-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2px; background: var(--border); }
.feature-card { background: var(--surface); padding: 28px 24px; transition: background 0.2s; }
.feature-card:hover { background: var(--surface2); }
.feature-card-id { font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; color: rgba(201,169,110,0.18); line-height: 1; margin-bottom: 12px; }
.feature-card-title { font-size: 0.95rem; font-weight: 600; color: var(--text); margin-bottom: 9px; }
.feature-card-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.72; margin-bottom: 14px; }
.tag { display: inline-block; padding: 4px 10px; background: var(--tag-bg); color: var(--tag-text); border: 1px solid rgba(201,169,110,0.2); border-radius: 2px; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }

/* ARCH LAYERS */
.arch-layers { display: flex; flex-direction: column; gap: 2px; }
.arch-layer { display: grid; grid-template-columns: 180px 1fr; background: var(--border); overflow: hidden; }
.arch-layer-label { background: var(--surface2); padding: 20px; display: flex; flex-direction: column; justify-content: center; gap: 5px; border-right: 1px solid var(--border); }
.arch-layer-name { font-size: 0.875rem; font-weight: 600; color: var(--text); }
.arch-layer-sub  { font-size: 0.75rem; color: var(--muted); }
.arch-layer-chips { background: var(--surface); padding: 16px 20px; display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.chip { padding: 5px 13px; background: var(--tag-bg); color: var(--tag-text); border: 1px solid rgba(201,169,110,0.18); border-radius: 2px; font-size: 0.78rem; font-weight: 500; letter-spacing: 0.02em; }
.chip-dim { background: var(--surface2); color: var(--muted); border-color: var(--border); }

/* ADMIN CARDS */
.admin-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2px; background: var(--border); }
.admin-card { background: var(--surface); padding: 28px 24px; transition: background 0.2s; }
.admin-card:hover { background: var(--surface2); }
.admin-card-badge { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 10px; opacity: 0.85; }
.admin-card-title { font-size: 0.95rem; font-weight: 600; color: var(--text); margin-bottom: 9px; }
.admin-card-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.72; margin-bottom: 14px; }
.admin-card-items { display: flex; flex-direction: column; gap: 5px; }
.admin-card-item { font-size: 0.8rem; color: var(--muted); padding-left: 15px; position: relative; line-height: 1.55; }
.admin-card-item::before { content: '—'; position: absolute; left: 0; color: var(--accent); font-size: 0.65rem; top: 3px; }

/* KPI STRIP */
.kpi-strip { display: grid; grid-template-columns: repeat(4,1fr); gap: 2px; background: var(--border); }
.kpi-card { background: var(--surface); padding: 24px 20px; }
.kpi-label { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 9px; }
.kpi-value { font-family: var(--font-display); font-size: clamp(1.6rem,3vw,2.2rem); font-weight: 700; color: var(--text); line-height: 1; margin-bottom: 7px; }
.kpi-sub { font-size: 0.78rem; color: var(--muted); }

/* TABLE */
.table-wrap { background: var(--surface); border: 1px solid var(--border); overflow-x: auto; -webkit-overflow-scrolling: touch; }
table { width: 100%; border-collapse: collapse; font-size: 0.85rem; min-width: 540px; }
thead tr { border-bottom: 1px solid var(--border); background: var(--surface2); }
th { padding: 13px 16px; text-align: left; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
tbody tr { border-bottom: 1px solid var(--border); transition: background 0.15s; }
tbody tr:hover { background: var(--surface2); }
td { padding: 13px 16px; color: var(--text); }
.td-sku  { color: var(--muted); font-family: monospace; font-size: 0.8rem; }
.td-name { font-weight: 500; }
.td-cat  { color: var(--muted); }
.status-badge { display: inline-block; padding: 3px 10px; border-radius: 2px; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }

/* STACK GRID */
.stack-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 2px; background: var(--border); }
.stack-card { background: var(--surface); padding: 26px 22px; transition: background 0.2s; }
.stack-card:hover { background: var(--surface2); }
.stack-role { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 8px; }
.stack-name { font-size: 0.95rem; font-weight: 600; color: var(--text); margin-bottom: 7px; }
.stack-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.68; }

/* FOOTER */
.page-footer { border-top: 1px solid var(--border); padding: 40px 48px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
.footer-logo { font-family: var(--font-display); font-size: 1rem; color: var(--accent); }
.footer-copy { font-size: 0.82rem; color: var(--muted); }
.footer-links { display: flex; gap: 24px; flex-wrap: wrap; }
.footer-links a { font-size: 0.82rem; color: var(--muted); text-decoration: none; transition: color 0.2s; }
.footer-links a:hover { color: var(--text); }

/* RESPONSIVE */
@media (max-width: 900px) {
  .nav { padding: 16px 20px; }
  .nav-links { display: none; }
  .nav-btn { display: none; }
  .hero { padding: 100px 20px 48px; }
  .tabs-wrapper { padding: 0 16px 56px; }
  .tab-btn { font-size: 0.82rem; padding: 14px 10px; }
  .features-grid { grid-template-columns: 1fr; }
  .admin-grid    { grid-template-columns: 1fr; }
  .stack-grid    { grid-template-columns: repeat(2,1fr); }
  .kpi-strip     { grid-template-columns: repeat(2,1fr); }
  .arch-layer    { grid-template-columns: 1fr; }
  .arch-layer-label { border-right: none; border-bottom: 1px solid var(--border); }
  .flow-row { flex-direction: column; gap: 2px; background: transparent; }
  .flow-node { width: 100%; }
  .flow-node:not(:last-child)::after { content: '↓'; right: auto; left: 50%; top: auto; bottom: -14px; transform: translateX(-50%); }
  .page-footer { padding: 32px 20px; flex-direction: column; text-align: center; }
  .footer-links { justify-content: center; }
}
@media (max-width: 480px) {
  .stack-grid { grid-template-columns: 1fr; }
  .kpi-strip  { grid-template-columns: 1fr; }
  .tab-btn { font-size: 0.75rem; padding: 13px 6px; }
}
`

type TabId = 'main' | 'admin' | 'stack'

export default function ArchitecturePage() {
  const [activeTab, setActiveTab] = useState<TabId>('main')

  const tabs: { id: TabId; label: string }[] = [
    { id: 'main',  label: 'Main Website' },
    { id: 'admin', label: 'Admin Portal' },
    { id: 'stack', label: 'Tech Stack' },
  ]

  return (
    <main style={{ background: '#0a0a0a', color: '#f0ede8', fontFamily: "'DM Sans', sans-serif", fontSize: '16px', lineHeight: 1.6, minHeight: '100vh' }}>
      <style>{CSS}</style>

      {/* NAV */}
      <nav className="nav">
        <a href="/" className="nav-logo">molkarinfotech</a>
        <ul className="nav-links">
          <li><a href="/portfolio#services">Services</a></li>
          <li><a href="/portfolio#work">Work</a></li>
          <li><a href="/portfolio#process">Process</a></li>
          <li><a href="/portfolio#contact">Contact</a></li>
          <li><a href="/architecture" className="active">Architecture</a></li>
        </ul>
        <a href="/portfolio#contact" className="nav-btn">Start a Project</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <p className="hero-eyebrow">Ethnic Story · Platform Overview</p>
        <h1>Feature <em>Map</em></h1>
        <p className="hero-sub">
          A complete visual breakdown of every feature across the main storefront,
          admin portal, and the full technology stack.
        </p>
        <a href="/portfolio#work" className="hero-back">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Case Study
        </a>
      </section>

      {/* TABS */}
      <div className="tabs-wrapper">
        <div className="tab-bar" role="tablist">
          {tabs.map(t => (
            <button
              key={t.id}
              role="tab"
              aria-selected={activeTab === t.id}
              aria-controls={`panel-${t.id}`}
              id={`tab-${t.id}`}
              className={`tab-btn${activeTab === t.id ? ' active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── PANEL 1: MAIN WEBSITE ── */}
        {activeTab === 'main' && (
          <div id="panel-main" role="tabpanel" aria-labelledby="tab-main">

            <div className="panel-section" style={{ marginTop: '2px' }}>
              <div className="panel-label">User Flow</div>
              <div className="flow-row">
                {([
                  ['Discovery', 'Browse & Search'],
                  ['Product',   'View details'],
                  ['Cart',      'Add & review'],
                  ['Checkout',  'Stripe payment'],
                  ['Confirmed', 'Order placed'],
                ] as [string, string][]).map(([title, sub], i) => (
                  <div className="flow-node" key={i}>
                    <div className="flow-node-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        {i === 0 && <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>}
                        {i === 1 && <><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></>}
                        {i === 2 && <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></>}
                        {i === 3 && <><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></>}
                        {i === 4 && <polyline points="20 6 9 17 4 12"/>}
                      </svg>
                    </div>
                    <div className="flow-node-title">{title}</div>
                    <div className="flow-node-sub">{sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-section">
              <div className="panel-label">Core Features</div>
              <div className="features-grid">
                {([
                  ['F1', 'Product Catalogue',  'Filtered browsing by category, price, and availability. SSR pages for full SEO indexability and fast first-paint.',         'SSR'],
                  ['F2', 'Vision Auto-Tag',    'Google Vision API labels product images on upload — auto-populates categories and reduces manual curation to zero.',         'API'],
                  ['F3', 'Auth & Accounts',    'Supabase Auth with email, OAuth, and JWT sessions. User profile, saved addresses, and full order history per customer.',    'Auth'],
                  ['F4', 'Cart & Checkout',    'Persistent cart via Supabase. Stripe Payment Element for PCI-compliant checkout with real-time payment confirmation.',      'Payments'],
                  ['F5', 'Order Confirmation', 'Stripe webhook fires on payment success. Order written to Postgres, confirmation shown instantly, confirmation email sent.','Webhook'],
                  ['F6', 'Performance & SEO',  'Next.js App Router with RSC and streaming. Lazy-loaded images, Vercel Edge CDN, and full meta tag control per page.',       'Perf'],
                ] as [string, string, string, string][]).map(([id, title, desc, badge]) => (
                  <div className="feature-card" key={id}>
                    <div className="feature-card-id">{id}</div>
                    <div className="feature-card-title">{title}</div>
                    <div className="feature-card-desc">{desc}</div>
                    <span className="tag">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-section">
              <div className="panel-label">Architecture Layers</div>
              <div className="arch-layers">
                {([
                  ['Presentation', 'Browser / Vercel Edge',   ['Next.js 16', 'React 19', 'Tailwind CSS', 'Framer Motion'],  ['App Router', 'Streaming SSR', 'Static Pages']],
                  ['App Logic',    'Server Actions / API',    ['Server Actions', 'Route Handlers', 'Stripe Webhooks'],       ['Auth Middleware', 'RBAC', 'Vision Pipeline']],
                  ['Data',         'Supabase / PostgreSQL',   ['Supabase', 'PostgreSQL', 'Supabase Auth', 'RLS'],           ['Storage', 'Orders Table', 'Inventory']],
                  ['Infra',        'Vercel / External APIs',  ['Vercel Edge', 'Google Vision API', 'Stripe'],               ['CI/CD', 'Domain/DNS', 'Env Secrets']],
                ] as [string, string, string[], string[]][]).map(([name, sub, chips, dims]) => (
                  <div className="arch-layer" key={name}>
                    <div className="arch-layer-label">
                      <span className="arch-layer-name">{name}</span>
                      <span className="arch-layer-sub">{sub}</span>
                    </div>
                    <div className="arch-layer-chips">
                      {chips.map(c => <span className="chip" key={c}>{c}</span>)}
                      {dims.map(c  => <span className="chip chip-dim" key={c}>{c}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── PANEL 2: ADMIN PORTAL ── */}
        {activeTab === 'admin' && (
          <div id="panel-admin" role="tabpanel" aria-labelledby="tab-admin">

            <div className="panel-section" style={{ marginTop: '2px' }}>
              <div className="panel-label">Admin-Only Features</div>
              <div className="admin-grid">
                {([
                  ['A1', 'Vision Upload Pipeline',
                    'Bulk product image upload triggers Google Vision API. Labels normalised and mapped to catalogue categories automatically.',
                    ['Drag-and-drop upload', 'Auto-tag & categorise', 'Manual label override', 'Bulk batch support']],
                  ['A2', 'Inventory Management',
                    'Real-time stock levels per SKU. Low-stock alerts, bulk edit, and instant status toggle between Live, Out of Stock, and Draft.',
                    ['Per-SKU stock count', 'Live / OOS / Draft toggle', 'Low-stock threshold alerts', 'Bulk CSV import']],
                  ['A3', 'Order Management',
                    'Full order lifecycle from pending to fulfilled. Filter by status, update fulfilment, trigger Stripe refunds, and add internal notes.',
                    ['Status workflow', 'Fulfilment tracking', 'Stripe refund trigger', 'Internal order notes']],
                  ['A4', 'Webhook Event Log',
                    'Every Stripe event — payment, refund, dispute — logged with timestamp, payload preview, and processing status for audit and debugging.',
                    ['Stripe event stream', 'Payload inspector', 'Processing status', 'Retry failed events']],
                  ['A5', 'Analytics Dashboard',
                    'Revenue, order volume, and top-product metrics visualised over configurable date ranges. Exportable to CSV.',
                    ['Revenue over time', 'Order volume chart', 'Top products table', 'CSV export']],
                  ['A6', 'RBAC & Row-Level Security',
                    'Role-based access enforced at Next.js middleware. Supabase RLS mirrors the same rules at the database level — no bypass possible.',
                    ['Admin role gate', 'Supabase RLS policies', 'Session validation', 'Audit-safe by design']],
                ] as [string, string, string, string[]][]).map(([id, title, desc, items]) => (
                  <div className="admin-card" key={id}>
                    <div className="admin-card-badge">{id}</div>
                    <div className="admin-card-title">{title}</div>
                    <div className="admin-card-desc">{desc}</div>
                    <div className="admin-card-items">
                      {items.map(item => <div className="admin-card-item" key={item}>{item}</div>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-section">
              <div className="panel-label">Dashboard KPIs</div>
              <div className="kpi-strip">
                {([
                  ['Total Revenue', '$0.00', 'Stripe confirmed payments', '#4ade80'],
                  ['Orders Today',  '0',     'New orders since midnight',  '#60a5fa'],
                  ['Products Live', '0',     'Active in catalogue',        '#c9a96e'],
                  ['Customers',     '0',     'Registered accounts',        '#c084fc'],
                ] as [string, string, string, string][]).map(([label, val, sub, col]) => (
                  <div className="kpi-card" key={label}>
                    <div className="kpi-label" style={{ color: col }}>{label}</div>
                    <div className="kpi-value">{val}</div>
                    <div className="kpi-sub">{sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-section">
              <div className="panel-label">Inventory Table (Sample)</div>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>{['SKU', 'Product Name', 'Category', 'Stock', 'Status'].map(h => <th key={h}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {([
                      ['ES-001', 'Banarasi Silk Saree',       'Sarees',   '12', 'Live',         { bg: 'rgba(74,222,128,0.08)',   color: '#4ade80', border: 'rgba(74,222,128,0.22)'  }],
                      ['ES-002', 'Anarkali Suit Set',          'Suits',    '3',  'Low Stock',    { bg: 'rgba(251,146,60,0.08)',   color: '#fb923c', border: 'rgba(251,146,60,0.22)'  }],
                      ['ES-003', 'Lehenga Choli — Red',        'Lehengas', '0',  'Out of Stock', { bg: 'rgba(255,255,255,0.04)',  color: '#6a6a6a', border: 'rgba(255,255,255,0.08)' }],
                      ['ES-004', 'Kurti — Block Print',        'Kurtis',   '28', 'Live',         { bg: 'rgba(74,222,128,0.08)',   color: '#4ade80', border: 'rgba(74,222,128,0.22)'  }],
                      ['ES-005', 'Palazzo Set — Embroidered',  'Suits',    '7',  'Live',         { bg: 'rgba(74,222,128,0.08)',   color: '#4ade80', border: 'rgba(74,222,128,0.22)'  }],
                      ['ES-006', 'Sharara Set',                'Suits',    '1',  'Review',       { bg: 'rgba(192,132,252,0.08)',  color: '#c084fc', border: 'rgba(192,132,252,0.22)' }],
                    ] as [string, string, string, string, string, { bg: string; color: string; border: string }][]).map(([sku, name, cat, stock, status, s]) => (
                      <tr key={sku}>
                        <td className="td-sku">{sku}</td>
                        <td className="td-name">{name}</td>
                        <td className="td-cat">{cat}</td>
                        <td>{stock}</td>
                        <td><span className="status-badge" style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>{status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ── PANEL 3: TECH STACK ── */}
        {activeTab === 'stack' && (
          <div id="panel-stack" role="tabpanel" aria-labelledby="tab-stack">

            <div className="panel-section" style={{ marginTop: '2px' }}>
              <div className="panel-label">Full Technology Stack</div>
              <div className="stack-grid">
                {([
                  ['Framework',  'Next.js 16',           'App Router, RSC, Server Actions, streaming SSR. Vercel-native for zero-config deploys.'],
                  ['UI Library', 'React 19',             'Concurrent features, stable Server Components, and improved hydration performance.'],
                  ['Language',   'TypeScript',           'End-to-end type safety from DB schema through API routes to React props.'],
                  ['Styling',    'Tailwind CSS',         'Utility-first CSS. Zero unused styles in production via tree-shaking.'],
                  ['Animation',  'Framer Motion',        'Declarative animations for transitions, product hover states, and cart interactions.'],
                  ['Database',   'Supabase / Postgres',  'Managed Postgres with REST API, real-time subscriptions, and row-level security.'],
                  ['Auth',       'Supabase Auth',        'JWT sessions, OAuth providers, and Row-Level Security enforced at the database layer.'],
                  ['Payments',   'Stripe',               'PCI-compliant checkout, Payment Element, webhooks, and refund management.'],
                  ['Vision',     'Google Vision API',    'Automated image labelling on upload — tags categories without any manual curation.'],
                  ['Storage',    'Supabase Storage',     'CDN-backed product image hosting with bucket-level RLS access control.'],
                  ['Deployment', 'Vercel',               'Git-push deploys, preview URLs per PR, and Edge Network CDN distributed globally.'],
                  ['CI/CD',      'Vercel + GitHub',      'Every push to main triggers a production deploy. PRs get isolated preview environments.'],
                ] as [string, string, string][]).map(([role, name, desc]) => (
                  <div className="stack-card" key={name}>
                    <div className="stack-role">{role}</div>
                    <div className="stack-name">{name}</div>
                    <div className="stack-desc">{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-section">
              <div className="panel-label">Layer Architecture</div>
              <div className="arch-layers">
                {([
                  ['Presentation',   'Browser / Vercel Edge',  ['Next.js 16', 'React 19', 'Tailwind CSS', 'Framer Motion'],   ['App Router', 'Streaming SSR', 'Static Gen']],
                  ['Business Logic', 'Server Actions / API',   ['Server Actions', 'Route Handlers', 'Stripe Webhooks'],        ['RBAC Middleware', 'Vision Pipeline', 'Auth Check']],
                  ['Data',           'Supabase / PostgreSQL',  ['Supabase', 'PostgreSQL', 'Row-Level Security'],              ['Supabase Auth', 'Storage', 'Inventory & Orders']],
                  ['External Svcs',  'Third-Party APIs',       ['Stripe Payments', 'Google Vision API', 'Vercel CDN'],        ['Domain/DNS', 'Env Secrets', 'CI/CD Pipeline']],
                ] as [string, string, string[], string[]][]).map(([name, sub, chips, dims]) => (
                  <div className="arch-layer" key={name}>
                    <div className="arch-layer-label">
                      <span className="arch-layer-name">{name}</span>
                      <span className="arch-layer-sub">{sub}</span>
                    </div>
                    <div className="arch-layer-chips">
                      {chips.map(c => <span className="chip" key={c}>{c}</span>)}
                      {dims.map(c  => <span className="chip chip-dim" key={c}>{c}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer className="page-footer">
        <div className="footer-logo">molkarinfotech</div>
        <div className="footer-copy">&copy; 2026 molkarinfotech. All rights reserved.</div>
        <div className="footer-links">
          <a href="/portfolio#services">Services</a>
          <a href="/portfolio#work">Work</a>
          <a href="/portfolio#process">Process</a>
          <a href="/architecture">Architecture</a>
          <a href="mailto:molkarinfotech@gmail.com">Contact</a>
        </div>
      </footer>
    </main>
  )
}
