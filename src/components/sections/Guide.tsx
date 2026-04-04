import React from 'react';
import { motion } from 'framer-motion';
import { Bluetooth, Search, Cloud, Globe, Zap, Cpu, MousePointer2 } from 'lucide-react';

export const Guide = () => {
  const steps = [
    {
      title: "Step 1",
      description: "Attach the CosmoConnect Node to your telescope eyepiece.",
      icon: Cpu
    },
    {
      title: "Step 2",
      description: "Connect the device to the mobile app via Bluetooth.",
      icon: Bluetooth
    },
    {
      title: "Step 3",
      description: "Select observation mode or scheduled capture.",
      icon: MousePointer2
    },
    {
      title: "Step 4",
      description: "Device captures sky images automatically.",
      icon: Zap
    },
    {
      title: "Step 5",
      description: "AI analyzes celestial objects.",
      icon: Search
    },
    {
      title: "Step 6",
      description: "Data uploads to cloud network.",
      icon: Cloud
    },
    {
      title: "Step 7",
      description: "You become part of India's distributed observatory.",
      icon: Globe
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4 uppercase">
            How <span className="text-blue-400">CosmoConnect Works</span>
          </h2>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
            A simple 7-step process to transform your amateur telescope into a scientific research node.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[32px] bg-white/5 border border-white/10 relative group hover:border-blue-500/30 transition-colors"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
                {index + 1}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <step.icon className="text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
