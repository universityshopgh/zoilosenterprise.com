'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../../subpage.module.css'

export default function VolunteerPage() {
  useScrollReveal()
  return (
    <div className={styles.page}>
      <header className={styles.header} data-bg="true" style={{ 
        '--watermark': "'VOLUNTEER'",
        backgroundImage: 'url("/ghana_community.jpg")'
      } as React.CSSProperties}>
        <div className={styles.headerOverlay}></div>
        <div className={`container ${styles.headerContainer}`}>
          <h1 className="reveal text-gold">Volunteer</h1>
          <p className="reveal stagger-1">Give your time, share your skills, and be the hands that help build a brighter tomorrow.</p>
        </div>
      </header>

      <div className="container">
        <main className={`${styles.content} reveal`}>
          <section>
            <h2>Join Our Global Network</h2>
            <p>The Zoilos Foundation thrives on the dedication of our global volunteers. Whether you are a medical professional, an educator, an engineer, or simply someone with a heart to serve, we have a place for you in our field operations.</p>
            
            <div className={styles.bentoGrid}>
              <div className={`${styles.bentoItem} ${styles.tall}`}>
                <img src="/orphange_unreal4.jpg" alt="Teaching Volunteer" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>Educational Support</h3>
                  <p>Assist teachers, tutor students, and help organize extracurricular developmental programs.</p>
                </div>
              </div>
              <div className={styles.bentoItem}>
                <img src="/orphanage_unreal1.jpg" alt="Medical Volunteer" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>Medical Missions</h3>
                  <p>Doctors, nurses, and specialists providing critical care in our clinics.</p>
                </div>
              </div>
              <div className={styles.bentoItem}>
                <img src="/orphnage_unreal2.jpg" alt="Construction Volunteer" className={styles.bentoImg} />
                <div className={styles.bentoContent}>
                  <h3>Infrastructure Builders</h3>
                  <p>Engineers and laborers helping construct safe housing and schools.</p>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.splitLayout}>
            <div className="reveal">
              <h3>The Application Process</h3>
              <p>We take the safety of our children very seriously. All volunteers must undergo a comprehensive background check and interview process before deployment to our field sites.</p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span>1. Submit Application & Credentials</span>
                </li>
                <li className={styles.featureItem}>
                  <span>2. Background Screening & Interview</span>
                </li>
                <li className={styles.featureItem}>
                  <span>3. Orientation & Field Deployment</span>
                </li>
              </ul>
            </div>
            <div className={`${styles.splitImage} reveal stagger-1`}>
              <img src="/orphanage_unreal3.jpg" alt="Volunteers Team" />
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3>Want to Help Out?</h3>
            <p>We are always looking for passionate people to join our team. Send us a message to see how you can help.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">Become a Volunteer</Link>
              <Link href="/foundation" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Back to Foundation</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}