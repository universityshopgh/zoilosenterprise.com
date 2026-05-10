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
              <span className="section-label" style={{ color: 'var(--global-accent)' }}>Logistics Excellence</span>
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
              <div style={{ height: '450px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <img src="/import1.jpg" alt="Import Services" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.altBg}`} style={{ background: '#f0f4f8' }}>
        <div className="container">
          <div className={styles.twoCol}>
            <div className="reveal">
              <div style={{ height: '450px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <img src="/import2.jpg" alt="Export Solutions" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="reveal stagger-1">
              <span className="section-label" style={{ color: 'var(--global-accent)' }}>Global Expansion</span>
              <h2>Export Solutions</h2>
              <p>Expand your reach. We help local businesses scale into international markets with efficient export strategies and robust logistical support.</p>
              <ul className={styles.checkList} style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                {['Market Entry Strategy', 'Export Documentation', 'International Logistics', 'Trade Finance Support'].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', fontWeight: 600, color: 'var(--global-primary)' }}>
                    <span style={{ color: 'var(--global-accent)', fontSize: '1.2rem' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal text-center">
            <span className="section-label">Operations</span>
            <h2>Our Global Infrastructure</h2>
            <p className="section-subtitle">A robust network of logistics hubs and trade corridors spanning five continents.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
            {[1, 2, 3, 4, 5].map(num => (
              <div key={num} className="reveal stagger-1" style={{ height: '350px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
                <img src={`/import${num}.jpg`} alt={`Logistics Infrastructure ${num}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
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
