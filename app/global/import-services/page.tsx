'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../../subpage.module.css'

export default function ImportServicesPage() {
  useScrollReveal()
  return (
    <div className={styles.page}>
      <header className={styles.header} data-bg="true" style={{ 
        '--watermark': "'IMPORT'",
        backgroundImage: 'url("https://images.unsplash.com/photo-1578575437130-527eed3abbec")'
      } as React.CSSProperties}>
        <div className={styles.headerOverlay}></div>
        <div className={`container ${styles.headerContainer}`}>
          <h1 className="reveal text-gold">Import Services</h1>
          <p className="reveal stagger-1">Strategic sourcing and procurement from the world's most robust and emerging markets, delivered with unparalleled efficiency.</p>
        </div>
      </header>

      <div className="container">
        <main className={`${styles.content} reveal`}>
          <section>
            <h2>Global Sourcing Network</h2>
            <p>Zoilos Global connects your business to a meticulously vetted network of international suppliers. We handle the complexities of cross-border procurement, from initial sourcing and quality assurance to final delivery at your facility.</p>
            
            <div className={styles.bentoGrid}>
              <div className={`${styles.bentoItem} ${styles.large}`}>
                <img src="/import_export4.jpg" alt="Shipping Container Port" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>High-Volume Procurement</h3>
                  <p>Securing competitive pricing for bulk industrial and commercial goods.</p>
                </div>
              </div>
              <div className={styles.bentoItem}>
                <img src="/import_export1.jpg" alt="Contracts & Negotiation" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>Vendor Negotiation</h3>
                  <p>Expert contract mediation and terms structuring.</p>
                </div>
              </div>
              <div className={styles.bentoItem}>
                <img src="/import_export2.jpg" alt="Quality Control" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>Quality Assurance</h3>
                  <p>On-the-ground inspection prior to shipment.</p>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.splitLayout}>
            <div className="reveal">
              <h3>Seamless Compliance</h3>
              <p>Importing goods requires navigating a labyrinth of international trade laws. Our compliance officers ensure your shipments clear customs rapidly and legally, avoiding costly delays and penalties.</p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span>Tariff Engineering & Minimization</span>
                </li>
                <li className={styles.featureItem}>
                  <span>Automated Customs Brokerage</span>
                </li>
                <li className={styles.featureItem}>
                  <span>Regulatory Documentation (FDA, CE, etc.)</span>
                </li>
              </ul>
            </div>
            <div className={`${styles.splitImage} reveal stagger-1`}>
              <img src="/import_export3.jpg" alt="Customs Documents" />
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3>Ready to Import?</h3>
            <p>Let us handle the sourcing and shipping, so you can focus on growing your business.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">Get Started</Link>
              <Link href="/global" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Back to Global Trade</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}