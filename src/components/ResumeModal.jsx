import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-paper-950/80 backdrop-blur-md">
        
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
          onClick={onClose}
        />

        {/* Main Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl h-[85vh] bg-white dark:bg-paper-900 rounded-2xl shadow-2xl border border-paper-200 dark:border-paper-800 flex flex-col overflow-hidden z-10"
        >
          {/* Modal Header */}
          <div className="px-6 py-4 border-b border-paper-200 dark:border-paper-800 flex items-center justify-between bg-paper-50 dark:bg-paper-950/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-tealAccent-700 text-white flex items-center justify-center font-bold text-xs">
                CV
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-paper-900 dark:text-white">
                  Kalyani Agarwal — Curriculum Vitae
                </h3>
                <p className="text-xs font-mono text-paper-500 dark:text-paper-400">
                  B.Tech AI & DS · Amrita Vishwa Vidyapeetham · CGPA 9.33
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/CV_KALYANI_AGARWAL.pdf"
                download
                className="px-3.5 py-1.5 text-xs font-medium text-white bg-tealAccent-700 hover:bg-tealAccent-800 rounded-lg flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-paper-500 hover:text-paper-900 dark:hover:text-white hover:bg-paper-200 dark:hover:bg-paper-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body with Embed & Highlights Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden">
            {/* PDF Viewport iframe */}
            <div className="lg:col-span-8 bg-paper-100 dark:bg-paper-950 p-2 h-full">
              <iframe
                src="/CV_KALYANI_AGARWAL.pdf"
                title="Kalyani Agarwal Resume PDF"
                className="w-full h-full rounded-xl border border-paper-200 dark:border-paper-800"
              />
            </div>

            {/* Resume Highlights Sidebar */}
            <div className="lg:col-span-4 p-6 bg-paper-50 dark:bg-paper-900 space-y-6 overflow-y-auto border-t lg:border-t-0 lg:border-l border-paper-200 dark:border-paper-800">
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-tealAccent-700 dark:text-tealAccent-400 uppercase tracking-wider font-bold">
                  Academic Profile
                </h4>
                <div className="space-y-2 text-xs font-mono text-paper-700 dark:text-paper-300">
                  <div className="flex justify-between py-1 border-b border-paper-200 dark:border-paper-800">
                    <span className="text-paper-500">Degree</span>
                    <span className="font-semibold">B.Tech AI & DS</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-paper-200 dark:border-paper-800">
                    <span className="text-paper-500">Minor</span>
                    <span className="font-semibold">Machine Learning</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-paper-200 dark:border-paper-800">
                    <span className="text-paper-500">Institution</span>
                    <span className="font-semibold">Amrita Vidyapeetham</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-paper-200 dark:border-paper-800">
                    <span className="text-paper-500">CGPA</span>
                    <span className="font-bold text-terracotta-600">9.33 / 10</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono text-tealAccent-700 dark:text-tealAccent-400 uppercase tracking-wider font-bold">
                  Key Research Summary
                </h4>
                <div className="space-y-2 text-xs text-paper-700 dark:text-paper-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-tealAccent-600 mt-0.5 shrink-0" />
                    <span>Published 1st Author PCOS Diagnosis ultrasound paper</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-tealAccent-600 mt-0.5 shrink-0" />
                    <span>Research Intern at IIT Tirupati SEVA Lab & IIT Roorkee</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-tealAccent-600 mt-0.5 shrink-0" />
                    <span>Oracle Cloud OCI Certified AI Foundations Associate</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-paper-200 dark:border-paper-800">
                <a
                  href="/CV_KALYANI_AGARWAL.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 text-xs font-mono font-semibold text-paper-800 dark:text-paper-200 bg-paper-200/80 dark:bg-paper-800 hover:bg-paper-200 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Open in Full Browser Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
