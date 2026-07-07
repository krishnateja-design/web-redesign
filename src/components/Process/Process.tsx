"use client";

import { motion } from "framer-motion";
import styles from "./Process.module.scss";

const steps = [
  { number: "01", title: "Planning", description: "Make you different" },
  { number: "02", title: "Development", description: "Make you different" },
  { number: "03", title: "Launching", description: "Make you different" },
];

export default function Process() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.processArea}>
          <motion.div
            className={styles.intro}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <span>IT&apos;S PERFECT WAY</span>

            <h2>
              How Does PRove IT <br />
              Catalysts Works
            </h2>

            <p>
              We follow a smooth and clear process from planning to launch,
              helping your business grow with quality and confidence.
            </p>

            <a href="/contact" className={styles.button}>
              Get Started
            </a>
          </motion.div>

          <div className={styles.roadmap}>
            <svg className={styles.lineSvg} viewBox="0 0 980 340" fill="none">
              <motion.path
                d="M20 220 C110 270 175 270 250 210 C325 150 400 155 475 175 C565 200 610 125 700 85 C780 50 850 55 950 75"
                stroke="#1687c7"
                strokeWidth="5"
                strokeDasharray="2 14"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`${styles.step} ${styles[`step${index + 1}`]}`}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.18 }}
              >
                <span className={styles.dot} />
                <span className={styles.bigNumber}>{step.number}</span>

                <div className={styles.stepText}>
                  <h3>
                    {step.number}. {step.title}
                  </h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}