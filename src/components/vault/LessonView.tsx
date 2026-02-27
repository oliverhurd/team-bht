import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  Play,
  Download,
  ChevronRight,
  ChevronDown } from
'lucide-react';
interface LessonViewProps {
  onNavigate: (view: string) => void;
}
const curriculum = [
{
  id: 'disclaimer',
  title: 'DISCLAIMER',
  items: [
  {
    id: 'd1',
    title: 'Disclaimer',
    completed: true
  }]

},
{
  id: 'narrative',
  title: 'NARRATIVE (WEEKLY RANGE)',
  items: [
  {
    id: 'n1',
    title: 'Price-directional Bias',
    completed: true
  },
  {
    id: 'n2',
    title: 'Time-window Bias',
    completed: true
  },
  {
    id: 'n3',
    title: 'Confirmation for the Weekly Bias',
    completed: true
  }]

},
{
  id: 'framework',
  title: 'FRAMEWORK (DAILY RANGE)',
  items: [
  {
    id: 'f1',
    title: 'Context for the Daily Bias',
    completed: true
  },
  {
    id: 'f2',
    title: 'Targets for the Daily Bias',
    completed: true
  },
  {
    id: 'f3',
    title: 'Profiles for the Daily Bias',
    completed: true
  }]

},
{
  id: 'model',
  title: 'MODEL (SESSION RANGES)',
  items: [
  {
    id: 'm1',
    title: 'The Inception Trade System',
    completed: true
  },
  {
    id: 'm2',
    title: 'Trade Ideas for the New York Session',
    completed: false,
    active: true
  },
  {
    id: 'm3',
    title: 'Trade Execution for the New York Session',
    completed: false
  },
  {
    id: 'm4',
    title: 'Trade Terminus for the New York Session',
    completed: false
  }]

}];

export function LessonView({ onNavigate }: LessonViewProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([
  'disclaimer',
  'narrative',
  'framework',
  'model']
  );
  const [activeTab, setActiveTab] = useState('Lesson');
  const toggleSection = (id: string) => {
    setExpandedSections((prev) =>
    prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };
  return (
    <div className="flex h-screen w-full bg-[#0A0A0A] overflow-hidden">
      {/* Lesson Sidebar */}
      <aside className="w-80 bg-[#050505] border-r border-brave-border/50 flex flex-col h-full shrink-0">
        <div className="p-6 border-b border-brave-border/50">
          <button
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-brave-text-secondary hover:text-white transition-colors mb-6">

            <ArrowLeft className="w-3 h-3" />
            Back to Classroom
          </button>
          <h2 className="text-lg font-medium text-white mb-3">
            The Inception Model
          </h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-[#00E599]">
              <span>35% Complete</span>
            </div>
            <div className="h-0.5 w-full bg-[#1A1A1A] rounded-full overflow-hidden">
              <div className="h-full bg-[#00E599] w-[35%]" />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
          {curriculum.map((section) =>
          <div key={section.id} className="mb-2">
              <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between px-2 py-3 text-[10px] font-bold tracking-widest uppercase text-brave-text-muted hover:text-brave-text-secondary transition-colors">

                {section.title}
                {expandedSections.includes(section.id) ?
              <ChevronDown className="w-3 h-3" /> :

              <ChevronRight className="w-3 h-3" />
              }
              </button>
              {expandedSections.includes(section.id) &&
            <div className="space-y-1 mt-1">
                  {section.items.map((item) =>
              <button
                key={item.id}
                className={`w-full flex items-start gap-3 px-3 py-2.5 rounded-[2px] text-left transition-colors ${item.active ? 'bg-white/[0.03] border border-white/5' : 'hover:bg-white/[0.02]'}`}>

                      {item.completed ?
                <CheckCircle2 className="w-4 h-4 text-[#00E599] shrink-0 mt-0.5" /> :
                item.active ?
                <Circle className="w-4 h-4 text-[#00E599] shrink-0 mt-0.5" /> :

                <Circle className="w-4 h-4 text-brave-text-muted shrink-0 mt-0.5" />
                }
                      <span
                  className={`text-xs leading-snug ${item.active ? 'text-white font-medium' : 'text-brave-text-secondary'}`}>

                        {item.title}
                      </span>
                    </button>
              )}
                </div>
            }
            </div>
          )}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Bar */}
        <header className="h-20 border-b border-brave-border/50 flex items-center justify-between px-8 shrink-0 bg-[#0A0A0A]">
          <div>
            <div className="text-[10px] font-medium tracking-widest uppercase text-brave-text-muted mb-1">
              The Inception Model
            </div>
            <h1 className="text-xl font-medium text-white">
              Trade Ideas for the New York Session
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-brave-text-muted">
              3 of 12 lessons completed
            </span>
            <button className="px-4 py-2 border border-brave-border/60 text-xs font-medium text-brave-text-secondary hover:text-white hover:border-brave-text-secondary transition-colors rounded-[2px]">
              Mark as Complete
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 text-xs font-medium text-white hover:bg-white/10 transition-colors rounded-[2px]">
              Next Lesson <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex gap-8 border-b border-brave-border/50 mb-8">
              {['Lesson', 'Notes', 'Checklist', 'Downloads'].map((tab) =>
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-medium transition-colors relative ${activeTab === tab ? 'text-white' : 'text-brave-text-secondary hover:text-brave-text-primary'}`}>

                  {tab}
                  {activeTab === tab &&
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00E599]" />
                }
                </button>
              )}
            </div>

            {/* Video Area */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#F5A623]">
                    In Progress
                  </span>
                </div>
                <div className="w-px h-3 bg-brave-border" />
                <span className="text-[10px] text-brave-text-muted font-mono">
                  15:55
                </span>
              </div>

              <div className="aspect-video bg-[#050505] border border-brave-border/50 rounded-[4px] flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden">
                <img
                  src="/image.png"
                  alt="Video Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover opacity-30" />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="relative z-10 flex flex-col items-center">
                  <h3 className="text-xl font-medium text-white mb-6">
                    Trade Ideas for the New York Session
                  </h3>
                  <div className="w-16 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[4px] flex items-center justify-center group-hover:bg-[#00E599] group-hover:border-[#00E599] transition-all duration-300">
                    <Play className="w-6 h-6 fill-white text-white group-hover:fill-black group-hover:text-black transition-colors" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 text-xs text-brave-text-secondary">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 hover:text-white transition-colors">
                    <div className="w-4 h-4 border border-brave-text-secondary rounded-[2px]" />
                    Mark as Complete
                  </button>
                  <button className="flex items-center gap-2 hover:text-white transition-colors">
                    <Download className="w-4 h-4" />
                    Download Notes
                  </button>
                </div>
                <button className="flex items-center gap-1 hover:text-white transition-colors">
                  Next Lesson <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Execution Framework */}
            <div className="bg-[#0C0C0C] border border-brave-border/50 rounded-[4px] p-8">
              <h3 className="text-[10px] font-medium tracking-[0.2em] uppercase text-brave-text-secondary mb-4">
                Execution Framework
              </h3>
              <h4 className="text-lg font-medium text-white mb-6">
                Trade Ideas for the New York Session
              </h4>

              <div className="space-y-2">
                {[
                'Using the framework, identify trade ideas based on intra-day market structure (15m bellwether chart)',
                'Align the trade ideas with the NY session Bias to look for trade-setups (reversal/continuation)',
                "Anticipate a 'trigger' to ignite the Trade Idea for Trade Execution (TCP Protocol)",
                "Use the 'trigger sequence' to help avoid false triggers and 'mis-play' the trade idea"].
                map((step, idx) =>
                <div
                  key={idx}
                  className="flex items-start gap-6 p-4 border border-brave-border/30 bg-[#0A0A0A] rounded-[2px]">

                    <span className="text-xs font-mono text-brave-text-muted mt-0.5">
                      0{idx + 1}.
                    </span>
                    <p className="text-sm text-brave-text-primary leading-relaxed">
                      {step}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>);

}