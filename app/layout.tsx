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
    default: 'Zoilos Group — Real Estate · Global Trade · Philanthropy in Ghana',
    template: '%s | Zoilos Group',
  },
  description:
    'Zoilos Group is a premier multi-sector holding company in Ghana specializing in luxury real estate, global logistics (import/export), and charitable initiatives through the Zoilos Foundation.',
  keywords: [
    'Zoilos Group', 
    'Real Estate Ghana', 
    'Accra Luxury Homes', 
    'Global Trade West Africa', 
    'Import Export Ghana', 
    'Zoilos Foundation', 
    'Philanthropy Ghana',
    'Ghana Business Group',
    'Property Management Accra',
    'Logistics Solutions Ghana'
  ],
  authors: [{ name: 'Zoilos Group' }],
  creator: 'Zoilos Group',
  metadataBase: new URL('https://zoilosenterprise.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/zoiloslogo.jpeg',
    shortcut: '/zoiloslogo.jpeg',
    apple: '/zoiloslogo.jpeg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zoilosenterprise.com',
    siteName: 'Zoilos Group',
    title: 'Zoilos Group — Excellence in Real Estate, Trade & Philanthropy',
    description: 'Discover the three pillars of Zoilos: Luxury Realty, Strategic Global Trade, and Impactful Philanthropy in Ghana.',
    images: [
      {
        url: '/ghana_hero_bg.png',
        width: 1200,
        height: 630,
        alt: 'Zoilos Group Ghana',
      },
      {
        url: '/zoiloslogo.jpeg',
        width: 800,
        height: 800,
        alt: 'Zoilos Group Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoilos Group',
    description: 'Excellence in Real Estate, Global Trade, and Philanthropy.',
    images: ['/ghana_hero_bg.png', '/zoiloslogo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Zoilos Group',
              url: 'https://zoilosenterprise.com',
              logo: 'https://zoilosenterprise.com/zoiloslogo.jpeg',
              image: 'https://zoilosenterprise.com/zoiloslogo.jpeg',
              sameAs: [
                'https://www.facebook.com/zoilosgroup',
                'https://www.linkedin.com/company/zoilosgroup',
                'https://www.instagram.com/zoilosgroup',
              ],
              description: 'A prestigious multi-purpose holding group specializing in real estate, global trade, and philanthropy in Ghana.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Accra',
                addressCountry: 'GH',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+233-000-000-000',
                contactType: 'customer service',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
