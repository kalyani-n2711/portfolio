import React from 'react';
import { Github, Linkedin, Mail, Phone, Box, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 py-12 border-t border-paper-200 dark:border-paper-800 bg-white/50 dark:bg-paper-950/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Column — Branding */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 font-serif font-bold text-paper-900 dark:text-white">
            <span>Kalyani Agarwal</span>
            <span className="text-xs font-mono font-normal text-tealAccent-700 dark:text-tealAccent-400">· Portfolio 2026</span>
          </div>
          <p className="text-xs font-mono text-paper-500 dark:text-paper-400">
            B.Tech AI & DS (Minor in ML) · Amrita Vishwa Vidyapeetham · CGPA: 9.33
          </p>
        </div>

        {/* Middle Column — Social Icons */}
        <div className="flex items-center gap-4 text-paper-600 dark:text-paper-400">
          <a
            href="https://github.com/kalyani-n2711"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg hover:bg-paper-200 dark:hover:bg-paper-800 hover:text-tealAccent-700 dark:hover:text-tealAccent-400 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://huggingface.co/kalyanikittu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hugging Face Profile"
            className="p-2 rounded-lg hover:bg-paper-200 dark:hover:bg-paper-800 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors"
          >
            <Box className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/kalyani-agarawal-3585612a7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg hover:bg-paper-200 dark:hover:bg-paper-800 hover:text-tealAccent-700 dark:hover:text-tealAccent-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="tel:8630007237"
            aria-label="Phone Call"
            className="p-2 rounded-lg hover:bg-paper-200 dark:hover:bg-paper-800 hover:text-tealAccent-700 dark:hover:text-tealAccent-400 transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href="mailto:agarwalkalyani001@gmail.com"
            aria-label="Send Email"
            className="p-2 rounded-lg hover:bg-paper-200 dark:hover:bg-paper-800 hover:text-tealAccent-700 dark:hover:text-tealAccent-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right Column — Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-paper-200/80 dark:bg-paper-800/80 hover:bg-tealAccent-700 hover:text-white dark:hover:bg-tealAccent-600 text-paper-700 dark:text-paper-300 transition-all shadow-sm flex items-center gap-1.5 text-xs font-mono"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
