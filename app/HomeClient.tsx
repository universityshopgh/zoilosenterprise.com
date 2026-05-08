'use client'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Home.module.css'

/* ── data ── */
const heroSlides = [
  {
    headline: ['Building', 'Futures,', 'Bridging', 'Worlds.'],
    sub: 'Three pillars of excellence — real estate, global trade, and compassionate philanthropy.',
    cta: { label: 'Explore Our World', href: '/services' },
    bg: 'linear-gradient(135deg, #0B1A2E 0%, #112240 60%, #1a3a6e 100%)',
  },
]

const brands = [
  {
    id:    'realty',
    name:  'Zoilos Realty',
    tag:   'Real Estate',
    href:  '/realty',
    color: '#D4A843',
    dark:  '#0D2B55',
    desc:  'Premium property listings, luxury real estate consulting, and expert property management across prime locations.',
    features: ['Luxury Properties', 'Commercial Spaces', 'Property Management', 'Investment Advisory'],
    stat: { value: '250+', label: 'Properties Sold' },
  },
  {
    id:    'global',
    name:  'Zoilos Global',
    tag:   'Import & Export',
    href:  '/global',
    color: '#FF8F00',
    dark:  '#004D40',
    desc:  'Connecting markets across 40+ countries with reliable import, export, and international logistics solutions.',
    features: ['Import Services', 'Export Solutions', 'Customs Clearance', 'Trade Finance'],
    stat: { value: '15+', label: 'Countries Served' },
  },
  {
    id:    'foundation',
    name:  'Zoilos Foundation',
    tag:   'Philanthropy',
    href:  '/foundation',
    color: '#FF6B35',
    dark:  '#4A1942',
    desc:  'Empowering orphaned children with love, education, healthcare, and the tools to build a brighter tomorrow.',
    features: ['Education Programs', 'Medical Care', 'Mentorship', 'Donation Portal'],
    stat: { value: '700+', label: 'Children Helped' },
  },
]

const testimonials = [
  { quote: 'Zoilos Realty found us our dream home in record time. Their professionalism is unparalleled.', author: 'Sarah M.', role: 'Homeowner', brand: 'Realty', color: '#D4A843' },
  { quote: 'Working with Zoilos Global transformed our supply chain. We now reach markets we never thought possible.', author: 'James K.', role: 'CEO, TradeFirst Ltd', brand: 'Global', color: '#FF8F00' },
  { quote: 'The Foundation\'s work is life-changing. I\'ve seen firsthand the hope they bring to these children.', author: 'Amara N.', role: 'Volunteer', brand: 'Foundation', color: '#FF6B35' },
  { quote: 'Our commercial portfolio grew 40% since partnering with Zoilos Realty. Exceptional service.', author: 'David L.', role: 'Property Investor', brand: 'Realty', color: '#D4A843' },
]

const process = [
  { step: '01', title: 'Discover', desc: 'Tell us your goals — we listen and craft a tailored strategy that matches your vision.' },
  { step: '02', title: 'Design', desc: 'Our experts design a precise action plan with clear milestones and measurable outcomes.' },
  { step: '03', title: 'Deliver', desc: 'We execute with precision, keeping you informed at every stage until results are achieved.' },
  { step: '04', title: 'Grow',    desc: 'We nurture long-term relationships, continuously optimizing for your sustained success.' },
]

export default function HomeClient() {
  useScrollReveal()
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isVisible, setIsVisible]                 = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => setActiveTestimonial(v => (v + 1) % testimonials.length), 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.page}>

      {/* ═══════════ HERO ═══════════ */}
      <section className={styles.hero} ref={heroRef} aria-label="Hero section">


        <div className={`container ${styles.heroContent}`}>
          <div className={`${styles.heroLeft} ${isVisible ? styles.heroVisible : ''}`}>
            <div className={styles.heroBadge}>
              Three Pillars · One Legacy
            </div>
            <h1 className={styles.heroHeadline}>
              {heroSlides[0].headline.slice(0, 2).join(' ')} <br />
              <span className="gradient-text">{heroSlides[0].headline.slice(2).join(' ')}</span>
            </h1>
            <p className={styles.heroSub}>{heroSlides[0].sub}</p>
            <div className={styles.heroCtas}>
              <Link href={heroSlides[0].cta.href} className={`btn btn-primary ${styles.heroBtn}`}>
                {heroSlides[0].cta.label}
              </Link>
              <Link href="/about" className={`btn btn-outline ${styles.heroBtnOutline}`}>
                Our Story
              </Link>
            </div>
          </div>

          <div className={`${styles.heroRight} ${isVisible ? styles.heroVisible : ''}`}>
            <div className={styles.heroStatsBox}>
              <div className={styles.heroStatItem}>
                <span className={styles.statVal}>250+</span>
                <span className={styles.statLabel}>Properties Sold</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.statVal}>15+</span>
                <span className={styles.statLabel}>Countries Served</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.statVal}>700+</span>
                <span className={styles.statLabel}>Children Supported</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ MARQUEE ═══════════ */}
      <div className={styles.marqueeSection} aria-label="Brand highlights">
        <div className={styles.marqueeTrack}>
          {[...Array(2)].map((_, rep) => (
            <div key={rep} className={`marquee-track`}>
              {['Premium Real Estate', '·', 'Global Import & Export', '·', 'Orphanage Foundation', '·',
                'Zoilos Realty', '·', 'Zoilos Global', '·', 'Zoilos Foundation', '·',
                'Excellence In Every Sector', '·', 'Trusted Worldwide', '·'].map((item, i) => (
                <span key={i} className={item === '·' ? styles.marqueeDiv : styles.marqueeItem}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════ BRAND CARDS ═══════════ */}
      <section className={`section ${styles.brandsSection}`} aria-label="Our brands">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Three Pillars of Excellence</h2>
            <p className="section-subtitle">
              Each division operates with specialized expertise — united by one unwavering commitment to quality.
            </p>
          </div>

          <div className={styles.brandsGrid}>
            {brands.map((brand, i) => (
              <div
                key={brand.id}
                className={`${styles.brandCard} tilt-card reveal`}
                data-brand-color={brand.color}
                style={{ '--brand-c': brand.color, '--brand-dark': brand.dark, '--i': i } as React.CSSProperties}
              >
                <div className={styles.brandCardTop}>
                  <span className={styles.brandTag} style={{ color: brand.color, borderColor: brand.color }}>
                    {brand.tag}
                  </span>
                </div>
                <h3 className={styles.brandCardName}>{brand.name}</h3>
                <p className={styles.brandCardDesc}>{brand.desc}</p>
                <ul className={styles.brandFeatures}>
                  {brand.features.map(f => (
                    <li key={f}>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className={styles.brandCardFooter}>
                  <div className={styles.brandStat}>
                    <span className={styles.brandStatVal} style={{ color: brand.color }}>{brand.stat.value}</span>
                    <span className={styles.brandStatLabel}>{brand.stat.label}</span>
                  </div>
                  <Link href={brand.href} className={`btn ${styles.brandCta}`} style={{ background: brand.color }}>
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process section moved to About page for a more high-velocity home experience */}

      {/* ═══════════ GALLERY PREVIEW ═══════════ */}
      <section className={`section ${styles.galleryPreview}`} aria-label="Gallery preview">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Gallery</span>
            <h2 className="section-title">Explore Our World</h2>
            <p className="section-subtitle">From luxury properties to global operations and community impact.</p>
          </div>
          <div className={styles.galleryGrid}>
            {[
              { label: 'Luxury Estates', brand: 'Zoilos Realty', color: '#D4A843', img: '/realty_unreal1.jpg' },
              { label: 'Global Trade Hub', brand: 'Zoilos Global', color: '#FF8F00', img: '/import_export1.jpg' },
              { label: 'Children\'s Welfare', brand: 'Zoilos Foundation', color: '#FF6B35', img: '/orphanage_unreal1.jpg' },
              { label: 'Logistics Network', brand: 'Zoilos Global', color: '#FF8F00', img: '/import_export2.jpg' },
            ].map((item, i) => (
              <div key={i} className={`${styles.galleryItem} reveal stagger-${(i % 4) + 1}`}>
                <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                  <img src={item.img} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${item.color}33, ${item.color}77)`, mixBlendMode: 'multiply' }}></div>
                </div>
                <div className={styles.galleryOverlay}>
                  <span className={styles.galleryBrand} style={{ color: item.color }}>{item.brand}</span>
                  <span className={styles.galleryName}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.galleryAction}>
            <Link href="/gallery" className="btn btn-primary">View Full Gallery →</Link>
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className={`section section--dark ${styles.testimonialSection}`} aria-label="Testimonials">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Trust & Excellence</span>
            <h2 style={{ color: 'var(--zoilos-white)' }}>What Our Partners Say</h2>
          </div>
          
          <div className={styles.testimonialContainer}>
            <button 
              className={styles.navBtn} 
              onClick={() => setActiveTestimonial(v => (v - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <div className={styles.testimonialWrap} role="region" aria-live="polite">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`${styles.testimonialCard} ${i === activeTestimonial ? styles.testimonialActive : ''}`}
                >
                  <div className={styles.testimonialHeader}>
                    <div className={styles.authorAvatar} style={{ borderColor: t.color }}>
                      {t.author[0]}
                    </div>
                  </div>
                  <blockquote className={styles.quoteText}>{t.quote}</blockquote>
                  <footer className={styles.quoteFooter}>
                    <div>
                      <div className={styles.quoteAuthor}>{t.author}</div>
                      <div className={styles.quoteRole}>{t.role} · <span style={{ color: t.color }}>{t.brand}</span></div>
                    </div>
                  </footer>
                  {i === activeTestimonial && <div className={styles.progressBar} style={{ '--c': t.color } as any} />}
                </div>
              ))}
            </div>

            <button 
              className={styles.navBtn} 
              onClick={() => setActiveTestimonial(v => (v + 1) % testimonials.length)}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>

          <div className={styles.testimonialNav}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.testimonialDot} ${i === activeTestimonial ? styles.dotActive : ''}`}
                onClick={() => setActiveTestimonial(i)}
                style={i === activeTestimonial ? { background: testimonials[i].color } : {}}
              />
            ))}
          </div>
          <div className={styles.slideCounter}>
            0{activeTestimonial + 1} / 0{testimonials.length}
          </div>
        </div>

        {/* ── Partner Logos ── */}
        <div className={`container ${styles.partnerLogos} reveal stagger-2`}>
          <div className={styles.partnerTrack}>
            {['Luxury Estate', 'Global Trade Co', 'Humanity First', 'Prime Develop', 'Oceanic Freight'].map(partner => (
              <div key={partner} className={styles.partnerItem}>
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className={`${styles.ctaBanner}`} aria-label="Call to action">
        <div className={styles.ctaBannerBg} aria-hidden="true" />
        <div className={`container ${styles.ctaContent}`}>
          <div className="reveal">
            <span className="section-label" style={{ color: 'var(--zoilos-gold)' }}>Ready to Begin?</span>
            <h2 className={styles.ctaTitle}>Start Your Journey <br />With Zoilos Today</h2>
            <p className={styles.ctaSub}>
              Whether you're looking for your next property, expanding your business globally,
              or making a difference in a child's life — we are here for you.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
              <Link href="/about" className="btn btn-ghost">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
