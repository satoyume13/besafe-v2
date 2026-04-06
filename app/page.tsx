"use client";

import Link from 'next/link';
import Image from 'next/image';
import { 
  Shield, 
  ChevronRight, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  FileSearch, 
  MessageSquare, 
  Lock, 
  Layout,
  Globe,
  Share2,
  Mail
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  const services = [
    {
      title: "Strategic Security",
      description: "Our Strategic Security Services ensure your security measures are aligned with your business goals. From architecture reviews to tailored cybersecurity strategies, we help you achieve resilience and compliance, safeguarding your organization's future.",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Assessment & Testing",
      description: "Our Assessment & Testing Services uncover hidden vulnerabilities and fortify your defenses. Through advanced penetration testing, web application assessments, and real-world attack simulations, we ensure your systems are robust and secure.",
      icon: FileSearch,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Monitoring & Response",
      description: "Stay ahead of threats with our Monitoring & Response Services. We provide proactive dark web monitoring, incident response, and comprehensive SOC management to ensure swift, effective handling of any security incidents.",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Consultancy & Review",
      description: "Enhance your security posture with our Consultancy & Review Services. Our experts provide cloud security consultancy, source code reviews, and security configuration optimization to protect your digital assets comprehensively.",
      icon: MessageSquare,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Data Protection",
      description: "Safeguard your critical assets with our Data Protection Services. We specialize in data classification and protection, ensuring your sensitive information is secure and compliant with industry standards.",
      icon: Lock,
      image: "https://images.unsplash.com/photo-1510511459019-5dee2c147fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Implementation Services",
      description: "Our Implementation Services deliver advanced cybersecurity solutions tailored to your needs. From design to deployment, we ensure seamless integration and robust protection, empowering your organization with top-tier security measures.",
      icon: Layout,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <main className={styles.main}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Secure Your Future with Us! <br />
            Discover Our Comprehensive <br />
            Security Services Today!
          </h1>
          <p className={styles.heroSubtitle}>
            Securing Your Future — Advanced Solutions for Unmatched Protection
          </p>
          <button className={styles.ctaButton}>
            Check our Security Solutions <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLogoText}>
              <Shield size={60} color="#06d6a0" />
              <span>besafe</span>
            </div>
            <div className={styles.aboutContent}>
              <h3>ESafe Advanced Cybersecurity</h3>
              <p>
                BeSafe Technology, a brand of ESafe Advanced Cybersecurity SA, is a global leader in IT infrastructure and cybersecurity, with key operations in Sudan, KSA, UAE and UK. Our mission is to deliver quality and reliable cybersecurity solutions, meeting the highest standards across various IT environments. We are dedicated to achieving 100% customer satisfaction through superior and affordable products and services. With a vision of becoming a top entity in technology-based corporate solutions, we emphasize growth, innovation, and client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>SECURITY SOLUTIONS</h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={400} 
                  height={200} 
                  className={styles.serviceImage}
                />
                <div className={styles.serviceContent}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link href="#" className={styles.serviceLink}>
                    Add link <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Full Name <span>*</span></label>
                <input type="text" className={styles.formInput} placeholder="" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email <span>*</span></label>
                <input type="email" className={styles.formInput} placeholder="" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Message <span>*</span></label>
                <textarea className={styles.formTextarea}></textarea>
              </div>
              <button className={styles.ctaButton}>Send</button>
            </div>
            
            <div className={styles.contactInfo}>
              <div className={styles.infoLabel}>CONTACT US</div>
              <h3>Have A Question? Contact Us!</h3>
              <p>
                We'd love to hear from you! Whether you have questions, need support, or want to provide feedback, our team is here to help. Please fill out the form below, and one of our representatives will get back to you as soon as possible.
              </p>
              <div className={styles.socialHeader}>Socials:</div>
              <div className={styles.socialLinks}>
                <Link href="#" className={styles.socialIcon}><Globe size={20} /></Link>
                <Link href="#" className={styles.socialIcon}><Share2 size={20} /></Link>
                <Link href="#" className={styles.socialIcon}><Mail size={20} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}