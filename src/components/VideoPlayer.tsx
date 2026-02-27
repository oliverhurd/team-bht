import React from 'react';
import { Play, Check, Download, ChevronRight, Clock } from 'lucide-react';
import { Lesson } from '../data/courseData';
interface VideoPlayerProps {
  lesson: Lesson;
  onToggleComplete: () => void;
  onNext: () => void;
}
export function VideoPlayer({
  lesson,
  onToggleComplete,
  onNext
}: VideoPlayerProps) {
  function getYouTubeEmbedUrl(url: string) {
    // If the value looks like an id (no slashes), use it directly
    try {
      if (!url) return '';
      if (!url.includes('youtube') && !url.includes('youtu.be') && !url.includes('/')) {
        return `https://www.youtube.com/embed/${url}`;
      }
      // Attempt to extract id from common URL forms
      const ytMatch = url.match(/(?:v=|\/embed\/|youtu\.be\/)([\w-]{11})/);
      const id = ytMatch ? ytMatch[1] : null;
      return id ? `https://www.youtube.com/embed/${id}` : url;
    } catch (e) {
      return url;
    }
  }
  return (
    <div className="w-full mb-10">
      {/* Meta Row */}
      <div className="flex items-center gap-4 mb-5">
        {lesson.completed ?
        <div className="flex items-center gap-2">
            <Check size={14} className="text-[#10b981]" />
            <span className="text-[#10b981] text-xs font-bold uppercase tracking-wider">
              Completed
            </span>
          </div> :

        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-amber-500 text-xs font-bold uppercase tracking-wider">
              In Progress
            </span>
          </div>
        }
        <span className="text-[#333]">|</span>
        <div className="flex items-center gap-1.5 text-[#888]">
          <Clock size={12} />
          <span className="text-xs font-medium">{lesson.duration}</span>
        </div>
      </div>

      {/* Video Container */}
      <div className="w-full aspect-video bg-[#0d0d0d] rounded-lg border border-[#1a1a1a] relative overflow-hidden mb-8">
        {lesson.videoUrl ? (
          // Support full YouTube URL or just an id
          <iframe
            title={lesson.title}
            className="w-full h-full"
            src={getYouTubeEmbedUrl(lesson.videoUrl)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-white font-medium text-xl mb-4">
                {lesson.title}
              </h2>
              <button className="w-14 h-10 bg-[#1a1a1a] border border-[#333] rounded flex items-center justify-center hover:bg-[#222] transition-colors mx-auto">
                <Play size={20} className="text-white fill-white ml-1" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="flex items-center gap-6 border-b border-[#1a1a1a] pb-8">
        <button
          onClick={onToggleComplete}
          className="flex items-center gap-3 text-[#888] hover:text-[#10b981] transition-colors text-sm font-medium group">

          <div
            className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${lesson.completed ? 'bg-[#10b981] border-[#10b981] text-black' : 'border-[#444] group-hover:border-[#10b981]'}`}>

            {lesson.completed && <Check size={12} strokeWidth={3} />}
          </div>
          <span>Mark as Complete</span>
        </button>

        {lesson.resourceUrl ? (
          <a
            href={lesson.resourceUrl}
            download
            className="flex items-center gap-2 text-[#888] hover:text-white transition-colors text-sm font-medium">
            <Download size={16} />
            <span>Download Notes</span>
          </a>
        ) : (
          <button className="flex items-center gap-2 text-[#888] hover:text-white transition-colors text-sm font-medium">
            <Download size={16} />
            <span>Download Notes</span>
          </button>
        )}

        <button
          onClick={onNext}
          className="flex items-center gap-2 text-[#888] hover:text-white transition-colors text-sm font-medium ml-auto">

          <span>Next Lesson</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>);

}