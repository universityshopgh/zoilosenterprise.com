import type { Metadata } from 'next'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
  title: 'Gallery — Zoilos Group',
  description: 'Explore Zoilos Group\'s portfolio: luxury properties, global trade operations, and foundation impact through our curated gallery.',
}

export default function GalleryPage() {
  return <GalleryClient />
}
