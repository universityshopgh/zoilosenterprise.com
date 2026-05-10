import type { Metadata } from 'next'
import RealtyClient from './RealtyClient'

export const metadata: Metadata = {
  title: 'Real Estate & Property Management in Ghana',
  description: 'Explore Zoilos Realty — your premier partner for luxury residential and high-yield commercial properties in Accra and across Ghana.',
  keywords: ['Ghana Real Estate', 'Accra Luxury Homes', 'Property Management Ghana', 'Commercial Property Accra', 'Zoilos Realty'],
}

export default function RealtyPage() {
  return <RealtyClient />
}
