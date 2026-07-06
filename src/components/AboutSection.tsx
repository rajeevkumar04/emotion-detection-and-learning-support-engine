import React from 'react';
import { Target, AlertCircle, Sparkles, TrendingUp, Compass, Eye, Heart } from 'lucide-react';

export default function AboutSection() {
  const cards = [
    {
      id: 'problem',
      title: 'Problem Statement',
      icon: <AlertCircle className="w-5 h-5 text-rose-500" />,
      bgIcon: 'bg-rose-500/10 text-rose-500',
      description: 'Traditional online learning systems deliver uniform static curriculums without accounting for a student’s cognitive workload, exhaustion, or cognitive barriers. This "one-size-fits-all" approach leads to immediate drop-outs, deep mental exhaustion, or early frustration when learning complex concepts.'
    },
    {
      id: 'objective',
      title: 'Project Objective',
      icon: <Target className="w-5 h-5 text-emerald-500" />,
      bgIcon: 'bg-emerald-500/10 text-emerald-500',
      description: 'To design and implement a non-intrusive, real-time affect-aware helper engine. By tracking physical cues from facial landmark matrices, the system alters pedagogical pacing, delivers immediate practice blocks, or triggers cognitive breaks.'
    },
    {
      id: 'motivation',
      title: 'Our Motivation',
      icon: <Heart className="w-5 h-5 text-blue-500" />,
      bgIcon: 'bg-blue-500/10 text-blue-500',
      description: 'Bridging the sensory gap in distance learning. In a traditional class, an educator instantly notices student confusion or fatigue and alters their teaching speed. We strive to recreate this intuitive physical loop inside digital tutoring software.'
    },
    {
      id: 'solution',
      title: 'The AI Solution',
      icon: <Sparkles className="w-5 h-5 text-purple-500" />,
      bgIcon: 'bg-purple-500/10 text-purple-500',
      description: 'A modular full-stack environment coupling high-speed face landmarks croppers (via OpenCV and Haar Cascades) with a deep Convolutional Neural Network (CNN) trained on the FER-2013 image dataset. It maps real-time expressions to educational recommendations.'
    },
    {
      id: 'outcome',
      title: 'Expected Outcome',
      icon: <TrendingUp className="w-5 h-5 text-teal-500" />,
      bgIcon: 'bg-teal-500/10 text-teal-500',
      description: 'Enhanced student retention rates, reduced cognitive friction, and customized academic recovery pathways. This makes coding bootcamps and remote technical learning spaces more empathetic, efficient, and accessible.'
    },
    {
      id: 'mission',
      title: 'Our Mission',
      icon: <Compass className="w-5 h-5 text-amber-500" />,
      bgIcon: 'bg-amber-500/10 text-amber-500',
      description: 'To democratize advanced emotional artificial intelligence (Affective Computing) and establish empathetic software systems as the foundational standard of global education.'
    },
    {
      id: 'vision',
      title: 'Our Vision',
      icon: <Eye className="w-5 h-5 text-pink-500" />,
      bgIcon: 'bg-pink-500/10 text-pink-500',
      description: 'A future where every online student feels heard and supported. We envision intelligent interfaces adapting beautifully to human emotional currents to unlock peak potential in every individual.'
    }
  ];

  return (
    <section id="about-section" className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page title header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Project Overview & Vision
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            Understanding the core motivations, direct problem definitions, and educational objectives that drive the Emotion Detection and Learning Support Engine.
          </p>
        </div>

        {/* Layout block */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {/* Main big block about the project */}
          <div className="md:col-span-2 lg:col-span-3 bg-white/75 dark:bg-slate-900/65 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/60 dark:border-slate-850 shadow-2xl flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="space-y-4 max-w-2xl text-left">
              <span className="text-[10px] font-mono tracking-widest text-blue-600 dark:text-blue-400 uppercase font-bold">Concept Introduction</span>
              <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">
                Empathetic Artificial Intelligence for the Modern Classroom
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                The Emotion Detection and Learning Support Engine acts as a cognitive bridge. By observing micro-expressions through standard webcam streams, the software dynamically gauges whether a student is experiencing success (Happy), learning blocks (Frustration/Angry), fatigue (Sadness), or overload (Fear). The application acts as a friendly companion, ensuring no learner is left behind due to invisible learning barriers.
              </p>
            </div>
            <div className="flex-shrink-0 grid grid-cols-2 gap-4 w-full md:w-auto">
              <div className="p-4 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/50 dark:border-slate-800/50 text-center">
                <div className="font-display text-3xl font-extrabold text-blue-600 dark:text-blue-400">100%</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Edge Privacy</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/50 dark:border-slate-800/50 text-center">
                <div className="font-display text-3xl font-extrabold text-purple-650 dark:text-purple-400">7</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Affect states</div>
              </div>
            </div>
          </div>

          {/* Cards mapping */}
          {cards.map((card) => (
            <div
              id={`about-card-${card.id}`}
              key={card.id}
              className="group bg-white/70 dark:bg-slate-950/65 backdrop-blur-md p-6 rounded-3xl border border-white/60 dark:border-slate-850 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3.5">
                  <div className={`p-2.5 rounded-xl ${card.bgIcon}`}>
                    {card.icon}
                  </div>
                  <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
