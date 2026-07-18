import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'molkarinfotech — Technology that grows your business',
  description:
    'A boutique technology partner for small and medium businesses. Custom-built digital solutions — e-commerce, web apps, AI integration — at a price point that delivers real ROI. You own everything.',
}

export default function PortfolioPage() {
  const fontUrl =
    'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,400&display=swap'

  return (
    <main style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, WebkitFontSmoothing: 'antialiased', minHeight: '100vh' }}>
      <style>{`
        @import url('${fontUrl}');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── LIGHT MODE (default) ── */
        :root, [data-theme="light"] {
          --bg:             #f7f5f0;
          --surface:        #ffffff;
          --surface2:       #f0ede6;
          --border:         rgba(26,61,43,0.1);
          --border-strong:  rgba(26,61,43,0.18);
          --accent:         #1a3d2b;
          --accent-hover:   #0f2a1d;
          --accent-light:   #e8f0eb;
          --gold:           #c9a96e;
          --text:           #1a1a18;
          --muted:          #5a5a54;
          --faint:          #9a9990;
          --tag-bg:         #e8f0eb;
          --tag-text:       #1a3d2b;
          --font-body:      'DM Sans', sans-serif;
          --font-display:   'Fraunces', serif;
          --shadow-sm:      0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
          --shadow-md:      0 4px 16px rgba(0,0,0,0.07), 0 2px 6px rgba(0,0,0,0.04);
          --shadow-lg:      0 12px 36px rgba(0,0,0,0.09), 0 4px 12px rgba(0,0,0,0.05);
          --radius:         6px;
          --nav-bg:         rgba(247,245,240,0.88);
        }

        /* ── DARK MODE ── */
        [data-theme="dark"] {
          --bg:             #111110;
          --surface:        #1a1a18;
          --surface2:       #222220;
          --border:         rgba(255,255,255,0.08);
          --border-strong:  rgba(255,255,255,0.14);
          --accent:         #4d9a6a;
          --accent-hover:   #3d8059;
          --accent-light:   #1a2e22;
          --gold:           #c9a96e;
          --text:           #eeece8;
          --muted:          #8a8880;
          --faint:          #5a5a54;
          --tag-bg:         #1a2e22;
          --tag-text:       #4d9a6a;
          --shadow-sm:      0 1px 3px rgba(0,0,0,0.3);
          --shadow-md:      0 4px 16px rgba(0,0,0,0.4);
          --shadow-lg:      0 12px 36px rgba(0,0,0,0.5);
          --nav-bg:         rgba(17,17,16,0.88);
        }

        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--text); transition: background 0.3s, color 0.3s; }

        /* ── NAV ── */
        .pf-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; justify-content: space-between; align-items: center;
          padding: 0 60px; height: 64px;
          background: var(--nav-bg);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border);
          transition: background 0.3s;
        }
        .pf-nav-logo {
          font-family: var(--font-display); font-size: 1.15rem; font-weight: 600;
          color: var(--accent); text-decoration: none; letter-spacing: -0.01em;
        }
        .pf-nav-links { display: flex; gap: 32px; list-style: none; align-items: center; }
        .pf-nav-links a {
          color: var(--muted); text-decoration: none; font-size: 0.875rem; font-weight: 500;
          letter-spacing: 0.01em; transition: color 0.2s;
        }
        .pf-nav-links a:hover { color: var(--text); }
        .pf-nav-right { display: flex; align-items: center; gap: 12px; }
        .theme-toggle {
          width: 36px; height: 36px; border-radius: 50%; border: 1px solid var(--border-strong);
          background: var(--surface); color: var(--muted); cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          flex-shrink: 0;
        }
        .theme-toggle:hover { color: var(--text); border-color: var(--accent); }
        .btn-primary {
          padding: 10px 24px; background: var(--accent); color: var(--bg);
          border: none; border-radius: var(--radius);
          font-size: 0.84rem; font-weight: 600; letter-spacing: 0.02em;
          text-decoration: none; cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          display: inline-block; font-family: var(--font-body);
        }
        .btn-primary:hover { background: var(--accent-hover); transform: translateY(-1px); }
        .btn-secondary {
          padding: 10px 24px; background: transparent;
          color: var(--text); border: 1px solid var(--border-strong); border-radius: var(--radius);
          font-size: 0.84rem; font-weight: 600; letter-spacing: 0.02em;
          text-decoration: none; cursor: pointer;
          transition: border-color 0.2s, transform 0.15s, background 0.2s;
          display: inline-block; font-family: var(--font-body);
        }
        .btn-secondary:hover { border-color: var(--accent); background: var(--accent-light); transform: translateY(-1px); }
        .btn-ghost {
          padding: 10px 24px; background: transparent;
          color: var(--accent); border: none;
          font-size: 0.84rem; font-weight: 600; letter-spacing: 0.02em;
          text-decoration: none; cursor: pointer;
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-body);
          transition: gap 0.2s;
        }
        .btn-ghost:hover { gap: 10px; }

        /* ── HERO ── */
        .pf-hero {
          min-height: 100vh; display: flex; flex-direction: column;
          justify-content: center; padding: 120px 60px 80px;
          max-width: 1100px; margin: 0 auto;
        }
        .pf-hero-eyebrow {
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 28px;
          display: flex; align-items: center; gap: 10px;
        }
        .pf-hero-eyebrow::before {
          content: ''; display: inline-block; width: 24px; height: 1px;
          background: var(--accent);
        }
        .pf-hero h1 {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 6vw, 5.2rem);
          font-weight: 700; line-height: 1.08; letter-spacing: -0.02em;
          margin-bottom: 28px; max-width: 780px;
          color: var(--text);
        }
        .pf-hero h1 em {
          font-style: italic; color: var(--accent); font-weight: 300;
        }
        .pf-hero-sub {
          font-size: clamp(1rem, 1.8vw, 1.15rem); color: var(--muted);
          max-width: 520px; margin-bottom: 44px; line-height: 1.75;
        }
        .pf-hero-chips {
          display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 44px;
        }
        .hero-chip {
          padding: 7px 14px; background: var(--accent-light);
          color: var(--accent); border-radius: 99px;
          font-size: 0.8rem; font-weight: 500; letter-spacing: 0.01em;
          border: 1px solid var(--border-strong);
        }
        .pf-hero-cta { display: flex; gap: 14px; flex-wrap: wrap; }

        /* ── TRUST BAR ── */
        .trust-bar {
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 28px 60px;
          display: flex; align-items: center; gap: 16px;
          background: var(--surface);
          overflow: hidden;
        }
        .trust-bar-label {
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--faint);
          white-space: nowrap; flex-shrink: 0; padding-right: 16px;
          border-right: 1px solid var(--border);
        }
        .trust-items { display: flex; flex-wrap: wrap; gap: 8px; }
        .trust-item {
          padding: 6px 14px; background: var(--bg); border: 1px solid var(--border);
          border-radius: 99px; font-size: 0.8rem; color: var(--muted);
          white-space: nowrap;
        }

        /* ── SECTION BASE ── */
        .pf-section { padding: 100px 60px; max-width: 1100px; margin: 0 auto; }
        .pf-section-full { padding: 100px 60px; }
        .section-eyebrow {
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 16px;
          display: flex; align-items: center; gap: 10px;
        }
        .section-eyebrow::before {
          content: ''; display: inline-block; width: 16px; height: 1px; background: var(--accent);
        }
        .section-title {
          font-family: var(--font-display);
          font-size: clamp(1.9rem, 3.5vw, 2.8rem);
          font-weight: 700; line-height: 1.15; margin-bottom: 18px;
          max-width: 600px; color: var(--text);
        }
        .section-desc {
          color: var(--muted); font-size: 1rem; max-width: 540px;
          line-height: 1.8; margin-bottom: 56px;
        }
        .pf-divider { height: 1px; background: var(--border); }

        /* ── PAIN SECTION ── */
        .pain-section { padding: 100px 60px; background: var(--surface); }
        .pain-intro {
          max-width: 1100px; margin: 0 auto 60px;
        }
        .pain-grid {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px;
          background: var(--border);
        }
        .pain-card {
          background: var(--surface); padding: 44px 36px;
        }
        .pain-card-number {
          font-family: var(--font-display); font-size: 3.5rem; font-weight: 700;
          color: var(--border-strong); line-height: 1; margin-bottom: 24px;
        }
        .pain-card h3 {
          font-size: 1rem; font-weight: 600; color: var(--text);
          margin-bottom: 14px; line-height: 1.4;
        }
        .pain-card p { font-size: 0.875rem; color: var(--muted); line-height: 1.75; }
        .pain-card-fix {
          margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--border);
          font-size: 0.78rem; font-weight: 600; color: var(--accent);
          letter-spacing: 0.04em;
        }

        /* ── ABOUT ── */
        .about-section { padding: 100px 60px; }
        .about-inner { max-width: 1100px; margin: 0 auto; }
        .about-lead {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 300; font-style: italic;
          line-height: 1.5; color: var(--text);
          max-width: 680px; margin-bottom: 24px;
        }
        .about-lead strong { font-weight: 600; font-style: normal; }
        .about-body {
          font-size: 1rem; color: var(--muted); max-width: 580px;
          line-height: 1.8; margin-bottom: 60px;
        }
        .about-cards {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px;
          background: var(--border);
        }
        .about-card {
          background: var(--bg); padding: 36px 32px;
        }
        .about-card-num {
          font-family: var(--font-display); font-size: 0.75rem; font-weight: 600;
          color: var(--accent); letter-spacing: 0.1em; text-transform: uppercase;
          margin-bottom: 20px;
        }
        .about-card h4 {
          font-size: 0.95rem; font-weight: 600; color: var(--text);
          margin-bottom: 12px; line-height: 1.4;
        }
        .about-card p { font-size: 0.84rem; color: var(--muted); line-height: 1.75; }

        /* ── SERVICES ── */
        .services-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 2px; background: var(--border);
        }
        .service-card {
          background: var(--surface); padding: 40px 32px;
          transition: background 0.2s;
        }
        .service-card:hover { background: var(--accent-light); }
        .service-card-tag {
          display: inline-block; padding: 4px 10px;
          background: var(--tag-bg); color: var(--tag-text);
          border-radius: 99px; font-size: 0.7rem; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          margin-bottom: 20px;
        }
        .service-card h3 {
          font-size: 1rem; font-weight: 600; color: var(--text);
          margin-bottom: 10px; line-height: 1.4;
        }
        .service-card p { font-size: 0.84rem; color: var(--muted); line-height: 1.75; }
        .service-card-tech {
          margin-top: 20px; font-size: 0.75rem; color: var(--faint);
          font-weight: 500;
        }

        /* ── CASE STUDY ── */
        .cs-section { padding: 100px 60px; background: var(--surface); }
        .cs-inner { max-width: 1100px; margin: 0 auto; }
        .cs-story {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: start; margin-bottom: 72px;
        }
        .cs-story-text .cs-badge {
          display: inline-block; padding: 5px 12px;
          background: var(--tag-bg); color: var(--tag-text);
          border-radius: 99px; font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 24px;
        }
        .cs-story-text h3 {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 2.5vw, 2.1rem);
          font-weight: 700; line-height: 1.2; margin-bottom: 20px;
          color: var(--text);
        }
        .cs-story-text p {
          font-size: 0.925rem; color: var(--muted); line-height: 1.85; margin-bottom: 18px;
        }
        .cs-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.84rem; font-weight: 600; color: var(--accent);
          text-decoration: none; margin-top: 8px;
          transition: gap 0.2s;
        }
        .cs-link:hover { gap: 10px; }
        .cs-meta { display: flex; flex-direction: column; gap: 20px; }
        .meta-row { display: flex; flex-direction: column; gap: 5px; padding-bottom: 20px; border-bottom: 1px solid var(--border); }
        .meta-row:last-child { border-bottom: none; padding-bottom: 0; }
        .meta-label {
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--faint);
        }
        .meta-value { font-size: 0.9rem; color: var(--text); }
        .meta-value.live { color: #3a9e5c; font-weight: 500; }
        .tech-stack { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
        .tech-tag {
          padding: 6px 13px; background: var(--bg); color: var(--muted);
          border: 1px solid var(--border); border-radius: 99px;
          font-size: 0.75rem; font-weight: 500;
        }
        .cs-features {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 2px; background: var(--border); margin-bottom: 2px;
        }
        .cs-feature {
          background: var(--bg); padding: 36px 32px;
        }
        .cs-feature-num {
          font-family: var(--font-display); font-size: 2.5rem; font-weight: 700;
          color: var(--border-strong); line-height: 1; margin-bottom: 16px;
        }
        .cs-feature h4 { font-size: 0.95rem; font-weight: 600; color: var(--text); margin-bottom: 10px; }
        .cs-feature p { font-size: 0.84rem; color: var(--muted); line-height: 1.75; }
        .cs-admin-spotlight {
          margin-top: 2px; background: var(--accent); color: var(--bg);
          padding: 48px 56px;
          display: grid; grid-template-columns: 1fr 1.6fr; gap: 60px; align-items: center;
        }
        .cs-admin-spotlight h4 {
          font-family: var(--font-display); font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 700; line-height: 1.25; color: var(--bg);
        }
        .cs-admin-spotlight p {
          font-size: 0.9rem; line-height: 1.8; opacity: 0.85;
          margin-bottom: 20px;
        }
        .cs-admin-list {
          list-style: none; display: flex; flex-direction: column; gap: 8px;
          margin-bottom: 28px;
        }
        .cs-admin-list li {
          font-size: 0.84rem; opacity: 0.85; padding-left: 16px; position: relative;
        }
        .cs-admin-list li::before {
          content: '\u2192'; position: absolute; left: 0;
          font-size: 0.75rem;
        }
        .cs-arch-link {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 0.84rem; font-weight: 600;
          color: var(--bg); opacity: 0.9;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.35);
          padding: 9px 18px; border-radius: var(--radius);
          transition: opacity 0.2s, background 0.2s, gap 0.2s;
          background: rgba(255,255,255,0.1);
        }
        .cs-arch-link:hover { opacity: 1; background: rgba(255,255,255,0.18); gap: 11px; }

        /* ── WHY US ── */
        .why-section { padding: 100px 60px; }
        .why-inner { max-width: 1100px; margin: 0 auto; }
        .why-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 2px; background: var(--border);
        }
        .why-item {
          background: var(--surface); padding: 44px 40px;
        }
        .why-item-num {
          font-family: var(--font-display); font-size: 0.72rem; font-weight: 600;
          color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase;
          margin-bottom: 18px;
        }
        .why-item h3 {
          font-size: 1.05rem; font-weight: 600; color: var(--text);
          margin-bottom: 12px; line-height: 1.4;
        }
        .why-item p { font-size: 0.875rem; color: var(--muted); line-height: 1.8; }
        .why-item p strong { color: var(--text); font-weight: 600; }

        /* ── PROCESS ── */
        .process-section { padding: 100px 60px; background: var(--surface); }
        .process-inner { max-width: 1100px; margin: 0 auto; }
        .process-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 2px; background: var(--border);
        }
        .process-step { background: var(--bg); padding: 40px 32px; }
        .process-step-num {
          font-family: var(--font-display); font-size: 1.6rem; font-weight: 700;
          color: var(--border-strong); line-height: 1; margin-bottom: 20px;
        }
        .process-step h4 { font-size: 0.95rem; font-weight: 600; color: var(--text); margin-bottom: 10px; }
        .process-step p { font-size: 0.84rem; color: var(--muted); line-height: 1.75; }
        .process-step-label {
          margin-top: 20px; font-size: 0.72rem; font-weight: 600;
          color: var(--accent); letter-spacing: 0.08em; text-transform: uppercase;
        }

        /* ── CTA SECTION ── */
        .cta-section { padding: 120px 60px; text-align: left; }
        .cta-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .cta-section h2 {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 700; line-height: 1.12; margin-bottom: 20px;
          color: var(--text);
        }
        .cta-section h2 em { font-style: italic; font-weight: 300; color: var(--accent); }
        .cta-section p { font-size: 1rem; color: var(--muted); line-height: 1.8; margin-bottom: 36px; }
        .cta-promise {
          display: flex; flex-direction: column; gap: 16px;
          padding: 36px; background: var(--surface);
          border: 1px solid var(--border); border-radius: var(--radius);
        }
        .cta-promise-item {
          display: flex; align-items: flex-start; gap: 14px;
        }
        .cta-promise-icon {
          width: 20px; height: 20px; flex-shrink: 0;
          color: var(--accent); margin-top: 2px;
        }
        .cta-promise-text strong { display: block; font-size: 0.9rem; color: var(--text); margin-bottom: 3px; }
        .cta-promise-text span { font-size: 0.82rem; color: var(--muted); }

        /* ── FOOTER ── */
        .pf-footer {
          border-top: 1px solid var(--border); padding: 48px 60px;
          display: flex; justify-content: space-between; align-items: center;
          background: var(--surface);
        }
        .footer-logo { font-family: var(--font-display); font-size: 1.05rem; color: var(--accent); }
        .footer-copy { font-size: 0.8rem; color: var(--faint); }
        .footer-links { display: flex; gap: 28px; }
        .footer-links a {
          font-size: 0.8rem; color: var(--muted); text-decoration: none; transition: color 0.2s;
        }
        .footer-links a:hover { color: var(--text); }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .pf-nav { padding: 0 20px; }
          .pf-nav-links { display: none; }
          .pf-hero { padding: 100px 24px 60px; }
          .pf-section, .pf-section-full, .about-section,
          .pain-section, .why-section, .process-section,
          .cs-section, .cta-section { padding: 72px 24px; }
          .trust-bar { padding: 24px; flex-direction: column; align-items: flex-start; }
          .trust-bar-label { border-right: none; border-bottom: 1px solid var(--border); padding-right: 0; padding-bottom: 12px; }
          .pain-grid { grid-template-columns: 1fr; }
          .about-cards { grid-template-columns: 1fr; }
          .services-grid { grid-template-columns: 1fr; }
          .cs-story { grid-template-columns: 1fr; gap: 40px; }
          .cs-features { grid-template-columns: 1fr; }
          .cs-admin-spotlight { grid-template-columns: 1fr; gap: 28px; padding: 36px 28px; }
          .why-grid { grid-template-columns: 1fr; }
          .process-grid { grid-template-columns: repeat(2, 1fr); }
          .cta-inner { grid-template-columns: 1fr; gap: 40px; }
          .pf-footer { flex-direction: column; gap: 20px; text-align: center; }
          .footer-links { flex-wrap: wrap; justify-content: center; }
        }

        @media (max-width: 480px) {
          .process-grid { grid-template-columns: 1fr; }
          .pf-hero h1 { font-size: 2.4rem; }
        }
      `}</style>

      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          var t=document.querySelector('[data-theme-toggle]'),r=document.documentElement;
          var d=localStorage.getItem&&localStorage.getItem('theme')||((matchMedia('(prefers-color-scheme:dark)').matches)?'dark':'light');
          r.setAttribute('data-theme',d);
          t&&t.addEventListener('click',function(){
            d=d==='dark'?'light':'dark';
            r.setAttribute('data-theme',d);
            try{localStorage.setItem('theme',d);}catch(e){}
            t.setAttribute('aria-label','Switch to '+(d==='dark'?'light':'dark')+' mode');
            t.innerHTML=d==='dark'
              ?'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
              :'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
          });
        })();
      ` }} />

      {/* ── NAV ── */}
      <nav className="pf-nav">
        <a href="/" className="pf-nav-logo">molkarinfotech</a>
        <ul className="pf-nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#why-us">Why Us</a></li>
          <li><a href="#process">Process</a></li>
        </ul>
        <div className="pf-nav-right">
          <button
            className="theme-toggle"
            data-theme-toggle
            aria-label="Switch to dark mode"
            dangerouslySetInnerHTML={{ __html: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>' }}
          />
          <a href="#contact" className="btn-primary">Start a Project</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pf-hero">
        <p className="pf-hero-eyebrow">Boutique technology partner</p>
        <h1>Technology that <em>grows</em><br />your business.</h1>
        <p className="pf-hero-sub">
          Not a subscription. Not a template. A custom-built digital solution — designed around how your business actually works, and handed over to you completely.
        </p>
        <div className="pf-hero-chips">
          <span className="hero-chip">✦ One-time cost — you own it forever</span>
          <span className="hero-chip">✦ Built in weeks, not months</span>
          <span className="hero-chip">✦ Direct line to your developer</span>
        </div>
        <div className="pf-hero-cta">
          <a href="#work" className="btn-primary">See Our Work</a>
          <a href="#contact" className="btn-secondary">Start a Conversation</a>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <span className="trust-bar-label">We work with</span>
        <div className="trust-items">
          {['Retail stores', 'Medical practices', 'Service providers', 'Restaurants &amp; cafes', 'Tradies', 'Grocers &amp; chemists', 'Fashion brands', 'Any small business'].map(item => (
            <span className="trust-item" key={item} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </div>
      </div>

      {/* ── PROBLEM ── */}
      <section className="pain-section">
        <div className="pain-intro">
          <p className="section-eyebrow">The real problem</p>
          <h2 className="section-title">Most small businesses are being sold the wrong solution.</h2>
        </div>
        <div className="pain-grid">
          {([
            [
              '01',
              'The subscription trap',
              'Shopify, Wix, and Squarespace charge you monthly — forever. After three years you\'ve paid for the site three times over, and you still own nothing. The moment you stop paying, it\'s gone.',
              'We build it once. You own it forever.'
            ],
            [
              '02',
              'The template ceiling',
              'Page builders give you 80% of a website. The last 20% — your actual differentiator, your specific workflow, the thing that makes your business different — is always locked behind "not supported."',
              'We build around your business, not a template.'
            ],
            [
              '03',
              'The disappearing developer',
              'Freelance marketplaces are full of talent. Finding someone who stays accountable after launch — who answers your calls, fixes issues, and still cares six months later — is the hard part.',
              'We document everything and stay reachable.'
            ],
          ] as [string,string,string,string][]).map(([num, title, body, fix]) => (
            <div className="pain-card" key={num}>
              <div className="pain-card-number">{num}</div>
              <h3>{title}</h3>
              <p>{body}</p>
              <div className="pain-card-fix">→ {fix}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about-section">
        <div className="about-inner">
          <p className="section-eyebrow">Who we are</p>
          <p className="about-lead">
            We&rsquo;re a boutique technology firm. <strong>Small by design.</strong>
          </p>
          <p className="about-body">
            That means when you hire molkarinfotech, you&rsquo;re working directly with the people building your product — not an account manager relaying messages to an offshore team. We&rsquo;ve worked with retail stores, service businesses, medical practices, tradies, and e-commerce brands. The technology changes. The fundamentals don&rsquo;t: understand the business first, then build the right thing.
          </p>
          <div className="about-cards">
            <div className="about-card">
              <div className="about-card-num">Principle 01</div>
              <h4>Empathy before architecture</h4>
              <p>We start every project by understanding your business model, your customers, and what success looks like to you. The tech comes second — always.</p>
            </div>
            <div className="about-card">
              <div className="about-card-num">Principle 02</div>
              <h4>Innovation at the right price</h4>
              <p>AI integration, modern frameworks, production-grade infrastructure — delivered without the enterprise price tag. Smart technology choices keep costs down without cutting corners.</p>
            </div>
            <div className="about-card">
              <div className="about-card-num">Principle 03</div>
              <h4>You own everything</h4>
              <p>Source code, database, domain configuration, full documentation. We build it, we hand it over completely, and we&rsquo;re still here if you need us — on your terms, not ours.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="pf-divider" />

      {/* ── SERVICES ── */}
      <section className="pf-section-full" id="services">
        <div style={{ maxWidth: 1100, margin: '0 auto 48px' }}>
          <p className="section-eyebrow">What you get</p>
          <h2 className="section-title">Six outcomes, built around your business</h2>
          <p className="section-desc">Every service is framed around what you walk away with — not what technologies we use to build it.</p>
        </div>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="services-grid">
            {([
              ['Your own online store',         'E-Commerce',      'A custom storefront with payments, inventory management, admin portal, and order pipeline — built for your specific products and how you sell them.',        'Stripe · Supabase · Next.js'],
              ['Your brand, built to convert',  'Design &amp; UX', 'Pixel-perfect interfaces that feel like your business. Clean, fast, and designed to turn browsers into buyers.',                                          'Framer Motion · Tailwind CSS'],
              ['Customers find you on Google',  'SEO &amp; Speed',  'Server-rendered pages, fast load times, semantic markup. The technical foundations that drive organic discovery — built in from day one.',             'Next.js SSR · Vercel Edge'],
              ['Your data, forever yours',       'Backend',         'Secure databases, authentication, and API infrastructure that you own outright. No vendor lock-in. Full source code on handover.',                     'Supabase · PostgreSQL · TypeScript'],
              ['Works on every device',          'Mobile-first',    'Every project is designed at 375px first. Touch targets, responsive layouts, and tested across all screen sizes before launch.',                         'Responsive CSS · Touch UX'],
              ['AI where it actually helps',     'AI Integration',  'Automated image tagging, content classification, smart search. We find the right AI tool for your specific workflow — not the trendiest one.',          'Google Vision · LLM APIs'],
            ] as [string,string,string,string][]).map(([title, tag, desc, tech]) => (
              <div className="service-card" key={title}>
                <div className="service-card-tag" dangerouslySetInnerHTML={{ __html: tag }} />
                <h3>{title}</h3>
                <p>{desc}</p>
                <p className="service-card-tech">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pf-divider" />

      {/* ── CASE STUDY ── */}
      <section className="cs-section" id="work">
        <div className="cs-inner">
          <p className="section-eyebrow">Featured case study</p>
          <h2 className="section-title">Ethnic Story — From Instagram DMs to a fully automated online store.</h2>

          <div className="cs-story">
            <div className="cs-story-text">
              <span className="cs-badge">Case Study &middot; 2026 &middot; E-Commerce</span>
              <h3>A thriving fashion brand. An ordering process that wasn&rsquo;t keeping up.</h3>
              <p>
                Ethnic Story was taking orders over Instagram DMs. Every sale meant a manual back-and-forth of photos, prices, and bank transfers. Beautiful products, exhausting process.
              </p>
              <p>
                We built them a production-grade e-commerce platform: custom storefront, Stripe payments, AI-powered product tagging via Google Vision, and an admin portal the owner runs solo — no developer needed day-to-day.
              </p>
              <p>
                The store runs itself. The owner manages it from a dashboard.
              </p>
              <a href="https://ethnic-story-ai-gen-frontend.vercel.app/" className="cs-link" target="_blank" rel="noopener noreferrer">
                Visit the live store &rarr;
              </a>
              <div className="tech-stack">
                {['Next.js 16','React 19','TypeScript','Supabase','Stripe','Google Vision API','Tailwind CSS','Framer Motion','PostgreSQL','Vercel'].map(t => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="cs-meta">
              {([
                ['Client',        'Ethnic Story'],
                ['Category',      'E-Commerce · Fashion · Ethnic Wear'],
                ['Deliverables',  'Full-Stack Web App, Admin Portal, Stripe Integration, Vision AI'],
                ['Year',          '2026'],
                ['Status',        '✓ Live &amp; Production'],
              ] as [string,string][]).map(([label, value]) => (
                <div className="meta-row" key={label}>
                  <span className="meta-label">{label}</span>
                  <span className={`meta-value${label === 'Status' ? ' live' : ''}`} dangerouslySetInnerHTML={{ __html: value }} />
                </div>
              ))}
            </div>
          </div>

          {/* Feature cards */}
          <div className="cs-features">
            {([
              ['01', 'Smart Product Management',   'Google Vision API integration for automated image tagging and categorisation. Upload a photo — the system labels it. No manual curation needed.'],
              ['02', 'Full E-Commerce Pipeline',   'Stripe payment processing with webhooks, real-time order confirmation, inventory tracking, and a complete admin portal for order management.'],
              ['03', 'Authentication &amp; Accounts', 'Supabase Auth with secure session management, user profiles, order history, and role-based access control separating admin and customer views.'],
              ['04', 'Performance &amp; SEO',         'Server-side rendering via Next.js App Router, optimised images, and Vercel Edge Network delivery for fast organic discovery from day one.'],
            ] as [string,string,string][]).map(([num, title, desc]) => (
              <div className="cs-feature" key={num}>
                <div className="cs-feature-num">{num}</div>
                <h4 dangerouslySetInnerHTML={{ __html: title }} />
                <p>{desc}</p>
              </div>
            ))}
          </div>

          {/* Admin portal spotlight */}
          <div className="cs-admin-spotlight">
            <h4>The admin portal is the product.</h4>
            <div>
              <p>The owner manages stock levels, processes orders, uploads new products with automatic AI tagging, monitors every payment, and runs the entire operation — all from one dashboard. No developer needed.</p>
              <ul className="cs-admin-list">
                <li>Product management with bulk upload and Google Vision auto-tagging</li>
                <li>Live inventory levels with stock status and low-stock alerts</li>
                <li>Order management — status, fulfilment, refund triggers</li>
                <li>Stripe webhook event log — full payment audit trail</li>
                <li>Analytics dashboard — revenue, orders, top products</li>
                <li>Role-based access control — admin vs. customer at database level</li>
              </ul>
              <a href="/architecture" className="cs-arch-link">
                Explore the full system architecture &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="why-section" id="why-us">
        <div className="why-inner">
          <p className="section-eyebrow">Why molkarinfotech</p>
          <h2 className="section-title">Four things that are genuinely true.</h2>
          <p className="section-desc">Not marketing copy. Actual commitments we make to every client.</p>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-item-num">01 — Cost model</div>
              <h3>You pay once.</h3>
              <p>There&rsquo;s no monthly fee for a website you already paid to build. When the project is done, it&rsquo;s yours — the code, the database, the domain configuration. <strong>Forever.</strong> In three years, a $39/mo Shopify plan costs you $1,404. A custom store built once pays for itself.</p>
            </div>
            <div className="why-item">
              <div className="why-item-num">02 — Communication</div>
              <h3>You talk to the builder.</h3>
              <p>Not a project manager. Not a support ticket system. The person answering your question is the same person who wrote the code. <strong>Decisions happen in hours, not weeks.</strong> No account manager relay. No offshore handoff.</p>
            </div>
            <div className="why-item">
              <div className="why-item-num">03 — Technology</div>
              <h3>We use AI where it actually helps.</h3>
              <p>Not as a buzzword. Ethnic Story&rsquo;s admin portal uses Google Vision AI to tag products automatically — removing hours of manual work. We find the <strong>right technology for the right problem</strong>, not the trendiest one.</p>
            </div>
            <div className="why-item">
              <div className="why-item-num">04 — Outcomes</div>
              <h3>We care about your ROI, not billable hours.</h3>
              <p>A solution that takes two weeks and costs half as much but <strong>solves your actual problem</strong> is better than a six-month project that overdelivers on features nobody uses. We&rsquo;ll tell you honestly if a simpler answer exists.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="pf-divider" />

      {/* ── PROCESS ── */}
      <section className="process-section" id="process">
        <div className="process-inner">
          <p className="section-eyebrow">How it works</p>
          <h2 className="section-title">What happens after you get in touch.</h2>
          <p className="section-desc">Four steps from first conversation to a product in your hands — with no surprises in between.</p>
          <div className="process-grid">
            {([
              ['01', 'You describe your business',  'We start with a 15-minute conversation — no pitch deck, no jargon. Just an honest discussion about what you do, who your customers are, and what you want the technology to achieve.', 'Week 1'],
              ['02', 'We propose the right solution', 'We come back with a clear proposal: what we\'d build, how long it takes, and what it costs. You\'ll understand every line before you agree to anything.', 'Week 1–2'],
              ['03', 'We build — you see progress weekly', 'Development happens in short cycles. You get a live preview environment and a weekly update. The first working version is usually visible within days, not months.', 'Weeks 2–6'],
              ['04', 'We hand over — and stay reachable', 'Full source code, deployment configuration, and a documented handover. You own everything. We stay available for questions, updates, and future work on your terms.', 'Launch +'],
            ] as [string,string,string,string][]).map(([num, title, desc, when]) => (
              <div className="process-step" key={num}>
                <div className="process-step-num">{num}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
                <div className="process-step-label">{when}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <div>
            <p className="section-eyebrow">Let&rsquo;s talk</p>
            <h2>Tell us about your business. <em>Let&rsquo;s figure out the right thing to build.</em></h2>
            <p>No pitch deck, no sales process. An honest conversation about what you&rsquo;re trying to achieve, whether we can help, and roughly what it would cost. If we&rsquo;re not the right fit, we&rsquo;ll tell you.</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="mailto:molkarinfotech@gmail.com" className="btn-primary">Send us an email &rarr;</a>
              <a href="https://github.com/molkarinfotech" className="btn-secondary" target="_blank" rel="noopener noreferrer">View GitHub</a>
            </div>
            <p style={{ marginTop: 20, fontSize: '0.8rem', color: 'var(--faint)' }}>molkarinfotech@gmail.com &middot; Response within 24 hours</p>
          </div>
          <div className="cta-promise">
            {([
              ['No lock-in contracts',      'Month-to-month is fine. The code is always yours.'],
              ['Fixed-scope quotes',         'You know the cost before we start. No surprise invoices.'],
              ['Full documentation',         'Every project comes with a handover document you can actually use.'],
              ['Post-launch availability',   'We don\'t disappear after launch. Questions, updates, new features — we\'re here.'],
            ]).map(([title, desc]) => (
              <div className="cta-promise-item" key={title}>
                <svg className="cta-promise-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <div className="cta-promise-text">
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
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
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="mailto:molkarinfotech@gmail.com">Contact</a>
        </div>
      </footer>
    </main>
  )
}
