import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { TestimonialsRow } from './components/TestimonialsRow';
import { ContentPreview } from './components/ContentPreview';
import { ExampleInsights } from './components/ExampleInsights';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';
import { MissionPage } from './pages/MissionPage';
import { CoursesPage } from './pages/CoursesPage';
import { NotesPage } from './pages/NotesPage';
import { ResultsPage } from './pages/ResultsPage';
import { ContactPage } from './pages/ContactPage';
import { VaultPortal } from './pages/VaultPortal';
import { SiteNav } from './components/SiteNav';
export function App() {
  const [currentPage, setCurrentPage] = useState('newsletter');
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  // Render Site Pages
  if (currentPage === 'mission') {
    return <MissionPage onNavigate={handleNavigate} />;
  }
  if (currentPage === 'courses') {
    return <CoursesPage onNavigate={handleNavigate} />;
  }
  if (currentPage === 'notes') {
    return <NotesPage onNavigate={handleNavigate} />;
  }
  if (currentPage === 'results') {
    return <ResultsPage onNavigate={handleNavigate} />;
  }
  if (currentPage === 'contact') {
    return <ContactPage onNavigate={handleNavigate} />;
  }
  if (currentPage === 'vault') {
    return <VaultPortal onNavigate={handleNavigate} />;
  }
  // Default: Newsletter Landing Page
  return (
    <main className="min-h-screen w-full bg-[#0A0A0A] text-[#E8E0D4] overflow-x-hidden selection:bg-brave-accent/30 selection:text-white">
      <HeroSection onEnterSite={() => handleNavigate('mission')} />
      <TestimonialsRow />
      <ContentPreview />
      <ExampleInsights />
      <BottomCTA />
      <Footer />
    </main>);

}