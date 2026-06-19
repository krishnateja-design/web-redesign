'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

const logoImageSrc = '/images/logo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Company',
    href: '#',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Clients', href: '/clients' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoImageReady, setLogoImageReady] = useState(true);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('touchstart', onClickOutside);

    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('touchstart', onClickOutside);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>
            {logoImageReady ? (
              <Image
                src={logoImageSrc}
                alt="PRove IT Catalysts logo"
                width={180}
                height={60}
                className={styles.logoImage}
                priority
                onError={() => setLogoImageReady(false)}
              />
            ) : (
              <span className={styles.logoFallback}>PI</span>
            )}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav} ref={navRef}>
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className={styles.navItem}
                onMouseEnter={() => setHoverDropdown(link.label)}
                onMouseLeave={() => setHoverDropdown(null)}
              >
                <button
                  type="button"
                  className={styles.navLink}
                  onClick={() =>
                    setActiveDropdown(activeDropdown === link.label ? null : link.label)
                  }
                  aria-expanded={activeDropdown === link.label || hoverDropdown === link.label}
                >
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </button>
                {(activeDropdown === link.label || hoverDropdown === link.label) && (
                  <div className={styles.dropdown}>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={styles.dropdownItem}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className={styles.actions}>
          <a href="tel:08886661674" className={styles.phone}>
            📞 088866 61674
          </a>
          <Link href="/contact" className={styles.ctaBtn}>
            Start a Project
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <span className={styles.mobileMenuGroup}>{link.label}</span>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={styles.mobileMenuLink}
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </>
              ) : (
                <Link
                  href={link.href}
                  className={styles.mobileMenuLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <Link href="/contact" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
            Start a Project
          </Link>
        </div>
      )}
    </header>
  );
}
