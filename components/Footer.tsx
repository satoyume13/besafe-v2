"use client";

import Link from 'next/link';
import { Shield, ArrowUp } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.slogan}>
            Your Trusted Partner in Advanced Cybersecurity Solutions
          </div>
          <button 
            className={styles.backToTop}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className={styles.mainContent}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Shield className={styles.logoIcon} />
              <div className={styles.logoText}>
                <span className={styles.brandName}>besafe</span>
                <span className={styles.subBrand}>ESafe Advanced Cybersecurity SA</span>
              </div>
            </Link>
          </div>
          
          <div className={styles.addressBlock}>
            <h4>Address</h4>
            <p>123 Security Avenue,<br/>Cybertech District,<br/>Tech City, 10011</p>
          </div>
          
          <div className={styles.contactBlock}>
            <h4>Contact</h4>
            <p>Phone: +1 (555) 123-4567<br/>Email: contact@besafe.com</p>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} BeSafe Technology. All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
