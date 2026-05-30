import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/providers/SmoothScrollProvider'
import ThemeProvider from '@/providers/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lur AI — Intelligence Without Limits',
  description:
    'The most advanced AI platform built for visionaries, creators, and enterprises who demand more from artificial intelligence.',
  keywords: ['AI', 'artificial intelligence', 'Lur AI', 'machine learning', 'enterprise AI'],
  openGraph: {
    title: 'Lur AI — Intelligence Without Limits',
    description: 'Next-generation AI platform engineered for those who refuse to accept limits.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="bg-lur-black text-white antialiased overflow-x-hidden">
        <ThemeProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

