import React, { useState } from 'react';
import { User, Globe, Layout, Cpu, Brain, Sparkles, TrendingUp, Presentation, ArrowRight } from 'lucide-react';

interface ArchNode {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  details: string[];
}

export default function ArchitectureDiagram() {
  const [selectedNode, setSelectedNode] = useState<string>('cnn');

  const nodes: ArchNode[] = [
    {
      id: 'user',
      label: 'Student / User',
      icon: <User className="w-5 h-5" />,
      color: 'from-blue-500 to-sky-500 shadow-blue-500/20 text-blue-500',
      description: 'The primary student or learner sitting in front of their monitor during an active instruction module.',
      details: [
        'Interacts with educational content',
        'Facial muscle triggers recorded non-intrusively',
        'Receives real-time advice pathways'
      ]
    },
    {
      id: 'web',
      label: 'Web Interface',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-blue-500 to-indigo-600 shadow-blue-500/20 text-blue-500',
      description: 'The browser-based visual host where study resources and webcam stream elements reside.',
      details: [
        'HTML5 video frame grabber',
        'CSS glassmorphic control panels',
        'Session history and progress boards'
      ]
    },
    {
      id: 'streamlit',
      label: 'Streamlit App',
      icon: <Layout className="w-5 h-5" />,
      color: 'from-red-500 to-orange-500 shadow-red-500/20 text-red-500',
      description: 'The responsive server wrapper hosting our machine learning modules and telemetry charts.',
      details: [
        'Python application controller',
        'Manages dynamic form parameters',
        'Renders interactive matplotlib graphs'
      ]
    },
    {
      id: 'opencv',
      label: 'OpenCV Handler',
      icon: <Cpu className="w-5 h-5" />,
      color: 'from-emerald-500 to-teal-500 shadow-emerald-500/20 text-emerald-500',
      description: 'Computer vision framework executing spatial transforms and bounding calculations.',
      details: [
        'Grayscale channel transformations',
        'Haar Cascade landmark matching',
        'Isolates 48x48 pixel face croppings'
      ]
    },
    {
      id: 'cnn',
      label: 'CNN Deep Model',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-violet-500 to-purple-600 shadow-violet-500/20 text-purple-500',
      description: 'Deep Convolutional Neural Network trained on Kaggle’s FER-2013 facial database.',
      details: [
        'Learns spatial feature micro-shapes',
        'Dropout regularization for robust scoring',
        'Outputs categorical softmax probabilities'
      ]
    },
    {
      id: 'prediction',
      label: 'Emotion Prediction',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'from-pink-500 to-fuchsia-600 shadow-pink-500/20 text-pink-500',
      description: 'The argmax layer matching the raw model probabilities to one of the 7 supported emotions.',
      details: [
        'Extracts peak probability index',
        'Evaluates against threshold parameters',
        'Validates accuracy in real-time context'
      ]
    },
    {
      id: 'recommendation',
      label: 'Recommendation Engine',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'from-amber-500 to-orange-500 shadow-amber-500/20 text-amber-500',
      description: 'Algorithmic decision tree providing supportive modifications for students.',
      details: [
        'Matches affective states to pedagogical tasks',
        'Delivers guided exercises or cooling breaks',
        'Interacts with local progression registries'
      ]
    },
    {
      id: 'result',
      label: 'Result Display',
      icon: <Presentation className="w-5 h-5" />,
      color: 'from-teal-500 to-emerald-600 shadow-teal-500/20 text-teal-500',
      description: 'Visual confirmation displaying tailored learning support inside the browser interface.',
      details: [
        'Displays interactive advice widgets',
        'Drives custom motivational animations',
        'Saves transaction metrics securely'
      ]
    }
  ];

  const activeNode = nodes.find(n => n.id === selectedNode) || nodes[0];

  return (
    <section id="architecture-section" className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 font-bold uppercase">System design</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            System Architecture
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            An interactive topological diagram illustrating the data stream path, backend server boundaries, and deep learning classification pipelines. Click any block to inspect.
          </p>
        </div>

        {/* Diagram container */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left panel - Visual Flowchart */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white/70 dark:bg-slate-950/65 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/60 dark:border-slate-850 shadow-2xl overflow-x-auto">
              <div className="min-w-[650px] space-y-12 py-6 px-4">
                {/* Horizontal Level 1: Intake & Frontend */}
                <div className="flex justify-between items-center relative">
                  {/* Connective background line */}
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-dashed bg-slate-200 dark:bg-slate-800 -z-10" />

                  {nodes.slice(0, 3).map((node, index) => (
                    <div key={node.id} className="flex items-center space-x-4 relative">
                      <button
                        id={`arch-node-btn-${node.id}`}
                        onClick={() => setSelectedNode(node.id)}
                        className={`p-4 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center w-40 text-center cursor-pointer ${
                          selectedNode === node.id
                            ? `bg-white/90 dark:bg-slate-950 border-blue-500 dark:border-blue-500 shadow-2xl shadow-blue-500/10 scale-105`
                            : 'bg-slate-50/60 dark:bg-slate-950/45 border-slate-200/50 dark:border-slate-800/50 hover:border-slate-300'
                        }`}
                      >
                        <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${node.color} text-white mb-2 shadow-lg`}>
                          {node.icon}
                        </div>
                        <span className="font-display text-xs font-bold text-slate-800 dark:text-slate-200 block">
                          {node.label}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400 uppercase mt-1">Level {index + 1}</span>
                      </button>
                      {index < 2 && <ArrowRight className="w-5 h-5 text-slate-400" />}
                    </div>
                  ))}
                </div>

                {/* Vertical Connector Arrow */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-10 border-l-2 border-dashed border-slate-300 dark:border-slate-700 relative">
                    <div className="absolute bottom-0 -left-1 w-2 h-2 border-r-2 border-b-2 border-slate-300 dark:border-slate-700 transform rotate-45" />
                  </div>
                </div>

                {/* Horizontal Level 2: Core Processing & Models */}
                <div className="flex justify-between items-center relative">
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-dashed bg-slate-200 dark:bg-slate-800 -z-10" />

                  {nodes.slice(3, 6).map((node, index) => (
                    <div key={node.id} className="flex items-center space-x-4 relative">
                      <button
                        id={`arch-node-btn-${node.id}`}
                        onClick={() => setSelectedNode(node.id)}
                        className={`p-4 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center w-40 text-center cursor-pointer ${
                          selectedNode === node.id
                            ? `bg-white/90 dark:bg-slate-950 border-blue-500 dark:border-blue-500 shadow-2xl shadow-blue-500/10 scale-105`
                            : 'bg-slate-50/60 dark:bg-slate-950/45 border-slate-200/50 dark:border-slate-800/50 hover:border-slate-300'
                        }`}
                      >
                        <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${node.color} text-white mb-2 shadow-lg`}>
                          {node.icon}
                        </div>
                        <span className="font-display text-xs font-bold text-slate-800 dark:text-slate-200 block">
                          {node.label}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400 uppercase mt-1">Level {index + 4}</span>
                      </button>
                      {index < 2 && <ArrowRight className="w-5 h-5 text-slate-400" />}
                    </div>
                  ))}
                </div>

                {/* Vertical Connector Arrow */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-10 border-l-2 border-dashed border-slate-300 dark:border-slate-700 relative">
                    <div className="absolute bottom-0 -left-1 w-2 h-2 border-r-2 border-b-2 border-slate-300 dark:border-slate-700 transform rotate-45" />
                  </div>
                </div>

                {/* Horizontal Level 3: Adaptation & Display */}
                <div className="flex justify-center items-center space-x-12 relative">
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-dashed bg-slate-200 dark:bg-slate-800 -z-10" />

                  {nodes.slice(6, 8).map((node, index) => (
                    <div key={node.id} className="flex items-center space-x-4 relative">
                      <button
                        id={`arch-node-btn-${node.id}`}
                        onClick={() => setSelectedNode(node.id)}
                        className={`p-4 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center w-40 text-center cursor-pointer ${
                          selectedNode === node.id
                            ? `bg-white/90 dark:bg-slate-950 border-blue-500 dark:border-blue-500 shadow-2xl shadow-blue-500/10 scale-105`
                            : 'bg-slate-50/60 dark:bg-slate-950/45 border-slate-200/50 dark:border-slate-800/50 hover:border-slate-300'
                        }`}
                      >
                        <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${node.color} text-white mb-2 shadow-lg`}>
                          {node.icon}
                        </div>
                        <span className="font-display text-xs font-bold text-slate-800 dark:text-slate-200 block">
                          {node.label}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400 uppercase mt-1">Level {index + 7}</span>
                      </button>
                      {index < 1 && <ArrowRight className="w-5 h-5 text-slate-400" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right panel - Node Inspector */}
          <div className="lg:col-span-4 bg-white/70 dark:bg-slate-950/65 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/60 dark:border-slate-850 shadow-2xl space-y-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-blue-600 dark:text-blue-400 uppercase font-bold">Node Inspector</span>
              <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white mt-1">
                {activeNode.label}
              </h3>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
              {activeNode.description}
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase block font-semibold">Processes & Parameters:</span>
              <ul className="space-y-2.5">
                {activeNode.details.map((detail, i) => (
                  <li key={i} className="flex items-start space-x-2 text-xs text-slate-600 dark:text-slate-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
