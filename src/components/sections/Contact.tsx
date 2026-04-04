import React from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Briefcase, GraduationCap, Cpu, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';

export const Contact = () => {
  const opportunities = [
    { text: "Research collaborations", icon: Briefcase },
    { text: "Educational partnerships", icon: GraduationCap },
    { text: "Hardware development", icon: Cpu },
    { text: "Student ambassador program", icon: User }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              CONTACT <span className="text-purple-400">COSMOCONNECT</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
              Interested in collaboration, research, or early access? We'd love to hear from you.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0">
                  <Mail className="text-purple-400" size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:cosmoconnect.ai@gmail.com" className="text-white text-lg font-medium hover:text-purple-400 transition-colors">
                    cosmoconnect.ai@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <User className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Founder</p>
                  <p className="text-white text-lg font-medium">Devansh Kadam</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full sm:w-auto">
              Contact Us
              <MessageSquare className="ml-2" size={20} />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 rounded-[40px] bg-white/5 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Opportunities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {opportunities.map((opp, i) => (
                <div key={i} className="p-6 rounded-3xl bg-black/40 border border-white/5 flex flex-col gap-4 hover:border-purple-500/30 transition-colors group">
                  <opp.icon className="text-purple-400 group-hover:scale-110 transition-transform" size={28} />
                  <span className="text-white/80 font-medium text-sm leading-tight">{opp.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
