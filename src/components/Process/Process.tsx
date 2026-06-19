'use client';

import { motion } from 'framer-motion';
import styles from './Process.module.scss';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We understand your goals, audience, and project scope.',
    color: '#4F46E5',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We create clean wireframes and interactive prototypes.',
    color: '#06B6D4',
  },
  {
    number: '03',
    title: 'Development',
    description: 'We build, test, and optimize your product.',
    color: '#7C3AED',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We deploy your product and support it after launch.',
    color: '#F97316',
  },
];

export default function Process() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow">How We Work</span>
          <h2 className={styles.title}>
            Our Proven <span className="gradient-text">4-Step Process</span>
          </h2>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className={styles.stepCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              style={{ '--accent': step.color } as React.CSSProperties}
            >
              <span className={styles.stepNumber}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}