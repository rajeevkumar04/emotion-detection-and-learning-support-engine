import React from 'react';
import { teamData } from '../data';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function TeamGrid() {
  return (
    <section id="team-section" className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 font-bold uppercase">Core researchers</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Meet the Academic Team
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            Our multidisciplinary team unites field experts in Deep Learning architectures, Real-Time Computer Vision pipelines, and Cognitive-Affective Educational Psychology.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {teamData.map((member) => (
            <div
              id={`team-card-${member.name.toLowerCase().replace(/[^a-z]/g, '')}`}
              key={member.name}
              className="group bg-white/70 dark:bg-slate-950/65 backdrop-blur-md p-6 rounded-3xl border border-white/60 dark:border-slate-850 shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4 text-left">
                {/* Photo initials placeholder */}
                <div className="relative aspect-square w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 text-white font-display text-xl font-bold flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300">
                  {member.image}
                  <div className="absolute inset-0.5 border border-white/20 rounded-xl" />
                </div>

                {/* Meta */}
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <span className="block text-[11px] font-mono text-blue-500 dark:text-blue-400 font-semibold uppercase tracking-wider mt-0.5">
                    {member.role}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-light line-clamp-4">
                  {member.bio}
                </p>
              </div>

              {/* Social Channels and Links */}
              <div className="pt-5 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <a
                  id={`team-email-link-${member.name.toLowerCase().replace(/[^a-z]/g, '')}`}
                  href={`mailto:${member.email}`}
                  className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  title="Contact Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <div className="flex items-center space-x-1.5">
                  <a
                    id={`team-github-link-${member.name.toLowerCase().replace(/[^a-z]/g, '')}`}
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
                    title="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    id={`team-linkedin-link-${member.name.toLowerCase().replace(/[^a-z]/g, '')}`}
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-500 hover:text-blue-500 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
