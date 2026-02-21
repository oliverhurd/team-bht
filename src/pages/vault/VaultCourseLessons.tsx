import React, { useEffect, useState } from 'react';
import { VaultLayout } from '../../components/VaultLayout';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Circle, ChevronDown, ChevronUp, FileText, Download } from 'lucide-react';

const VIDEO_URLS: Record<string, string> = {
  // Narrative
  'im-narrative-bias':    'Wgds6ZWIqSU',
  'im-narrative-timing':  'uK-Pw04teEc',
  'im-narrative-confirm': 'A-X7gBaJsAI',
  // Framework
  'im-framework-context':   'kQUoobrsq8U',
  'im-framework-targets':   'NEP-sYqAmBk',
  'im-framework-profiles':  '4iUIqM2NEyE',
  // Model
  'im-model-system':      'pETs3C7TXfg',
  'im-model-ideas':       'xkKFWWUIj0w',
  'im-model-execution':   'DwqnDQEqojc',
  'im-model-terminus':    'IO1GGU76sIg',
  // Trade Ideas
  'im-trade-bull-flag':   'vRGZE8FqwH4',
  'im-trade-3-drive':     '8yyr5w4R7Pc',
  'im-trade-bpr':         'kua2yOuFbgE',
  // Procedures
  'im-sop-narrative':     'VPAqtntDhNg',
  'im-sop-framework':     '_VC6Ug7RU5I',
  'im-sop-trade-ideas':   'U8_0ImURp1Q',
};

const PDF_URLS: Record<string, string> = {
  'im-narrative-bias':    '/pdfs/narrative-directional-bias.pdf',
  'im-narrative-timing':  '/pdfs/time-window-bias.pdf',
  'im-narrative-confirm': '/pdfs/confirmation-weekly-bias.pdf',
  'im-framework-context':  '/pdfs/context-daily-bias.pdf',
  'im-framework-targets':  '/pdfs/targets-daily-bias.pdf',
  'im-framework-profiles': '/pdfs/profiles-daily-bias.pdf',
  'im-model-system':      '/pdfs/inception-system.pdf',
  'im-model-ideas':       '/pdfs/trade-ideas.pdf',
  'im-model-execution':   '/pdfs/trade-execution.pdf',
  'im-model-terminus':    '/pdfs/trade-terminus.pdf',
  'im-trade-bull-flag':   '/pdfs/pseudo-bull-flags.pdf',
  'im-trade-3-drive':     '/pdfs/three-drive-exhaustion.pdf',
  'im-trade-bpr':         '/pdfs/balanced-price-range.pdf',
  'im-sop-narrative':     '/pdfs/how-to-find-narrative-sop.pdf',
  'im-sop-framework':     '/pdfs/how-to-build-framework-sop.pdf',
  'im-sop-trade-ideas':   '/pdfs/how-to-get-trade-idea-sop.pdf',
};

const NOTES: Record<string, { heading: string; steps: string[]; summary?: string }> = {
  'im-narrative-bias': {
    heading: 'How to find Directional Bias',
    steps: [
      "Identify, follow and respect the Weekly Chart's IOF (Institutional Order Flow)",
      "Identify a ST (Short Term) and LT (Long Term) DOL (Draw on Liquidity) in the direction of Weekly IOF",
      "End and stop the Directional Bias at Terminus (or at the end of TIME-LINE)",
    ],
  },
  'im-narrative-timing': {
    heading: 'How to find Time-Window Bias',
    steps: [
      "Create a Weekly Bias with a Weekly Profile using Directional and Timing Biases",
      "Anticipate Weekly Anchor Point formation to start Day Trading Engagement with Weekly Range Expansion",
      "Expect Weekly Range Expansion to finish at Terminus (DOL) or end of Time-line (PO3)",
    ],
  },
  'im-narrative-confirm': {
    heading: 'How to find Confirmation for the Weekly Bias',
    steps: [
      "Prepare the Weekly Bias before Sunday's Open and update with context every daily close",
      "Anticipate the process for AMD from the Weekly Open for intra-week context",
      "Start Day-trading upon (reversal) or right after confirmation (low-risk) the Weekly AP for intra-week Engagement",
    ],
  },
  'im-framework-context': {
    heading: 'How to find Context for the Daily Bias',
    steps: [
      "Connect the Weekly Range to the Daily Range for 'Context' for logical trading",
      "Daily Bias is the expectation to approach the present day of trading (following Narrative)",
      "Create a stance for the present day by considering the rules of the Day-trading Game",
    ],
  },
  'im-framework-targets': {
    heading: 'How to find Targets for the Daily Bias',
    steps: [
      "Find the Daily Target by considering the intra-week context first and foremost",
      "Ensure the Daily Range imbalance meets the criteria of Narrative and Context",
      "Seek ST & LT DOLs for Daily Range Targets (using a 3 Day look-back from midnight)",
    ],
  },
  'im-framework-profiles': {
    heading: 'How to build Profiles for the Daily Bias',
    steps: [
      "With the Context and framework (from an encapsulated perspective), create an Intra-day profile for market structure",
      "Focus on day-trading engagement upon (reversal) or just after (low-risk) the Daily Anchor Point",
      "Lock in NY Session by studying intra-day filters, and create a session bias in the scope of the daily profile",
    ],
  },
  'im-model-system': {
    heading: 'The Inception Trade System',
    steps: [
      "Follow the Inception System's Principles & SOPs for trading the framework",
      "Tape-read the bellwether chart (15m) and adhere to the TCP Protocol for Trade Execution",
      "After execution, continue to tape read for Trade Management rationale",
      "Seek, Partial and Close Profits at Daily Targets for Trade Terminus",
    ],
  },
  'im-model-ideas': {
    heading: 'Trade Ideas for the New York Session',
    steps: [
      "Using the framework, identify trade ideas based on intra-day market structure (15m bellwether chart)",
      "Align the trade ideas with the NY session Bias to look for trade-setups (reversal/continuation)",
      "Anticipate a 'trigger' to ignite the Trade Idea for Trade Execution (TCP Protocol)",
      "Use the 'trigger sequence' to help avoid false triggers and 'mis-play' the trade idea",
    ],
  },
  'im-model-execution': {
    heading: 'Trade Execution for the New York Session',
    steps: [
      "Scout short-term liquidity to anticipate 'triggers' for trade-setups and execution",
      "Anticipate the formation (reversal) or confirmation (low-risk) of a M15/M5 Swing Point for trade-setups",
      "Use a proper FVG selection for entry with the TCP Protocol and stop placement",
      "Maintain consistency in trade setups by adhering to the Inception Systems Guidelines",
    ],
  },
  'im-model-terminus': {
    heading: 'Trade Terminus for the New York Session',
    steps: [
      "Continue to tape read intra-day dealing ranges, sponsorship and IOF for trade management",
      "Aim to reduce risk after significant MSBs or trade partial to cover costs (scalp trades)",
      "Think through 2nd Mouse Theory before trailing-stop modification for continuations",
      "Aim to off-set distribute at 'terminus-swings' to realize profits and remove risk exposure",
    ],
  },
  'im-trade-bull-flag': {
    heading: 'Pseudo Bull Flags for Reversals',
    steps: [
      "The Trade Idea of a Bull Flag encapsulates the element of consolidation (for its effect of expansion afterwards)",
      "Within the Bull Flag exists multiple reference points for continuation and reversal Trade Setups (depending on SM narrative)",
      "Anticipate 'Pseudo Bull Flags' to occur at key POIs if the anticipated context is a reversal (with 2nd mouse theory)",
      "After initial signatures or confirmations of the 'reversal', look to participate with 'low-risk entries' at 5,4,3,2,1 Minute FVGs",
    ],
  },
  'im-trade-3-drive': {
    heading: '3 Drive Exhaustion for Reversals',
    steps: [
      "The Trade Idea of a 3 Drive Pattern encapsulates the element of both consolidation + reversal (for its effect of expansion afterwards)",
      "Within the 3 Drive Pattern exists multiple reference points for continuation and reversal Trade Setups (depending on SM narrative)",
      "Anticipate '3 Drive Exhaustions' to occur at key POIs if the anticipated context is a reversal (with 2nd mouse theory)",
      "After initial signatures or confirmations of the 'reversal', look to participate with 'low-risk entries' at 5,4,3,2,1 Minute FVGs",
    ],
  },
  'im-trade-bpr': {
    heading: 'Balanced Price Ranges for Reversals',
    steps: [
      "The Trade Idea of a BPR encapsulates the element of a consolidation to re-accumulate positions (for its effect of expansion afterwards)",
      "Within the BPR exists multiple reference points for reversal & low-risk Trade Setups (for the anticipated continuation)",
      "Anticipate BPRs at key POIs or turning points for the anticipated trade idea of a continuation",
      "Expect 'sponsorship' at key POIs or turning points to confirm with 'momentum' for a Buy Program",
      "After initial signatures or confirmations of the 'reversal', look to participate with 'low-risk entries' at 5,4,3,2,1 Minute FVGs",
    ],
  },
  'im-sop-narrative': {
    heading: 'How to Find Narrative — Action Steps',
    steps: [
      "Build a Weekly Bias and Plan with a Top-down Analysis",
      "Navigate Weekly Bias and Plan with a Down-up Analysis (and daily reviews)",
      "Review Daily Opens to help render a Weekly Profile (using the Weekly Bias and Plan)",
    ],
    summary: "Note: 7:25 — meant to say potential Intermediate-term high for the year. 3:42 — Neutral Day (Not Bank Holiday)",
  },
  'im-sop-framework': {
    heading: 'How to Build Framework — Action Steps',
    steps: [
      "Refer to the Weekly Bias (TDA) for Daily Context and operate with a Daily Bias (DUA)",
      "Build Framework and plan for the Daily Range before the open (or during dead-time)",
      "Anticipate a Daily Profile and classify the Daily AP for a New York Session Bias",
    ],
  },
  'im-sop-trade-ideas': {
    heading: 'How to Generate Trade Ideas — Action Steps',
    steps: [
      "Find the Weekly Directional Bias",
      "Confirm a Weekly and/or Daily Framework",
      "Build Daily Context and a Daily Profile",
      "Establish a New York Session Bias",
      "Generate a Trade Idea and TCP Protocol",
    ],
  },
};

type Lesson = { id: string; title: string; completed: boolean; };
type Module = { title: string; lessons: Lesson[]; };
type CourseData = { id: string; title: string; modules: Module[]; };

const COURSES_DATA: Record<string, CourseData> = {
  'inception-model': {
    id: 'inception-model',
    title: 'The Inception Model',
    modules: [
      {
        title: 'DISCLAIMER',
        lessons: [
          { id: 'im-disclaimer', title: 'Disclaimer', completed: true },
        ]
      },
      {
        title: 'Narrative (Weekly Range)',
        lessons: [
          { id: 'im-narrative-bias',    title: "Price-directional Bias", completed: true },
          { id: 'im-narrative-timing',  title: "Time-window Bias", completed: true },
          { id: 'im-narrative-confirm', title: "Confirmation for the Weekly Bias", completed: true },
        ]
      },
      {
        title: 'Framework (Daily Range)',
        lessons: [
          { id: 'im-framework-context',  title: "Context for the Daily Bias", completed: true },
          { id: 'im-framework-targets',  title: "Targets for the Daily Bias", completed: true },
          { id: 'im-framework-profiles', title: "Profiles for the Daily Bias", completed: true },
        ]
      },
      {
        title: 'Model (Session Ranges)',
        lessons: [
          { id: 'im-model-system',    title: "The Inception Trade System", completed: true },
          { id: 'im-model-ideas',     title: "Trade Ideas for the New York Session", completed: true },
          { id: 'im-model-execution', title: "Trade Execution for the New York Session", completed: true },
          { id: 'im-model-terminus',  title: "Trade Terminus for the New York Session", completed: true },
        ]
      },
      {
        title: 'Trade Ideas (Supplementary)',
        lessons: [
          { id: 'im-trade-bull-flag', title: "Pseudo Bull Flags for Reversals", completed: true },
          { id: 'im-trade-3-drive',   title: "3 Drive Exhaustion for Reversals", completed: true },
          { id: 'im-trade-bpr',       title: "Balanced Price Ranges for Reversals", completed: true },
        ]
      },
      {
        title: 'Procedures (Supplementary)',
        lessons: [
          { id: 'im-sop-narrative',   title: "How to Find Narrative", completed: true },
          { id: 'im-sop-framework',   title: "How to Build Framework", completed: true },
          { id: 'im-sop-trade-ideas', title: "How to Generate Trade Ideas", completed: true },
        ]
      },
    ]
  },
  'market-structure': {
    id: 'market-structure',
    title: 'Market Structure (Basics)',
    modules: [
      {
        title: 'Introduction',
        lessons: [
          { id: 'ms-intro', title: 'Introduction to Market Structure', completed: false },
        ]
      },
    ]
  },
  'frameworks-amplified': {
    id: 'frameworks-amplified',
    title: 'Frameworks Amplified',
    modules: [
      {
        title: 'Introduction',
        lessons: [
          { id: 'fa-intro', title: 'Introduction', completed: false },
        ]
      },
    ]
  },
};

export function VaultCourseLessons() {
  const { courseId } = useParams();
  const course = courseId ? COURSES_DATA[courseId] : null;
  const [activeLessonId, setActiveLessonId] = useState<string>('');
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (course) {
      if (course.modules.length > 0 && course.modules[0].lessons.length > 0) {
        setActiveLessonId(course.modules[0].lessons[0].id);
      }
      const initialExpanded: Record<string, boolean> = {};
      course.modules.forEach((_, idx) => { initialExpanded[idx] = true; });
      setExpandedModules(initialExpanded);
    }
  }, [course]);

  if (!course) {
    return <VaultLayout><div>Course not found</div></VaultLayout>;
  }

  const activeLesson = course.modules.flatMap(m => m.lessons).find(l => l.id === activeLessonId);
  const toggleModule = (idx: number) => {
    setExpandedModules(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const videoId = activeLessonId ? VIDEO_URLS[activeLessonId] : null;
  const pdfUrl  = activeLessonId ? PDF_URLS[activeLessonId]  : null;
  const notes   = activeLessonId ? NOTES[activeLessonId]     : null;

  return (
    <VaultLayout>
      <div className="flex flex-col lg:flex-row gap-8 items-start">

        {/* SIDEBAR */}
        <div className="w-full lg:w-80 flex-shrink-0 bg-bg-card border border-border rounded-lg overflow-hidden">
          <div className="p-4 border-b border-border bg-bg-elevated">
            <Link to="/vault" className="flex items-center gap-2 text-xs text-text-secondary hover:text-gold mb-3">
              <ArrowLeft size={12} /> Back to Classroom
            </Link>
            <h2 className="font-serif font-bold text-text-primary text-lg leading-tight mb-2">
              {course.title}
            </h2>
            <div className="w-full bg-bg h-1.5 rounded-full overflow-hidden border border-border">
              <div className="bg-[#00A86B] h-full w-full"></div>
            </div>
            <div className="text-[10px] text-[#00A86B] font-mono mt-1 font-bold">100% COMPLETE</div>
          </div>

          <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
            {course.modules.map((module, idx) => (
              <div key={idx} className="border-b border-border last:border-0">
                <button
                  onClick={() => toggleModule(idx)}
                  className="w-full flex items-center justify-between p-4 bg-bg-card hover:bg-bg-elevated transition-colors text-left"
                >
                  <span className="font-bold text-sm text-text-primary">{module.title}</span>
                  {expandedModules[idx] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {expandedModules[idx] && (
                  <div className="bg-bg">
                    {module.lessons.map(lesson => (
                      <button
                        key={lesson.id}
                        onClick={() => setActiveLessonId(lesson.id)}
                        className={`w-full flex items-start gap-3 p-3 pl-4 text-left transition-colors border-l-2 ${
                          activeLessonId === lesson.id
                            ? 'bg-bg-elevated border-gold'
                            : 'border-transparent hover:bg-bg-elevated'
                        }`}
                      >
                        <div className="mt-0.5 flex-shrink-0">
                          {lesson.completed
                            ? <CheckCircle size={16} className="text-[#00A86B]" fill="currentColor" stroke="black" />
                            : <Circle size={16} className="text-text-muted" />}
                        </div>
                        <span className={`text-sm ${activeLessonId === lesson.id ? 'text-gold font-medium' : 'text-text-secondary'}`}>
                          {lesson.title}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* LESSON PLAYER */}
        <div className="flex-grow w-full">
          {activeLesson && (
            <div className="bg-bg-card border border-border rounded-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle size={24} className="text-[#00A86B]" fill="currentColor" stroke="black" />
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-text-primary">
                  {activeLesson.title}
                </h1>
              </div>

              {videoId ? (
                <div className="w-full aspect-video bg-black rounded-lg border border-border mb-8 overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={activeLesson.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <div className="w-full aspect-video bg-black rounded-lg border border-border mb-8 flex items-center justify-center">
                  <p className="text-text-muted font-mono text-sm">No video available for this lesson</p>
                </div>
              )}

              {notes && (
                <div className="mb-8">
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-4">Rundown:</h3>
                  <div className="bg-bg-elevated border border-border rounded p-6 font-mono text-sm text-text-secondary leading-relaxed">
                    <h4 className="text-text-primary font-bold mb-3">{notes.heading}</h4>
                    <ol className="list-decimal pl-5 space-y-2 mb-4">
                      {notes.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                    {notes.summary && (
                      <p className="text-text-muted border-t border-border pt-4 mt-2 italic">{notes.summary}</p>
                    )}
                  </div>
                </div>
              )}

              {pdfUrl && (
                <div className="mb-8">
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-4">Resources</h3>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-bg-elevated border border-border rounded hover:border-gold transition-colors group"
                  >
                    <div className="w-8 h-8 bg-[#FF4433]/10 rounded flex items-center justify-center text-[#FF4433]">
                      <FileText size={16} />
                    </div>
                    <span className="text-sm text-text-primary group-hover:text-gold transition-colors flex-grow">
                      Download PDF Notes
                    </span>
                    <Download size={14} className="text-text-muted" />
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </VaultLayout>
  );
}
