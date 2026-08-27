import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2, UserCheck, Sparkles } from 'lucide-react';
import { experiences } from '../data/experienceData';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-mono text-xs text-tealAccent-700 dark:text-tealAccent-400 uppercase tracking-widest px-2.5 py-1 rounded bg-tealAccent-50 dark:bg-tealAccent-950 border border-tealAccent-200 dark:border-tealAccent-800">
            06 / Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-paper-900 dark:text-white">
            Internships & Research Experience
          </h2>
          <div className="h-px bg-paper-200 dark:bg-paper-800 flex-1 ml-4" />
        </motion.div>

        {/* Experience Timeline Grid */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-paper-200 dark:border-paper-800 hover:border-tealAccent-500/50 transition-all space-y-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-tealAccent-100 text-tealAccent-800 dark:bg-tealAccent-950 dark:text-tealAccent-300 border border-tealAccent-300 dark:border-tealAccent-800">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-paper-500 dark:text-paper-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-paper-900 dark:text-white pt-1">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-tealAccent-700 dark:text-tealAccent-400 flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.organization}</span>
                    {exp.mentor && (
                      <span className="text-xs font-mono text-paper-500 dark:text-paper-400 font-normal">
                        (Guided by {exp.mentor})
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-paper-500 dark:text-paper-400 bg-paper-100 dark:bg-paper-800 px-3 py-1.5 rounded-md">
                  <MapPin className="w-3.5 h-3.5 text-terracotta-600" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="text-sm font-sans text-paper-700 dark:text-paper-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Highlights List */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {exp.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-paper-50 dark:bg-paper-800/60 border border-paper-200 dark:border-paper-700 text-xs font-mono text-paper-700 dark:text-paper-300 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-tealAccent-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
