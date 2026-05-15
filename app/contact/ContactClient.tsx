'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './contact.module.css'

export default function ContactClient() {
  useScrollReveal()
  const [mounted, setMounted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    setMounted(true)
  }, [])

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
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className={styles.page}>

      {/* ── Hero Split Section ── */}
      <section className={styles.heroSection}>
        {/* Decorative background elements */}
        <div className={styles.bgGlow1} />
        <div className={styles.bgGlow2} />
        
        {/* Left: Image Panel */}
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImagePanel}>
            <Image
              src="/contact_girl.jpg"
              alt="contact_girl"
              fill
              priority
              className={styles.heroImg}
            />
            {/* Overlay gradient */}
            <div className={styles.heroImgOverlay} />


            {/* Decorative Corner */}
            <div className={styles.imageCorner} />

            {/* Stats strip */}
            <div className={`${styles.heroStats} reveal stagger-3`}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>24/7</span>
                <span className={styles.heroStatLabel}>Support</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>2</span>
                <span className={styles.heroStatLabel}>Countries</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>100+</span>
                <span className={styles.heroStatLabel}>Clients</span>
              </div>
            </div>
          </div>
          {/* Secondary background layer for depth */}
          <div className={styles.imageBackdrop} />
        </div>

        {/* Right: Content panel */}
        <div className={styles.heroContent}>
          <div className={styles.contentInner}>
            <span className="section-label reveal">Get in Touch</span>
            <h1 className={`${styles.heroTitle} reveal stagger-1`}>
              We're Here<br />
              <span className={styles.heroTitleAccent}>Strategic Partnerships.</span>
            </h1>
            <p className={`${styles.heroSub} reveal stagger-2`}>
              Whether you need premium real estate, global trade expertise, or want to support our Foundation — our team in Accra is ready to assist.
            </p>

            {/* Contact Methods */}
            <div className={`${styles.contactMethods} reveal stagger-3`}>
              <a href="tel:+233243453547" className={styles.method}>
                <div className={styles.methodIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 9.63a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 2.18 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.91 8.15a16 16 0 0 0 6.94 6.94l1.51-1.52a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3>Direct Line</h3>
                  <p>+233 24 345 3547</p>
                </div>
              </a>
              <a href="mailto:info@zoilosenterprise.com" className={styles.method}>
                <div className={styles.methodIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h3>Official Email</h3>
                  <p>info@zoilosenterprise.com</p>
                </div>
              </a>
              <a href="https://wa.me/233243453547" target="_blank" rel="noopener noreferrer" className={styles.method}>
                <div className={styles.methodIcon} style={{ background: '#25D366', color: 'white', borderColor: '#25D366' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.6c.9 0 1.8.2 2.6.5l5.2-1.6-1.6 5.2c.3.8.5 1.7.5 2.6z" />
                  </svg>
                </div>
                <div>
                  <h3>WhatsApp Business</h3>
                  <p>Message Us Directly</p>
                </div>
              </a>
              <a 
                href="https://www.google.com/maps/place/ZOILOS+ENTERPRISE/@5.6537021,-0.0683621,17z" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.method}
              >
                <div>
                  <h3>Strategic HQ</h3>
                  <p>Accra, Ghana — View Map</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Presence Section ── */}
      <section className={styles.mapSection}>
        <div className="container">
          <div className="section-header reveal text-center">
            <span className="section-label">Global Network</span>
            <h2>Bridging Two Nations</h2>
            <p className="section-subtitle">With established operations in Ghana and international trade routes, we are your local partner with a global reach.</p>
          </div>
          
          <div className={`${styles.presenceGrid} reveal`}>
            <div className={styles.presenceCard}>
              <h3>Accra, Ghana</h3>
              <p>Strategic Headquarters & Realty Hub</p>
              <div className={styles.presenceDetails}>
                <span>Prime District Office</span>
                <span>In-Country Logistics Support</span>
              </div>
            </div>
            <div className={styles.presenceDivider}>
              <div className={styles.line} />
              <div className={styles.planeIcon}>✈</div>
              <div className={styles.line} />
            </div>
            <div className={styles.presenceCard}>
              <h3>International Trade</h3>
              <p>Global Sourcing & Export Network</p>
              <div className={styles.presenceDetails}>
                <span>2 Countries Primary Focus</span>
                <span>Global Strategic Partnerships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive Map Section ── */}
      <section className={styles.interactiveMapSection}>
        <div className="container">
          <div className={styles.mapWrap}>
            <div className={`${styles.mapInfo} reveal`}>
              <span className="section-label">Visit Us</span>
              <h2>Our Strategic Headquarters</h2>
              <p>Located in the heart of Accra's business hub, our office is designed for strategic consulting and global trade coordination.</p>
              <div className={styles.mapAddress}>
                <div>
                  <strong>ZOILOS ENTERPRISE</strong>
                  <p>Accra, Ghana</p>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/place/ZOILOS+ENTERPRISE/@5.6537021,-0.0683621,17z" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ marginTop: '2rem' }}
              >
                Get Directions →
              </a>
            </div>
            <div className={`${styles.mapIframeWrap} reveal stagger-1`}>
              {mounted && (
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.662241630138!2d-0.07093702391060965!3d5.653702094327575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf8166d22f0d51%3A0xdcd31ace6b8810bd!2sZOILOS%20ENTERPRISE!5e0!3m2!1sen!2sgh!4v1715733300000!5m2!1sen!2sgh" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqHeader}>
            <h2 className="reveal">Frequently Asked Questions</h2>
          </div>
          <div className={styles.faqGrid}>
            {[
              { q: 'How can I view property listings?', a: 'You can browse our current residential and commercial portfolio in the Realty section. For private, off-market acquisitions, please contact our senior consultants directly.' },
              { q: 'What countries do you operate in?', a: 'We currently maintain primary operations in 2 countries, specializing in West African trade corridors and global logistics routes.' },
              { q: 'How can I support the Zoilos Foundation?', a: 'Visit our Foundation page to learn about our orphanage programs. You can support us through donations, volunteering, or corporate partnerships.' },
              { q: 'What is your response time for inquiries?', a: 'Our team aims to respond to all business inquiries within 12-24 business hours.' },
            ].map((item, i) => (
              <div key={i} className={`${styles.faqItem} reveal stagger-${i}`}>
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.formWrapOuter}>
            <div className={`${styles.formHeader} reveal`}>
              <span className="section-label">Send a Message</span>
              <h2>Start the Conversation</h2>
              <p>Fill out the form below and a member of our team will get back to you promptly.</p>
            </div>

            <div className={`${styles.formWrap} reveal stagger-1`}>
              {status === 'success' ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out to Zoilos Group. A representative will contact you shortly.</p>
                  <button className="btn btn-outline" onClick={() => setStatus('idle')}>Send Another Message</button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name</label>
                      <input name="Name" id="name" type="text" placeholder="Your Full Name" required disabled={status === 'loading'} />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input name="Email" id="email" type="email" placeholder="email@yourcompany.com" required disabled={status === 'loading'} />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="division">Department</label>
                    <select name="Division" id="division" required disabled={status === 'loading'}>
                      <option value="">Select a Department</option>
                      <option value="realty">Zoilos Realty</option>
                      <option value="global">Zoilos Global</option>
                      <option value="foundation">Zoilos Foundation</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea name="Message" id="message" rows={5} placeholder="How can we help you today?" required disabled={status === 'loading'}></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className={`btn btn-primary ${styles.submitBtn}`}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <><span className={styles.spinner} /> Sending…</>
                    ) : (
                      <>Send Message →</>
                    )}
                  </button>
                  {status === 'error' && <p className={styles.errorMsg}>✕ Something went wrong. Please try again.</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
