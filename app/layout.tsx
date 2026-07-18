import type { Metadata } from 'next'
import './globals.css'
import NavWrapper from '@/components/NavWrapper'

export const metadata: Metadata = {
  title: 'molkarinfotech — Technology that grows your business',
  description:
    'A boutique technology partner for small and medium businesses. Custom-built digital solutions — e-commerce, web apps, AI integration — at a price point that delivers real ROI. You own everything.',
  keywords: ['Next.js agency', 'custom website development', 'AI features', 'admin portal', 'e-commerce'],
  openGraph: {
    title: 'molkarinfotech',
    description: 'Technology that grows your business.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavWrapper />
        <div className="page-wrapper">
          {children}
        </div>
      </body>
    </html>
  )
}
