import React, { useState } from 'react';
import { Sparkles, Play, Compass, CheckCircle2, Award, HeartPulse, HelpCircle, Code } from 'lucide-react';

interface RecommendationMap {
  emotion: string;
  emoji: string;
  pathway: string;
  icon: React.ReactNode;
  bgGrad: string;
  textColor: string;
  syllabusAction: string;
  studyQuote: string;
  simulatedWidget: React.ReactNode;
}

export default function RecommendationEngine() {
  const [selectedEmotion, setSelectedEmotion] = useState<string>('Happy');

  // Multi-choice simulated mapping engine
  const mappings: RecommendationMap[] = [
    {
      emotion: 'Happy',
      emoji: '😊',
      pathway: 'Advanced Learning Module',
      icon: <Award className="w-5 h-5 text-emerald-500" />,
      bgGrad: 'from-emerald-500/15 via-emerald-500/5 to-transparent border-emerald-500/30',
      textColor: 'text-emerald-500',
      syllabusAction: 'Trigger core syllabus bypass. Deliver premium algorithm challenges, open-ended sandboxes, and speed optimization criteria.',
      studyQuote: '"Focus on extending current strengths. You possess the mental bandwidth for deep-dive technical structures."',
      simulatedWidget: (
        <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30 text-left space-y-3 font-mono text-xs">
          <div className="flex justify-between text-[10px] text-slate-500 border-b border-slate-800 pb-1.5">
            <span>MODULE: ADVANCED_ALGORITHMS</span>
            <span className="text-emerald-500 font-bold">BYPASS_ACTIVE</span>
          </div>
          <div className="space-y-1">
            <p className="text-indigo-400">class RedBlackTree &lt; Node {`{`}</p>
            <p className="pl-4">def balance_insert(self, node):</p>
            <p className="pl-8 text-emerald-400"># TODO: Implement rotational pivots</p>
            <p className="pl-8">pass</p>
            <p className="text-indigo-400">{`}`}</p>
          </div>
          <button className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg font-sans text-xs transition-colors">
            Attempt Speed Challenge
          </button>
        </div>
      )
    },
    {
      emotion: 'Sad',
      emoji: '😢',
      pathway: 'Motivational Videos & Warmups',
      icon: <Play className="w-5 h-5 text-blue-500" />,
      bgGrad: 'from-blue-500/15 via-blue-500/5 to-transparent border-blue-500/30',
      textColor: 'text-blue-500',
      syllabusAction: 'Provide mental comfort scaffolds. Present lightweight tutorials, high-quality audio reviews, and easily parsed summaries to build momentum.',
      studyQuote: '"Progress consists of small, steady iterations. Take your time; the framework is within reach."',
      simulatedWidget: (
        <div className="bg-slate-900 rounded-xl overflow-hidden border border-blue-500/30 p-4 text-left space-y-3">
          <span className="text-[9px] font-mono text-blue-400 uppercase font-semibold">Recommended Visual Capsule</span>
          <div className="aspect-video bg-slate-950 rounded-lg flex items-center justify-center relative group">
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center cursor-pointer shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </div>
            <span className="absolute bottom-2 left-2 bg-slate-950/80 px-2 py-0.5 rounded text-[8px] font-mono text-slate-400">Duration: 4m 12s</span>
          </div>
          <div className="text-[11px] text-slate-300 font-medium">Understanding CSS Grid In Under 5 Minutes</div>
        </div>
      )
    },
    {
      emotion: 'Fear',
      emoji: '😨',
      pathway: 'Beginner Practice Sandbox',
      icon: <HelpCircle className="w-5 h-5 text-purple-500" />,
      bgGrad: 'from-purple-500/15 via-purple-500/5 to-transparent border-purple-500/30',
      textColor: 'text-purple-500',
      syllabusAction: 'Scale down immediate challenges. Redirect to simple step-by-step sandboxes, syntax checklists, and immediate tooltip hint sheets.',
      studyQuote: '"Every master was once an anxious beginner. Let’s break this larger concept down into smaller, clear files."',
      simulatedWidget: (
        <div className="bg-slate-950 p-4 rounded-xl border border-purple-500/30 text-left space-y-3">
          <div className="flex items-center justify-between text-[10px] font-mono text-purple-400">
            <span>SCAFFOLD: GUIDED_TIPS</span>
            <span>Tip 1 of 3</span>
          </div>
          <div className="p-3 bg-slate-900 rounded border border-purple-500/20 text-xs text-slate-300 space-y-1.5 font-light">
            <p className="font-bold text-white">What is a Promise?</p>
            <p>Think of it as a restaurant buzzer. It promises to buzz when your food (data) is ready, so you don't have to wait in line.</p>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 py-1.5 bg-purple-500 hover:bg-purple-600 text-white text-[11px] font-semibold rounded-lg transition-colors">Show Answer</button>
            <button className="flex-1 py-1.5 border border-slate-700 hover:border-slate-600 text-slate-300 text-[11px] font-medium rounded-lg transition-colors">Next Tip</button>
          </div>
        </div>
      )
    },
    {
      emotion: 'Angry',
      emoji: '😡',
      pathway: 'Guided Relaxation & Breathing',
      icon: <HeartPulse className="w-5 h-5 text-rose-500" />,
      bgGrad: 'from-rose-500/15 via-rose-500/5 to-transparent border-rose-500/30',
      textColor: 'text-rose-500',
      syllabusAction: 'Trigger immediate cognitive break. Pause the training, mute sound alerts, and render an interactive, slow breathing visualizer to reset stress.',
      studyQuote: '"A buggy console can feel incredibly hostile. Take an active breath; you are larger than this compiler error."',
      simulatedWidget: (
        <div className="bg-slate-950 p-5 rounded-xl border border-rose-500/30 text-center space-y-4">
          <span className="text-[9px] font-mono text-rose-400 uppercase font-semibold">Mindfulness Break</span>
          
          {/* Breathing expanding circle animation */}
          <div className="flex justify-center py-2">
            <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/40 flex items-center justify-center animate-ping">
              <div className="w-8 h-8 rounded-full bg-rose-500/30 flex items-center justify-center">
                🧘
              </div>
            </div>
          </div>
          <div className="text-[11px] text-slate-400 font-mono">Breathe In... Breathe Out... (10s count)</div>
          <button className="w-full py-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-lg text-xs transition-colors">
            Start 1-Min Relaxation
          </button>
        </div>
      )
    },
    {
      emotion: 'Neutral',
      emoji: '😐',
      pathway: 'Standard Core Syllabus',
      icon: <Code className="w-5 h-5 text-slate-400" />,
      bgGrad: 'from-slate-500/15 via-slate-500/5 to-transparent border-slate-500/30',
      textColor: 'text-slate-400',
      syllabusAction: 'No deviations triggered. Proceed smoothly with standard syllabus flow, core concept checklists, and moderate programming assignments.',
      studyQuote: '"The optimal flow state is calm and objective. Your retention is currently highly stable and primed for code."',
      simulatedWidget: (
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-4 text-left space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono text-slate-500 uppercase">Core Syllabus Progression</span>
            <span className="text-[10px] text-indigo-400 font-semibold font-mono">Unit 4 of 10</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs text-slate-300">
              <div className="w-4 h-4 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[8px] font-bold">✓</div>
              <span>4.1 Intro to Database Indices</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-300">
              <div className="w-4 h-4 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center text-[8px] font-bold">●</div>
              <span className="font-semibold text-white">4.2 Creating Custom B-Trees</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-500">
              <div className="w-4 h-4 rounded-full bg-slate-800 text-[8px] font-bold flex items-center justify-center">○</div>
              <span>4.3 Analyzing Search Complexity</span>
            </div>
          </div>
        </div>
      )
    },
    {
      emotion: 'Surprise',
      emoji: '😲',
      pathway: 'Edge Topic Exploration',
      icon: <Compass className="w-5 h-5 text-amber-500" />,
      bgGrad: 'from-amber-500/15 via-amber-500/5 to-transparent border-amber-500/30',
      textColor: 'text-amber-500',
      syllabusAction: 'Harness high engagement signals. Feed curiosity loops immediately with alternative edge cases, quirky features, or advanced speed tutorials.',
      studyQuote: '"Curiosity is the engine of discovery. Let’s investigate how this compiler interacts directly with lower hardware levels."',
      simulatedWidget: (
        <div className="bg-slate-950 p-4 rounded-xl border border-amber-500/30 text-left space-y-3 font-mono text-xs">
          <span className="text-[9px] font-mono text-amber-400 uppercase font-semibold">Deep Edge Trivia</span>
          <div className="p-3 bg-slate-900 rounded border border-amber-500/20 text-[11px] text-slate-300 space-y-2">
            <p className="text-white font-bold">Why does [] == ![] in JS?</p>
            <p className="text-slate-400 font-light text-[10px]">Because ![] coerces to false, leading to [] == false, which subsequently coerces [] to a primitive string "", leaving "" == false, resulting in true!</p>
          </div>
          <button className="w-full py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg font-sans text-[11px] transition-colors">
            Explore JavaScript Quirks
          </button>
        </div>
      )
    },
    {
      emotion: 'Disgust',
      emoji: '🤢',
      pathway: 'Positive Reinforcement & Gamification',
      icon: <Sparkles className="w-5 h-5 text-lime-500" />,
      bgGrad: 'from-lime-500/15 via-lime-500/5 to-transparent border-lime-500/30',
      textColor: 'text-lime-500',
      syllabusAction: 'Dispel dissatisfaction. Switch the dashboard visual presentation themes, grant instant motivation badges, or present trivia blocks.',
      studyQuote: '"Boring layouts can sap focus quickly. Let’s swap presentation cards and tackle a quick interactive quiz instead!"',
      simulatedWidget: (
        <div className="bg-slate-950 p-4 rounded-xl border border-lime-500/30 text-left space-y-3">
          <div className="flex items-center justify-between text-[10px] font-mono text-lime-400">
            <span>GAMIFIED TRIVIA</span>
            <span className="text-lime-400 font-bold">+150 XP</span>
          </div>
          <p className="text-xs text-slate-200">Which binary search tree keeps itself balanced automatically through colors?</p>
          <div className="space-y-1.5">
            <button className="w-full text-left p-2 rounded bg-slate-900 hover:bg-slate-800 text-[11px] text-slate-300 border border-slate-800 hover:border-lime-500/40 transition-all font-light">A) Binary Heap Tree</button>
            <button className="w-full text-left p-2 rounded bg-slate-900 hover:bg-slate-800 text-[11px] text-slate-300 border border-slate-800 hover:border-lime-500/40 transition-all font-light">B) Red-Black Tree</button>
            <button className="w-full text-left p-2 rounded bg-slate-900 hover:bg-slate-800 text-[11px] text-slate-300 border border-slate-800 hover:border-lime-500/40 transition-all font-light">C) Huffman Encoding Tree</button>
          </div>
        </div>
      )
    }
  ];

  const activeMap = mappings.find(m => m.emotion === selectedEmotion) || mappings[0];

  return (
    <section id="recommendations-section" className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 font-bold uppercase">Empathetic adaptation</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            AI Recommendation Engine Mappings
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            Each classified emotional state acts as a trigger inside our pedagogical rules engine. Click the cards below to see how our engine transforms courses for students.
          </p>
        </div>

        {/* Mappings Dashboard split view */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Left panel - Selection list */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {mappings.map((map) => (
              <button
                id={`engine-emotion-tab-${map.emotion}`}
                key={map.emotion}
                onClick={() => setSelectedEmotion(map.emotion)}
                className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 cursor-pointer ${
                  selectedEmotion === map.emotion
                    ? 'bg-white dark:bg-slate-900 border-blue-500 shadow-xl shadow-blue-500/5 scale-[1.02] ring-2 ring-blue-500/25'
                    : 'bg-white/40 dark:bg-slate-900/40 border-slate-200/50 dark:border-slate-800/40 hover:bg-white dark:hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <div className="text-3xl filter drop-shadow">
                    {map.emoji}
                  </div>
                  <div>
                    <h4 className="font-display text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {map.emotion} State
                    </h4>
                    <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                      {map.pathway}
                    </span>
                  </div>
                </div>
                <div className={`p-2 rounded-xl bg-slate-100 dark:bg-slate-950 text-slate-500 ${selectedEmotion === map.emotion ? 'bg-blue-50 dark:bg-slate-800 text-blue-500' : ''}`}>
                  {map.icon}
                </div>
              </button>
            ))}
          </div>

          {/* Right panel - Live Preview Widget simulation */}
          <div className="lg:col-span-7 bg-white/70 dark:bg-slate-950/65 backdrop-blur-md p-8 rounded-3xl border border-white/60 dark:border-slate-850 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Ambient background glow mapped to active color */}
            <div className={`absolute inset-0 bg-gradient-to-br ${activeMap.bgGrad} opacity-30 -z-10`} />

            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/50 dark:border-slate-800/40">
                <div className="flex items-center space-x-3">
                  <div className="text-4xl">{activeMap.emoji}</div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">Active State Mapping</span>
                    <h3 className="font-display text-lg font-extrabold text-slate-950 dark:text-white leading-none">
                      {activeMap.emotion} ➔ {activeMap.pathway}
                    </h3>
                  </div>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-blue-600 font-bold uppercase bg-blue-100 dark:bg-blue-950/40 px-2.5 py-1 rounded border border-blue-500/20">Active Node</span>
              </div>

              {/* Action Rules */}
              <div className="space-y-2 text-left">
                <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase block font-semibold">Rules Engine Execution Script:</span>
                <p className="text-slate-700 dark:text-slate-200 text-xs sm:text-sm leading-relaxed font-light">
                  {activeMap.syllabusAction}
                </p>
              </div>

              {/* Psychologist motivational quote */}
              <div className="p-4 bg-slate-50/60 dark:bg-slate-950/60 border border-slate-200/40 dark:border-slate-800/40 rounded-xl">
                <span className="block text-[9px] font-mono tracking-wider text-slate-400 uppercase font-semibold mb-1">Companion Motivation Quote:</span>
                <p className="text-slate-600 dark:text-slate-300 text-xs italic font-light">
                  {activeMap.studyQuote}
                </p>
              </div>
            </div>

            {/* Widget Preview Simulator Box */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-3 text-left">
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block font-semibold">Simulated Learner Interface Result:</span>
              {activeMap.simulatedWidget}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
