"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Shield, ArrowUp } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const params = useParams();
  const lang = (params.lang as string) || 'en';

  const content = {
    en: {
      slogan: "Your Trusted Partner in Advanced Cybersecurity Solutions",
      brandSub: "ESafe Advanced Cybersecurity SA",
      address: "Address",
      addressText: "123 Security Avenue, Cybertech District, Tech City, 10011",
      contact: "Contact",
      phone: "Phone: +1 (555) 123-4567",
      email: "Email: contact@besafe.com",
      rights: "All Rights Reserved",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    ar: {
      slogan: "شريكك الموثوق في حلول الأمن السيبراني المتقدمة",
      brandSub: "إي سيف للأمن السيبراني المتقدم",
      address: "العنوان",
      addressText: "123 شارع الأمن، منطقة سايبرتك، المدينة التقنية، 10011",
      contact: "اتصل بنا",
      phone: "الهاتف: +1 (555) 123-4567",
      email: "البريد الإلكتروني: contact@besafe.com",
      rights: "جميع الحقوق محفوظة",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة"
    }
  };

  const t = content[lang as keyof typeof content] || content.en;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.slogan}>
            {t.slogan}
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
            <Link href={`/${lang}`} className={styles.logo}>
              <Shield className={styles.logoIcon} />
              <div className={styles.logoText}>
                <span className={styles.brandName}>besafe</span>
                <span className={styles.subBrand}>{t.brandSub}</span>
              </div>
            </Link>
          </div>
          
          <div className={styles.addressBlock}>
            <h4>{t.address}</h4>
            <p>{t.addressText}</p>
          </div>
          
          <div className={styles.contactBlock}>
            <h4>{t.contact}</h4>
            <p>{t.phone}<br/>{t.email}</p>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} BeSafe Technology. {t.rights}.</p>
          <div className={styles.bottomLinks}>
            <Link href="#">{t.privacy}</Link>
            <Link href="#">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
