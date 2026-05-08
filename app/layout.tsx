import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Zoilos — Real Estate · Global Trade · Philanthropy',
    template: '%s | Zoilos',
  },
  description:
    'Zoilos is a multi-purpose holding group delivering excellence in real estate, global import & export, and orphanage support through the Zoilos Foundation.',
  keywords: ['real estate', 'import export', 'charity', 'orphanage', 'zoilos', 'foundation', 'global trade'],
  authors: [{ name: 'Zoilos Group' }],
  creator: 'Zoilos Group',
  metadataBase: new URL('https://zoilos.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zoilos.com',
    siteName: 'Zoilos',
    title: 'Zoilos — Real Estate · Global Trade · Philanthropy',
    description: 'Three pillars of excellence under one prestigious brand.',
  },
  twitter: { card: 'summary_large_image', title: 'Zoilos Group', description: 'Three pillars of excellence.' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
