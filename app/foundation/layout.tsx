import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zoilos Foundation — Orphanage Support',
  description: 'The Zoilos Foundation empowers orphaned children through education, healthcare, and community programs. Join us in making a difference.',
}

export default function FoundationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      '--brand-primary':   'var(--found-primary)',
      '--brand-secondary': 'var(--found-secondary)',
      '--brand-accent':    'var(--found-accent)',
      '--brand-bg':        'var(--found-bg)',
    } as React.CSSProperties}>
      {children}
    </div>
  )
}
