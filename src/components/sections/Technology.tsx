import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Zap, Globe, Microscope, Database, Share2, Shield } from 'lucide-react';
import RadialOrbitalTimeline from '../ui/radial-orbital-timeline';

const timelineData = [
  {
    id: 1,
    title: "AI Analysis",
    date: "Real-time",
    content: "Our AI models process raw telescope data at the edge, identifying celestial objects and filtering atmospheric noise instantly.",
    category: "AI",
    icon: Zap,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Edge Computing",
    date: "Node Level",
    content: "Each telescope node performs local processing to reduce bandwidth and enable low-latency response to astronomical events.",
    category: "Hardware",
    icon: Cpu,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Cloud Sync",
    date: "Distributed",
    content: "Processed data is synchronized across the national network, creating a massive virtual telescope array for deep space imaging.",
    category: "Network",
    icon: Cloud,
    relatedIds: [1, 5],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Citizen Science",
    date: "Collaborative",
    content: "Amateur astronomers contribute to real scientific discoveries, from asteroid tracking to supernova detection.",
    category: "Community",
    icon: Globe,
    relatedIds: [2, 6],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 5,
    title: "Data Repository",
    date: "Open Access",
    content: "A centralized database of astronomical observations accessible to researchers and students across India.",
    category: "Research",
    icon: Database,
    relatedIds: [3, 7],
    status: "pending" as const,
    energy: 50,
  },
  {
    id: 6,
    title: "Network Security",
    date: "Encrypted",
    content: "Secure communication protocols protect the distributed network and ensure data integrity for scientific research.",
    category: "Security",
    icon: Shield,
    relatedIds: [4, 8],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 7,
    title: "Smart Scheduling",
    date: "AI Driven",
    content: "Intelligent observation scheduling optimizes network usage based on weather conditions and scientific priorities.",
    category: "Optimization",
    icon: Share2,
    relatedIds: [5],
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 8,
    title: "Scientific Output",
    date: "Publication",
    content: "Generating high-quality data for peer-reviewed publications and educational resources.",
    category: "Science",
    icon: Microscope,
    relatedIds: [6],
    status: "pending" as const,
    energy: 30,
  }
];

export const Technology = () => {
  return (
    <section id="technology" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter"
          >
            OUR CORE <span className="text-purple-400">TECHNOLOGY</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg max-w-3xl mx-auto font-light leading-relaxed"
          >
            CosmoConnect combines Artificial Intelligence, Edge Computing, and Cloud Infrastructure to create a distributed astronomical imaging network called CDTN (Cloud Distributed Telescope Network).
          </motion.p>
        </div>

        <div className="relative h-[600px] w-full mb-20">
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Powered Analysis",
              description: "Instead of relying on expensive observatories, we use AI to enhance images from small telescopes, achieving professional-grade results.",
              icon: Zap
            },
            {
              title: "Distributed Network",
              description: "Our CDTN architecture allows thousands of telescopes to work as one, providing continuous coverage of the night sky.",
              icon: Globe
            },
            {
              title: "Edge Intelligence",
              description: "Local processing at each node ensures that only meaningful data is transmitted, making the network highly efficient.",
              icon: Cpu
            }
          ].map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <tech.icon className="text-purple-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{tech.title}</h3>
              <p className="text-white/40 font-light leading-relaxed">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
