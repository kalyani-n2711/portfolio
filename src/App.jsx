import React, { useState, useEffect } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Coursework } from './components/Coursework';
import { ResearchPublications } from './components/ResearchPublications';
import { Patents } from './components/Patents';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { JourneyTimeline } from './components/JourneyTimeline';
import { TechnicalWriting } from './components/TechnicalWriting';
import { ResumeModal } from './components/ResumeModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [isDark, setIsDark] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="relative min-h-screen text-paper-900 dark:text-paper-100 bg-paper-texture selection:bg-tealAccent-500 selection:text-white transition-colors duration-300">
      {/* Background Interactive Ambient Canvas */}
      <BackgroundCanvas isDark={isDark} />

      {/* Navigation Header */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="relative z-10 space-y-12">
        <Hero isDark={isDark} onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <Education />
        <ResearchPublications />
        <Patents />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <JourneyTimeline />
        <Coursework />
        <TechnicalWriting />
        <Contact />
      </main>

      {/* Resume Viewer Lightbox Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
