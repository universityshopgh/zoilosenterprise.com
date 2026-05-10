import type { Metadata } from 'next'
import GlobalClient from './GlobalClient'

export const metadata: Metadata = {
  title: 'Global Trade & Logistics Solutions — Zoilos Group',
  description: 'Your strategic partner for international commerce, supply chain management, and import/export solutions across 45+ countries.',
  keywords: ['Global Trade Ghana', 'Import Export Services', 'Logistics Accra', 'Supply Chain West Africa', 'Zoilos Global Trade'],
}

export default function GlobalPage() {
  return <GlobalClient />
}
