'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './services.module.css'

const services = [
  {
    title: 'Zoilos Realty',
    description: 'Expert guidance in luxury residential and commercial real estate.',
    items: ['Property Sales', 'Leasing', 'Valuation', 'Consultancy'],
    color: '#D4A843'
  },
  {
    title: 'Zoilos Global',
    description: 'Strategic logistics and international trade solutions.',
    items: ['Supply Chain', 'Freight', 'Customs', 'Distribution'],
    color: '#FF8F00'
  },
  {
    title: 'Zoilos Foundation',
    description: 'Empowering communities through sustainable development.',
    items: ['Education', 'Healthcare', 'Infrastructure', 'Sustainability'],
    color: '#FF6B35'
  }
]

export default function ServicesClient() {
  useScrollReveal()

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <h1 className="reveal">Our Services</h1>
          <p className="reveal stagger-1">Comprehensive excellence across three distinct sectors.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {services.map((service, i) => (
              <div 
                key={service.title} 
                className={`${styles.card} reveal stagger-${i}`}
                style={{ '--brand-color': service.color } as React.CSSProperties}
              >
                <div className={styles.cardAccent} />
                <span className={styles.cardNumber}>0{i + 1}</span>
                <div className={styles.cardHeader}>
                  <span className={styles.brandTag}>{service.title.split(' ')[1]} Division</span>
                  <h2>{service.title}</h2>
                </div>
                <p>{service.description}</p>
                <div className={styles.listWrapper}>
                  <ul className={styles.list}>
                    {service.items.map(item => (
                      <li key={item}>
                         {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  href={service.title.toLowerCase().includes('realty') ? '/realty' : service.title.toLowerCase().includes('global') ? '/global' : '/foundation'} 
                  className={styles.learnMoreBtn}
                >
                  Explore {service.title.split(' ')[1]} Excellence
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
