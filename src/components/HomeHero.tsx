import React, { useState, useEffect } from 'react';
import { ActivePage } from '../types';
import { Play, ArrowRight, BrainCircuit, Activity, Video, Sparkles, Cpu, Trophy, Clock } from 'lucide-react';

interface HomeHeroProps {
  setActivePage: (page: ActivePage) => void;
}

export default function HomeHero({ setActivePage }: HomeHeroProps) {
  // Simple state to animate face mesh vertices dynamically to represent AI processing
  const [meshPulse, setMeshPulse] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMeshPulse((prev) => (prev + 1) % 100);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero-section" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center bg-transparent transition-colors duration-300">
      {/* Dynamic Background Mesh / Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" />
        {/* Particle/Grid Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text block */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Banner badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 text-xs font-bold uppercase tracking-wider animate-bounce">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI-Powered Learning Support</span>
            </div>

            {/* Main title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Emotion Detection & <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Intelligent Guidance.
              </span>
            </h1>

            {/* Supporting description */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              An advanced CNN-based system that monitors student well-being through facial expressions, providing real-time personalized learning paths and motivation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-cta-get-started"
                onClick={() => setActivePage('about')}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-blue-200 dark:shadow-none hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer text-sm"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-view-demo"
                onClick={() => setActivePage('demo')}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-bold px-8 py-4 rounded-xl shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer text-sm"
              >
                <Play className="w-4 h-4 text-blue-600 fill-blue-600/20" />
                <span>Launch Demo Simulator</span>
              </button>
            </div>

            {/* Fast Stats banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
              <div className="p-4 bg-white/50 dark:bg-slate-900/30 backdrop-blur-md rounded-2xl border border-white/80 dark:border-slate-800/50 shadow-sm text-center lg:text-left">
                <div className="font-display text-2xl font-bold text-blue-600 dark:text-blue-400">94.2%</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-tighter">Model Accuracy</div>
              </div>
              <div className="p-4 bg-white/50 dark:bg-slate-900/30 backdrop-blur-md rounded-2xl border border-white/80 dark:border-slate-800/50 shadow-sm text-center lg:text-left">
                <div className="font-display text-2xl font-bold text-purple-600 dark:text-purple-400">40ms</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-tighter">Inference Time</div>
              </div>
              <div className="p-4 bg-white/50 dark:bg-slate-900/30 backdrop-blur-md rounded-2xl border border-white/80 dark:border-slate-800/50 shadow-sm text-center lg:text-left">
                <div className="font-display text-2xl font-bold text-indigo-600 dark:text-indigo-400">FER-2013</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-tighter">Dataset Baseline</div>
              </div>
              <div className="p-4 bg-white/50 dark:bg-slate-900/30 backdrop-blur-md rounded-2xl border border-white/80 dark:border-slate-800/50 shadow-sm text-center lg:text-left">
                <div className="font-display text-2xl font-bold text-emerald-600 dark:text-emerald-400">7 Class</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-tighter">Emotions Map</div>
              </div>
            </div>
          </div>

          {/* Animated AI Illustration Panel */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 h-72 sm:w-85 sm:h-85 lg:w-96 lg:h-96 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-full flex items-center justify-center p-4 border border-blue-500/20 dark:border-blue-500/10 shadow-2xl">
              {/* Spinning Ring */}
              <div className="absolute inset-2 border-2 border-dashed border-blue-500/20 dark:border-blue-400/10 rounded-full animate-spin [animation-duration:45s]" />
              <div className="absolute inset-8 border border-purple-500/30 dark:border-purple-400/15 rounded-full animate-spin [animation-duration:20s] [animation-direction:reverse]" />

              {/* Glowing Ambient Mesh dots background */}
              <svg className="absolute inset-0 w-full h-full text-blue-500/20 dark:text-blue-400/15" viewBox="0 0 400 400">
                <circle cx="200" cy="110" r="4" className="fill-current animate-ping" />
                <circle cx="120" cy="180" r="3" className="fill-current" />
                <circle cx="280" cy="180" r="3" className="fill-current" />
                <circle cx="160" cy="280" r="3" className="fill-current" />
                <circle cx="240" cy="280" r="3" className="fill-current" />

                <line x1="200" y1="110" x2="120" y2="180" stroke="currentColor" strokeWidth="0.5" />
                <line x1="200" y1="110" x2="280" y2="180" stroke="currentColor" strokeWidth="0.5" />
                <line x1="120" y1="180" x2="200" y2="210" stroke="currentColor" strokeWidth="0.5" />
                <line x1="280" y1="180" x2="200" y2="210" stroke="currentColor" strokeWidth="0.5" />
                <line x1="120" y1="180" x2="160" y2="280" stroke="currentColor" strokeWidth="0.5" />
                <line x1="280" y1="180" x2="240" y2="280" stroke="currentColor" strokeWidth="0.5" />
                <line x1="160" y1="280" x2="240" y2="280" stroke="currentColor" strokeWidth="0.5" />
                <line x1="200" y1="210" x2="160" y2="280" stroke="currentColor" strokeWidth="0.5" />
                <line x1="200" y1="210" x2="240" y2="280" stroke="currentColor" strokeWidth="0.5" />
              </svg>

              {/* Face scanning illustration card */}
              <div className="relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-white/40 dark:border-slate-850 rounded-3xl p-6 shadow-2xl w-full max-w-xs overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/50 dark:border-slate-800/40">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest text-emerald-500 font-semibold uppercase">Live Tracking</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">SCAN_ID: 0x44F9</span>
                </div>

                {/* Face Grid Overlay Simulated Graphic */}
                <div className="relative my-4 aspect-square bg-slate-900/90 rounded-xl overflow-hidden flex items-center justify-center group border border-blue-500/20">
                  {/* Neon scanline */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-lg shadow-blue-500/80 animate-[bounce_4s_ease-in-out_infinite]" />

                  {/* Face outline wireframe using SVG */}
                  <svg className="w-4/5 h-4/5 text-blue-400/40 dark:text-blue-400/30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75">
                    {/* Head contour */}
                    <path d="M 50,15 C 25,15 25,75 50,85 C 75,75 75,15 50,15 Z" />
                    {/* Horizontal grid guide */}
                    <line x1="25" y1="45" x2="75" y2="45" strokeDasharray="2,2" />
                    <line x1="25" y1="65" x2="75" y2="65" strokeDasharray="2,2" />

                    {/* Eyes and Brows points */}
                    <circle cx="38" cy="45" r="2" fill="currentColor" />
                    <circle cx="62" cy="45" r="2" fill="currentColor" />
                    <path d="M 33,40 Q 38,37 43,41" />
                    <path d="M 57,41 Q 62,37 67,40" />

                    {/* Nose Bridge */}
                    <path d="M 50,45 L 50,60 L 46,65 L 50,67 L 54,65 L 50,60" />

                    {/* Mouth Mesh contour changing shape based on meshPulse */}
                    <path
                      d={meshPulse % 2 === 0 
                        ? "M 38,72 Q 50,78 62,72" // Smile
                        : "M 38,75 Q 50,75 62,75" // Neutral
                      }
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />

                    {/* Custom landmarks */}
                    <circle cx="50" cy="15" r="1.5" className="fill-blue-400" />
                    <circle cx="50" cy="85" r="1.5" className="fill-blue-400" />
                    <circle cx="28" cy="30" r="1.5" className="fill-blue-400" />
                    <circle cx="72" cy="30" r="1.5" className="fill-blue-400" />
                  </svg>

                  {/* Overlay text */}
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-md px-2 py-1.5 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                      <span className="text-[9px] font-mono text-blue-300 font-bold tracking-wider">PREDICTING:</span>
                    </div>
                    <span className="text-[10px] font-mono text-blue-400 font-bold uppercase">
                      {meshPulse % 2 === 0 ? 'HAPPY (94%)' : 'NEUTRAL (88%)'}
                    </span>
                  </div>
                </div>

                {/* Simulated Console Logs */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-slate-400">Inference Delay:</span>
                    <span className="text-emerald-500 font-semibold">12.4 ms</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-slate-400">Confidence Threshold:</span>
                    <span className="text-blue-400 font-semibold">85.00%</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-slate-400">Class Matrix:</span>
                    <span className="text-purple-400 font-semibold">7-Channel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
