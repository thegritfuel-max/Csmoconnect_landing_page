import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Camera, Wifi, Zap, Shield, Smartphone } from 'lucide-react';
import { FeatureCard } from '../ui/grid-feature-cards';
import { cn } from '../../lib/utils';

const features = [
  {
    title: "AI Smart Eyepiece",
    icon: Cpu,
    description: "A plug-and-play device that fits into any standard telescope eyepiece, instantly adding AI capabilities."
  },
  {
    title: "4K CMOS Sensor",
    icon: Camera,
    description: "High-sensitivity sensor optimized for low-light astronomical imaging with real-time noise reduction."
  },
  {
    title: "Global Connectivity",
    icon: Wifi,
    description: "Built-in 5G and Wi-Fi 6 support for seamless cloud synchronization and remote control."
  },
  {
    title: "Edge AI Processing",
    icon: Zap,
    description: "On-device neural engine for instant object detection and autonomous tracking."
  },
  {
    title: "Secure Data Link",
    icon: Shield,
    description: "End-to-end encrypted communication ensuring your scientific observations are protected."
  },
  {
    title: "Mobile Integration",
    icon: Smartphone,
    description: "Control your telescope and view live enhancements directly from the CosmoConnect app."
  }
];

export const Product = () => {
  return (
    <section id="product" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter uppercase">
            COSMOCONNECT <span className="text-blue-500">SMART TELESCOPE NODE</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Our hardware node is designed to be compatible with almost any amateur telescope, bringing professional-grade AI capabilities to your backyard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/10 rounded-3xl overflow-hidden bg-white/[0.02]">
          {features.map((feature, i) => (
            <FeatureCard 
              key={i} 
              feature={feature} 
              className={cn(
                "border-white/10",
                i % 3 !== 2 && "lg:border-r",
                i < 3 && "lg:border-b",
                i % 2 !== 1 && "md:border-r",
                i < 4 && "md:border-b"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
