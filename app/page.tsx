import React from 'react';
import { Hero3D } from '@/components/three/Hero3D';
import { StatsBar } from '@/components/ui/StatsBar';
import { ServicesOverview } from '@/components/ui/ServicesOverview';
import { DrillScene } from '@/components/three/DrillScene';
import { FleetShowcase } from '@/components/ui/FleetShowcase';
import { WhyChooseUs } from '@/components/ui/WhyChooseUs';
import { ContactSection } from '@/components/ui/ContactSection';

export default function HomePage() {
  return (
    <div className="relative">
      {/* 1. Full-screen 3D Hero */}
      <Hero3D />

      {/* 2. Stats Bar / Verified Standards */}
      <StatsBar />

      {/* 3. Core Services Overview */}
      <ServicesOverview />

      {/* 4. Signature Scroll-Driven 3D Drill Descent */}
      <DrillScene />

      {/* 5. Fleet Showcase: Horizontal Carousel of 8 Machines */}
      <FleetShowcase />

      {/* 6. Why Choose Us: 4 Glassmorphism Cards with Floating 3D Icons */}
      <WhyChooseUs />

      {/* 7. Contact & Instant WhatsApp Quote Section */}
      <ContactSection />
    </div>
  );
}
