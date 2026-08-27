import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ExternalLink, Github, Video, Award, Sparkles, Filter } from 'lucide-react';
import { publications } from '../data/researchData';

export const ResearchPublications = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Published', 'Presented', 'Under Review'];

  const filteredPublications = activeTab === 'All'
    ? publications
    : publications.filter(p => p.category === activeTab);

  return (
    <section id="research" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="font-mono text-xs text-tealAccent-700 dark:text-tealAccent-400 uppercase tracking-widest px-2.5 py-1 rounded bg-tealAccent-50 dark:bg-tealAccent-950 border border-tealAccent-200 dark:border-tealAccent-800">
            03 / Research & Papers
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-paper-900 dark:text-white">
            Publications & Academic Research
          </h2>
          <div className="h-px bg-paper-200 dark:bg-paper-800 flex-1 ml-4" />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs font-mono text-paper-500 dark:text-paper-400 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter by Status:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === cat
                  ? 'bg-tealAccent-700 text-white shadow-sm'
                  : 'bg-paper-100 dark:bg-paper-800 text-paper-700 dark:text-paper-300 hover:bg-paper-200 dark:hover:bg-paper-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Research Papers Grid */}
        <div className="grid grid-cols-1 gap-8">
          <AnimatePresence mode="wait">
            {filteredPublications.map((paper) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-paper-200 dark:border-paper-800 hover:border-tealAccent-500/50 transition-all space-y-5"
              >
                {/* Top Badge & Domain Header */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                      paper.category === 'Published'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                        : paper.category === 'Presented'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-300 dark:border-blue-800'
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                    }`}>
                      {paper.badge}
                    </span>
                    <span className="text-xs font-mono text-paper-500 dark:text-paper-400">
                      {paper.year}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-tealAccent-700 dark:text-tealAccent-400 font-semibold">
                    {paper.domain}
                  </div>
                </div>

                {/* Title & Author Info */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-paper-900 dark:text-white leading-snug">
                    {paper.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-mono text-paper-600 dark:text-paper-400">
                    <strong>Authors:</strong> {paper.authors} &nbsp;|&nbsp; <strong>Venue/Status:</strong> {paper.journal}
                  </div>
                </div>

                {/* Description Abstract */}
                <p className="text-sm text-paper-700 dark:text-paper-300 leading-relaxed font-sans">
                  {paper.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {paper.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-mono text-tealAccent-800 dark:text-tealAccent-300 bg-tealAccent-50 dark:bg-tealAccent-950/60 rounded-md border border-tealAccent-200/80 dark:border-tealAccent-800/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links & PDFs */}
                <div className="pt-4 border-t border-paper-200 dark:border-paper-800 flex flex-wrap items-center gap-3">
                  {paper.pdfLink && (
                    <a
                      href={`/${paper.pdfLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-medium text-white bg-tealAccent-700 hover:bg-tealAccent-800 rounded-lg shadow-sm flex items-center gap-1.5 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>View PDF Paper</span>
                    </a>
                  )}

                  {paper.githubLink && (
                    <a
                      href={paper.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-medium text-paper-800 dark:text-paper-200 bg-paper-100 dark:bg-paper-800 hover:bg-paper-200 dark:hover:bg-paper-700 rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                  )}

                  {paper.demoLink && (
                    <a
                      href={paper.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-medium text-terracotta-700 dark:text-terracotta-400 bg-terracotta-50 dark:bg-terracotta-950/60 border border-terracotta-200 dark:border-terracotta-800 hover:bg-terracotta-100 rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Demo Video</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
