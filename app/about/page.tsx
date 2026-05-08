import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About Us — Zoilos Group',
  description: 'Learn about Zoilos Group — our mission, vision, leadership team, and the story behind three pillars of excellence.',
}

export default function AboutPage() {
  return <AboutClient />
}
