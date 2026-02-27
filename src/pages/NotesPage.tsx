import React, { useState } from 'react';
import { SiteNav } from '../components/SiteNav';
import { Footer } from '../components/Footer';
import { Folder, FileText, ChevronRight, ChevronDown } from 'lucide-react';
interface NotesPageProps {
  onNavigate: (page: string) => void;
}
const treeData = [
{
  id: 'market-structure',
  label: 'Market Structure',
  children: [
  {
    id: 'basics',
    label: 'Basics'
  },
  {
    id: 'bos',
    label: 'Break of Structure (BOS)'
  },
  {
    id: 'mss',
    label: 'Market Structure Shift (MSS)'
  },
  {
    id: 'choch',
    label: 'Change of Character (CHoCH)'
  },
  {
    id: 'advanced',
    label: 'Advanced'
  }]

},
{
  id: 'order-flow',
  label: 'Order Flow',
  children: []
},
{
  id: 'price-action',
  label: 'Price Action',
  children: []
},
{
  id: 'risk-management',
  label: 'Risk Management',
  children: []
},
{
  id: 'psychology',
  label: 'Trading Psychology',
  children: []
},
{
  id: 'macro',
  label: 'Macro Analysis',
  children: []
}];

export function NotesPage({ onNavigate }: NotesPageProps) {
  const [expanded, setExpanded] = useState<string[]>(['market-structure']);
  const toggleExpand = (id: string) => {
    setExpanded((prev) =>
    prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E8E0D4] selection:bg-brave-accent/20 selection:text-white">
      <SiteNav currentPage="notes" onNavigate={onNavigate} />

      <main className="w-full">
        {/* SECTION 1 — HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
          <span className="block text-[10px] font-medium tracking-[0.3em] text-brave-text-secondary mb-10 uppercase opacity-80">
            Knowledge Base
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-brave-text-primary mb-8 leading-[0.95] tracking-tight">
            Trading
            <br />
            <span className="text-brave-text-secondary/80">Notes.</span>
          </h1>
          <p className="text-lg text-brave-text-secondary font-light max-w-xl mx-auto mb-24 leading-relaxed opacity-90">
            A digital garden of trading concepts, definitions, and frameworks.
            Continuously updated and refined.
          </p>

          <div className="h-px w-full bg-brave-border/60" />
        </section>

        {/* SECTION 2 — CONTENT */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-3 border border-brave-border/60 rounded-[1px] p-6 h-fit bg-[#0C0C0C]">
              <div className="space-y-1">
                {treeData.map((node) =>
                <div key={node.id}>
                    <button
                    onClick={() => toggleExpand(node.id)}
                    className="flex items-center gap-3 w-full text-left px-3 py-2 text-sm text-brave-text-secondary hover:text-brave-text-primary hover:bg-[#161616] rounded-[1px] transition-colors">

                      {expanded.includes(node.id) ?
                    <ChevronDown className="w-3 h-3 opacity-60" /> :

                    <ChevronRight className="w-3 h-3 opacity-60" />
                    }
                      <Folder className="w-3.5 h-3.5 opacity-80" />
                      <span className="tracking-wide">{node.label}</span>
                    </button>

                    {expanded.includes(node.id) && node.children.length > 0 &&
                  <div className="ml-5 pl-3 border-l border-brave-border/30 mt-1 space-y-1">
                        {node.children.map((child) =>
                    <button
                      key={child.id}
                      className={`flex items-center gap-3 w-full text-left px-3 py-2 text-sm rounded-[1px] transition-colors ${child.id === 'basics' ? 'text-brave-text-primary bg-[#161616] font-medium' : 'text-brave-text-secondary hover:text-brave-text-primary hover:bg-[#161616]'}`}>

                            <FileText className="w-3.5 h-3.5 opacity-60" />
                            <span className="tracking-wide">{child.label}</span>
                          </button>
                    )}
                      </div>
                  }
                  </div>
                )}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-9 border border-brave-border/60 rounded-[1px] p-10 md:p-16 min-h-[600px] bg-[#0C0C0C]">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-brave-text-primary mb-6 leading-tight">
                  What is Market Structure
                </h2>
                <div className="flex gap-3 mb-10">
                  <span className="px-3 py-1.5 border border-brave-border/60 text-[10px] uppercase tracking-[0.15em] text-brave-text-secondary rounded-[1px] bg-[#0A0A0A]">
                    #MARKET-STRUCTURE
                  </span>
                  <span className="px-3 py-1.5 border border-brave-border/60 text-[10px] uppercase tracking-[0.15em] text-brave-text-secondary rounded-[1px] bg-[#0A0A0A]">
                    #BEGINNER
                  </span>
                </div>
                <div className="h-px w-full bg-brave-border/50 mb-10" />

                <div className="space-y-8 text-brave-text-secondary font-light leading-relaxed text-lg max-w-3xl">
                  <p>
                    Market structure is the framework of price action. It is
                    defined by the sequence of highs and lows that price creates
                    as it moves through time. A bullish market structure
                    consists of higher highs and higher lows, while a bearish
                    structure consists of lower highs and lower lows.
                  </p>
                  <p>
                    Understanding market structure is the single most important
                    skill a trader can develop. It tells you who is in control —
                    buyers or sellers — and provides the context for every other
                    tool in your arsenal.
                  </p>
                </div>
              </div>

              <div className="w-full aspect-video bg-[#050505] border border-brave-border/60 rounded-[1px] flex items-center justify-center">
                <div className="text-center">
                  <FileText className="w-12 h-12 text-brave-border mx-auto mb-4 opacity-50" />
                  <span className="text-xs text-brave-text-muted tracking-widest uppercase">
                    Diagram Placeholder
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — CTA */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="relative max-w-3xl mx-auto border border-brave-border/60 p-16 md:p-24 text-center bg-[#080808] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

            <h2 className="relative text-4xl md:text-5xl font-serif text-brave-text-primary mb-8 tracking-tight">
              Unlock the Members Vault
            </h2>
            <p className="relative text-base text-brave-text-secondary font-light max-w-lg mx-auto mb-14 leading-relaxed">
              Gain immediate access to the complete curriculum, live sessions,
              and the private performance environment.
            </p>
            <button className="relative px-10 py-5 bg-[#E8E0D4] text-[#0A0A0A] text-[10px] font-semibold tracking-[0.25em] uppercase hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_-5px_rgba(232,224,212,0.3)]">
              Access The Vault
            </button>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="max-w-2xl mx-auto px-6 pb-16 text-center">
          <p className="text-[10px] text-brave-text-muted italic leading-relaxed opacity-60">
            Past performance is not indicative of future results. Trading
            involves substantial risk of loss. All payouts shown are
            self-reported by members and independently verified where possible.
          </p>
        </div>
      </main>

      <Footer />
    </div>);

}