'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './gallery.module.css'

const galleryItems = [
  { id: 1,  category: 'Realty',     title: 'Luxury Estate, Accra',      color: '#D4A843', size: 'large',  img: '/realestate1.jpg' },
  { id: 2,  category: 'Global',     title: 'Tema Container Port',        color: '#FF8F00', size: 'tall',   img: '/import1.jpg' },
  { id: 3,  category: 'Foundation', title: 'Zoilos Foundation Impact',   color: '#FF6B35', size: 'normal', img: '/orphange1.jpg' },
  { id: 4,  category: 'Realty',     title: 'Modern Villa, East Legon',   color: '#D4A843', size: 'tall',   img: '/realestate2.jpg' },
  { id: 5,  category: 'Global',     title: 'Accra Trade Market',         color: '#FF8F00', size: 'wide',   img: '/import2.jpg' },
  { id: 6,  category: 'Foundation', title: 'Community Outreach',         color: '#FF6B35', size: 'wide',   img: '/orphange2.jpg' },
  { id: 7,  category: 'Realty',     title: 'Commercial Plaza, Airport',  color: '#D4A843', size: 'normal', img: '/realestate3.jpg' },
  { id: 8,  category: 'Global',     title: 'Freight & Logistics Hub',    color: '#FF8F00', size: 'large',  img: '/import3.jpg' },
  { id: 9,  category: 'Foundation', title: 'Healthcare Support',         color: '#FF6B35', size: 'normal', img: '/orphange3.jpg' },
  { id: 10, category: 'Realty',     title: 'Premium Estate, Labone',     color: '#D4A843', size: 'wide',   img: '/realestate4.jpg' },
  { id: 11, category: 'Global',     title: 'Business Partnership',       color: '#FF8F00', size: 'normal', img: '/import4.jpg' },
  { id: 12, category: 'Foundation', title: 'Children\'s Welfare',        color: '#FF6B35', size: 'tall',   img: '/orphange4.jpg' },
]

export default function GalleryClient() {
  const [filter, setFilter] = useState('Realty')
  useScrollReveal([filter])

  const filteredItems = galleryItems.filter(item => item.category === filter)

  const categories = ['Realty', 'Global', 'Foundation']

  const getCount = (cat: string) =>
    galleryItems.filter(item => item.category === cat).length

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <h1 className="reveal">Our Gallery</h1>
          <p className="reveal stagger-1">A visual journey through our diverse operations and impact.</p>
        </div>
      </header>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.galleryContainer}>
            <div className={styles.filterWrapper}>
              <div className={styles.filterBar}>
                {categories.map((cat, i) => (
                  <button 
                    key={cat}
                    className={`${styles.filterBtn} ${filter === cat ? styles.active : ''} reveal stagger-${i}`}
                    onClick={() => setFilter(cat)}
                  >
                    <span className={styles.btnText}>{cat}</span>
                    <span className={styles.count}>{getCount(cat)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.grid} key={filter}>
              {filteredItems.map((item, i) => (
                <Link 
                  href={item.category === 'Realty' ? '/realty' : item.category === 'Global' ? '/global' : '/foundation'}
                  key={item.id} 
                  className={`${styles.card} ${styles['card_' + item.size]} reveal stagger-${i % 4}`}
                >
                  <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                    <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, var(--zoilos-navy), ${item.color}44)`, opacity: 0.8 }}></div>
                    <span className={styles.bgTitle}>{item.title}</span>
                  </div>
                  <div className={styles.overlay}>
                    <span className={styles.category}>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
