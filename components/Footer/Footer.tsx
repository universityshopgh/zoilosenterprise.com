'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'

const year = new Date().getFullYear()

const footerBrands = [
  {
    name:    'Zoilos Realty',
    href:    '/realty',
    color:   '#D4A843',
    desc:    'Premium property listings, real estate consulting, and development services.',
    links:   ['Property Listings', 'Commercial Real Estate', 'Property Management', 'Valuation Services'],
  },
  {
    name:    'Zoilos Global',
    href:    '/global',
    color:   '#FF8F00',
    desc:    'Connecting markets worldwide through reliable import, export, and logistics.',
    links:   ['Import Services', 'Export Solutions', 'Logistics & Freight', 'Trade Consulting'],
  },
  {
    name:    'Zoilos Foundation',
    href:    '/foundation',
    color:   '#FF6B35',
    desc:    'Empowering orphaned children with care, education, and a path to a bright future.',
    links:   ['Our Programs', 'Support a Child', 'Volunteer', 'Donation Portal'],
  },
]

const companyLinks = ['Home', 'Gallery', 'Services', 'About Us', 'Contact', 'Careers', 'Privacy Policy', 'Terms of Service']

const stats = [
  { value: '250+', label: 'Properties Sold' },
  { value: '15+',  label: 'Countries Reached' },
  { value: '700+', label: 'Children Supported' },
  { value: '12+',  label: 'Years of Excellence' },
]

const socials = [
  { 
    name: 'LinkedIn',  
    href: '#', 
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
  },
  { 
    name: 'Twitter/X', 
    href: '#', 
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
  },
  { 
    name: 'YouTube', 
    href: '#', 
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
  },
  { 
    name: 'Facebook',  
    href: '#', 
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  },
]

export default function Footer() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = new FormData(form)
    
    try {
      const response = await fetch('https://formspree.io/f/maqarozz', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
      if (response.ok) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <footer className={styles.footer} role="contentinfo">

      {/* ── Newsletter Strip ── */}
      <div className={styles.newsletter}>
        <div className={`container ${styles.newsletterInner}`}>
          <div className={styles.newsletterText}>
            <span className={styles.newsLabel}>Stay Updated</span>
            <h3 className={styles.newsTitle}>Join the Zoilos Community</h3>
            <p>Get the latest news on properties, global trade insights, and our foundation's impact.</p>
          </div>
          <div className={styles.formContainer}>
            {status === 'success' ? (
              <div className={styles.successState}>
                <span className={styles.successIcon}>✓</span>
                <p>Thank you for joining our community!</p>
              </div>
            ) : (
              <form className={styles.newsletterForm} onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="Email"
                  placeholder="Enter your email address"
                  className={styles.emailInput}
                  aria-label="Email address for newsletter"
                  required
                  disabled={status === 'loading'}
                />
                <button 
                  type="submit" 
                  className={`btn btn-primary ${styles.subBtn}`}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Subscribe'}
                </button>
                {status === 'error' && <p className={styles.errorMsg}>✕ Please try again.</p>}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map(s => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className={styles.body}>
        <div className="container">
          <div className={styles.footerGrid}>

            {/* Brand Column */}
            <div className={styles.brandCol}>
              {/* Logo */}
              <div className={styles.footerLogo}>
                <img src="/logo_zoilos.png" alt="Zoilos Group" className={styles.footerLogoImg} />
              </div>
              <p className={styles.brandDesc}>
                A prestigious holding group delivering excellence across three pillars —
                Real Estate, Global Trade, and Philanthropy.
              </p>
              {/* Social */}
              <div className={styles.socials}>
                {socials.map(s => (
                  <a key={s.name} href={s.href} className={styles.socialBtn} aria-label={s.name} rel="noopener noreferrer">
                    {s.icon}
                  </a>
                ))}
              </div>
              {/* Contact Quick */}
                <div className={styles.contactRow}>
                  <span className={styles.label}>Email:</span>
                  <span>kingsfordappiah0000@gmail.com</span>
                </div>
                <div className={styles.contactRow}>
                  <span className={styles.label}>Phone:</span>
                  <span>+233 59 976 4428</span>
                </div>
                <div className={styles.contactRow}>
                  <span className={styles.label}>Location:</span>
                  <span>Global Strategic Headquarters</span>
                </div>
            </div>

            {/* Company Links */}
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Company</h4>
              <ul className={styles.linkList}>
                {companyLinks.map(l => {
                  const href = l === 'Home' ? '/' : l === 'About Us' ? '/about' : `/${l.toLowerCase().replace(/ /g, '-')}`;
                  return (
                    <li key={l}>
                      <Link href={href} className={styles.footerLink}>
                        {l}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Brand Columns */}
            {footerBrands.map(brand => (
              <div key={brand.name} className={styles.linksCol}>
                <Link href={brand.href} className={styles.colTitleLink} style={{ color: brand.color }}>
                  <h4 className={styles.colTitle} style={{ color: brand.color }}>{brand.name}</h4>
                </Link>
                <p className={styles.brandMini}>{brand.desc}</p>
                <ul className={styles.linkList}>
                  {brand.links.map(l => (
                    <li key={l}>
                      <Link href={`${brand.href}/${l.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')}`} className={styles.footerLink}>
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            © {year} <strong>Zoilos Group</strong>. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy" className={styles.bottomLink}>Privacy</Link>
            <span className={styles.sep}>·</span>
            <Link href="/terms" className={styles.bottomLink}>Terms</Link>
            <span className={styles.sep}>·</span>
            <Link href="/sitemap" className={styles.bottomLink}>Sitemap</Link>
          </div>
          <div className={styles.bottomBrands}>
            <span
              className={styles.bottomBrandTag}
              style={{ '--c': '#D4A843' } as React.CSSProperties}
            >Realty</span>
            <span
              className={styles.bottomBrandTag}
              style={{ '--c': '#FF8F00' } as React.CSSProperties}
            >Global</span>
            <span
              className={styles.bottomBrandTag}
              style={{ '--c': '#FF6B35' } as React.CSSProperties}
            >Foundation</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
