'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../../subpage.module.css'

export default function ValuationServicesPage() {
  useScrollReveal()
  return (
    <div className={styles.page}>
      <header className={styles.header} data-bg="true" style={{ 
        '--watermark': "'VALUATION'",
        backgroundImage: 'url("/realestate3.jpg")'
      } as React.CSSProperties}>
        <div className={styles.headerOverlay}></div>
        <div className={`container ${styles.headerContainer}`}>
          <h1 className="reveal text-gold">Valuation Services</h1>
          <p className="reveal stagger-1">Precise, data-driven real estate appraisals and market analyses for high-stakes financial decisions.</p>
        </div>
      </header>

      <div className="container">
        <main className={`${styles.content} reveal`}>
          <section>
            <h2>Data-Driven Asset Pricing</h2>
            <p>Accuracy is paramount in high-value real estate. Our chartered surveyors and financial analysts utilize proprietary market data, macroeconomic indicators, and deep localized knowledge to deliver unimpeachable property valuations.</p>
            
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" fillOpacity="0.1"/><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 9h18" stroke="currentColor" strokeWidth="1.5"/><path d="M9 21V9" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
                <h3>Portfolio Valuation</h3>
                <p>Comprehensive appraisals for multi-asset corporate and private portfolios.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M3 21l3-9 3 9 3-9 3 9 3-9v9H3z" fill="currentColor" fillOpacity="0.1"/><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                </div>
                <h3>Market Analysis</h3>
                <p>In-depth feasibility studies and predictive market trend forecasting.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M9.5 12h5a3.5 3.5 0 0 1 0 7H6" fill="currentColor" fillOpacity="0.1"/><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <h3>Tax & Litigation</h3>
                <p>Defensible, legally compliant valuations for tax restructuring and dispute resolution.</p>
              </div>
            </div>
          </section>

          <div className={styles.bentoGrid}>
            <div className={`${styles.bentoItem} ${styles.tall}`}>
              <img src="/realestate3.jpg" alt="Concierge Service" className={styles.bentoImg} />
              <div className={styles.bentoContent}>
                <h3>White-Glove Tenant Relations</h3>
                <p>24/7 concierge-level support for premium residential and commercial tenants.</p>
              </div>
            </div>
            <div className={styles.bentoItem}>
              <img src="/realestate4.jpg" alt="Financial Reporting" className={styles.bentoImg} />
              <div className={styles.bentoContent}>
                <h3>Transparent Financials</h3>
                <p>Real-time, audited financial reporting on asset performance.</p>
              </div>
            </div>
            <div className={styles.bentoItem}>
              <img src="/realestate1.jpg" alt="Preventative Maintenance" className={styles.bentoImg} />
              <div className={styles.bentoContent}>
                <h3>Proactive Maintenance</h3>
                <p>Predictive upkeep to prevent depreciation.</p>
              </div>
            </div>
          </div>

          <div className={styles.splitLayout} data-reverse="true">
            <div className="reveal">
              <h3>Why Zoilos Valuation?</h3>
              <p>We provide absolute clarity in an opaque market. Our reports are trusted by major financial institutions, global family offices, and sovereign wealth funds.</p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span>RICS Regulated Surveyors</span>
                </li>
                <li className={styles.featureItem}>
                  <span>Proprietary Market Data Algorithms</span>
                </li>
                <li className={styles.featureItem}>
                  <span>Strict Confidentiality Protocols</span>
                </li>
              </ul>
            </div>
            <div className={`${styles.splitImage} reveal stagger-1`}>
              <img src="/realestate3.jpg" alt="Modern Apartment" />
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3>Know What Your Property is Worth</h3>
            <p>Get a clear, accurate assessment of your property's current market value from our local experts.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">Get an Estimate</Link>
              <Link href="/realty" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Back to Realty</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}