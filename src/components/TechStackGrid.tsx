import React, { useState } from 'react';
import { techStackData } from '../data';
import { Layers, Database, Code2, Cpu, FileJson, Check } from 'lucide-react';

export default function TechStackGrid() {
  const [filter, setFilter] = useState<'all' | 'language' | 'library' | 'ai' | 'dataset'>('all');

  // Categorize tech items for interactive filtering
  const getCategory = (name: string): 'language' | 'library' | 'ai' | 'dataset' => {
    const n = name.toLowerCase();
    if (n.includes('python')) return 'language';
    if (n.includes('dataset')) return 'dataset';
    if (n.includes('tensorflow') || n.includes('cnn') || n.includes('scikit')) return 'ai';
    return 'library';
  };

  const filteredTech = filter === 'all'
    ? techStackData
    : techStackData.filter(item => getCategory(item.name) === filter);

  // Render a custom-styled technical logo vector or logo placeholder depending on key
  const renderLogoPlaceholder = (logoType: string, name: string) => {
    let bgGradient = 'from-slate-500 to-slate-600';
    let textSymbol = name.substring(0, 2);

    switch (logoType) {
      case 'python':
        bgGradient = 'from-blue-500 via-indigo-500 to-amber-500';
        textSymbol = 'Py';
        break;
      case 'streamlit':
        bgGradient = 'from-red-500 to-orange-500';
        textSymbol = 'St';
        break;
      case 'tensorflow':
        bgGradient = 'from-orange-500 to-amber-500';
        textSymbol = 'Tf';
        break;
      case 'opencv':
        bgGradient = 'from-red-500 via-green-500 to-blue-500';
        textSymbol = 'Cv';
        break;
      case 'numpy':
        bgGradient = 'from-sky-400 to-blue-600';
        textSymbol = 'Np';
        break;
      case 'pandas':
        bgGradient = 'from-indigo-600 to-purple-800';
        textSymbol = 'Pd';
        break;
      case 'matplotlib':
        bgGradient = 'from-teal-400 via-emerald-500 to-indigo-500';
        textSymbol = 'Pl';
        break;
      case 'pillow':
        bgGradient = 'from-pink-500 to-purple-600';
        textSymbol = 'Pi';
        break;
      case 'scikit':
        bgGradient = 'from-amber-400 to-orange-600';
        textSymbol = 'Sk';
        break;
      case 'dataset':
        bgGradient = 'from-slate-700 to-slate-900 dark:from-slate-800 dark:to-slate-950';
        textSymbol = 'Db';
        break;
      case 'cnn':
        bgGradient = 'from-violet-600 via-fuchsia-600 to-pink-600';
        textSymbol = 'Nn';
        break;
    }

    return (
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${bgGradient} text-white font-mono font-bold flex items-center justify-center shadow-lg`}>
        {textSymbol}
      </div>
    );
  };

  return (
    <section id="tech-stack-section" className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 font-bold uppercase">Scientific tooling</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Technology Stack & Frameworks
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            Review the scientific libraries, core programming languages, and datasets powering our emotion detection models, pre-processing filters, and interface layers.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {([
            { id: 'all', label: 'All Ecosystem' },
            { id: 'language', label: 'Languages' },
            { id: 'ai', label: 'Deep Learning & Neural Networks' },
            { id: 'library', label: 'Analysis & Processing Libraries' },
            { id: 'dataset', label: 'Data Registries' }
          ] as const).map((tab) => (
            <button
              id={`tech-filter-tab-${tab.id}`}
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-gradient-to-tr from-blue-600 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/15 scale-105'
                  : 'bg-white/70 dark:bg-slate-950/65 backdrop-blur-md text-slate-600 dark:text-slate-400 border-white/60 dark:border-slate-850 hover:bg-white dark:hover:bg-slate-950/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Stack Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredTech.map((item) => {
            const cat = getCategory(item.name);
            return (
              <div
                id={`tech-card-${item.name.replace(/[^a-zA-Z0-9]/g, '-')}`}
                key={item.name}
                className="group relative bg-white/70 dark:bg-slate-950/65 backdrop-blur-md hover:bg-white/85 dark:hover:bg-slate-950/80 p-6 rounded-3xl border border-white/60 dark:border-slate-850 shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Card head: logo + category */}
                  <div className="flex items-center justify-between">
                    {renderLogoPlaceholder(item.logoType, item.name)}
                    <span className="text-[9px] font-mono tracking-wider font-semibold uppercase bg-slate-100/70 dark:bg-slate-950 px-2.5 py-1 rounded-full text-slate-500 dark:text-slate-400 border border-slate-200/40 dark:border-slate-800/40">
                      {cat}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Purpose box */}
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">Purpose in Engine:</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-light italic">
                    "{item.purpose}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
