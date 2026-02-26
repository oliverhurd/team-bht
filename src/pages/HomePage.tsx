import React from 'react';
import { SiteNav } from '../components/SiteNav';          // NEW
import { HeroSection } from '../components/HeroSection';  // NEW
import { ContentPreview } from '../components/ContentPreview';  // NEW
import { ExampleInsights } from '../components/ExampleInsights';  // NEW
import { TestimonialsGrid } from '../components/TestimonialsGrid';  // NEW
import { BottomCTA } from '../components/BottomCTA';      // NEW
import { Footer } from '../components/Footer';            // NEW

export function HomePage() {
  return (
    <div>
      <SiteNav />
      <HeroSection />
      <ContentPreview />
      <ExampleInsights />
      <TestimonialsGrid />
      <BottomCTA />
      <Footer />
    </div>
  );
}
