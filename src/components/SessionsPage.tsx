import React, { useState } from 'react';
import { ChevronDown, Calendar, Clock } from 'lucide-react';
export function MarketIntelligencePage() {
  const [activeWeek, setActiveWeek] = useState('w09');
  const [contentType, setContentType] = useState<
    'All' | 'Forecasts' | 'Reviews'>(
    'All');
  const weeks = [
  {
    id: 'w09',
    label: 'W09 — Feb 24'
  },
  {
    id: 'w08',
    label: 'W08 — Feb 17'
  },
  {
    id: 'w07',
    label: 'W07 — Feb 10'
  },
  {
    id: 'w06',
    label: 'W06 — Feb 03'
  },
  {
    id: 'w05',
    label: 'W05 — Jan 27'
  },
  {
    id: 'w04',
    label: 'W04 — Jan 20'
  },
  {
    id: 'w03',
    label: 'W03 — Jan 13'
  },
  {
    id: 'w02',
    label: 'W02 — Jan 06'
  }];

  const videos = [
  {
    id: 1,
    title: 'Weekly Market Forecast',
    date: 'Feb 24, 2026',
    duration: '24:15',
    type: 'Forecast',
    tags: ['ES', 'NQ', 'HTF']
  },
  {
    id: 2,
    title: 'Mid-Week Review',
    date: 'Feb 26, 2026',
    duration: '18:30',
    type: 'Review',
    tags: ['Execution', 'Intraday']
  },
  {
    id: 3,
    title: 'Friday Session Recap',
    date: 'Feb 28, 2026',
    duration: '32:10',
    type: 'Review',
    tags: ['Recap', 'Psychology']
  },
  {
    id: 4,
    title: 'Weekly Market Forecast',
    date: 'Feb 17, 2026',
    duration: '28:45',
    type: 'Forecast',
    tags: ['ES', 'NQ', 'HTF']
  },
  {
    id: 5,
    title: 'CPI Data Reaction',
    date: 'Feb 19, 2026',
    duration: '15:20',
    type: 'Review',
    tags: ['News', 'Volatility']
  },
  {
    id: 6,
    title: 'Weekly Market Forecast',
    date: 'Feb 10, 2026',
    duration: '22:05',
    type: 'Forecast',
    tags: ['ES', 'NQ', 'HTF']
  }];

  return (
    <div className="p-10 max-w-7xl mx-auto min-h-screen">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-white text-2xl font-semibold">
            Market Intelligence
          </h1>

          {/* Filters */}
          <div className="flex items-center gap-3">
            {['Year: 2026', 'Week: W09', 'Model: All', 'Asset: All'].map(
              (filter) =>
              <button
                key={filter}
                className="flex items-center gap-2 bg-[#111] border border-[#1a1a1a] rounded-lg px-4 py-2 text-sm text-[#999] hover:text-white hover:border-[#333] transition-colors">

                  <span>{filter}</span>
                  <ChevronDown size={14} />
                </button>

            )}
          </div>
        </div>

        {/* Content Type Toggle */}
        <div className="flex items-center gap-6 border-b border-[#1a1a1a] pb-px">
          {['All', 'Forecasts', 'Reviews'].map((type) =>
          <button
            key={type}
            onClick={() => setContentType(type as any)}
            className={`pb-3 text-sm font-medium transition-colors relative ${contentType === type ? 'text-white' : 'text-[#666] hover:text-white'}`}>

              {type}
              {contentType === type &&
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#10b981]" />
            }
            </button>
          )}
        </div>
      </div>

      <div className="flex gap-12">
        {/* Timeline Sidebar */}
        <div className="w-[200px] flex-shrink-0">
          <div className="sticky top-8 space-y-1">
            {weeks.map((week) =>
            <button
              key={week.id}
              onClick={() => setActiveWeek(week.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${activeWeek === week.id ? 'text-white bg-[#1a1a1a] border-l-2 border-[#10b981]' : 'text-[#666] hover:text-white hover:bg-[#111] border-l-2 border-transparent'}`}>

                {week.label}
              </button>
            )}
          </div>
        </div>

        {/* Video Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) =>
            <div
              key={video.id}
              className="bg-[#111] border border-[#1a1a1a] rounded-lg overflow-hidden group hover:border-[#2a2a2a] transition-colors duration-200 cursor-pointer">

                {/* Thumbnail */}
                <div className="aspect-video bg-[#0d0d0d] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://cdn.magicpatterns.com/uploads/7DwMJKd9ZB46LvCa7ZGV6x/inceptionmodelimage.jpg')] bg-cover bg-center opacity-30" />

                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-white flex items-center gap-1">
                    <Clock size={10} />
                    {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${video.type === 'Forecast' ? 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20' : 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/20'}`}>

                      {video.type}
                    </span>
                    <div className="flex items-center gap-1 text-[#666] text-xs">
                      <Calendar size={12} />
                      <span>{video.date}</span>
                    </div>
                  </div>

                  <h3 className="text-white font-medium text-sm mb-3 line-clamp-1 transition-colors">
                    {video.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {video.tags.map((tag) =>
                  <span
                    key={tag}
                    className="text-[#666] text-xs bg-[#1a1a1a] px-2 py-1 rounded border border-[#222]">

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