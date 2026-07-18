"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Bot, BrainCircuit, Building2, ChevronRight, ShieldCheck, Sparkles, Workflow, Rocket, Store, DatabaseZap, Layers3, CircleDollarSign, Cpu, PanelTop, Globe2, MessageSquareText } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Please share your name.'),
  email: z.string().email('Please enter a valid email.'),
  company: z.string().optional(),
  project: z.string().min(10, 'A bit more detail helps us scope it properly.'),
});

type FormValues = z.infer<typeof formSchema>;

const services = [
  { title: 'Custom websites', description: 'Premium marketing sites with conversion-focused UX and editorial storytelling.', icon: Globe2 },
  { title: 'E-commerce', description: 'Fast, high-conversion storefronts designed to scale from launch to global growth.', icon: Store },
  { title: 'AI features', description: 'Smart assistants, content copilots, recommendation engines, and search experiences.', icon: BrainCircuit },
  { title: 'Secure admin portals', description: 'Role-based dashboards for teams to manage content, orders, and operations safely.', icon: ShieldCheck },
  { title: 'Automations', description: 'Workflow automations that cut repetitive manual tasks across your business.', icon: Workflow },
  { title: 'Scalable deployments', description: 'Cloud-first architecture with performance monitoring and reliable releases.', icon: Rocket },
];

const features = [
  'Immersive storytelling that feels like your brand.',
  'CMS and content workflows made for creative teams.',
  'Secure authentication, role controls, and audit-friendly systems.',
  'Analytics-ready architecture for real growth measurement.',
];

const portalFeatures = [
  'Role-based access for admins, staff, and partners.',
  'Operational dashboards for orders, leads, and content health.',
  'Approval pipelines for launches, content, and actions.',
  'API integrations with CRM, ERP, and marketing stacks.',
];

const industries = ['Professional services', 'SaaS & B2B', 'Healthcare & wellness', 'Retail & e-commerce', 'Hospitality & travel', 'Finance & fintech', 'Education & training', 'Real estate & property'];

const process = [
  'Discover the business outcome and brand story.',
  'Design the experience with clear conversion paths.',
  'Build with clean architecture and modular integrations.',
  'Launch, optimize, and scale with confidence.',
];

const useCaseHighlights = [
  {
    title: 'Narrative-first website experience',
    description: 'A premium storytelling experience that turns complex offerings into clear, persuasive journeys for new and returning visitors.',
  },
  {
    title: 'AI-assisted discovery',
    description: 'Search, recommendations, and content surfacing that help visitors find the right service, product, or next step quickly.',
  },
  {
    title: 'Operational control center',
    description: 'A secure admin environment that keeps marketing, content, and growth initiatives aligned without operational chaos.',
  },
  {
    title: 'Scalable growth architecture',
    description: 'A foundation built for SEO, integrations, analytics, and future feature expansion as the business evolves.',
  },
];

const capabilities = [
  'Strategy-led digital product design grounded in business outcomes.',
  'Full-stack build capability across frontends, backends, AI layers, and operations.',
  'Premium UX craft for brands that need to feel polished, credible, and commercially effective.',
  'Secure, scalable systems designed for growth rather than short-term demos.',
];

const differentiators = [
  'We bridge brand storytelling and technical execution instead of treating them as separate disciplines.',
  'We design for conversion, retention, and long-term operations — not just visual polish.',
  'We build platforms that are beautiful on the surface and robust underneath.',
  'We create systems that can evolve from launch into a full digital growth engine.',
];

const featurePanels = [
  {
    title: 'Audience intelligence',
    body: 'We translate brand positioning and customer behavior into experiences that feel relevant, premium, and conversion-ready.',
    accent: 'from-fuchsia-500/25 to-cyan-500/20',
  },
  {
    title: 'AI that augments growth',
    body: 'From discovery to personalization, AI becomes a business tool that improves relevance, engagement, and conversion.',
    accent: 'from-cyan-500/20 to-emerald-500/15',
  },
  {
    title: 'Operational clarity',
    body: 'Teams gain a cleaner way to manage content, campaigns, users, and approvals without slowing down delivery.',
    accent: 'from-amber-500/20 to-fuchsia-500/15',
  },
  {
    title: 'Future-ready infrastructure',
    body: 'Scalable architecture, clean integrations, and resilient deployments keep your platform ready for the next stage.',
    accent: 'from-slate-600/40 to-slate-800/40',
  },
];

const capabilityCards = [
  { title: 'Storefront depth', body: 'Landing, collections, product browsing, cart, checkout, account, login, and order flows that signal a complete commerce build.', icon: Globe2, accent: 'from-cyan-500/20 to-slate-900/70' },
  { title: 'AI layer', body: 'Chat, search, content assistance, image enhancement, and intelligent support experiences designed to feel premium and useful.', icon: BrainCircuit, accent: 'from-fuchsia-500/20 to-slate-900/70' },
  { title: 'Operations', body: 'Payment intent creation, coupon validation, order logic, notifications, and webhooks that support real business workflows.', icon: Workflow, accent: 'from-emerald-500/20 to-slate-900/70' },
  { title: 'Admin system', body: 'Dedicated admin modules for catalog control, orders, messaging, sourcing, reviews, and appearance settings.', icon: ShieldCheck, accent: 'from-amber-500/20 to-slate-900/70' },
  { title: 'Security', body: 'Protected entry points, role-based control, separate auth paths, and platform structure that support serious business use.', icon: Layers3, accent: 'from-slate-600/40 to-slate-900/70' },
  { title: 'Scale potential', body: 'A full-stack foundation with frontend, API routes, database patterns, and deployment config built to grow beyond a one-page concept.', icon: Rocket, accent: 'from-cyan-500/15 to-fuchsia-500/15' },
];

const proofSteps = [
  { title: 'Discovery-ready storefront', body: 'Landing pages, collections, product browsing, sizing help, shipping, returns, cart, and checkout give prospects confidence that you understand conversion paths.' },
  { title: 'Account and retention logic', body: 'Login, signup, account, orders, likes, reviews, rewards, and restock notifications show customer-retention thinking instead of just acquisition design.' },
  { title: 'Revenue engine integrations', body: 'Payment intents, coupon validation, manual orders, Stripe webhooks, and confirmation emails prove the build can support real transactions and post-purchase flow.' },
];

const adminRoutes = [
  { route: '/admin/dashboard', title: 'Business oversight', tag: 'Operations', items: ['Dashboard', 'Orders', 'Notifications', 'Checkout'] },
  { route: '/admin/products', title: 'Merchandising and catalog control', tag: 'Catalog', items: ['Products', 'Categories', 'Import', 'Appearance'] },
  { route: '/admin/coupons', title: 'Growth and loyalty systems', tag: 'Retention', items: ['Coupons', 'Likes', 'Reviews', 'Chatbot KB'] },
  { route: '/admin/sourcing', title: 'Advanced brand operations', tag: 'Workflow', items: ['Sourcing', 'Scan', 'Admin login', 'Admin root'] },
];

const apiHighlights = [
  { title: 'Payments and checkout', body: '/api/create-payment-intent, /api/update-payment-intent, /api/validate-coupon, and /api/stripe-webhook support real transaction flows.' },
  { title: 'Orders and notifications', body: '/api/orders, /api/order-by-intent, /api/create-manual-order, and /api/send-order-confirmation support operations after the click.' },
  { title: 'AI and growth features', body: '/api/chat, /api/enhance-image, /api/sourcing, /api/reviews, /api/rewards, and /api/notify-restock add retention and automation layers.' },
];

const packaging = [
  { name: 'Brand storefront', tier: 'Starter', price: 'Premium launch', description: 'For labels that need a polished custom site with product pages, collections, account flows, and a mobile-first experience.', items: ['Custom homepage and product architecture', 'Cart, auth, account, and order pages', 'Performance-first responsive front end'] },
  { name: 'Revenue system', tier: 'Best fit', price: 'Growth build', description: 'For businesses that need checkout logic, admin tooling, and operations support instead of a surface-level redesign.', items: ['Everything in Starter', 'Payment flows, coupons, emails, and order logic', 'Custom admin modules for products, orders, and content'] },
  { name: 'AI commerce stack', tier: 'Advanced', price: 'Differentiated build', description: 'For brands that want differentiation through AI-assisted features, workflow automation, and tailored internal tools.', items: ['Everything in Revenue System', 'Chat, content workflows, media enhancement, or sourcing', 'Bespoke modules designed around the brand’s operations'] },
];

const galleryItems = [
  'Immersive brand storytelling',
  'Interactive product journeys',
  'AI-assisted customer experience',
  'Streamlined operations',
  'Trusted digital infrastructure',
  'Premium visual systems',
];

const flowNodes = [
  { title: 'Main website', subtitle: 'Lead capture, storytelling, commerce', x: 18, y: 22 },
  { title: 'CMS studio', subtitle: 'Publish pages and launch campaigns', x: 46, y: 22 },
  { title: 'AI assistant', subtitle: 'Search, recommendations, support', x: 74, y: 22 },
  { title: 'Admin workspace', subtitle: 'Users, approvals, workflows', x: 46, y: 76 },
  { title: 'Analytics & CRM', subtitle: 'Signals, reporting, routing', x: 74, y: 76 },
];

const flowEdges = [
  { from: { x: 26, y: 22 }, to: { x: 38, y: 22 } },
  { from: { x: 54, y: 22 }, to: { x: 66, y: 22 } },
  { from: { x: 46, y: 30 }, to: { x: 46, y: 62 } },
  { from: { x: 74, y: 30 }, to: { x: 74, y: 62 } },
  { from: { x: 54, y: 76 }, to: { x: 66, y: 76 } },
];

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const onSubmit = (data: FormValues) => {
    const mailto = `mailto:hello@culturexcode.com?subject=Project inquiry from ${encodeURIComponent(data.name)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || 'N/A'}\nProject: ${data.project}`)}`;
    window.location.href = mailto;
  };

  return (
    <main className="overflow-hidden">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-16 pt-8 lg:px-10">
        <header className="mb-10 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-fuchsia-500/20 p-2 text-fuchsia-300"><Sparkles size={18} /></div>
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-slate-200 uppercase">Culture x Code</p>
              <p className="text-xs text-slate-400">digital product studio</p>
            </div>
          </div>
          <a href="#contact" className="rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 px-4 py-2 text-sm font-medium text-fuchsia-200 transition hover:bg-fuchsia-500/20">Book a strategy call</a>
        </header>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-200">
              <Cpu className="mr-2" size={16} /> Premium digital products for ambitious brands
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
              Your business, elevated with digital experiences that work as hard as you do.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
              From high-converting websites to intelligent product experiences, we build digital systems that put your business in your hands — clear, modern, and ready to grow.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500 px-5 py-3 font-semibold text-white transition hover:bg-fuchsia-400">Let’s build your growth engine <ArrowRight size={18} /></a>
              <a href="#case-study" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-200 transition hover:bg-white/10">See how it works</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="rounded-full border border-white/10 px-3 py-1">App Router</span>
              <span className="rounded-full border border-white/10 px-3 py-1">TypeScript</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Tailwind</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Motion UI</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-fuchsia-950/40 backdrop-blur">
            <div className="rounded-[1.6rem] border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5">
              <div className="flex items-center justify-between pb-4 text-sm text-slate-400">
                <span>Platform experience</span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-1 text-cyan-200">Responsive</span>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-2 text-cyan-200"><PanelTop size={16} /> Brand-led experience</div>
                  <p className="mt-2 text-sm text-slate-300">Editorial interfaces, premium storytelling, and frictionless journeys that guide visitors to action.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-2 text-fuchsia-200"><Bot size={16} /> Intelligent product layer</div>
                  <p className="mt-2 text-sm text-slate-300">Search, recommendations, and AI-driven assistance that make complex products easier to understand.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-2 text-emerald-200"><DatabaseZap size={16} /> Unified operations</div>
                  <p className="mt-2 text-sm text-slate-300">A single, secure foundation that connects content, automation, analytics, and team workflows.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="case-study" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Case study</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">I build premium commerce systems, not just pretty storefronts.</h2>
              <p className="mt-4 text-lg text-slate-300">This page turns the Ethnic Story AI repository into a sales asset by showing buyers the depth of the product: AI-assisted commerce flows, payments, customer accounts, operational tooling, and a serious admin system built for real business use.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#offers" className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500 px-5 py-3 font-semibold text-white transition hover:bg-fuchsia-400">Use this as my service page <ArrowRight size={18} /></a>
                <a href="#admin" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-200 transition hover:bg-white/10">See the admin architecture</a>
              </div>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/70 p-5">
              <div className="space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-cyan-200"><PanelTop size={16} /> AI commerce + storytelling</div>
                  <p className="mt-2 text-sm text-slate-300">A premium experience with clear navigation, conversion paths, and product-led storytelling.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-fuchsia-200"><Bot size={16} /> Protected admin workspace</div>
                  <p className="mt-2 text-sm text-slate-300">Content control, approvals, operations, appearance, and user management in one system.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-emerald-200"><DatabaseZap size={16} /> Revenue and workflow engine</div>
                  <p className="mt-2 text-sm text-slate-300">Payments, coupons, notifications, order logic, and webhooks all work together in one product stack.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[1.4rem] border border-white/10 bg-slate-900/70 p-5">
            <p className="text-3xl font-semibold text-white">12+</p>
            <p className="mt-2 text-sm leading-7 text-slate-400">Customer-facing routes across storefront, checkout, account, orders, auth, collections, and support flows.</p>
          </div>
          <div className="rounded-[1.4rem] border border-white/10 bg-slate-900/70 p-5">
            <p className="text-3xl font-semibold text-white">14+</p>
            <p className="mt-2 text-sm leading-7 text-slate-400">Dedicated admin modules for merchandising, operations, sourcing, reviews, coupons, and more.</p>
          </div>
          <div className="rounded-[1.4rem] border border-white/10 bg-slate-900/70 p-5">
            <p className="text-3xl font-semibold text-white">20+</p>
            <p className="mt-2 text-sm leading-7 text-slate-400">API route groups for payments, product media, notifications, chat, storefront config, and webhooks.</p>
          </div>
          <div className="rounded-[1.4rem] border border-white/10 bg-slate-900/70 p-5">
            <p className="text-3xl font-semibold text-white">Full-stack</p>
            <p className="mt-2 text-sm leading-7 text-slate-400">Next.js frontend, API handlers, middleware, docs, database, Supabase, and deployment config in one system.</p>
          </div>
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 backdrop-blur">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Capabilities</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">What makes this more valuable than a template site</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-400">This repo shows you can build a custom online store with advanced business logic, not just style a homepage. That is the angle to market your website creation business.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilityCards.map((card) => (
              <motion.article key={card.title} whileHover={{ y: -4, scale: 1.01 }} className={`rounded-[1.35rem] border border-white/10 bg-gradient-to-br ${card.accent} p-5`}>
                <card.icon className="text-fuchsia-300" size={22} />
                <p className="mt-4 text-lg font-semibold text-white">{card.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{card.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Feature proof</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">A repo structure that sells capability fast</h2>
            <div className="mt-8 space-y-4">
              {proofSteps.map((step, index) => (
                <div key={step.title} className="rounded-[1.25rem] border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm font-semibold text-fuchsia-200">0{index + 1}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{step.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-200">Messaging angle</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">How to frame this commercially</h2>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li className="flex items-start gap-3"><ChevronRight className="mt-1 text-cyan-300" size={16} />Lead with “I build custom e-commerce systems for brands that need more than Shopify themes.”</li>
              <li className="flex items-start gap-3"><ChevronRight className="mt-1 text-cyan-300" size={16} />Position this project as a live example of AI features, backend logic, and admin tooling working together.</li>
              <li className="flex items-start gap-3"><ChevronRight className="mt-1 text-cyan-300" size={16} />Sell outcomes: faster operations, custom brand UX, better merchandising control, and conversion-focused checkout.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="admin" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 backdrop-blur">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Admin routes</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">The control panel modules worth highlighting</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">Admin pages are a major selling point because most small business clients never get them in typical freelance builds. This is the section that makes your service feel closer to an agency or product studio.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {adminRoutes.map((route) => (
              <div key={route.route} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between gap-3">
                  <code className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-200">{route.route}</code>
                  <span className="rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-3 py-1 text-xs font-semibold text-fuchsia-200">{route.tag}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{route.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  {route.items.map((item) => (
                    <li key={item} className="flex items-center gap-2"><ChevronRight className="text-cyan-300" size={14} />{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">API feature stack</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Backend endpoints that strengthen your pitch</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {apiHighlights.map((item) => (
              <div key={item.title} className="rounded-[1.3rem] border border-white/10 bg-slate-900/70 p-5">
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="offers" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 backdrop-blur">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-200">Service packaging</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">How to turn this case study into a paid offer</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {packaging.map((plan) => (
              <div key={plan.name} className={`rounded-[1.4rem] border border-white/10 p-6 ${plan.tier === 'Best fit' ? 'bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/15' : 'bg-white/5'}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">{plan.tier}</p>
                <p className="mt-4 text-2xl font-semibold text-white">{plan.name}</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{plan.description}</p>
                <div className="mt-5 rounded-[1.1rem] border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300">
                  <p className="font-semibold text-white">{plan.price}</p>
                  <ul className="mt-3 space-y-2">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-2"><ChevronRight className="mt-1 text-fuchsia-300" size={14} />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 backdrop-blur">
          <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Video walkthrough</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">A short demo of the Ethnic Story experience</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-400">This walkthrough highlights the public-facing navigation, content flows, and admin screens that support the experience end to end.</p>
          </div>
          <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/70 p-3">
            <video controls playsInline preload="metadata" className="h-full w-full rounded-[1rem] bg-slate-950">
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Scrolling showcase</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">A premium digital experience, built to feel effortless and modern</h2>
          </div>
          <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/70 p-4">
            <motion.div initial={{ x: '-20%' }} animate={{ x: ['-20%', '-50%'] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="flex gap-4 whitespace-nowrap">
              {[...galleryItems, ...galleryItems].map((item, index) => (
                <div key={`${item}-${index}`} className="w-64 rounded-[1.2rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 px-5 py-6 text-lg font-semibold text-white">
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Industries served</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Built for modern service, commerce, and product businesses.</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span key={industry} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">{industry}</span>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-200">Build process</p>
            <ol className="mt-6 space-y-4 text-slate-300">
              {process.map((step, index) => (
                <li key={step} className="flex gap-3"><span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-fuchsia-500/20 text-sm font-semibold text-fuchsia-200">0{index + 1}</span><span>{step}</span></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 backdrop-blur">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Motion flow diagram</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">How the main website and admin systems work together in motion</h2>
          </div>
          <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/80 p-6">
            <motion.svg viewBox="0 0 100 100" className="h-72 w-full" initial={{ opacity: 0.8 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(244,114,182,0.95)" />
                  <stop offset="100%" stopColor="rgba(34,211,238,0.95)" />
                </linearGradient>
              </defs>
              {flowEdges.map((edge, index) => (
                <motion.path
                  key={`${edge.from.x}-${edge.from.y}-${index}`}
                  d={`M ${edge.from.x} ${edge.from.y} C ${(edge.from.x + edge.to.x) / 2} ${edge.from.y - 12}, ${(edge.from.x + edge.to.x) / 2} ${edge.to.y + 12}, ${edge.to.x} ${edge.to.y}`}
                  fill="none"
                  stroke="url(#flowGradient)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0.25 }}
                  animate={{ pathLength: 1, opacity: 0.85 }}
                  transition={{ duration: 1, delay: index * 0.18 }}
                />
              ))}
              {flowNodes.map((node, index) => (
                <motion.g
                  key={node.title}
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.16 }}
                >
                  <rect x={node.x - 12} y={node.y - 10} width="24" height="20" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
                  <circle cx={node.x - 6} cy={node.y} r="1.4" fill="#f472b6" />
                  <text x={node.x - 2} y={node.y - 1.5} textAnchor="middle" fill="#f8fafc" fontSize="2.4" fontWeight="600">{node.title}</text>
                  <text x={node.x - 2} y={node.y + 3.2} textAnchor="middle" fill="#94a3b8" fontSize="1.6">{node.subtitle}</text>
                </motion.g>
              ))}
            </motion.svg>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Let’s build something that grows with your brand.</h2>
            <p className="mt-4 text-slate-300">Share your vision and we’ll shape a roadmap that aligns design, technology, and growth.</p>
            <div className="mt-8 rounded-[1.5rem] border border-fuchsia-500/20 bg-fuchsia-500/10 p-5 text-sm text-slate-300">
              <p className="font-semibold text-white">Final CTA</p>
              <p className="mt-2">“Your business in your hands — is your website helping you lead, convert, and grow, or just sit there?”</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm text-slate-300">
                <span className="mb-2 block">Name</span>
                <input {...register('name')} className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 outline-none ring-0" />
                {errors.name && <p className="mt-2 text-xs text-rose-300">{errors.name.message}</p>}
              </label>
              <label className="text-sm text-slate-300">
                <span className="mb-2 block">Email</span>
                <input {...register('email')} className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 outline-none ring-0" />
                {errors.email && <p className="mt-2 text-xs text-rose-300">{errors.email.message}</p>}
              </label>
            </div>
            <label className="mt-5 block text-sm text-slate-300">
              <span className="mb-2 block">Company</span>
              <input {...register('company')} className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 outline-none ring-0" />
            </label>
            <label className="mt-5 block text-sm text-slate-300">
              <span className="mb-2 block">Project details</span>
              <textarea {...register('project')} rows={5} className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 outline-none ring-0" />
              {errors.project && <p className="mt-2 text-xs text-rose-300">{errors.project.message}</p>}
            </label>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">Send inquiry <ArrowRight size={18} /></button>
          </form>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:px-10">
        <p>© 2026 Culture x Code. Strategy, design, and engineering for modern growth.</p>
        <a href="/privacy" className="text-slate-300 transition hover:text-white">Privacy</a>
      </footer>
    </main>
  );
}
