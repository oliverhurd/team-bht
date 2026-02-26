import React from 'react';
import {
  LayoutGrid,
  BookOpen,
  TrendingUp,
  FileText,
  LogOut } from
'lucide-react';
import { motion } from 'framer-motion';
interface VaultSidebarProps {
  currentView: 'dashboard' | 'course' | 'market-intelligence' | 'pdf-library';
  onNavigate: (
  view: 'dashboard' | 'course' | 'market-intelligence' | 'pdf-library')
  => void;
}
export function VaultSidebar({ currentView, onNavigate }: VaultSidebarProps) {
  const navItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutGrid,
    view: 'dashboard' as const
  },
  {
    id: 'models',
    label: 'Models',
    icon: BookOpen,
    view: 'dashboard' as const // Navigates to dashboard where models are
  },
  {
    id: 'market-intelligence',
    label: 'Market Intelligence',
    icon: TrendingUp,
    view: 'market-intelligence' as const
  },
  {
    id: 'pdf-library',
    label: 'PDF Library',
    icon: FileText,
    view: 'pdf-library' as const
  }];

  // Helper to check active state
  const isActive = (view: string, id: string) => {
    if (view === 'dashboard' && id === 'dashboard') return true;
    if (view === 'course' && id === 'models') return true;
    if (view === 'market-intelligence' && id === 'market-intelligence')
    return true;
    if (view === 'pdf-library' && id === 'pdf-library') return true;
    return false;
  };
  return (
    <div className="fixed left-0 top-0 h-full w-[240px] bg-[#111111] border-r border-[#1a1a1a] flex flex-col z-50">
      {/* Logo Area */}
      <div className="p-8 mb-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 border border-white flex items-center justify-center">
            <span className="text-white font-sans font-bold text-xs">BHT</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-sans text-sm tracking-wider font-bold">
              BRAVEHEART
            </span>
            <span className="text-[#666] text-[10px] tracking-[0.2em] uppercase">
              Trading
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-0 space-y-1">
        {navItems.map((item) => {
          const active = isActive(currentView, item.id);
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.view)}
              className={`w-full flex items-center gap-4 px-6 py-3 text-sm transition-all duration-200 relative group ${active ? 'text-white bg-[#1a1a1a]' : 'text-[#888] hover:text-white hover:bg-[#151515]'}`}>

              {active &&
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#10b981]" />
              }
              <item.icon
                size={18}
                className={active ? 'text-[#10b981]' : 'text-current'}
                strokeWidth={1.5} />

              <span className="font-medium tracking-wide">{item.label}</span>
            </button>);

        })}
      </nav>

      {/* User Footer */}
      <div className="p-8 border-t border-[#1a1a1a]">
        <div className="mb-4">
          <p className="text-[10px] uppercase tracking-wider text-[#666] mb-1">
            Signed in as
          </p>
          <p className="text-xs text-[#888] font-medium truncate">
            odhurd@gmail.com
          </p>
        </div>

        <button className="flex items-center gap-3 text-[#666] hover:text-white transition-colors text-sm group">
          <LogOut
            size={16}
            className="group-hover:text-[#10b981] transition-colors" />

          <span>Sign Out</span>
        </button>
      </div>
    </div>);

}