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

import Chatbot from './Chatbot';
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
    <div>
      <h1>be safe
      </h1>
    </div>
  );
}