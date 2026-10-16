import React from 'react';
import { HeroSection } from '@/components/ui/HeroSection';
import { StatsBar } from '@/components/ui/StatsBar';
import { ServicesOverview } from '@/components/ui/ServicesOverview';
import { DrillScene } from '@/components/three/DrillScene';
import { MachineryStudio3D } from '@/components/three/MachineryStudio3D';
import { FleetShowcase } from '@/components/ui/FleetShowcase';
import { WhyChooseUs } from '@/components/ui/WhyChooseUs';
import { ContactSection } from '@/components/ui/ContactSection';

export default function HomePage() {
  return (
    <div className="relative bg-white text-slate-900">
      {/* 1. High-Impact Photographic Industrial Hero Banner */}
      <HeroSection />

      {/* 2. Key Verified Standards Bar */}
      <StatsBar />

      {/* 3. Core Services Overview (Farm & Mining Boreholes, Tanks, Soil Sampling, Heavy Plant) */}
      <ServicesOverview />

      {/* 4. Signature Geotechnical 3D Strata Borehole Journey */}
      <DrillScene />

      {/* 5. Interactive 3D Machinery Studio & 11-Machine Live Photo Reel */}
      <MachineryStudio3D />

      {/* 6. Heavy Fleet Showcase Carousel (Excavators 21T–38T, Tippers 30T/40T, Rigs) */}
      <FleetShowcase />

      {/* 7. Why Choose Us: 4 Pillars */}
      <WhyChooseUs />

      {/* 8. Nationwide Operations & WhatsApp Instant Quote */}
      <ContactSection />
    </div>
  );
}
