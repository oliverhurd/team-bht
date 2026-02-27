import React from 'react';
import { ChevronDown, Play } from 'lucide-react';
const videos = [
{
  id: 1,
  title: 'Weekly Market Forecast',
  date: 'Feb 24, 2026',
  duration: '24:15',
  type: 'FORECAST',
  tags: ['ES', 'NQ', 'HTF'],
  img: "/image.png"
},
{
  id: 2,
  title: 'Mid-Week Review',
  date: 'Feb 26, 2026',
  duration: '18:30',
  type: 'REVIEW',
  tags: ['Execution', 'Intraday'],
  img: "/image-1.png"
},
{
  id: 3,
  title: 'Friday Session Recap',
  date: 'Feb 28, 2026',
  duration: '32:10',
  type: 'REVIEW',
  tags: ['Recap', 'Psychology'],
  img: "/image-2.png"
},
{
  id: 4,
  title: 'Weekly Market Forecast',
  date: 'Feb 17, 2026',
  duration: '28:45',
  type: 'FORECAST',
  tags: ['ES', 'NQ', 'HTF'],
  img: "/image.png"
}];

const weeks = [
{
  id: 'w09',
  label: 'W09 — Feb 24',
  active: true
},
{
  id: 'w08',
  label: 'W08 — Feb 17',
  active: false
},
{
  id: 'w07',
  label: 'W07 — Feb 10',
  active: false
},
{
  id: 'w06',
  label: 'W06 — Feb 03',
  active: false
},
{
  id: 'w05',
  label: 'W05 — Jan 27',
  active: false
},
{
  id: 'w04',
  label: 'W04 — Jan 20',
  active: false
},
{
  id: 'w03',
  label: 'W03 — Jan 13',
  active: false
},
{
  id: 'w02',
  label: 'W02 — Jan 06',
  active: false
}];

export function IntelligenceView() {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <header className="px-8 py-10 border-b border-brave-border/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <h1 className="text-2xl font-medium text-white">
            Market Intelligence
          </h1>
          <div className="flex flex-wrap items-center gap-3">
            {['Year: 2026', 'Week: W09', 'Model: All', 'Asset: All'].map(
              (filter, idx) =>
              <button
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 border border-brave-border/60 rounded-[2px] text-xs text-brave-text-secondary hover:text-white hover:border-brave-text-secondary transition-colors bg-[#0A0A0A]">

                  {filter} <ChevronDown className="w-3 h-3" />
                </button>

            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6">
          {['All', 'Forecasts', 'Reviews'].map((tab, idx) =>
          <button
            key={tab}
            className={`pb-3 text-sm font-medium transition-colors relative ${idx === 0 ? 'text-[#00E599]' : 'text-brave-text-secondary hover:text-brave-text-primary'}`}>

              {tab}
              {idx === 0 &&
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00E599]" />
            }
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar (Weeks) */}
        <div className="w-48 border-r border-brave-border/50 overflow-y-auto p-4 hidden md:block shrink-0">
          <div className="space-y-1">
            {weeks.map((week) =>
            <button
              key={week.id}
              className={`w-full text-left px-4 py-2 text-xs rounded-[2px] transition-colors ${week.active ? 'bg-white/5 text-white font-medium' : 'text-brave-text-secondary hover:text-brave-text-primary hover:bg-white/[0.02]'}`}>

                {week.label}
              </button>
            )}
          </div>
        </div>

        {/* Video Grid */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl">
            {videos.map((video) =>
            <div
              key={video.id}
              className="bg-[#0C0C0C] border border-brave-border/50 rounded-[2px] overflow-hidden group cursor-pointer hover:border-brave-text-secondary/30 transition-colors">

                <div className="aspect-video relative overflow-hidden bg-[#111]">
                  <img
                  src={video.img}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10">
                      <Play className="w-5 h-5 fill-white text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-sm text-[10px] font-mono text-white rounded-[2px]">
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span
                    className={`text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-[2px] ${video.type === 'FORECAST' ? 'bg-[#00E599]/10 text-[#00E599]' : 'bg-[#F5A623]/10 text-[#F5A623]'}`}>

                      {video.type}
                    </span>
                    <span className="text-[10px] text-brave-text-muted">
                      {video.date}
                    </span>
                  </div>
                  <h3 className="text-base font-medium text-white mb-4">
                    {video.title}
                  </h3>
                  <div className="flex gap-2">
                    {video.tags.map((tag, idx) =>
                  <span
                    key={idx}
                    className="px-2 py-1 border border-brave-border/60 text-[10px] text-brave-text-secondary rounded-[2px] bg-[#0A0A0A]">

                        {tag}
                      </span>
                  )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>);

}