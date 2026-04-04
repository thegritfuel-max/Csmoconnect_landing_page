import React from 'react';
import { HorizonHeroSection } from '../ui/horizon-hero-section';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Download, ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen">
      <HorizonHeroSection />
      
      {/* Overlay content for the hero section to match CosmoConnect branding */}
      <div className="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Using a placeholder for the logo as I don't have the actual asset URL yet, 
              but I'll use a styled div that looks like a logo if the image fails */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-3xl animate-pulse"></div>
            <img 
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/cosmoconnect-logo.png" 
              alt="CosmoConnect Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] relative z-10"
              onError={(e) => {
                // Fallback to a styled representation if image is missing
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none">
               <div className="w-32 h-32 rounded-full border-2 border-purple-500/50 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-blue-400/30 animate-spin-slow"></div>
               </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center px-4 pointer-events-auto max-w-4xl"
        >
          <h2 className="text-xl md:text-2xl font-light tracking-[0.4em] text-purple-300 mb-4 uppercase">
            India's First AI Powered Distributed Telescope Network
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light mb-12 leading-relaxed max-w-3xl mx-auto">
            CosmoConnect transforms small amateur telescopes into intelligent AI powered space observation nodes, building a national cloud-connected network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 rounded-full group">
              Download App
              <Download className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 rounded-full">
              Explore Technology
              <ChevronRight className="ml-2" size={20} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
