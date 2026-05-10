import type { Metadata } from 'next'
import FoundationClient from './FoundationClient'

export const metadata: Metadata = {
  title: 'Zoilos Foundation — Philanthropy & Orphanage Support',
  description: 'Join the Zoilos Foundation in our mission to empower vulnerable children in Ghana through education, healthcare, and safe housing.',
  keywords: ['Zoilos Foundation', 'Charity Ghana', 'Orphanage Support Africa', 'Philanthropy Accra', 'Donate to Ghana'],
}

export default function FoundationPage() {
  return <FoundationClient />
}
