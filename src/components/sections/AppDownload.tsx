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
    <section id="download" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="liquid-glass rounded-[48px] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-5 hidden lg:block">
            <Smartphone size={400} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-[0.9] font-display">
                GET STARTED WITH <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">COSMOCONNECT</span>
              </h2>
              <p className="text-white/40 text-xl font-light mb-12 max-w-md font-sans">
                Download the CosmoConnect mobile app to begin your astronomy journey and connect your telescope.
              </p>

              <div className="space-y-6 mb-12">
                <p className="text-blue-400 font-bold text-[10px] uppercase tracking-[0.3em] font-space">What you can do with the app</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-4 text-white/60 group">
                      <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <CheckCircle2 className="text-blue-400" size={14} />
                      </div>
                      <span className="text-sm font-light font-sans">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8">
                <Button size="lg" className="w-full sm:w-auto px-10 py-7 bg-white text-black hover:bg-white/90 font-bold rounded-full border-none font-space uppercase tracking-widest text-sm transition-transform hover:scale-105 active:scale-95">
                  Download APK
                  <Download className="ml-2" size={20} />
                </Button>
                
                <div className="flex items-center gap-6 p-4 rounded-3xl liquid-glass">
                  <div className="w-20 h-20 bg-white rounded-xl p-1.5">
                    <div className="w-full h-full bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CosmoConnect')] bg-contain bg-no-repeat" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold font-space uppercase tracking-widest text-blue-400">Scan to Download</p>
                    <p className="text-[10px] text-white/40 leading-tight max-w-[120px]">Point your camera to scan and download.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {supports.map((support, i) => (
                <div key={i} className="p-8 rounded-[32px] liquid-glass flex flex-col gap-6 group hover:bg-white/5 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <support.icon className="text-blue-400" size={28} />
                  </div>
                  <span className="text-white/80 font-bold font-display text-lg">{support.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
