'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../../subpage.module.css'

export default function CommercialRealEstatePage() {
  useScrollReveal()
  return (
    <div className={styles.page}>
      <header className={styles.header} data-bg="true" style={{ 
        '--watermark': "'COMMERCIAL'",
        backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab")'
      } as React.CSSProperties}>
        <div className={styles.headerOverlay}></div>
        <div className={`container ${styles.headerContainer}`}>
          <h1 className="reveal text-gold">Commercial Real Estate</h1>
          <p className="reveal stagger-1">Institutional-grade investments and corporate real estate solutions designed for maximum yield and strategic positioning.</p>
        </div>
      </header>

      <div className="container">
        <main className={`${styles.content} reveal`}>
          <section>
            <h2>Corporate & Institutional Assets</h2>
            <p>Zoilos Realty provides unparalleled expertise in the acquisition, development, and disposition of commercial assets. Our portfolio includes Class-A office spaces, luxury retail centers, and advanced industrial hubs.</p>
            
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5 21V7l8-4v18" fill="currentColor" fillOpacity="0.1"/><path d="M3 21h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M5 21V7l8-4v18" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M19 21V11l-6-3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 9h2M9 13h2M9 17h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <h3>Class-A Office Towers</h3>
                <p>Prime corporate headquarters in global financial districts with cutting-edge amenities.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M3 6h18l-2 13H5L3 6z" fill="currentColor" fillOpacity="0.1"/><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.5"/><path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <h3>Luxury Retail</h3>
                <p>High-footfall flagship retail locations in the world's most prestigious shopping avenues.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" fill="currentColor" fillOpacity="0.1"/><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                </div>
                <h3>Industrial & Logistics</h3>
                <p>Advanced warehousing and distribution centers strategically located near major trade routes.</p>
              </div>
            </div>
          </section>

          <div className={styles.splitLayout} data-reverse="true">
            <div className="reveal">
              <h3>Strategic Market Intelligence</h3>
              <p>We don't just broker transactions; we provide the macroeconomic data and localized intelligence required to make confident, high-stakes investment decisions.</p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span>Yield Optimization Strategies</span>
                </li>
                <li className={styles.featureItem}>
                  <span>Risk Mitigation & Compliance</span>
                </li>
                <li className={styles.featureItem}>
                  <span>Portfolio Diversification</span>
                </li>
              </ul>
            </div>
            <div className={`${styles.splitImage} reveal stagger-1`}>
              <img src="/realty_unreal2.jpg" alt="Corporate Office" />
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3>Find Your Next Business Space</h3>
            <p>Whether you need a new headquarters or a retail storefront, our team is ready to help you find the perfect location.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
              <Link href="/realty" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Back to Realty</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}