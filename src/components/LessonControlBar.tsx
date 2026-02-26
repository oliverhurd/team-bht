import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
interface LessonControlBarProps {
  courseTitle: string;
  lessonTitle: string;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onNext: () => void;
}
export function LessonControlBar({
  courseTitle,
  lessonTitle,
  isCompleted,
  onToggleComplete,
  onNext
}: LessonControlBarProps) {
  return (
    <div className="w-full bg-[#0a0a0a] border-b border-[#1a1a1a] px-10 py-5 flex items-center justify-between sticky top-0 z-40">
      <div className="flex flex-col gap-1">
        <span className="text-[#666] text-xs uppercase tracking-wider font-medium">
          {courseTitle}
        </span>
        <h1 className="text-white text-xl font-sans font-bold">
          {lessonTitle}
        </h1>
      </div>

      <div className="flex items-center gap-8">
        <span className="text-[#666] text-xs font-medium tracking-wide">
          3 of 12 lessons completed
        </span>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleComplete}
            className={`flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium transition-colors duration-200 ${isCompleted ? 'bg-[#10b981] text-black hover:bg-[#059669]' : 'border border-[#333] text-[#888] hover:border-[#10b981] hover:text-[#10b981]'}`}>

            {isCompleted && <Check size={16} />}
            <span>{isCompleted ? 'Completed' : 'Mark as Complete'}</span>
          </button>

          <button
            onClick={onNext}
            className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium text-white bg-[#1a1a1a] hover:bg-[#222] border border-[#2a2a2a] transition-colors">

            <span>Next Lesson</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>);

}