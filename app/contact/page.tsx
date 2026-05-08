import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact — Zoilos Group',
  description: 'Get in touch with Zoilos Group. Reach our Real Estate, Global Trade, or Foundation teams today.',
}

export default function ContactPage() {
  return <ContactClient />
}
