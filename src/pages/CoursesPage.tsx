
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { PublicNavbar } from '../components/PublicNavbar';
import { PublicFooter } from '../components/PublicFooter';

export function CoursesPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const handleScroll = () => setShowScrollTop(window.scrollY > 300);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PublicNavbar />
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-text-primary mb-4">Curriculum</h1>
            <p className="text-text-secondary text-lg font-light mb-2">A structured development path. From retail thinking to institutional execution.</p>
            <p className="text-text-secondary text-base mb-8">Designed to bridge gaps for aspiring traders, at any stage and for all levels.</p>
            <div className="flex items-center justify-center gap-3 mb-10 text-xs font-mono text-text-muted uppercase tracking-widest">
              <span className="text-gold">Zero</span>
              <div className="w-8 h-px bg-border"></div>
              <span>Learn</span>
              <div className="w-8 h-px bg-border"></div>
              <span>Build</span>
              <div className="w-8 h-px bg-border"></div>
              <span>Test</span>
              <div className="w-8 h-px bg-border"></div>
              <span>Refine</span>
              <div className="w-8 h-px bg-border"></div>
              <span className="text-gold">Profit</span>
            </div>
          </div>

          {/* PHASE I */}
          <section className="bg-bg-card border border-border p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bg-elevated border border-gold flex items-center justify-center text-xl font-serif text-gold font-bold">I</div>
                <div>
                  <h2 className="text-2xl font-serif text-text-primary mb-1">Foundations</h2>
                  <p className="text-gold text-xs font-mono uppercase tracking-widest">Welcome to the world of professional trading</p>
                </div>
              </div>
              <div className="flex flex-col md:items-end text-xs text-text-muted font-mono gap-1">
                <span>12 Lessons · ~12 Hours</span>
              </div>
            </div>
            <p className="text-text-secondary leading-relaxed mb-4 text-base">
              You've never read a candlestick chart before? Good. We start clean. No assumptions, no jargon, no inherited bad habits. By the end of this phase, you will read charts and price action the way institutions communicate it — in narratives, contexts, and frameworks.
            </p>
            <div className="bg-bg-elevated border-l-2 border-gold p-4 mb-6">
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Outcome → </span>
              You will be able to analyze the world's professional markets (e.g Pound Sterling, Gold, Bitcoin) and identify its market structure from an institutional and SMC perspective.
            </div>
            <div className="mb-2">
              <span className="font-bold text-text-primary text-sm">What You'll Learn:</span>
              <ul className="list-disc pl-6 mt-2 text-text-secondary text-sm space-y-1">
                <li>An Introduction to Electronic Trading Charts</li>
                <li>An Introduction into General Trading Practices</li>
                <li>What to focus on as an Aspiring Trader</li>
                <li>How to develop a Trading Style as an Aspiring Trader</li>
                <li>How to structure your Trading Process as an Aspiring Trader</li>
                <li>What to focus on in Price Action (from an SMC view)</li>
                <li>How to read Market Structure and find Levels (with SMC methods)</li>
                <li>How to find High Probability Trades that pay 3:1 RR for profiting</li>
              </ul>
            </div>
          </section>

          {/* PHASE II */}
          <section className="bg-bg-card border border-border p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bg-elevated border border-gold flex items-center justify-center text-xl font-serif text-gold font-bold">II</div>
                <div>
                  <h2 className="text-2xl font-serif text-text-primary mb-1">Inception</h2>
                  <p className="text-gold text-xs font-mono uppercase tracking-widest">The starting point to a professional trading career</p>
                </div>
              </div>
              <div className="flex flex-col md:items-end text-xs text-text-muted font-mono gap-1">
                <span>3 Modules · ~18 Hours · Day-trading Strategy docs</span>
              </div>
            </div>
            <p className="text-text-secondary leading-relaxed mb-4 text-base">
              You speak the language, and understand the concepts. Now you start building and making it yours. This phase introduces how to structure your SMC knowledge into a Trade Strategy with processes for — narrative, context, and trade ideas. You will construct a systematic approach to identifying high-probability setups for day trading and have the precise steps to follow, act and stay out.
            </p>
            <div className="bg-bg-elevated border-l-2 border-gold p-4 mb-6">
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Outcome → </span>
              You will have a complete Trade Strategy, SMC toolkit and a repeatable framework for identifying, planning, and executing SMC trade setups for Session Trading.
            </div>
            <div className="mb-2">
              <span className="font-bold text-text-primary text-sm">What You'll Learn:</span>
              <ul className="list-disc pl-6 mt-2 text-text-secondary text-sm space-y-1">
                <li>Narrative: The general grasp to approaching the trading week (from an SMC Day-trading view)</li>
                <li>Context: The manner to approaching the trading day and formulate a Daily Bias to govern day-trading actions.</li>
                <li>Framework: The processes to follow with a Daily Bias, for anticipating high-probability trade opportunity.</li>
                <li>Trade Ideas: The steps to find trade ideas for day-trading when presented with trade opportunity.</li>
                <li>Trade Execution: How to confirm trade ideas, find and manage entries until the end.</li>
              </ul>
            </div>
          </section>

          {/* PHASE III */}
          <section className="bg-bg-card border border-border p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bg-elevated border border-gold flex items-center justify-center text-xl font-serif text-gold font-bold">III</div>
                <div>
                  <h2 className="text-2xl font-serif text-text-primary mb-1">Infrastructure</h2>
                  <p className="text-gold text-xs font-mono uppercase tracking-widest">Solidifying your trading edge and professional trading career</p>
                </div>
              </div>
              <div className="flex flex-col md:items-end text-xs text-text-muted font-mono gap-1">
                <span>3 Modules · ~18 Hours · Trading OS docs</span>
              </div>
            </div>
            <p className="text-text-secondary leading-relaxed mb-4 text-base">
              You have a structure and model to your trading style. Now you solidify it under pressure and changing environments. This phase is about infrastructure — understanding the scope of a market relative to your style, and supporting your trading with deep levels of systems-thinking and reliability.
            </p>
            <div className="bg-bg-elevated border-l-2 border-gold p-4 mb-6">
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Outcome → </span>
              You will develop a personal trading edge — tested against seasonal environments, with the psychological resilience to execute across market conditions with profitable outcomes.
            </div>
            <div className="mb-2">
              <span className="font-bold text-text-primary text-sm">What You'll Learn:</span>
              <ul className="list-disc pl-6 mt-2 text-text-secondary text-sm space-y-1">
                <li>Narratives amplified to Macro and short-term environments</li>
                <li>Contexts adapted to nearby market conditions and settings</li>
                <li>Frameworks adjusted to volatility expectations and opportunity</li>
                <li>Trade Ideas enhanced with situational analysis and protocols</li>
                <li>Trader transcendence to ever-lasting growth with the markets</li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-bg-elevated border border-border p-10 max-w-2xl mx-auto rounded-lg">
            <h3 className="text-xl md:text-2xl font-serif text-text-primary mb-4">All three phases are included in the Members Vault.</h3>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto text-base">One membership gives you the complete journey — from your first candlestick to institutional-grade execution.</p>
            <Link to="/vault" className="inline-block px-8 py-4 bg-gold text-background font-mono text-sm uppercase tracking-widest font-medium hover:bg-gold/90 transition-colors rounded">
              Access the Members Vault
            </Link>
          </div>
        </div>
      </main>
      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-gold text-background rounded-full hover:bg-gold/90 transition-all shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
      <PublicFooter />
    </div>
  );
}