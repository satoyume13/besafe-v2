"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { Menu, X, Shield, Globe } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const lang = (params.lang as string) || 'en';

  const redirectedPathname = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `/${lang}`, label: lang === 'ar' ? 'الرئيسية' : 'Home' },
    { href: `/${lang}#services`, label: lang === 'ar' ? 'الخدمات' : 'Services' },
    { href: `/${lang}#about`, label: lang === 'ar' ? 'من نحن' : 'About' },
    { href: `/${lang}#blog`, label: lang === 'ar' ? 'المدونة' : 'Blog' },
    { href: `/${lang}#contact`, label: lang === 'ar' ? 'اتصل بنا' : 'Contact Us' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href={`/${lang}`} className={styles.logo}>
          <Shield className={styles.logoIcon} />
          <div className={styles.logoText}>
            <span className={styles.brandName}>besafe</span>
            <span className={styles.subBrand}>
              {lang === 'ar' ? 'إي سيف للأمن السيبراني المتقدم' : 'ESafe Advanced Cybersecurity SA'}
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
          <Link
            href={redirectedPathname(lang === 'en' ? 'ar' : 'en')}
            className={styles.langToggle}
          >
            <Globe size={18} />
            <span>{lang === 'en' ? 'العربية' : 'English'}</span>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className={styles.mobileActions}>
           <Link
            href={redirectedPathname(lang === 'en' ? 'ar' : 'en')}
            className={styles.langToggleMobile}
          >
            <Globe size={20} />
          </Link>
          <button 
            className={styles.burger}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={styles.mobileMenu}>
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={styles.navLink} 
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
