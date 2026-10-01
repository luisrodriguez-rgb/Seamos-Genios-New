'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Alliances from '@/components/Alliances';
import RoleHub from '@/components/RoleHub';
import PurposeStory from '@/components/PurposeStory';
import FlowSteps from '@/components/FlowSteps';
import NetworkMap from '@/components/NetworkMap';
import EcommerceCatalog from '@/components/EcommerceCatalog';
import SchoolsCarousel from '@/components/SchoolsCarousel';
import Testimonials from '@/components/Testimonials';
import TeamMentors from '@/components/TeamMentors';
import Comparison from '@/components/Comparison';
import FaqVideo from '@/components/FaqVideo';
import ContactWhatsapp from '@/components/ContactWhatsapp';
import Footer from '@/components/Footer';

type RoleType = 'estudiante' | 'colegio' | 'padre' | 'docente';

export default function HomePage() {
  const [activeRole, setActiveRole] = useState<RoleType>('estudiante');

  useEffect(() => {
    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-scale, .product-card, .role-pillar-item, .flow-step-card, .testimonial-card, .leader-card'
    );

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );

      revealElements.forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
      });

      return () => observer.disconnect();
    } else {
      revealElements.forEach((el) => el.classList.add('revealed'));
    }
  }, []);

  return (
    <>
      {/* 1. Master Navbar */}
      <Navbar />

      <main role="main">
        {/* 2. Hero Section */}
        <Hero onSelectRole={setActiveRole} />

        {/* 3. Trust Bar & University Alliances */}
        <Alliances />

        {/* 4. Multi-Role Guided Information Hub */}
        <RoleHub selectedRole={activeRole} onRoleChange={setActiveRole} />

        {/* 5. Purpose & Story */}
        <PurposeStory />

        {/* 6. Methodology 4-Step Flow */}
        <FlowSteps />

        {/* 7. National Network Map & Stats */}
        <NetworkMap />

        {/* 8. Academic Programs & E-Commerce Catalog */}
        <EcommerceCatalog />

        {/* 9. Continuous Infinite Marquee of +60 Schools */}
        <SchoolsCarousel />

        {/* 10. Wall of Love / Testimonials */}
        <Testimonials />

        {/* 11. Academic Leadership & Mentors Table */}
        <TeamMentors />

        {/* 12. Market Showdown & Colombian Payment Gateways */}
        <Comparison />

        {/* 13. FAQ & Video Tour */}
        <FaqVideo />

        {/* 14. Direct Contact & WhatsApp Banner */}
        <ContactWhatsapp />
      </main>

      {/* 15. Monumental Footer */}
      <Footer />
    </>
  );
}
