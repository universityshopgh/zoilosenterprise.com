'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../../subpage.module.css'

export default function SupportAChildPage() {
  useScrollReveal()
  return (
    <div className={styles.page}>
      <header className={styles.header} data-bg="true" style={{ 
        '--watermark': "'SUPPORT'",
        backgroundImage: 'url("/ghana_children1.jpg")'
      } as React.CSSProperties}>
        <div className={styles.headerOverlay}></div>
        <div className={`container ${styles.headerContainer}`}>
          <h1 className="reveal text-gold">Support a Child</h1>
          <p className="reveal stagger-1">Change a life forever. Your sponsorship provides direct, ongoing care to an orphaned child in need.</p>
        </div>
      </header>

      <div className="container">
        <main className={`${styles.content} reveal`}>
          <section>
            <h2>Direct Impact Sponsorship</h2>
            <p>When you sponsor a child through the Zoilos Foundation, you are making a direct, measurable impact. Your contribution bypasses administrative overhead, funding the child's specific educational, medical, and housing needs.</p>
            
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z" fill="currentColor" fillOpacity="0.1"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.5"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
                <h3>Education Tier</h3>
                <p>Funds tuition, uniforms, books, and access to modern learning technology for one year.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                </div>
                <h3>Health Tier</h3>
                <p>Provides comprehensive health insurance, routine checkups, and necessary medications.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" fillOpacity="0.1"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
                <h3>Full Support Tier</h3>
                <p>Complete coverage of housing, food, education, and healthcare for a child's holistic growth.</p>
              </div>
            </div>
          </section>

          <div className={styles.splitLayout} data-reverse="true">
            <div className="reveal">
              <h3>The Journey of Connection</h3>
              <p>Sponsorship is not just a financial transaction; it's a relationship. Sponsors receive quarterly updates, personal letters, and academic progress reports, allowing you to witness the growth and success of the child you support.</p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span>Quarterly Progress Reports</span>
                </li>
                <li className={styles.featureItem}>
                  <span>Secure Communication Portal</span>
                </li>
                <li className={styles.featureItem}>
                  <span>Annual Video Updates</span>
                </li>
              </ul>
            </div>
            <div className={`${styles.splitImage} reveal stagger-1`}>
              <img src="/orphnage_unreal2.jpg" alt="Child Smiling" />
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3>Change a Life Today</h3>
            <p>Give a child the gift of education, health, and a safe place to live. It only takes a minute to start.</p>
            <div className={styles.ctaActions}>
              <Link href="/foundation/donation-portal" className="btn btn-primary">Sponsor a Child</Link>
              <Link href="/foundation" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Back to Foundation</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}