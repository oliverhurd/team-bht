import React from 'react';
import { Search, ChevronDown, FileText, Download } from 'lucide-react';
const documents = [
{
  id: 1,
  title: 'Inception Model - Core Framework',
  desc: 'Complete breakdown of the daily bias determination process.',
  tags: ['Inception', 'Core'],
  size: '2.4 MB'
},
{
  id: 2,
  title: 'Weekly Narrative Checklist',
  desc: 'Step-by-step guide for Sunday analysis and preparation.',
  tags: ['Checklist', 'Weekly'],
  size: '1.1 MB'
},
{
  id: 3,
  title: 'Market Structure Shift Protocols',
  desc: 'Detailed rules for identifying valid structure shifts.',
  tags: ['Market Structure', 'Execution'],
  size: '3.8 MB'
},
{
  id: 4,
  title: 'Risk Management Calculator',
  desc: 'Spreadsheet for position sizing and risk control.',
  tags: ['Tool', 'Risk'],
  size: '450 KB'
},
{
  id: 5,
  title: 'New York Session Profiles',
  desc: 'Common intraday profiles for the NY AM session.',
  tags: ['Profiles', 'Intraday'],
  size: '5.2 MB'
},
{
  id: 6,
  title: 'Quarterly Theory Reference',
  desc: 'Reference guide for IPDA quarterly cycles.',
  tags: ['Time', 'Macro'],
  size: '1.8 MB'
}];

export function LibraryView() {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <header className="px-8 py-10 border-b border-brave-border/50">
        <h1 className="text-2xl font-medium text-white mb-8">PDF Library</h1>
        <div className="flex items-center justify-between gap-6">
          <div className="relative flex-1 max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brave-text-muted" />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full bg-[#0C0C0C] border border-brave-border/60 text-sm text-white placeholder:text-brave-text-muted pl-11 pr-4 py-3 rounded-[2px] focus:outline-none focus:border-brave-text-secondary transition-colors" />

          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-brave-text-secondary">Sort by</span>
            <button className="flex items-center gap-2 px-4 py-2 border border-brave-border/60 rounded-[2px] text-xs text-white hover:border-brave-text-secondary transition-colors bg-[#0A0A0A]">
              Newest <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Filters Sidebar */}
        <div className="w-64 border-r border-brave-border/50 overflow-y-auto p-8 hidden md:block shrink-0">
          {/* Filter Group 1 */}
          <div className="mb-8">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-brave-text-secondary mb-4">
              Type
            </h3>
            <div className="space-y-3">
              {[
              {
                label: 'Lesson Notes',
                checked: true
              },
              {
                label: 'Trade Plans',
                checked: false
              },
              {
                label: 'Checklists',
                checked: false
              },
              {
                label: 'Research',
                checked: false
              }].
              map((item, idx) =>
              <label
                key={idx}
                className="flex items-center gap-3 cursor-pointer group">

                  <div
                  className={`w-4 h-4 rounded-[2px] border flex items-center justify-center transition-colors ${item.checked ? 'bg-[#00E599] border-[#00E599]' : 'border-brave-border/80 group-hover:border-brave-text-secondary'}`}>

                    {item.checked &&
                  <svg
                    className="w-3 h-3 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">

                        <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7" />

                      </svg>
                  }
                  </div>
                  <span
                  className={`text-xs ${item.checked ? 'text-white' : 'text-brave-text-secondary group-hover:text-brave-text-primary'}`}>

                    {item.label}
                  </span>
                </label>
              )}
            </div>
          </div>

          {/* Filter Group 2 */}
          <div className="mb-8">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-brave-text-secondary mb-4">
              Model
            </h3>
            <div className="space-y-3">
              {['Market Structure', 'Inception', 'Frameworks'].map(
                (label, idx) =>
                <label
                  key={idx}
                  className="flex items-center gap-3 cursor-pointer group">

                    <div className="w-4 h-4 rounded-[2px] border border-brave-border/80 group-hover:border-brave-text-secondary transition-colors" />
                    <span className="text-xs text-brave-text-secondary group-hover:text-brave-text-primary">
                      {label}
                    </span>
                  </label>

              )}
            </div>
          </div>

          {/* Filter Group 3 */}
          <div>
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-brave-text-secondary mb-4">
              Level
            </h3>
            <div className="space-y-3">
              {['Beginner', 'Intermediate', 'Advanced'].map((label, idx) =>
              <label
                key={idx}
                className="flex items-center gap-3 cursor-pointer group">

                  <div className="w-4 h-4 rounded-[2px] border border-brave-border/80 group-hover:border-brave-text-secondary transition-colors" />
                  <span className="text-xs text-brave-text-secondary group-hover:text-brave-text-primary">
                    {label}
                  </span>
                </label>
              )}
            </div>
          </div>
        </div>

        {/* Document List */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl space-y-3">
            {documents.map((doc) =>
            <div
              key={doc.id}
              className="flex items-center gap-6 p-5 bg-[#0C0C0C] border border-brave-border/50 rounded-[2px] group hover:border-brave-text-secondary/30 transition-colors">

                <div className="w-12 h-12 bg-[#00E599]/10 rounded-[2px] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-[#00E599]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-white mb-1 truncate">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-brave-text-secondary mb-3 truncate">
                    {doc.desc}
                  </p>
                  <div className="flex gap-2">
                    {doc.tags.map((tag, idx) =>
                  <span
                    key={idx}
                    className="px-2 py-0.5 border border-brave-border/60 text-[10px] text-brave-text-secondary rounded-[2px] bg-[#0A0A0A]">

                        {tag}
                      </span>
                  )}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3 shrink-0 ml-4">
                  <span className="text-[10px] text-brave-text-muted font-mono">
                    {doc.size}
                  </span>
                  <button className="p-2 text-brave-text-secondary hover:text-white hover:bg-white/5 rounded-[2px] transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>);

}