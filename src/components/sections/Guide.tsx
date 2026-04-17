import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Telescope, Cloud, Database, Cpu, Share2, CheckCircle2 } from 'lucide-react';

export const Guide = () => {
  const steps = [
    {
      title: "Connection",
      description: "Establish an encrypted high-bandwidth connection between the node and the mobile application for real-time data streaming.",
      icon: Smartphone,
    },
    {
      title: "Calibration",
      description: "Auto-calibrate your telescope's position using plate solving and AI-driven alignment for precise targeting.",
      icon: Telescope,
    },
    {
      title: "Capture",
      description: "Initiate smart exposure sequences targeting deep-sky objects or solar system events autonomously.",
      icon: Cpu,
    },
    {
      title: "Processing",
      description: "Real-time image stacking and noise reduction processed directly on the edge node hardware.",
      icon: Database,
    },
    {
      title: "Analysis",
      description: "On-device neural networks scan for transients, asteroids, or anomalous light curves for immediate detection.",
      icon: Database,
    },
    {
      title: "Sync",
      description: "Processed astronomical data is securely uploaded to our global cloud network for distributed validation.",
      icon: Cloud,
    },
    {
      title: "Ready",
      description: "Your telescope is now a verified research node contributing to global scientific discoveries.",
      icon: Share2,
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-black relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4 uppercase">
            How <span className="text-purple-500">CosmoConnect Works</span>
          </h2>
          <p className="text-white/40 text-lg font-light max-w-2xl mx-auto">
            A simple 7-step process to transform your amateur telescope into a scientific research node.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Step Marker */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border border-purple-500 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                   <span className="text-purple-500 text-sm font-bold">{index + 1}</span>
                </div>

                {/* Content Card */}
                <div className={`flex-1 ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-20 text-left md:text-right' : 'md:pl-20 text-left'}`}>
                  <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all group hover:bg-white/[0.05]">
                    <div className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <step.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-white/40 text-base font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Empty spacer for desktop symmetry */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
