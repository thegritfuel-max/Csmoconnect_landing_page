import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Bluetooth, Search, Calendar, Layers, Cloud, BookOpen, LayoutDashboard, Microscope } from 'lucide-react';

export const AppFeatures = () => {
  const features = [
    {
      title: "Live Telescope Connection",
      description: "Connect the CosmoConnect Node using Bluetooth and monitor capture status directly from your phone.",
      icon: Bluetooth
    },
    {
      title: "AI Galaxy Detection",
      description: "Our trained computer vision models automatically identify galaxies and celestial structures from captured frames.",
      icon: Search
    },
    {
      title: "Smart Capture Scheduler",
      description: "Schedule automated observations based on celestial visibility and weather conditions.",
      icon: Calendar
    },
    {
      title: "Image Stacking Engine",
      description: "Combine multiple frames to reduce noise and enhance clarity similar to professional astrophotography workflows.",
      icon: Layers
    },
    {
      title: "Cloud Data Sync",
      description: "Upload observations to secure cloud storage where distributed processing improves dataset quality.",
      icon: Cloud
    },
    {
      title: "Learning Integration",
      description: "Complete astronomy courses while performing real observation tasks.",
      icon: BookOpen
    },
    {
      title: "Observation Dashboard",
      description: "Track captured objects, observation history, and personal contribution statistics.",
      icon: LayoutDashboard
    },
    {
      title: "Research Participation",
      description: "Users can opt into scientific programs contributing observation data to citizen science initiatives.",
      icon: Microscope
    }
  ];

  return (
    <section id="app-features" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
              POWERFUL <span className="text-blue-400">SOFTWARE PLATFORM</span>
            </h2>
            <p className="text-white/60 text-lg font-light">
              The CosmoConnect mobile platform manages telescope connection, data capture, AI processing, and learning modules.
            </p>
          </div>
          <div className="hidden md:block">
             <Smartphone className="text-blue-400 opacity-20" size={120} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
