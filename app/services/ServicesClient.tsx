'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './services.module.css'

const services = [
  {
    title: 'Zoilos Realty',
    description: 'Expert guidance in luxury residential and commercial real estate.',
    items: ['Property Sales', 'Leasing', 'Valuation', 'Consultancy'],
    color: '#D4A843',
    img: '/realestate1.jpg'
  },
  {
    title: 'Zoilos Global',
    description: 'Strategic logistics and international trade solutions.',
    items: ['Supply Chain', 'Freight', 'Customs', 'Distribution'],
    color: '#FF8F00',
    img: '/import1.jpg'
  },
  {
    title: 'Zoilos Foundation',
    description: 'Empowering communities through sustainable development.',
    items: ['Education', 'Healthcare', 'Infrastructure', 'Sustainability'],
    color: '#FF6B35',
    img: '/orphange1.jpg'
  }
]

export default function ServicesClient() {
  useScrollReveal()

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <div className={`${styles.headerCard} reveal`}>
            <h1 className={styles.title}>Our Services</h1>
            <div className={styles.titleLine} />
            <p className={styles.subtitle}>Comprehensive excellence across three distinct sectors, bridging the gap between local impact and global reach.</p>
          </div>
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
                <div className={styles.cardImg}>
                   <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
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
