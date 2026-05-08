'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../legal.module.css'

export default function PrivacyPage() {
  useScrollReveal()
  return (
    <div className={styles.page}>
      <header className={styles.header} style={{ '--watermark': "'PRIVACY'" } as React.CSSProperties}>
        <div className="container">
          <h1 className="reveal">Privacy Policy</h1>
          <p className="reveal stagger-1">Your trust is our most valuable asset. Safeguarding your global data footprint.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={`${styles.content} reveal`}>
            <section>
              <h2>1. Information We Collect</h2>
              <p>We collect information necessary to provide our premium real estate, trade, and philanthropic services. This includes:</p>
              <ul>
                <li>Identity information (Name, Contact Details).</li>
                <li>Property preferences and investment history for Zoilos Realty.</li>
                <li>Business logistical requirements for Zoilos Global.</li>
                <li>Donation history and volunteer preferences for Zoilos Foundation.</li>
              </ul>
            </section>

            <section>
              <h2>2. How We Use Your Data</h2>
              <p>Zoilos Group uses your data strictly for:</p>
              <ul>
                <li>Personalizing your experience across our pillars.</li>
                <li>Facilitating secure transactions and international trade documentation.</li>
                <li>Providing updates on humanitarian impact and property market trends.</li>
                <li>Ensuring compliance with international financial and legal regulations.</li>
              </ul>
            </section>

            <section>
              <h2>3. Data Security & Sovereignty</h2>
              <p>We employ institutional-grade encryption and secure server infrastructures to protect your data. Zoilos Group does not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your explicit consent.</p>
            </section>

            <section>
              <h2>4. Your Global Rights</h2>
              <p>Regardless of your location, you have the right to access, correct, or request the deletion of your personal data. You may contact our Data Protection Office at any time to exercise these rights.</p>
            </section>

            <div className={styles.ctaBox}>
              <h3>Data Privacy Questions?</h3>
              <p>Our Data Protection Officer is available for any clarifications regarding your information security.</p>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/contact" className="btn btn-primary">Contact Privacy Team</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}