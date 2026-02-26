import React from 'react';
import { ContinueLearningStrip } from './ContinueLearningStrip';
import { MarketIntelligence } from './MarketIntelligence';
import { QuickAccess } from './QuickAccess';
import { COURSES } from '../data/courseData';
import { CheckCircle2 } from 'lucide-react';
interface VaultDashboardProps {
  onNavigate: (
  view: 'dashboard' | 'course' | 'market-intelligence' | 'pdf-library',
  courseId?: string)
  => void;
}
export function VaultDashboard({ onNavigate }: VaultDashboardProps) {
  return (
    <div className="p-10 max-w-7xl mx-auto pb-24">
      {/* Section 1: Continue Learning */}
      <ContinueLearningStrip
        onResume={() => onNavigate('course', 'inception-model')} />


      {/* Section 2: Your Models */}
      <div className="mb-14">
        <h2 className="text-[#666] text-[11px] uppercase tracking-[0.15em] font-medium mb-6">
          Your Models
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((course) =>
          <div
            key={course.id}
            onClick={() => onNavigate('course', course.id)}
            className="bg-[#111] border border-[#1a1a1a] rounded-lg overflow-hidden cursor-pointer group hover:border-[#2a2a2a] transition-colors duration-200 flex flex-col h-full">

              <div className="h-[180px] w-full overflow-hidden relative bg-[#0d0d0d]">
                <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-full object-cover opacity-80 transition-opacity duration-500" />

              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-white text-base font-semibold mb-2 font-sans">
                  {course.title}
                </h3>
                <p className="text-[#999] text-sm mb-8 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>

                <div className="mt-auto">
                  {course.progress === 100 ?
                <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[#10b981]">
                        <span className="text-xs font-bold uppercase tracking-wider">
                          Completed
                        </span>
                      </div>
                      <button className="text-[#666] text-xs font-medium uppercase tracking-wider hover:text-white hover:underline transition-colors">
                        Review
                      </button>
                    </div> :

                <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#10b981] font-bold">
                          {course.progress}% Complete
                        </span>
                        <button className="text-white hover:text-[#10b981] transition-colors flex items-center gap-1 group/btn">
                          <span className="font-medium">Resume</span>
                        </button>
                      </div>
                      <div className="h-[2px] bg-[#1a1a1a] rounded-full overflow-hidden">
                        <div
                      className="h-full bg-[#10b981] rounded-full"
                      style={{
                        width: `${course.progress}%`
                      }} />

                      </div>
                    </div>
                }
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Section 3: Market Intelligence */}
      <MarketIntelligence />

      {/* Section 4: Quick Access */}
      <QuickAccess />
    </div>);

}