import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare, CheckCircle, RefreshCw } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    // Simulate API pipeline transaction
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      // Auto dismiss
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact-section" className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 font-bold uppercase">Inquiries & Access</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            Interested in deploying our Affective Learning Engine inside your school or LMS dashboard? Send us a message below, and our research division will reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Panel: Contact Form */}
          <div className="lg:col-span-7 bg-white/70 dark:bg-slate-950/65 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/60 dark:border-slate-850 shadow-2xl relative overflow-hidden text-left">
            {submitted && (
              <div className="absolute inset-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center space-y-3.5 p-6 animate-fade-in text-center">
                <CheckCircle className="w-12 h-12 text-emerald-500 animate-bounce" />
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">Message Dispatched Successfully</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">Your inquiry has been stored. Our computer vision research team will coordinate responses within 48 business hours.</p>
                <button
                  id="contact-success-dismiss"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl cursor-pointer transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}

            <form id="academic-contact-form" onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-mono text-slate-400 uppercase font-semibold">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dr. Jordan Mercer"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200/50 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-mono text-slate-400 uppercase font-semibold">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jordan.mercer@academy.edu"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200/50 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-mono text-slate-400 uppercase font-semibold">Inquiry / Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline your school, university, or workspace requirements, intended seat counts, and target browser devices..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200/50 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none"
                />
              </div>

              <button
                id="contact-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3.5 rounded-xl text-xs tracking-wide shadow-lg cursor-pointer transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Dispatched Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Research Division</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Panel: Address & Simulated Google Maps Placeholder */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Info details */}
            <div className="bg-white/70 dark:bg-slate-950/65 backdrop-blur-md p-6 rounded-3xl border border-white/60 dark:border-slate-850 shadow-2xl space-y-5 text-left">
              <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">Research Campus</h4>

              <div className="space-y-4">
                <div className="flex items-start space-x-3.5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="p-2 bg-blue-500/10 rounded-xl text-blue-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-850 dark:text-white">Main Office</span>
                    <p className="text-slate-500 font-light mt-0.5">Suite 408, AI Innovation Hub, University District, San Francisco, CA 94103</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="p-2 bg-blue-500/10 rounded-xl text-blue-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-850 dark:text-white">General Press</span>
                    <p className="text-slate-500 font-light mt-0.5">research@ai-edu-engine.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="p-2 bg-blue-500/10 rounded-xl text-blue-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-850 dark:text-white">Academic Helpline</span>
                    <p className="text-slate-500 font-light mt-0.5">+1 (415) 555-8930 (M-F 9AM - 5PM PST)</p>
                  </div>
                </div>
              </div>

              {/* Social Channels icons */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold block mb-3">Academic Social Network Channels:</span>
                <div className="flex space-x-2.5">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-50 dark:bg-slate-950 text-slate-400 hover:text-slate-800 dark:hover:text-white rounded-xl border border-slate-200/40 dark:border-slate-800/40 hover:scale-105 transition-all">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-50 dark:bg-slate-950 text-slate-400 hover:text-blue-500 rounded-xl border border-slate-200/40 dark:border-slate-800/40 hover:scale-105 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-50 dark:bg-slate-950 text-slate-400 hover:text-sky-400 rounded-xl border border-slate-200/40 dark:border-slate-800/40 hover:scale-105 transition-all">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Simulated Google Maps placeholder */}
            <div className="bg-slate-950 rounded-3xl border border-white/10 shadow-2xl overflow-hidden h-44 relative group">
              {/* Artistic Grid overlay representing a scientific grid/map layout */}
              <div className="absolute inset-0 bg-slate-950/95 font-mono text-slate-500 text-[10px] p-4 flex flex-col justify-between animate-fade-in">
                {/* Tech grid markings */}
                <div className="flex justify-between">
                  <span className="text-[9px] text-blue-400 font-bold">LAT: 37.7749° N</span>
                  <span className="text-[9px] text-blue-400 font-bold">LNG: 122.4194° W</span>
                </div>
                
                {/* Visual locator symbol */}
                <div className="flex flex-col items-center justify-center">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center animate-ping" />
                    <MapPin className="w-5 h-5 text-blue-500 absolute top-1.5 left-1.5" />
                  </div>
                  <span className="block text-slate-300 font-display font-bold text-[11px] mt-1 tracking-wide">AI Innovation Hub Campus</span>
                  <span className="text-[9px] text-slate-500 font-mono">San Francisco, California</span>
                </div>

                <div className="text-[8px] text-slate-600 flex justify-between border-t border-slate-900 pt-1.5">
                  <span>SCALE: 1:2000 METERS</span>
                  <span className="text-blue-400 font-bold uppercase">MAP RETRIEVAL STABLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
