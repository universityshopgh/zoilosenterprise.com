'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../legal.module.css'

export default function SitemapPage() {
  useScrollReveal()
  const sections = [
    {
      title: 'Company',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
        { name: 'Careers', href: '/careers' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
      ]
    },
    {
      title: 'Zoilos Realty',
      links: [
        { name: 'Realty Hub', href: '/realty' },
        { name: 'Property Listings', href: '/realty/property-listings' },
        { name: 'Commercial Real Estate', href: '/realty/commercial-real-estate' },
        { name: 'Property Management', href: '/realty/property-management' },
        { name: 'Valuation Services', href: '/realty/valuation-services' },
      ]
    },
    {
      title: 'Zoilos Global',
      links: [
        { name: 'Global Hub', href: '/global' },
        { name: 'Import Services', href: '/global/import-services' },
        { name: 'Export Solutions', href: '/global/export-solutions' },
        { name: 'Logistics & Freight', href: '/global/logistics-and-freight' },
        { name: 'Trade Consulting', href: '/global/trade-consulting' },
      ]
    },
    {
      title: 'Zoilos Foundation',
      links: [
        { name: 'Foundation Hub', href: '/foundation' },
        { name: 'Our Programs', href: '/foundation/our-programs' },
        { name: 'Support a Child', href: '/foundation/support-a-child' },
        { name: 'Volunteer', href: '/foundation/volunteer' },
        { name: 'Donation Portal', href: '/foundation/donation-portal' },
      ]
    }
  ]

  return (
    <div className={styles.page}>
      <header className={styles.header} style={{ '--watermark': "'STRUCTURE'" } as React.CSSProperties}>
        <div className="container">
          <h1 className="reveal">Platform Sitemap</h1>
          <p className="reveal stagger-1">A complete architectural map of the Zoilos Group digital ecosystem.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={`${styles.content} reveal`} style={{ maxWidth: '1000px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
              {sections.map((section, idx) => (
                <section key={section.title} className={`reveal stagger-${idx}`}>
                  <h3 style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '1.5rem', 
                    marginBottom: '1.5rem', 
                    color: 'var(--zoilos-navy)',
                    borderBottom: '2px solid var(--zoilos-gold)',
                    display: 'inline-block',
                    paddingBottom: '0.5rem'
                  }}>
                    {section.title}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {section.links.map(link => (
                      <Link 
                        key={link.href} 
                        href={link.href}
                        style={{ 
                          color: '#64748b', 
                          textDecoration: 'none', 
                          fontSize: '0.95rem', 
                          fontWeight: '600',
                          transition: 'all 0.3s' 
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--zoilos-gold)'
                          e.currentTarget.style.paddingLeft = '5px'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#64748b'
                          e.currentTarget.style.paddingLeft = '0'
                        }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className={styles.ctaBox}>
              <h3>Need Further Assistance?</h3>
              <p>Can't find what you're looking for? Our team is available for direct inquiries.</p>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/contact" className="btn btn-primary">Contact Support</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}