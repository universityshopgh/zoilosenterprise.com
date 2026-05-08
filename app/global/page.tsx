'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './global.module.css'

export default function GlobalPage() {
  useScrollReveal()

  return (
    <div className={styles.page}>
      <header className={styles.hero} style={{ '--watermark': "'TRADE'" } as React.CSSProperties}>
        <div className="container">
          <div className={`${styles.heroContent} reveal`}>
            <span className="section-label" style={{ color: 'var(--global-accent)' }}>Global Trade & Logistics</span>
            <h1>Bridging Continents <br/>With Precision</h1>
            <p>Your strategic partner in international commerce. We provide seamless end-to-end import, export, and supply chain solutions across 45+ countries.</p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn-primary" style={{ background: 'var(--global-accent)', color: 'var(--global-primary)' }}>Initiate Trade</Link>
              <Link href="/global/logistics-and-freight" className="btn btn-outline" style={{ color: 'white' }}>Supply Chain Architecture</Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── Global Stats ── */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={`${styles.statsGrid} reveal`}>
            {[
              { label: 'Countries Served', val: '15+' },
              { label: 'Tons Shipped', val: '500K+' },
              { label: 'Trade Partners', val: '250+' },
              { label: 'Core Trade Hubs', val: '15+' },
            ].map((s, i) => (
              <div key={s.label} className={`stagger-${i}`}>
                <div className={styles.statItem}>
                  <span className={styles.statVal}>{s.val}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.twoCol}>
            <div className="reveal">
              <h2>Import Services</h2>
              <p>We source high-quality materials and goods from trusted international partners, handling all compliance, regulatory frameworks, and customs documentation with absolute precision.</p>
              <div className={styles.serviceLinks}>
                {[
                  { name: 'Import Services', href: '/global/import-services' },
                  { name: 'Export Solutions', href: '/global/export-solutions' },
                  { name: 'Logistics & Freight', href: '/global/logistics-and-freight' },
                  { name: 'Trade Consulting', href: '/global/trade-consulting' },
                ].map(s => (
                  <Link key={s.href} href={s.href} className={styles.serviceLink} style={{ color: '#4a5a6a', fontWeight: 'bold' }}>
                    <span style={{ color: 'var(--global-accent)' }}>—</span> {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="reveal stagger-1">
              <div className={styles.textBlock}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', color: 'var(--global-primary)' }}>Regulatory Compliance</h3>
                <p style={{ color: '#4a5a6a', lineHeight: '1.8' }}>Navigating international trade laws requires deep expertise. Zoilos Global ensures 100% adherence to all cross-border regulations, minimizing delays and maximizing throughput.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.altBg}`}>
        <div className="container">
          <div className={styles.twoCol}>
            <div className="reveal">
              <div className={styles.textBlock} style={{ background: 'white' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', color: 'var(--global-primary)' }}>Global Distribution Network</h3>
                <p style={{ color: '#4a5a6a', lineHeight: '1.8' }}>Leverage our established network of distribution hubs across 3 continents to penetrate new markets rapidly and efficiently.</p>
              </div>
            </div>
            <div className="reveal stagger-1">
              <h2>Export Solutions</h2>
              <p>Expand your reach. We help local businesses scale into international markets with efficient export strategies and robust logistical support.</p>
              <ul className={styles.checkList}>
                <li>Market Entry Strategy</li>
                <li>Export Documentation</li>
                <li>International Logistics</li>
                <li>Trade Finance Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={`${styles.ctaBox} reveal`}>
            <h2>Streamline Your Supply Chain</h2>
            <p>Our experts are ready to architect your international trade operations.</p>
            <div className={styles.actions} style={{ marginTop: '2.5rem' }}>
              <Link href="/contact" className="btn btn-primary" style={{ background: 'white', color: 'var(--global-primary)' }}>Request a Trade Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
