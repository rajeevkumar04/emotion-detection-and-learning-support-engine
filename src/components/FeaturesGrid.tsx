import React, { useState } from 'react';
import { featuresData } from '../data';
import * as Icons from 'lucide-react';

export default function FeaturesGrid() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'core' | 'ai' | 'ui' | 'system'>('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'core', label: 'Pedagogical Core' },
    { id: 'ai', label: 'Deep Learning & Vision' },
    { id: 'ui', label: 'User Interfaces' },
    { id: 'system', label: 'System Architecture' },
  ] as const;

  const filteredFeatures = selectedCategory === 'all'
    ? featuresData
    : featuresData.filter(f => f.category === selectedCategory);

  // Helper to render Lucide Icons dynamically and safely
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Icons.Activity className="w-5 h-5" />;
      case 'Video':
        return <Icons.Video className="w-5 h-5" />;
      case 'BrainCircuit':
        return <Icons.BrainCircuit className="w-5 h-5" />;
      case 'GraduationCap':
        return <Icons.GraduationCap className="w-5 h-5" />;
      case 'HeartHandshake':
        return <Icons.HeartHandshake className="w-5 h-5" />;
      case 'History':
        return <Icons.History className="w-5 h-5" />;
      case 'BarChart3':
        return <Icons.BarChart3 className="w-5 h-5" />;
      case 'Zap':
        return <Icons.Zap className="w-5 h-5" />;
      case 'Smartphone':
        return <Icons.Smartphone className="w-5 h-5" />;
      default:
        return <Icons.Sparkles className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'core':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'ai':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      case 'ui':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
      case 'system':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
      default:
        return 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20';
    }
  };

  return (
    <section id="features-section" className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 font-bold uppercase">System Features</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Engine Capabilities & Highlights
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            An extensive breakdown of the technical elements, browser wrappers, and neural architecture mechanisms that support students' mental and emotional states.
          </p>
        </div>

        {/* Category switcher tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              id={`features-filter-tab-${cat.id}`}
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-tr from-blue-600 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/15 scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredFeatures.map((feat) => (
            <div
              id={`feature-card-${feat.id}`}
              key={feat.id}
              className="group relative bg-white/70 dark:bg-slate-950/65 backdrop-blur-md hover:bg-white dark:hover:bg-slate-900 p-6 rounded-3xl border border-white/60 dark:border-slate-850 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Feature Icon block */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-950/60 text-slate-700 dark:text-slate-300 group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300`}>
                    {renderIcon(feat.icon)}
                  </div>
                  <span className={`text-[9px] font-mono tracking-wider font-bold uppercase border px-2 py-0.5 rounded-full ${getCategoryColor(feat.category)}`}>
                    {feat.category}
                  </span>
                </div>

                {/* Info */}
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>

              {/* Hover highlight edge */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
