'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './realty.module.css'

export default function RealtyPage() {
  useScrollReveal()

  const listings = [
    { id: 1, title: 'Zoilos Luxury Heights', loc: 'Airport Residential, Accra', price: '$1.5M', img: '/realestate1.jpg' },
    { id: 2, title: 'The Emerald Gardens', loc: 'East Legon, Ghana', price: '$2.2M', img: '/realestate2.jpg' },
    { id: 3, title: 'Sapphire Waterfront', loc: 'Ada Foah, Coastal Region', price: '$3.8M', img: '/realestate3.jpg' },
    { id: 4, title: 'Grand Regency Estate', loc: 'Kumasi Metropolitan', price: '$1.2M', img: '/realestate4.jpg' },
  ]

  return (
    <div className={styles.page}>
      <header className={styles.hero} style={{ '--watermark': "'ESTATES'" } as React.CSSProperties}>
        <div className="container">
          <div className={`${styles.heroContent} reveal`}>
            <span className="section-label" style={{ color: 'var(--realty-accent)' }}>Real Estate Excellence</span>
            <h1>Premier Property <br/>Portfolio</h1>
            <p>Discover a curated collection of luxury residential and high-yield commercial properties across the world's most sought-after locations.</p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn-primary" style={{ background: 'var(--realty-accent)', color: 'var(--realty-primary)' }}>Schedule a Consultation</Link>
              <Link href="/realty/property-listings" className="btn btn-outline" style={{ color: 'white' }}>View Portfolio</Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── Realty Stats ── */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={`${styles.statsGrid} reveal`}>
            {[
              { label: 'Properties Managed', val: '50+' },
              { label: 'Portfolio Value', val: '$120M+' },
              { label: 'Prime Locations', val: '7+' },
              { label: 'Client Retention', val: '98%' },
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
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Exclusive Portfolio</span>
            <h2>Our Premier Properties</h2>
          </div>
          <div className={styles.listingsGrid}>
            {listings.map((l, i) => (
              <div key={l.id} className={`${styles.listingCard} reveal stagger-${i}`} style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ height: '240px', width: '100%', position: 'relative' }}>
                  <img src={l.img} alt={l.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'white', padding: '0.4rem 0.8rem', fontSize: '0.75rem', fontWeight: 800, color: 'var(--realty-accent)', letterSpacing: '0.15em', borderRadius: 'var(--radius-sm)' }}>FEATURED LISTING</span>
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{l.title}</h3>
                  <p style={{ color: '#4a5a6a', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{l.loc}</p>
                  <span className={styles.price} style={{ display: 'block', fontSize: '1.5rem', color: 'var(--realty-primary)', fontWeight: 600, marginBottom: '2rem' }}>{l.price}</span>
                  <Link href="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Request Prospectus</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.services}`}>
        <div className="container">
          <div className={styles.twoCol}>
            <div className="reveal">
              <div className={styles.textBlock}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', color: 'var(--realty-primary)' }}>Institutional Grade Management</h3>
                <p style={{ color: '#4a5a6a', lineHeight: '1.8' }}>We apply rigorous analytical frameworks to real estate asset management, ensuring that every property within the Zoilos Group portfolio operates at maximum efficiency and profitability.</p>
              </div>
            </div>
            <div className="reveal stagger-1">
              <h2>Comprehensive Real Estate Services</h2>
              <p>Our team of experts provides end-to-end support for buyers, sellers, and corporate investors.</p>
              <div className={styles.serviceLinks}>
                {[
                  { name: 'Property Listings', href: '/realty/property-listings' },
                  { name: 'Commercial Real Estate', href: '/realty/commercial-real-estate' },
                  { name: 'Property Management', href: '/realty/property-management' },
                  { name: 'Valuation Services', href: '/realty/valuation-services' },
                ].map(s => (
                  <Link key={s.href} href={s.href} className={styles.serviceLink} style={{ color: '#4a5a6a', fontWeight: 'bold' }}>
                    <span style={{ color: 'var(--realty-accent)' }}>—</span> {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

