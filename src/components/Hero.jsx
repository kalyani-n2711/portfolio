import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, FileText, Github, Linkedin, Mail, Phone, Box, Sparkles, Award } from 'lucide-react';
import { Hero3D } from './Hero3D';
import { ComputerVisionPhoto } from './ComputerVisionPhoto';

export const Hero = ({ isDark, onOpenResume }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Editorial Text Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Top Opportunity Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-mono tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold">Open to SDE, SWE & AI Engineer Roles</span>
              <span className="text-terracotta-600 dark:text-terracotta-400 font-bold">· Internships & Full-Time (Big Tech & AI)</span>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-paper-900 dark:text-white tracking-tight leading-[1.1]">
                Kalyani <span className="italic font-normal text-tealAccent-700 dark:text-tealAccent-500">Agarwal</span>
              </h1>
              <p className="text-base sm:text-lg font-mono text-paper-600 dark:text-paper-400 max-w-2xl leading-relaxed">
                Software Engineer (SDE/SWE) · AI Engineer · Computer Vision · Full-Stack Systems
              </p>
            </div>

            {/* Editorial Bio Teaser */}
            <p className="text-sm sm:text-base text-paper-700 dark:text-paper-300 max-w-xl leading-relaxed font-sans">
              B.Tech Artificial Intelligence & Data Science (Minor in ML) at <strong>Amrita Vishwa Vidyapeetham</strong> (Faridabad) with <strong>9.33 CGPA</strong>. Published 1st-author researcher, AI/ML Intern at IIT Roorkee, IIT Tirupati SEVA Lab & Amrita. Building scalable full-stack software & AI platforms (MockMate AI, FAISS Visual Search, CycleGAN Handwriting Generator).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-3 text-xs sm:text-sm font-medium text-white bg-tealAccent-700 hover:bg-tealAccent-800 dark:bg-tealAccent-600 dark:hover:bg-tealAccent-700 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
              >
                <span>Explore Projects & Research</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 text-xs sm:text-sm font-medium text-paper-800 dark:text-paper-200 bg-white/80 dark:bg-paper-800/80 hover:bg-white dark:hover:bg-paper-800 border border-paper-300 dark:border-paper-700 rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-tealAccent-600" />
                <span>View Resume</span>
              </button>

              <a
                href="#coursework"
                className="px-4 py-3 text-xs sm:text-sm font-medium text-paper-600 dark:text-paper-400 hover:text-paper-900 dark:hover:text-white transition-colors"
              >
                Coursework →
              </a>
            </div>

            {/* Social Icons & Highlights */}
            <div className="pt-4 flex items-center gap-4 border-t border-paper-200 dark:border-paper-800 flex-wrap">
              <div className="flex items-center gap-2 text-paper-600 dark:text-paper-400">
                <a
                  href="https://github.com/kalyani-n2711"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  title="GitHub: github.com/kalyani-n2711"
                  className="p-2 rounded-lg hover:bg-paper-200 dark:hover:bg-paper-800 hover:text-tealAccent-700 dark:hover:text-tealAccent-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://huggingface.co/kalyanikittu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hugging Face Profile"
                  title="Hugging Face: huggingface.co/kalyanikittu"
                  className="p-2 rounded-lg hover:bg-paper-200 dark:hover:bg-paper-800 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors"
                >
                  <Box className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/kalyani-agarawal-3585612a7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                  className="p-2 rounded-lg hover:bg-paper-200 dark:hover:bg-paper-800 hover:text-tealAccent-700 dark:hover:text-tealAccent-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="tel:8630007237"
                  aria-label="Phone Number"
                  title="Phone: +91 8630007237"
                  className="p-2 rounded-lg hover:bg-paper-200 dark:hover:bg-paper-800 hover:text-tealAccent-700 dark:hover:text-tealAccent-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href="mailto:agarwalkalyani001@gmail.com"
                  aria-label="Send Email"
                  title="Email: agarwalkalyani001@gmail.com"
                  className="p-2 rounded-lg hover:bg-paper-200 dark:hover:bg-paper-800 hover:text-tealAccent-700 dark:hover:text-tealAccent-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="h-4 w-px bg-paper-300 dark:bg-paper-700 hidden sm:block" />

              <div className="flex items-center gap-4 text-xs font-mono text-paper-500 dark:text-paper-400">
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-terracotta-600" />
                  <span>1 Published Paper</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-tealAccent-500 animate-pulse" />
                  <span>AI/ML Intern @ IIT-R, IIT-T & Amrita</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — 3D Globe + Computer Vision Interactive Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center space-y-6"
          >
            {/* Background Three.js 3D Wireframe Globe */}
            <div className="absolute inset-0 -z-10 opacity-70">
              <Hero3D isDark={isDark} />
            </div>

            {/* Foreground CV Profile Photo */}
            <div className="w-full relative z-10 pt-4">
              <ComputerVisionPhoto />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
