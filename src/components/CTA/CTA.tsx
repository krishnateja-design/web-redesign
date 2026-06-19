import Link from 'next/link';
import styles from './CTA.module.scss';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>🎯 Ready to Build?</span>
            <h2 className={styles.title}>
              Let's Turn Your Vision
              <br />
              Into Reality
            </h2>
            <p className={styles.subtitle}>
              500+ companies have grown their digital presence with us.
              Start your project today — free consultation, no commitments.
            </p>
            <div className={styles.ctas}>
              <Link href="/contact" className={styles.btnPrimary}>
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
              <a href="tel:08886661674" className={styles.btnPhone}>
                📞 088866 61674
              </a>
            </div>
          </div>
          <div className={styles.badges}>
            {[
              { icon: '🏆', label: '1520+ Projects', sub: 'Successfully Delivered' },
              { icon: '⭐', label: '4.9 / 5 Rating', sub: 'From 200+ Reviews' },
              { icon: '🚀', label: '8+ Years', sub: 'Industry Experience' },
            ].map((b) => (
              <div key={b.label} className={styles.badge}>
                <span className={styles.badgeIcon}>{b.icon}</span>
                <div>
                  <strong>{b.label}</strong>
                  <small>{b.sub}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
