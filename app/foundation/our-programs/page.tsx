'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../../subpage.module.css'

export default function OurProgramsPage() {
  useScrollReveal()
  return (
    <div className={styles.page}>
      <header className={styles.header} data-bg="true" style={{ 
        '--watermark': "'PROGRAMS'",
        backgroundImage: 'url("/ghana_school.jpg")'
      } as React.CSSProperties}>
        <div className={styles.headerOverlay}></div>
        <div className={`container ${styles.headerContainer}`}>
          <h1 className="reveal text-gold">Our Programs</h1>
          <p className="reveal stagger-1">Structured, long-term humanitarian initiatives focused on education, healthcare, and sustainable living for orphaned children.</p>
        </div>
      </header>

      <div className="container">
        <main className={`${styles.content} reveal`}>
          <section>
            <h2>Structured Humanitarian Initiatives</h2>
            <p>At Zoilos Foundation, we deploy targeted, long-term programs designed to permanently uplift communities. We avoid temporary fixes, instead opting to build critical infrastructure—schools, clinics, and safe housing—that will serve generations. Our programs are closely monitored and audited to ensure maximal societal return on investment.</p>
            
            <div className={styles.bentoGrid}>
              <div className={`${styles.bentoItem} ${styles.wide}`}>
                <img src="/orphange_unreal4.jpg" alt="Education" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>Educational Infrastructure</h3>
                  <p>Building modern schools and funding comprehensive curriculums.</p>
                </div>
              </div>
              <div className={styles.bentoItem}>
                <img src="/orphanage_unreal1.jpg" alt="Healthcare" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>Pediatric Healthcare</h3>
                  <p>Funding clinics and vital vaccination programs.</p>
                </div>
              </div>
              <div className={styles.bentoItem}>
                <img src="/orphnage_unreal2.jpg" alt="Clean Water" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>Clean Water Projects</h3>
                  <p>Installing sustainable sanitation and water filtration systems.</p>
                </div>
              </div>
              <div className={`${styles.bentoItem} ${styles.wide}`}>
                <img src="/orphanage_unreal3.jpg" alt="Life Skills" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>Vocational Training</h3>
                  <p>Equipping older children with the life skills necessary for independence.</p>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.splitLayout}>
            <div className="reveal">
              <h3>A Holistic Approach to Care</h3>
              <p>We understand that true empowerment requires a multi-faceted approach. Our programs are interconnected, ensuring every child receives the emotional, physical, and intellectual support they need.</p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span>Psychological Support & Mentorship</span>
                </li>
                <li className={styles.featureItem}>
                  <span>Nutritional Security Programs</span>
                </li>
                <li className={styles.featureItem}>
                  <span>Community Integration Grants</span>
                </li>
              </ul>
            </div>
            <div className={`${styles.splitImage} reveal stagger-1`}>
              <img src="/orphange_unreal4.jpg" alt="Children Learning" />
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3>Help Us Do More</h3>
            <p>Join us in making a real difference. Your support helps us build schools, clinics, and safe homes for children who need them most.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">Get Involved</Link>
              <Link href="/foundation" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Back to Foundation</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}