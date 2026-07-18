'use client'
import { useState } from 'react'

const fontUrl =
  'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,400&display=swap'

const TABS = ['Main Website', 'Admin Portal', 'Tech Stack'] as const
type Tab = typeof TABS[number]

export default function ArchitectureClient() {
  const [active, setActive] = useState<Tab>('Main Website')

  return (
    <main style={{ background: '#0a0a0a', color: '#f0ede8', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, WebkitFontSmoothing: 'antialiased', minHeight: '100vh' }}>
      <style>{`
        @import url('${fontUrl}');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #0a0a0a; --surface: #111111; --surface2: #1a1a1a; --border: #222222;
          --accent: #c9a96e; --accent2: #e8c97e; --text: #f0ede8; --muted: #888888;
          --tag-bg: #1e1a14; --tag-text: #c9a96e;
          --font-body: 'DM Sans', sans-serif;
          --font-display: 'Fraunces', serif;
        }
        html { scroll-behavior: smooth; }

        .arch-nav { position:fixed; top:0; left:0; right:0; z-index:100; display:flex; justify-content:space-between; align-items:center; padding:20px 60px; background:rgba(10,10,10,0.85); backdrop-filter:blur(12px); border-bottom:1px solid var(--border); }
        .arch-nav-logo { font-family:var(--font-display); font-size:1.25rem; color:var(--accent); text-decoration:none; letter-spacing:0.01em; }
        .arch-nav-links { display:flex; gap:36px; list-style:none; }
        .arch-nav-links a { color:var(--muted); text-decoration:none; font-size:0.875rem; font-weight:500; letter-spacing:0.04em; text-transform:uppercase; transition:color 0.2s; }
        .arch-nav-links a:hover { color:var(--text); }
        .arch-nav-links a.active { color:var(--accent); }
        .btn-primary { padding:14px 32px; background:var(--accent); color:#0a0a0a; border:none; border-radius:4px; font-size:0.875rem; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; text-decoration:none; cursor:pointer; transition:background 0.2s,transform 0.15s; display:inline-block; font-family:var(--font-body); }
        .btn-primary:hover { background:var(--accent2); transform:translateY(-1px); }
        .btn-secondary { padding:14px 32px; background:transparent; color:var(--text); border:1px solid var(--border); border-radius:4px; font-size:0.875rem; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; text-decoration:none; cursor:pointer; transition:border-color 0.2s,transform 0.15s; display:inline-block; font-family:var(--font-body); }
        .btn-secondary:hover { border-color:var(--accent); transform:translateY(-1px); }

        .arch-hero { min-height:60vh; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding:140px 40px 80px; position:relative; overflow:hidden; }
        .arch-hero::before { content:''; position:absolute; top:-200px; left:50%; transform:translateX(-50%); width:700px; height:700px; background:radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%); pointer-events:none; }
        .arch-eyebrow { font-size:0.75rem; font-weight:600; letter-spacing:0.16em; text-transform:uppercase; color:var(--accent); margin-bottom:20px; }
        .arch-hero h1 { font-family:var(--font-display); font-size:clamp(2.4rem,5vw,4.5rem); font-weight:700; line-height:1.1; letter-spacing:-0.02em; margin-bottom:24px; max-width:800px; }
        .arch-hero h1 span { color:var(--accent); }
        .arch-hero-sub { font-size:clamp(0.95rem,2vw,1.1rem); color:var(--muted); max-width:540px; margin-bottom:40px; line-height:1.75; }
        .arch-hero-links { display:flex; gap:16px; flex-wrap:wrap; justify-content:center; }

        /* TABS */
        .tab-bar { display:flex; border-bottom:1px solid var(--border); padding:0 60px; background:var(--surface); position:sticky; top:64px; z-index:90; gap:0; }
        .tab-btn { padding:18px 28px; background:none; border:none; border-bottom:2px solid transparent; color:var(--muted); font-size:0.875rem; font-weight:500; cursor:pointer; font-family:var(--font-body); transition:color 0.2s, border-color 0.2s; margin-bottom:-1px; letter-spacing:0.02em; }
        .tab-btn:hover { color:var(--text); }
        .tab-btn.active { color:var(--accent); border-bottom-color:var(--accent); }

        /* ARCH SECTIONS */
        .arch-section { padding:80px 60px; }
        .arch-section-alt { padding:80px 60px; background:var(--surface); }
        .section-eyebrow { font-size:0.72rem; font-weight:600; letter-spacing:0.16em; text-transform:uppercase; color:var(--accent); margin-bottom:16px; }
        .section-title { font-family:var(--font-display); font-size:clamp(1.8rem,3vw,2.6rem); font-weight:700; line-height:1.15; margin-bottom:16px; max-width:640px; }
        .section-desc { color:var(--muted); font-size:0.95rem; max-width:560px; line-height:1.8; margin-bottom:52px; }
        .arch-divider { height:1px; background:var(--border); margin:0 60px; }

        /* LAYER STACK */
        .layer-stack { display:flex; flex-direction:column; gap:3px; }
        .layer { border:1px solid var(--border); background:var(--surface); overflow:hidden; }
        .layer-header { display:flex; align-items:center; gap:16px; padding:20px 28px; border-bottom:1px solid var(--border); background:var(--surface2); }
        .layer-number { font-family:var(--font-display); font-size:1.4rem; font-weight:700; color:rgba(201,169,110,0.25); min-width:32px; }
        .layer-title { font-size:0.95rem; font-weight:600; color:var(--text); }
        .layer-subtitle { font-size:0.78rem; color:var(--muted); margin-left:auto; letter-spacing:0.04em; }
        .layer-chips { display:flex; flex-wrap:wrap; gap:10px; padding:20px 28px; }
        .chip { padding:7px 14px; background:var(--tag-bg); color:var(--tag-text); border:1px solid rgba(201,169,110,0.15); border-radius:2px; font-size:0.78rem; font-weight:500; letter-spacing:0.03em; }
        .chip-muted { color:var(--muted); border-color:var(--border); background:var(--bg); }

        /* FLOW DIAGRAM */
        .flow-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:0; background:var(--border); border:1px solid var(--border); }
        .flow-step { background:var(--surface); padding:32px 20px; text-align:center; position:relative; }
        .flow-step:not(:last-child)::after { content:'→'; position:absolute; right:-10px; top:50%; transform:translateY(-50%); color:var(--accent); font-size:1rem; z-index:2; background:var(--surface); padding:4px 2px; }
        .flow-step-num { font-family:var(--font-display); font-size:1.6rem; font-weight:700; color:rgba(201,169,110,0.2); margin-bottom:10px; }
        .flow-step-title { font-size:0.85rem; font-weight:600; color:var(--text); margin-bottom:8px; }
        .flow-step-desc { font-size:0.75rem; color:var(--muted); line-height:1.6; }

        /* COMPARE */
        .compare-grid { display:grid; grid-template-columns:1fr 1fr; gap:2px; background:var(--border); }
        .compare-col { background:var(--surface); padding:36px 32px; }
        .compare-col-title { font-family:var(--font-display); font-size:1.1rem; font-weight:600; color:var(--accent); margin-bottom:24px; padding-bottom:16px; border-bottom:1px solid var(--border); }
        .compare-list { display:flex; flex-direction:column; gap:12px; list-style:none; }
        .compare-list li { font-size:0.875rem; color:var(--muted); padding-left:16px; position:relative; line-height:1.6; }
        .compare-list li::before { content:'—'; position:absolute; left:0; color:var(--accent); font-size:0.75rem; top:2px; }

        /* ADMIN MOCKUP */
        .admin-mockup { background:var(--surface2); border:1px solid var(--border); border-radius:6px; overflow:hidden; }
        .admin-topbar { background:var(--bg); border-bottom:1px solid var(--border); padding:12px 20px; display:flex; align-items:center; gap:10px; }
        .admin-topbar-dot { width:10px; height:10px; border-radius:50%; }
        .admin-url { flex:1; background:var(--surface); border:1px solid var(--border); border-radius:4px; padding:5px 12px; font-size:0.75rem; color:var(--muted); text-align:center; }
        .admin-body { display:grid; grid-template-columns:220px 1fr; min-height:480px; }
        .admin-sidebar { background:var(--bg); border-right:1px solid var(--border); padding:20px 0; }
        .admin-sidebar-brand { padding:0 20px 20px; border-bottom:1px solid var(--border); margin-bottom:16px; font-family:var(--font-display); font-size:0.95rem; color:var(--accent); }
        .admin-nav-group { margin-bottom:8px; }
        .admin-nav-group-label { padding:6px 20px; font-size:0.65rem; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted); }
        .admin-nav-item { display:flex; align-items:center; gap:10px; padding:8px 20px; font-size:0.8rem; color:var(--muted); cursor:pointer; transition:background 0.15s, color 0.15s; }
        .admin-nav-item:hover, .admin-nav-item.active { background:var(--surface); color:var(--text); }
        .admin-nav-item.active { border-left:2px solid var(--accent); color:var(--accent); }
        .admin-nav-icon { width:14px; height:14px; opacity:0.6; }
        .admin-main { padding:28px; overflow:auto; }
        .admin-main-title { font-size:1.1rem; font-weight:600; color:var(--text); margin-bottom:20px; }
        .kpi-row { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-bottom:24px; }
        .kpi-card { background:var(--bg); border:1px solid var(--border); border-radius:4px; padding:16px; }
        .kpi-label { font-size:0.68rem; color:var(--muted); font-weight:500; letter-spacing:0.06em; text-transform:uppercase; margin-bottom:6px; }
        .kpi-value { font-family:var(--font-display); font-size:1.4rem; font-weight:700; color:var(--text); }
        .kpi-change { font-size:0.72rem; color:#4ade80; margin-top:4px; }
        .table-wrap { background:var(--bg); border:1px solid var(--border); border-radius:4px; overflow:hidden; }
        .table-header { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; padding:10px 16px; border-bottom:1px solid var(--border); }
        .th { font-size:0.68rem; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:var(--muted); }
        .table-row { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; padding:10px 16px; border-bottom:1px solid var(--border); align-items:center; }
        .table-row:last-child { border-bottom:none; }
        .td { font-size:0.78rem; color:var(--text); }
        .td.muted { color:var(--muted); }
        .status-badge { display:inline-block; padding:2px 8px; border-radius:2px; font-size:0.65rem; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; }
        .status-live { background:rgba(74,222,128,0.12); color:#4ade80; }
        .status-out { background:rgba(248,113,113,0.12); color:#f87171; }
        .status-review { background:rgba(201,169,110,0.12); color:var(--accent); }

        /* STACK GRID */
        .stack-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:2px; background:var(--border); }
        .stack-card { background:var(--surface); padding:28px 24px; }
        .stack-card-role { font-size:0.68rem; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--accent); margin-bottom:8px; }
        .stack-card-name { font-size:1rem; font-weight:600; color:var(--text); margin-bottom:8px; }
        .stack-card-desc { font-size:0.78rem; color:var(--muted); line-height:1.65; }

        /* CTA / FOOTER */
        .arch-cta { text-align:center; padding:100px 60px; position:relative; overflow:hidden; }
        .arch-cta::before { content:''; position:absolute; bottom:-100px; left:50%; transform:translateX(-50%); width:600px; height:600px; background:radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%); pointer-events:none; }
        .arch-cta h2 { font-family:var(--font-display); font-size:clamp(2rem,4vw,3.2rem); font-weight:700; margin-bottom:20px; line-height:1.1; }
        .arch-cta p { font-size:0.95rem; color:var(--muted); max-width:440px; margin:0 auto 40px; line-height:1.75; }
        .arch-cta-links { display:flex; gap:16px; flex-wrap:wrap; justify-content:center; }
        .arch-footer { border-top:1px solid var(--border); padding:48px 60px; display:flex; justify-content:space-between; align-items:center; }
        .footer-logo { font-family:var(--font-display); font-size:1.1rem; color:var(--accent); }
        .footer-copy { font-size:0.8rem; color:var(--muted); }
        .footer-links { display:flex; gap:28px; }
        .footer-links a { font-size:0.8rem; color:var(--muted); text-decoration:none; transition:color 0.2s; }
        .footer-links a:hover { color:var(--text); }

        @media (max-width:900px) {
          .arch-nav { padding:18px 24px; } .arch-nav-links { display:none; }
          .arch-section, .arch-section-alt { padding:60px 24px; }
          .arch-divider { margin:0 24px; }
          .tab-bar { padding:0 24px; overflow-x:auto; }
          .flow-grid { grid-template-columns:1fr; }
          .flow-step:not(:last-child)::after { content:'↓'; right:auto; left:50%; top:auto; bottom:-14px; transform:translateX(-50%); }
          .compare-grid { grid-template-columns:1fr; }
          .stack-grid { grid-template-columns:repeat(2,1fr); }
          .admin-body { grid-template-columns:1fr; }
          .admin-sidebar { display:none; }
          .kpi-row { grid-template-columns:repeat(2,1fr); }
          .table-header, .table-row { grid-template-columns:2fr 1fr 1fr; }
          .table-header .th:last-child, .table-row .td:last-child { display:none; }
          .arch-footer { flex-direction:column; gap:20px; text-align:center; }
          .footer-links { flex-wrap:wrap; justify-content:center; }
        }
      `}</style>

      {/* NAV */}
      <nav className="arch-nav">
        <a href="/portfolio" className="arch-nav-logo">molkarinfotech</a>
        <ul className="arch-nav-links">
          <li><a href="/portfolio#services">Services</a></li>
          <li><a href="/portfolio#work">Work</a></li>
          <li><a href="/portfolio#process">Process</a></li>
          <li><a href="/portfolio#contact">Contact</a></li>
          <li><a href="/architecture" className="active">Architecture</a></li>
        </ul>
        <a href="/portfolio#contact" className="btn-primary" style={{ fontSize: '0.78rem', padding: '10px 22px' }}>Start a Project</a>
      </nav>

      {/* HERO */}
      <section className="arch-hero">
        <p className="arch-eyebrow">Technical Deep-Dive · Ethnic Story</p>
        <h1>System <span>Architecture</span></h1>
        <p className="arch-hero-sub">A complete breakdown of the Ethnic Story platform — every layer, service, and data flow from browser to database.</p>
        <div className="arch-hero-links">
          <a href="#overview" className="btn-primary">Explore Architecture</a>
          <a href="/portfolio#work" className="btn-secondary">Back to Case Study</a>
        </div>
      </section>

      {/* TAB BAR */}
      <div className="tab-bar" id="overview">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`tab-btn${active === tab ? ' active' : ''}`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── TAB: MAIN WEBSITE ── */}
      {active === 'Main Website' && (
        <>
          {/* LAYER STACK */}
          <section className="arch-section">
            <p className="section-eyebrow">System Layers</p>
            <h2 className="section-title">Four-layer platform architecture</h2>
            <p className="section-desc">Every request passes through four clearly separated layers — presentation, application logic, data, and external services — keeping concerns isolated and the system maintainable.</p>
            <div className="layer-stack">
              {([
                ['01', 'Presentation Layer',           'Browser / Edge',                        ['Next.js 16 App Router','React 19','TypeScript','Tailwind CSS','Framer Motion'], ['Server Components (RSC)','Client Components','Streaming SSR','Static Generation']],
                ['02', 'Application Logic Layer',      'Next.js API Routes / Server Actions',    ['Server Actions','Route Handlers','Stripe Webhooks','Google Vision API'],        ['Cart & Order Logic','Auth Middleware','RBAC Enforcement','Image Tag Pipeline']],
                ['03', 'Data Layer',                   'Supabase / PostgreSQL',                  ['Supabase','PostgreSQL','Supabase Auth','Row-Level Security','Supabase Storage'], ['Products Table','Orders Table','Users / Profiles','Inventory Tracking']],
     