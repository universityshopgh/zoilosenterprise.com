'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from '../legal.module.css'

export default function TermsPage() {
  useScrollReveal()
  return (
    <div className={styles.page}>
      <header className={styles.header} style={{ '--watermark': "'LEGAL'" } as React.CSSProperties}>
        <div className="container">
          <h1 className="reveal">Terms of Service</h1>
          <p className="reveal stagger-1">Effective Date: April 28, 2026. The legal framework governing our global engagement.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={`${styles.content} reveal`}>
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing or using the Zoilos Group ecosystem (including Zoilos Realty, Global, and Foundation), you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>

            <section>
              <h2>2. Use of Services</h2>
              <p>Our services are provided for professional informational and engagement purposes. You agree not to:</p>
              <ul>
                <li>Attempt to decompile or reverse engineer any software contained on Zoilos Group's website.</li>
                <li>Remove any copyright or other proprietary notations from the materials.</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </section>

            <section>
              <h2>3. Intellectual Property</h2>
              <p>The materials contained in this website are protected by applicable copyright and trademark law. All logos, branding, and content are the sole property of Zoilos Group.</p>
            </section>

            <section>
              <h2>4. Reality & Trade Disclaimer</h2>
              <p>While we strive for 100% accuracy, property listings, trade data, and logistical estimates are subject to market changes. Zoilos Group does not warrant that any materials are accurate, complete, or current.</p>
            </section>

            <section>
              <h2>5. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction of our Global Strategic Headquarters.</p>
            </section>

            <div className={styles.ctaBox}>
              <h3>Questions regarding our Terms?</h3>
              <p>Our legal team is available to provide clarification on any of the sections listed above.</p>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/contact" className="btn btn-primary">Contact Legal Department</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}