import React from 'react';
import { PublicNavbar } from '../components/PublicNavbar';
import { PublicFooter } from '../components/PublicFooter';
import { Link } from 'react-router-dom';
import { Youtube, Twitter, Instagram, Facebook, ExternalLink, MessageSquare, Send } from 'lucide-react';

// Custom SVG Icons from uploaded assets
const IconPrincipled = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="20" y="20" width="60" height="60" />
    <line x1="20" y1="40" x2="80" y2="40" />
    <line x1="20" y1="60" x2="80" y2="60" />
    <line x1="40" y1="20" x2="40" y2="80" />
    <line x1="60" y1="20" x2="60" y2="80" />
    <polygon points="50,25 53,32 50,28 47,32" fill="currentColor" stroke="none" />
    <ellipse cx="35" cy="50" rx="8" ry="10" />
    <ellipse cx="65" cy="50" rx="8" ry="10" />
    <line x1="35" y1="60" x2="35" y2="65" />
    <line x1="65" y1="60" x2="65" y2="65" />
    <line x1="27" y1="65" x2="43" y2="65" />
    <line x1="57" y1="65" x2="73" y2="65" />
  </svg>
);

const IconKnowThyself = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="50" cy="70" r="30" />
    <path d="M 30 55 Q 50 20 70 55" />
    <line x1="50" y1="20" x2="50" y2="10" />
    {[...Array(8)].map((_, i) => {
      const angle = (i * 45 - 90) * Math.PI / 180;
      const r1 = 22, r2 = 28;
      return <line key={i} x1={50 + r1 * Math.cos(angle)} y1={30 + r1 * Math.sin(angle)} x2={50 + r2 * Math.cos(angle)} y2={30 + r2 * Math.sin(angle)} />;
    })}
    <circle cx="50" cy="42" r="4" />
    <polygon points="50,38 54,44 46,44" fill="currentColor" stroke="none" />
  </svg>
);

const IconHighStandards = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="15" y1="80" x2="85" y2="80" />
    <rect x="25" y="60" width="15" height="20" />
    <rect x="42" y="45" width="15" height="35" />
    <rect x="59" y="30" width="15" height="50" />
    <circle cx="67" cy="22" r="10" />
    <polyline points="63,22 66,25 72,18" strokeWidth="2.5" />
    <line x1="15" y1="80" x2="15" y2="85" strokeDasharray="2,3" />
    <line x1="25" y1="80" x2="35" y2="80" strokeDasharray="2,3" />
    <line x1="45" y1="80" x2="55" y2="80" strokeDasharray="2,3" />
    <line x1="65" y1="80" x2="75" y2="80" strokeDasharray="2,3" />
    <line x1="85" y1="80" x2="85" y2="85" strokeDasharray="2,3" />
  </svg>
);

const IconBalancedAudacity = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="50" cy="82" rx="30" ry="5" />
    <line x1="50" y1="77" x2="50" y2="30" />
    <line x1="20" y1="45" x2="80" y2="45" />
    <circle cx="50" cy="45" r="4" />
    <path d="M 20 45 Q 20 62 30 68" />
    <path d="M 80 45 Q 80 62 70 68" />
    <ellipse cx="25" cy="68" rx="10" ry="6" />
    <ellipse cx="75" cy="68" rx="10" ry="6" />
    <polygon points="50,15 55,28 50,23 45,28" fill="currentColor" stroke="none" />
  </svg>
);

const IconLessIsMore = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="15" y="15" width="70" height="70" rx="2" />
    <line x1="30" y1="50" x2="70" y2="50" strokeWidth="3" />
  </svg>
);

const IconAvoidErrors = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M 50 10 L 85 28 L 85 60 Q 85 82 50 92 Q 15 82 15 60 L 15 28 Z" />
    <path d="M 50 12 L 83 29 L 83 60 Q 83 80 50 90 Q 17 80 17 60 L 17 29 Z" strokeWidth="0.5" opacity="0.4" />
    <line x1="50" y1="38" x2="50" y2="62" strokeWidth="3" strokeLinecap="round" />
    <circle cx="50" cy="70" r="3" fill="currentColor" />
  </svg>
);

const IconProcessOverProfit = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="50" cy="50" r="34" />
    <polyline points="30,50 35,42 40,55 45,35 50,60 55,40 60,52 65,44 70,50" strokeWidth="1.5" />
    <polygon points="70,50 67,46 74,46" fill="currentColor" stroke="none" transform="rotate(0,70,50)" />
  </svg>
);

const IconThinkInAverages = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="15" y1="82" x2="15" y2="18" />
    <line x1="15" y1="82" x2="85" y2="82" />
    <path d="M 15 75 Q 35 72 50 55 Q 65 38 85 22" strokeWidth="2.5" />
    <line x1="15" y1="82" x2="85" y2="82" strokeDasharray="2,4" strokeWidth="1" />
    <circle cx="35" cy="68" r="2.5" fill="currentColor" />
    <circle cx="55" cy="50" r="2.5" fill="currentColor" />
    <circle cx="75" cy="30" r="2.5" fill="currentColor" />
    <path d="M 83 22 L 89 20 L 87 26" fill="currentColor" stroke="none" />
  </svg>
);

const IconTradeSystematically = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="15" y="15" width="32" height="32" rx="2" />
    <rect x="53" y="15" width="32" height="32" rx="2" />
    <rect x="15" y="53" width="32" height="32" rx="2" />
    <rect x="53" y="53" width="32" height="32" rx="2" />
    <line x1="47" y1="31" x2="53" y2="31" />
    <line x1="47" y1="69" x2="53" y2="69" />
    <line x1="31" y1="47" x2="31" y2="53" />
    <line x1="69" y1="47" x2="69" y2="53" />
  </svg>
);

const IconTradeCongruent = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="50" cy="50" r="35" />
    <polyline points="35,50 45,60 65,38" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="50" y1="15" x2="50" y2="8" />
    <line x1="50" y1="92" x2="50" y2="85" />
    <line x1="15" y1="50" x2="8" y2="50" />
    <line x1="92" y1="50" x2="85" y2="50" />
  </svg>
);

const IconTradeResponsibly = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="50" cy="50" r="35" />
    <line x1="30" y1="50" x2="70" y2="50" />
    <line x1="50" y1="30" x2="50" y2="70" />
    <circle cx="50" cy="50" r="12" />
  </svg>
);

const IconContinuousImprovement = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="50" cy="50" r="30" fill="none" strokeDasharray="8,4" />
    <polygon points="50,20 54,30 46,30" fill="currentColor" stroke="none" />
    <polygon points="80,50 70,54 70,46" fill="currentColor" stroke="none" />
    <polygon points="50,80 46,70 54,70" fill="currentColor" stroke="none" />
    <polygon points="20,50 30,46 30,54" fill="currentColor" stroke="none" />
    <circle cx="50" cy="50" r="6" fill="currentColor" stroke="none" />
    <line x1="35" y1="50" x2="45" y2="50" />
    <line x1="55" y1="50" x2="65" y2="50" />
    <line x1="50" y1="35" x2="50" y2="45" />
    <line x1="50" y1="55" x2="50" y2="65" />
  </svg>
);

const VALUES = [
  {
    icon: <IconPrincipled />,
    title: 'Be Principled',
    body: "Trading without principles is just gambling with a chart open. Every decision must be anchored to a rule. Every rule must be anchored to a reason. If you can't explain why, you shouldn't be in the trade.",
  },
  {
    icon: <IconKnowThyself />,
    title: 'Know Thyself',
    body: 'Your greatest edge is self-awareness. Your psychology, your patterns, your weaknesses under pressure — these matter as much as your setup. The trader who knows themselves executes. The one who doesn\'t, reacts.',
  },
  {
    icon: <IconHighStandards />,
    title: 'High Standards',
    body: "We don't lower the bar to make trading feel accessible. We raise it so that the traders who meet it can perform at a level that's actually sustainable. Quality over quantity — in setups, in thinking, in everything.",
  },
  {
    icon: <IconBalancedAudacity />,
    title: 'Balanced Audacity',
    body: 'Courage without structure is reckless. Structure without courage produces inaction. The professional executes when the model confirms — with conviction, without hesitation, and without ego.',
  },
  {
    icon: <IconLessIsMore />,
    title: 'Less Is More',
    body: 'The basics account for 80% of how you trade. Complexity is a trap. We strip away the noise, reinforce the essentials, and build from there. Simplicity is not a starting point — it\'s the destination.',
  },
  {
    icon: <IconAvoidErrors />,
    title: 'Avoid Errors',
    body: 'Errors of execution — entering without confirmation, moving stops, overriding the plan — compound faster than losses. A professional-grade process eliminates avoidable mistakes before they become habits.',
  },
  {
    icon: <IconProcessOverProfit />,
    title: 'Process Over Profit',
    body: 'P&L is a lagging indicator. Build the process correctly and the results will follow. Focus on execution quality, not the outcome of any single trade.',
  },
  {
    icon: <IconThinkInAverages />,
    title: 'Think in Averages',
    body: 'No single trade defines your edge. Your edge lives in the aggregate — across sessions, across weeks, across market conditions. Evaluate performance over sample size, not individual results.',
  },
  {
    icon: <IconTradeSystematically />,
    title: 'Trade Systematically',
    body: 'A framework removes the emotion from the decision. When your model says yes, you act. When it doesn\'t, you wait. Systematic execution is what separates performance from participation.',
  },
  {
    icon: <IconTradeCongruent />,
    title: 'Trade Congruent',
    body: 'Every trade must align with the narrative, the structure, and the model. If any element conflicts, the trade does not exist. Congruence is the filter that separates A+ setups from noise.',
  },
  {
    icon: <IconTradeResponsibly />,
    title: 'Trade Responsibly',
    body: 'Risk management is not a module — it is the foundation. Protect the account. Protect the psychology. A trader who survives long enough to execute consistently wins by default.',
  },
  {
    icon: <IconContinuousImprovement />,
    title: 'Continuous Improvement',
    body: 'Mastery is not a destination. It is a permanent loop of execution, review, and refinement. The professional trader is always a student — of the markets, and of themselves.',
  },
];

const SOCIALS = [
  {
    icon: <Youtube size={20} />,
    name: 'YouTube',
    handle: '@BraveheartTrading',
    url: 'https://youtube.com/@BraveheartTrading',
    color: 'bg-red-600/10 text-red-500 border-red-500/20',
  },
  {
    icon: <Twitter size={20} />,
    name: 'X (Twitter)',
    handle: '@BraveheartTrading',
    url: 'https://x.com/BraveheartTrading',
    color: 'bg-sky-500/10 text-sky-400 border-sky-400/20',
  },
  {
    icon: <Instagram size={20} />,
    name: 'Instagram',
    handle: '@BraveheartTrading',
    url: 'https://instagram.com/BraveheartTrading',
    color: 'bg-pink-500/10 text-pink-400 border-pink-400/20',
  },
  {
    icon: <Facebook size={20} />,
    name: 'Facebook',
    handle: 'Braveheart Trading',
    url: 'https://facebook.com/BraveheartTrading',
    color: 'bg-blue-500/10 text-blue-400 border-blue-400/20',
  },
  {
    icon: <MessageSquare size={20} />,
    name: 'Discord',
    handle: 'Members Community',
    url: '/vault',
    color: 'bg-indigo-500/10 text-indigo-400 border-indigo-400/20',
    internal: true,
  },
    {
    icon: <Send size={20} />,
    name: 'Telegram',
    handle: '@BraveheartTrading',
    url: 'https://t.me/BraveheartTrading',
    color: 'bg-indigo-500/10 text-indigo-400 border-indigo-400/20',
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PublicNavbar />

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* ── HERO ── */}
          <div className="mb-20 text-center">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-gold mb-6">Our Mission</p>
            <h1 className="text-4xl md:text-6xl font-serif text-text-primary mb-8 leading-tight">
              Built for traders who are<br className="hidden md:block" /> done studying.
            </h1>
            <div className="w-12 h-px bg-gold mx-auto"></div>
          </div>

          {/* ── MISSION BODY ── */}
          <div className="max-w-3xl mx-auto mb-28">
            <p className="text-xl md:text-2xl text-text-primary mb-10 font-serif font-light italic border-l-2 border-gold pl-6 leading-relaxed">
              "To build a performance environment for traders who are done studying — and ready to tackle the market to trade going forward."
            </p>
            <div className="space-y-5 font-mono text-text-secondary text-sm leading-relaxed">
              <p>
                You've put in the time. You've watched the videos, read the threads, built the charts. You understand the concepts — orderblocks, liquidity sweeps, fair value gaps. In theory, it makes complete sense. But when the session opens and price starts moving, something breaks down.
              </p>
              <p>
                The decision doesn't come. Or it comes too fast. You enter early, or you miss it entirely. You know what you saw in hindsight but couldn't act on it in real time. That gap — between knowing and executing — is not a knowledge problem. It's a structural one.
              </p>
              <p>
                Most traders never close it because they're still adding tools, not building a system. More concepts, more indicators, more confluences — all of it creating the illusion of progress while the fundamental problem remains: there is no operating framework for when to act, when to wait, and when to walk away.
              </p>
              <p>
                Braveheart Trading exists to build that framework. Structure, order flow, and the decision-making architecture required to perform under pressure. No shortcuts. No magic indicators. Just the mechanics of how markets actually move — and how to operate within them consistently.
              </p>
            </div>
          </div>

          {/* ── VALUES ── */}
          <div className="mb-28">
            <div className="text-center mb-16">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-gold mb-4">Standards</p>
              <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-4">
                Values & Principles
              </h2>
              <p className="text-text-secondary font-mono text-sm max-w-xl mx-auto">
                The standards we build and trade by — non-negotiable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VALUES.map((v, idx) => (
                <div
                  key={idx}
                  className="bg-bg-card p-7 border border-border border-t-2 border-t-gold hover:bg-bg-elevated transition-colors duration-300 group"
                >
                  <div className="text-gold mb-5 opacity-80 group-hover:opacity-100 transition-opacity">
                    {v.icon}
                  </div>
                  <h3 className="text-base font-serif text-text-primary mb-3 tracking-wide">
                    {v.title}
                  </h3>
                  <p className="text-text-secondary text-xs font-mono leading-relaxed">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CONNECT ── */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-gold mb-4">Community</p>
              <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-4">
                Connect With Us
              </h2>
              <p className="text-text-secondary font-mono text-sm max-w-xl mx-auto">
                Free content, structural breakdowns, and community updates across all platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SOCIALS.map((s, idx) => {
                const content = (
                  <div className="flex items-center gap-4 p-5 bg-bg-card border border-border hover:border-gold transition-all duration-300 group cursor-pointer">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center border flex-shrink-0 ${s.color}`}>
                      {s.icon}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-text-primary font-bold text-sm group-hover:text-gold transition-colors">
                          {s.name}
                        </span>
                        <ExternalLink size={11} className="text-text-muted flex-shrink-0" />
                      </div>
                      <div className="text-xs text-gold font-mono truncate">{s.handle}</div>
                      <div className="text-xs text-text-muted mt-0.5 leading-snug">{s.desc}</div>
                    </div>
                  </div>
                );

                return s.internal ? (
                  <Link key={idx} to={s.url}>{content}</Link>
                ) : (
                  <a key={idx} href={s.url} target="_blank" rel="noopener noreferrer">{content}</a>
                );
              })}
            </div>
          </div>

          {/* ── MEMBERS VAULT CTA ── */}
          <div className="border border-border bg-bg-elevated p-12 text-center">
            <div className="w-12 h-px bg-gold mx-auto mb-8"></div>
            <h3 className="text-2xl md:text-3xl font-serif text-text-primary mb-4">
              Unlock the Members Vault
            </h3>
            <p className="text-text-secondary font-mono text-sm mb-8 max-w-lg mx-auto leading-relaxed">
              Gain immediate access to our complete curriculum, live session recordings, downloadable resources, and expert community—all in one secure location.
            </p>
            <Link
              to="/vault"
              className="inline-block px-10 py-4 bg-gold text-background font-mono text-xs uppercase tracking-widest font-medium hover:bg-gold/90 transition-colors"
            >
              Access the Vault
            </Link>
          </div>

        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
