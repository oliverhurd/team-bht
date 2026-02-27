import React from 'react';
import { LayoutGrid, BookOpen, LineChart, FileText, LogOut } from 'lucide-react';
interface VaultSidebarProps {
  activeView: string;
  onNavigate: (view: string) => void;
  onSignOut: () => void;
}
export function VaultSidebar({
  activeView,
  onNavigate,
  onSignOut
}: VaultSidebarProps) {
  const navItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutGrid
  },
  {
    id: 'models',
    label: 'Models',
    icon: BookOpen
  },
  {
    id: 'intelligence',
    label: 'Market Intelligence',
    icon: LineChart
  },
  {
    id: 'library',
    label: 'PDF Library',
    icon: FileText
  }];

  return (
    <aside className="w-64 bg-[#050505] border-r border-brave-border/50 flex flex-col h-screen sticky top-0">
      {/* Logo Area */}
      <div className="p-6 border-b border-brave-border/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-brave-text-primary flex items-center justify-center font-serif text-xs font-bold text-brave-text-primary">
            BHT
          </div>
          <div>
            <div className="text-sm font-serif font-bold tracking-widest text-brave-text-primary uppercase">
              Braveheart
            </div>
            <div className="text-[8px] tracking-[0.3em] text-brave-text-secondary uppercase">
              Trading
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 space-y-1">
        {navItems.map((item) => {
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-4 px-6 py-3 text-sm font-medium transition-colors ${isActive ? 'text-white bg-white/[0.02] border-l-2 border-[#00E599]' : 'text-brave-text-secondary hover:text-brave-text-primary hover:bg-white/[0.02] border-l-2 border-transparent'}`}>

              <item.icon
                className={`w-4 h-4 ${isActive ? 'text-[#00E599]' : 'opacity-70'}`} />

              {item.label}
            </button>);

        })}
      </nav>

      {/* User Area */}
      <div className="p-6 border-t border-brave-border/50">
        <div className="mb-4">
          <div className="text-[10px] font-medium tracking-widest uppercase text-brave-text-muted mb-1">
            Signed in as
          </div>
          <div className="text-xs text-brave-text-secondary truncate">
            odhurd@gmail.com
          </div>
        </div>
        <button
          onClick={onSignOut}
          className="flex items-center gap-3 text-xs font-medium text-brave-text-secondary hover:text-white transition-colors">

          <LogOut className="w-4 h-4 opacity-70" />
          Sign Out
        </button>
      </div>
    </aside>);

}