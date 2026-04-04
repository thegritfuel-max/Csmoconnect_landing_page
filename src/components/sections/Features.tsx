import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Smartphone, Users, Zap, Globe, Shield, Microscope } from 'lucide-react';

export const Features = () => {
  const benefits = [
    {
      title: "AI Powered Observation",
      description: "Automated object detection and image enhancement using edge AI.",
      icon: Cpu,
      color: "text-purple-400",
      bg: "bg-purple-500/10"
    },
    {
      title: "Cloud Distributed Network",
      description: "Connect your telescope to a national network of observation nodes.",
      icon: Cloud,
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      title: "Mobile First Control",
      description: "Manage your entire observation workflow from your smartphone.",
      icon: Smartphone,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10"
    },
    {
      title: "Citizen Science",
      description: "Contribute real data to astronomical research and studies.",
      icon: Users,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10"
    },
    {
      title: "Real-time Stacking",
      description: "Instant image processing for clearer views of deep space objects.",
      icon: Zap,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10"
    },
    {
      title: "Global Visibility",
      description: "Access observation data from telescopes across different locations.",
      icon: Globe,
      color: "text-green-400",
      bg: "bg-green-500/10"
    },
    {
      title: "Secure Data Pipeline",
      description: "Encrypted upload and storage of your astronomical captures.",
      icon: Shield,
      color: "text-red-400",
      bg: "bg-red-500/10"
    },
    {
      title: "Research Grade Data",
      description: "High quality datasets suitable for academic and scientific use.",
      icon: Microscope,
      color: "text-orange-400",
      bg: "bg-orange-500/10"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4 uppercase">
            Why Choose <span className="text-purple-400">CosmoConnect</span>
          </h2>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
            Our platform provides professional-grade astronomical tools to everyone, from students to researchers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${benefit.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <benefit.icon className={benefit.color} size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
