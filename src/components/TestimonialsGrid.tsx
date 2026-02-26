import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
const testimonials = [
{
  quote:
  "Every issue makes me rethink something I thought I understood. That's rare.",
  author: 'James L.',
  role: 'Day Trader'
},
{
  quote:
  'The structural approach to markets finally clicked after reading the newsletter consistently for 3 months.',
  author: 'Ana M.',
  role: 'Swing Trader'
},
{
  quote:
  'No signals. No hype. Just frameworks that actually work when you sit down to trade.',
  author: 'Chris W.',
  role: 'Crypto Trader'
},
{
  quote:
  "I forward every issue to my trading partner. It's become our weekly study material.",
  author: 'Michael P.',
  role: 'Prop Trader'
},
{
  quote:
  'Braveheart treats trading like a craft. The newsletter reflects that — disciplined, structured, no shortcuts.',
  author: 'Rachel S.',
  role: 'Futures Trader'
},
{
  quote:
  'This is what trading education should look like. Process-first, ego-free, consistently excellent.',
  author: 'Tom H.',
  role: 'Independent Trader'
}];

export function TestimonialsGrid() {
  return (
    <section className="w-full px-6 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif text-brave-text-primary mb-6">
          Here's what traders are saying
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, idx) =>
        <motion.div
          key={idx}
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5,
            delay: idx * 0.05
          }}
          className="bg-brave-card border border-brave-border p-8 rounded-sm flex flex-col h-full hover:border-brave-text-secondary/30 transition-colors">

            <Quote className="w-6 h-6 text-brave-accent/40 mb-6" />
            <p className="text-brave-text-primary text-base leading-relaxed mb-6 font-light flex-grow">
              "{item.quote}"
            </p>
            <div className="pt-6 border-t border-brave-border/50">
              <p className="text-sm font-medium text-brave-text-primary">
                {item.author}
              </p>
              <p className="text-xs text-brave-text-secondary uppercase tracking-wider mt-1">
                {item.role}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>);

}