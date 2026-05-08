'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../../subpage.module.css'

export default function DonationPortalPage() {
  useScrollReveal()
  return (
    <div className={styles.page}>
      <header className={styles.header} data-bg="true" style={{ 
        '--watermark': "'DONATE'",
        backgroundImage: 'url("https://images.unsplash.com/photo-1532629345422-7515f3d16bb6")'
      } as React.CSSProperties}>
        <div className={styles.headerOverlay}></div>
        <div className={`container ${styles.headerContainer}`}>
          <h1 className="reveal text-gold">Donation Portal</h1>
          <p className="reveal stagger-1">100% of your donation goes directly to the field. No administrative overhead, just pure impact.</p>
        </div>
      </header>

      <div className="container">
        <main className={`${styles.content} reveal`}>
          <section>
            <h2>Secure & Transparent Giving</h2>
            <p>Every dollar you contribute to the Zoilos Foundation is meticulously tracked and deployed directly into our active humanitarian projects. We utilize institutional-grade auditing to ensure absolute financial transparency.</p>
            
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" fill="currentColor" fillOpacity="0.1"/><line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="1.5"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <h3>One-Time Gift</h3>
                <p>Provide immediate, critical funds for our active disaster relief and medical missions.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.92-10.44l5.67-5.67" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3>Monthly Partnership</h3>
                <p>Sustain our long-term educational and housing projects with a recurring donation.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="currentColor" fillOpacity="0.1"/><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
                <h3>Corporate Matching</h3>
                <p>Double your impact by participating in our corporate matched-giving programs.</p>
              </div>
            </div>
          </section>

          <div className={styles.splitLayout} data-reverse="true">
            <div className="reveal">
              <h3>Where Your Money Goes</h3>
              <p>The Zoilos Group completely subsidizes the administrative and operational costs of the Foundation. This unique corporate structure means that 100% of public donations are utilized in the field.</p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span>45% — Educational Infrastructure</span>
                </li>
                <li className={styles.featureItem}>
                  <span>35% — Medical & Nutritional Care</span>
                </li>
                <li className={styles.featureItem}>
                  <span>20% — Safe Housing & Operations</span>
                </li>
              </ul>
            </div>
            <div className={`${styles.splitImage} reveal stagger-1`}>
              <img src="/orphnage_unreal2.jpg" alt="Community Support" />
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3>Give with Confidence</h3>
            <p>Every penny you give goes straight to helping kids. Thank you for making a difference.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">Donate Now</Link>
              <Link href="/foundation" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Back to Foundation</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}