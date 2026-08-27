import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Github, Video, ExternalLink, Filter, Layers } from 'lucide-react';
import { projects } from '../data/projectsData';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Medical & Healthcare AI',
    'Computer Vision & Remote Sensing',
    'IoT & Robotics',
    'Data Analytics & ML',
    'Systems & DSA'
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
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
            05 / Engineering & AI Projects
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-paper-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="h-px bg-paper-200 dark:bg-paper-800 flex-1 ml-4" />
        </motion.div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs font-mono text-paper-500 dark:text-paper-400 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter Domain:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-tealAccent-700 text-white shadow-sm'
                  : 'bg-paper-100 dark:bg-paper-800 text-paper-700 dark:text-paper-300 hover:bg-paper-200 dark:hover:bg-paper-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-6 rounded-2xl border border-paper-200 dark:border-paper-800 flex flex-col justify-between space-y-6 hover:shadow-3d-card transition-all group"
              >
                <div className="space-y-4">
                  {/* Top Bar Icon & Number */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{project.icon}</span>
                      <span className="text-xs font-mono font-bold text-tealAccent-700 dark:text-tealAccent-400 bg-tealAccent-50 dark:bg-tealAccent-950 px-2.5 py-1 rounded border border-tealAccent-200 dark:border-tealAccent-800">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-paper-400 dark:text-paper-500">
                      Proj {project.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-paper-900 dark:text-white group-hover:text-tealAccent-700 dark:group-hover:text-tealAccent-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-paper-500 dark:text-paper-400 pt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description & Impact */}
                  <p className="text-xs sm:text-sm font-sans text-paper-700 dark:text-paper-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="p-3 rounded-lg bg-paper-100/70 dark:bg-paper-800/50 border border-paper-200 dark:border-paper-700 text-xs text-paper-600 dark:text-paper-400 font-mono">
                    <span className="font-semibold text-paper-800 dark:text-paper-200">Impact: </span>
                    {project.impact}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[11px] font-mono text-paper-700 dark:text-paper-300 bg-paper-100 dark:bg-paper-800 rounded border border-paper-200 dark:border-paper-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-4 border-t border-paper-200 dark:border-paper-800 flex flex-wrap items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 text-xs font-medium text-paper-800 dark:text-paper-200 bg-paper-100 dark:bg-paper-800 hover:bg-paper-200 dark:hover:bg-paper-700 rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {project.pdfReport && (
                    <a
                      href={`/${project.pdfReport}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 text-xs font-medium text-white bg-tealAccent-700 hover:bg-tealAccent-800 rounded-lg shadow-sm flex items-center gap-1.5 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>PDF Report</span>
                    </a>
                  )}

                  {project.demoVideo && (
                    <a
                      href={project.demoVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 text-xs font-medium text-terracotta-700 dark:text-terracotta-400 bg-terracotta-50 dark:bg-terracotta-950/60 border border-terracotta-200 dark:border-terracotta-800 rounded-lg flex items-center gap-1.5 transition-colors"
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
