import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function ExampleInsights() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="w-full px-6 py-24 bg-[#0F0F0F] border-y border-brave-border/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="block text-xs font-medium tracking-[0.2em] text-brave-text-secondary mb-4 uppercase">
            Inside the Newsletter
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-brave-text-primary">
            Example Insights
          </h2>
        </div>

        <div className="bg-brave-card border border-brave-border rounded-sm overflow-hidden shadow-lg transition-all duration-300 hover:border-brave-border/80">
          {/* Header / Summary */}
          <div
            className="p-6 md:p-8 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}>

            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <span className="inline-block px-2 py-1 bg-[#00ff88]/10 text-[#00ff88] text-[10px] font-bold tracking-wider uppercase rounded mb-3 border border-[#00ff88]/20">
                  Trading Mindset
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-brave-text-primary mb-4">
                  How to Guarantee You Level Up as a Trader Every Quarter
                </h3>
                {!isExpanded &&
                <p className="text-brave-text-secondary font-light leading-relaxed line-clamp-2 md:line-clamp-none">
                    Hello Trader. Today, I want to hold you accountable for your
                    development as a trader. Many aspiring traders just plow
                    through each trading week endlessly without ever taking the
                    time to reflect on their past trading...
                  </p>
                }
              </div>
              <button className="mt-1 p-2 rounded-full bg-[#161616] text-brave-text-primary hover:bg-[#222] transition-colors flex-shrink-0">
                {isExpanded ?
                <ChevronUp className="w-5 h-5" /> :

                <ChevronDown className="w-5 h-5" />
                }
              </button>
            </div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded &&
            <motion.div
              initial={{
                height: 0,
                opacity: 0
              }}
              animate={{
                height: 'auto',
                opacity: 1
              }}
              exit={{
                height: 0,
                opacity: 0
              }}
              transition={{
                duration: 0.4,
                ease: 'easeInOut'
              }}>

                <div className="px-6 md:px-8 pb-8 pt-0 text-brave-text-secondary font-light leading-relaxed space-y-6 border-t border-brave-border/30 mt-2">
                  <div className="pt-6 space-y-6 text-base md:text-lg">
                    <p>Hello Trader.</p>
                    <p>
                      Today, I want to hold you accountable for your development
                      as a trader.
                    </p>
                    <p>
                      Many aspiring traders just plow through each trading week
                      endlessly without ever taking the time to reflect on their
                      past trading.
                    </p>
                    <p>Many times this is due to:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-brave-accent">
                      <li>Being too fixated on a single trading week</li>
                      <li>
                        Being too focused on the money instead of developing
                      </li>
                      <li>
                        The pain associated with going through and studying your
                        mistakes. (It's easier just to forget them.)
                      </li>
                    </ul>
                    <p className="font-medium text-brave-text-primary italic border-l-2 border-brave-accent pl-4 py-1">
                      The truth is: If you never take the time to reflect on
                      your trading, you will end up repeating the same mistakes
                      and end up achieving the same results.
                    </p>
                    <p>
                      So in this week's newsletter, I want to give you a simple
                      approach to guarantee that you are developing as a trader
                      with time.
                    </p>
                    <p>With that being said, let's dive in:</p>
                    <hr className="border-brave-border/50 my-8" />
                    <h4 className="text-xl font-serif text-brave-text-primary">
                      The Quarterly Shift Approach
                    </h4>
                    <p>
                      I want to give you the most straightforward answer to
                      level up as a Trader.
                    </p>
                    <p>
                      Assuming you have a clear trading strategy and plan you
                      stick to and adhere to, split your trading year into
                      trading quarters.
                    </p>
                    <p>
                      If we understand why a Quarterly Shift occurs every 3-4
                      months, there will be a new narrative in play for the
                      trading quarter.
                    </p>
                    <p>
                      Each trading quarter will have its narrative i.e. trending
                      or consolidation environment.
                    </p>
                    <p>
                      First, identify what was the narrative of the past trading
                      quarter and study your trading performance within it.
                    </p>
                    <p>
                      For example: if we study the narrative for the major
                      trading pairs (EU, GU) for Trading Quarter 2 (April-June)
                      we can see that the market's narrative was a
                      consolidation.
                    </p>
                    <p>
                      Within Consolidation Market Environments, instead of
                      holding for swings, you scalp in and out of the market.
                    </p>
                    <p>
                      Therefore there must be an adjustment in our trading
                      approach within the context of our trading plan.
                    </p>
                    <p>Now that we understand:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-brave-accent">
                      <li>The trading quarter's narrative</li>
                      <li>
                        The adjusted trading approach due to the market
                        environments
                      </li>
                    </ul>
                    <p>
                      We can start studying and reflecting upon our trading
                      performance for the Trading Quarter.
                    </p>
                    <p>
                      Trading Performance studies in detail everything you did
                      within that trading quarter, from your trading psychology
                      to your trade setup selection.
                    </p>
                    <p>
                      If you don't keep a log of your trades or trade psychology
                      before, during, and after your trades, you will have
                      nothing to reflect on.
                    </p>
                    <p>
                      If this is you, make it your goal to journal these things
                      in the next trading quarter.
                    </p>
                    <div className="bg-[#161616] p-6 rounded border border-brave-border/50">
                      <p className="font-medium text-brave-text-primary mb-4">
                        For Example: Trading Quarter 2 - Consolidation Market
                        Environments.
                      </p>
                      <p className="mb-4">
                        Take the time and reflect upon these questions:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 marker:text-brave-accent mb-4">
                        <li>
                          What are the positive traits you want to reinforce in
                          Q2?
                        </li>
                        <li>
                          What are the negative traits that were holding you
                          back in Q2?
                        </li>
                      </ul>
                      <p>
                        You should come up with a list of positive traits and
                        negative traits.
                      </p>
                    </div>
                    <p>
                      Good, now you know and have awareness of what brings you
                      results in trading, and what is holding you back.
                    </p>
                    <p>Self-awareness is always the first step.</p>
                    <p>
                      This is when you are now able to level up instead of
                      hoping for trader development.
                    </p>
                    <p>
                      Now, the easiest way to level up as a trader is just to do
                      2 things for the next trading quarter:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2 marker:text-brave-accent">
                      <li>Keep reinforcing the positive traits</li>
                      <li>Stop doing the negative traits</li>
                    </ol>
                    <p>
                      You want to make it your main goal to stop doing that
                      negative trait that is holding you back. (If there are
                      multiple, stick to progressing on one otherwise you will
                      progress on none.)
                    </p>
                    <p>
                      With this simple approach - you can fill in those gaps in
                      your development that are holding you back from ever
                      reaching your full trading potential.
                    </p>
                    <p>
                      The problem many aspiring traders make is that they are
                      too busy chasing the "next shiny object", that they never
                      take the time to reflect on the very things holding them
                      back.
                    </p>
                    <p>
                      And if they only had the self-awareness of knowing the few
                      traits holding them back, they would already reach their
                      full trading potential.
                    </p>
                    <p>
                      If this is you, don't get caught up in overcomplicating
                      everything.
                    </p>
                    <p>
                      Trading can be as simple as using an OTE with proper risk
                      management.
                    </p>
                    <p>
                      Use this approach at the end of every trading quarter, and
                      you can guarantee that you are making progress within your
                      trading development.
                    </p>
                    <p className="font-serif text-xl italic text-brave-text-primary text-center py-8">
                      "The answer is always found within."
                    </p>
                    <p>
                      Make it your goal to come back stronger every trading
                      quarter.
                    </p>
                    <p className="font-bold text-brave-text-primary">
                      Sprint, Reflect, Repeat.
                    </p>
                    <p>
                      Rooting for you,
                      <br />
                      <span className="font-serif text-brave-accent">
                        Oliver: Braveheart Trading.
                      </span>
                    </p>
                    <p className="text-sm text-brave-text-muted mt-8 pt-4 border-t border-brave-border/30">
                      P.S. Reply to this email and let me know what lessons you
                      have learned from the previous trading quarter — I'll be
                      reading and responding to all.
                    </p>
                  </div>
                </div>
              </motion.div>
            }
          </AnimatePresence>
        </div>
      </div>
    </section>);

}