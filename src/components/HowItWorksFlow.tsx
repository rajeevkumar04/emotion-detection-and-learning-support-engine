import React, { useState } from 'react';
import { Play, ArrowRight, ArrowLeft, Globe, Video, Camera, Cpu, Brain, CheckSquare, MessageSquareCode, Save } from 'lucide-react';

interface FlowStep {
  number: number;
  title: string;
  shortLabel: string;
  description: string;
  detailText: string;
  icon: React.ReactNode;
  visualGraphic: React.ReactNode;
}

export default function HowItWorksFlow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: FlowStep[] = [
    {
      number: 1,
      title: 'User Opens Website',
      shortLabel: 'Open portal',
      description: 'The student launches the affective learning platform inside a standard modern web browser.',
      detailText: 'The browser initiates secure client-side handlers, reading configuration presets, and verifying authorization logs without transmitting personal files.',
      icon: <Globe className="w-5 h-5 text-blue-500" />,
      visualGraphic: (
        <div className="bg-slate-950 p-4 rounded-xl font-mono text-[10px] text-blue-400 space-y-1.5 border border-blue-500/20">
          <p className="text-slate-500">&gt; GET https://learning-support-engine.local</p>
          <p className="text-emerald-400">HTTP/1.1 200 OK [Application Initialized]</p>
          <p>&gt; Loading tensorflow_js_models...</p>
          <p className="text-purple-400">&gt; Frame buffer size: 48x48 resolution</p>
        </div>
      )
    },
    {
      number: 2,
      title: 'Starts Webcam',
      shortLabel: 'Start webcam',
      description: 'The user grants browser permissions to activate the integrated webcam or external USB camera.',
      detailText: 'The video stream is handled locally using HTML5 MediaDevices APIs, capturing high-frequency video frames cleanly at 30 FPS.',
      icon: <Video className="w-5 h-5 text-blue-500" />,
      visualGraphic: (
        <div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden flex flex-col justify-between p-3 border border-blue-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="text-[9px] font-mono text-red-500 font-bold uppercase">Webcam Ready</span>
            </div>
            <span className="text-[9px] font-mono text-slate-500">640x480px @ 30FPS</span>
          </div>
          <div className="flex justify-center">
            <Video className="w-10 h-10 text-slate-600 animate-pulse" />
          </div>
          <div className="w-full bg-slate-800/80 p-1.5 rounded text-[8px] font-mono text-slate-400">
            {"navigator.mediaDevices.getUserMedia({\"video\": true})"}
          </div>
        </div>
      )
    },
    {
      number: 3,
      title: 'Captures Face Frame',
      shortLabel: 'Capture frames',
      description: 'The system pulls individual video frames dynamically, converting them for numerical classification.',
      detailText: 'An active frame grabber isolates raw RGB matrices at targeted millisecond intervals to minimize browser CPU overhead.',
      icon: <Camera className="w-5 h-5 text-blue-500" />,
      visualGraphic: (
        <div className="bg-slate-950 p-4 rounded-xl font-mono text-[9px] text-slate-400 space-y-1 border border-blue-500/20">
          <p className="text-blue-400">// Snapshot capture event:</p>
          <p>const video = document.getElementById("webcam-stream");</p>
          <p>const canvas = document.createElement("canvas");</p>
          <p>const ctx = canvas.getContext("2d");</p>
          <p className="text-emerald-500">ctx.drawImage(video, 0, 0, 48, 48);</p>
          <p className="text-purple-400">Status: Frame Captured Successfully</p>
        </div>
      )
    },
    {
      number: 4,
      title: 'Image Preprocessing',
      shortLabel: 'Preprocess pixel',
      description: 'Images are converted to grayscale, cropped to bounds, and resized to exact 48x48 pixel tensors.',
      detailText: 'The engine uses OpenCV filters or equivalent math arrays to drop color channels (BGR to Gray), scale pixel values to [0, 1] intervals, and align inputs to the network specification.',
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      visualGraphic: (
        <div className="grid grid-cols-3 gap-2 items-center">
          <div className="bg-slate-900 aspect-square rounded p-1 flex flex-col items-center justify-center border border-slate-800">
            <span className="text-[8px] font-mono text-slate-500">1. Original</span>
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">📷</div>
          </div>
          <div className="text-center text-slate-400">➔</div>
          <div className="bg-slate-900 aspect-square rounded p-1 flex flex-col items-center justify-center border border-blue-500/40">
            <span className="text-[8px] font-mono text-blue-400">2. Gray/Crop</span>
            <div className="w-8 h-8 bg-slate-800 flex flex-col items-center justify-center border border-dashed border-blue-400">
              <span className="text-[7px] font-mono text-blue-400">48x48</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 5,
      title: 'CNN Emotion Prediction',
      shortLabel: 'CNN inference',
      description: 'The processed 48x48x1 image tensor is fed into the deep Convolutional Neural Network.',
      detailText: 'The trained model applies convolutional filters to extract edges, pooling layers to summarize features, and fully connected activation layers to predict probability maps.',
      icon: <Brain className="w-5 h-5 text-blue-500" />,
      visualGraphic: (
        <div className="space-y-2 bg-slate-950 p-3.5 rounded-xl border border-blue-500/20">
          <div className="flex items-center justify-between text-[9px] font-mono">
            <span className="text-slate-500">model.predict(tensor)</span>
            <span className="text-purple-400 font-bold">Evaluating Layer 12</span>
          </div>
          {/* Animated vertical bars */}
          <div className="space-y-1">
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" style={{ width: '82%' }} />
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" style={{ width: '12%' }} />
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" style={{ width: '6%' }} />
            </div>
          </div>
          <span className="block text-[8px] font-mono text-blue-300">Features: 128 kernels extracted</span>
        </div>
      )
    },
    {
      number: 6,
      title: 'Emotion Classification',
      shortLabel: 'Classify state',
      description: 'The output probabilities are sorted, and the primary emotion index is mapped.',
      detailText: 'Our neural output maps the pixel array to one of seven discrete standard emotions (Happy, Sad, Angry, Fear, Neutral, Surprise, Disgust) with associated confidence scoring metrics.',
      icon: <CheckSquare className="w-5 h-5 text-blue-500" />,
      visualGraphic: (
        <div className="bg-slate-900/80 p-3 rounded-xl border border-blue-500/20 text-center space-y-1.5">
          <span className="text-[10px] font-mono text-slate-500 uppercase">Max Probability Node</span>
          <div className="text-2xl">😊</div>
          <div className="font-display text-sm font-bold text-emerald-500 uppercase">Happy (Confidence: 91.2%)</div>
        </div>
      )
    },
    {
      number: 7,
      title: 'Recommendation Engine',
      shortLabel: 'Reroute learning',
      description: 'The cognitive mapping layer converts the classification output into custom educational strategies.',
      detailText: 'Designed by expert psychologists, the rules engine alters course material progression, injects warmups, offers break timers, or provides advanced modules.',
      icon: <MessageSquareCode className="w-5 h-5 text-blue-500" />,
      visualGraphic: (
        <div className="bg-slate-950 p-4 rounded-xl font-mono text-[9px] text-blue-400 space-y-1 border border-blue-500/20">
          <p className="text-slate-500"># Recommendation rule loaded:</p>
          <p>if state == "Happy":</p>
          <p className="text-purple-400">  action = load_advanced_module()</p>
          <p className="text-slate-500">elif state == "Angry":</p>
          <p>  action = trigger_relaxation_breathing()</p>
        </div>
      )
    },
    {
      number: 8,
      title: 'Display Personalized Guidance',
      shortLabel: 'Display advice',
      description: 'The web browser dynamically displays recommendations directly within the active dashboard.',
      detailText: 'The user-facing glassmorphic UI updates without reloading, offering relevant study links, interactive cards, or motivational animations.',
      icon: <Globe className="w-5 h-5 text-blue-500" />,
      visualGraphic: (
        <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-md">
          <div className="text-xs font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-800">🌟 Study Recommendation</div>
          <p className="text-[10px] text-slate-600 dark:text-slate-300 pt-2 font-light">"Excellent work! Try our dynamic algorithm puzzle catalog to stretch your logic parameters."</p>
        </div>
      )
    },
    {
      number: 9,
      title: 'Save Session Progress',
      shortLabel: 'Save metrics',
      description: 'The session log is recorded locally, creating chronological progression metrics.',
      detailText: 'Stores localized transaction times, emotional peaks, and recommendation metrics, enabling retrospective timeline reporting charts.',
      icon: <Save className="w-5 h-5 text-blue-500" />,
      visualGraphic: (
        <div className="bg-slate-900 p-3.5 rounded-xl border border-emerald-500/20 font-mono text-[9px] text-emerald-400 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>SQLite/Local Transaction...</span>
          </div>
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[8px] uppercase font-bold">Committed</span>
        </div>
      )
    }
  ];

  return (
    <section id="how-it-works-section" className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 font-bold uppercase">Technical pipeline</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            How the System Works
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            An interactive visual walk-through explaining the complete spatial-to-pedagogical conversion pipeline, from camera frame captures to recommendation execution.
          </p>
        </div>

        {/* Step Grid and Interactive Sandbox Viewer */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left panel - Steps List */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono tracking-widest text-slate-400 uppercase font-semibold pl-2 pb-2 border-b border-slate-200/50 dark:border-slate-800/40">
              Pipeline Steps
            </div>
            {steps.map((step, index) => (
              <button
                id={`how-works-step-button-${step.number}`}
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                  activeStep === index
                    ? 'bg-white/75 dark:bg-slate-950/70 backdrop-blur-md border-blue-500 dark:border-blue-500 shadow-xl shadow-blue-500/5 scale-[1.02]'
                    : 'bg-white/60 dark:bg-slate-950/50 backdrop-blur-sm border-white/60 dark:border-slate-850 hover:bg-white/80 dark:hover:bg-slate-950/70 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center space-x-4">
                  {/* Step Number badge */}
                  <div className={`w-8 h-8 rounded-xl font-display text-sm font-bold flex items-center justify-center transition-all ${
                    activeStep === index
                      ? 'bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/40 dark:border-slate-800/40'
                  }`}>
                    {step.number}
                  </div>
                  <div>
                    <h4 className={`font-display text-sm sm:text-base font-bold transition-colors ${
                      activeStep === index ? 'text-blue-600 dark:text-blue-400' : 'text-slate-800 dark:text-slate-200'
                    }`}>
                      {step.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeStep === index ? 'translate-x-1 text-blue-500' : 'text-slate-400'}`}>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>

          {/* Right panel - Interactive Simulator graphic representation */}
          <div className="lg:col-span-6 bg-white/70 dark:bg-slate-950/65 backdrop-blur-md p-8 rounded-3xl border border-white/60 dark:border-slate-850 shadow-2xl space-y-6 lg:sticky lg:top-28">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/50 dark:border-slate-800/40">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-blue-500/10 rounded-xl text-blue-500 border border-blue-500/20">
                  {steps[activeStep].icon}
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-blue-500 uppercase font-bold">Pipeline Node {steps[activeStep].number}</span>
                  <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white mt-0.5">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center space-x-1.5">
                <button
                  id="how-works-prev-button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => prev - 1)}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  id="how-works-next-button"
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(prev => prev + 1)}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Explanation box */}
            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                {steps[activeStep].detailText}
              </p>
              
              <div className="pt-2">
                <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase block mb-3 font-semibold">Active Visual Graphic</span>
                {steps[activeStep].visualGraphic}
              </div>
            </div>

            {/* Dynamic Step indicator slider */}
            <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/40">
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-2">
                <span>Execution Status</span>
                <span>{Math.round(((activeStep + 1) / steps.length) * 100)}% Complete</span>
              </div>
              <div className="h-1.5 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
