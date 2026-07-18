import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — molkarinfotech',
  description:
    'Full-stack web development portfolio by molkarinfotech. Featuring Ethnic Story — an AI-generated Indian ethnic clothing e-commerce platform.',
}

export default function PortfolioPage() {
  return (
    <main
      style={{
        background: '#0a0a0a',
        color: '#f0ede8',
        fontFamily: "'Inter', sans-serif",
        lineHeight: 1.6,
        WebkitFontSmoothing: 'antialiased',
        minHeight: '100vh',
      }}
    >
      {/* ── STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0a0a0a;
          --surface: #111111;
          --surface2: #1a1a1a;
          --border: #222222;
          --accent: #c9a96e;
          --accent2: #e8c97e;
          --text: #f0ede8;
          --muted: #888888;
          --tag-bg: #1e1a14;
          --tag-text: #c9a96e;
        }

        html { scroll-behavior: smooth; }

        /* NAV */
        .pf-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 60px;
          background: rgba(10,10,10,0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .pf-nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          color: var(--accent);
          text-decoration: none;
          letter-spacing: 0.02em;
        }
        .pf-nav-links { display: flex; gap: 36px; list-style: none; }
        .pf-nav-links a {
          color: var(--muted);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .pf-nav-links a:hover { color: var(--text); }
        .pf-nav-links a.active { color: var(--accent); }

        /* HERO */
        .pf-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 120px 40px 80px;
          position: relative;
          overflow: hidden;
        }
        .pf-hero::before {
          content: '';
          position: absolute;
          top: -200px; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .pf-eyebrow {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 24px;
        }
        .pf-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin-bottom: 28px;
          max-width: 900px;
        }
        .pf-hero h1 span { color: var(--accent); }
        .pf-hero-sub {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: var(--muted);
          max-width: 560px;
          margin-bottom: 48px;
          line-height: 1.7;
        }
        .pf-cta { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }

        .btn-primary {
          padding: 14px 32px;
          background: var(--accent);
          color: #0a0a0a;
          border: none;
          border-radius: 4px;
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          display: inline-block;
        }
        .btn-primary:hover { background: var(--accent2); transform: translateY(-1px); }
        .btn-secondary {
          padding: 14px 32px;
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border);
          border-radius: 4px;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.2s, transform 0.15s;
          display: inline-block;
        }
        .btn-secondary:hover { border-color: var(--accent); transform: translateY(-1px); }

        /* STATS */
        .pf-stats {
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 40px 60px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          text-align: center;
        }
        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent);
          line-height: 1;
        }
        .stat-label {
          font-size: 0.8rem;
          color: var(--muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 8px;
        }

        /* SECTIONS */
        .pf-section { padding: 100px 60px; }
        .section-eyebrow {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 20px;
          max-width: 640px;
        }
        .section-desc {
          color: var(--muted);
          font-size: 1rem;
          max-width: 580px;
          line-height: 1.8;
          margin-bottom: 60px;
        }

        /* SERVICES GRID */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: var(--border);
        }
        .service-card {
          background: var(--surface);
          padding: 44px 36px;
          transition: background 0.2s;
        }
        .service-card:hover { background: var(--surface2); }
        .service-icon { font-size: 1.8rem; margin-bottom: 20px; }
        .service-card h3 { font-size: 1.05rem; font-weight: 600; margin-bottom: 12px; color: var(--text); }
        .service-card p { font-size: 0.875rem; color: var(--muted); line-height: 1.75; }

        /* CASE STUDY */
        .cs-section { background: var(--surface); padding: 100px 60px; }
        .cs-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
          margin-bottom: 80px;
        }
        .cs-meta { display: flex; flex-direction: column; gap: 24px; }
        .meta-row { display: flex; flex-direction: column; gap: 6px; }
        .meta-label { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); }
        .meta-value { font-size: 0.95rem; color: var(--text); }
        .cs-badge {
          display: inline-block;
          padding: 5px 12px;
          background: var(--tag-bg);
          color: var(--tag-text);
          border: 1px solid rgba(201,169,110,0.2);
          border-radius: 2px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .tech-stack { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 40px; }
        .tech-tag {
          padding: 8px 16px;
          background: var(--tag-bg);
          color: var(--tag-text);
          border: 1px solid rgba(201,169,110,0.15);
          border-radius: 2px;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.04em;
        }
        .cs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          background: var(--border);
          margin-bottom: 2px;
        }
        .cs-card { background: var(--bg); padding: 40px 36px; }
        .cs-card-num {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 700;
          color: rgba(201,169,110,0.15);
          line-height: 1;
          margin-bottom: 16px;
        }
        .cs-card h4 { font-size: 1rem; font-weight: 600; margin-bottom: 10px; color: var(--text); }
        .cs-card p { font-size: 0.875rem; color: var(--muted); line-height: 1.75; }

        /* TIMELINE */
        .timeline {
          position: relative;
          padding-left: 32px;
          border-left: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .timeline-item { position: relative; }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -38px; top: 6px;
          width: 10px; height: 10px;
          border-radius: 50%;
          background: var(--accent);
          border: 2px solid var(--bg);
          box-shadow: 0 0 0 1px var(--accent);
        }
        .timeline-phase { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); margin-bottom: 8px; }
        .timeline-title { font-size: 1rem; font-weight: 600; margin-bottom: 8px; }
        .timeline-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.75; }

        /* OUTCOMES */
        .outcome-card {
          background: var(--surface2);
          text-align: left;
          padding: 28px 32px;
          margin-bottom: 2px;
        }
        .outcome-label { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); margin-bottom: 8px; }
        .outcome-text { font-size: 0.9rem; color: var(--muted); }

        /* PROCESS */
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          background: var(--border);
        }
        .process-step { background: var(--surface); padding: 36px 28px; }
        .step-num {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          color: rgba(201,169,110,0.3);
          font-weight: 700;
          margin-bottom: 16px;
        }
        .process-step h4 { font-size: 0.95rem; font-weight: 600; margin-bottom: 10px; }
        .process-step p { font-size: 0.82rem; color: var(--muted); line-height: 1.7; }

        /* CTA */
        .pf-cta-section {
          text-align: center;
          padding: 120px 60px;
          position: relative;
          overflow: hidden;
        }
        .pf-cta-section::before {
          content: '';
          position: absolute;
          bottom: -100px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .pf-cta-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 24px;
          line-height: 1.1;
        }
        .pf-cta-section p {
          font-size: 1rem;
          color: var(--muted);
          max-width: 480px;
          margin: 0 auto 48px;
          line-height: 1.75;
        }

        /* FOOTER */
        .pf-footer {
          border-top: 1px solid var(--border);
          padding: 48px 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-logo { font-family: 'Playfair Display', serif; font-size: 1.1rem; color: var(--accent); }
        .footer-copy { font-size: 0.8rem; color: var(--muted); }
        .footer-links { display: flex; gap: 28px; }
        .footer-links a { font-size: 0.8rem; color: var(--muted); text-decoration: none; transition: color 0.2s; }
        .footer-links a:hover { color: var(--text); }

        .pf-divider { height: 1px; background: var(--border); margin: 0 60px; }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .pf-nav { padding: 18px 24px; }
          .pf-nav-links { display: none; }
          .pf-section, .cs-section { padding: 70px 24px; }
          .pf-stats { grid-template-columns: repeat(2, 1fr); padding: 32px 24px; }
          .services-grid { grid-template-columns: 1fr; }
          .cs-header { grid-template-columns: 1fr; gap: 40px; }
          .cs-grid { grid-template-columns: 1fr; }
          .process-grid { grid-template-columns: repeat(2, 1fr); }
          .pf-footer { flex-direction: column; gap: 20px; text-align: center; }
          .footer-links { flex-wrap: wrap; justify-content: center; }
          .pf-divider { margin: 0 24px; }
          .cs-timeline-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav className="pf-nav">
        <a href="/" className="pf-nav-logo">molkarinfotech</a>
        <ul className="pf-nav-links">
          <li><a href="/portfolio#services">Services</a></li>
          <li><a href="/portfolio#work">Work</a></li>
          <li><a href="/portfolio#process">Process</a></li>
          <li><a href="/portfolio#contact">Contact</a></li>
          <li><a href="/portfolio" className="active">Portfolio</a></li>
        </ul>
        <a href="/portfolio#contact" className="btn-primary" style={{ fontSize: '0.78rem', padding: '10px 22px' }}>Start a Project</a>
      </nav>

      {/* HERO */}
      <section className="pf-hero">
        <p className="pf-eyebrow">Full-Stack Web Development &amp; Digital Experiences</p>
        <h1>We build <span>exceptional</span><br />digital products</h1>
        <p className="pf-hero-sub">From e-commerce platforms to AI-powered web applications — we design and develop fast, scalable, and beautiful digital experiences that convert.</p>
        <div className="pf-cta">
          <a href="/portfolio#work" className="btn-primary">View Our Work</a>
          <a href="/portfolio#contact" className="btn-secondary">Get in Touch</a>
        </div>
      </section>

      {/* STATS */}
      <div className="pf-stats">
        {[['15+', 'Projects Delivered'], ['100%', 'Client Satisfaction'], ['48h', 'Avg. Turnaround'], ['3+', 'Years Experience']].map(([num, label]) => (
          <div key={label}>
            <div className="stat-number">{num}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <section className="pf-section" id="services">
        <p className="section-eyebrow">What We Do</p>
        <h2 className="section-title">End-to-end digital solutions</h2>
        <p className="section-desc">We handle everything from strategy and design through to deployment and beyond — so you can focus on your business.</p>
        <div className="services-grid">
          {[
            ['⚡', 'E-Commerce Development', 'Custom storefronts with Stripe payments, inventory management, admin portals, and order fulfilment pipelines built for scale.'],
            ['🤖', 'AI Integration', 'Embed AI-powered features into your product — from automated content generation and image analysis to intelligent search and recommendations.'],
            ['🎨', 'UI / UX Design', 'Pixel-perfect interfaces designed with conversion in mind. Clean, modern aesthetics with Framer Motion animations and responsive layouts.'],
            ['🗄️', 'Backend & Database', 'Supabase, PostgreSQL, and serverless API architecture. Secure auth flows, real-time data, and reliable infrastructure on Vercel.'],
            ['📱', 'Next.js Applications', 'Server-side rendered, SEO-optimised web apps built with Next.js, React 19, and TypeScript. Fast by default, beautiful by design.'],
            ['🚀', 'Launch & Scale', 'CI/CD pipelines, Vercel deployment, domain configuration, and ongoing technical support to keep your product running smoothly.'],
          ].map(([icon, title, desc]) => (
            <div className="service-card" key={title as string}>
              <div className="service-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="pf-divider" />

      {/* CASE STUDY */}
      <section className="cs-section" id="work">
        <p className="section-eyebrow">Featured Case Study</p>
        <h2 className="section-title">Ethnic Story — AI-Generated E-Commerce Platform</h2>
        <p className="section-desc">A full-scale Indian ethnic clothing store, designed and built entirely with AI-assisted development. From concept to deployment in record time.</p>

        <div className="cs-header">
          <div>
            <span className="cs-badge">Case Study · 2026</span>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: 24 }}>
              Ethnic Story is a modern Indian ethnic clothing e-commerce platform built to serve a new generation of fashion-forward shoppers who want culturally rich designs with a contemporary edge.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.85 }}>
              The project demonstrates what&#39;s possible when deep technical expertise meets AI tooling: a production-ready, full-stack e-commerce site with advanced features delivered at startup speed.
            </p>
            <div className="tech-stack">
              {['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'Stripe', 'Vercel', 'Tailwind CSS', 'Framer Motion', 'AI Image Gen', 'Google Vision API'].map(t => (
                <span className="tech-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div className="cs-meta">
            {[['Client', 'Ethnic Story'], ['Category', 'E-Commerce · Fashion · Indian Ethnic Wear'], ['Deliverables', 'Full-Stack Web App, Admin Portal, Payment Integration, AI Features'], ['Year', '2026'], ['Status', '✓ Live & Production']].map(([label, value]) => (
              <div className="meta-row" key={label as string}>
                <span className="meta-label">{label}</span>
                <span className="meta-value" style={label === 'Status' ? { color: '#4ade80' } : {}}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-grid">
          {[
            ['01', 'AI-Powered Product System', 'Integrated Google Vision API for automated product image analysis, combined with AI-generated product descriptions and category tagging. Reduces manual content work by 80%.'],
            ['02', 'Full E-Commerce Pipeline', 'Stripe payment processing with webhooks, real-time order confirmation emails, inventory tracking, and a full admin portal for product and order management.'],
            ['03', 'Authentication & User Accounts', 'Supabase Auth with secure session management, user profiles, order history, and role-based access control for admin vs. customer views.'],
            ['04', 'Performance & SEO', 'Server-side rendering via Next.js App Router, optimised images, and Vercel Edge Network delivery. PageSpeed scores optimised for organic discovery.'],
          ].map(([num, title, desc]) => (
            <div className="cs-card" key={num as string}>
              <div className="cs-card-num">{num}</div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <div className="cs-timeline-grid" style={{ marginTop: 80, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <p className="section-eyebrow">Build Timeline</p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', marginBottom: 40 }}>From idea to launch</h3>
            <div className="timeline">
              {[
                ['Phase 01', 'Discovery & Architecture', 'Requirements scoping, database schema design (Supabase/PostgreSQL), and Next.js project scaffolding with TypeScript configuration.'],
                ['Phase 02', 'Core Platform Build', 'Product catalogue, shopping cart, checkout flow, and Stripe integration. Admin portal with inventory management and order dashboard.'],
                ['Phase 03', 'AI Feature Integration', 'Google Vision API for product analysis, AI image generation pipeline, and automated content workflows for scaling the product catalogue.'],
                ['Phase 04', 'QA, Deploy & Launch', 'End-to-end testing, Vercel deployment with CI/CD, domain configuration, and production monitoring setup.'],
              ].map(([phase, title, desc]) => (
                <div className="timeline-item" key={phase as string}>
                  <div className="timeline-phase">{phase}</div>
                  <div className="timeline-title">{title}</div>
                  <div className="timeline-desc">{desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="section-eyebrow">Key Outcomes</p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', marginBottom: 40 }}>What we delivered</h3>
            {[['Production-Ready', 'Fully deployed on Vercel with live Stripe payments, real order flows, and authenticated user accounts from day one.'],
              ['AI-Accelerated', 'AI-assisted development workflow reduced build time significantly while maintaining production-grade code quality.'],
              ['Scalable Architecture', 'Built on a modern, scalable stack ready to handle thousands of products, users, and transactions without architectural changes.'],
            ].map(([label, desc]) => (
              <div className="outcome-card" key={label as string}>
                <div className="outcome-label">{label}</div>
                <div className="outcome-text">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="pf-section" id="process">
        <p className="section-eyebrow">How We Work</p>
        <h2 className="section-title">Our process</h2>
        <p className="section-desc">A clear, collaborative workflow that keeps projects on track and clients informed at every step.</p>
        <div className="process-grid">
          {[
            ['01', 'Discovery', "We start by understanding your goals, users, and technical requirements. Clear scope = no surprises later."],
            ['02', 'Design & Plan', 'UI mockups, architecture decisions, and a project timeline agreed before a single line of code is written.'],
            ['03', 'Build & Iterate', 'Rapid development with regular check-ins. You see progress weekly, not just at the end.'],
            ['04', 'Launch & Support', "Smooth deployment, handover documentation, and ongoing support so you're never left in the dark."],
          ].map(([num, title, desc]) => (
            <div className="process-step" key={num as string}>
              <div className="step-num">{num}</div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pf-cta-section" id="contact">
        <p className="section-eyebrow">Let&#39;s Work Together</p>
        <h2>Ready to build<br />something great?</h2>
        <p>Tell us about your project. We&#39;ll get back to you within 24 hours with a clear plan and honest advice.</p>
        <div className="pf-cta">
          <a href="mailto:molkarinfotech@gmail.com" className="btn-primary">molkarinfotech@gmail.com</a>
          <a href="https://github.com/molkarinfotech" className="btn-secondary" target="_blank" rel="noopener noreferrer">View GitHub</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pf-footer">
        <div className="footer-logo">molkarinfotech</div>
        <div className="footer-copy">© 2026 molkarinfotech. All rights reserved.</div>
        <div className="footer-links">
          <a href="/portfolio#services">Services</a>
          <a href="/portfolio#work">Work</a>
          <a href="/portfolio#process">Process</a>
          <a href="mailto:molkarinfotech@gmail.com">Contact</a>
        </div>
      </footer>
    </main>
  )
}
