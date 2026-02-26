import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight } from
'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Course } from '../data/courseData';
interface CourseSidebarProps {
  course: Course;
  activeLessonId: string;
  onSelectLesson: (lessonId: string) => void;
  onBack: () => void;
}
export function CourseSidebar({
  course,
  activeLessonId,
  onSelectLesson,
  onBack
}: CourseSidebarProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    course.sections.reduce(
      (acc, section) => ({
        ...acc,
        [section.id]: true
      }),
      {}
    )
  );
  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };
  return (
    <div className="w-[320px] bg-[#111111] border-r border-[#1a1a1a] h-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-8 border-b border-[#1a1a1a]">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#666] hover:text-white text-xs uppercase tracking-wider mb-6 transition-colors group">

          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform" />

          <span>Back to Classroom</span>
        </button>

        <h2 className="text-white font-sans font-semibold text-xl mb-4 leading-tight">
          {course.title}
        </h2>

        <div className="space-y-3">
          <div className="h-[2px] bg-[#1a1a1a] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#10b981] rounded-full"
              style={{
                width: `${course.progress}%`
              }} />

          </div>
          <p className="text-[#10b981] text-[10px] font-bold tracking-widest uppercase">
            {course.progress}% COMPLETE
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {course.sections.map((section) =>
        <div key={section.id} className="border-b border-[#1a1a1a]">
            <button
            onClick={() => toggleSection(section.id)}
            className="w-full flex items-center justify-between p-5 bg-[#111111] hover:bg-[#151515] transition-colors">

              <span className="text-[#555] text-[10px] font-bold tracking-widest uppercase">
                {section.title}
              </span>
              {openSections[section.id] ?
            <ChevronDown size={14} className="text-[#666]" /> :

            <ChevronRight size={14} className="text-[#666]" />
            }
            </button>

            <AnimatePresence initial={false}>
              {openSections[section.id] &&
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
                duration: 0.2
              }}
              className="overflow-hidden bg-[#0a0a0a]">

                  <div className="pb-3">
                    {section.lessons.map((lesson) => {
                  const isActive = lesson.id === activeLessonId;
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => onSelectLesson(lesson.id)}
                      className={`w-full flex items-start gap-3 p-3 pl-5 text-left transition-colors duration-200 relative group ${isActive ? 'bg-[#1a1a1a] text-white' : 'text-[#888] hover:text-white hover:bg-[#151515]'}`}>

                          {isActive &&
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#10b981]" />
                      }

                          <div className="mt-0.5 flex-shrink-0">
                            {lesson.completed ?
                        <CheckCircle2
                          size={16}
                          className="text-[#10b981]" /> :


                        <Circle
                          size={16}
                          className={
                          isActive ?
                          'text-[#10b981]' :
                          'text-[#333] group-hover:text-[#666]'
                          } />

                        }
                          </div>

                          <span className="text-sm font-medium leading-snug">
                            {lesson.title}
                          </span>
                        </button>);

                })}
                  </div>
                </motion.div>
            }
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>);

}