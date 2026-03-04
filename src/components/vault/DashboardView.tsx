import React from 'react';
import { Play } from 'lucide-react';
import { useLessonProgress } from '../../hooks/useLessonProgress';

interface DashboardViewProps {
  onNavigate: (view: string) => void;
}

export function DashboardView({ onNavigate }: DashboardViewProps) {
  const { getCourseProgress, getCompletedCount, getTotalLessons, isCompleted } = useLessonProgress();
  
  const courseProgress = getCourseProgress('inception-model');
  const completedCount = getCompletedCount('inception-model');
  const totalLessons = getTotalLessons('inception-model');
  
  // Find the first incomplete lesson to show
  const getNextLessonTitle = () => {
    const course = { sections: [
      { id: 'narrative-section', lessons: [
        { id: 'price-directional-bias', completed: isCompleted('price-directional-bias') },
        { id: 'time-window-bias', completed: isCompleted('time-window-bias') },
        { id: 'confirmation-weekly', completed: isCompleted('confirmation-weekly') }
      ]},
      { id: 'framework-section', lessons: [
        { id: 'context-daily', completed: isCompleted('context-daily') },
        { id: 'targets-daily', completed: isCompleted('targets-daily') },
        { id: 'profiles-daily', completed: isCompleted('profiles-daily') }
      ]},
      { id: 'model-section', lessons: [
        { id: 'inception-trade-system', completed: isCompleted('inception-trade-system') },
        { id: 'trade-ideas-ny', completed: isCompleted('trade-ideas-ny') },
        { id: 'trade-execution', completed: isCompleted('trade-execution') },
        { id: 'trade-terminus', completed: isCompleted('trade-terminus') }
      ]}
    ]};
    
    const lessonTitles: Record<string, string> = {
      'price-directional-bias': 'Price-directional Bias',
      'time-window-bias': 'Time-window Bias', 
      'confirmation-weekly': 'Confirmation for the Weekly Bias',
      'context-daily': 'Context for the Daily Bias',
      'targets-daily': 'Targets for the Daily Bias',
      'profiles-daily': 'Profiles for the Daily Bias',
      'inception-trade-system': 'The Inception Trade System',
      'trade-ideas-ny': 'Trade Ideas for the New York Session',
      'trade-execution': 'Trade Execution for the New York Session',
      'trade-terminus': 'Trade Terminus for the New York Session'
    };
    
    for (const section of course.sections) {
      for (const lesson of section.lessons) {
        if (!lesson.completed) {
          return lessonTitles[lesson.id] || 'Next Lesson';
        }
      }
    }
    return 'All Lessons Complete';
  };

  return (
    <div className="p-8 md:p-12 max-w-6xl mx-auto w-full">
      {/* Continue Learning */}
      <section className="mb-16">
        <h2 className="text-[10px] font-medium tracking-[0.2em] uppercase text-brave-text-secondary mb-6">
          Continue Learning
        </h2>
        <div className="bg-[#0C0C0C] border border-brave-border/50 rounded-[2px] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1 w-full">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#00E599]">
                {courseProgress === 100 ? 'Completed' : 'In Progress'}
              </span>
              <span className="text-[10px] font-medium tracking-widest uppercase text-brave-text-muted">
                The Inception Model
              </span>
            </div>
            <h3 className="text-2xl font-medium text-white mb-6">
              {getNextLessonTitle()}
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-1 bg-[#1A1A1A] rounded-full overflow-hidden">
                <div className="h-full bg-[#00E599]" style={{ width: `${courseProgress}%` }} />
              </div>
              <span className="text-xs font-medium text-[#00E599]">{courseProgress}%</span>
              <span className="text-[10px] font-medium tracking-widest uppercase text-brave-text-muted">
                Lesson {completedCount + (courseProgress < 100 ? 1 : 0)} of {totalLessons}
              </span>
            </div>
          </div>
          <button
            onClick={() => onNavigate('lesson')}
            className="flex items-center gap-2 bg-[#00E599] text-black px-6 py-3 rounded-[2px] text-sm font-semibold hover:bg-[#00E599]/90 transition-colors whitespace-nowrap">

            <Play className="w-4 h-4 fill-black" />
            Resume Lesson
          </button>
        </div>
      </section>

      {/* Your Models */}
      <section className="mb-16">
        <h2 className="text-[10px] font-medium tracking-[0.2em] uppercase text-brave-text-secondary mb-6">
          Your Models
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#0C0C0C] border border-brave-border/50 rounded-[2px] overflow-hidden flex flex-col group cursor-pointer hover:border-brave-text-secondary/30 transition-colors">
            <div className="aspect-[16/9] relative overflow-hidden bg-[#111]">
              <img
                src="/pasted-image.jpg"
                alt="Market Structure"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />

            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-base font-medium text-white mb-2">
                Market Structure (Basics)
              </h3>
              <p className="text-xs text-brave-text-secondary mb-8 flex-1">
                The starting point for Market Structure
              </p>
              <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase">
                <span className="text-[#00E599]">Completed</span>
                <span className="text-brave-text-muted group-hover:text-brave-text-secondary transition-colors">
                  Review
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => onNavigate('lesson')}
            className="bg-[#0C0C0C] border border-brave-border/50 rounded-[2px] overflow-hidden flex flex-col group cursor-pointer hover:border-brave-text-secondary/30 transition-colors">

            <div className="aspect-[16/9] relative overflow-hidden bg-[#111]">
              <img
                src="/pasted-image-1.jpg"
                alt="Inception Model"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />

            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-base font-medium text-white mb-2">
                The Inception Model
              </h3>
              <p className="text-xs text-brave-text-secondary mb-8 flex-1">
                The starting point for the Aspiring Trader
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase">
                  <span className="text-[#00E599]">{courseProgress === 100 ? 'Completed' : `${courseProgress}% Complete`}</span>
                  <span className="text-white">{courseProgress === 100 ? 'Review' : 'Resume'}</span>
                </div>
                <div className="h-0.5 w-full bg-[#1A1A1A] rounded-full overflow-hidden">
                  <div className="h-full bg-[#00E599]" style={{ width: `${courseProgress}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0C0C0C] border border-brave-border/50 rounded-[2px] overflow-hidden flex flex-col group cursor-pointer hover:border-brave-text-secondary/30 transition-colors">
            <div className="aspect-[16/9] relative overflow-hidden bg-[#111]">
              <img
                src="/pasted-image-2.jpg"
                alt="Frameworks Amplified"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />

            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-base font-medium text-white mb-2">
                Frameworks Amplified
              </h3>
              <p className="text-xs text-brave-text-secondary mb-8 flex-1">
                Greater details into trading with framework
              </p>
              <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase">
                <span className="text-[#00E599]">Completed</span>
                <span className="text-brave-text-muted group-hover:text-brave-text-secondary transition-colors">
                  Review
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This Week */}
      <section className="mb-16">
        <h2 className="text-[10px] font-medium tracking-[0.2em] uppercase text-brave-text-secondary mb-6">
          This Week
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Forecast Card */}
          <div
            onClick={() => onNavigate('weekly:forecast')}
            className="bg-[#0C0C0C] border border-brave-border/50 rounded-[2px] overflow-hidden flex flex-col group cursor-pointer hover:border-brave-text-secondary/30 transition-colors">
            <div className="aspect-[16/9] relative overflow-hidden bg-[#111]">
              <img
                src="https://img.youtube.com/vi/sK3vmR2ynhM/maxresdefault.jpg"
                alt="Weekly Forecast"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-base font-medium text-white mb-2">
                Weekly Market Forecast
              </h3>
              <p className="text-xs text-brave-text-secondary mb-8 flex-1">
                Narrative context and execution framework for the trading week ahead.
              </p>
              <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase">
                <span className="text-[#00E599]">Watch</span>
              </div>
            </div>
          </div>

          {/* Review Card */}
          <div
            onClick={() => onNavigate('weekly:review')}
            className="bg-[#0C0C0C] border border-brave-border/50 rounded-[2px] overflow-hidden flex flex-col group cursor-pointer hover:border-brave-text-secondary/30 transition-colors">
            <div className="aspect-[16/9] relative overflow-hidden bg-[#111]">
              <img
                src="https://img.youtube.com/vi/az8Ir0oVTCA/maxresdefault.jpg"
                alt="Weekly Review"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-base font-medium text-white mb-2">
                Weekly Market Review
              </h3>
              <p className="text-xs text-brave-text-secondary mb-8 flex-1">
                A look back at last week’s price action and key takeaways.
              </p>
              <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase">
                <span className="text-[#00E599]">Watch</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}