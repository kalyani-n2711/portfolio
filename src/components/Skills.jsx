import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Eye, Sparkles, Database, Code, Cloud, Cpu, CheckCircle } from 'lucide-react';
import { skillGroups } from '../data/skillsData';

export const Skills = () => {
  const iconMap = {
    Brain: Brain,
    Eye: Eye,
    Sparkles: Sparkles,
    Database: Database,
    Code: Code,
    Cloud: Cloud
  };

  return (
    <section id="skills" className="py-20 relative">
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
            07 / Technical Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-paper-900 dark:text-white">
            Skills & Competencies
          </h2>
          <div className="h-px bg-paper-200 dark:bg-paper-800 flex-1 ml-4" />
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => {
            const IconComponent = iconMap[group.icon] || Cpu;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-paper-200 dark:border-paper-800 hover:border-tealAccent-500/50 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Category Title */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-tealAccent-100 dark:bg-tealAccent-950 text-tealAccent-700 dark:text-tealAccent-400 flex items-center justify-center border border-tealAccent-200 dark:border-tealAccent-800 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-serif font-bold text-paper-900 dark:text-white">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skill Progress Bars */}
                  <div className="space-y-3 pt-2">
                    {group.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-mono text-paper-700 dark:text-paper-300">
                          <span>{skill.name}</span>
                          <span className="text-tealAccent-700 dark:text-tealAccent-400 font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-paper-200 dark:bg-paper-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 + sIdx * 0.05 }}
                            className="h-full bg-gradient-to-r from-tealAccent-600 to-terracotta-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-paper-200 dark:border-paper-800 flex items-center justify-between text-[11px] font-mono text-paper-500 dark:text-paper-400">
                  <span>{group.skills.length} Core Tools</span>
                  <span className="text-tealAccent-700 dark:text-tealAccent-400">Proficient</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
