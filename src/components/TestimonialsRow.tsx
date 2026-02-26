import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
const testimonials = [
{
  text: 'Greatest content simplified of ICT mentorship. Aligned clearly what we need to know and what not to. It made a real difference in my learning process.',
  author: 'David',
  handle: '@BeRealTrader'
},
{
  text: 'Impressed how articulate and good you are at speaking. Probably comes from deep understanding and now explaining for beginners to understand. Good content.',
  author: 'bond6677',
  handle: 'YouTube'
},
{
  text: 'While lost in the ICT ocean of info, this helped me understand and structure ICT in a really simple way. The way you put it together really impressed me.',
  author: 'ushanpadukka1077',
  handle: 'YouTube'
}];

export function TestimonialsRow() {
  return (
    <section className="w-full px-6 py-16 border-y border-brave-border/30 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="block text-xs font-medium tracking-[0.2em] text-brave-text-secondary mb-4 uppercase">
            Community
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-brave-text-primary">
            What Traders Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              delay: idx * 0.1
            }}
            className="flex flex-col h-full">

              <Quote className="w-8 h-8 text-brave-accent/50 mb-6" />
              <p className="text-brave-text-primary text-lg leading-relaxed mb-6 font-light italic flex-grow">
                "{item.text}"
              </p>
              <div className="mt-auto pt-4 border-t border-brave-border/30">
                <p className="text-sm font-medium text-brave-text-primary">
                  {item.author}
                </p>
                <p className="text-xs text-brave-text-secondary uppercase tracking-wider mt-1">
                  {item.handle}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}