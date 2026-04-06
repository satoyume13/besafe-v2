"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Shield } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Shield className={styles.logoIcon} />
          <div className={styles.logoText}>
            <span className={styles.brandName}>besafe</span>
            <span className={styles.subBrand}>ESafe Advanced Cybersecurity SA</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="#services" className={styles.navLink}>Services</Link>
          <Link href="#about" className={styles.navLink}>About</Link>
          <Link href="#blog" className={styles.navLink}>Blog</Link>
          <Link href="#contact" className={styles.navLink}>Contact Us</Link>
        </div>

        {/* Mobile Burger */}
        <button 
          className={styles.burger}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={styles.mobileMenu}>
            <Link href="/" className={styles.navLink} onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="#services" className={styles.navLink} onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="#about" className={styles.navLink} onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#blog" className={styles.navLink} onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="#contact" className={styles.navLink} onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
