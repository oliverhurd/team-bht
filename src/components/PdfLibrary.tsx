import React, { useState } from 'react';
import { Search, FileText, Download, Check, ChevronDown } from 'lucide-react';
export function PdfLibrary() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
  'lesson-notes']
  );
  const toggleFilter = (id: string) => {
    setSelectedFilters((prev) =>
    prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };
  const filterGroups = [
  {
    label: 'Type',
    options: [
    {
      id: 'lesson-notes',
      label: 'Lesson Notes'
    },
    {
      id: 'trade-plans',
      label: 'Trade Plans'
    },
    {
      id: 'checklists',
      label: 'Checklists'
    },
    {
      id: 'research',
      label: 'Research'
    }]

  },
  {
    label: 'Model',
    options: [
    {
      id: 'market-structure',
      label: 'Market Structure'
    },
    {
      id: 'inception',
      label: 'Inception'
    },
    {
      id: 'frameworks',
      label: 'Frameworks'
    }]

  },
  {
    label: 'Level',
    options: [
    {
      id: 'beginner',
      label: 'Beginner'
    },
    {
      id: 'intermediate',
      label: 'Intermediate'
    },
    {
      id: 'advanced',
      label: 'Advanced'
    }]

  }];

  const resources = [
  {
    id: 1,
    title: 'Inception Model - Core Framework',
    description:
    'Complete breakdown of the daily bias determination process.',
    size: '2.4 MB',
    tags: ['Inception', 'Core']
  },
  {
    id: 2,
    title: 'Weekly Narrative Checklist',
    description: 'Step-by-step guide for Sunday analysis and preparation.',
    size: '1.1 MB',
    tags: ['Checklist', 'Weekly']
  },
  {
    id: 3,
    title: 'Market Structure Shift Protocols',
    description: 'Detailed rules for identifying valid structure shifts.',
    size: '3.8 MB',
    tags: ['Market Structure', 'Execution']
  },
  {
    id: 4,
    title: 'Risk Management Calculator',
    description: 'Spreadsheet for position sizing and risk control.',
    size: '450 KB',
    tags: ['Tool', 'Risk']
  },
  {
    id: 5,
    title: 'New York Session Profiles',
    description: 'Common intraday profiles for the NY AM session.',
    size: '5.2 MB',
    tags: ['Profiles', 'Intraday']
  },
  {
    id: 6,
    title: 'Quarterly Theory Reference',
    description: 'Reference guide for IPDA quarterly cycles.',
    size: '1.8 MB',
    tags: ['Time', 'Macro']
  }];

  return (
    <div className="flex h-full min-h-screen">
      {/* Sidebar Filters */}
      <div className="w-[260px] bg-[#0a0a0a] border-r border-[#1a1a1a] p-6 flex-shrink-0">
        <h2 className="text-white text-lg font-semibold mb-8">PDF Library</h2>

        <div className="space-y-8">
          {filterGroups.map((group) =>
          <div key={group.label}>
              <h3 className="text-[#666] text-xs font-bold uppercase tracking-wider mb-4">
                {group.label}
              </h3>
              <div className="space-y-3">
                {group.options.map((option) =>
              <button
                key={option.id}
                onClick={() => toggleFilter(option.id)}
                className="flex items-center gap-3 w-full text-left group">

                    <div
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedFilters.includes(option.id) ? 'bg-[#10b981] border-[#10b981]' : 'border-[#333] group-hover:border-[#666]'}`}>

                      {selectedFilters.includes(option.id) &&
                  <Check
                    size={10}
                    className="text-black"
                    strokeWidth={3} />

                  }
                    </div>
                    <span
                  className={`text-sm transition-colors ${selectedFilters.includes(option.id) ? 'text-white' : 'text-[#999] group-hover:text-white'}`}>

                      {option.label}
                    </span>
                  </button>
              )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-[#0a0a0a]">
        <div className="flex items-center justify-between mb-8">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-xl">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666]"
              size={18} />

            <input
              type="text"
              placeholder="Search resources..."
              className="w-full bg-[#111] border border-[#1a1a1a] rounded-lg pl-12 pr-4 py-3 text-white placeholder-[#666] focus:outline-none focus:border-[#333] transition-colors" />

          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <span className="text-[#666] text-xs">Sort by</span>
            <button className="flex items-center gap-2 bg-[#111] border border-[#1a1a1a] rounded-lg px-3 py-2 text-sm text-[#999] hover:text-white hover:border-[#333] transition-colors">
              <span>Newest</span>
              <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 gap-4">
          {resources.map((resource) =>
          <div
            key={resource.id}
            className="bg-[#111] border border-[#1a1a1a] rounded-lg p-6 flex items-center gap-6 group hover:border-[#2a2a2a] transition-colors duration-200">

              <div className="w-12 h-12 bg-[#10b981]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#10b981]">
                <FileText size={24} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium text-base mb-1 truncate group-hover:text-white transition-colors">
                  {resource.title}
                </h3>
                <p className="text-[#999] text-sm mb-3 truncate">
                  {resource.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag) =>
                <span
                  key={tag}
                  className="text-[#666] text-xs bg-[#1a1a1a] px-2 py-0.5 rounded border border-[#222]">

                      {tag}
                    </span>
                )}
                </div>
              </div>

              <div className="flex flex-col items-end gap-3 flex-shrink-0 pl-4 border-l border-[#1a1a1a]">
                <span className="text-[#666] text-xs font-mono">
                  {resource.size}
                </span>
                <button className="p-2 text-[#999] hover:text-[#10b981] hover:bg-[#10b981]/10 rounded-lg transition-colors">
                  <Download size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

}