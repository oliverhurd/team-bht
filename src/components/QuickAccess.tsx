import React from 'react';
import { FileText, BarChart3, BookOpen, CheckSquare } from 'lucide-react';
export function QuickAccess() {
  const items = [
  {
    id: 'pdf',
    label: 'PDF Library',
    icon: FileText
  },
  {
    id: 'logs',
    label: 'Trade Logs',
    icon: BarChart3
  },
  {
    id: 'playbooks',
    label: 'Playbooks',
    icon: BookOpen
  },
  {
    id: 'checklists',
    label: 'Checklists',
    icon: CheckSquare
  }];

  return (
    <div className="w-full mb-14">
      <h2 className="text-[#666] text-[11px] uppercase tracking-[0.15em] font-medium mb-6">
        Quick Access
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) =>
        <button
          key={item.id}
          className="bg-[#111] border border-[#1a1a1a] rounded-lg p-6 flex flex-col items-center justify-center group hover:border-[#2a2a2a] transition-colors duration-200">

            <item.icon
            size={24}
            className="text-[#666] mb-3 group-hover:text-[#10b981] transition-colors duration-200"
            strokeWidth={1.5} />

            <span className="text-sm text-[#999] font-medium group-hover:text-white transition-colors">
              {item.label}
            </span>
          </button>
        )}
      </div>
    </div>);

}