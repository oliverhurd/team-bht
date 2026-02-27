export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  videoUrl: string; // Placeholder for embed
  resourceUrl?: string; // path to PDF in public/pdfs
  rundownTitle: string;
  rundownSteps: string[];
  resourceName: string;
}

export interface Section {
  id: string;
  title: string;
  groupLabel: string; // "DISCLAIMER" | "WEEKLY NARRATIVE" | "DAILY FRAMEWORK" | "SESSION EXECUTION"
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  progress: number;
  sections: Section[];
}

export const COURSES: Course[] = [
{
  id: 'market-structure',
  title: 'Market Structure (Basics)',
  description: 'The starting point for Market Structure',
  imageUrl: "/marketstructureimage.jpg",

  progress: 100,
  sections: []
},
{
  id: 'inception-model',
  title: 'The Inception Model',
  description: 'The starting point for the Aspiring Trader',
  imageUrl: "/inceptionmodelimage.jpg",

  progress: 35,
  sections: [
  {
    id: 'disclaimer-section',
    title: 'DISCLAIMER',
    groupLabel: 'DISCLAIMER',
    lessons: [
    {
      id: 'disclaimer',
      title: 'Disclaimer',
      duration: '2:15',
      completed: true,
      videoUrl: '', // disclaimer has no video
      rundownTitle: 'Important Notice',
      rundownSteps: [
      'Trading involves substantial risk of loss.',
      'Past performance is not indicative of future results.',
      'This content is for educational purposes only.'],

      resourceName: 'Risk Disclosure PDF'
      ,resourceUrl: '/pdfs/Course Curriculum - The Inception Model.pdf'
    }]

  },
  {
    id: 'narrative-section',
    title: 'Narrative (Weekly Range)',
    groupLabel: 'WEEKLY NARRATIVE',
    lessons: [
    {
      id: 'price-directional-bias',
      title: 'Price-directional Bias',
      duration: '14:20',
      completed: true,
      videoUrl: 'https://youtu.be/Wgds6ZWIqSU',
      rundownTitle: 'How to find Directional Bias',
      rundownSteps: [
      "Identify, follow and respect the Weekly Chart's IOF (Institutional Order Flow)",
      'Identify a ST (Short Term) and LT (Long Term) DOL (Draw on Liquidity) in the direction of Weekly IOF',
      'End and stop the Directional Bias at Terminus (or at the end of TIME-LINE)'],

      resourceName: 'Download PDF Notes'
      ,resourceUrl: '/pdfs/how-to-find-narrative-sop.pdf'
    },
    {
      id: 'time-window-bias',
      title: 'Time-window Bias',
      duration: '18:45',
      completed: true,
      videoUrl: 'https://youtu.be/uK-Pw04teEc',
      rundownTitle: 'Timing the Market',
      rundownSteps: [
      'Define the active trading window for your session',
      'Wait for the Killzone to engage',
      'Avoid trading during low-volume periods'],

      resourceName: 'Time Window Cheat Sheet'
      ,resourceUrl: '/pdfs/time-window-bias.pdf'
    },
    {
      id: 'confirmation-weekly',
      title: 'Confirmation for the Weekly Bias',
      duration: '22:10',
      completed: true,
      videoUrl: 'https://youtu.be/A-X7gBaJsAI',
      rundownTitle: 'Confirming the Trend',
      rundownSteps: [
      'Check daily timeframe for alignment',
      'Look for displacement in the direction of bias',
      'Wait for a retracement into a discount array'],

      resourceName: 'Weekly Bias Checklist'
      ,resourceUrl: '/pdfs/confirmation-weekly-bias.pdf'
    }]

  },
  {
    id: 'framework-section',
    title: 'Framework (Daily Range)',
    groupLabel: 'DAILY FRAMEWORK',
    lessons: [
    {
      id: 'context-daily',
      title: 'Context for the Daily Bias',
      duration: '16:30',
      completed: true,
      videoUrl: 'https://youtu.be/kQUoobrsq8U',
      rundownTitle: 'How to find Context for the Daily Bias',
      rundownSteps: [
      "Connect the Weekly Range to the Daily Range for 'Context' for logical trading",
      'Daily Bias is the expectation to approach the present day of trading (following Narrative)',
      'Create a stance for the present day by considering the rules of the Day-trading Game'],

      resourceName: 'Daily Context Template'
      ,resourceUrl: '/pdfs/context-daily-bias.pdf'
    },
    {
      id: 'targets-daily',
      title: 'Targets for the Daily Bias',
      duration: '12:15',
      completed: true,
      videoUrl: 'https://youtu.be/NEP-sYqAmBk',
      rundownTitle: 'Identifying Targets',
      rundownSteps: [
      'Locate the nearest liquidity pools',
      'Identify imbalances that need to be filled',
      'Project potential high/low for the day'],

      resourceName: 'Target Identification Guide'
      ,resourceUrl: '/pdfs/targets-daily-bias.pdf'
    },
    {
      id: 'profiles-daily',
      title: 'Profiles for the Daily Bias',
      duration: '20:05',
      completed: true,
      videoUrl: 'https://youtu.be/4iUIqM2NEyE',
      rundownTitle: 'Market Profiles',
      rundownSteps: [
      'London Swing to New York Continuation',
      'New York Reversal Profile',
      'Consolidation Day Profile'],

      resourceName: 'Market Profiles PDF'
      ,resourceUrl: '/pdfs/profiles-daily-bias.pdf'
    }]

  },
  {
    id: 'model-section',
    title: 'Model (Session Ranges)',
    groupLabel: 'SESSION EXECUTION',
    lessons: [
    {
      id: 'inception-trade-system',
      title: 'The Inception Trade System',
      duration: '25:40',
      completed: true,
      videoUrl: 'https://youtu.be/pETs3C7TXfg',
      rundownTitle: 'System Rules',
      rundownSteps: [
      'Wait for price to reach a Key Level',
      'Look for a shift in market structure on lower timeframe',
      'Enter on the retracement to the OTE level'],

      resourceName: 'Trade System Rules'
      ,resourceUrl: '/pdfs/inception-system.pdf'
    },
    {
      id: 'trade-ideas-ny',
      title: 'Trade Ideas for the New York Session',
      duration: '15:55',
      completed: false,
      videoUrl: 'https://youtu.be/xkKFWWUIj0w',
      rundownTitle: 'Trade Ideas for the New York Session',
      rundownSteps: [
      'Using the framework, identify trade ideas based on intra-day market structure (15m bellwether chart)',
      'Align the trade ideas with the NY session Bias to look for trade-setups (reversal/continuation)',
      "Anticipate a 'trigger' to ignite the Trade Idea for Trade Execution (TCP Protocol)",
      "Use the 'trigger sequence' to help avoid false triggers and 'mis-play' the trade idea"],

      resourceName: 'NY Session Notes'
      ,resourceUrl: '/pdfs/trade-ideas.pdf'
    },
    {
      id: 'trade-execution',
      title: 'Trade Execution for the New York Session',
      duration: '??:??',
      completed: false,
      videoUrl: 'https://youtu.be/DwqnDQEqojc',
      rundownTitle: 'Trade Execution for the New York Session',
      rundownSteps: [
        'Scout short-term liquidity to anticipate triggers for trade-setups and execution',
        'Anticipate formation or confirmation of a M15/M5 Swing Point for trade-setups',
        'Use proper FVG selection for entry with the TCP Protocol and stop placement',
        'Maintain consistency by adhering to the Inception Systems Guidelines'],
      resourceName: 'Trade Execution Notes',
      resourceUrl: '/pdfs/trade-execution.pdf'
    },
    {
      id: 'trade-terminus',
      title: 'Trade Terminus for the New York Session',
      duration: '??:??',
      completed: false,
      videoUrl: 'https://youtu.be/IO1GGU76sIg',
      rundownTitle: 'Trade Terminus for the New York Session',
      rundownSteps: [
        'Continue to tape read intra-day dealing ranges, sponsorship and IOF for trade management',
        'Aim to reduce risk after significant MSBs or trade partial to cover costs',
        'Think through 2nd Mouse Theory before trailing-stop modification for continuations',
        'Aim to off-set distribute at terminus-swings to realize profits and remove risk exposure'],
      resourceName: 'Trade Terminus Notes',
      resourceUrl: '/pdfs/trade-terminus.pdf'
    }]

  },
  {
    id: 'supplementary-section',
    title: 'Supplementary Materials',
    groupLabel: 'SUPPLEMENTARY',
    lessons: [
    {
      id: 'pseudo-bull-flags',
      title: 'Pseudo Bull Flags for Reversals',
      duration: '??:??',
      completed: false,
      videoUrl: 'https://youtu.be/vRGZE8FqwH4',
      rundownTitle: 'Pseudo Bull Flags for Reversals',
      rundownSteps: [
        'The Trade Idea of a Bull Flag encapsulates the element of consolidation for expansion',
        'Within the Bull Flag exists multiple reference points for continuation and reversal setups',
        'Anticipate Pseudo Bull Flags to occur at key POIs if the context is a reversal',
        'After confirmations of reversal, look to participate with low-risk entries at 5,4,3,2,1 Minute FVGs'],
      resourceName: 'Pseudo Bull Flags PDF',
      resourceUrl: '/pdfs/pseudo-bull-flags.pdf'
    },
    {
      id: '3-drive-exhaustion',
      title: '3 Drive Exhaustion for Reversals',
      duration: '??:??',
      completed: false,
      videoUrl: 'https://youtu.be/8yyr5w4R7Pc',
      rundownTitle: '3 Drive Exhaustion for Reversals',
      rundownSteps: [
        'The Trade Idea of a 3 Drive Pattern encapsulates consolidation + reversal',
        'Within the 3 Drive Pattern exists multiple reference points for continuation and reversal setups',
        'Anticipate 3 Drive Exhaustions to occur at key POIs for reversals',
        'After confirmations of reversal, look to participate with low-risk entries at 5,4,3,2,1 Minute FVGs'],
      resourceName: '3 Drive Exhaustion PDF',
      resourceUrl: '/pdfs/three-drive-exhaustion.pdf'
    },
    {
      id: 'balanced-price-ranges',
      title: 'Balanced Price Ranges for Reversals',
      duration: '??:??',
      completed: false,
      videoUrl: 'https://youtu.be/kua2yOuFbgE',
      rundownTitle: 'Balanced Price Ranges for Reversals',
      rundownSteps: [
        'The Trade Idea of a BPR encapsulates consolidation to re-accumulate positions',
        'Within the BPR exists multiple reference points for reversal and low-risk setups',
        'Anticipate BPRs at key POIs or turning points for the anticipated trade idea',
        'After confirmations of reversal, look to participate with low-risk entries at 5,4,3,2,1 Minute FVGs'],
      resourceName: 'Balanced Price Range PDF',
      resourceUrl: '/pdfs/balanced-price-range.pdf'
    },
    {
      id: 'how-to-find-narrative',
      title: 'How to Find Narrative',
      duration: '??:??',
      completed: false,
      videoUrl: 'https://youtu.be/VPAqtntDhNg',
      rundownTitle: 'Procedures: How to Find Narrative',
      rundownSteps: [
        'Build a Weekly Bias and Plan with a Top-down Analysis',
        'Navigate Weekly Bias and Plan with a Down-up Analysis (and daily reviews)',
        'Review Daily Opens to help render a Weekly Profile using the Weekly Bias and Plan'],
      resourceName: 'How to Find Narrative SOP',
      resourceUrl: '/pdfs/how-to-find-narrative-sop.pdf'
    },
    {
      id: 'how-to-build-framework',
      title: 'How to Build Framework',
      duration: '??:??',
      completed: false,
      videoUrl: 'https://youtu.be/_VC6Ug7RU5I',
      rundownTitle: 'Procedures: How to Build Framework',
      rundownSteps: [
        'Refer to the Weekly Bias for Daily Context and operate with a Daily Bias',
        'Build Framework and plan for the Daily Range before the open or during dead-time',
        'Anticipate a Daily Profile and classify the Daily AP for a New York Session Bias'],
      resourceName: 'How to Build Framework SOP',
      resourceUrl: '/pdfs/how-to-build-framework-sop.pdf'
    },
    {
      id: 'how-to-generate-trade-ideas',
      title: 'How to Generate Trade Ideas',
      duration: '??:??',
      completed: false,
      videoUrl: 'https://youtu.be/U8_0ImURp1Q',
      rundownTitle: 'Procedures: How to Generate Trade Ideas',
      rundownSteps: [
        'Find the Weekly Directional Bias',
        'Confirm a Weekly & or Daily Framework',
        'Build Daily Context & a Daily Profile',
        'Establish a New York Session Bias',
        'Generate a Trade Idea & TCP Protocol'],
      resourceName: 'How to Generate Trade Ideas SOP',
      resourceUrl: '/pdfs/how-to-get-trade-idea-sop.pdf'
    }]

  }]

},
{
  id: 'frameworks-amplified',
  title: 'Frameworks Amplified',
  description: 'Greater details into trading with framework',
  imageUrl: "/frameworksampimage.jpg",

  progress: 100,
  sections: []
}];