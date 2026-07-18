import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Culture x Code | Premium digital experiences for cultural brands',
  description: 'Culture x Code builds custom websites, AI features, secure admin portals, and scalable digital products for modern businesses.',
  keywords: ['Next.js agency', 'custom website development', 'AI features', 'admin portal', 'e-commerce'],
  openGraph: {
    title: 'Culture x Code',
    description: 'Premium digital experiences for cultural-tech brands.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Culture x Code',
    description: 'Premium digital experiences for cultural-tech brands.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
