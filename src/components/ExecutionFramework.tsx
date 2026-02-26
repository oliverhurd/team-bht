import React from 'react';
import { Lesson } from '../data/courseData';
interface ExecutionFrameworkProps {
  lesson: Lesson;
}
export function ExecutionFramework({ lesson }: ExecutionFrameworkProps) {
  return (
    <div className="w-full bg-[#111] border border-[#1a1a1a] rounded-lg p-8">
      <div className="mb-8">
        <h3 className="text-[#666] text-xs font-bold uppercase tracking-[0.2em] mb-3">
          EXECUTION FRAMEWORK
        </h3>
        <h2 className="text-white text-xl font-sans font-bold">
          {lesson.rundownTitle}
        </h2>
      </div>

      <div className="space-y-1 bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] overflow-hidden">
        {lesson.rundownSteps.map((step, index) =>
        <div
          key={index}
          className="flex gap-6 py-5 px-6 border-b border-[#1a1a1a] last:border-0">

            <span className="text-[#333] font-mono text-sm font-bold pt-1">
              {String(index + 1).padStart(2, '0')}.
            </span>
            <p className="text-[#e5e5e5] text-base leading-relaxed font-light">
              {step}
            </p>
          </div>
        )}
      </div>
    </div>);

}