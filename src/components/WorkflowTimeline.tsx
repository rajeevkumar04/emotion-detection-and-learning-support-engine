import React from 'react';
import { PlayCircle, ShieldAlert, Cpu, Brain, Sparkles, MessageSquare, Save, Eye, Camera, Video, Compass } from 'lucide-react';

interface TimelineStep {
  index: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function WorkflowTimeline() {
  const steps: TimelineStep[] = [
    {
      index: '01',
      title: 'Start / System Launch',
      description: 'The student opens their local desktop learning hub or Streamlit browser client, loading neural weights.',
      icon: <PlayCircle className="w-5 h-5" />,
      color: 'bg-indigo-500 text-white shadow-indigo-500/20'
    },
    {
      index: '02',
      title: 'Launch App Wrapper',
      description: 'Core Streamlit modules initialize layout frames and launch mathematical array environments.',
      icon: <Compass className="w-5 h-5" />,
      color: 'bg-violet-500 text-white shadow-violet-500/20'
    },
    {
      index: '03',
      title: 'Open Web Camera Feed',
      description: 'Acquires secure client-side camera access permissions and initiates dynamic frame buffer loops.',
      icon: <Video className="w-5 h-5" />,
      color: 'bg-blue-500 text-white shadow-blue-500/20'
    },
    {
      index: '04',
      title: 'Capture Frame Snapshot',
      description: 'Grabs high-resolution image matrices at continuous microsecond intervals from the camera stream.',
      icon: <Camera className="w-5 h-5" />,
      color: 'bg-sky-500 text-white shadow-sky-500/20'
    },
    {
      index: '05',
      title: 'Haar Cascade Face Detection',
      description: 'OpenCV runs Haar feature-based cascade classifiers to isolate human facial regions within raw frames.',
      icon: <Eye className="w-5 h-5" />,
      color: 'bg-teal-500 text-white shadow-teal-500/20'
    },
    {
      index: '06',
      title: 'Grayscale & Spatial Resize',
      description: 'Converts BGR channels to grayscale, crops faces to exact boxes, and resizes to 48x48 pixel arrays.',
      icon: <Cpu className="w-5 h-5" />,
      color: 'bg-emerald-500 text-white shadow-emerald-500/20'
    },
    {
      index: '07',
      title: 'CNN Inference Probability',
      description: 'Feeds processed tensors into the custom CNN model to calculate softmax classification maps.',
      icon: <Brain className="w-5 h-5" />,
      color: 'bg-purple-500 text-white shadow-purple-500/20'
    },
    {
      index: '08',
      title: 'State Emotion Categorization',
      description: 'Applies argmax functions to identify the peak expression category among our 7 target states.',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'bg-pink-500 text-white shadow-pink-500/20'
    },
    {
      index: '09',
      title: 'Generate Support Pathway',
      description: 'Rules engine maps identified affective state to highly specialized motivational content or advanced modules.',
      icon: <MessageSquare className="w-5 h-5" />,
      color: 'bg-amber-500 text-white shadow-amber-500/20'
    },
    {
      index: '10',
      title: 'Render UI Guidance Block',
      description: 'Instantly updates browser templates with study links, exercises, warm-ups, or rest triggers.',
      icon: <ShieldAlert className="w-5 h-5" />,
      color: 'bg-rose-500 text-white shadow-rose-500/20'
    },
    {
      index: '11',
      title: 'Commit Session Progress',
      description: 'Saves aggregate logs to databases, creating long-term statistics for review.',
      icon: <Save className="w-5 h-5" />,
      color: 'bg-slate-700 text-white shadow-slate-700/20'
    }
  ];

  return (
    <section id="workflow-section" className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 font-bold uppercase">Sequential timeline</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Workflow & Pipeline Stages
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            A comprehensive, vertical step-by-step chronology detailing the programmatic cycle of human-computer interaction, mathematical processing, and real-time interface reactions.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central path line */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-purple-600 transform -translate-x-1/2 -z-10 opacity-30 dark:opacity-20" />

          {/* Timeline steps loop */}
          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  id={`workflow-timeline-step-${step.index}`}
                  key={step.index}
                  className={`flex flex-col sm:flex-row items-start sm:items-center relative ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Side content placeholder (balances layout on desktop) */}
                  <div className="hidden sm:block w-1/2 px-8" />

                  {/* Icon Bullet Indicator (aligned to center on desktop, left on mobile) */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className={`p-2.5 rounded-full ${step.color} shadow-lg ring-4 ring-white/50 dark:ring-slate-900/40 transition-transform duration-300 hover:scale-110`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Main text Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="bg-white/70 dark:bg-slate-950/65 backdrop-blur-md p-6 rounded-3xl border border-white/60 dark:border-slate-850 shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 relative group">
                      {/* Step index badge */}
                      <span className="absolute -top-3 right-4 bg-slate-100/70 dark:bg-slate-950 text-slate-400 dark:text-slate-500 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-slate-200/40 dark:border-slate-800/40">
                        STAGE {step.index}
                      </span>

                      <div className="space-y-2 text-left">
                        <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-light">
                          {step.description}
                        </p>
                      </div>

                      {/* Small arrow indicator for visual polish */}
                      <div className={`hidden sm:block absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white/70 dark:bg-slate-950 border-b border-r border-white/60 dark:border-slate-850 transform rotate-45 ${
                        isEven ? '-left-1.5 border-t-0 border-r-0 border-l border-b' : '-right-1.5 border-b-0 border-l-0 border-r border-t'
                      }`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
