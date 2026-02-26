import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
interface ContinueLearningStripProps {
  onResume: () => void;
}
export function ContinueLearningStrip({
  onResume
}: ContinueLearningStripProps) {
  return (
    <div className="w-full mb-14">
      <h2 className="text-[#666] text-[11px] uppercase tracking-[0.15em] font-medium mb-6">
        Continue Learning
      </h2>

      <div className="bg-[#111] border border-[#1a1a1a] rounded-lg p-8 flex flex-col md:flex-row items-center justify-between transition-colors">
        <div className="flex-1 w-full md:w-auto mb-6 md:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[#10b981] text-[10px] font-bold tracking-wider uppercase">
              In Progress
            </span>
            <span className="text-[#666] text-xs uppercase tracking-wider font-medium">
              The Inception Model
            </span>
          </div>

          <h3 className="text-white text-xl font-semibold mb-6">
            Trade Ideas for the New York Session
          </h3>

          <div className="flex items-center gap-6 max-w-xl">
            <div className="flex-1 h-[2px] bg-[#1a1a1a] rounded-full overflow-hidden">
              <motion.div
                initial={{
                  width: 0
                }}
                animate={{
                  width: '85%'
                }}
                transition={{
                  duration: 1,
                  ease: 'easeOut'
                }}
                className="h-full bg-[#10b981] rounded-full" />

            </div>
            <div className="flex items-center gap-3 min-w-fit">
              <span className="text-[#10b981] text-sm font-bold font-mono">
                85%
              </span>
              <span className="text-[#444] text-xs uppercase tracking-wider">
                Lesson 9 of 10
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onResume}
          className="flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-black font-bold px-8 py-3.5 rounded-lg transition-colors">

          <Play size={18} fill="currentColor" />
          <span>Resume Lesson</span>
        </button>
      </div>
    </div>);

}