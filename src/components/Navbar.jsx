import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight, Sparkles } from 'lucide-react';

export const Navbar = ({ isDark, setIsDark, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Research', href: '#research' },
    { name: 'Patents', href: '#patents' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Coursework', href: '#coursework' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-white/85 dark:bg-paper-950/85 backdrop-blur-md shadow-sm border-b border-paper-200 dark:border-paper-800'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2 text-base sm:text-lg font-serif font-semibold tracking-tight text-paper-900 dark:text-white"
        >
          <span className="w-8 h-8 rounded-lg bg-tealAccent-700 dark:bg-tealAccent-600 text-white flex items-center justify-center font-sans font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
            KA
          </span>
          <span className="hidden xs:inline-block">
            Kalyani <span className="text-tealAccent-700 dark:text-tealAccent-500 font-sans font-light text-xs sm:text-sm">Agarwal</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-2 py-1 text-xs font-medium text-paper-700 hover:text-tealAccent-700 dark:text-paper-300 dark:hover:text-tealAccent-400 rounded transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-tealAccent-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
            </a>
          ))}
        </nav>

        {/* Right CTA Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Status Badge */}
          <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[11px] font-mono border border-emerald-300 dark:border-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to SDE, SWE & AI Engineer Roles</span>
          </span>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg text-paper-600 hover:text-paper-900 dark:text-paper-300 dark:hover:text-white bg-paper-200/60 dark:bg-paper-800/60 hover:bg-paper-200 dark:hover:bg-paper-800 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-tealAccent-700 hover:bg-tealAccent-800 dark:bg-tealAccent-600 dark:hover:bg-tealAccent-700 rounded-lg shadow-sm hover:shadow transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="xl:hidden p-2 rounded-lg text-paper-700 dark:text-paper-300 hover:bg-paper-200 dark:hover:bg-paper-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white/95 dark:bg-paper-900/95 backdrop-blur-xl border-b border-paper-200 dark:border-paper-800 px-4 py-4 space-y-2 shadow-lg"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-medium text-paper-700 dark:text-paper-300 hover:text-tealAccent-700 dark:hover:text-tealAccent-400 hover:bg-paper-100 dark:hover:bg-paper-800 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-paper-200 dark:border-paper-800 space-y-2">
              <div className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-mono text-center">
                Open to SDE, SWE & AI Engineer Roles (Big Tech & AI - Internships & Full-Time)
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-white bg-tealAccent-700 rounded-lg"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
