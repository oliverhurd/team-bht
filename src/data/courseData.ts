export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  videoUrl: string; // Placeholder for embed
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
      videoUrl: '',
      rundownTitle: 'Important Notice',
      rundownSteps: [
      'Trading involves substantial risk of loss.',
      'Past performance is not indicative of future results.',
      'This content is for educational purposes only.'],

      resourceName: 'Risk Disclosure PDF'
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
      videoUrl: '',
      rundownTitle: 'How to find Directional Bias',
      rundownSteps: [
      "Identify, follow and respect the Weekly Chart's IOF (Institutional Order Flow)",
      'Identify a ST (Short Term) and LT (Long Term) DOL (Draw on Liquidity) in the direction of Weekly IOF',
      'End and stop the Directional Bias at Terminus (or at the end of TIME-LINE)'],

      resourceName: 'Download PDF Notes'
    },
    {
      id: 'time-window-bias',
      title: 'Time-window Bias',
      duration: '18:45',
      completed: true,
      videoUrl: '',
      rundownTitle: 'Timing the Market',
      rundownSteps: [
      'Define the active trading window for your session',
      'Wait for the Killzone to engage',
      'Avoid trading during low-volume periods'],

      resourceName: 'Time Window Cheat Sheet'
    },
    {
      id: 'confirmation-weekly',
      title: 'Confirmation for the Weekly Bias',
      duration: '22:10',
      completed: true,
      videoUrl: '',
      rundownTitle: 'Confirming the Trend',
      rundownSteps: [
      'Check daily timeframe for alignment',
      'Look for displacement in the direction of bias',
      'Wait for a retracement into a discount array'],

      resourceName: 'Weekly Bias Checklist'
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
      videoUrl: '',
      rundownTitle: 'How to find Context for the Daily Bias',
      rundownSteps: [
      "Connect the Weekly Range to the Daily Range for 'Context' for logical trading",
      'Daily Bias is the expectation to approach the present day of trading (following Narrative)',
      'Create a stance for the present day by considering the rules of the Day-trading Game'],

      resourceName: 'Daily Context Template'
    },
    {
      id: 'targets-daily',
      title: 'Targets for the Daily Bias',
      duration: '12:15',
      completed: true,
      videoUrl: '',
      rundownTitle: 'Identifying Targets',
      rundownSteps: [
      'Locate the nearest liquidity pools',
      'Identify imbalances that need to be filled',
      'Project potential high/low for the day'],

      resourceName: 'Target Identification Guide'
    },
    {
      id: 'profiles-daily',
      title: 'Profiles for the Daily Bias',
      duration: '20:05',
      completed: true,
      videoUrl: '',
      rundownTitle: 'Market Profiles',
      rundownSteps: [
      'London Swing to New York Continuation',
      'New York Reversal Profile',
      'Consolidation Day Profile'],

      resourceName: 'Market Profiles PDF'
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
      videoUrl: '',
      rundownTitle: 'System Rules',
      rundownSteps: [
      'Wait for price to reach a Key Level',
      'Look for a shift in market structure on lower timeframe',
      'Enter on the retracement to the OTE level'],

      resourceName: 'Trade System Rules'
    },
    {
      id: 'trade-ideas-ny',
      title: 'Trade Ideas for the New York Session',
      duration: '15:55',
      completed: false,
      videoUrl: '',
      rundownTitle: 'Trade Ideas for the New York Session',
      rundownSteps: [
      'Using the framework, identify trade ideas based on intra-day market structure (15m bellwether chart)',
      'Align the trade ideas with the NY session Bias to look for trade-setups (reversal/continuation)',
      "Anticipate a 'trigger' to ignite the Trade Idea for Trade Execution (TCP Protocol)",
      "Use the 'trigger sequence' to help avoid false triggers and 'mis-play' the trade idea"],

      resourceName: 'NY Session Notes'
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