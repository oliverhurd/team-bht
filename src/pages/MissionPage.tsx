import React from 'react';
import { SiteNav } from '../components/SiteNav';
import { Footer } from '../components/Footer';
import {
  Youtube,
  Twitter,
  Instagram,
  Facebook,
  MessageCircle,
  Send,
  Target,
  User,
  Zap,
  Scale,
  Minimize2,
  AlertTriangle,
  TrendingUp,
  BarChart2,
  LayoutGrid,
  CheckCircle,
  Shield,
  RefreshCw } from
'lucide-react';
interface MissionPageProps {
  onNavigate: (page: string) => void;
}
const principles = [
{
  icon: Target,
  title: 'Be Principled',
  desc: 'Trading without principles is just gambling with a chart open. Every decision must be anchored to a rule.'
},
{
  icon: User,
  title: 'Know Thyself',
  desc: 'Your greatest edge is self-awareness. Your psychology, your patterns, your weaknesses under pressure.'
},
{
  icon: Zap,
  title: 'High Standards',
  desc: 'We don’t lower the bar to make trading feel accessible. We raise it so that the traders who meet it can perform.'
},
{
  icon: Scale,
  title: 'Balanced Audacity',
  desc: 'Courage without structure is reckless. Structure without courage produces inaction.'
},
{
  icon: Minimize2,
  title: 'Less Is More',
  desc: 'The basics account for 80% of how you trade. Complexity is a trap. We strip away the noise.'
},
{
  icon: AlertTriangle,
  title: 'Avoid Errors',
  desc: 'Errors of execution — entering without confirmation, moving stops, overriding the plan.'
},
{
  icon: TrendingUp,
  title: 'Process Over Profit',
  desc: 'P&L is a lagging indicator. Build the process correctly and the results will follow.'
},
{
  icon: BarChart2,
  title: 'Think in Averages',
  desc: 'No single trade defines your edge. Your edge lives in the aggregate — across sessions, across weeks.'
},
{
  icon: LayoutGrid,
  title: 'Trade Systematically',
  desc: 'A framework removes the emotion from the decision. When your model says yes, you act.'
},
{
  icon: CheckCircle,
  title: 'Trade Congruent',
  desc: 'Every trade must align with the narrative, the structure, and the model. If any element conflicts, the trade does not exist.'
},
{
  icon: Shield,
  title: 'Trade Responsibly',
  desc: 'Risk management is not a module — it is the foundation. Protect the account. Protect the psychology.'
},
{
  icon: RefreshCw,
  title: 'Continuous Improvement',
  desc: 'Mastery is not a destination. It is a permanent loop of execution, review, and refinement.'
}];

const socials = [
{
  name: 'YouTube',
  handle: '@BraveheartTrading',
  icon: Youtube
},
{
  name: 'X (Twitter)',
  handle: '@BraveheartTrading',
  icon: Twitter
},
{
  name: 'Instagram',
  handle: '@BraveheartTrading',
  icon: Instagram
},
{
  name: 'Facebook',
  handle: '@BraveheartTrading',
  icon: Facebook
},
{
  name: 'Discord',
  handle: 'Members Community',
  icon: MessageCircle
},
{
  name: 'Telegram',
  handle: '@BraveheartTrading',
  icon: Send
}];

export function MissionPage({ onNavigate }: MissionPageProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E8E0D4] selection:bg-brave-accent/20 selection:text-white">
      <SiteNav currentPage="mission" onNavigate={onNavigate} />

      <main className="w-full">
        {/* SECTION 1 — HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
          <span className="block text-[10px] font-medium tracking-[0.3em] text-brave-text-secondary mb-10 uppercase opacity-80">
            Our Mission
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-brave-text-primary mb-8 leading-[0.95] tracking-tight">
            Built for traders who
            <br />
            <span className="text-brave-text-secondary/80">
              are done studying.
            </span>
          </h1>
          <p className="text-lg text-brave-text-secondary font-light max-w-xl mx-auto mb-24 leading-relaxed opacity-90">
            To build a performance environment for traders who are ready to
            tackle the market to trade going forward.
          </p>

          <div className="h-px w-full bg-brave-border/60" />
        </section>

        {/* SECTION 2 — MANIFESTO */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-brave-text-primary mb-8 leading-tight">
                The gap between knowing and executing is not a knowledge
                problem.
              </h2>
            </div>
            <div className="space-y-6 text-brave-text-secondary font-light leading-relaxed">
              <p>
                You've put in the time. You've watched the videos, read the
                threads, built the charts. You understand the concepts — order
                blocks, liquidity sweeps, fair value gaps. In theory, it makes
                complete sense. But when the session opens and price starts
                moving, something breaks down.
              </p>
              <p>
                The decision doesn't come. Or it comes too fast. You enter
                early, or you miss it entirely. You know what you saw in
                hindsight but couldn't act on it in real time. That gap is a
                structural one.
              </p>
              <p>
                Braveheart Trading exists to build that framework. Structure,
                order flow, and the decision-making architecture required to
                perform under pressure.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — PRINCIPLES */}
        <section className="w-full border-t border-brave-border/50 bg-[#050505] py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-serif text-brave-text-primary mb-4">
                Values & Principles
              </h2>
              <p className="text-brave-text-secondary font-light text-sm tracking-wide">
                The standards we build and trade by — non-negotiable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((p, idx) =>
              <div
                key={idx}
                className="bg-brave-card border border-brave-border/60 p-8 rounded-[1px] hover:border-brave-text-secondary/30 transition-all duration-500 hover:-translate-y-1">

                  <p.icon className="w-6 h-6 text-brave-text-secondary mb-6 stroke-[1.5]" />
                  <h3 className="text-lg font-serif text-brave-text-primary mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-brave-text-secondary font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 4 — COMMUNITY */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-brave-text-primary mb-4">
              Connect With Us
            </h2>
            <p className="text-brave-text-secondary font-light text-sm tracking-wide">
              Free content, structural breakdowns, and community updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {socials.map((s, idx) =>
            <a
              key={idx}
              href="#"
              className="flex items-center gap-4 p-6 bg-brave-card border border-brave-border/60 rounded-[1px] hover:bg-[#161616] transition-all duration-300 group hover:border-brave-text-secondary/30">

                <div className="p-3 bg-[#0A0A0A] border border-brave-border/60 rounded-[1px] group-hover:border-brave-text-secondary/50 transition-colors">
                  <s.icon className="w-5 h-5 text-brave-text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-brave-text-primary group-hover:text-white transition-colors">
                    {s.name}
                  </div>
                  <div className="text-xs text-brave-text-secondary">
                    {s.handle}
                  </div>
                </div>
              </a>
            )}
          </div>
        </section>

        {/* SECTION 5 — CTA */}
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