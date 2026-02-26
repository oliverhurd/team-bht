import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lesson } from '../data/courseData';
import { VideoPlayer } from './VideoPlayer';
import { ExecutionFramework } from './ExecutionFramework';
import { Check, FileText, Download, Save } from 'lucide-react';
interface LessonTabsProps {
  lesson: Lesson;
  onToggleComplete: () => void;
  onNext: () => void;
}
type Tab = 'lesson' | 'notes' | 'checklist' | 'downloads';
export function LessonTabs({
  lesson,
  onToggleComplete,
  onNext
}: LessonTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('lesson');
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  const tabs: {
    id: Tab;
    label: string;
  }[] = [
  {
    id: 'lesson',
    label: 'Lesson'
  },
  {
    id: 'notes',
    label: 'Notes'
  },
  {
    id: 'checklist',
    label: 'Checklist'
  },
  {
    id: 'downloads',
    label: 'Downloads'
  }];

  return (
    <div className="w-full max-w-5xl mx-auto px-10 pb-24">
      {/* Tab Navigation */}
      <div className="flex items-center gap-10 border-b border-[#1a1a1a] mb-10">
        {tabs.map((tab) =>
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`pb-4 text-sm font-medium tracking-wide relative transition-colors ${activeTab === tab.id ? 'text-white' : 'text-[#666] hover:text-[#888]'}`}>

            {tab.label}
            {activeTab === tab.id &&
          <motion.div
            layoutId="activeTab"
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#10b981]" />

          }
          </button>
        )}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.15
          }}>

          {activeTab === 'lesson' &&
          <div className="space-y-10">
              <VideoPlayer
              lesson={lesson}
              onToggleComplete={onToggleComplete}
              onNext={onNext} />

              <ExecutionFramework lesson={lesson} />
            </div>
          }

          {activeTab === 'notes' &&
          <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-8 min-h-[500px]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-sans text-lg">
                  Your private lesson notes
                </h3>
                <div className="flex items-center gap-2 text-[#10b981] text-xs font-medium bg-[#10b981]/10 px-2 py-1 rounded">
                  <Save size={12} />
                  <span>Auto-saved</span>
                </div>
              </div>
              <textarea
              className="w-full h-[400px] bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 text-[#e5e5e5] placeholder-[#444] focus:outline-none focus:border-[#333] transition-colors resize-none leading-relaxed"
              placeholder="Type your notes here... captured thoughts, trade ideas, or questions." />

            </div>
          }

          {activeTab === 'checklist' &&
          <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-8">
              <h3 className="text-white font-sans text-lg mb-6">
                Action Checklist
              </h3>
              <div className="space-y-4">
                {lesson.rundownSteps.map((step, index) =>
              <div
                key={index}
                onClick={() => toggleCheck(index)}
                className="flex items-start gap-5 p-5 rounded-lg border border-[#1a1a1a] hover:bg-[#0d0d0d] cursor-pointer transition-colors group">

                    <div
                  className={`w-6 h-6 rounded border flex-shrink-0 flex items-center justify-center transition-all duration-200 ${checkedItems[index] ? 'bg-[#10b981] border-[#10b981]' : 'border-[#333] group-hover:border-[#666]'}`}>

                      {checkedItems[index] &&
                  <Check
                    size={14}
                    className="text-black"
                    strokeWidth={3} />

                  }
                    </div>
                    <span
                  className={`text-sm leading-relaxed transition-colors ${checkedItems[index] ? 'text-[#666] line-through' : 'text-[#e5e5e5]'}`}>

                      {step}
                    </span>
                  </div>
              )}
              </div>
            </div>
          }

          {activeTab === 'downloads' &&
          <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-8">
              <h3 className="text-white font-sans text-lg mb-6">Resources</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-5 border border-[#1a1a1a] rounded-lg hover:border-[#333] transition-colors group bg-[#0a0a0a]">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-[#10b981] border border-[#222]">
                      <FileText size={22} />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm mb-1">
                        {lesson.resourceName}
                      </p>
                      <p className="text-[#666] text-xs">
                        PDF Document • 2.4 MB
                      </p>
                    </div>
                  </div>
                  <button className="p-3 text-[#666] hover:text-white hover:bg-[#1a1a1a] rounded-lg transition-colors">
                    <Download size={20} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-5 border border-[#1a1a1a] rounded-lg hover:border-[#333] transition-colors group bg-[#0a0a0a]">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-[#10b981] border border-[#222]">
                      <FileText size={22} />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm mb-1">
                        Supplementary Chart Examples
                      </p>
                      <p className="text-[#666] text-xs">
                        PDF Document • 5.1 MB
                      </p>
                    </div>
                  </div>
                  <button className="p-3 text-[#666] hover:text-white hover:bg-[#1a1a1a] rounded-lg transition-colors">
                    <Download size={20} />
                  </button>
                </div>
              </div>
            </div>
          }
        </motion.div>
      </AnimatePresence>
    </div>);

}