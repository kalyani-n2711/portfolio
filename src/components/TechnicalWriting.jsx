import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export const TechnicalWriting = () => {
  const articles = [
    {
      id: "blog-1",
      title: "How I Organize My Learning as an AI Student",
      date: "June 06, 2026",
      readTime: "6 min read",
      category: "Learning & Productivity",
      excerpt: "A detailed practical look at how I structure learning in AI & Data Science, balance coursework, research papers, hands-on projects, active recall, and priority stacking.",
      link: "/blogs/ai-student-learning.html",
      active: true
    },
    {
      id: "blog-2",
      title: "What I Learned Building My First Medical Computer Vision Model",
      date: "Coming Soon",
      readTime: "8 min read",
      category: "Computer Vision Research",
      excerpt: "Key lessons from dataset preparation, contour detection, image augmentation, heatmaps, model evaluation, and debugging for ultrasound image diagnostics.",
      link: "#",
      active: false
    },
    {
      id: "blog-3",
      title: "Demystifying Multimodal Explainable AI (XAI) in Structural Monitoring",
      date: "Coming Soon",
      readTime: "10 min read",
      category: "Explainable AI",
      excerpt: "Understanding how SHAP, LIME, and Grad-CAM interpret deep neural networks and Attention U-Net models for real-world engineering integrity applications.",
      link: "#",
      active: false
    }
  ];

  return (
    <section id="blog" className="py-20 relative">
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
            10 / Technical Writing
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-paper-900 dark:text-white">
            Articles & Research Notes
          </h2>
          <div className="h-px bg-paper-200 dark:bg-paper-800 flex-1 ml-4" />
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <motion.article
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-paper-200 dark:border-paper-800 hover:border-tealAccent-500/50 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-paper-500 dark:text-paper-400">
                  <span className="px-2 py-0.5 rounded bg-paper-100 dark:bg-paper-800 text-tealAccent-700 dark:text-tealAccent-400">
                    {art.category}
                  </span>
                  <span>{art.date}</span>
                </div>

                <h3 className="text-lg font-serif font-bold text-paper-900 dark:text-white leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm font-sans text-paper-600 dark:text-paper-300 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-paper-200 dark:border-paper-800">
                {art.active ? (
                  <a
                    href={art.link}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-tealAccent-700 dark:text-tealAccent-400 hover:text-tealAccent-800 transition-colors group"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-paper-400 dark:text-paper-500 italic">
                    Upcoming Publication →
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
