import React from 'react';
import { PublicNavbar } from '../components/PublicNavbar';
import { PublicFooter } from '../components/PublicFooter';
import {
  Youtube,
  Twitter,
  Instagram,
  Facebook,
  ExternalLink,
  Shield,
  Target,
  BookOpen,
  TrendingUp,
  Users,
  Eye
} from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PublicNavbar />

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Hero */}
          <div className="mb-20 text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-text-primary mb-6">
              Our Mission
            </h1>
            <div className="w-12 h-px bg-gold mx-auto"></div>
          </div>

          {/* Mission Statement */}
          <div className="prose prose-invert prose-lg max-w-none mb-24 font-serif text-text-secondary leading-relaxed">

            <p className="text-xl md:text-2xl text-text-primary mb-8 font-light italic border-l-2 border-gold pl-6">
              "To build a performance environment for traders who are done studying — and ready to tackle the market to trade going forward."
            </p>

            <p className="mb-6">
              {"You've put in the time. You've watched the videos, read the threads, built the charts. You understand the concepts — orderblocks, liquidity sweeps, fair value gaps. In theory, it makes complete sense. But when the session opens and price starts moving, something breaks down."}
            </p>

            <p className="mb-6">
              {"The decision doesn’t come. Or it comes too fast. You enter early, or you miss it entirely. You know what you saw in hindsight but couldn’t act on it in real time. That gap — between knowing and executing — is not a knowledge problem. It’s a structural one."}
            </p>

            <p className="mb-6">
              {"Most traders never close it because they’re still adding tools, not building a system. More concepts, more indicators, more confluences — all of it creating the illusion of progress while the fundamental problem remains: there is no operating framework for when to act, when to wait, and when to walk away."}
            </p>

            <p>
              {"Braveheart Trading exists to build that framework. Structure, order flow, and the decision-making architecture required to perform under pressure. No shortcuts. No magic indicators. Just the mechanics of how markets actually move — and how to operate within them consistently."}
            </p>

          </div>

          {/* Values Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-serif text-text-primary mb-4 text-center">
              Values & Principles
            </h2>

            <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
              The non-negotiable standards that guide everything we build and teach.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Shield size={24} />,
                  title: 'Structure Over Signals',
                  desc: "We don't feed you fish. We teach you the hydrodynamics of the ocean. Understanding market structure is the only durable edge."
                },
                {
                  icon: <Target size={24} />,
                  title: 'Process Over Profit',
                  desc: 'Profit is a byproduct of a well-executed process. Focus on the P&L and you will fail. Focus on the execution and the results will follow.'
                },
                {
                  icon: <BookOpen size={24} />,
                  title: 'Education Over Entertainment',
                  desc: "Trading is boring when done right. If you're looking for excitement, go to a casino. We are here to run a business."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-bg-card p-8 border-t-2 border-gold">
                  <div className="text-gold mb-4">{item.icon}</div>
                  <h3 className="text-xl font-serif text-text-primary mb-4">{item.title}</h3>
                  <p className="text-text-secondary text-sm font-mono leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingUp size={24} />,
                  title: 'Growth Through Feedback',
                  desc: 'Mastery is not a destination — it is a continuous loop of execution, review, and refinement. We build traders who improve every single week.'
                },
                {
                  icon: <Users size={24} />,
                  title: 'Community Over Competition',
                  desc: 'We rise together. The vault is a space for collaboration, shared learning, and mutual accountability. No egos. No flexing.'
                },
                {
                  icon: <Eye size={24} />,
                  title: 'Transparency Always',
                  desc: 'No hidden agendas. No paid promotions disguised as education. Every tool we recommend, we use. Every trade we review, we took.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-bg-card p-8 border-t-2 border-gold">
                  <div className="text-gold mb-4">{item.icon}</div>
                  <h3 className="text-xl font-serif text-text-primary mb-4">{item.title}</h3>
                  <p className="text-text-secondary text-sm font-mono leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-serif text-text-primary mb-4 text-center">
              Connect With Us
            </h2>

            <p className="text-text-secondary text-center mb-12 max-w-xl mx-auto">
              Follow the journey. Free content, market analysis, and community updates across all platforms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Youtube size={20} />,
                  name: 'YouTube',
                  handle: '@BraveheartTrading',
                  desc: 'Free educational videos & market analysis',
                  url: 'https://youtube.com/@BraveheartTrading',
                  color: 'bg-red-600/10 text-red-500 border-red-500/20'
                },
                {
                  icon: <Twitter size={20} />,
                  name: 'X (Twitter)',
                  handle: '@BraveheartTrading',
                  desc: 'Daily charts, observations & updates',
                  url: 'https://x.com/BraveheartTrading',
                  color: 'bg-sky-500/10 text-sky-400 border-sky-400/20'
                },
                {
                  icon: <Instagram size={20} />,
                  name: 'Instagram',
                  handle: '@BraveheartTrading',
                  desc: 'Behind the scenes & trading lifestyle',
                  url: 'https://instagram.com/BraveheartTrading',
                  color: 'bg-pink-500/10 text-pink-400 border-pink-400/20'
                },
                {
                  icon: <Facebook size={20} />,
                  name: 'Facebook',
                  handle: 'Braveheart Trading',
                  desc: 'Community discussions & announcements',
                  url: 'https://facebook.com/BraveheartTrading',
                  color: 'bg-blue-500/10 text-blue-400 border-blue-400/20'
                }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-bg-card border border-border hover:border-gold transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${social.color}`}>
                    {social.icon}
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center gap-2">
                      <span className="text-text-primary font-bold text-sm group-hover:text-gold transition-colors">
                        {social.name}
                      </span>
                      <ExternalLink size={12} className="text-text-muted" />
                    </div>

                    <div className="text-xs text-gold font-mono">{social.handle}</div>
                    <div className="text-xs text-text-muted mt-0.5">{social.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </main>

      <PublicFooter />
    </div>
  );
}