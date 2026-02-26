import React from 'react';
import { ArrowRight } from 'lucide-react';
const issues = [
{
  number: '47',
  title: 'Reading Liquidity Sweeps in Real Time',
  date: 'Feb 24, 2026'
},
{
  number: '46',
  title: 'The Framework for Session Trading',
  date: 'Feb 17, 2026'
},
{
  number: '45',
  title: 'How to Identify High-Probability Order Blocks',
  date: 'Feb 10, 2026'
},
{
  number: '44',
  title: 'Building Your Daily Bias Process',
  date: 'Feb 3, 2026'
},
{
  number: '43',
  title: 'Why Most Traders Fail at Execution',
  date: 'Jan 27, 2026'
},
{
  number: '42',
  title: 'Narrative vs. Context: When to Trade and When to Wait',
  date: 'Jan 20, 2026'
}];

export function NewsletterArchive() {
  return (
    <section className="w-full px-6 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="block text-xs font-medium tracking-[0.2em] text-brave-text-secondary mb-4 uppercase">
          The Archive
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-brave-text-primary mb-4">
          The Newsletter Vault
        </h2>
        <p className="text-brave-text-secondary font-light">
          Browse past issues. Be the first to know when new ones drop.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {issues.map((issue, idx) =>
        <div
          key={idx}
          className="group bg-brave-card border border-brave-border p-6 rounded-sm hover:border-brave-text-secondary/50 transition-all duration-300">

            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-mono text-brave-accent border border-brave-accent/30 px-2 py-1 rounded-sm">
                #{issue.number}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-brave-text-muted">
                {issue.date}
              </span>
            </div>
            <h3 className="text-xl font-serif text-brave-text-primary mb-6 group-hover:text-white transition-colors">
              {issue.title}
            </h3>
            <a
            href="#"
            className="inline-flex items-center text-xs font-medium tracking-widest uppercase text-brave-text-secondary group-hover:text-brave-accent transition-colors">

              Read Issue{' '}
              <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        )}
      </div>

      <div className="text-center">
        <button className="bg-[#E8E0D4] text-[#0A0A0A] px-8 py-3 font-medium text-sm tracking-widest uppercase hover:bg-white transition-colors rounded-sm mb-4">
          Subscribe
        </button>
        <p className="text-xs text-brave-text-muted uppercase tracking-wider">
          Join 4,200+ traders. Free forever.
        </p>
      </div>
    </section>);

}