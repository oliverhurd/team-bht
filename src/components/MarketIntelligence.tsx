import React from 'react';
import { Play } from 'lucide-react';
export function MarketIntelligence() {
  return (
    <div className="w-full mb-14">
      <h2 className="text-[#666] text-[11px] uppercase tracking-[0.15em] font-medium mb-6">
        This Week
      </h2>

      <div className="bg-[#111] border border-[#1a1a1a] rounded-lg p-0 overflow-hidden flex flex-col md:flex-row">
        {/* Content Side */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              W09 · 2026
            </span>
            <span className="text-[#666] text-xs uppercase tracking-wider">
              Weekly Forecast
            </span>
          </div>

          <h3 className="text-white text-2xl font-semibold mb-2">
            Weekly Market Forecast
          </h3>

          <p className="text-[#999] text-sm mb-6 max-w-lg leading-relaxed">
            Narrative context and execution framework for the trading week
            ahead. Analyzing key levels on ES and NQ with a focus on Tuesday's
            CPI data.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {['Narrative', 'Execution', 'HTF', 'Weekly'].map((tag) =>
            <span
              key={tag}
              className="bg-[#111] text-[#888] border border-[#1a1a1a] rounded-full px-3 py-1 text-xs font-medium">

                {tag}
              </span>
            )}
          </div>

          <div>
            <button className="flex items-center gap-2 border border-[#10b981]/50 text-[#10b981] hover:bg-[#10b981]/10 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200">
              <Play size={14} className="fill-current" />
              <span>Watch Forecast</span>
            </button>
          </div>
        </div>

        {/* Thumbnail Side */}
        <div className="w-full md:w-[320px] lg:w-[400px] bg-[#0a0a0a] relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-10" />
          <div className="w-full h-full bg-gradient-to-br from-[#0d0d0d] to-[#111] flex items-center justify-center relative">
            {/* Simple dark placeholder, no overlay icon */}
          </div>
        </div>
      </div>
    </div>);

}