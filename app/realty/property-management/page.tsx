'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../../subpage.module.css'

export default function PropertyManagementPage() {
  useScrollReveal()
  return (
    <div className={styles.page}>
      <header className={styles.header} data-bg="true" style={{ 
        '--watermark': "'MANAGEMENT'",
        backgroundImage: 'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00")'
      } as React.CSSProperties}>
        <div className={styles.headerOverlay}></div>
        <div className={`container ${styles.headerContainer}`}>
          <h1 className="reveal text-gold">Property Management</h1>
          <p className="reveal stagger-1">Institutional-grade asset management ensuring your investments operate at peak efficiency and maximum profitability.</p>
        </div>
      </header>

      <div className="container">
        <main className={`${styles.content} reveal`}>
          <section>
            <h2>Preserving Asset Value</h2>
            <p>Zoilos Realty employs rigorous analytical frameworks and white-glove service standards to manage your portfolio. We handle every detail, from tenant relations and legal compliance to proactive maintenance and financial reporting.</p>
            
            <div className={styles.bentoGrid}>
              <div className={`${styles.bentoItem} ${styles.tall}`}>
                <img src="/realty_unreal4.jpg" alt="Concierge Service" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>White-Glove Tenant Relations</h3>
                  <p>24/7 concierge-level support for premium residential and commercial tenants.</p>
                </div>
              </div>
              <div className={styles.bentoItem}>
                <img src="/realty_unreal1.jpg" alt="Financial Reporting" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>Transparent Financials</h3>
                  <p>Real-time, audited financial reporting on asset performance.</p>
                </div>
              </div>
              <div className={styles.bentoItem}>
                <img src="/realty_unreal2.jpg" alt="Preventative Maintenance" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>Proactive Maintenance</h3>
                  <p>Predictive upkeep to prevent depreciation.</p>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.splitLayout}>
            <div className="reveal">
              <h3>The Zoilos Standard</h3>
              <p>We do not simply maintain buildings; we elevate communities. Our management style actively increases property value through strategic upgrades and meticulous operational oversight.</p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span>Legal & Regulatory Compliance</span>
                </li>
                <li className={styles.featureItem}>
                  <span>Vendor & Contractor Management</span>
                </li>
                <li className={styles.featureItem}>
                  <span>Sustainability & Energy Optimization</span>
                </li>
              </ul>
            </div>
            <div className={`${styles.splitImage} reveal stagger-1`}>
              <img src="/realty_unreal3.jpg" alt="Modern Apartment" />
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3>Let Us Handle the Details</h3>
            <p>From finding great tenants to handling maintenance, we take the stress out of owning property.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">Talk to Our Team</Link>
              <Link href="/realty" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Back to Realty</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}