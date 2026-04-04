import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export const Vision = () => {
  const roadmap = [
    { year: "2026", title: "Prototype deployment and beta testing." },
    { year: "2027", title: "Distributed telescope network pilot program." },
    { year: "2028", title: "Smart telescope hardware release." },
    { year: "2029", title: "Educational partnerships with institutions." },
    { year: "2030", title: "India's largest citizen astronomy network." }
  ];

  return (
    <section id="vision" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4 uppercase">
            Building India's <span className="text-purple-400">Astronomy Infrastructure</span>
          </h2>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
            Our long-term vision is to democratize space exploration through a national network of intelligent observation nodes.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {roadmap.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full">
                  <div className={`p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <Calendar size={14} />
                      <span>{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  </div>
                </div>
                
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-black border-4 border-purple-500/20 shrink-0 hidden md:flex">
                  <div className="w-4 h-4 rounded-full bg-purple-500" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
