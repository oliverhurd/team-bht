import React from 'react';
import { Course } from '../data/courseData';
import { CourseSidebar } from './CourseSidebar';
import { LessonView } from './LessonView';
interface CourseViewProps {
  course: Course;
  activeLessonId: string;
  onSelectLesson: (lessonId: string) => void;
  onBack: () => void;
}
export function CourseView({
  course,
  activeLessonId,
  onSelectLesson,
  onBack
}: CourseViewProps) {
  // Find the active lesson object
  const activeLesson = course.sections.
  flatMap((s) => s.lessons).
  find((l) => l.id === activeLessonId);
  if (!activeLesson) return <div>Lesson not found</div>;
  const handleToggleComplete = (lessonId: string) => {
    console.log('Toggle complete:', lessonId);
    // In a real app, this would update state
  };
  const handleNext = () => {
    // Logic to find next lesson ID
    const allLessons = course.sections.flatMap((s) => s.lessons);
    const currentIndex = allLessons.findIndex((l) => l.id === activeLessonId);
    if (currentIndex < allLessons.length - 1) {
      onSelectLesson(allLessons[currentIndex + 1].id);
    }
  };
  return (
    <div className="flex h-full w-full overflow-hidden">
      <CourseSidebar
        course={course}
        activeLessonId={activeLessonId}
        onSelectLesson={onSelectLesson}
        onBack={onBack} />

      <LessonView
        course={course}
        lesson={activeLesson}
        onToggleComplete={handleToggleComplete}
        onNext={handleNext} />

    </div>);

}