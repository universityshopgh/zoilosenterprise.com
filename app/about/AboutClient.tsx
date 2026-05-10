'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './about.module.css'

export default function AboutClient() {
  useScrollReveal()

  return (
    <div className={styles.page} suppressHydrationWarning>
      <header className={styles.header}>
        <div className="container">
          <h1 className="reveal">About Zoilos</h1>
          <p className="reveal stagger-1">Rooted in excellence, driven by purpose.</p>
        </div>
      </header>

      <section className="section">
        <div className="container container--narrow">
          <div className={`${styles.content} reveal`}>
            <span className="section-label">Executive Summary</span>
            <h2>Building Legacies Through<br />Strategic Investment</h2>
            <p>Zoilos Group was founded on the principle that business should be a force for both economic growth and social good. What started as a focused real estate firm has evolved into a multi-disciplinary holding group with global reach, connecting markets and supporting communities.</p>
            
            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <h3>OUR VISION</h3>
                <p>To be the global benchmark for diversified excellence, bridging the gap between luxury, commerce, and humanitarian impact.</p>
              </div>
              <div className={styles.pillar}>
                <h3>OUR MISSION</h3>
                <p>To deliver unparalleled value in real estate and trade while creating sustainable, direct impact through our philanthropic foundation.</p>
              </div>
            </div>
            
            <div className={`${styles.summaryActions} reveal stagger-2`}>
              <Link href="/contact" className="btn btn-primary">Partner With Us</Link>
              <Link href="/gallery" className="btn btn-outline">Explore Portfolio</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Core Values</span>
            <h2>What Drives Us</h2>
          </div>
          <div className={styles.valuesGrid}>
            {[
              { title: 'Integrity', desc: 'Operating with unwavering honesty in every transaction.' },
              { title: 'Excellence', desc: 'Setting higher standards in everything we pursue.' },
              { title: 'Innovation', desc: 'Embracing modern solutions for age-old challenges.' },
              { title: 'Compassion', desc: 'Ensuring our growth benefits those who need it most.' }
            ].map((value, i) => (
              <div key={value.title} className={`${styles.valueCard} reveal stagger-${i}`}>
                <span className={styles.valueNumber}>{i + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={`section section--dark ${styles.processSection}`}>
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Methodology</span>
            <h2 style={{ color: 'white' }}>How We Deliver Excellence</h2>
            <p className="section-subtitle">A proven four-step framework powering every engagement across all our divisions.</p>
          </div>
          <div className={styles.processGrid}>
            {[
              { step: '01', title: 'Discover', desc: 'Tell us your goals — we listen and craft a tailored strategy that matches your vision.' },
              { step: '02', title: 'Design', desc: 'Our experts design a precise action plan with clear milestones and measurable outcomes.' },
              { step: '03', title: 'Deliver', desc: 'We execute with precision, keeping you informed at every stage until results are achieved.' },
              { step: '04', title: 'Grow',    desc: 'We nurture long-term relationships, continuously optimizing for your sustained success.' },
            ].map((p, i) => (
              <div key={p.step} className={`${styles.processCard} reveal stagger-${i + 1}`}>
                <div className={styles.processNum}>{p.step}</div>
                <h3 className={styles.processTitle}>{p.title}</h3>
                <p className={styles.processDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }} className="reveal stagger-5">
            <Link href="/contact" className="btn btn-ghost">Initiate A Project</Link>
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Leadership</span>
            <h2>The Visionaries Behind Zoilos</h2>
            <p className="section-subtitle">A team of industry experts committed to driving global excellence and community impact.</p>
          </div>
          <div className={styles.leadershipGrid}>
            {[
              { name: 'Dr. Arthur Zoilos', role: 'CEO & Founder', bio: 'Over 25 years leading international trade and property development across West Africa and beyond.', img: '/ceo.jpg' },
              { name: 'Kwaku Appiah', role: 'Head of Operations, Ghana', bio: 'Expert in supply chain logistics and West African emerging market strategy.', img: '/managerbetter.jpg' },
            ].map((leader, i) => (
              <Link href={`/contact?subject=Connecting with ${leader.name}`} key={leader.name} className={`${styles.leaderCard} reveal stagger-${i}`}>
                <div className={styles.leaderImg}>
                  <img src={leader.img} alt={leader.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className={styles.leaderInfo}>
                  <h3>{leader.name}</h3>
                  <span className={styles.leaderRole}>{leader.role}</span>
                  <p className={styles.leaderBio}>{leader.bio}</p>
                  <span className={styles.leaderLink}>Connect &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className="container reveal">
          <h2>Be Part of Our Story</h2>
          <p>Whether as a client, partner, or supporter — join us in building a better future.</p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className="btn btn-primary">Work With Us</Link>
            <Link href="/careers" className="btn btn-outline">View Careers</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
