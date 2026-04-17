import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Download, Play, Smartphone, Telescope } from "lucide-react";
import { cn } from "../../lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";

interface CinematicHeroProps {
  brandName: string;
  tagline1: string;
  tagline2: string;
  cardHeading: string;
  cardDescription: React.ReactNode;
  metricValue: number;
  metricLabel: string;
  ctaHeading: string;
  ctaDescription: string;
  founders: string[];
}

export const CinematicHero = ({
  brandName,
  tagline1,
  tagline2,
  cardHeading,
  cardDescription,
  metricValue,
  metricLabel,
  ctaHeading,
  ctaDescription,
  founders,
}: CinematicHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements - Subtler */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-purple-600/10 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        {/* Simplified and Centered Content */}
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20"
            >
              <Telescope className="text-white" size={32} />
            </motion.div>
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">{tagline1}</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-tight font-display">
                {brandName}
                <span className="block text-purple-500">{tagline2}</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
                {ctaDescription}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://cosmoconnect.app/download" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl"
            >
              <span>Download App</span>
              <Download size={20} />
            </a>
            
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex items-center gap-4 px-10 py-5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={16} className="fill-white text-white ml-1" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-white">Watch Demo</span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-black border-white/10 overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/8pbpg9Yr4rs?autoplay=1" 
                    title="CosmoConnect Demo" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex flex-col items-center gap-4 pt-12 border-t border-white/5">
            <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-mono">Visionary Founders</p>
            <div className="flex items-center gap-16">
              {founders.map((founder, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl font-bold text-white uppercase tracking-tight">{founder}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
