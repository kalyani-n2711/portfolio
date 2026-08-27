import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Sparkles, MapPin, Award, CheckCircle2 } from 'lucide-react';

export const About = () => {
  const stats = [
    { label: "Cumulative CGPA", val: "9.33 / 10", note: "Academic Top Tier" },
    { label: "Published Paper", val: "1st Author", note: "PCOS Diagnostics" },
    { label: "AI & Software Projects", val: "10+ Built", note: "Full-Stack & Computer Vision" },
    { label: "AI/ML Internships", val: "IIT-R, IIT-T & Amrita", note: "Computer Vision & ML" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-mono text-xs text-tealAccent-700 dark:text-tealAccent-400 uppercase tracking-widest px-2.5 py-1 rounded bg-tealAccent-50 dark:bg-tealAccent-950 border border-tealAccent-200 dark:border-tealAccent-800">
            01 / Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-paper-900 dark:text-white">
            About Me
          </h2>
          <div className="h-px bg-paper-200 dark:bg-paper-800 flex-1 ml-4" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-xl space-y-1.5 border border-paper-200 dark:border-paper-800 hover:border-tealAccent-500/50 transition-all"
                >
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-tealAccent-700 dark:text-tealAccent-400 block">
                    {stat.val}
                  </span>
                  <div className="text-xs font-semibold text-paper-800 dark:text-paper-200">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-mono text-paper-500 dark:text-paper-400">
                    {stat.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Currently Exploring Box */}
            <div className="glass-card p-6 rounded-xl border border-paper-200 dark:border-paper-800 space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-paper-900 dark:text-white">
                <Sparkles className="w-4 h-4 text-terracotta-600" />
                <span>Currently Exploring & Deepening</span>
              </div>
              <ul className="space-y-2 text-xs text-paper-700 dark:text-paper-300 font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-tealAccent-600 mt-0.5 shrink-0" />
                  <span>Agentic AI Architectures & Multi-Agent Frameworks (LangChain / Hugging Face)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-tealAccent-600 mt-0.5 shrink-0" />
                  <span>Multimodal Explainable AI (SHAP, LIME, Grad-CAM, Hybrid Attention U-Net)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-tealAccent-600 mt-0.5 shrink-0" />
                  <span>Medical AI Diagnostics & Autonomous 6-DOF Robotic Ultrasound Trajectories</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-tealAccent-600 mt-0.5 shrink-0" />
                  <span>Google Earth Engine Automated Satellite Precipitation Data Pipelines</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Narrative Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl space-y-5 text-sm sm:text-base leading-relaxed text-paper-700 dark:text-paper-300 font-sans"
          >
            <p>
              I am <strong>Kalyani Agarwal</strong>, a B.Tech student in <strong>Artificial Intelligence & Data Science</strong> (Minor in Machine Learning) at <strong>Amrita Vishwa Vidyapeetham</strong>, Faridabad, Haryana. I maintain a cumulative CGPA of <strong>9.33 / 10</strong> while actively engaging in academic and applied AI research.
            </p>
            <p>
              My research journey spans <strong>Computer Vision, Medical AI Diagnostics, Explainable AI (XAI), and Remote Sensing</strong>. As a first-author published researcher, I investigated clinical data and ultrasound image processing for Polycystic Ovary Syndrome (PCOS) diagnosis, and have co-authored frameworks for Alzheimer's classification (SVD+SVM+Fourier) and carbon-fibre composite defect segmentation (IEEE submission).
            </p>
            <p>
              Currently, I am serving as an <strong>AI/ML Intern at IIT Roorkee</strong> (under Dr. Anshul Yadav), an <strong>AI/ML Intern at SEVA Lab, IIT Tirupati</strong> (under Dr. Chalavadi Vishnu), and an <strong>AI/ML Intern at Amrita Vishwa Vidyapeetham</strong> (building MockMate AI). I combine technical rigor with practical engineering—having built 10+ projects spanning offline AI interview coaches, visual product search, and full-stack REST API analytics tools.
            </p>

            <div className="pt-4 border-t border-paper-200 dark:border-paper-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-paper-600 dark:text-paper-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-terracotta-600" />
                <span>Academic: Faridabad, Haryana · Hometown: Haridwar, Uttarakhand</span>
              </div>
              <div className="text-tealAccent-700 dark:text-tealAccent-400 font-semibold">
                Open for AI & Software Engineer Opportunities (Joining Immediately)
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
