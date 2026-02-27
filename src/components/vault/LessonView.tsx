import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  Download,
  ChevronRight,
  ChevronDown,
  Clock,
  Check
} from 'lucide-react';
import { COURSES } from '../../data/courseData';

interface LessonViewProps {
  onNavigate: (view: string) => void;
}

// This is legacy - not used
const curriculum = [
{
  id: 'disclaimer',
  title: 'DISCLAIMER',
  items: [
  {
    id: 'd1',
    title: 'Disclaimer',
    completed: true
  }]

},
{
  id: 'narrative',
  title: 'NARRATIVE (WEEKLY RANGE)',
  items: [
  {
    id: 'n1',
    title: 'Price-directional Bias',
    completed: true
  },
  {
    id: 'n2',
    title: 'Time-window Bias',
    completed: true
  },
  {
    id: 'n3',
    title: 'Confirmation for the Weekly Bias',
    completed: true
  }]

},
{
  id: 'framework',
  title: 'FRAMEWORK (DAILY RANGE)',
  items: [
  {
    id: 'f1',
    title: 'Context for the Daily Bias',
    completed: true
  },
  {
    id: 'f2',
    title: 'Targets for the Daily Bias',
    completed: true
  },
  {
    id: 'f3',
    title: 'Profiles for the Daily Bias',
    completed: true
  }]

},
{
  id: 'model',
  title: 'MODEL (SESSION RANGES)',
  items: [
  {
    id: 'm1',
    title: 'The Inception Trade System',
    completed: true
  },
  {
    id: 'm2',
    title: 'Trade Ideas for the New York Session',
    completed: false,
    active: true
  },
  {
    id: 'm3',
    title: 'Trade Execution for the New York Session',
    completed: false
  },
  {
    id: 'm4',
    title: 'Trade Terminus for the New York Session',
    completed: false
  }]

}];

export function LessonView({ onNavigate }: LessonViewProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'Lesson' | 'Notes' | 'Checklist' | 'Downloads'>('Lesson');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('');
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  // Get the Inception Model course
  const inceptionCourse = COURSES.find(c => c.id === 'inception-model');
  
  if (!inceptionCourse) {
    return <div>Course not found</div>;
  }

  // Flatten all lessons to find active one
  const allLessons = inceptionCourse.sections.flatMap(s => s.lessons);
  const activeLessonId = selectedLessonId || allLessons[0]?.id || '';
  const activeLesson = allLessons.find(l => l.id === activeLessonId);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  function getYouTubeEmbedUrl(url: string) {
    try {
      if (!url) return '';
      if (!url.includes('youtube') && !url.includes('youtu.be') && !url.includes('/')) {
        return `https://www.youtube.com/embed/${url}`;
      }
      const ytMatch = url.match(/(?:v=|\/embed\/|youtu\.be\/)([\w-]{11})/);
      const id = ytMatch ? ytMatch[1] : null;
      return id ? `https://www.youtube.com/embed/${id}` : url;
    } catch (e) {
      return url;
    }
  }

  // Count completed lessons
  const completedCount = allLessons.filter(l => l.completed).length;
  const completionPercentage = Math.round((completedCount / allLessons.length) * 100);
  return (
    <div className="flex h-screen w-full bg-[#0A0A0A] overflow-hidden">
      {/* Lesson Sidebar */}
      <aside className="w-80 bg-[#050505] border-r border-brave-border/50 flex flex-col h-full shrink-0">
        <div className="p-6 border-b border-brave-border/50">
          <button
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-brave-text-secondary hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-3 h-3" />
            Back to Classroom
          </button>
          <h2 className="text-lg font-medium text-white mb-3">
            {inceptionCourse.title}
          </h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-[#00E599]">
              <span>{completionPercentage}% Complete</span>
            </div>
            <div className="h-0.5 w-full bg-[#1A1A1A] rounded-full overflow-hidden">
              <div className="h-full bg-[#00E599]" style={{ width: `${completionPercentage}%` }} />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
          {inceptionCourse.sections.map((section) => (
            <div key={section.id} className="mb-2">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between px-2 py-3 text-[10px] font-bold tracking-widest uppercase text-brave-text-muted hover:text-brave-text-secondary transition-colors">
                {section.title}
                {expandedSections.includes(section.id) ? (
                  <ChevronDown className="w-3 h-3" />
                ) : (
                  <ChevronRight className="w-3 h-3" />
                )}
              </button>
              {expandedSections.includes(section.id) && (
                <div className="space-y-1 mt-1">
                  {section.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => setSelectedLessonId(lesson.id)}
                      className={`w-full flex items-start gap-3 px-3 py-2.5 rounded-[2px] text-left transition-colors ${
                        lesson.id === activeLessonId
                          ? 'bg-white/[0.03] border border-white/5'
                          : 'hover:bg-white/[0.02]'
                      }`}>
                      {lesson.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-[#00E599] shrink-0 mt-0.5" />
                      ) : lesson.id === activeLessonId ? (
                        <Circle className="w-4 h-4 text-[#00E599] shrink-0 mt-0.5" />
                      ) : (
                        <Circle className="w-4 h-4 text-brave-text-muted shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`text-xs leading-snug ${
                          lesson.id === activeLessonId
                            ? 'text-white font-medium'
                            : 'text-brave-text-secondary'
                        }`}>
                        {lesson.title}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Bar */}
        <header className="h-20 border-b border-brave-border/50 flex items-center justify-between px-8 shrink-0 bg-[#0A0A0A]">
          <div>
            <div className="text-[10px] font-medium tracking-widest uppercase text-brave-text-muted mb-1">
              {inceptionCourse.title}
            </div>
            <h1 className="text-xl font-medium text-white">
              {activeLesson?.title || 'Select a lesson'}
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-brave-text-muted">
              {completedCount} of {allLessons.length} lessons completed
            </span>
            <button className="px-4 py-2 border border-brave-border/60 text-xs font-medium text-brave-text-secondary hover:text-white hover:border-brave-text-secondary transition-colors rounded-[2px]">
              Mark as Complete
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 text-xs font-medium text-white hover:bg-white/10 transition-colors rounded-[2px]">
              Next Lesson <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex gap-8 border-b border-brave-border/50 mb-8">
              {['Lesson', 'Notes', 'Checklist', 'Downloads'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`pb-4 text-sm font-medium transition-colors relative ${
                    activeTab === tab
                      ? 'text-white'
                      : 'text-brave-text-secondary hover:text-brave-text-primary'
                  }`}>
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00E599]" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'Lesson' && activeLesson && (
              <div className="space-y-8">
                {/* Video Player */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${activeLesson.completed ? 'bg-[#10b981]' : 'bg-[#F5A623]'}`} />
                      <span className={`text-[10px] font-bold tracking-widest uppercase ${activeLesson.completed ? 'text-[#10b981]' : 'text-[#F5A623]'}`}>
                        {activeLesson.completed ? 'Completed' : 'In Progress'}
                      </span>
                    </div>
                    <div className="w-px h-3 bg-brave-border" />
                    <div className="flex items-center gap-1.5 text-brave-text-muted">
                      <Clock size={12} />
                      <span className="text-[10px] font-mono">{activeLesson.duration}</span>
                    </div>
                  </div>

                  {/* Video Container */}
                  <div className="aspect-video bg-[#050505] border border-brave-border/50 rounded-[4px] flex flex-col items-center justify-center relative overflow-hidden mb-6">
                    {activeLesson.videoUrl ? (
                      <iframe
                        title={activeLesson.title}
                        className="w-full h-full"
                        src={getYouTubeEmbedUrl(activeLesson.videoUrl)}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div>
                        <h3 className="text-xl font-medium text-white mb-4">{activeLesson.title}</h3>
                        <p className="text-brave-text-secondary">No video available</p>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between text-xs text-brave-text-secondary">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 hover:text-white transition-colors">
                        <div className={`w-4 h-4 border rounded-[2px] flex items-center justify-center ${activeLesson.completed ? 'bg-[#10b981] border-[#10b981]' : 'border-brave-text-secondary'}`}>
                          {activeLesson.completed && <Check size={10} strokeWidth={3} className="text-black" />}
                        </div>
                        Mark as Complete
                      </button>
                      {activeLesson.resourceUrl && (
                        <a href={activeLesson.resourceUrl} download className="flex items-center gap-2 hover:text-white transition-colors">
                          <Download className="w-4 h-4" />
                          Download Notes
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Execution Framework */}
                <div className="bg-[#0C0C0C] border border-brave-border/50 rounded-[4px] p-8 mt-8">
                  <h3 className="text-[10px] font-medium tracking-[0.2em] uppercase text-brave-text-secondary mb-4">
                    Execution Framework
                  </h3>
                  <h4 className="text-lg font-medium text-white mb-6">{activeLesson.rundownTitle}</h4>
                  <div className="space-y-2">
                    {activeLesson.rundownSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-6 p-4 border border-brave-border/30 bg-[#0A0A0A] rounded-[2px]">
                        <span className="text-xs font-mono text-brave-text-muted mt-0.5">
                          0{idx + 1}.
                        </span>
                        <p className="text-sm text-brave-text-primary leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Notes' && (
              <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-8 min-h-[500px]">
                <textarea
                  className="w-full h-[400px] bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 text-[#e5e5e5] placeholder-[#444] focus:outline-none focus:border-[#333] transition-colors resize-none leading-relaxed"
                  placeholder="Type your notes here... captured thoughts, trade ideas, or questions."
                />
              </div>
            )}

            {activeTab === 'Checklist' && activeLesson && (
              <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-8">
                <h3 className="text-white font-sans text-lg mb-6">Action Checklist</h3>
                <div className="space-y-4">
                  {activeLesson.rundownSteps.map((step, index) => (
                    <div
                      key={index}
                      onClick={() => toggleCheck(index)}
                      className="flex items-start gap-5 p-5 rounded-lg border border-[#1a1a1a] hover:bg-[#0d0d0d] cursor-pointer transition-colors group">
                      <div
                        className={`w-6 h-6 rounded border flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
                          checkedItems[index]
                            ? 'bg-[#10b981] border-[#10b981]'
                            : 'border-[#333] group-hover:border-[#666]'
                        }`}>
                        {checkedItems[index] && (
                          <Check size={14} className="text-black" strokeWidth={3} />
                        )}
                      </div>
                      <span
                        className={`text-sm leading-relaxed transition-colors ${
                          checkedItems[index]
                            ? 'text-[#666] line-through'
                            : 'text-[#e5e5e5]'
                        }`}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Downloads' && activeLesson && (
              <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-8">
                <h3 className="text-white font-sans text-lg mb-6">Resources</h3>
                {activeLesson.resourceUrl ? (
                  <a
                    href={activeLesson.resourceUrl}
                    download
                    className="flex items-center justify-between p-5 border border-[#1a1a1a] rounded-lg hover:border-[#333] transition-colors group bg-[#0a0a0a]">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-[#00E599] border border-[#222]">
                        📄
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm mb-1">{activeLesson.resourceName}</p>
                        <p className="text-[#666] text-xs">{activeLesson.resourceUrl}</p>
                      </div>
                    </div>
                    <Download className="text-brave-text-secondary group-hover:text-white transition-colors" />
                  </a>
                ) : (
                  <p className="text-brave-text-secondary">No resources available</p>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}