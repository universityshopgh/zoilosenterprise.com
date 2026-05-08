import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Zoilos — Real Estate · Global Trade · Philanthropy',
  description: 'Zoilos Group: A prestigious multi-purpose holding delivering excellence in real estate, global import & export, and orphanage philanthropy.',
}

export default function HomePage() {
  return <HomeClient />
}
