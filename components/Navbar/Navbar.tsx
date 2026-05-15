'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Home',     href: '/'         },
  { label: 'About Us', href: '/about'    },
  { label: 'Contact',  href: '/contact'  },
  { label: 'Services', href: '/services' },
  { label: 'Gallery',  href: '/gallery'  },
]

const brands = [
  { 
    label: 'Realty',     
    href: '/realty',     
    color: '#D4A843',
    tag: 'Real Estate Excellence',
    subLinks: [
      { name: 'Property Listings', href: '/realty/property-listings' },
      { name: 'Commercial Real Estate', href: '/realty/commercial-real-estate' },
      { name: 'Property Management', href: '/realty/property-management' },
      { name: 'Valuation Services', href: '/realty/valuation-services' },
    ]
  },
  { 
    label: 'Global',     
    href: '/global',     
    color: '#FF8F00',
    tag: 'International Trade',
    subLinks: [
      { name: 'Import Services', href: '/global/import-services' },
      { name: 'Export Solutions', href: '/global/export-solutions' },
      { name: 'Logistics & Freight', href: '/global/logistics-and-freight' },
      { name: 'Trade Consulting', href: '/global/trade-consulting' },
    ]
  },
  { 
    label: 'Foundation', 
    href: '/foundation', 
    color: '#FF6B35',
    tag: 'Humanitarian Impact',
    subLinks: [
      { name: 'Our Programs', href: '/foundation/our-programs' },
      { name: 'Support a Child', href: '/foundation/support-a-child' },
      { name: 'Volunteer', href: '/foundation/volunteer' },
      { name: 'Donation Portal', href: '/foundation/donation-portal' },
    ]
  },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [brandOpen, setBrandOpen] = useState(false)
  const pathname = usePathname()
  const brandRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setBrandOpen(false)
  }, [pathname])

  const activeBrand = brands.find(b => pathname.startsWith(b.href))
  const displayColor = '#0B1A2E' // Consistent Corporate Navy for all pages

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (brandRef.current && !brandRef.current.contains(e.target as Node)) {
        setBrandOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Top Utility Bar */}
      <div className={styles.topBar}>
        <div className={`${styles.topInner} container`}>
          <div className={styles.topInfo}>
            <span>info@zoilosenterprise.com</span>
            <span className={styles.topSep}>|</span>
            <span>+233 24 345 3547</span>
          </div>
          <div className={styles.topMeta}>
             <span>Global Strategic Headquarters</span>
          </div>
        </div>
      </div>

      <nav 
        className={styles.navbar} 
        style={{ '--nav-brand-color': displayColor } as React.CSSProperties}
        role="navigation" 
        aria-label="Main navigation"
      >
        <div className={`${styles.inner} container`}>

          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Zoilos Home">
            <img src="/zoiloslogo.jpeg" alt="Zoilos Group" className={styles.navbarLogoImg} />
          </Link>

          {/* Desktop Links */}
          <ul className={styles.navLinks} role="menubar">
            {navLinks.map(link => (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  role="menuitem"
                  className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Brand Switcher + CTA */}
          <div className={styles.rightActions}>
            <div className={styles.brandSwitcher} ref={brandRef}>
              <button
                className={styles.brandPill}
                onClick={() => setBrandOpen(v => !v)}
                aria-expanded={brandOpen}
                aria-haspopup="true"
                id="brand-switcher-btn"
                style={activeBrand ? { borderColor: activeBrand.color, color: activeBrand.color } : {}}
              >
                {activeBrand ? activeBrand.label : 'Our Brands'}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`${styles.chevron} ${brandOpen ? styles.flip : ''}`}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {brandOpen && (
                <div className={styles.megaMenu} role="menu" aria-labelledby="brand-switcher-btn">
                  <div className={styles.megaInner}>
                    {brands.map(b => (
                      <div key={b.href} className={styles.megaCol}>
                        <Link href={b.href} className={styles.megaTitle} style={{ color: b.color }}>
                          {b.label}
                          <span className={styles.megaTag}>{b.tag}</span>
                        </Link>
                        <div className={styles.megaLinks}>
                          {b.subLinks.map(sub => (
                            <Link key={sub.href} href={sub.href} className={styles.megaLink}>
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.megaFooter}>
                    <p>Zoilos Group — Integrated Excellence Since 2008</p>
                    <Link href="/about" className={styles.megaMore}>Our Story →</Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>
              Get in Touch
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className={styles.mobileInner}>
          <nav>
            <ul className={styles.mobileLinks}>
              {navLinks.map((link, i) => (
                <li key={link.href} className={styles.mobileLinkItem} style={{ '--i': i } as React.CSSProperties}>
                  <Link
                    href={link.href}
                    className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileLinkActive : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.mobileBrands}>
              <p className={styles.mobileBrandsLabel}>Our Brands</p>
              {brands.map((b, i) => (
                <Link
                  key={b.href}
                  href={b.href}
                  className={styles.mobileBrandLink}
                  style={{ '--i': i + navLinks.length, '--c': b.color } as React.CSSProperties}
                >
                  <span style={{ background: b.color, width: 8, height: 8, borderRadius: '50%', display: 'inline-block' }} />
                  Zoilos {b.label}
                </Link>
              ))}
            </div>
          </nav>
          <Link href="/contact" className={`btn btn-primary ${styles.mobileCtaBtn}`}>
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </>
  )
}
