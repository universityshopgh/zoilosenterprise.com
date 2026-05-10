'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../../subpage.module.css'

export default function TradeConsultingPage() {
  useScrollReveal()
  return (
    <div className={styles.page}>
      <header className={styles.header} data-bg="true" style={{ 
        '--watermark': "'CONSULTING'",
        backgroundImage: 'url("/import1.jpg")'
      } as React.CSSProperties}>
        <div className={styles.headerOverlay}></div>
        <div className={`container ${styles.headerContainer}`}>
          <h1 className="reveal text-gold">Trade Consulting</h1>
          <p className="reveal stagger-1">Actionable intelligence, regulatory mastery, and strategic foresight for the modern global enterprise.</p>
        </div>
      </header>

      <div className="container">
        <main className={`${styles.content} reveal`}>
          <section>
            <h2>Navigating Global Complexity</h2>
            <p>International expansion is fraught with regulatory, financial, and logistical risks. Zoilos Global's trade advisory board partners with executive teams to demystify foreign markets, providing the roadmap necessary for successful and compliant cross-border operations.</p>
            
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><polygon points="12 2 2 7 12 12 22 7 12 2" fill="currentColor" fillOpacity="0.1"/><polygon points="12 2 2 7 12 12 22 7 12 2" stroke="currentColor" strokeWidth="1.5"/><polyline points="2 17 12 22 22 17" stroke="currentColor" strokeWidth="1.5"/><polyline points="2 12 12 17 22 12" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
                <h3>Market Entry Strategy</h3>
                <p>Comprehensive feasibility studies, competitor analysis, and localization roadmaps.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.1"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
                <h3>Regulatory Compliance</h3>
                <p>Ensuring absolute adherence to international sanctions, tariffs, and trade laws.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M9.5 12h5a3.5 3.5 0 0 1 0 7H6" fill="currentColor" fillOpacity="0.1"/><line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="1.5"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <h3>Supply Chain Finance</h3>
                <p>Optimizing working capital and structuring secure international payment facilities.</p>
              </div>
            </div>
          </section>

          <div className={styles.splitLayout} data-reverse="true">
            <div className="reveal">
              <h3>The Zoilos Advisory Advantage</h3>
              <p>Our consultants are seasoned trade diplomats, economists, and supply chain architects. We do not offer theoretical advice; we provide executable strategies that directly impact your bottom line.</p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span>Geopolitical Risk Assessment</span>
                </li>
                <li className={styles.featureItem}>
                  <span>Tariff Mitigation Planning</span>
                </li>
                <li className={styles.featureItem}>
                  <span>Customs Audit Defense</span>
                </li>
              </ul>
            </div>
            <div className={`${styles.splitImage} reveal stagger-1`}>
              <img src="/import2.jpg" alt="Consulting Meeting" />
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3>Need Expert Advice?</h3>
            <p>Talk to our team about your international trade goals and learn how we can help you succeed.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">Talk to an Expert</Link>
              <Link href="/global" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Back to Global Trade</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}