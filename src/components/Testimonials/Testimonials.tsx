'use client';

import { useState, useEffect } from 'react';
import { testimonials } from '@/data/projects';
import styles from './Testimonials.module.scss';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  useEffect(() => {
  const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
     }, 3000); // change every 3 seconds

     return () => clearInterval(interval);
    }, []);
    const t = testimonials[active];

  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }}>
            ❤️ Client Stories
          </span>
          <h2 className={styles.title}>
            What Our <span className={styles.highlight}>Clients Say</span>
          </h2>
          <p className={styles.subtitle}>
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
        </div>

        <div key={active} className={styles.featured}>
          <div className={styles.quoteIcon}>"</div>
          <p className={styles.quoteText}>{t.text}</p>
          <div className={styles.author}>
            <div className={styles.avatar}>
              {t.name.charAt(0)}
            </div>
            <div>
              <strong className={styles.authorName}>{t.name}</strong>
              <span className={styles.authorRole}>{t.role} — {t.company}</span>
            </div>
            <div className={styles.stars}>
              {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
            </div>
          </div>
        </div>

        {/* Avatar Selector */}
        <div className={styles.selector}>
          {testimonials.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={`${styles.selectorBtn} ${i === active ? styles.selectorActive : ''}`}
            >
              <span className={styles.selectorAvatar}>{item.name.charAt(0)}</span>
              <span className={styles.selectorName}>{item.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Pagination dots */}
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
