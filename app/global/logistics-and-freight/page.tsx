'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../../subpage.module.css'

export default function LogisticsFreightPage() {
  useScrollReveal()
  return (
    <div className={styles.page}>
      <header className={styles.header} data-bg="true" style={{ 
        '--watermark': "'LOGISTICS'",
        backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d")'
      } as React.CSSProperties}>
        <div className={styles.headerOverlay}></div>
        <div className={`container ${styles.headerContainer}`}>
          <h1 className="reveal text-gold">Logistics & Freight</h1>
          <p className="reveal stagger-1">Air, Ocean, and Land. A synchronized global transportation network designed for speed, security, and scale.</p>
        </div>
      </header>

      <div className="container">
        <main className={`${styles.content} reveal`}>
          <section>
            <h2>Multi-Modal Transportation</h2>
            <p>Zoilos Global architects resilient supply chains. We operate a vast network of freight forwarders, carriers, and 3PL partners to ensure your cargo moves uninterrupted across borders, oceans, and skies.</p>
            
            <div className={styles.bentoGrid}>
              <div className={`${styles.bentoItem} ${styles.tall}`}>
                <img src="/import_export1.jpg" alt="Ocean Freight" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>Ocean Freight</h3>
                  <p>FCL and LCL shipping for high-volume, cost-effective global transport.</p>
                </div>
              </div>
              <div className={styles.bentoItem}>
                <img src="/import_export2.jpg" alt="Air Freight" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>Air Freight</h3>
                  <p>Express delivery for time-sensitive and high-value commodities.</p>
                </div>
              </div>
              <div className={styles.bentoItem}>
                <img src="/import_export3.jpg" alt="Land Transport" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>Ground Logistics</h3>
                  <p>Robust rail and trucking networks for seamless final-mile delivery.</p>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.splitLayout}>
            <div className="reveal">
              <h3>Advanced Supply Chain Visibility</h3>
              <p>In the modern era of trade, visibility is just as important as velocity. Our logistics platform provides real-time tracking, predictive delay modeling, and transparent milestone reporting.</p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span>Real-Time GPS Tracking</span>
                </li>
                <li className={styles.featureItem}>
                  <span>Cold Chain Management</span>
                </li>
                <li className={styles.featureItem}>
                  <span>Dynamic Route Optimization</span>
                </li>
              </ul>
            </div>
            <div className={`${styles.splitImage} reveal stagger-1`}>
              <img src="/import_export4.jpg" alt="Warehouse Operations" />
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3>Ship With Confidence</h3>
            <p>Tell us what you need to move, and we'll handle the logistics from start to finish.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">Get a Shipping Quote</Link>
              <Link href="/global" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Back to Global Trade</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}