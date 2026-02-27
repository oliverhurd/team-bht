import React, { useState } from 'react';
import { SiteNav } from '../components/SiteNav';
import { Footer } from '../components/Footer';
import { ArrowDown, CheckCircle } from 'lucide-react';
interface ResultsPageProps {
  onNavigate: (page: string) => void;
}
const stats = [
{
  value: '$850,000+',
  label: 'Member Payouts'
},
{
  value: '42',
  label: 'Verified Distributions'
},
{
  value: '$3,200',
  label: 'Average First Payout'
},
{
  value: '$28,500',
  label: 'Largest Single Payout'
}];

const caseStudies = [
{
  name: 'MICHAEL S.',
  milestone: 'Funded Trader',
  payout: '$12,450',
  date: 'OCT 14, 2025',
  images: [
  'https://placehold.co/400x500/111/333?text=Certificate',
  'https://placehold.co/400x500/111/333?text=Dashboard',
  'https://placehold.co/400x500/111/333?text=Discord']

},
{
  name: 'SARAH J.',
  milestone: 'Performance Scale',
  payout: '$8,920',
  date: 'NOV 02, 2025',
  images: [
  'https://placehold.co/400x500/111/333?text=Certificate',
  'https://placehold.co/400x500/111/333?text=Dashboard',
  'https://placehold.co/400x500/111/333?text=Discord']

},
{
  name: 'DAVID R.',
  milestone: 'Capital Allocation',
  payout: '$15,100',
  date: 'DEC 10, 2025',
  images: [
  'https://placehold.co/400x500/111/333?text=Certificate',
  'https://placehold.co/400x500/111/333?text=Dashboard',
  'https://placehold.co/400x500/111/333?text=Discord']

}];

const initialPayouts = [
{
  src: 'https://placehold.co/400x400/111/333?text=Payout+1',
  amount: '$4,200',
  date: 'JAN 12'
},
{
  src: 'https://placehold.co/400x400/111/333?text=Payout+2',
  amount: '$8,150',
  date: 'JAN 10'
},
{
  src: 'https://placehold.co/400x400/111/333?text=Payout+3',
  amount: '$2,900',
  date: 'JAN 08'
},
{
  src: 'https://placehold.co/400x400/111/333?text=Payout+4',
  amount: '$12,400',
  date: 'JAN 05'
},
{
  src: 'https://placehold.co/400x400/111/333?text=Payout+5',
  amount: '$5,600',
  date: 'JAN 03'
},
{
  src: 'https://placehold.co/400x400/111/333?text=Payout+6',
  amount: '$3,100',
  date: 'DEC 28'
}];

export function ResultsPage({ onNavigate }: ResultsPageProps) {
  const [payouts, setPayouts] = useState(initialPayouts);
  const loadMore = () => {
    setPayouts([
    ...payouts,
    {
      src: 'https://placehold.co/400x400/111/333?text=Payout+7',
      amount: '$6,700',
      date: 'DEC 24'
    },
    {
      src: 'https://placehold.co/400x400/111/333?text=Payout+8',
      amount: '$9,200',
      date: 'DEC 20'
    },
    {
      src: 'https://placehold.co/400x400/111/333?text=Payout+9',
      amount: '$4,800',
      date: 'DEC 18'
    }]
    );
  };
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E8E0D4] selection:bg-brave-accent/20 selection:text-white">
      <SiteNav currentPage="results" onNavigate={onNavigate} />

      <main className="w-full">
        {/* SECTION 1 — HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
          <span className="block text-[10px] font-medium tracking-[0.3em] text-brave-text-secondary mb-10 uppercase opacity-80">
            Results
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-brave-text-primary mb-8 leading-[0.95] tracking-tight">
            Documented
            <br />
            <span className="text-brave-text-secondary/80">
              Trader Payouts.
            </span>
          </h1>
          <p className="text-lg text-brave-text-secondary font-light max-w-xl mx-auto mb-24 leading-relaxed opacity-90">
            A live record of member distributions, milestone achievements, and
            capital progression — produced within a structured performance
            framework.
          </p>

          {/* Stats Row */}
          <div className="border-y border-brave-border/60 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
              {stats.map((stat, idx) =>
              <div
                key={idx}
                className={`flex flex-col items-center justify-center ${idx !== stats.length - 1 && idx % 2 !== 1 ? 'md:border-r border-brave-border/30' : ''} ${idx % 2 === 0 ? 'border-r border-brave-border/30 md:border-none' : ''} ${idx !== 3 ? 'md:border-r md:border-brave-border/30' : ''}`}>

                  <span className="text-4xl md:text-5xl font-serif text-white mb-3 tracking-tight tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-brave-text-secondary/70">
                    {stat.label}
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 2 — FEATURED TRADER CASE STUDIES */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {caseStudies.map((study, idx) =>
            <div key={idx} className="flex flex-col group cursor-default">
                {/* Header Info */}
                <div className="mb-10 pl-4 border-l border-brave-border/30 transition-colors duration-500 group-hover:border-brave-accent/50">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-3 h-3 text-brave-accent/80" />
                    <span className="text-[10px] font-medium tracking-widest uppercase text-brave-text-secondary/80">
                      Verified Payout
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-brave-text-primary">
                      {study.name}
                    </span>
                    <span className="text-[10px] tracking-widest text-brave-text-muted font-mono">
                      {study.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif text-brave-text-secondary mb-2">
                    {study.milestone}
                  </h3>
                  <p className="text-5xl font-serif text-white tracking-tight tabular-nums">
                    {study.payout}
                  </p>
                </div>

                {/* Proof Grid */}
                <div className="grid grid-cols-2 gap-3 transition-all duration-700 ease-out group-hover:translate-y-[-4px]">
                  {/* Main Certificate */}
                  <div className="col-span-2 aspect-[4/5] relative overflow-hidden rounded-[1px] bg-[#111] ring-1 ring-white/5 group-hover:ring-brave-accent/20 transition-all duration-500 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />
                    <img
                    src={study.images[0]}
                    alt="Certificate"
                    className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 grayscale group-hover:grayscale-0" />

                    <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <span className="text-[10px] tracking-widest uppercase text-white/90 bg-black/50 backdrop-blur-sm px-2 py-1 border border-white/10">
                        Certificate
                      </span>
                    </div>
                  </div>

                  {/* Secondary Proofs */}
                  <div className="aspect-square relative overflow-hidden rounded-[1px] bg-[#111] ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-500">
                    <img
                    src={study.images[1]}
                    alt="Dashboard"
                    className="w-full h-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90 grayscale hover:grayscale-0" />

                  </div>
                  <div className="aspect-square relative overflow-hidden rounded-[1px] bg-[#111] ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-500">
                    <img
                    src={study.images[2]}
                    alt="Testimonial"
                    className="w-full h-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90 grayscale hover:grayscale-0" />

                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 3 — PAYOUT FEED */}
        <section className="w-full border-t border-brave-border/50 bg-[#050505] py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-serif text-brave-text-primary mb-4">
                Payout Archive
              </h2>
              <p className="text-brave-text-secondary font-light text-sm tracking-wide">
                A chronological record of member distributions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {payouts.map((item, idx) =>
              <div
                key={idx}
                className="group relative aspect-square border border-brave-border/40 overflow-hidden bg-[#0A0A0A] cursor-pointer hover:border-brave-text-secondary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">

                  <img
                  src={item.src}
                  alt={`Payout ${idx + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 opacity-70 group-hover:opacity-40 group-hover:scale-105 grayscale" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-3xl font-serif text-white mb-2 tabular-nums">
                      {item.amount}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-brave-accent border-t border-brave-accent/30 pt-2 mt-1">
                      {item.date} • Verified
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="text-center">
              <button
                onClick={loadMore}
                className="group inline-flex items-center gap-3 px-10 py-4 border border-brave-border/60 text-[10px] font-medium tracking-[0.2em] uppercase text-brave-text-secondary hover:text-brave-text-primary hover:border-brave-text-primary/50 hover:bg-[#111] transition-all duration-300">

                Load More{' '}
                <ArrowDown className="w-3 h-3 transition-transform duration-300 group-hover:translate-y-1" />
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 4 — CTA */}
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