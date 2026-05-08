'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../../subpage.module.css'

export default function ExportSolutionsPage() {
  useScrollReveal()
  return (
    <div className={styles.page}>
      <header className={styles.header} data-bg="true" style={{ 
        '--watermark': "'EXPORT'",
        backgroundImage: 'url("https://images.unsplash.com/photo-1494412651409-8963ce7935a7")'
      } as React.CSSProperties}>
        <div className={styles.headerOverlay}></div>
        <div className={`container ${styles.headerContainer}`}>
          <h1 className="reveal text-gold">Export Solutions</h1>
          <p className="reveal stagger-1">Empowering local industries to dominate global markets through strategic distribution and robust export frameworks.</p>
        </div>
      </header>

      <div className="container">
        <main className={`${styles.content} reveal`}>
          <section>
            <h2>Expanding Your Horizons</h2>
            <p>We provide the architecture necessary for your products to reach international buyers. Zoilos Global eliminates the barriers to entry in foreign markets, managing the entire export lifecycle from origin to destination.</p>
            
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2l7 4v8l-7 4-7-4V6l7-4z" fill="currentColor" fillOpacity="0.1"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="1.5"/><polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="1.5"/><line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
                <h3>Market Penetration Strategy</h3>
                <p>Data-backed roadmaps for entering high-demand international sectors.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" fill="currentColor" fillOpacity="0.1"/><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
                <h3>Freight Consolidation</h3>
                <p>Optimizing load capacity to reduce per-unit shipping costs drastically.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1"/><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <h3>Trade Finance Support</h3>
                <p>Securing Letters of Credit and mitigating cross-border payment risks.</p>
              </div>
            </div>
          </section>

          <div className={styles.splitLayout} data-reverse="true">
            <div className="reveal">
              <h3>The Export Process</h3>
              <p>We transform complex international shipping requirements into a streamlined, predictable operation. Our team manages risk at every juncture so you can focus on manufacturing and scaling.</p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span>Export Licensing & Documentation</span>
                </li>
                <li className={styles.featureItem}>
                  <span>Risk & Cargo Insurance</span>
                </li>
                <li className={styles.featureItem}>
                  <span>End-to-End Tracking</span>
                </li>
              </ul>
            </div>
            <div className={`${styles.splitImage} reveal stagger-1`}>
              <img src="/import_export2.jpg" alt="Cargo Ship" />
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3>Expand Your Reach</h3>
            <p>Ready to sell your products worldwide? We make international selling easy and secure.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">Start Exporting</Link>
              <Link href="/global" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Back to Global Trade</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}