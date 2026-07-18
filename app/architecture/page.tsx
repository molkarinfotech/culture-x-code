import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Architecture — molkarinfotech',
  description:
    'Technical architecture overview of the Ethnic Story platform — Next.js, Supabase, Stripe, and Google Vision API on Vercel.',
}

export default function ArchitecturePage() {
  const fontUrl =
    'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,400&display=swap'

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

        /* NAV */
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

        /* HERO */
        .arch-hero { min-height:60vh; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding:140px 40px 80px; position:relative; overflow:hidden; }
        .arch-hero::before { content:''; position:absolute; top:-200px; left:50%; transform:translateX(-50%); width:700px; height:700px; background:radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%); pointer-events:none; }
        .arch-eyebrow { font-size:0.75rem; font-weight:600; letter-spacing:0.16em; text-transform:uppercase; color:var(--accent); margin-bottom:20px; }
        .arch-hero h1 { font-family:var(--font-display); font-size:clamp(2.4rem,5vw,4.5rem); font-weight:700; line-height:1.1; letter-spacing:-0.02em; margin-bottom:24px; max-width:800px; }
        .arch-hero h1 span { color:var(--accent); }
        .arch-hero-sub { font-size:clamp(0.95rem,2vw,1.1rem); color:var(--muted); max-width:540px; margin-bottom:40px; line-height:1.75; }
        .arch-hero-links { display:flex; gap:16px; flex-wrap:wrap; justify-content:center; }

        /* SECTION */
        .arch-section { padding:80px 60px; }
        .arch-section-alt { padding:80px 60px; background:var(--surface); }
        .section-eyebrow { font-size:0.72rem; font-weight:600; letter-spacing:0.16em; text-transform:uppercase; color:var(--accent); margin-bottom:16px; }
        .section-title { font-family:var(--font-display); font-size:clamp(1.8rem,3vw,2.6rem); font-weight:700; line-height:1.15; margin-bottom:16px; max-width:640px; }
        .section-desc { color:var(--muted); font-size:0.95rem; max-width:560px; line-height:1.8; margin-bottom:52px; }
        .arch-divider { height:1px; background:var(--border); margin:0 60px; }

        /* LAYER DIAGRAM */
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

        /* FEATURE MATRIX */
        .feature-matrix { display:grid; grid-template-columns:repeat(2,1fr); gap:2px; background:var(--border); }
        .feature-row { background:var(--surface); padding:28px 32px; display:grid; grid-template-columns:1fr 2fr; gap:24px; align-items:start; }
        .feature-name { font-size:0.85rem; font-weight:600; color:var(--text); }
        .feature-desc { font-size:0.82rem; color:var(--muted); line-height:1.7; }
        .feature-tag { display:inline-block; padding:3px 9px; background:var(--tag-bg); color:var(--tag-text); border-radius:2px; font-size:0.68rem; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; margin-top:6px; }

        /* ADMIN VS MAIN */
        .compare-grid { display:grid; grid-template-columns:1fr 1fr; gap:2px; background:var(--border); }
        .compare-col { background:var(--surface); padding:36px 32px; }
        .compare-col-title { font-family:var(--font-display); font-size:1.1rem; font-weight:600; color:var(--accent); margin-bottom:24px; padding-bottom:16px; border-bottom:1px solid var(--border); }
        .compare-list { display:flex; flex-direction:column; gap:12px; list-style:none; }
        .compare-list li { font-size:0.875rem; color:var(--muted); padding-left:16px; position:relative; line-height:1.6; }
        .compare-list li::before { content:'—'; position:absolute; left:0; color:var(--accent); font-size:0.75rem; top:2px; }

        /* TECH STACK GRID */
        .stack-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:2px; background:var(--border); }
        .stack-card { background:var(--surface); padding:28px 24px; }
        .stack-card-role { font-size:0.68rem; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--accent); margin-bottom:8px; }
        .stack-card-name { font-size:1rem; font-weight:600; color:var(--text); margin-bottom:8px; }
        .stack-card-desc { font-size:0.78rem; color:var(--muted); line-height:1.65; }

        /* CTA */
        .arch-cta { text-align:center; padding:100px 60px; position:relative; overflow:hidden; }
        .arch-cta::before { content:''; position:absolute; bottom:-100px; left:50%; transform:translateX(-50%); width:600px; height:600px; background:radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%); pointer-events:none; }
        .arch-cta h2 { font-family:var(--font-display); font-size:clamp(2rem,4vw,3.2rem); font-weight:700; margin-bottom:20px; line-height:1.1; }
        .arch-cta p { font-size:0.95rem; color:var(--muted); max-width:440px; margin:0 auto 40px; line-height:1.75; }
        .arch-cta-links { display:flex; gap:16px; flex-wrap:wrap; justify-content:center; }

        /* FOOTER */
        .arch-footer { border-top:1px solid var(--border); padding:48px 60px; display:flex; justify-content:space-between; align-items:center; }
        .footer-logo { font-family:var(--font-display); font-size:1.1rem; color:var(--accent); }
        .footer-copy { font-size:0.8rem; color:var(--muted); }
        .footer-links { display:flex; gap:28px; }
        .footer-links a { font-size:0.8rem; color:var(--muted); text-decoration:none; transition:color 0.2s; }
        .footer-links a:hover { color:var(--text); }

        /* RESPONSIVE */
        @media (max-width:900px) {
          .arch-nav { padding:18px 24px; } .arch-nav-links { display:none; }
          .arch-section, .arch-section-alt { padding:60px 24px; }
          .arch-divider { margin:0 24px; }
          .flow-grid { grid-template-columns:1fr; }
          .flow-step:not(:last-child)::after { content:'↓'; right:auto; left:50%; top:auto; bottom:-14px; transform:translateX(-50%); }
          .feature-matrix { grid-template-columns:1fr; }
          .feature-row { grid-template-columns:1fr; gap:8px; }
          .compare-grid { grid-template-columns:1fr; }
          .stack-grid { grid-template-columns:repeat(2,1fr); }
          .arch-footer { flex-direction:column; gap:20px; text-align:center; }
          .footer-links { flex-wrap:wrap; justify-content:center; }
        }
      `}</style>

      {/* NAV */}
      <nav className="arch-nav">
        <a href="/" className="arch-nav-logo">molkarinfotech</a>
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
          <a href="#layers" className="btn-primary">Explore Layers</a>
          <a href="/portfolio#work" className="btn-secondary">Back to Case Study</a>
        </div>
      </section>

      <div className="arch-divider" />

      {/* LAYER STACK */}
      <section className="arch-section" id="layers">
        <p className="section-eyebrow">System Layers</p>
        <h2 className="section-title">Four-layer platform architecture</h2>
        <p className="section-desc">Every request passes through four clearly separated layers — presentation, application logic, data, and external services — keeping concerns isolated and the system maintainable.</p>
        <div className="layer-stack">

          <div className="layer">
            <div className="layer-header">
              <span className="layer-number">01</span>
              <span className="layer-title">Presentation Layer</span>
              <span className="layer-subtitle">Browser / Edge</span>
            </div>
            <div className="layer-chips">
              <span className="chip">Next.js 16 App Router</span>
              <span className="chip">React 19</span>
              <span className="chip">TypeScript</span>
              <span className="chip">Tailwind CSS</span>
              <span className="chip">Framer Motion</span>
              <span className="chip chip-muted">Server Components (RSC)</span>
              <span className="chip chip-muted">Client Components</span>
              <span className="chip chip-muted">Streaming SSR</span>
              <span className="chip chip-muted">Static Generation</span>
            </div>
          </div>

          <div className="layer">
            <div className="layer-header">
              <span className="layer-number">02</span>
              <span className="layer-title">Application Logic Layer</span>
              <span className="layer-subtitle">Next.js API Routes / Server Actions</span>
            </div>
            <div className="layer-chips">
              <span className="chip">Server Actions</span>
              <span className="chip">Route Handlers</span>
              <span className="chip">Stripe Webhooks</span>
              <span className="chip">Google Vision API</span>
              <span className="chip chip-muted">Cart & Order Logic</span>
              <span className="chip chip-muted">Auth Middleware</span>
              <span className="chip chip-muted">RBAC Enforcement</span>
              <span className="chip chip-muted">Image Tag Pipeline</span>
            </div>
          </div>

          <div className="layer">
            <div className="layer-header">
              <span className="layer-number">03</span>
              <span className="layer-title">Data Layer</span>
              <span className="layer-subtitle">Supabase / PostgreSQL</span>
            </div>
            <div className="layer-chips">
              <span className="chip">Supabase</span>
              <span className="chip">PostgreSQL</span>
              <span className="chip">Supabase Auth</span>
              <span className="chip">Row-Level Security</span>
              <span className="chip">Supabase Storage</span>
              <span className="chip chip-muted">Products Table</span>
              <span className="chip chip-muted">Orders Table</span>
              <span className="chip chip-muted">Users / Profiles</span>
              <span className="chip chip-muted">Inventory Tracking</span>
            </div>
          </div>

          <div className="layer">
            <div className="layer-header">
              <span className="layer-number">04</span>
              <span className="layer-title">External Services Layer</span>
              <span className="layer-subtitle">Third-Party APIs & Infrastructure</span>
            </div>
            <div className="layer-chips">
              <span className="chip">Stripe Payments</span>
              <span className="chip">Stripe Webhooks</span>
              <span className="chip">Google Vision API</span>
              <span className="chip">Vercel Edge Network</span>
              <span className="chip chip-muted">CI/CD via Vercel</span>
              <span className="chip chip-muted">Domain / DNS</span>
              <span className="chip chip-muted">Environment Secrets</span>
            </div>
          </div>

        </div>
      </section>

      <div className="arch-divider" />

      {/* ORDER FLOW */}
      <section className="arch-section-alt" id="flow">
        <p className="section-eyebrow">Request Flow</p>
        <h2 className="section-title">End-to-end order journey</h2>
        <p className="section-desc">From the moment a customer lands on the storefront to a confirmed order in the admin dashboard — every step handled reliably.</p>
        <div className="flow-grid">
          {([
            ['01', 'Browse', 'Customer browses SSR-rendered product pages served from Vercel Edge.'],
            ['02', 'Cart', 'Items added to cart via React state. Session persisted with Supabase Auth.'],
            ['03', 'Checkout', 'Stripe Payment Element rendered client-side. Intent created server-side.'],
            ['04', 'Webhook', 'Stripe fires payment.succeeded webhook. Server Action updates order status.'],
            ['05', 'Confirm', 'Order written to Supabase. Customer sees confirmation. Admin dashboard updates live.'],
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

      {/* MAIN SITE vs ADMIN */}
      <section className="arch-section" id="portals">
        <p className="section-eyebrow">Dual-Portal Design</p>
        <h2 className="section-title">Customer storefront vs. admin portal</h2>
        <p className="section-desc">Two distinct user experiences sharing the same data layer, separated by Supabase Row-Level Security and role-based middleware.</p>
        <div className="compare-grid">
          <div className="compare-col">
            <div className="compare-col-title">Customer Storefront — /</div>
            <ul className="compare-list">
              <li>Product catalogue with filtering and search</li>
              <li>Product detail pages with image gallery</li>
              <li>Shopping cart and saved items</li>
              <li>Stripe checkout with Payment Element</li>
              <li>Order confirmation and email receipt</li>
              <li>User account — order history and profile</li>
              <li>Supabase Auth — signup, login, OAuth</li>
              <li>Fully responsive, mobile-first layout</li>
              <li>SSR + static pages for SEO performance</li>
            </ul>
          </div>
          <div className="compare-col">
            <div className="compare-col-title">Admin Portal — /admin</div>
            <ul className="compare-list">
              <li>Role-gated — admin users only via RLS</li>
              <li>Product management — create, edit, delete</li>
              <li>Bulk image upload with Google Vision auto-tag</li>
              <li>Inventory levels and stock status</li>
              <li>Order management — status, fulfilment, refunds</li>
              <li>Customer list and account details</li>
              <li>Stripe webhook event log</li>
              <li>Analytics — revenue, orders, top products</li>
              <li>Settings — store config, category management</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="arch-divider" />

      {/* TECH STACK */}
      <section className="arch-section-alt" id="stack">
        <p className="section-eyebrow">Full Tech Stack</p>
        <h2 className="section-title">Every tool and why it was chosen</h2>
        <p className="section-desc">Each technology was selected for a specific reason — not trend-chasing, but deliberate choices for performance, developer experience, and long-term maintainability.</p>
        <div className="stack-grid">
          {([
            ['Framework',      'Next.js 16',          'App Router, RSC, Server Actions, and streaming SSR in a single framework. Vercel-native for zero-config deployment.'],
            ['UI Library',     'React 19',            'Concurrent features, improved hydration, and stable Server Components. The foundation everything else builds on.'],
            ['Language',       'TypeScript',          'End-to-end type safety across components, API routes, and database queries. Catches entire classes of bugs at compile time.'],
            ['Styling',        'Tailwind CSS',        'Utility-first CSS for rapid, consistent UI. No unused styles in production thanks to tree-shaking.'],
            ['Animation',      'Framer Motion',       'Declarative animations for page transitions, hover states, and product image interactions.'],
            ['Database',       'Supabase / PostgreSQL','Managed Postgres with a generous free tier, real-time subscriptions, and a built-in REST/GraphQL API.'],
            ['Auth',           'Supabase Auth',       'JWT-based sessions, OAuth providers, and Row-Level Security policies enforce access at the database level.'],
            ['Payments',       'Stripe',              'PCI-compliant payment processing, webhook infrastructure, and the Payment Element for a native checkout experience.'],
            ['Vision',         'Google Vision API',   'Automated image labelling for product uploads — removes manual tagging work and improves catalogue discoverability.'],
            ['Storage',        'Supabase Storage',    'Product image hosting with CDN delivery and fine-grained bucket policies controlled by RLS.'],
            ['Deployment',     'Vercel',              'Git-push deploys, preview URLs per PR, Edge Network CDN, and environment secret management out of the box.'],
            ['CI/CD',          'Vercel + GitHub',     'Every push to main triggers a production deploy. Pull requests get isolated preview environments automatically.'],
          ] as [string,string,string][]).map(([role, name, desc]) => (
            <div className="stack-card" key={name}>
              <div className="stack-card-role">{role}</div>
              <div className="stack-card-name">{name}</div>
              <div className="stack-card-desc">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="arch-divider" />

      {/* KEY FEATURES */}
      <section className="arch-section" id="features">
        <p className="section-eyebrow">Platform Features</p>
        <h2 className="section-title">What the system does</h2>
        <p className="section-desc">Twelve production capabilities across the customer and admin surfaces, each engineered to the same standard.</p>
        <div className="feature-matrix">
          {([
            ['Vision Auto-Tag',       'Product images are sent to Google Vision on upload. Labels are mapped to categories and stored, removing manual curation entirely.', 'Admin'],
            ['Stripe Webhooks',       'payment_intent.succeeded and charge.refunded events are processed server-side, keeping order state consistent regardless of client behaviour.', 'Payments'],
            ['Row-Level Security',    'Supabase RLS policies ensure customers can only read their own orders, and admin routes are blocked at the database layer for non-admin roles.', 'Security'],
            ['SSR Product Pages',     'Product detail and catalogue pages are server-rendered for full SEO indexability and fast first-contentful-paint on cold visits.', 'Performance'],
            ['Real-Time Inventory',   'Stock levels decrement on successful payment via webhook. Admin dashboard reflects changes without a page refresh.', 'Admin'],
            ['Order History',         'Authenticated customers access a full order timeline — status updates, items, totals, and tracking information in their account.', 'Customer'],
            ['Admin Order Management','Admins can update fulfilment status, trigger Stripe refunds, and add order notes from a single dashboard view.', 'Admin'],
            ['Image CDN Delivery',    'Product images are stored in Supabase Storage and served via a CDN-backed public URL with transformations for thumbnail and full-size variants.', 'Performance'],
            ['Framer Motion UI',      'Page transitions, product card hover states, and cart animations use Framer Motion with reduced-motion media query support.', 'UX'],
            ['Mobile-First Layout',   'Every page is designed at 375px first. Touch targets meet 44px minimum, and navigation adapts to a mobile menu on small screens.', 'UX'],
            ['Preview Deployments',   'Every pull request gets a unique Vercel preview URL — full-stack, with its own environment variables — for isolated testing before merging.', 'DevOps'],
            ['Typed API Contracts',   'Supabase generates TypeScript types from the database schema, propagating type safety from Postgres columns through to React props.', 'DX'],
          ] as [string,string,string][]).map(([name, desc, tag]) => (
            <div className="feature-row" key={name}>
              <div>
                <div className="feature-name">{name}</div>
                <div className="feature-tag">{tag}</div>
              </div>
              <div className="feature-desc">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="arch-cta">
        <p className="arch-eyebrow">Let&rsquo;s Work Together</p>
        <h2>Want this kind of<br />architecture for your project?</h2>
        <p>We build production-grade systems with the same rigour — whatever your product, whatever the scale.</p>
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
