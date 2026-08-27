import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Calendar, Award, BookOpen, CheckCircle, ShieldCheck, Users } from 'lucide-react';

export const Education = () => {
  const educationList = [
    {
      institution: "Amrita Vishwa Vidyapeetham",
      location: "Faridabad, Haryana, India",
      degree: "B.Tech in Artificial Intelligence & Data Science",
      minor: "Minor in Machine Learning",
      period: "2024 – 2028 (Expected)",
      score: "CGPA: 9.33 / 10",
      status: "3rd Year Undergraduate",
      icon: GraduationCap,
      highlights: [
        "Consistent academic top-performer with CGPA 9.33 / 10",
        "Minor Specialization in Advanced Machine Learning",
        "AI Intern at Amrita Vishwa Vidyapeetham",
        "Published First-Author Research paper during undergraduate studies"
      ],
      courses: [
        "Computer Vision", "Machine Learning", "Deep Learning", "Natural Language Processing",
        "Data Structures & Algorithms", "Database Management Systems", "Big Data Analytics",
        "Linear Algebra & Optimization", "Probability & Stochastic Processes"
      ]
    },
    {
      institution: "St. Mary's Senior Secondary School",
      location: "Jwalapur, Haridwar, Uttarakhand, India",
      degree: "Senior Secondary Education (Class XII & X)",
      period: "Completed with Distinction",
      score: "High Academic Standing",
      status: "Secondary Education",
      icon: School,
      highlights: [
        "Strong foundation in Mathematics, Physics, and Computer Science",
        "Active participation in science exhibitions, competitions, and quizzes"
      ],
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"]
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="font-mono text-xs text-tealAccent-700 dark:text-tealAccent-400 uppercase tracking-widest px-2.5 py-1 rounded bg-tealAccent-50 dark:bg-tealAccent-950 border border-tealAccent-200 dark:border-tealAccent-800">
            02 / Academia & Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-paper-900 dark:text-white">
            Education & Leadership
          </h2>
          <div className="h-px bg-paper-200 dark:bg-paper-800 flex-1 ml-4" />
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationList.map((edu, idx) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-paper-200 dark:border-paper-800 flex flex-col justify-between space-y-6 hover:shadow-soft-elevated transition-all"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-tealAccent-100 dark:bg-tealAccent-950 text-tealAccent-700 dark:text-tealAccent-400 flex items-center justify-center shrink-0 border border-tealAccent-200 dark:border-tealAccent-800">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-paper-900 dark:text-white">
                          {edu.institution}
                        </h3>
                        <p className="text-xs font-mono text-paper-500 dark:text-paper-400">
                          {edu.location}
                        </p>
                      </div>
                    </div>

                    <span className="px-3 py-1 text-xs font-mono font-bold text-terracotta-700 dark:text-terracotta-400 bg-terracotta-50 dark:bg-terracotta-950/60 rounded-full border border-terracotta-200 dark:border-terracotta-800 shrink-0">
                      {edu.score}
                    </span>
                  </div>

                  {/* Degree info */}
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-paper-800 dark:text-paper-200">
                      {edu.degree}
                    </h4>
                    {edu.minor && (
                      <p className="text-xs font-mono text-tealAccent-700 dark:text-tealAccent-400">
                        ✦ {edu.minor}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-xs font-mono text-paper-500 dark:text-paper-400 pt-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                      <span>·</span>
                      <span className="text-paper-700 dark:text-paper-300">{edu.status}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2">
                    {edu.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-paper-700 dark:text-paper-300">
                        <CheckCircle className="w-3.5 h-3.5 text-tealAccent-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coursework Tags */}
                <div className="pt-4 border-t border-paper-200 dark:border-paper-800 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-paper-500 dark:text-paper-400">
                    <BookOpen className="w-3.5 h-3.5 text-tealAccent-600" />
                    <span>Relevant Coursework:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 text-[11px] font-mono text-paper-700 dark:text-paper-300 bg-paper-100 dark:bg-paper-800/80 rounded border border-paper-200 dark:border-paper-700"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dedicated Positions of Responsibility & Student Leadership Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 sm:p-8 rounded-2xl border border-paper-200 dark:border-paper-800 space-y-4 hover:border-tealAccent-500/50 transition-all"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-terracotta-100 dark:bg-terracotta-950 text-terracotta-700 dark:text-terracotta-400 flex items-center justify-center shrink-0 border border-terracotta-200 dark:border-terracotta-800">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-terracotta-700 dark:text-terracotta-400">
                  Positions of Responsibility & Student Leadership
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-paper-900 dark:text-white">
                  Treasurer — ORCA (College AI Club)
                </h3>
              </div>
            </div>

            <span className="px-3 py-1 text-xs font-mono font-bold text-tealAccent-800 dark:text-tealAccent-300 bg-tealAccent-100 dark:bg-tealAccent-950 rounded-full border border-tealAccent-200 dark:border-tealAccent-800">
              Amrita Vishwa Vidyapeetham · 2025 – Present
            </span>
          </div>

          <p className="text-sm font-sans text-paper-700 dark:text-paper-300 leading-relaxed">
            Served as Treasurer of ORCA, the official College AI Club at Amrita Vishwa Vidyapeetham. Responsible for managing club finances, accounts, budget allocations, event reimbursements, sponsor funds, and financial planning for college AI hackathons, technical speaker sessions, and hands-on workshops.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-paper-100/70 dark:bg-paper-800/50 border border-paper-200 dark:border-paper-700 text-xs font-mono text-paper-700 dark:text-paper-300 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-tealAccent-600 shrink-0 mt-0.5" />
              <span>Managed Club Accounts, Reimbursements & Event Finances</span>
            </div>
            <div className="p-3 rounded-xl bg-paper-100/70 dark:bg-paper-800/50 border border-paper-200 dark:border-paper-700 text-xs font-mono text-paper-700 dark:text-paper-300 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-tealAccent-600 shrink-0 mt-0.5" />
              <span>Financial Planning for Hackathons & AI Workshops</span>
            </div>
            <div className="p-3 rounded-xl bg-paper-100/70 dark:bg-paper-800/50 border border-paper-200 dark:border-paper-700 text-xs font-mono text-paper-700 dark:text-paper-300 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-tealAccent-600 shrink-0 mt-0.5" />
              <span>Executive Committee Leadership in College AI Club (ORCA)</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
