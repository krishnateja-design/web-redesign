'use client';

import Link from 'next/link';
import { services } from '@/data/services';
import styles from './Services.module.scss';

const homeServices = services.slice(0, 6);

export default function Services() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow">What We Do</span>
          <h2 className={styles.title}>
            Services Built for{' '}
            <span className={styles.titleAccent}>Modern Business</span>
          </h2>
          <p className={styles.subtitle}>
            From code to cloud, we offer every digital capability your business needs to launch,
            grow, and scale, all under one roof.
          </p>
        </div>

        <div className={styles.grid}>
          {homeServices.map((service) => (
            <Link key={service.id} href={service.href} className={styles.card} style={{ '--accent': service.color } as React.CSSProperties}>
              <div className={styles.cardIcon} style={{ background: service.gradient }}>
                <span>{service.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <ul className={styles.cardFeatures}>
                {service.features.map((f) => (
                  <li key={f}>
                    <span className={styles.featureDot} style={{ background: service.color }} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className={styles.cardFooter}>
                <span className={styles.learnMore}>
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7h9M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              <div className={styles.cardGlow} style={{ background: service.gradient }} />
            </Link>
          ))}
        </div>

        <div className={styles.cta}>
          <p>Explore our full service lineup.</p>
          <Link href="/services" className={styles.ctaBtn}>
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
