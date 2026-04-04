import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, CheckCircle2, Cloud, Shield, Zap } from 'lucide-react';
import { Button } from '../ui/button';

export const AppDownload = () => {
  const capabilities = [
    "Connect telescope hardware",
    "Capture sky images",
    "Detect celestial objects",
    "Learn astronomy",
    "Join research programs",
    "Build observation portfolio"
  ];

  const supports = [
    { text: "Android APK available", icon: Smartphone },
    { text: "Low storage requirement", icon: Zap },
    { text: "Offline capture support", icon: Shield },
    { text: "Secure cloud sync", icon: Cloud }
  ];

  return (
    <section id="download" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[48px] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-5 hidden lg:block">
            <Smartphone size={400} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-tight">
                GET STARTED WITH <br />
                <span className="text-blue-400">COSMOCONNECT</span>
              </h2>
              <p className="text-white/60 text-lg font-light mb-10 max-w-md">
                Download the CosmoConnect mobile app to begin your astronomy journey and connect your telescope.
              </p>

              <div className="space-y-4 mb-10">
                <p className="text-white font-bold text-sm uppercase tracking-widest mb-4">What you can do with the app</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 className="text-blue-400 shrink-0" size={18} />
                      <span className="text-sm font-light">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button size="lg" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white border-none">
                Download APK
                <Download className="ml-2" size={20} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {supports.map((support, i) => (
                <div key={i} className="p-6 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-sm flex flex-col gap-4">
                  <support.icon className="text-blue-400" size={32} />
                  <span className="text-white/80 font-medium">{support.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
