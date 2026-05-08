'use client'
import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './gallery.module.css'

const galleryItems = [
  { id: 1,  category: 'Realty',     title: 'Luxury Penthouse', color: '#D4A843', size: 'large', img: '/realty_unreal1.jpg' },
  { id: 2,  category: 'Global',     title: 'Logistics Hub',    color: '#FF8F00', size: 'tall', img: '/import_export1.jpg' },
  { id: 3,  category: 'Foundation', title: 'School Building',  color: '#FF6B35', size: 'normal', img: '/orphanage_unreal1.jpg' },
  { id: 4,  category: 'Realty',     title: 'Modern Villa',     color: '#D4A843', size: 'normal', img: '/realty_unreal2.jpg' },
  { id: 5,  category: 'Global',     title: 'Cargo Ship',       color: '#FF8F00', size: 'wide', img: '/import_export2.jpg' },
  { id: 6,  category: 'Foundation', title: 'Happy Children',   color: '#FF6B35', size: 'normal', img: '/orphnage_unreal2.jpg' },
  { id: 7,  category: 'Realty',     title: 'Commercial Plaza', color: '#D4A843', size: 'tall', img: '/realty_unreal3.jpg' },
  { id: 8,  category: 'Global',     title: 'Trade Route',      color: '#FF8F00', size: 'large', img: '/import_export3.jpg' },
  { id: 9,  category: 'Foundation', title: 'Medical Camp',     color: '#FF6B35', size: 'normal', img: '/orphanage_unreal3.jpg' },
  { id: 10, category: 'Realty',     title: 'Ocean View',       color: '#D4A843', size: 'normal', img: '/realty_unreal4.jpg' },
  { id: 11, category: 'Global',     title: 'Storage Facility', color: '#FF8F00', size: 'wide', img: '/import_export4.jpg' },
  { id: 12, category: 'Foundation', title: 'Clean Water',      color: '#FF6B35', size: 'tall', img: '/orphange_unreal4.jpg' },
]

export default function GalleryClient() {
  const [filter, setFilter] = useState('All')
  useScrollReveal([filter])

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  const categories = ['All', 'Realty', 'Global', 'Foundation']
  
  const getCount = (cat: string) => {
    if (cat === 'All') return galleryItems.length
    return galleryItems.filter(item => item.category === cat).length
  }

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

            <div className={styles.grid}>
              {filteredItems.map((item, i) => (
                <div 
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
