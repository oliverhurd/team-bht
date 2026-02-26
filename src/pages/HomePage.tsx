import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { ContentPreview } from '../components/ContentPreview';
import { ExampleInsights } from '../components/ExampleInsights';
import { TestimonialsGrid } from '../components/TestimonialsGrid';
import { BottomCTA } from '../components/BottomCTA';
import { Footer } from '../components/Footer';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* NO SiteNav here - only on other pages */}
      <HeroSection onEnter={() => navigate('/courses')} />
      <ContentPreview />
      <ExampleInsights />
      <TestimonialsGrid />
      <BottomCTA onSubscribe={() => navigate('/contact')} />
      <Footer />
    </div>
  );
}
