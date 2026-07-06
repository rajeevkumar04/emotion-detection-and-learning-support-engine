import React, { useState, useEffect } from 'react';
import { ActivePage } from '../types';
import { Brain, Menu, X, Sun, Moon, Sparkles } from 'lucide-react';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Navbar({ activePage, setActivePage, darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: ActivePage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Features' },
    { id: 'how-it-works', label: 'Process' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'emotions', label: 'Emotions' },
    { id: 'recommendations', label: 'Recommendations' },
    { id: 'demo', label: 'Live Sandbox' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 dark:bg-slate-950/70 backdrop-blur-md shadow-lg border-b border-white/40 dark:border-slate-800/40 py-3'
          : 'bg-white/40 dark:bg-slate-950/30 backdrop-blur-md border-b border-white/20 dark:border-slate-850 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo Brand */}
          <div
            id="brand-logo"
            className="flex items-center space-x-2.5 cursor-pointer group"
            onClick={() => setActivePage('home')}
          >
            <div className="relative p-2 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
              <Brain className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
            </div>
            <div>
              <span className="font-display text-lg font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                EDLS Engine
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-blue-600 dark:text-blue-400 uppercase font-semibold">
                EmotionAI Research
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="flex bg-slate-100/50 dark:bg-slate-950/40 p-1.5 rounded-full border border-slate-200/40 dark:border-slate-800/40 overflow-x-auto max-w-2xl no-scrollbar">
              {navItems.map((item) => (
                <button
                  id={`nav-link-${item.id}`}
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 whitespace-nowrap ${
                    activePage === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-650 dark:hover:text-blue-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Dark Mode & Quick Try */}
            <div className="flex items-center space-x-2 pl-4">
              <button
                id="toggle-dark-mode-desktop"
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-500" />}
              </button>

              <button
                id="cta-try-demo-desktop"
                onClick={() => setActivePage('demo')}
                className="relative overflow-hidden group flex items-center space-x-1.5 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-semibold tracking-wide px-5 py-2.5 rounded-full shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer"
              >
                <span>Live Demo</span>
                <Sparkles className="w-3.5 h-3.5 text-blue-400 dark:text-blue-500 group-hover:animate-spin" />
              </button>
            </div>
          </div>

          {/* Mobile Right Bar controls */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              id="toggle-dark-mode-mobile"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-500" />}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300"
              aria-label="Open main menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl overflow-y-auto max-h-[85vh]"
        >
          <div className="px-4 pt-2 pb-6 space-y-1.5 bg-slate-50/50 dark:bg-slate-950/20">
            <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase pb-2 pl-2">Navigation Channels</div>
            {navItems.map((item) => (
              <button
                id={`nav-link-mobile-${item.id}`}
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                  activePage === item.id
                    ? 'bg-gradient-to-r from-blue-600/10 to-purple-500/10 border-l-4 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/40'
                }`}
              >
                <span>{item.label}</span>
                {activePage === item.id && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
              </button>
            ))}

            <div className="pt-4 px-2">
              <button
                id="cta-try-demo-mobile"
                onClick={() => {
                  setActivePage('demo');
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold tracking-wide py-3 rounded-xl shadow-lg"
              >
                <span>Launch Live Demo</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
