import React, { useState } from 'react';
import { VaultSidebar } from '../components/vault/VaultSidebar';
import { DashboardView } from '../components/vault/DashboardView';
import { LessonView } from '../components/vault/LessonView';
import { IntelligenceView } from '../components/vault/IntelligenceView';
import { LibraryView } from '../components/vault/LibraryView';
interface VaultPortalProps {
  onNavigate: (page: string) => void;
}
export function VaultPortal({ onNavigate }: VaultPortalProps) {
  const [activeView, setActiveView] = useState('dashboard');
  const handleSignOut = () => {
    // In a real app, handle auth state here
    onNavigate('newsletter');
  };
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