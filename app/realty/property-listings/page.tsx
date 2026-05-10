'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../../subpage.module.css'

export default function PropertyListingsPage() {
  useScrollReveal()
  return (
    <div className={styles.page}>
      <header className={styles.header} data-bg="true" style={{ 
        '--watermark': "'PORTFOLIO'",
        backgroundImage: 'url("/realestate1.jpg")'
      } as React.CSSProperties}>
        <div className={styles.headerOverlay}></div>
        <div className={`container ${styles.headerContainer}`}>
          <h1 className="reveal text-gold">Property Portfolio</h1>
          <p className="reveal stagger-1">Explore our curated collection of elite residential and commercial assets across the world's most sought-after prime locations.</p>
        </div>
      </header>

      <div className="container">
        <main className={`${styles.content} reveal`}>
          <section>
            <h2>Unrivaled Global Access</h2>
            <p>Our property portfolio represents the pinnacle of luxury and institutional real estate. From waterfront villas in coastal reserves to executive penthouses in financial districts, Zoilos Realty offers exclusive access to off-market and premium public listings worldwide.</p>
            
            <div className={styles.bentoGrid}>
              <div className={`${styles.bentoItem} ${styles.large}`}>
                <img src="/realestate2.jpg" alt="Off-Market Acquisitions" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>Off-Market Acquisitions</h3>
                  <p>Exclusive properties reserved for our private client network.</p>
                </div>
              </div>
              <div className={styles.bentoItem}>
                <img src="/realestate3.jpg" alt="Executive Penthouses" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>Executive Penthouses</h3>
                  <p>Skyline views and unparalleled luxury.</p>
                </div>
              </div>
              <div className={styles.bentoItem}>
                <img src="/realestate4.jpg" alt="Private Estates" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>Private Estates</h3>
                  <p>Expansive manors in green-belt valleys.</p>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.splitLayout}>
            <div className="reveal">
              <h3>Curated Acquisition Experience</h3>
              <p>Finding the perfect property requires more than just browsing listings. We provide high-net-worth clients with dedicated agents, immersive digital walkthroughs, and comprehensive investment prospectuses.</p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span>Immersive Virtual Tours</span>
                </li>
                <li className={styles.featureItem}>
                  <span>Dedicated Buying Agents</span>
                </li>
                <li className={styles.featureItem}>
                  <span>In-Depth Property Analytics</span>
                </li>
              </ul>
            </div>
            <div className={`${styles.splitImage} reveal stagger-1`}>
              <img src="/realestate1.jpg" alt="Modern Architecture" />
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3>Unlock Our Private Collection</h3>
            <p>Many of our most stunning properties are not listed publicly. Connect with our team to discover your perfect home.</p>
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