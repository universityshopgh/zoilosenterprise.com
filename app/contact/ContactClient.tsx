'use client'
import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './contact.module.css'

export default function ContactClient() {
  useScrollReveal()
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
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <h1 className="reveal">Contact Zoilos</h1>
          <p className="reveal stagger-1">Elite support for your global strategic objectives.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            <div className={`${styles.info} reveal`}>
              <span className="section-label">Get in Touch</span>
              <h2>How Can We Help?</h2>
              <p>Whether you're interested in premium real estate, global trade opportunities, or supporting the Zoilos Foundation, our team is ready to assist you.</p>
              
              <div className={styles.contactMethods}>
                <div className={styles.method}>
                  <div>
                    <h3>Direct Line</h3>
                    <p>+233 59 976 4428</p>
                  </div>
                </div>
                <div className={styles.method}>
                  <div>
                    <h3>Official Email</h3>
                    <p>kingsfordappiah0000@gmail.com</p>
                  </div>
                </div>
                <div className={styles.method}>
                  <div>
                    <h3>Strategic HQ</h3>
                    <p>Global Strategic Headquarters<br/>Accra, Ghana</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.formWrap} reveal stagger-1`}>
              {status === 'success' ? (
                <div className={styles.successState}>
                  <h3>Message Sent</h3>
                  <p>Thank you for reaching out to Zoilos Group. A representative will contact you shortly.</p>
                  <button className="btn btn-outline" onClick={() => setStatus('idle')}>Send Another Message</button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input name="Name" id="name" type="text" placeholder="John Doe" required disabled={status === 'loading'} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input name="Email" id="email" type="email" placeholder="john@example.com" required disabled={status === 'loading'} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="division">Division</label>
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
                    <textarea name="Message" id="message" rows={5} placeholder="How can we help you?" required disabled={status === 'loading'}></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ width: '100%', justifyContent: 'center' }}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending Message...' : 'Send Message'}
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
