import React, { useState } from 'react';
import { motion } from 'framer-motion';
export function BottomCTA() {
  const [email, setEmail] = useState('');
  return (
    <section className="w-full px-6 py-24 bg-[#0F0F0F] border-t border-brave-border/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}>

          <span className="block text-6xl md:text-8xl font-serif font-bold text-brave-text-primary mb-6 opacity-10">
            5,000+
          </span>

          <h2 className="text-3xl md:text-5xl font-serif text-brave-text-primary mb-10 leading-tight">
            Join thousands of traders getting weekly insights that sharpen their
            edge.
          </h2>

          <div className="max-w-md mx-auto">
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
          </div>
        </motion.div>
      </div>
    </section>);

}