'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './foundation.module.css'

export default function FoundationPage() {
  useScrollReveal()

  return (
    <div className={styles.page}>
      <header className={styles.hero} style={{ '--watermark': "'IMPACT'" } as React.CSSProperties}>
        <div className="container">
          <div className={`${styles.heroContent} reveal`}>
            <span className="section-label" style={{ color: 'var(--found-accent)' }}>Humanitarian Impact</span>
            <h1>Empowering Brighter <br/>Futures</h1>
            <p>At Zoilos Foundation, we believe every child deserves a chance to thrive. We provide education, healthcare, and safe housing to orphaned children across the globe.</p>
            <div className={styles.heroActions}>
              <Link href="/foundation/donation-portal" className="btn btn-primary" style={{ background: 'var(--found-accent)', color: 'var(--found-primary)' }}>Contribute Now</Link>
              <Link href="/foundation/our-programs" className="btn btn-outline" style={{ color: 'white' }}>View Initiatives</Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── Foundation Stats ── */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={`${styles.statsGrid} reveal`}>
            {[
              { label: 'Children Supported', val: '700+' },
              { label: 'Schools Funded', val: '150+' },
              { label: 'Medical Programs', val: '50+' },
              { label: 'Communities', val: '25+' },
            ].map((s, i) => (
              <div key={s.label} className={`stagger-${i}`}>
                <div className={styles.statItem}>
                  <span className={styles.statVal}>{s.val}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <div className="section-header reveal">
            <span className="section-label">Our Impact</span>
            <h2>Direct Change in the Community</h2>
          </div>
          <div className={styles.impactGrid}>
            <div className={`${styles.impactCard} reveal stagger-0`}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--found-accent)', letterSpacing: '0.15em', display: 'block', marginBottom: '1.5rem' }}>01 / LEARNING</span>
              <h3>Education</h3>
              <p>Funding schools, building infrastructure, and providing necessary educational materials to ensure long-term intellectual growth.</p>
            </div>
            <div className={`${styles.impactCard} reveal stagger-1`}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--found-accent)', letterSpacing: '0.15em', display: 'block', marginBottom: '1.5rem' }}>02 / WELLNESS</span>
              <h3>Healthcare</h3>
              <p>Ensuring every child in our care has access to critical medical support, vaccinations, and continuous health monitoring.</p>
            </div>
            <div className={`${styles.impactCard} reveal stagger-2`}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--found-accent)', letterSpacing: '0.15em', display: 'block', marginBottom: '1.5rem' }}>03 / SHELTER</span>
              <h3>Safe Housing</h3>
              <p>Building and maintaining secure, nurturing environments where vulnerable children can grow without fear.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.mission}`}>
        <div className="container">
          <div className={styles.twoCol}>
            <div className="reveal">
              <div className={styles.textBlock}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', color: 'var(--found-primary)' }}>100% Transparency</h3>
                <p style={{ color: '#4a5a6a', lineHeight: '1.8' }}>We operate with zero administrative overhead applied to public donations. Every single contribution goes directly into our fieldwork, ensuring maximum impact for every dollar given.</p>
              </div>
            </div>
            <div className="reveal stagger-1">
              <h2>Join Our Mission</h2>
              <p>The Zoilos Foundation is fueled by compassion and community support. There are many ways to get involved and make a lasting difference.</p>
              <div className={styles.serviceLinks}>
                {[
                  { name: 'Our Programs', href: '/foundation/our-programs' },
                  { name: 'Support a Child', href: '/foundation/support-a-child' },
                  { name: 'Volunteer', href: '/foundation/volunteer' },
                  { name: 'Donation Portal', href: '/foundation/donation-portal' },
                ].map(s => (
                  <Link key={s.href} href={s.href} className={styles.serviceLink} style={{ color: '#4a5a6a', fontWeight: 'bold' }}>
                    <span style={{ color: 'var(--found-accent)' }}>—</span> {s.name}
                  </Link>
                ))}
              </div>
              <div className={styles.actions}>
                <Link href="/contact" className="btn btn-primary">Make an Impact</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
