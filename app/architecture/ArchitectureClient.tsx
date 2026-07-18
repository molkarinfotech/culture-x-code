'use client'
import { useState } from 'react'

const fontUrl =
  'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,400&display=swap'

const TABS = ['Main Website', 'Admin Portal', 'Tech Stack'] as const
type Tab = typeof TABS[number]

export default function ArchitectureClient() {
  const [active, setActive] = useState<Tab>('Main Website')

  return (
    <main style={{ background: '#0d100e', color: '#eceee9', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, WebkitFontSmoothing: 'antialiased', minHeight: '100vh' }}>
      <style>{`
        @import url('${fontUrl}');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg:           #0d100e;
          --surface:      #131812;
          --surface2:     #192018;
          --border:       rgba(77,154,106,0.14);
          --border-strong:rgba(77,154,106,0.22);
          --accent:       #4d9a6a;
          --accent-hover: #3d8059;
          --accent-light: #1a2e22;
          --text:         #eceee9;
          --muted:        #7a8a7d;
          --faint:        #4a5a4d;
          --tag-bg:       #1a2e22;
          --tag-text:     #4d9a6a;
          --font-body:    'DM Sans', sans-serif;
          --font-display: 'Fraunces', serif;
        }
        html { scroll-behavior: smooth; }

        /* NAV */
        .arch-nav { position:fixed; top:0; left:0; right:0; z-index:100; display:flex; justify-content:space-between; align-items:center; padding:20px 60px; background:rgba(13,16,14,0.88); backdrop-filter:blur(14px); border-bottom:1px solid var(--border); }
        .arch-nav-logo { font-family:var(--font-display); font-size:1.2rem; color:var(--accent); text-decoration:none; letter-spacing:0.01em; font-weight:600; }
        .arch-nav-links { display:flex; gap:36px; list-style:none; }
        .arch-nav-links a { color:var(--muted); text-decoration:none; font-size:0.875rem; font-weight:500; letter-spacing:0.02em; transition:color 0.2s; }
        .arch-nav-links a:hover { color:var(--text); }
        .arch-nav-links a.active { color:var(--accent); }
        .btn-primary { padding:12px 28px; background:var(--accent); color:#0d100e; border:none; border-radius:4px; font-size:0.84rem; font-weight:700; letter-spacing:0.04em; text-decoration:none; cursor:pointer; transition:background 0.2s,transform 0.15s; display:inline-block; font-family:var(--font-body); }
        .btn-primary:hover { background:var(--accent-hover); transform:translateY(-1px); }
        .btn-secondary { padding:12px 28px; background:transparent; color:var(--text); border:1px solid var(--border-strong); border-radius:4px; font-size:0.84rem; font-weight:600; letter-spacing:0.04em; text-decoration:none; cursor:pointer; transition:border-color 0.2s,background 0.2s,transform 0.15s; display:inline-block; font-family:var(--font-body); }
        .btn-secondary:hover { border-color:var(--accent); background:var(--accent-light); transform:translateY(-1px); }

        /* HERO */
        .arch-hero { min-height:60vh; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding:140px 40px 80px; position:relative; overflow:hidden; }
        .arch-hero::before { content:''; position:absolute; top:-200px; left:50%; transform:translateX(-50%); width:700px; height:700px; background:radial-gradient(circle, rgba(77,154,106,0.07) 0%, transparent 70%); pointer-events:none; }
        .arch-eyebrow { font-size:0.75rem; font-weight:600; letter-spacing:0.16em; text-transform:uppercase; color:var(--accent); margin-bottom:20px; }
        .arch-hero h1 { font-family:var(--font-display); font-size:clamp(2.4rem,5vw,4.5rem); font-weight:700; line-height:1.1; letter-spacing:-0.02em; margin-bottom:24px; max-width:800px; }
        .arch-hero h1 span { color:var(--accent); }
        .arch-hero-sub { font-size:clamp(0.95rem,2vw,1.1rem); color:var(--muted); max-width:540px; margin-bottom:40px; line-height:1.75; }
        .arch-hero-links { display:flex; gap:16px; flex-wrap:wrap; justify-content:center; }

        /* TABS */
        .tab-bar { display:flex; border-bottom:1px solid var(--border); padding:0 60px; background:var(--surface); position:sticky; top:65px; z-index:90; }
        .tab-btn { padding:18px 28px; background:none; border:none; border-bottom:2px solid transparent; color:var(--muted); font-size:0.875rem; font-weight:500; cursor:pointer; font-family:var(--font-body); transition:color 0.2s,border-color 0.2s; margin-bottom:-1px; letter-spacing:0.02em; }
        .tab-btn:hover { color:var(--text); }
        .tab-btn.active { color:var(--accent); border-bottom-color:var(--accent); }

        /* SECTIONS */
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
        .layer-number { font-family:var(--font-display); font-size:1.4rem; font-weight:700; color:rgba(77,154,106,0.2); min-width:32px; }
        .layer-title { font-size:0.95rem; font-weight:600; color:var(--text); }
        .layer-subtitle { font-size:0.78rem; color:var(--muted); margin-left:auto; letter-spacing:0.04em; }
        .layer-chips { display:flex; flex-wrap:wrap; gap:10px; padding:20px 28px; }
        .chip { padding:7px 14px; background:var(--tag-bg); color:var(--tag-text); border:1px solid var(--border-strong); border-radius:2px; font-size:0.78rem; font-weight:500; letter-spacing:0.03em; }
        .chip-muted { color:var(--muted); border-color:var(--border); background:var(--bg); }

        /* FLOW GRID */
        .flow-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:0; background:var(--border); border:1px solid var(--border); }
        .flow-step { background:var(--surface); padding:32px 20px; text-align:center; position:relative; }
        .flow-step:not(:last-child)::after { content:'\u2192'; position:absolute; right:-10px; top:50%; transform:translateY(-50%); color:var(--accent); font-size:1rem; z-index:2; background:var(--surface); padding:4px 2px; }
        .flow-step-num { font-family:var(--font-display); font-size:1.6rem; font-weight:700; color:rgba(77,154,106,0.18); margin-bottom:10px; }
        .flow-step-title { font-size:0.85rem; font-weight:600; color:var(--text); margin-bottom:8px; }
        .flow-step-desc { font-size:0.75rem; color:var(--muted); line-height:1.6; }

        /* COMPARE */
        .compare-grid { display:grid; grid-template-columns:1fr 1fr; gap:2px; background:var(--border); }
        .compare-col { background:var(--surface); padding:36px 32px; }
        .compare-col-title { font-family:var(--font-display); font-size:1.1rem; font-weight:600; color:var(--accent); margin-bottom:24px; padding-bottom:16px; border-bottom:1px solid var(--border); }
        .compare-list { display:flex; flex-direction:column; gap:12px; list-style:none; }
        .compare-list li { font-size:0.875rem; color:var(--muted); padding-left:16px; position:relative; line-height:1.6; }
        .compare-list li::before { content:'\u2014'; position:absolute; left:0; color:var(--accent); font-size:0.75rem; top:2px; }

        /* ADMIN MOCKUP */
        .admin-mockup { background:var(--surface2); border:1px solid var(--border); border-radius:6px; overflow:hidden; }
        .admin-topbar { background:var(--bg); border-bottom:1px solid var(--border); padding:12px 20px; display:flex; align-items:center; gap:10px; }
        .admin-url { flex:1; background:var(--surface); border:1px solid var(--border); border-radius:4px; padding:5px 12px; font-size:0.75rem; color:var(--muted); text-align:center; letter-spacing:0.01em; }
        .admin-body { display:grid; grid-template-columns:220px 1fr; min-height:480px; }
        .admin-sidebar { background:var(--bg); border-right:1px solid var(--border); padding:20px 0; }
        .admin-sidebar-brand { padding:0 20px 20px; border-bottom:1px solid var(--border); margin-bottom:16px; font-family:var(--font-display); font-size:0.95rem; color:var(--accent); font-weight:600; }
        .admin-nav-group { margin-bottom:8px; }
        .admin-nav-group-label { padding:6px 20px; font-size:0.65rem; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--faint); }
        .admin-nav-item { display:flex; align-items:center; gap:10px; padding:8px 20px; font-size:0.8rem; color:var(--muted); }
        .admin-nav-item.active { border-left:2px solid var(--accent); color:var(--accent); background:var(--accent-light); padding-left:18px; }
        .admin-main { padding:28px; overflow:auto; }
        .admin-main-title { font-size:1.1rem; font-weight:600; color:var(--text); margin-bottom:20px; }
        .kpi-row { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-bottom:24px; }
        .kpi-card { background:var(--bg); border:1px solid var(--border); border-radius:4px; padding:16px; }
        .kpi-label { font-size:0.68rem; color:var(--muted); font-weight:500; letter-spacing:0.06em; text-transform:uppercase; margin-bottom:6px; }
        .kpi-value { font-family:var(--font-display); font-size:1.4rem; font-weight:700; color:var(--text); }
        .kpi-change { font-size:0.72rem; color:var(--accent); margin-top:4px; }
        .table-wrap { background:var(--bg); border:1px solid var(--border); border-radius:4px; overflow:hidden; }
        .table-header { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; padding:10px 16px; border-bottom:1px solid var(--border); }
        .th { font-size:0.68rem; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:var(--muted); }
        .table-row { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; padding:10px 16px; border-bottom:1px solid var(--border); align-items:center; }
        .table-row:last-child { border-bottom:none; }
        .td { font-size:0.78rem; color:var(--text); }
        .td.muted { color:var(--muted); }
        .status-badge { display:inline-block; padding:2px 8px; border-radius:2px; font-size:0.65rem; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; }
        .status-live { background:rgba(77,154,106,0.14); color:var(--accent); }
        .status-out { background:rgba(248,113,113,0.12); color:#f87171; }
        .status-review { background:rgba(251,191,36,0.12); color:#fbbf24; }

        /* ADMIN FEATURES */
        .admin-feature-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:var(--border); margin-top:3px; }
        .admin-feature-card { background:var(--surface); padding:28px 24px; }
        .admin-feature-tag { font-size:0.65rem; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--accent); margin-bottom:10px; }
        .admin-feature-card h4 { font-size:0.9rem; font-weight:600; color:var(--text); margin-bottom:8px; }
        .admin-feature-card p { font-size:0.78rem; color:var(--muted); line-height:1.65; }

        /* STACK */
        .stack-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:2px; background:var(--border); }
        .stack-card { background:var(--surface); padding:28px 24px; }
        .stack-card-role { font-size:0.68rem; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--accent); margin-bottom:8px; }
        .stack-card-name { font-size:1rem; font-weight:600; color:var(--text); margin-bottom:8px; }
        .stack-card-desc { font-size:0.78rem; color:var(--muted); line-height:1.65; }

        /* ARCH LAYER DIAGRAM */
        .arch-layer-diagram { display:grid; grid-template-columns:repeat(4,1fr); gap:2px; background:var(--border); margin-top:52px; }
        .arch-layer-col { background:var(--surface); padding:28px 20px; text-align:center; }
        .arch-layer-col-num { font-family:var(--font-display); font-size:0.7rem; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--accent); margin-bottom:10px; }
        .arch-layer-col-title { font-size:0.85rem; font-weight:600; color:var(--text); margin-bottom:16px; }
        .arch-layer-col-items { display:flex; flex-direction:column; gap:6px; }
        .arch-layer-col-item { font-size:0.75rem; color:var(--muted); padding:6px 10px; background:var(--bg); border:1px solid var(--border); border-radius:2px; }

        /* CTA */
        .arch-cta { text-align:center; padding:100px 60px; position:relative; overflow:hidden; }
        .arch-cta::before { content:''; position:absolute; bottom:-100px; left:50%; transform:translateX(-50%); width:600px; height:600px; background:radial-gradient(circle, rgba(77,154,106,0.06) 0%, transparent 70%); pointer-events:none; }
        .arch-cta h2 { font-family:var(--font-display); font-size:clamp(2rem,4vw,3.2rem); font-weight:700; margin-bottom:20px; line-height:1.1; }
        .arch-cta p { font-size:0.95rem; color:var(--muted); max-width:440px; margin:0 auto 40px; line-height:1.75; }
        .arch-cta-links { display:flex; gap:16px; flex-wrap:wrap; justify-content:center; }

        /* FOOTER */
        .arch-footer { border-top:1px solid var(--border); padding:48px 60px; display:flex; justify-content:space-between; align-items:center; background:var(--surface); }
        .footer-logo { font-family:var(--font-display); font-size:1.1rem; color:var(--accent); font-weight:600; }
        .footer-copy { font-size:0.8rem; color:var(--muted); }
        .footer-links { display:flex; gap:28px; }
        .footer-links a { font-size:0.8rem; color:var(--muted); text-decoration:none; transition:color 0.2s; }
        .footer-links a:hover { color:var(--text); }

        /* RESPONSIVE */
        @media (max-width:900px) {
          .arch-nav { padding:18px 24px; } .arch-nav-links { display:none; }
          .arch-section,.arch-section-alt { padding:60px 24px; }
          .arch-divider { margin:0 24px; }
          .tab-bar { padding:0 16px; overflow-x:auto; }
          .flow-grid { grid-template-columns:1fr; }
          .flow-step:not(:last-child)::after { content:'\u2193'; right:auto; left:50%; top:auto; bottom:-14px; transform:translateX(-50%); }
          .compare-grid { grid-template-columns:1fr; }
          .stack-grid { grid-template-columns:repeat(2,1fr); }
          .admin-body { grid-template-columns:1fr; }
          .admin-sidebar { display:none; }
          .kpi-row { grid-template-columns:repeat(2,1fr); }
          .table-header,.table-row { grid-template-columns:2fr 1fr 1fr; }
          .table-header>.th:last-child,.table-row>.td:last-child { display:none; }
          .admin-feature-grid { grid-template-columns:1fr; }
          .arch-layer-diagram { grid-template-columns:repeat(2,1fr); }
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
        <p className="arch-eyebrow">Technical Deep-Dive &middot; Ethnic Story</p>
        <h1>System <span>Architecture</span></h1>
        <p className="arch-hero-sub">A complete breakdown of the Ethnic Story platform &mdash; every layer, service, and data flow from browser to database.</p>
        <div className="arch-hero-links">
          <a href="#overview" className="btn-primary">Explore Architecture</a>
          <a href="/portfolio#work" className="btn-secondary">Back to Case Study</a>
        </div>
      </section>

      {/* TAB BAR */}
      <div className="tab-bar" id="overview">
        {TABS.map(tab => (
          <button key={tab} className={`tab-btn${active === tab ? ' active' : ''}`} onClick={() => setActive(tab)}>
            {tab}
          </button>
        ))}
      </div>

      {/* ── TAB 1: MAIN WEBSITE ── */}
      {active === 'Main Website' && (
        <>
          <section className="arch-section">
            <p className="section-eyebrow">System Layers</p>
            <h2 className="section-title">Four-layer platform architecture</h2>
            <p className="section-desc">Every request passes through four clearly separated layers &mdash; presentation, application logic, data, and external services &mdash; keeping concerns isolated and the system maintainable.</p>
            <div className="layer-stack">
              {([
                ['01', 'Presentation Layer',      'Browser / Edge',                     ['Next.js 16 App Router','React 19','TypeScript','Tailwind CSS','Framer Motion'],            ['Server Components (RSC)','Client Components','Streaming SSR','Static Generation']],
                ['02', 'Application Logic Layer', 'Next.js API Routes / Server Actions', ['Server Actions','Route Handlers','Stripe Webhooks','Google Vision API'],                 ['Cart & Order Logic','Auth Middleware','RBAC Enforcement','Image Tag Pipeline']],
                ['03', 'Data Layer',              'Supabase / PostgreSQL',               ['Supabase','PostgreSQL','Supabase Auth','Row-Level Security','Supabase Storage'],          ['Products Table','Orders Table','Users / Profiles','Inventory Tracking']],
                ['04', 'External Services Layer', 'Third-Party APIs & Infrastructure',   ['Stripe Payments','Stripe Webhooks','Google Vision API','Vercel Edge Network'],           ['CI/CD via Vercel','Domain / DNS','Environment Secrets']],
              ] as [string,string,string,string[],string[]][]).map(([num, title, sub, primary, muted]) => (
                <div className="layer" key={num}>
                  <div className="layer-header">
                    <span className="layer-number">{num}</span>
                    <span className="layer-title">{title}</span>
                    <span className="layer-subtitle">{sub}</span>
                  </div>
                  <div className="layer-chips">
                    {primary.map(c => <span className="chip" key={c}>{c}</span>)}
                    {muted.map(c => <span className="chip chip-muted" key={c}>{c}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="arch-divider" />

          <section className="arch-section-alt">
            <p className="section-eyebrow">Request Flow</p>
            <h2 className="section-title">End-to-end order journey</h2>
            <p className="section-desc">From the moment a customer lands on the storefront to a confirmed order in the admin dashboard &mdash; every step handled reliably.</p>
            <div className="flow-grid">
              {([
                ['01','Browse',   'Customer browses SSR-rendered product pages served from Vercel Edge.'],
                ['02','Cart',     'Items added to cart via React state. Session persisted with Supabase Auth.'],
                ['03','Checkout', 'Stripe Payment Element rendered client-side. Intent created server-side.'],
                ['04','Webhook',  'Stripe fires payment.succeeded webhook. Server Action updates order status.'],
                ['05','Confirm',  'Order written to Supabase. Customer sees confirmation. Admin dashboard updates live.'],
              ] as [string,string,string][]).map(([num, title, desc]) => (
                <div className="flow-step" key={num}>
                  <div className="flow-step-num">{num}</div>
                  <div className="flow-step-title">{title}</div>
                  <div className="flow-step-desc">{desc}</div>
                </div>
              ))}
            </div>
          </section>

          <div className="arch-divider" />

          <section className="arch-section">
            <p className="section-eyebrow">Dual-Portal Design</p>
            <h2 className="section-title">Customer storefront vs. admin portal</h2>
            <p className="section-desc">Two distinct user experiences sharing the same data layer, separated by Supabase Row-Level Security and role-based middleware.</p>
            <div className="compare-grid">
              <div className="compare-col">
                <div className="compare-col-title">Customer Storefront &mdash; /</div>
                <ul className="compare-list">
                  {['Product catalogue with filtering and search','Product detail pages with image gallery','Shopping cart and saved items','Stripe checkout with Payment Element','Order confirmation and email receipt','User account &mdash; order history and profile','Supabase Auth &mdash; signup, login, OAuth','Fully responsive, mobile-first layout','SSR + static pages for SEO performance'].map(i => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: i }} />
                  ))}
                </ul>
              </div>
              <div className="compare-col">
                <div className="compare-col-title">Admin Portal &mdash; /admin</div>
                <ul className="compare-list">
                  {['Role-gated &mdash; admin users only via RLS','Product management &mdash; create, edit, delete','Bulk image upload with Google Vision auto-tag','Inventory levels and stock status','Order management &mdash; status, fulfilment, refunds','Customer list and account details','Stripe webhook event log','Analytics &mdash; revenue, orders, top products','Settings &mdash; store config, category management'].map(i => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: i }} />
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── TAB 2: ADMIN PORTAL ── */}
      {active === 'Admin Portal' && (
        <>
          <section className="arch-section">
            <p className="section-eyebrow">Admin Portal</p>
            <h2 className="section-title">The dashboard the owner lives in</h2>
            <p className="section-desc">A purpose-built portal &mdash; not a generic CMS. Every screen is designed around the specific workflows of running an ethnic fashion e-commerce store.</p>

            <div className="admin-mockup">
              <div className="admin-topbar">
                <div style={{ width:10,height:10,borderRadius:'50%',background:'#f87171' }} />
                <div style={{ width:10,height:10,borderRadius:'50%',background:'#fbbf24' }} />
                <div style={{ width:10,height:10,borderRadius:'50%',background:'#4ade80' }} />
                <div className="admin-url">ethnic-story.vercel.app/admin</div>
              </div>
              <div className="admin-body">
                <div className="admin-sidebar">
                  <div className="admin-sidebar-brand">Ethnic Story</div>
                  <div className="admin-nav-group">
                    <div className="admin-nav-group-label">Overview</div>
                    <div className="admin-nav-item active">&mdash; Dashboard</div>
                    <div className="admin-nav-item">&mdash; Analytics</div>
                  </div>
                  <div className="admin-nav-group">
                    <div className="admin-nav-group-label">Catalogue</div>
                    <div className="admin-nav-item">&mdash; Products</div>
                    <div className="admin-nav-item">&mdash; Upload &amp; AI Tag</div>
                    <div className="admin-nav-item">&mdash; Inventory</div>
                  </div>
                  <div className="admin-nav-group">
                    <div className="admin-nav-group-label">Commerce</div>
                    <div className="admin-nav-item">&mdash; Orders</div>
                    <div className="admin-nav-item">&mdash; Customers</div>
                    <div className="admin-nav-item">&mdash; Webhook Log</div>
                  </div>
                  <div className="admin-nav-group">
                    <div className="admin-nav-group-label">System</div>
                    <div className="admin-nav-item">&mdash; Settings</div>
                  </div>
                </div>
                <div className="admin-main">
                  <div className="admin-main-title">Dashboard</div>
                  <div className="kpi-row">
                    {[['Revenue','$12,480','+18% this month'],['Orders','94','+11 today'],['Products Live','143','12 low stock'],['Customers','312','+28 this week']].map(([label,val,change]) => (
                      <div className="kpi-card" key={label}>
                        <div className="kpi-label">{label}</div>
                        <div className="kpi-value">{val}</div>
                        <div className="kpi-change">{change}</div>
                      </div>
                    ))}
                  </div>
                  <div className="table-wrap">
                    <div className="table-header">
                      <div className="th">Product</div>
                      <div className="th">Stock</div>
                      <div className="th">Status</div>
                      <div className="th">Revenue</div>
                    </div>
                    {[
                      ['Kanjivaram Silk Saree','8 units','live','$2,140'],
                      ['Anarkali Kurta Set','0 units','out','$980'],
                      ['Banarasi Dupatta','3 units','review','$560'],
                      ['Lehenga Choli','14 units','live','$3,200'],
                      ['Chanderi Cotton Suit','2 units','review','$720'],
                    ].map(([name,stock,status,rev]) => (
                      <div className="table-row" key={name}>
                        <div className="td">{name}</div>
                        <div className="td muted">{stock}</div>
                        <div className="td">
                          <span className={`status-badge status-${status}`}>{status}</span>
                        </div>
                        <div className="td">{rev}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="arch-divider" />

          <section className="arch-section-alt">
            <p className="section-eyebrow">Admin-Exclusive Features</p>
            <h2 className="section-title">Six capabilities only the admin has</h2>
            <p className="section-desc">These features are completely hidden from customers &mdash; enforced at the database level by Supabase Row-Level Security, not just the UI.</p>
            <div className="admin-feature-grid">
              {([
                ['A1','AI Pipeline',         'Google Vision API processes every uploaded product image automatically &mdash; generating labels, categories, and search tags without any manual input.'],
                ['A2','Inventory Management','Real-time stock levels with low-stock alerts. Inventory decrements automatically on successful Stripe payment via webhook.'],
                ['A3','Order Management',    'Full order lifecycle &mdash; view, update fulfilment status, trigger refunds through Stripe, and add internal notes per order.'],
                ['A4','Webhook Event Log',   'Every Stripe event (payment succeeded, refund issued, dispute opened) is logged with timestamp, payload, and processing status.'],
                ['A5','Analytics Dashboard', 'Revenue trends, top-selling products, customer acquisition, and order volume &mdash; all derived from live Supabase data.'],
                ['A6','RBAC / RLS',          'Role-based access control enforced by Supabase Row-Level Security policies. Admin routes are blocked at the database layer, not just the frontend.'],
              ] as [string,string,string][]).map(([tag, title, desc]) => (
                <div className="admin-feature-card" key={tag}>
                  <div className="admin-feature-tag">{tag}</div>
                  <h4>{title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: desc }} />
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ── TAB 3: TECH STACK ── */}
      {active === 'Tech Stack' && (
        <>
          <section className="arch-section">
            <p className="section-eyebrow">Full Tech Stack</p>
            <h2 className="section-title">Every tool and why it was chosen</h2>
            <p className="section-desc">Each technology was selected for a specific reason &mdash; not trend-chasing, but deliberate choices for performance, developer experience, and long-term maintainability.</p>
            <div className="stack-grid">
              {([
                ['Framework',   'Next.js 16',            'App Router, RSC, Server Actions, and streaming SSR in a single framework. Vercel-native for zero-config deployment.'],
                ['UI Library',  'React 19',              'Concurrent features, improved hydration, and stable Server Components. The foundation everything else builds on.'],
                ['Language',    'TypeScript',            'End-to-end type safety across components, API routes, and database queries. Catches entire classes of bugs at compile time.'],
                ['Styling',     'Tailwind CSS',          'Utility-first CSS for rapid, consistent UI. No unused styles in production thanks to tree-shaking.'],
                ['Animation',   'Framer Motion',         'Declarative animations for page transitions, hover states, and product image interactions.'],
                ['Database',    'Supabase / PostgreSQL', 'Managed Postgres with a generous free tier, real-time subscriptions, and a built-in REST/GraphQL API.'],
                ['Auth',        'Supabase Auth',         'JWT-based sessions, OAuth providers, and Row-Level Security policies enforce access at the database level.'],
                ['Payments',    'Stripe',                'PCI-compliant payment processing, webhook infrastructure, and the Payment Element for a native checkout experience.'],
                ['Vision AI',   'Google Vision API',     'Automated image labelling for product uploads &mdash; removes manual tagging work and improves catalogue discoverability.'],
                ['Storage',     'Supabase Storage',      'Product image hosting with CDN delivery and fine-grained bucket policies controlled by RLS.'],
                ['Deployment',  'Vercel',                'Git-push deploys, preview URLs per PR, Edge Network CDN, and environment secret management out of the box.'],
                ['CI/CD',       'Vercel + GitHub',       'Every push to main triggers a production deploy. Pull requests get isolated preview environments automatically.'],
              ] as [string,string,string][]).map(([role, name, desc]) => (
                <div className="stack-card" key={name}>
                  <div className="stack-card-role">{role}</div>
                  <div className="stack-card-name">{name}</div>
                  <div className="stack-card-desc" dangerouslySetInnerHTML={{ __html: desc }} />
                </div>
              ))}
            </div>
          </section>

          <div className="arch-divider" />

          <section className="arch-section-alt">
            <p className="section-eyebrow">Architecture Overview</p>
            <h2 className="section-title">Four layers, one cohesive system</h2>
            <p className="section-desc">How the tech stack maps to each system layer &mdash; from what the customer sees, to where the data lives.</p>
            <div className="arch-layer-diagram">
              {([
                ['Layer 01','Presentation',     ['Next.js 16','React 19','Tailwind CSS','Framer Motion','TypeScript']],
                ['Layer 02','Business Logic',   ['Server Actions','Route Handlers','Auth Middleware','RBAC','Vision Pipeline']],
                ['Layer 03','Data',             ['Supabase','PostgreSQL','Row-Level Security','Supabase Storage','Supabase Auth']],
                ['Layer 04','External Services',['Stripe','Google Vision','Vercel Edge','GitHub CI/CD','DNS / Domain']],
              ] as [string,string,string[]][]).map(([num, title, items]) => (
                <div className="arch-layer-col" key={num}>
                  <div className="arch-layer-col-num">{num}</div>
                  <div className="arch-layer-col-title">{title}</div>
                  <div className="arch-layer-col-items">
                    {items.map(i => <div className="arch-layer-col-item" key={i}>{i}</div>)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* CTA */}
      <section className="arch-cta">
        <p className="arch-eyebrow">Let&rsquo;s Work Together</p>
        <h2>Want this kind of<br />architecture for your project?</h2>
        <p>We build production-grade systems with the same rigour &mdash; whatever your product, whatever the scale.</p>
        <div className="arch-cta-links">
          <a href="mailto:molkarinfotech@gmail.com" className="btn-primary">Get in Touch</a>
          <a href="/portfolio" className="btn-secondary">View Portfolio</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="arch-footer">
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
