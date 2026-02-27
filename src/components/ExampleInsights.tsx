import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function ExampleInsights() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedSecond, setIsExpandedSecond] = useState(false);
  const [isExpandedThird, setIsExpandedThird] = useState(false);
  const [isExpandedFourth, setIsExpandedFourth] = useState(false);
  const [isExpandedFifth, setIsExpandedFifth] = useState(false);
  const [isExpandedSixth, setIsExpandedSixth] = useState(false);
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

        <div className="bg-brave-card border border-brave-border rounded-sm overflow-hidden shadow-lg transition-all duration-300 hover:border-brave-border/80 mt-6">
          {/* Header / Summary */}
          <div
            className="p-6 md:p-8 cursor-pointer"
            onClick={() => setIsExpandedSecond(!isExpandedSecond)}>

            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <span className="inline-block px-2 py-1 bg-[#00ff88]/10 text-[#00ff88] text-[10px] font-bold tracking-wider uppercase rounded mb-3 border border-[#00ff88]/20">
                  Trading Evolution
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-brave-text-primary mb-4">
                  The Iterative Process: How to Master Your Trading System
                </h3>
                {!isExpandedSecond &&
                <p className="text-brave-text-secondary font-light leading-relaxed line-clamp-2 md:line-clamp-none">
                    It's about evolving your trading system to flow flawlessly,
                    becoming an integral part of you – just like riding a bike.
                    With tweaks and practice, the bike feels more natural...
                  </p>
                }
              </div>
              <button className="mt-1 p-2 rounded-full bg-[#161616] text-brave-text-primary hover:bg-[#222] transition-colors flex-shrink-0">
                {isExpandedSecond ?
                <ChevronUp className="w-5 h-5" /> :

                <ChevronDown className="w-5 h-5" />
                }
              </button>
            </div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpandedSecond &&
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
                      What's this iterative process about?
                    </p>
                    <p>
                      It's about evolving your trading system to flow flawlessly, becoming an integral part of you – just like riding a bike.
                    </p>
                    <p className="font-medium text-brave-text-primary italic border-l-2 border-brave-accent pl-4 py-1">
                      Think about it. At first, riding feels foreign. But with tweaks and practice, the bike feels more natural. After enough practice, you and the bike become one. Every action is in sync, and everything feels natural.
                    </p>
                    <p>That's evolution.</p>
                    <p>The same goes for your trading system.</p>
                    <p>Sure, the first few weeks might feel a bit strange, but that's the norm for everyone.</p>
                    <p className="font-medium text-brave-text-primary">
                      Traders don't start out as experts. They become awesome over time as they evolve.
                    </p>
                    <p>
                      So if things feel a tad uncomfortable initially, stay the course. Let the market be your teacher, giving you the feedback you need.
                    </p>
                    <p>
                      From there, make adjustments to your trading system and evolve continuously. Practice using it, again and again, to truly master it.
                    </p>
                    <p>
                      This is optimization and the iterative process.
                    </p>
                    <p className="font-medium text-brave-text-primary text-center py-4">
                      The goal for iteration is to constantly be optimizing your Trades, System, Management, Psychology, and mindset.
                    </p>
                    <hr className="border-brave-border/50 my-8" />
                    <h4 className="text-xl font-serif text-brave-text-primary">
                      The Three-Part Framework
                    </h4>
                    <p>
                      To achieve this mastery, follow this framework:
                    </p>
                    <ul className="list-disc pl-5 space-y-3 marker:text-brave-accent">
                      <li>
                        <span className="font-medium text-brave-text-primary">Thesis:</span> Kick off with an initial system, your starting hypothesis about how the market might roll.
                      </li>
                      <li>
                        <span className="font-medium text-brave-text-primary">Antithesis:</span> Now, test this hypothesis. Throw it into the market and see what sticks and what doesn't. The market's gonna be real with you – either backing up your hypothesis or throwing it back in your face.
                      </li>
                      <li>
                        <span className="font-medium text-brave-text-primary">Synthesis:</span> Check out the outcomes. What's working? What's not? Where can you tweak a bit?
                      </li>
                    </ul>
                    <div className="bg-[#161616] p-6 rounded border border-brave-border/50 my-8">
                      <p className="font-medium text-brave-text-primary mb-4">
                        Breaking it down:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 marker:text-brave-accent">
                        <li>Start with a gut feel (Thesis)</li>
                        <li>Test it out (Antithesis)</li>
                        <li>Refine and repeat (Synthesis)</li>
                      </ul>
                    </div>
                    <p>
                      The market's not gonna sugarcoat anything – it'll give it to you straight. Use that. Adapt. Grow.
                    </p>
                    <p>
                      Over time, you'll be making all sorts of adjustments – not just to your system, but how you feel and think about trades.
                    </p>
                    <h4 className="text-lg font-serif text-brave-text-primary mt-8">
                      Personal Insights From the Market
                    </h4>
                    <p>
                      For instance, you'll get insights into your own habits. Where do you trade impulsively? When does FOMO kick in?
                    </p>
                    <p>
                      Once you spot these, tackle them head-on. No more sticking points.
                    </p>
                    <p>
                      Trust the process. Keep iterating based on the feedback. Before you know it, your trading system will mesh with you, and everything will flow effortlessly.
                    </p>
                    <div className="bg-[#161616] p-8 rounded border-l-4 border-brave-accent my-8">
                      <p className="text-center font-serif text-2xl italic text-brave-accent leading-relaxed mb-4">
                        "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times."
                      </p>
                      <p className="text-center font-serif text-xl text-brave-text-primary">
                        – Bruce Lee
                      </p>
                    </div>
                    <p>
                      This is exactly what we're talking about. Mastery comes from consistent, deliberate practice and iteration.
                    </p>
                    <p>
                      Not from constantly chasing new strategies or watching more tutorials.
                    </p>
                    <p className="font-bold text-brave-text-primary">
                      Thesis. Antithesis. Synthesis. Repeat.
                    </p>
                    <p>
                      Make this your process, and your trading will evolve with you.
                    </p>
                    <p>
                      Rooting for your success,
                      <br />
                      <span className="font-serif text-brave-accent">
                        Oliver: Braveheart Trading.
                      </span>
                    </p>
                    <p className="text-sm text-brave-text-muted mt-8 pt-4 border-t border-brave-border/30">
                      Onwards and upwards.
                    </p>
                  </div>
                </div>
              </motion.div>
            }
          </AnimatePresence>
        </div>

        {/* Third example: Professional Trader pointers */}
        <div className="bg-brave-card border border-brave-border rounded-sm overflow-hidden shadow-lg transition-all duration-300 hover:border-brave-border/80 mt-6">
          {/* Header / Summary */}
          <div
            className="p-6 md:p-8 cursor-pointer"
            onClick={() => setIsExpandedThird(!isExpandedThird)}>

            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <span className="inline-block px-2 py-1 bg-[#00ff88]/10 text-[#00ff88] text-[10px] font-bold tracking-wider uppercase rounded mb-3 border border-[#00ff88]/20">
                  Pro Trading
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-brave-text-primary mb-4">
                  Things That Turn You Into a Professional Trader
                </h3>
                {!isExpandedThird &&
                <p className="text-brave-text-secondary font-light leading-relaxed line-clamp-2 md:line-clamp-none">
                    There comes a pivotal moment where you're tired of rookie mistakes and want real progress. Focus on crafting a model that fits you and stop chasing shiny objects...
                  </p>
                }
              </div>
              <button className="mt-1 p-2 rounded-full bg-[#161616] text-brave-text-primary hover:bg-[#222] transition-colors flex-shrink-0">
                {isExpandedThird ?
                <ChevronUp className="w-5 h-5" /> :

                <ChevronDown className="w-5 h-5" />
                }
              </button>
            </div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpandedThird &&
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
                    <p>There comes a pivotal moment in an aspiring Trader's journey where they reach a point where they are tired of making rookie mistakes and want to start making real progress towards becoming a Professional Trader.</p>
                    <p>Unfortunately, lots of mainstream trading education will preach the obvious:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-brave-accent">
                      <li>Emotional Discipline</li>
                      <li>Risk Management</li>
                      <li>Mindset</li>
                    </ul>
                    <p>You know these things are the fundamentals of Professional Trading, yet, you still repeat the same mistakes over and over again in the heat of the moment.</p>
                    <p>So this week, I will write you a few pointers on how to find lasting consistent results and reach professional trading status.</p>
                    <h4 className="text-xl font-serif text-brave-text-primary">Things that turn you into a Professional Trader:</h4>
                    <ol className="list-decimal pl-5 space-y-2 marker:text-brave-accent">
                      <li><strong>Stop Chasing the Shiny Object</strong><br/>Focus on first crafting a trading model that is unique and fits your Trading Archetype. If you have 3-6 Months of trading experience, this should become clear already. When it does, craft a model that is bespoke to you, and stick to it. Focus on the fundamentals that make your model function and enhance the edge in your favor. Every trading professional has losses. These are things we can't control. Michael Jordan had losing games. Kobe Bryant had losing games. However, these losses become reference experiences. Build enough reference experiences and iterate your system by studying the feedback. Your trading model will evolve to version 2.0, 3.0, and beyond. This is the hard work you must go through, however, with this process, your trading model would have advanced exponentially. Think of Iron Man and his first suit.</li>
                      <li><strong>Focus on Probabilities</strong><br/>Know when you are trading within conditions that give you your statistical edge vs when you are not. The problem aspiring traders make is they put too much emphasis on the 'trade signal' and 'entry pattern', they forget to align their trading with a proper context, narrative, or framework. Stop fixating on the piece, and focus on the entire puzzle. When we focus on the puzzle instead, we focus on probabilities. By focusing on probabilities, the potential outcome of the trade is more important than a 'flashing trade signal' or 'lottery ticket spin'. This is the birth of trading wisdom. This is what makes Market Veterans.</li>
                      <li><strong>Focus on your Edge</strong><br/>Know your edge systematically. Similar to how a technician can know where each cable gets plugged 'blindfolded'. This is how you stay calm and present during the 'heat' of trading, and trade systematically according to your edge. Never stray away from your Edge as well. You have identified exactly the process of how you extract winning trades out of the market. And when you start to stray away from that, then you are no longer trading consistent to your edge. This is why you will fail to be consistent in your results as well. Trust your edge. Trust that setups will repeat, and trades will pan out over a sequence of trades. With enough reference experience and iteration, your edge will become the north-star of your trading career.</li>
                    </ol>
                    <p>So here are the pointers you must remember at the forefront of your mind before every trading action. When you are making decisions that are not aligned with these pointers, that's when things can start to tumble and turn into a downward spiral.</p>
                    <p>To avoid the momentum of the downward spiral building, take a deep breath in, deep breath out, and just focus on the fundamental pointers above. Start fresh, and do it right this time. Fall 7 times, come back 8. Better.</p>
                    <p>More soon,</p>
                    <p className="font-serif text-brave-accent">-Oliver</p>
                  </div>
                </div>
              </motion.div>
            }
          </AnimatePresence>
        </div>

        {/* Fourth example: Goal setting & downside focus for 2024 */}
        <div className="bg-brave-card border border-brave-border rounded-sm overflow-hidden shadow-lg transition-all duration-300 hover:border-brave-border/80 mt-6">
          <div
            className="p-6 md:p-8 cursor-pointer"
            onClick={() => setIsExpandedFourth(!isExpandedFourth)}>
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <span className="inline-block px-2 py-1 bg-[#00ff88]/10 text-[#00ff88] text-[10px] font-bold tracking-wider uppercase rounded mb-3 border border-[#00ff88]/20">
                  2024 Prep
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-brave-text-primary mb-4">
                  Reflect, Remove & Rise in 2024
                </h3>
                {!isExpandedFourth &&
                <p className="text-brave-text-secondary font-light leading-relaxed line-clamp-2 md:line-clamp-none">
                    We are approaching the new year of 2024. Reflect on your goals and the behaviours that must change to achieve them. Improve by subtraction...
                  </p>
                }
              </div>
              <button className="mt-1 p-2 rounded-full bg-[#161616] text-brave-text-primary hover:bg-[#222] transition-colors flex-shrink-0">
                {isExpandedFourth ?
                <ChevronUp className="w-5 h-5" /> :

                <ChevronDown className="w-5 h-5" />
                }
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isExpandedFourth &&
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
                    <p>We are approaching the new year of 2024.</p>
                    <p>This is the perfect time to reflect and think about:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-brave-accent">
                      <li>What goals you want to achieve in 2024.</li>
                      <li>The steps you will take to achieve these goals.</li>
                    </ul>
                    <p><strong>Set Goals and Define Actions:</strong></p>
                    <p>Every action you take in 2024 should be aligned with your outlined goals. If what you want to achieve is something you haven't achieved before, it requires a change in your behaviors. If your behaviors cause you to take actions misaligned with your goal, change now before 2024.</p>
                    <p><strong>Set Goals, Define Action, Change Behaviour:</strong></p>
                    <p>To achieve new goals you haven't achieved requires a process of change within your Trader-self for the better. Change can occur in how you do things, i.e., habits, routines, decisions, etc. How can you tweak these actions to become aligned with your goals in 2024?</p>
                    <p><strong>This Requires Self-Reflection</strong></p>
                    <p>At the end of every trading year, take the time to recharge, meditate, and think outside of the markets. Give yourself the time for this. Whilst reflecting on things you can change, i.e., habits, routines, decisions, etc.</p>
                    <p>Try to think about how you can: Improve by subtraction. What are things I can remove from my trading that would progress my trading?</p>
                    <p>Improving is not always done by adding more tools or making things more complicated. Instead, better progress can be found by identifying "the dumb stuff" you tend to do, and then stopping it.</p>
                    <p>The couple of things that are holding you back at your current stage of trading, the very things that are currently holding you back from your potential.</p>
                    <p>Instead of trying to add additional complexity (i.e., Reaper FVG or MMXM Mastery) start finding ways to fix, solve, or remove "the dumb stuff" you have a tendency of doing. This removes downside and gives growth to new upside in your trading. Whilst your 'new downside' is better than your previous stage of trading. This is progression.</p>
                    <h4 className="text-xl font-serif text-brave-text-primary">Build Self-awareness around your Errors:</h4>
                    <ul className="list-disc pl-5 space-y-2 marker:text-brave-accent">
                      <li>What are the errors you tend to make?</li>
                      <li>When do you tend to make these errors?</li>
                      <li>How catastrophic are these errors?</li>
                    </ul>
                    <p>The best strategy to improve is to become self-aware of your errors that hold you back, then focus on avoiding, solving, or fixing them as your main priority. By focusing on removing the downside, you give the opportunity for upside to grow. This means that you can reach full potential in other areas of your trading. For example; you will make fewer mistakes that your A+ Trading setups have to pay for.</p>
                    <p>Look at both the upside and downside, however, be more cautious of the downside. This finds ways to:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-brave-accent">
                      <li>Ensure trading growth, longevity, and survival.</li>
                      <li>Optimize for trading growth, longevity, and survival.</li>
                      <li>You can see as a by-product of focusing on the downside, upside occurs.</li>
                    </ul>
                    <h4 className="text-lg font-serif text-brave-text-primary mt-6">Don't Fixate on Winning:</h4>
                    <p>Traders tend to fixate on winning instead of survival. This causes them to 'chase the new shiny object' when trades result in a string of losses. Or making their strategy more complicated with new tools and complexity. This loop can be frustrating and a waste of time. The truth is... These strings of losses could have easily been avoided if the trader focuses less on forcing wins, and more on trading only when their trading edge is present. Which is an outcome of focusing more on the downside.</p>
                    <p><strong>Don't Forget the Downside, Focus on the Downside:</strong> Look at the things holding you back in trading, and focus on removing them. Because downsides also have consequences and momentum... 1 dumb mistake can lead to a plethora of dumb mistakes due to emotions. When the level of emotions rises, the level of accuracy decreases. It's hard to properly trade in this state. Emotions are going to get involved; they are part of human nature. Every trader is going to experience emotions. Especially when it comes to risk, this can trigger and exaggerate whatever emotion you are feeling. Therefore, always pay close attention to the downside, and never let your emotions cause more downside. This can screw you. Especially when you get triggered.</p>
                    <p><strong>Make a List of all your Errors:</strong> Stop doing it, then make massive progress. Focus on the Low Hanging Fruit Changes you can make to make massive improvement, then focus on complexity for incremental gains later on. Sometimes the things to change that will progress your trading leaps forward are the simple things you are forgetting about. The solution is not always complicated. There does not need to be complication or advanced tactics to find a solution. It could really be as easy as "removing" the action you take that is "dumb". (every trade) This removing of downside creates most upside. i.e., If you stop punting trades, you will see greater upside. If you stop getting distracted, you will see greater upside. If you stop disobeying your system, you will see greater upside. If you stop acting impulsively, you will see greater upside.</p>
                    <p>So, when it comes to your goals for trading in 2024:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-brave-accent">
                      <li>Focus on removing the downside as goals (and commit to these goals).</li>
                      <li>Focus on changing behaviors and actions that are not consistent with your goals.</li>
                    </ul>
                    <p>What makes a Professional Trader 'pro', is because they commit to excellence in their action. Their actions are consistent with their goals, and they know how to handle their downside.</p>
                    <p>However, this process does not occur overnight. Through trial and error, they slowly become self-aware of the dumb stuff they do, and then remove it.</p>
                    <p>More soon,</p>
                    <p className="font-serif text-brave-accent">-Oliver</p>
                  </div>
                </div>
              </motion.div>
            }
          </AnimatePresence>
        </div>

        {/* Fifth example: Define probabilities */}
        <div className="bg-brave-card border border-brave-border rounded-sm overflow-hidden shadow-lg transition-all duration-300 hover:border-brave-border/80 mt-6">
          <div
            className="p-6 md:p-8 cursor-pointer"
            onClick={() => setIsExpandedFifth(!isExpandedFifth)}>
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <span className="inline-block px-2 py-1 bg-[#00ff88]/10 text-[#00ff88] text-[10px] font-bold tracking-wider uppercase rounded mb-3 border border-[#00ff88]/20">
                  Edge Building
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-brave-text-primary mb-4">
                  Define Probabilities: Finding Your High Probability Trades
                </h3>
                {!isExpandedFifth &&
                <p className="text-brave-text-secondary font-light leading-relaxed line-clamp-2 md:line-clamp-none">
                    Probability is 'how likely something is to happen'. Higher probability naturally leads to better trading results, but you need an edge. Learn how to define and find your A+ setups...
                  </p>
                }
              </div>
              <button className="mt-1 p-2 rounded-full bg-[#161616] text-brave-text-primary hover:bg-[#222] transition-colors flex-shrink-0">
                {isExpandedFifth ?
                <ChevronUp className="w-5 h-5" /> :

                <ChevronDown className="w-5 h-5" />
                }
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isExpandedFifth &&
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
                    <p><strong>Define probabilities:</strong></p>
                    <p>Probability is 'how likely something is to happen'. Probabilities are unique and random. This is what determines if your trade is going to be a Win or Loss.</p>
                    <p>Don't try to control it, but understand it. Higher probability = Most likely to win. Lower probability = Most likely to lose.</p>
                    <p className="font-medium text-brave-text-primary italic border-l-2 border-brave-accent pl-4 py-1">
                      By focusing purely on Higher Probability, the natural outcome is better trading.
                    </p>
                    <p>But you need an edge. Your edge must be based on a system that can 'steer' probability to lean in our favor. This crafts an edge that can beat the market.</p>
                    <p>We also want to craft our edge on a Reference Point (O,H,L,C). This lets us know our edge will repeat.</p>
                    <p><strong>Ok, but what 'exactly' is High Probability then?</strong></p>
                    <p>The answer is not as black and white. By knowing and understanding your system like the back of your hand, you will know from reference experiences of finding a trade, what 'metrics' create favored 'x' situations over 'y' situations. And this can only be achieved via forward testing, gathering feedback, and iteration – aka Trading Wisdom.</p>
                    <p>But, the good thing is though, the system we call IPDA has fundamental sub-systems built in for the delivery of O,H,L,C. These sub-systems follow repeatable phenomena based on Time, Price, and Inter-market analysis.</p>
                    <p>If we study these processes deeply, we can discern when to do something VS when not to do something. From there, just focus on "when" not to do something and become more risk-averse. And for 'When' to do something, have faith in probabilities for it to deliver the outcome you were patient for.</p>
                    <p>So if starting out on your quest to define higher probability trading! Start with these fundamentals. Then after Days, Weeks, Months, and Quarters, iterate and evolve as you make it a habit to journal and study feedback. The A+ Trade setup will be ingrained within you instinctively.</p>
                    <h4 className="text-xl font-serif text-brave-text-primary mt-6">Understood. Start with IPDA Fundamentals, but how do I start finding 'my' High Probability Trades?</h4>
                    <h5 className="text-lg font-serif text-brave-text-primary mt-4">Focus on Clarity:</h5>
                    <p><strong>1. Know thy trader-self</strong></p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-brave-accent mb-4">
                      <li>What type of trader are you?</li>
                      <li>What time-frame do you subscribe to?</li>
                      <li>What time-frame are you finding deals?</li>
                      <li>Are you a Position Trader trading the Annual and Quarterly range? Can you hold on trades for months?</li>
                      <li>Are you an OSOK Trader trading the Weekly Range? Can you sleep on a trade overnight?</li>
                    </ul>
                    <p>How are you going to focus on High Probability if you haven't committed to an approach that fits you?</p>
                    <p className="mt-4"><strong>2. Know thy trading-niche</strong></p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-brave-accent mb-4">
                      <li>What markets do you trade?</li>
                      <li>What timezones are you active in running your trading activities?</li>
                    </ul>
                    <p>Knowing exactly how all the markets within your niche has a relationship, allows you to see the 'Money flow' or 'Portfolio Shifting' that occurs within the markets ecosystem. This creates 'High Probability Trading Environments'. Money seeks yield. This is how you find explosive moves. Stop skimming through 30 pairs, understand how your niche is interconnected with its sub-markets.</p>
                    <p className="mt-4"><strong>3. Operate within Thy Clarity</strong></p>
                    <p>You know crystal clear the following:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-brave-accent mb-4">
                      <li>What type of trader you are</li>
                      <li>What type of deals you are going to find</li>
                      <li>What markets you are going to find High Probability Trades in</li>
                    </ul>
                    <p>This clarity alone creates higher probability sky folds compared to retail theory. However, you still need to know how to operate within these conditions.</p>
                    <h5 className="text-lg font-serif text-brave-text-primary mt-6">Alright, I know my style and niche, but how do I operate within the style and niche?</h5>
                    <p className="mt-4"><strong>1. Focus on the O,H,L,C components of your 'range opportunity'.</strong></p>
                    <p>Are you a Day Trader? Alright, you're finding range opportunity for the Daily Candle. Focus on 'what' factors create the price imbalance every 24 hours under the premise of O,H,L,C. Kill zones, News Events, PD Arrays, etc.</p>
                    <p className="mt-4"><strong>2. Understand the O,H,L,C Components</strong></p>
                    <p>Today's trade outcome will be different from tomorrow's trade outcome. Each Daily Range has its own events and therefore its own profile. However, each daily range only has a few 'profiles' it can select. It's your job to build enough reference experiences to be able to discern the different situations for each component. Build that trade wisdom so that you can trust that gut feeling. Know when you should be doing 'x' instead of 'y'.</p>
                    <p className="mt-4"><strong>3. Create process and flow</strong></p>
                    <p>Now you know what to focus on primarily, but are you just going to watch it occur and react emotionally? Or will you have a routine and process outlined to keep you stoic and trading with peak focus? What are you doing to ensure that there is no room for error within your trading? Do you have filters to determine if you should participate or avoid? Creating a process helps to remove emotional thinking, allowing you to submit to time and stick to the plan.</p>
                    <h5 className="text-lg font-serif text-brave-text-primary mt-6">Nice, so I know my style, niche and how to operate within, what's next?</h5>
                    <p className="mt-4"><strong>Sticking to the plan.</strong></p>
                    <p>The plan should outline when to perform 'x' vs 'y' based on each situation. By consistently making decisions consistent with the plan, you'll achieve consistent results. When results are sub-optimal, you'll know which 'metric' within your system needs adjustment.</p>
                    <p>This process will also help you gain more reference points and build your trading wisdom, leading to continual improvement of your system.</p>
                    <p>By staying consistent with the core fundamentals your system was built on - the Open, High, Low, and Close - you'll be able to find your A+ Setup without ambiguity, preventing you from getting lost in complexity. All of this may lower your trade frequency, however you will be focusing on the best setups only. No more chasing sub-optimal days, demand quality days for your trading.</p>
                    <p className="font-bold text-brave-text-primary text-center py-6 text-lg">Quality over quantity. Less is more…</p>
                    <p>More soon,</p>
                    <p>Onwards and upwards.</p>
                    <p className="font-serif text-brave-accent">-Oliver</p>
                  </div>
                </div>
              </motion.div>
            }
          </AnimatePresence>
        </div>

        {/* Sixth example: Planning your trading week */}
        <div className="bg-brave-card border border-brave-border rounded-sm overflow-hidden shadow-lg transition-all duration-300 hover:border-brave-border/80 mt-6">
          <div
            className="p-6 md:p-8 cursor-pointer"
            onClick={() => setIsExpandedSixth(!isExpandedSixth)}>
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <span className="inline-block px-2 py-1 bg-[#00ff88]/10 text-[#00ff88] text-[10px] font-bold tracking-wider uppercase rounded mb-3 border border-[#00ff88]/20">
                  Weekly Planning
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-brave-text-primary mb-4">
                  Planning Your Trading Week: The 3-Step Process
                </h3>
                {!isExpandedSixth &&
                <p className="text-brave-text-secondary font-light leading-relaxed line-clamp-2 md:line-clamp-none">
                    Follow this 3-step process to plan your trading week: Find the Weekly Draw on Liquidity, Plan for Weekly Volatility Injections, and Be Flexible on Sunday's Open...
                  </p>
                }
              </div>
              <button className="mt-1 p-2 rounded-full bg-[#161616] text-brave-text-primary hover:bg-[#222] transition-colors flex-shrink-0">
                {isExpandedSixth ?
                <ChevronUp className="w-5 h-5" /> :

                <ChevronDown className="w-5 h-5" />
                }
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isExpandedSixth &&
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
                    <p><strong>Attempting to plan your trading week?</strong></p>
                    <p>Follow this 3-step process:</p>
                    <ol className="list-decimal pl-5 space-y-2 marker:text-brave-accent mb-4">
                      <li>Find the Weekly Draw on Liquidity.</li>
                      <li>Plan for Weekly Volatility Injections.</li>
                      <li>Be Flexible on Sunday's Open.</li>
                    </ol>
                    <p>At the start of a new week, traders tend to overcomplicate things. They focus too much on the complex and not enough on the essentials.</p>
                    <p className="font-medium text-brave-text-primary italic border-l-2 border-brave-accent pl-4 py-1">
                      The truth is, complexity only offers incremental insights compared to the basics. Therefore, keep your analysis as lean and mean as possible by focusing on the essentials.
                    </p>
                    <h4 className="text-xl font-serif text-brave-text-primary mt-6">Step One: Find the Weekly Draw on Liquidity</h4>
                    <p>From the Weekly Close, where is the next weekly candle likely to draw towards?</p>
                    <p>Don't blindly guess higher or lower. Create some foundation behind this.</p>
                    <p>Determine:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-brave-accent mb-4">
                      <li>a) What the Weekly Chart's Institutional Order Flow is (Study the Daily Chart's Institutional Order Flow if you need more detail).</li>
                      <li>b) What the Weekly Chart is reaching for (Imbalance or Liquidity).</li>
                    </ul>
                    <p>All you're trying to do is favor one side over the other (following Institutional Order Flow) while also creating a narrative for the Weekly Candle (reaching for liquidity or imbalance).</p>
                    <h4 className="text-xl font-serif text-brave-text-primary mt-6">Step Two: Plan for Weekly Volatility Injections</h4>
                    <p>The Market Makers have made it easy to anticipate when Volatility will enter for the week. They're not hiding it from you.</p>
                    <p>However, it's your job to determine where those events fit into the Weekly Range.</p>
                    <p><strong>Volatility Injections can do 3 things:</strong></p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-brave-accent mb-4">
                      <li>Create a false price move (think weekly judas).</li>
                      <li>Create a market reversal (think low of the week).</li>
                      <li>Create large ranges (think range expansion).</li>
                    </ul>
                    <p>Organize the days of the week and their kill zones for a single asset, i.e., DXY, and you'll be able to frame out a Weekly Profile.</p>
                    <p>It's your job to fit the pieces (volatility injections) into the puzzle (Weekly Profile). Studying past weekly ranges, journaling, and building reference experiences helps with this.</p>
                    <p>Understand how these volatility injections have previously influenced weekly ranges so you can anticipate the same scenarios for future weekly ranges.</p>
                    <p>IPDA is systemized, and these things do repeat. Also, distinguish between the importance of the News Event. News from the FED, i.e., FED Chair Powell Speaks, will have a greater influence over the Weekly Range compared to the Orange Folder Event.</p>
                    <h4 className="text-xl font-serif text-brave-text-primary mt-6">Step Three: Be Flexible on Sunday's Open</h4>
                    <p>Nobody knows how the week is going to open.</p>
                    <p>There could be an opening gap higher due to excitement built over the weekend with BREAKING news, or an opening lower for the same reason. Or no excitement at all, causing Monday to consolidate and build Open Float.</p>
                    <p>The point is, nobody knows. That's why you want to remain flexible.</p>
                    <p><strong>Frame out potential scenarios:</strong></p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-brave-accent mb-4">
                      <li>Where could the low of the week form?</li>\n                      <li>How far can the False Price Swing reach?</li>\n                      <li>What news event would cause a False Price swing below the Weekly Open?</li>\n                      <li>What news event would cause a Market Reversal for Range Expansion?</li>\n                      <li>Where might you be wrong about your bias?</li>\n                    </ul>\n                    <p>There should ideally be 2-3 scenarios that you can frame out if you follow step one and favor one side of the market.</p>\n                    <p>If things are still not clear, be willing to give up on Monday. It's like poker when the player doesn't have a good hand; they don't force it. Instead, they wait until they have a better hand. The same method applies to trading and understanding risk.</p>\n                    <p>When the Open does come, you'll have your clue. Those 2-3 scenarios will get boiled down to 1-2 because something gets negated.</p>\n                    <p className=\"font-bold text-brave-text-primary text-center py-6\">So, remember, don't stress it and be flexible.</p>\n                    <p>If you follow these 3 steps, you're focusing on the essentials and not on the complexity. These steps are the key factors behind what creates the Weekly Range, rather than fixating on the SHINY BULLET.</p>\n                    <p>Your analysis will be lean and mean, instead of complicated and stressful. When you dial in the essentials, you'll see the complexity fall into place as well. Every piece will fit the puzzle.</p>\n                    <p>Rooting for your success, onwards and upwards.</p>\n                    <p className=\"font-serif text-brave-accent\">Oliver</p>\n                  </div>\n                </div>\n              </motion.div>\n            }\n          </AnimatePresence>\n        </div>\n      </div>\n    </section>);

}