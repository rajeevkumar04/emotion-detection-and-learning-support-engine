import React from 'react';
import { ActivePage } from '../types';
import { Brain, ArrowUp, Github, Heart } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo & Vision column */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg text-white">
                <Brain className="w-4 h-4" />
              </div>
              <span className="font-display text-base font-bold text-white tracking-wide">
                EmotionAI Research Division
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
              An empathetic, academic computer vision portal bridging the gap between student stress/frustration levels and automated educational curriculum pacing. Trained on Kaggle's FER-2013 dataset.
            </p>
            <div className="text-[10px] font-mono text-slate-500">
              © 2026 Emotion Detection and Learning Support Engine Project. Released under Apache-2.0 License.
            </div>
          </div>

          {/* Quick links column */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h5 className="font-display text-xs font-bold text-white uppercase tracking-wider">Navigation Channels</h5>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button onClick={() => setActivePage('home')} className="hover:text-blue-400 text-left transition-colors cursor-pointer">Home Hub</button>
              <button onClick={() => setActivePage('about')} className="hover:text-blue-400 text-left transition-colors cursor-pointer">About Scope</button>
              <button onClick={() => setActivePage('features')} className="hover:text-blue-400 text-left transition-colors cursor-pointer">Features</button>
              <button onClick={() => setActivePage('how-it-works')} className="hover:text-blue-400 text-left transition-colors cursor-pointer">Process Flow</button>
              <button onClick={() => setActivePage('tech-stack')} className="hover:text-blue-400 text-left transition-colors cursor-pointer">Tech Stack</button>
              <button onClick={() => setActivePage('architecture')} className="hover:text-blue-400 text-left transition-colors cursor-pointer">Architecture</button>
              <button onClick={() => setActivePage('emotions')} className="hover:text-blue-400 text-left transition-colors cursor-pointer">Emotions catalog</button>
              <button onClick={() => setActivePage('demo')} className="hover:text-blue-400 text-left transition-colors cursor-pointer">Live Sandbox</button>
            </div>
          </div>

          {/* Technology standards badges column */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h5 className="font-display text-xs font-bold text-white uppercase tracking-wider">Project Assets</h5>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Python', 'Streamlit', 'TensorFlow', 'OpenCV', 'Kaggle FER-2013', 'CNN'].map((b) => (
                <span key={b} className="bg-slate-950 text-slate-400 border border-slate-800 text-[10px] font-mono px-2.5 py-0.5 rounded uppercase">
                  {b}
                </span>
              ))}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                id="footer-back-to-top"
                onClick={handleScrollTop}
                className="flex items-center space-x-1.5 text-xs hover:text-white bg-slate-950 hover:bg-slate-800 border border-slate-850 px-3 py-1.5 rounded-lg cursor-pointer transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center space-x-1 text-slate-500 text-[10px] font-mono">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-rose-500 fill-current" />
                <span>for global AI learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
