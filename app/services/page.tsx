import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const ServicesClient = dynamic(() => import('./ServicesClient'), { ssr: false })

export const metadata: Metadata = {
  title: 'Services — Zoilos Group',
  description: 'Discover the comprehensive services offered by Zoilos Group across Real Estate, Import & Export, and Philanthropy.',
}

export default function ServicesPage() {
  return <ServicesClient />
}
