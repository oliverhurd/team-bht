import React from 'react';
import { Lesson, Course } from '../data/courseData';
import { LessonControlBar } from './LessonControlBar';
import { LessonTabs } from './LessonTabs';
interface LessonViewProps {
  course: Course;
  lesson: Lesson;
  onToggleComplete: (lessonId: string) => void;
  onNext: () => void;
}
export function LessonView({
  course,
  lesson,
  onToggleComplete,
  onNext
}: LessonViewProps) {
  return (
    <div className="flex-1 bg-[#0a0a0a] overflow-y-auto h-full relative">
      <LessonControlBar
        courseTitle={course.title}
        lessonTitle={lesson.title}
        isCompleted={lesson.completed}
        onToggleComplete={() => onToggleComplete(lesson.id)}
        onNext={onNext} />


      <div className="pt-10">
        <LessonTabs
          lesson={lesson}
          onToggleComplete={() => onToggleComplete(lesson.id)}
          onNext={onNext} />

      </div>
    </div>);

}