import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zoilos Global — Import & Export',
  description: 'Connecting global markets with reliable import, export, and international trade solutions across 40+ countries.',
}

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      '--brand-primary':   'var(--global-primary)',
      '--brand-secondary': 'var(--global-secondary)',
      '--brand-accent':    'var(--global-accent)',
      '--brand-bg':        'var(--global-bg)',
    } as React.CSSProperties}>
      {children}
    </div>
  )
}
