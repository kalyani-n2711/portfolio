import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, FileText, CheckCircle2, ChevronDown, ChevronUp, ExternalLink, Sparkles } from 'lucide-react';
import { certificationCategories } from '../data/certificationsData';

export const Certifications = () => {
  const [showAllFoundations, setShowAllFoundations] = useState(false);

  const topTier = certificationCategories.find(c => c.tier === 'top');
  const midTier = certificationCategories.find(c => c.tier === 'mid');
  const introTier = certificationCategories.find(c => c.tier === 'intro');

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="font-mono text-xs text-tealAccent-700 dark:text-tealAccent-400 uppercase tracking-widest px-2.5 py-1 rounded bg-tealAccent-50 dark:bg-tealAccent-950 border border-tealAccent-200 dark:border-tealAccent-800">
            08 / Industry Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-paper-900 dark:text-white">
            Certifications & Verified Credentials (43)
          </h2>
          <div className="h-px bg-paper-200 dark:bg-paper-800 flex-1 ml-4" />
        </motion.div>

        {/* 1. TOP TIER — FEATURED CREDENTIALS */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-serif font-bold text-paper-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-terracotta-600" />
              <span>{topTier.title}</span>
            </h3>
            <p className="text-xs font-mono text-paper-500 dark:text-paper-400">
              {topTier.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topTier.items.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card p-6 rounded-2xl border border-paper-200 dark:border-paper-800 hover:border-tealAccent-500/50 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-tealAccent-100 text-tealAccent-800 dark:bg-tealAccent-950 dark:text-tealAccent-300 border border-tealAccent-200 dark:border-tealAccent-800">
                      {cert.badge}
                    </span>
                    <span className="text-[11px] font-mono text-paper-500 dark:text-paper-400">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="text-base font-serif font-bold text-paper-900 dark:text-white leading-snug">
                    {cert.name}
                  </h4>
                  <div className="text-xs font-semibold text-tealAccent-700 dark:text-tealAccent-400">
                    {cert.issuer}
                  </div>

                  <p className="text-xs text-paper-600 dark:text-paper-300 font-sans leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-paper-200 dark:border-paper-800 flex items-center justify-between text-xs font-mono text-paper-500 dark:text-paper-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-tealAccent-600" /> Verified
                  </span>
                  <span className="text-tealAccent-700 dark:text-tealAccent-400 font-semibold">Featured</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. MID TIER — TECHNICAL & PROFESSIONAL */}
        <div className="space-y-6 pt-6 border-t border-paper-200 dark:border-paper-800">
          <div className="space-y-1">
            <h3 className="text-xl font-serif font-bold text-paper-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-tealAccent-600" />
              <span>{midTier.title}</span>
            </h3>
            <p className="text-xs font-mono text-paper-500 dark:text-paper-400">
              {midTier.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {midTier.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="p-4 rounded-xl glass-card border border-paper-200 dark:border-paper-800 hover:border-tealAccent-500/40 transition-all flex items-start justify-between gap-3"
              >
                <div>
                  <div className="text-xs font-semibold text-paper-900 dark:text-white">
                    {item.name}
                  </div>
                  <div className="text-[11px] font-mono text-tealAccent-700 dark:text-tealAccent-400">
                    {item.issuer}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-paper-400 dark:text-paper-500 shrink-0">
                  #{i + 16}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. INTRODUCTORY & FOUNDATIONS (COMPACT GRID) */}
        <div className="space-y-6 pt-6 border-t border-paper-200 dark:border-paper-800">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-xl font-serif font-bold text-paper-900 dark:text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-paper-500" />
                <span>{introTier.title}</span>
              </h3>
              <p className="text-xs font-mono text-paper-500 dark:text-paper-400">
                {introTier.subtitle}
              </p>
            </div>

            <button
              onClick={() => setShowAllFoundations(!showAllFoundations)}
              className="px-3 py-1.5 text-xs font-mono text-tealAccent-700 dark:text-tealAccent-400 bg-tealAccent-50 dark:bg-tealAccent-950/60 rounded-lg border border-tealAccent-200 dark:border-tealAccent-800 flex items-center gap-1"
            >
              <span>{showAllFoundations ? 'Collapse' : 'View All'}</span>
              {showAllFoundations ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {(showAllFoundations ? introTier.items : introTier.items.slice(0, 6)).map((item, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-paper-100/60 dark:bg-paper-800/40 border border-paper-200 dark:border-paper-700 text-xs flex items-center justify-between"
              >
                <span className="font-medium text-paper-800 dark:text-paper-200">{item.name}</span>
                <span className="font-mono text-[10px] text-paper-500 dark:text-paper-400 shrink-0 ml-2">{item.issuer}</span>
              </div>
            ))}
          </div>
        </div>

        {/* View All PDF Button */}
        <div className="text-center pt-8">
          <a
            href="/Kalyani_Agarawal_Certificates_and_Publications.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-medium text-paper-800 dark:text-paper-200 bg-white/80 dark:bg-paper-800 hover:bg-white border border-paper-300 dark:border-paper-700 rounded-xl shadow-sm hover:shadow transition-all"
          >
            <FileText className="w-4 h-4 text-tealAccent-600" />
            <span>View All Certificates & Publications Document (PDF)</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

      </div>
    </section>
  );
};
