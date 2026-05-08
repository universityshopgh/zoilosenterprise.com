import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zoilos Realty — Premium Real Estate',
  description: 'Discover luxury properties, expert real estate consulting, and premium property management services with Zoilos Realty.',
}

export default function RealtyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      '--brand-primary':   'var(--realty-primary)',
      '--brand-secondary': 'var(--realty-secondary)',
      '--brand-accent':    'var(--realty-accent)',
      '--brand-bg':        'var(--realty-bg)',
    } as React.CSSProperties}>
      {children}
    </div>
  )
}
