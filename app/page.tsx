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
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Case study</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Ethnic Story AI Gen</h2>
              <p className="mt-4 text-lg text-slate-300">A featured use case showing how we combine storytelling, systems design, and AI-enabled product thinking to create platforms that help businesses move faster, convert better, and operate with more confidence.</p>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3"><CircleDollarSign className="mt-1 text-fuchsia-300" size={18} /> Built a conversion-first narrative that turns curiosity into qualified inquiries and deeper engagement.</div>
                <div className="flex items-start gap-3"><MessageSquareText className="mt-1 text-fuchsia-300" size={18} /> Added AI-assisted discovery flows so visitors can explore complex offerings without friction.</div>
                <div className="flex items-start gap-3"><Building2 className="mt-1 text-fuchsia-300" size={18} /> Delivered a multi-layer admin portal for content, campaigns, users, analytics, and secure operations.</div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ['Launch-ready experience', 'Fast, elegant storytelling with a premium visual system and clear conversion paths.'],
                ['AI-powered discovery', 'Intelligent search and content recommendations that make complex offerings easier to navigate.'],
                ['Secure admin operations', 'Role-based tools for internal teams to manage content, users, and growth initiatives safely.'],
                ['Scalable deployment', 'A cloud-ready architecture built for future growth, new integrations, and evolving business needs.'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                  <p className="text-lg font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
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

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 backdrop-blur">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Feature intelligence</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">The capabilities that make a difference in real-world use</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {useCaseHighlights.map((item) => (
              <motion.div key={item.title} whileHover={{ y: -4, scale: 1.01 }} className="rounded-[1.35rem] border border-white/10 bg-white/5 p-5">
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 backdrop-blur">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-200">Supported features</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Every capability is designed to create measurable business value</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-400">These features matter because they improve trust, speed, conversion, and control across the full customer and team journey.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featurePanels.map((panel) => (
              <motion.div key={panel.title} whileHover={{ y: -4, scale: 1.01 }} className={`rounded-[1.35rem] border border-white/10 bg-gradient-to-br ${panel.accent} p-5`}>
                <p className="text-lg font-semibold text-white">{panel.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{panel.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Capabilities</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">What you can expect when we build with you</h2>
              <ul className="mt-6 space-y-3 text-slate-300">
                {capabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3"><ChevronRight className="mt-1 text-cyan-300" size={18} />{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-200">Differentiators</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Why this approach stands apart</h2>
              <ul className="mt-6 space-y-3 text-slate-300">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start gap-3"><ChevronRight className="mt-1 text-fuchsia-300" size={18} />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-200">Services</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Built for ambitious digital growth.</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <motion.article key={service.title} whileHover={{ y: -4, scale: 1.01 }} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
              <service.icon className="text-fuchsia-300" size={24} />
              <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{service.description}</p>
            </motion.article>
          ))}
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
