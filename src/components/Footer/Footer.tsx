import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { MdArrowForward, MdOutlineEmail, MdOutlineLocationOn, MdOutlinePhone } from 'react-icons/md';
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
  { label: 'Facebook', href: 'https://www.facebook.com/PRoveitcatalysts/', icon: FaFacebookF },
  { label: 'X', href: 'https://twitter.com/PRoveITCatalyst', icon: FaXTwitter },
  { label: 'LinkedIn', href: 'https://in.linkedin.com/company/proveitcatalysts', icon: FaLinkedinIn },
];

const contactItems = [
  { label: 'Phone', href: 'tel:08886661674', text: '088866 61674', icon: MdOutlinePhone },
  { label: 'Email', href: 'mailto:contact@proveitcatalysts.com', text: 'contact@proveitcatalysts.com', icon: MdOutlineEmail },
  { label: 'Office', text: '754 DBK Heights, Madhapur, Hyderabad 500081', icon: MdOutlineLocationOn },
];

const proofPoints = [
  { value: '1520+', label: 'Projects delivered' },
  { value: '200+', label: 'Clients served' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.footerLead}>
            <div>
              <span className={styles.kicker}>PRove IT Catalysts</span>
              <h2>Build, launch, and grow with a dependable digital team.</h2>
            </div>
            <Link href="/contact" className={styles.footerCta}>
              Start a Project
              <MdArrowForward aria-hidden />
            </Link>
          </div>

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
              <p className={styles.legacyTagline} aria-hidden>
                Accelerating your brand's growth through world-class web development,
                mobile apps, and digital solutions — from Hyderabad to the world.
              </p>
              <p className={styles.tagline}>
                Accelerating your brand's growth through world-class web development,
                mobile apps, digital marketing, and cloud solutions from Hyderabad.
              </p>
              <div className={styles.proof}>
                {proofPoints.map((item) => (
                  <div key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <div className={styles.socials}>
                {social.map((s) => {
                  const Icon = s.icon;

                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialBtn}
                      aria-label={s.label}
                    >
                      <Icon aria-hidden />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Company</h4>
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
              <h4 className={styles.colTitle}>Services</h4>
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
              <h4 className={styles.colTitle}>Contact</h4>
              <div className={styles.contact}>
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const body = item.href ? (
                    <a href={item.href}>{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  );

                  return (
                    <div key={item.label} className={styles.contactItem}>
                      <Icon aria-hidden />
                      <div>
                        <small>{item.label}</small>
                        {body}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.legacyContact} aria-hidden>
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
              <div className={styles.legacyNewsletter} aria-hidden>
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
            <p>Copyright {new Date().getFullYear()} PRove IT Catalysts. All rights reserved.</p>
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
