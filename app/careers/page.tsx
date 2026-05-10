'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './careers.module.css'

export default function CareersPage() {
  useScrollReveal()
  const roles = [
    { title: 'Senior Property Consultant', dept: 'Realty', loc: 'Global Strategic HQ' },
    { title: 'Logistics Operations Manager', dept: 'Global', loc: 'International Port Hub' },
    { title: 'Program Director', dept: 'Foundation', loc: 'Regional Office' },
    { title: 'Digital Transformation Lead', dept: 'Corporate', loc: 'Hybrid / Remote' },
  ]

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <h1 className="reveal">Build Your Legacy</h1>
          <p className="reveal stagger-1">Join a world-class team shaping the future of global commerce.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.cultureGrid}>
            <div className={`${styles.cultureText} reveal`}>
              <span className="section-label">Join the Vision</span>
              <h2>Why Zoilos Group?</h2>
              <p>Working at Zoilos means being part of a high-performance ecosystem. We value innovation, integrity, and the courage to tackle global challenges across three distinct industries.</p>
              <div className={styles.valuesList}>
                {['Global Exposure', 'Innovative Culture', 'Competitive Benefits', 'Direct Social Impact'].map((v, i) => (
                  <div key={v} className={`${styles.valueItem} reveal stagger-${i}`}>
                    {v}
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.spotlight} reveal stagger-1`}>
              <h3>Employee Spotlight</h3>
              <p>"At Zoilos, my career has spanned continents. I've moved from luxury real estate in Europe to managing trade routes in Asia. The mobility and support here are unmatched."</p>
              <span className={styles.spotlightAuthor}>— David Chen, Senior Partner</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.rolesSection}>
        <div className="container">
          <div className="section-header reveal text-center">
             <span className="section-label">Opportunities</span>
             <h2>Current Openings</h2>
          </div>
          
          <div className={styles.rolesGrid}>
            {roles.map((r, i) => (
              <div key={i} className={`${styles.roleCard} reveal stagger-${i}`}>
                <div className={styles.roleInfo}>
                  <h4>{r.title}</h4>
                  <span className={styles.roleMeta}>
                    {r.dept} · {r.loc}
                  </span>
                </div>
                <Link href="/contact" className="btn btn-outline">Apply Position</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark text-center">
        <div className="container reveal">
          <h2>Don't see a role for you?</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>We are always looking for visionary talent. Send us your CV and a brief cover letter.</p>
          <div style={{ marginTop: '3rem' }}>
            <Link href="mailto:example@gmail.com" className="btn btn-primary">General Application</Link>
          </div>
        </div>
      </section>
    </div>
  )
}