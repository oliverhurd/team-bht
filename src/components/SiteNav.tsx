import React from 'react';
import { motion } from 'framer-motion';
interface SiteNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}
export function SiteNav({ currentPage, onNavigate }: SiteNavProps) {
  const links = [
  {
    id: 'newsletter',
    label: 'HOME'
  },
  {
    id: 'mission',
    label: 'MISSION'
  },
  {
    id: 'courses',
    label: 'COURSES'
  },
  {
    id: 'results',
    label: 'RESULTS'
  },
  {
    id: 'notes',
    label: 'NOTES'
  },
  {
    id: 'contact',
    label: 'CONTACT'
  }];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-brave-border/50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div
          className="text-xl font-serif font-bold tracking-tight text-brave-text-primary cursor-pointer"
          onClick={() => onNavigate('newsletter')}>

          BRAVEHEART
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) =>
          <button
            key={link.id}
            onClick={() => onNavigate(link.id)}
            className={`text-xs font-medium tracking-widest uppercase transition-colors relative ${currentPage === link.id ? 'text-brave-text-primary' : 'text-brave-text-secondary hover:text-brave-text-primary'}`}>

              {link.label}
              {currentPage === link.id &&
            <motion.div
              layoutId="nav-underline"
              className="absolute -bottom-1 left-0 right-0 h-px bg-brave-accent" />

            }
            </button>
          )}
        </div>

        <button className="hidden md:block px-4 py-2 border border-brave-border rounded-full text-xs font-medium tracking-widest uppercase text-brave-text-primary hover:bg-brave-card transition-colors">
          Members Vault
        </button>

        {/* Mobile Menu Button (Simple placeholder) */}
        <button className="md:hidden text-brave-text-primary">MENU</button>
      </div>
    </nav>);

}