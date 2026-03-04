import { useState, useEffect } from 'react';
import { COURSES } from '../data/courseData';

const STORAGE_KEY = 'braveheart_lesson_progress';

interface LessonProgress {
  [lessonId: string]: boolean;
}

export function useLessonProgress() {
  const [progress, setProgress] = useState<LessonProgress>({});

  // Load progress from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProgress(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse lesson progress:', e);
      }
    } else {
      // Initialize with default completed status from courseData
      const initialProgress: LessonProgress = {};
      const inceptionCourse = COURSES.find(c => c.id === 'inception-model');
      if (inceptionCourse) {
        inceptionCourse.sections.forEach(section => {
          section.lessons.forEach(lesson => {
            initialProgress[lesson.id] = lesson.completed;
          });
        });
      }
      setProgress(initialProgress);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProgress));
    }
  }, []);

  // Save progress whenever it changes
  const saveProgress = (newProgress: LessonProgress) => {
    setProgress(newProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
  };

  // Mark a lesson as complete
  const markComplete = (lessonId: string) => {
    const newProgress = { ...progress, [lessonId]: true };
    saveProgress(newProgress);
  };

  // Toggle a lesson's completion status
  const toggleComplete = (lessonId: string) => {
    const newProgress = { ...progress, [lessonId]: !progress[lessonId] };
    saveProgress(newProgress);
  };

  // Check if a lesson is completed
  const isCompleted = (lessonId: string): boolean => {
    return progress[lessonId] || false;
  };

  // Get overall progress for a course
  const getCourseProgress = (courseId: string): number => {
    const course = COURSES.find(c => c.id === courseId);
    if (!course || !course.sections.length) return 0;
    
    const allLessons = course.sections.flatMap(s => s.lessons);
    const completedLessons = allLessons.filter(l => progress[l.id]).length;
    return Math.round((completedLessons / allLessons.length) * 100);
  };

  // Get completed count for a course
  const getCompletedCount = (courseId: string): number => {
    const course = COURSES.find(c => c.id === courseId);
    if (!course || !course.sections.length) return 0;
    
    const allLessons = course.sections.flatMap(s => s.lessons);
    return allLessons.filter(l => progress[l.id]).length;
  };

  // Get total lessons count for a course
  const getTotalLessons = (courseId: string): number => {
    const course = COURSES.find(c => c.id === courseId);
    if (!course || !course.sections.length) return 0;
    return course.sections.flatMap(s => s.lessons).length;
  };

  // Get next lesson in sequence
  const getNextLesson = (currentLessonId: string): string | null => {
    const course = COURSES.find(c => c.id === 'inception-model');
    if (!course) return null;
    
    const allLessons = course.sections.flatMap(s => s.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
    
    if (currentIndex === -1 || currentIndex === allLessons.length - 1) {
      return null;
    }
    
    return allLessons[currentIndex + 1].id;
  };

  // Get previous lesson in sequence
  const getPreviousLesson = (currentLessonId: string): string | null => {
    const course = COURSES.find(c => c.id === 'inception-model');
    if (!course) return null;
    
    const allLessons = course.sections.flatMap(s => s.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
    
    if (currentIndex <= 0) {
      return null;
    }
    
    return allLessons[currentIndex - 1].id;
  };

  return {
    progress,
    markComplete,
    toggleComplete,
    isCompleted,
    getCourseProgress,
    getCompletedCount,
    getTotalLessons,
    getNextLesson,
    getPreviousLesson
  };
}
