import React, { useState, useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { VaultSidebar } from '../components/vault/VaultSidebar';
import { DashboardView } from '../components/vault/DashboardView';
import { LessonView } from '../components/vault/LessonView';
import { IntelligenceView } from '../components/vault/IntelligenceView';
import { LibraryView } from '../components/vault/LibraryView';
import { WeeklyView } from '../components/vault/WeeklyView';
interface VaultPortalProps {
  onNavigate: (page: string) => void;
}
export function VaultPortal({ onNavigate }: VaultPortalProps) {
  const [activeView, setActiveView] = useState('dashboard');
  const { signOut, isSignedIn, isLoaded } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
    onNavigate('newsletter');
  };

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      onNavigate('login');
    }
  }, [isLoaded, isSignedIn, onNavigate]);
  // if the active view relates to weekly videos, render the dedicated component
  if (activeView.startsWith('weekly')) {
    const [, type] = activeView.split(':');
    return <WeeklyView onNavigate={setActiveView} type={type as 'forecast' | 'review'} />;
  }

  // If the active view is 'lesson', it takes over the entire layout
  // (including its own specific sidebar)
  if (activeView === 'lesson') {
    return <LessonView onNavigate={setActiveView} />;
  }
  return (
    <div className="flex h-screen w-full bg-[#0A0A0A] overflow-hidden selection:bg-[#00E599]/20 selection:text-white">
      {/* Main Vault Sidebar */}
      <VaultSidebar
        activeView={activeView}
        onNavigate={setActiveView}
        onSignOut={handleSignOut} />


      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto custom-scrollbar relative">
        {activeView === 'dashboard' &&
        <DashboardView onNavigate={setActiveView} />
        }
        {
        activeView === 'models' &&
        <DashboardView onNavigate={setActiveView} />
        // Reusing dashboard for models overview for now
        }
        {activeView === 'intelligence' && <IntelligenceView />}
        {activeView === 'library' && <LibraryView />}
      </main>
    </div>);

}