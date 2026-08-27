import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, FileSpreadsheet, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { patents } from '../data/researchData';

export const Patents = () => {
  return (
    <section id="patents" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-mono text-xs text-terracotta-700 dark:text-terracotta-400 uppercase tracking-widest px-2.5 py-1 rounded bg-terracotta-50 dark:bg-terracotta-950 border border-terracotta-200 dark:border-terracotta-800">
            04 / Intellectual Property
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-paper-900 dark:text-white">
            Patents & Innovation
          </h2>
          <div className="h-px bg-paper-200 dark:bg-paper-800 flex-1 ml-4" />
        </motion.div>

        {/* Patents Cards Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {patents.map((patent, idx) => (
            <motion.div
              key={patent.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-paper-200 dark:border-paper-800 hover:border-terracotta-500/50 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header Tag */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
                      ✦ {patent.status}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-terracotta-700 dark:text-terracotta-400">
                    {patent.filingNo}
                  </span>
                </div>

                {/* Patent Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-paper-900 dark:text-white leading-snug">
                  “{patent.title}”
                </h3>

                {/* Meta details */}
                <div className="text-xs font-mono text-paper-600 dark:text-paper-400 space-y-1">
                  <div><strong>Patent Inventor:</strong> Kalyani Agarwal · {patent.authority}</div>
                  <div><strong>Domain:</strong> {patent.domain} · Year: {patent.year}</div>
                </div>

                {/* Abstract Text */}
                <p className="text-sm font-sans text-paper-700 dark:text-paper-300 leading-relaxed">
                  {patent.abstract}
                </p>

                {/* Technical Highlights */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-paper-500 dark:text-paper-400 font-medium">
                    Official Registration Details:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {patent.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-mono text-terracotta-800 dark:text-terracotta-300 bg-terracotta-50 dark:bg-terracotta-950/60 rounded-md border border-terracotta-200 dark:border-terracotta-800 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-terracotta-600" /> {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Status */}
              <div className="pt-4 border-t border-paper-200 dark:border-paper-800 flex items-center justify-between text-xs font-mono text-paper-500 dark:text-paper-400">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-tealAccent-600" />
                  Indian Patent Office (IPO)
                </span>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                  Published Patent (Application No. 20261105269A)
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
