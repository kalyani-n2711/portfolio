import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Box } from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      await emailjs.send(
        'service_npq7ymk',
        'template_f9s206h',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'agarwalkalyani001@gmail.com'
        },
        'eszt1KYOYlDOdpWuj'
      );

      setLoading(false);
      setSentSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error("EmailJS Send Error:", err);
      setLoading(false);
      setErrorMessage("Failed to send message via automated gateway. Please email directly at agarwalkalyani001@gmail.com");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10 sm:mb-12"
        >
          <span className="font-mono text-xs text-tealAccent-700 dark:text-tealAccent-400 uppercase tracking-widest px-2.5 py-1 rounded bg-tealAccent-50 dark:bg-tealAccent-950 border border-tealAccent-200 dark:border-tealAccent-800">
            11 / Get In Touch
          </span>
          <h2 className="text-xl sm:text-3xl font-serif font-bold text-paper-900 dark:text-white">
            Connect & Collaborate
          </h2>
          <div className="h-px bg-paper-200 dark:bg-paper-800 flex-1 ml-4 hidden sm:block" />
        </motion.div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column — Contact Info & Social Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-5 sm:p-8 rounded-2xl border border-paper-200 dark:border-paper-800 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-paper-900 dark:text-white">
                  Let's <span className="italic text-tealAccent-700 dark:text-tealAccent-400 font-normal">Connect</span>
                </h3>
                <p className="text-xs sm:text-sm font-sans text-paper-600 dark:text-paper-300 pt-2 leading-relaxed">
                  Open to SDE, SWE, and AI Engineer internships and full-time opportunities in Big Tech and AI labs (joining immediately).
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-3.5 text-xs font-mono">
                {/* Email */}
                <div className="p-3.5 rounded-xl bg-paper-100/70 dark:bg-paper-800/60 border border-paper-200 dark:border-paper-700 flex items-center gap-3">
                  <Mail className="w-4 h-4 text-tealAccent-600 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-paper-400 dark:text-paper-500 uppercase">Primary Email</div>
                    <a href="mailto:agarwalkalyani001@gmail.com" className="text-paper-900 dark:text-white font-semibold hover:text-tealAccent-600 transition-colors break-all">
                      agarwalkalyani001@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="p-3.5 rounded-xl bg-paper-100/70 dark:bg-paper-800/60 border border-paper-200 dark:border-paper-700 flex items-center gap-3">
                  <Phone className="w-4 h-4 text-tealAccent-600 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-paper-400 dark:text-paper-500 uppercase">Phone / WhatsApp</div>
                    <a href="tel:8630007237" className="text-paper-900 dark:text-white font-semibold hover:text-tealAccent-600 transition-colors break-all">
                      +91 8630007237
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="p-3.5 rounded-xl bg-paper-100/70 dark:bg-paper-800/60 border border-paper-200 dark:border-paper-700 flex items-center gap-3">
                  <Github className="w-4 h-4 text-tealAccent-600 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-paper-400 dark:text-paper-500 uppercase">GitHub Repository</div>
                    <a href="https://github.com/kalyani-n2711" target="_blank" rel="noopener noreferrer" className="text-paper-900 dark:text-white font-semibold hover:text-tealAccent-600 transition-colors break-all">
                      github.com/kalyani-n2711
                    </a>
                  </div>
                </div>

                {/* Hugging Face */}
                <div className="p-3.5 rounded-xl bg-paper-100/70 dark:bg-paper-800/60 border border-paper-200 dark:border-paper-700 flex items-center gap-3">
                  <Box className="w-4 h-4 text-terracotta-600 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-paper-400 dark:text-paper-500 uppercase">Hugging Face Profile</div>
                    <a href="https://huggingface.co/kalyanikittu" target="_blank" rel="noopener noreferrer" className="text-paper-900 dark:text-white font-semibold hover:text-tealAccent-600 transition-colors break-all">
                      huggingface.co/kalyanikittu
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="p-3.5 rounded-xl bg-paper-100/70 dark:bg-paper-800/60 border border-paper-200 dark:border-paper-700 flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-tealAccent-600 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-paper-400 dark:text-paper-500 uppercase">LinkedIn Profile</div>
                    <a href="https://linkedin.com/in/kalyani-agarawal-3585612a7" target="_blank" rel="noopener noreferrer" className="text-paper-900 dark:text-white font-semibold hover:text-tealAccent-600 transition-colors break-all">
                      linkedin.com/in/kalyani-agarawal-3585612a7
                    </a>
                  </div>
                </div>

                {/* Locations */}
                <div className="p-3.5 rounded-xl bg-paper-100/70 dark:bg-paper-800/60 border border-paper-200 dark:border-paper-700 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-terracotta-600 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-paper-400 dark:text-paper-500 uppercase">Locations</div>
                    <div className="text-paper-800 dark:text-paper-200 font-medium">
                      Academic: Faridabad, HR · Hometown: Haridwar, UK
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Direct Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 glass-card p-5 sm:p-8 rounded-2xl border border-paper-200 dark:border-paper-800"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="text-base sm:text-lg font-serif font-bold text-paper-900 dark:text-white mb-2">
                Send a Direct Message
              </h4>

              {sentSuccess && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Message sent successfully! Kalyani will respond shortly.</span>
                </div>
              )}

              {errorMessage && (
                <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-paper-700 dark:text-paper-300">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Dr. Alex Rivera"
                    className="w-full px-3.5 py-2.5 text-xs font-sans rounded-xl bg-paper-100 dark:bg-paper-800 border border-paper-300 dark:border-paper-700 text-paper-900 dark:text-white focus:outline-none focus:border-tealAccent-600 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-paper-700 dark:text-paper-300">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 text-xs font-sans rounded-xl bg-paper-100 dark:bg-paper-800 border border-paper-300 dark:border-paper-700 text-paper-900 dark:text-white focus:outline-none focus:border-tealAccent-600 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-paper-700 dark:text-paper-300">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="SDE / SWE / AI Engineer Role / Project Inquiry"
                  className="w-full px-3.5 py-2.5 text-xs font-sans rounded-xl bg-paper-100 dark:bg-paper-800 border border-paper-300 dark:border-paper-700 text-paper-900 dark:text-white focus:outline-none focus:border-tealAccent-600 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-paper-700 dark:text-paper-300">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hello Kalyani, I saw your portfolio and would like to discuss an opportunity..."
                  className="w-full px-3.5 py-2.5 text-xs font-sans rounded-xl bg-paper-100 dark:bg-paper-800 border border-paper-300 dark:border-paper-700 text-paper-900 dark:text-white focus:outline-none focus:border-tealAccent-600 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-xs font-semibold text-white bg-tealAccent-700 hover:bg-tealAccent-800 dark:bg-tealAccent-600 dark:hover:bg-tealAccent-700 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
