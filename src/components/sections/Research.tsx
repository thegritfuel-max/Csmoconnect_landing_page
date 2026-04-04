import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Target, FileText, Award, Database, Zap } from 'lucide-react';

export const Research = () => {
  const achievements = [
    { text: "93.4% AI object detection accuracy", icon: Target },
    { text: "Galaxy detection ML model completed", icon: Zap },
    { text: "Working mobile application prototype", icon: Database },
    { text: "CDTN architecture designed", icon: FileText },
    { text: "STEAM learning framework created", icon: Award },
    { text: "National level research paper presented", icon: FileText },
    { text: "Grant funding under application", icon: Award }
  ];

  const researchWorks = [
    "Distributed astronomical imaging methodology",
    "AI based galaxy classification",
    "Noise reduction through multi frame stacking",
    "Citizen science data validation models"
  ];

  return (
    <section id="research" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Microscope size={14} />
              <span>Deep-Tech Initiative</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              SCIENTIFIC PROGRESS & <span className="text-indigo-400">DEVELOPMENT</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-10">
              CosmoConnect is being developed as a deep-tech research initiative combining astronomy, artificial intelligence, and distributed computing.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">Research Work</h3>
              <div className="grid grid-cols-1 gap-4">
                {researchWorks.map((work, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span className="text-sm font-light">{work}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-indigo-500/5 border border-indigo-500/10 rounded-[40px] p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Achievements</h3>
            <div className="space-y-6">
              {achievements.map((ach, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                    <ach.icon className="text-indigo-400" size={20} />
                  </div>
                  <span className="text-white/70 text-sm font-light">{ach.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
