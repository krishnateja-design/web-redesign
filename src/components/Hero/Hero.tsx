'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';

const stats = [
  { value: '1520+', label: 'Projects Done' },
  { value: '200+', label: 'Happy Clients' },
  { value: '8+', label: 'Years Experience' },
  { value: '99%', label: 'Satisfaction Rate' },
];

const headlineLines = [
  ['Build', 'Digital', 'Products'],
  ['That', 'Actually', 'Work'],
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* Gradient background blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>


          {/* Headline */}
          <h1 className={styles.headline}>
            <span className={styles.headlineLine}>
              {headlineLines[0].map((word, index) => (
                <motion.span
                  key={`hero-line-1-${word}`}
                  className={styles.headlineWord}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08 * index }}
                >
                  {word}
                  {index < headlineLines[0].length - 1 ? ' ' : ''}
                </motion.span>
              ))}
            </span>
            <br />
            <span className={styles.headlineLine}>
              {headlineLines[1].map((word, index) => (
                <motion.span
                  key={`hero-line-2-${word}`}
                  className={`${styles.headlineWord} ${styles.gradientText}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.22 + 0.08 * index }}
                >
                  {word}
                  {index < headlineLines[1].length - 1 ? ' ' : ''}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subtext */}
          <p className={styles.subtext}>
            From responsive websites to native mobile apps, digital marketing to cloud infrastructure —
            PRove IT Catalysts accelerates your brand's growth in a big way.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctas}>
            <Link href="/contact" className={styles.btnPrimary}>
              Start Your Project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
            <Link href="/portfolio" className={styles.btnOutline}>
              View Our Work
            </Link>
          </div>

          {/* Trust badges */}
          <div className={styles.trust}>
            <div className={styles.stars}>
              {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
            </div>
            <span className={styles.trustText}>Trusted by 200+ businesses across India</span>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className={styles.visual}>
          <div className={styles.mockup}>
            <div className={styles.mockupBar}>
              <span /><span /><span />
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.mockupChart}>
                <div className={styles.chartBars}>
                  {[60, 80, 45, 95, 70, 85, 55].map((h, i) => (
                    <div key={i} className={styles.bar} style={{ '--h': `${h}%` } as React.CSSProperties} />
                  ))}
                </div>
                <p className={styles.chartLabel}>Project Delivery Rate</p>
              </div>
              <div className={styles.mockupCards}>
                {[
                  { icon: '🌐', label: 'Web Projects', val: '840+' },
                  { icon: '📱', label: 'Mobile Apps', val: '320+' },
                  { icon: '⭐', label: 'Avg Rating', val: '4.9/5' },
                ].map((c) => (
                  <div key={c.label} className={styles.mockupCard}>
                    <span className={styles.cardIcon}>{c.icon}</span>
                    <div>
                      <strong>{c.val}</strong>
                      <small>{c.label}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className={`${styles.badge} ${styles.badge1}`}>
            <span>🚀</span> Project Launched!
          </div>
          <div className={`${styles.badge} ${styles.badge2}`}>
            <span>✅</span> 1520+ Done
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className={styles.statsStrip}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s, index) => (
              <motion.div
                key={s.label}
                className={styles.statItem}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <motion.strong
                  className={styles.statValue}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: 0.04 + index * 0.08 }}
                >
                  {s.value}
                </motion.strong>
                <span className={styles.statLabel}>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
