'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Process.module.scss';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We clarify goals, users, scope, risks, and the fastest path to measurable value.',
    outcome: 'Project roadmap',
    image: '/images/process/discovery.svg',
    color: '#2563EB',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We shape the interface, content flow, and core experience before development begins.',
    outcome: 'Approved prototype',
    image: '/images/process/design.svg',
    color: '#0F766E',
  },
  {
    number: '03',
    title: 'Development',
    description: 'We build in focused releases with clean code, QA checks, and performance tuning.',
    outcome: 'Production build',
    image: '/images/process/development.svg',
    color: '#334155',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We deploy, monitor, refine, and keep your team supported after go-live.',
    outcome: 'Live product',
    image: '/images/process/launch.svg',
    color: '#F97316',
  },
];

export default function Process() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            className={styles.processSignal}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <span>Delivery Process</span>
            <strong>01-04</strong>
          </motion.div>
          <span className="section-eyebrow">How We Work</span>
          <h2 className={styles.title}>
            Our Process: from idea to launch.
          </h2>
          <p className={styles.subtitle}>
            A clear workflow keeps every project moving through discovery, design, development, and launch.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          <motion.div
            className={styles.flowIntro}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.12 }}
          >
            <span>Start</span>
            <strong>Project Process Flow</strong>
            <span>Launch</span>
          </motion.div>
          <motion.div
            className={styles.connector}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.15 }}
          />

          <div className={styles.steps}>
            {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className={styles.stepCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.45, delay: i * 0.12, ease: 'easeOut' }}
              style={{ '--accent': step.color } as React.CSSProperties}
            >
              <div className={styles.stepTop}>
                <motion.span
                  className={styles.stepNumber}
                  initial={{ scale: 0.82, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.12 + i * 0.1 }}
                >
                  {step.number}
                </motion.span>
                <span className={styles.stepLabel}>Process Step</span>
              </div>
              <div className={styles.iconWrap}>
                <Image src={step.image} alt="" width={160} height={112} aria-hidden />
              </div>
              <div className={styles.copy}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <div className={styles.outcome}>
                <span>Output</span>
                <strong>{step.outcome}</strong>
              </div>
            </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
