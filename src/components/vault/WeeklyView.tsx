import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface WeeklyViewProps {
  onNavigate: (view: string) => void;
  type: 'forecast' | 'review';
}

export function WeeklyView({ onNavigate, type }: WeeklyViewProps) {
  const videos: Record<WeeklyViewProps['type'], { title: string; url: string }> = {
    forecast: {
      title: 'Weekly Market Forecast',
      url: 'https://youtu.be/sK3vmR2ynhM'
    },
    review: {
      title: 'Weekly Market Review',
      url: 'https://youtu.be/az8Ir0oVTCA'
    }
  };

  const { title, url } = videos[type];

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

  return (
    <div className="flex h-screen w-full bg-[#0A0A0A] overflow-hidden">
      {/* Sidebar with back button */}
      <aside className="w-80 bg-[#050505] border-r border-brave-border/50 flex flex-col h-full shrink-0">
        <button
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-brave-text-secondary hover:text-white transition-colors mb-6">
          <ArrowLeft className="w-3 h-3" />
          Back to Dashboard
        </button>
      </aside>

      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-brave-border/50 flex items-center justify-between px-8 shrink-0 bg-[#0A0A0A]">
          <div>
            <div className="text-[10px] font-medium tracking-widest uppercase text-brave-text-muted mb-1">
              This Week
            </div>
            <h1 className="text-xl font-medium text-white">{title}</h1>
          </div>
        </header>

        {/* Video Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12">
          <div className="aspect-video bg-[#050505] border border-brave-border/50 rounded-[4px] overflow-hidden">
            <iframe
              title={title}
              className="w-full h-full"
              src={getYouTubeEmbedUrl(url)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </main>
    </div>
  );
}
