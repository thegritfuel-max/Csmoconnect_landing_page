import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Download, Play, Smartphone } from "lucide-react";
import { cn } from "../../lib/utils";
import EnergyBeam from "./energy-beam";
import { TextEffect } from "./text-effect";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mouse move effect for the card
      const handleMouseMove = (e: MouseEvent) => {
        if (!cardRef.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;

        gsap.to(cardRef.current, {
          rotateY: x * 10,
          rotateX: -y * 10,
          duration: 0.5,
          ease: "power2.out",
        });

        if (phoneRef.current) {
          gsap.to(phoneRef.current, {
            x: x * 20,
            y: y * 20,
            duration: 0.8,
            ease: "power3.out",
          });
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[150vh] bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        
        {/* Network Lines Effect */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="rgba(59, 130, 246, 0.5)" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network-grid)" />
        </svg>
      </div>

      {/* Sticky Content */}
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 overflow-hidden">
        <motion.div style={{ y, opacity, scale }} className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-24 h-24 rounded-2xl overflow-hidden liquid-glass p-2 tech-border group"
              >
                <img src="/input_file_1.png" alt="Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </motion.div>
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-blue-500/10 border border-blue-500/20"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.3em] font-mono">PROTOCOL: COSMO_ACTIVE</span>
                </motion.div>
                <div className="flex items-center gap-3">
                   <div className="h-[1px] w-8 bg-white/20" />
                   <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase">{tagline1}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-[14vw] lg:text-[11vw] font-bold text-white tracking-tighter leading-[0.75] font-display uppercase italic">
                <motion.span 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="block text-glow"
                >
                  {brandName}
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-100 to-purple-500 text-glow-purple"
                >
                  {tagline1}
                </motion.span>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-lg md:text-xl text-white/40 font-light max-w-lg leading-relaxed font-sans border-l-2 border-white/10 pl-6"
              >
                {ctaDescription}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              <a 
                href="https://cosmoconnect.app/download" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span className="relative z-10 font-space uppercase tracking-wider text-sm">Download App</span>
                <Download className="relative z-10" size={18} />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity" />
              </a>
              
              <div className="flex items-center gap-4 px-6 py-4 rounded-full liquid-glass group cursor-pointer hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={16} className="fill-white text-white ml-1" />
                </div>
                <span className="text-sm font-bold font-space uppercase tracking-widest">Watch Demo</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="flex flex-col gap-4 border-l-2 border-blue-500/20 pl-6"
            >
              <div className="flex items-center gap-2">
                <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-mono">Archive Founders</p>
                <div className="h-[1px] flex-grow bg-white/5" />
              </div>
              <div className="flex items-center gap-6">
                {founders.map((founder, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-xs font-mono text-blue-400/60 mb-1">ID: CC_00{i+1}</span>
                    <span className="text-base font-bold text-white uppercase tracking-wider font-display">{founder}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="pt-10 flex flex-col gap-6"
            >
              <div className="flex items-center gap-16 border-t border-white/10 pt-10">
                <div>
                  <div className="text-4xl font-bold text-white font-display uppercase tracking-tighter">{metricValue}+</div>
                  <div className="text-[10px] text-blue-400 uppercase tracking-[0.3em] font-mono mt-1">Satellite Nodes</div>
                </div>
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-white/10 overflow-hidden ring-4 ring-white/5 grayscale hover:grayscale-0 transition-all">
                      <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-black bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white ring-4 ring-white/5 font-mono">
                    LIVE
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">
                <span className="animate-pulse">System Status: Nominal</span>
                <span>/</span>
                <span>Coordinates: 28.6139° N, 77.2090° E</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Card */}
          <div className="perspective-2000 hidden lg:block">
            <motion.div
              ref={cardRef}
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full aspect-[4/5] rounded-[48px] liquid-glass group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card Content */}
              <div className="absolute inset-0 p-16 flex flex-col justify-between z-10">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center liquid-glass">
                    <Smartphone className="text-blue-400" size={32} />
                  </div>
                  <h3 className="text-5xl font-bold text-white leading-[1.1] font-display">
                    {cardHeading}
                  </h3>
                  <div className="text-xl text-white/50 font-light leading-relaxed font-sans">
                    {cardDescription}
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-2xl liquid-glass">
                    <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center p-2">
                       <img src="/input_file_2.png" alt="QR Code" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold font-space uppercase tracking-widest text-blue-400">Scan to Download</p>
                    <p className="text-xs text-white/40 leading-tight">Available for iOS and Android devices. Join 2,000+ astronomers.</p>
                  </div>
                </div>
              </div>

              {/* Floating Phone Mockup */}
              <div
                ref={phoneRef}
                className="absolute -right-24 -bottom-24 w-[450px] h-[650px] bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-[70px] border border-white/10 backdrop-blur-3xl shadow-2xl rotate-12 group-hover:rotate-6 transition-transform duration-1000"
              >
                <div className="absolute inset-4 rounded-[54px] bg-black/60 border border-white/10 overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-black rounded-b-3xl" />
                  <img 
                    src="/input_file_0.png" 
                    className="w-full h-full object-cover opacity-80" 
                    alt="App Mockup"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-12 left-8 right-8 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/40">
                      <div className="w-6 h-6 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-bold text-white font-display">Active Node: TN-0842</p>
                      <p className="text-sm text-blue-400 font-space uppercase tracking-widest">Connected & Syncing</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Global Ticker */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white/5 backdrop-blur-md border-t border-white/10 overflow-hidden flex items-center">
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-[10px] font-mono text-blue-400/60 uppercase tracking-[0.5em]">CosmoConnect Protocol v4.0.2</span>
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">Distributed Intelligence Active</span>
              <span className="text-[10px] font-mono text-purple-400/60 uppercase tracking-[0.5em]">Node Calibration Complete</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
