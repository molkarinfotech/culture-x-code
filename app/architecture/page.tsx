import type { Metadata } from 'next'
import ArchitectureClient from './ArchitectureClient'

export const metadata: Metadata = {
  title: 'Architecture — molkarinfotech',
  description:
    'Technical architecture overview of the Ethnic Story platform — Next.js, Supabase, Stripe, and Google Vision API on Vercel.',
}

export default function ArchitecturePage() {
  return <ArchitectureClient />
}
