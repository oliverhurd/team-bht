import React, { useState } from 'react';
import { ArrowRight, Users, BookOpen, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
interface HeroSectionProps {
  onEnterSite: () => void;
}
export function HeroSection({ onEnterSite }: HeroSectionProps) {
  const [email, setEmail] = useState('');
  return (
    <section className="relative w-full px-6 pt-8 pb-20 md:pt-12 md:pb-32 max-w-7xl mx-auto">
      {/* Nav */}
      <nav className="flex justify-between items-center mb-20 md:mb-32">
        <div className="text-2xl font-serif font-bold tracking-tight text-brave-text-primary">
          BRAVEHEART
        </div>
        <button
          onClick={onEnterSite}
          className="text-xs md:text-sm font-medium tracking-widest uppercase text-brave-text-secondary hover:text-brave-text-primary transition-colors flex items-center gap-2">

          Enter Site <ArrowRight className="w-3 h-3" />
        </button>
      </nav>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-8 text-brave-text-primary">

          Institutional-grade Trading Insights,{' '}
          <span className="italic text-brave-text-secondary">
            Delivered Weekly.
          </span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.1
          }}
          className="text-lg md:text-xl text-brave-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-light">

          From SMC trading to trading mindset and etiquette — no bullsh*t or
          shortcuts. Just how markets actually move.
        </motion.p>

        {/* Tags/Pills */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-brave-border bg-brave-card text-xs md:text-sm text-brave-text-secondary">
            <Zap className="w-3.5 h-3.5 text-brave-accent" />
            <span>Tactics and strategies</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-brave-border bg-brave-card text-xs md:text-sm text-brave-text-secondary">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Trading tips and methods</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-brave-border bg-brave-card text-xs md:text-sm text-brave-text-secondary">
            <Users className="w-3.5 h-3.5" />
            <span>5k+ readers</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-brave-border bg-brave-card text-xs md:text-sm text-brave-text-secondary">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Free forever</span>
          </div>
        </motion.div>

        {/* Email Form */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.3
          }}
          className="max-w-md mx-auto">

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-[#111] border border-brave-border text-brave-text-primary placeholder:text-brave-text-muted px-4 py-3 rounded-sm focus:outline-none focus:border-brave-accent transition-colors" />

            <button className="bg-[#E8E0D4] text-[#0A0A0A] px-6 py-3 font-medium text-sm tracking-widest uppercase hover:bg-white transition-colors rounded-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-brave-text-muted uppercase tracking-wider">
            Zero Spam, No AI Slop. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>);

}