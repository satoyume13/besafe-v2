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
import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/lib/i18n-config';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const services = [
    {
      title: dict.services.strategic.title,
      description: dict.services.strategic.description,
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: dict.services.assessment.title,
      description: dict.services.assessment.description,
      icon: FileSearch,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: dict.services.monitoring.title,
      description: dict.services.monitoring.description,
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: dict.services.consultancy.title,
      description: dict.services.consultancy.description,
      icon: MessageSquare,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: dict.services.data.title,
      description: dict.services.data.description,
      icon: Lock,
      image: "https://images.unsplash.com/photo-1510511459019-5dee2c147fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: dict.services.implementation.title,
      description: dict.services.implementation.description,
      icon: Layout,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const carouselSlides = [
    {
      title: dict.carousel.slide1.title,
      description: dict.carousel.slide1.description,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
      color: "#06d6a0"
    },
    {
      title: dict.carousel.slide2.title,
      description: dict.carousel.slide2.description,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
      color: "#118ab2"
    },
    {
      title: dict.carousel.slide3.title,
      description: dict.carousel.slide3.description,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200",
      color: "#ef476f"
    }
  ];

  return (
    <main className={styles.main}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {dict.hero.title} <br />
            {dict.hero.subtitle1} <br />
            {dict.hero.subtitle2}
          </h1>
          <p className={styles.heroSubtitle}>
            {dict.hero.description}
          </p>
          <button className={styles.ctaButton}>
            {dict.hero.cta} <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Carousel Section - NICE SWIPER UNDER INTRO BACKGROUND */}
      <section className={styles.carouselSection}>
        <div className={styles.container}>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {carouselSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className={styles.carouselCard}>
                     <div className={styles.carouselImageWrapper}>
                        <Image 
                          src={slide.image} 
                          alt={slide.title}
                          fill
                          className={styles.carouselImage}
                        />
                        <div className={styles.carouselOverlay} />
                     </div>
                     <div className={styles.carouselContent}>
                        <div className={styles.carouselTag} style={{ backgroundColor: slide.color }}>Featured</div>
                        <h3 className={styles.carouselTitle}>{slide.title}</h3>
                        <p className={styles.carouselDescription}>{slide.description}</p>
                        <button className={styles.carouselBtn}>
                          Learn More {lang === 'ar' ? <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} /> : <ArrowRight size={16} />}
                        </button>
                     </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={styles.carouselNav} />
            <CarouselNext className={styles.carouselNav} />
          </Carousel>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLogoText}>
              <Shield size={60} color="#06d6a0" />
              <span>{dict.navbar.brand}</span>
            </div>
            <div className={styles.aboutContent}>
              <h3>{dict.about.title}</h3>
              <p>{dict.about.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{dict.services.sectionTitle}</h2>
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
                  <Link href={`/${lang}/#contact`} className={styles.serviceLink}>
                    {dict.services.addLink} <ArrowRight size={16} />
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
                <label className={styles.formLabel}>{dict.contact.form.name} <span>*</span></label>
                <input type="text" className={styles.formInput} placeholder="" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>{dict.contact.form.email} <span>*</span></label>
                <input type="email" className={styles.formInput} placeholder="" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>{dict.contact.form.message} <span>*</span></label>
                <textarea className={styles.formTextarea}></textarea>
              </div>
              <button className={styles.ctaButton}>{dict.contact.form.send}</button>
            </div>
            
            <div className={styles.contactInfo}>
              <div className={styles.infoLabel}>{dict.contact.sectionLabel}</div>
              <h3>{dict.contact.title}</h3>
              <p>{dict.contact.description}</p>
              <div className={styles.socialHeader}>{dict.contact.socials}</div>
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