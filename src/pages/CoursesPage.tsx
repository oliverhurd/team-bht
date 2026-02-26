import React, { useState } from 'react';
import { SiteNav } from '../components/SiteNav';
import { Footer } from '../components/Footer';
interface CoursesPageProps {
  onNavigate: (page: string) => void;
}
const phases = [
{
  id: 'I',
  title: 'Foundations',
  subtitle: 'WELCOME TO THE WORLD OF PROFESSIONAL TRADING',
  meta: '12 Lessons · ~12 Hours',
  desc: "You've never read a candlestick chart before? Good. We start clean. No assumptions, no jargon, no inherited bad habits. By the end of this phase, you will read charts and price action the way institutions communicate it — in narratives, contexts, and frameworks.",
  outcome:
  'You will be able to analyze the world’s professional markets (e.g Pound Sterling, Gold, Bitcoin) and identify its market structure from an institutional and SMC perspective.',
  learn: [
  'An Introduction to Electronic Trading Charts',
  'An Introduction into General Trading Practices',
  'What to focus on as an Aspiring Trader',
  'How to develop a Trading Style as an Aspiring Trader',
  'How to structure your Trading Process as an Aspiring Trader',
  'What to focus on in Price Action (from an SMC view)',
  'How to read Market Structure and find Levels (with SMC methods)',
  'How to find High Probability Trades that pay 3:1 RR for profiting']

},
{
  id: 'II',
  title: 'Inception',
  subtitle: 'THE STARTING POINT TO A PROFESSIONAL TRADING CAREER',
  meta: '3 Modules · ~18 Hours · Day-trading Strategy docs',
  desc: 'You speak the language, and understand the concepts. Now you start building and making it yours. This phase introduces how to structure your SMC knowledge into a Trade Strategy with processes for — narrative, context, and trade ideas. You will construct a systematic approach to identifying high-probability setups for day trading.',
  outcome:
  'You will have a complete Trade Strategy, SMC toolkit and a repeatable framework for identifying, planning, and executing SMC trade setups for Session Trading.',
  learn: [
  'Narrative: The general grasp to approaching the trading week',
  'Context: The manner to approaching the trading day and formulate a Daily Bias',
  'Framework: The processes to follow with a Daily Bias, for anticipating high-probability trade opportunity',
  'Trade Ideas: The steps to find trade ideas for day-trading when presented with trade opportunity',
  'Trade Execution: How to confirm trade ideas, find and manage entries until the end']

},
{
  id: 'III',
  title: 'Infrastructure',
  subtitle: 'SOLIDIFYING YOUR TRADING EDGE AND PROFESSIONAL TRADING CAREER',
  meta: '3 Modules · ~18 Hours · Trading OS docs',
  desc: 'You have a structure and model to your trading style. Now you solidify it under pressure and changing environments. This phase is about infrastructure — understanding the scope of a market relative to your style, and supporting your trading with deep levels of systems-thinking and reliability.',
  outcome:
  'You will develop a personal trading edge — tested against seasonal environments, with the psychological resilience to execute across market conditions with profitable outcomes.',
  learn: [
  'Narratives amplified to Macro and short-term environments',
  'Contexts adapted to nearby market conditions and settings',
  'Frameworks adjusted to volatility expectations and opportunity',
  'Trade Ideas enhanced with situational analysis and protocols',
  'Trader transcendence to ever-lasting growth with the markets']

}];

export function CoursesPage({ onNavigate }: CoursesPageProps) {
  const [activeTab, setActiveTab] = useState('BUILD');
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E8E0D4] selection:bg-brave-accent/20 selection:text-white">
      <SiteNav currentPage="courses" onNavigate={onNavigate} />

      <main className="w-full">
        {/* SECTION 1 — HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
          <span className="block text-[10px] font-medium tracking-[0.3em] text-brave-text-secondary mb-10 uppercase opacity-80">
            Curriculum
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-brave-text-primary mb-8 leading-[0.95] tracking-tight">
            A structured
            <br />
            <span className="text-brave-text-secondary/80">
              development path.
            </span>
          </h1>
          <p className="text-lg text-brave-text-secondary font-light max-w-xl mx-auto mb-16 leading-relaxed opacity-90">
            From retail thinking to institutional execution. Designed to bridge
            gaps for aspiring traders, at any stage and for all levels.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-medium tracking-[0.2em] uppercase text-brave-text-secondary mb-24">
            {['ZERO', 'LEARN', 'BUILD', 'TEST', 'REFINE', 'PROFIT'].map(
              (tab) =>
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 border-b transition-all duration-300 ${activeTab === tab ? 'text-brave-text-primary border-brave-text-primary' : 'border-transparent hover:text-brave-text-primary hover:border-brave-text-primary/30'}`}>

                  {tab}
                </button>

            )}
          </div>

          <div className="h-px w-full bg-brave-border/60" />
        </section>

        {/* SECTION 2 — PHASES */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="space-y-16">
            {phases.map((phase) =>
            <div
              key={phase.id}
              className="bg-brave-card border border-brave-border/60 p-8 md:p-12 rounded-[1px] hover:border-brave-text-secondary/30 transition-all duration-500">

                <div className="flex flex-col md:flex-row justify-between items-start mb-10 border-b border-brave-border/50 pb-10">
                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 border border-brave-border/60 flex items-center justify-center font-serif text-2xl text-brave-text-primary">
                      {phase.id}
                    </div>
                    <div>
                      <h2 className="text-3xl font-serif text-brave-text-primary mb-3">
                        {phase.title}
                      </h2>
                      <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-brave-text-secondary">
                        {phase.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 text-xs text-brave-text-secondary font-mono bg-[#0A0A0A] px-3 py-1.5 border border-brave-border/60">
                    {phase.meta}
                  </div>
                </div>

                <div className="space-y-10">
                  <p className="text-brave-text-secondary font-light leading-relaxed max-w-4xl">
                    {phase.desc}
                  </p>

                  <div className="border-l border-brave-text-primary/20 pl-6 py-1">
                    <p className="text-[10px] font-medium text-brave-text-primary mb-2 uppercase tracking-[0.2em]">
                      Outcome
                    </p>
                    <p className="text-brave-text-secondary font-light italic">
                      {phase.outcome}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-brave-text-primary mb-6">
                      What You'll Learn:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {phase.learn.map((item, idx) =>
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-brave-text-secondary font-light">

                          <span className="mt-2 w-1 h-1 rounded-full bg-brave-text-secondary/50 flex-shrink-0" />
                          {item}
                        </li>
                    )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
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