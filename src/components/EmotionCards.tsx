import React, { useState } from 'react';
import { emotionsData } from '../data';
import { ArrowRight, Info, CheckCircle, GraduationCap } from 'lucide-react';

export default function EmotionCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="emotions-section" className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 font-bold uppercase">Affect classification</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Supported Expressions & Actions
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            Our neural classification matrix categorizes human expressions into seven discrete affective states. Each state maps to a targeted pedagogical recovery or acceleration scaffold.
          </p>
        </div>

        {/* Emotions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
          {emotionsData.map((emotion) => (
            <div
              id={`emotion-card-${emotion.name.toLowerCase()}`}
              key={emotion.name}
              onMouseEnter={() => setHoveredCard(emotion.name)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative bg-white/70 dark:bg-slate-950/65 backdrop-blur-md p-6 rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between group ${
                hoveredCard === emotion.name
                  ? 'scale-[1.03] shadow-2xl border-blue-500'
                  : 'border-white/60 dark:border-slate-850 shadow-lg'
              }`}
            >
              {/* Colored Glow/Backdrop when hovered */}
              <div className={`absolute inset-0 bg-gradient-to-br ${emotion.bgGradient} rounded-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />

              <div className="space-y-5 text-left">
                {/* Header: Emoji and Category Label */}
                <div className="flex items-center justify-between">
                  <div className={`text-4xl filter drop-shadow-md transition-transform duration-300 ${hoveredCard === emotion.name ? 'scale-125 rotate-6' : ''}`}>
                    {emotion.emoji}
                  </div>
                  <span className="font-display font-bold text-sm tracking-wide text-slate-800 dark:text-slate-200 uppercase">
                    {emotion.name}
                  </span>
                </div>

                {/* State description */}
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-1.5 text-slate-400">
                    <Info className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-[10px] font-mono tracking-wider uppercase font-semibold">Cognitive Assessment:</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-light">
                    {emotion.description}
                  </p>
                </div>
              </div>

              {/* Recommendation Segment */}
              <div className="pt-4 mt-5 border-t border-slate-200/40 dark:border-slate-800/40 space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 text-slate-400">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                    <span className="text-[10px] font-mono tracking-wider uppercase font-bold text-blue-600 dark:text-blue-400">Pedagogical Reroute:</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-200 text-[11px] sm:text-xs leading-relaxed font-medium">
                    {emotion.recommendation}
                  </p>
                </div>

                {/* Highlighted Syllabus Focus Area */}
                <div className="bg-white/60 dark:bg-slate-950/40 p-2.5 rounded-xl border border-slate-200/30 dark:border-slate-800/20">
                  <span className="block text-[9px] font-mono tracking-wider text-slate-400 uppercase font-bold mb-0.5">Scaffold Focus:</span>
                  <span className="text-[10px] font-medium text-slate-600 dark:text-slate-300 line-clamp-1 italic">
                    "{emotion.studyFocus}"
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
