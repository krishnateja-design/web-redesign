import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

const logoImageSrc = '/images/logo.png';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'Mobile App Development', href: '/services/app-development' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
  { label: 'Medical Billing', href: '/services/medical-billing' },
  { label: 'Cloud Services', href: '/services/cloud-services' },
  { label: 'Technical Support', href: '/services/tech-support' },
  { label: 'Email Support', href: '/services/email-support' },
];

const social = [
  { label: 'Facebook', href: 'https://www.facebook.com/PRoveitcatalysts/', icon: 'f' },
  { label: 'Twitter', href: 'https://twitter.com/PRoveITCatalyst', icon: 'x' },
  { label: 'LinkedIn', href: 'https://in.linkedin.com/company/proveitcatalysts', icon: 'in' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <Link href="/" className={styles.logo}>
                <span className={styles.logoMark}>
                  <Image
                    src={logoImageSrc}
                    alt="PRove IT Catalysts logo"
                    width={180}
                    height={60}
                    className={styles.logoImage}
                  />
                </span>
              </Link>
              <p className={styles.tagline}>
                Accelerating your brand's growth through world-class web development,
                mobile apps, and digital solutions — from Hyderabad to the world.
              </p>
              <div className={styles.socials}>
                {social.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className={styles.socialBtn} aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Quick Links</h4>
              <ul className={styles.colLinks}>
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.colLink}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Our Services</h4>
              <ul className={styles.colLinks}>
                {serviceLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.colLink}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Get In Touch</h4>
              <div className={styles.contact}>
                <div className={styles.contactItem}>
                  <span>📞</span>
                  <a href="tel:08886661674">088866 61674</a>
                </div>
                <div className={styles.contactItem}>
                  <span>✉️</span>
                  <a href="mailto:contact@proveitcatalysts.com">contact@proveitcatalysts.com</a>
                </div>
                <div className={styles.contactItem}>
                  <span>📍</span>
                  <span>754 DBK Heights, Madhapur, Hyderabad 500081</span>
                </div>
              </div>
              <div className={styles.newsletter}>
                <h4 className={styles.newsletterTitle}>Stay Updated</h4>
                <div className={styles.newsletterForm}>
                  <input type="email" placeholder="Your email address" className={styles.newsletterInput} />
                  <button className={styles.newsletterBtn}>→</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p>©{new Date().getFullYear()} PRove IT Catalysts. All rights reserved.</p>
            <div className={styles.legal}>
              <Link href="/terms">Terms & Conditions</Link>
              <Link href="/policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
