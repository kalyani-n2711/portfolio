import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, BookOpen, ChevronDown, ChevronUp, Sparkles, Filter, CheckCircle2, TrendingUp } from 'lucide-react';
import { academicSummary, semesters } from '../data/courseworkData';

export const Coursework = () => {
  const [activeSemFilter, setActiveSemFilter] = useState('All');
  const [expandedSemesters, setExpandedSemesters] = useState({
    'sem-1': true,
    'sem-2': true,
    'sem-3': true,
    'sem-4': true,
  });

  const toggleSemester = (semId) => {
    setExpandedSemesters(prev => ({ ...prev, [semId]: !prev[semId] }));
  };

  const filteredSemesters = activeSemFilter === 'All'
    ? semesters
    : semesters.filter(s => `Sem ${s.number}` === activeSemFilter);

  const gradeColor = (grade) => {
    switch (grade) {
      case 'O':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800';
      case 'A+':
        return 'bg-tealAccent-100 text-tealAccent-800 dark:bg-tealAccent-950/80 dark:text-tealAccent-300 border-tealAccent-300 dark:border-tealAccent-800';
      case 'A':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border-blue-300 dark:border-blue-800';
      case 'B+':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border-amber-300 dark:border-amber-800';
      default:
        return 'bg-paper-100 text-paper-800 dark:bg-paper-800 dark:text-paper-200 border-paper-300 dark:border-paper-700';
    }
  };

  return (
    <section id="coursework" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6 sm:mb-8"
        >
          <span className="font-mono text-xs text-tealAccent-700 dark:text-tealAccent-400 uppercase tracking-widest px-2.5 py-1 rounded bg-tealAccent-50 dark:bg-tealAccent-950 border border-tealAccent-200 dark:border-tealAccent-800">
            Academic Performance
          </span>
          <h2 className="text-xl sm:text-3xl font-serif font-bold text-paper-900 dark:text-white">
            Coursework & Transcript Dashboard
          </h2>
          <div className="h-px bg-paper-200 dark:bg-paper-800 flex-1 ml-4 hidden sm:block" />
        </motion.div>

        {/* 1. Academic Performance Summary Card & SGPA Progression */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-5 sm:p-8 rounded-2xl border border-paper-200 dark:border-paper-800 space-y-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-tealAccent-700 dark:text-tealAccent-400">
                  <GraduationCap className="w-4 h-4" />
                  <span>{academicSummary.degree}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-paper-900 dark:text-white">
                  {academicSummary.institution}
                </h3>
                <p className="text-xs font-mono text-paper-500 dark:text-paper-400">
                  Batch: {academicSummary.period}
                </p>
              </div>

              <div className="text-right shrink-0">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-terracotta-600 dark:text-terracotta-400">
                  {academicSummary.cgpa}
                </div>
                <div className="text-[11px] font-mono text-paper-500 dark:text-paper-400">
                  Cumulative CGPA
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
              <div className="p-3 rounded-xl bg-paper-100/70 dark:bg-paper-800/50 border border-paper-200 dark:border-paper-700 text-center">
                <div className="text-lg font-serif font-bold text-paper-900 dark:text-white">
                  {academicSummary.semestersCompleted}
                </div>
                <div className="text-[11px] font-mono text-paper-500 dark:text-paper-400">
                  Semesters Completed
                </div>
              </div>
              <div className="p-3 rounded-xl bg-paper-100/70 dark:bg-paper-800/50 border border-paper-200 dark:border-paper-700 text-center">
                <div className="text-lg font-serif font-bold text-paper-900 dark:text-white">
                  {academicSummary.coursesCompleted}
                </div>
                <div className="text-[11px] font-mono text-paper-500 dark:text-paper-400">
                  Courses Completed
                </div>
              </div>
              <div className="p-3 rounded-xl bg-paper-100/70 dark:bg-paper-800/50 border border-paper-200 dark:border-paper-700 text-center">
                <div className="text-lg font-serif font-bold text-tealAccent-700 dark:text-tealAccent-400">
                  {academicSummary.latestSgpa}
                </div>
                <div className="text-[11px] font-mono text-paper-500 dark:text-paper-400">
                  Latest SGPA (Sem 4)
                </div>
              </div>
            </div>

            {/* Academic Focus Text */}
            <div className="pt-2 text-xs font-sans text-paper-700 dark:text-paper-300 leading-relaxed border-t border-paper-200 dark:border-paper-800">
              <strong className="font-mono text-paper-900 dark:text-white">Academic Focus: </strong>
              {academicSummary.academicFocus}
            </div>
          </motion.div>

          {/* SGPA Progression Visualizer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 glass-card p-5 sm:p-8 rounded-2xl border border-paper-200 dark:border-paper-800 space-y-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-paper-900 dark:text-white mb-1">
                <TrendingUp className="w-4 h-4 text-tealAccent-600" />
                <span>SGPA Progression (Semesters 1–4)</span>
              </div>
              <p className="text-xs font-mono text-paper-500 dark:text-paper-400 mb-6">
                Consistent distinction performance across all academic terms
              </p>

              {/* SGPA Bar Chart */}
              <div className="space-y-4">
                {academicSummary.sgpaProgression.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-paper-800 dark:text-paper-200">{item.sem}</span>
                      <span className="text-paper-500 dark:text-paper-400">{item.term}</span>
                      <span className="font-bold text-tealAccent-700 dark:text-tealAccent-400">{item.sgpa}</span>
                    </div>
                    <div className="h-2 w-full bg-paper-200 dark:bg-paper-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(item.sgpa / 10) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-tealAccent-600 to-terracotta-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-paper-200 dark:border-paper-800 flex items-center justify-between text-[11px] font-mono text-paper-500 dark:text-paper-400">
              <span>Overall Average: 9.33</span>
              <span className="text-tealAccent-700 dark:text-tealAccent-400 font-semibold">First Class with Distinction</span>
            </div>
          </motion.div>

        </div>

        {/* 2. Interactive Semester Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-xs font-mono text-paper-500 dark:text-paper-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Select Semester:
            </span>
            {['All', 'Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'].map((semTab) => (
              <button
                key={semTab}
                onClick={() => setActiveSemFilter(semTab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeSemFilter === semTab
                    ? 'bg-tealAccent-700 text-white shadow-sm'
                    : 'bg-paper-100 dark:bg-paper-800 text-paper-700 dark:text-paper-300 hover:bg-paper-200 dark:hover:bg-paper-700'
                }`}
              >
                {semTab}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-paper-500 dark:text-paper-400">
            Showing {filteredSemesters.reduce((acc, s) => acc + s.courses.length, 0)} Courses across {filteredSemesters.length} Terms
          </div>
        </div>

        {/* 3. Semester Tables List */}
        <div className="space-y-6">
          {filteredSemesters.map((sem) => {
            const isExpanded = expandedSemesters[sem.id];

            return (
              <motion.div
                key={sem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl border border-paper-200 dark:border-paper-800 overflow-hidden shadow-sm"
              >
                {/* Semester Accordion Header */}
                <div
                  onClick={() => toggleSemester(sem.id)}
                  className="p-4 sm:p-5 bg-paper-100/80 dark:bg-paper-900/80 hover:bg-paper-200/60 dark:hover:bg-paper-800/60 transition-colors cursor-pointer flex items-center justify-between select-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-tealAccent-700 text-white font-serif font-bold text-xs sm:text-sm flex items-center justify-center shrink-0">
                      S{sem.number}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-lg font-serif font-bold text-paper-900 dark:text-white">
                        {sem.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-mono text-paper-500 dark:text-paper-400">
                        {sem.courses.length} Completed Courses
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="text-right">
                      <span className="text-[10px] sm:text-xs font-mono text-paper-500 dark:text-paper-400 block">SGPA</span>
                      <span className="text-base sm:text-lg font-serif font-bold text-terracotta-600 dark:text-terracotta-400">
                        {sem.sgpa}
                      </span>
                    </div>

                    <button
                      className="p-1.5 rounded-lg text-paper-500 dark:text-paper-400 hover:bg-paper-200 dark:hover:bg-paper-700"
                      aria-label="Toggle Coursework View"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </button>
                  </div>
                </div>

                {/* Coursework Table */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-x-auto"
                    >
                      <table className="w-full text-left text-xs font-sans min-w-[500px]">
                        <thead className="bg-paper-50 dark:bg-paper-950 text-paper-500 dark:text-paper-400 uppercase font-mono border-b border-paper-200 dark:border-paper-800">
                          <tr>
                            <th className="py-3 px-4 sm:px-5 w-28 sm:w-32">Course Code</th>
                            <th className="py-3 px-4 sm:px-5">Course Title</th>
                            <th className="py-3 px-4 sm:px-5 w-24 sm:w-28 text-center">Grade</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-paper-200/60 dark:divide-paper-800/60">
                          {sem.courses.map((course, cIdx) => (
                            <tr
                              key={cIdx}
                              className="hover:bg-tealAccent-50/40 dark:hover:bg-tealAccent-950/20 transition-colors"
                            >
                              <td className="py-3 px-4 sm:px-5 font-mono font-semibold text-tealAccent-700 dark:text-tealAccent-400">
                                {course.code}
                              </td>
                              <td className="py-3 px-4 sm:px-5 font-medium text-paper-800 dark:text-paper-200">
                                {course.name}
                              </td>
                              <td className="py-3 px-4 sm:px-5 text-center">
                                <span className={`inline-block px-2.5 py-0.5 rounded-full font-mono font-bold text-[11px] border ${gradeColor(course.grade)}`}>
                                  {course.grade}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
