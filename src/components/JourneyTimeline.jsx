import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, FileText, Award, Cpu, Rocket, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import { timelineEvents } from '../data/timelineData';

export const JourneyTimeline = () => {
  const iconMap = {
    GraduationCap: GraduationCap,
    FileText: FileText,
    Award: Award,
    Cpu: Cpu,
    Rocket: Rocket,
    Briefcase: Briefcase,
    Sparkles: Sparkles
  };

  return (
    <section id="timeline" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-xs text-tealAccent-700 dark:text-tealAccent-400 uppercase tracking-widest px-2.5 py-1 rounded bg-tealAccent-50 dark:bg-tealAccent-950 border border-tealAccent-200 dark:border-tealAccent-800">
            09 / Career Path
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-paper-900 dark:text-white">
            Academic & Research Journey
          </h2>
          <div className="h-px bg-paper-200 dark:bg-paper-800 flex-1 ml-4" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-tealAccent-600/30 dark:border-tealAccent-500/20 ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-8">
          {timelineEvents.map((event, idx) => {
            const IconComponent = iconMap[event.icon] || Sparkles;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot Node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-paper-900 border-2 border-tealAccent-600 flex items-center justify-center shadow-md group-hover:scale-125 group-hover:border-terracotta-500 transition-all">
                  <div className="w-2 h-2 rounded-full bg-tealAccent-600 group-hover:bg-terracotta-500" />
                </div>

                {/* Left Year Label (Visible on SM screens+) */}
                <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
                  <span className="font-serif font-bold text-lg text-tealAccent-700 dark:text-tealAccent-400 block">
                    {event.year}
                  </span>
                  <span className="font-mono text-[10px] text-paper-500 dark:text-paper-400 block">
                    {event.period}
                  </span>
                </div>

                {/* Content Card */}
                <div className="glass-card p-6 rounded-2xl border border-paper-200 dark:border-paper-800 hover:border-tealAccent-500/50 transition-all space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="sm:hidden font-serif font-bold text-tealAccent-700 dark:text-tealAccent-400">
                      {event.year} ({event.period})
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-tealAccent-50 text-tealAccent-800 dark:bg-tealAccent-950 dark:text-tealAccent-300 border border-tealAccent-200 dark:border-tealAccent-800">
                      {event.category}
                    </span>
                    <span className="text-xs font-mono text-paper-500 dark:text-paper-400">
                      {event.institution}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-bold text-paper-900 dark:text-white flex items-center gap-2">
                    <IconComponent className="w-5 h-5 text-tealAccent-600 shrink-0" />
                    <span>{event.title}</span>
                  </h3>

                  <p className="text-xs sm:text-sm font-sans text-paper-700 dark:text-paper-300 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
