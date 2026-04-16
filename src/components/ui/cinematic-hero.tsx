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
      </div>

      {/* Sticky Content */}
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 overflow-hidden">
        <motion.div style={{ y, opacity, scale }} className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-medium text-blue-400 uppercase tracking-widest">{tagline1}</span>
            </motion.div>

            <div className="space-y-4">
              <div className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
                <TextEffect per='char' preset='fade' delay={0.4}>
                  {brandName}
                </TextEffect>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  <TextEffect per='word' preset='slide' delay={0.6}>
                    {tagline2}
                  </TextEffect>
                </span>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg text-white/60 max-w-md font-light leading-relaxed"
              >
                {ctaDescription}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-12">
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={20} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="pt-8 flex items-center gap-12 border-t border-white/5"
            >
              <div>
                <div className="text-3xl font-bold text-white">{metricValue}+</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">{metricLabel}</div>
              </div>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-white/10 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-black bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                  +2k
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Card */}
          <div className="perspective-1000 hidden lg:block">
            <motion.div
              ref={cardRef}
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full aspect-[4/5] rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-2xl overflow-hidden group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card Content */}
              <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <Smartphone className="text-blue-400" size={24} />
                  </div>
                  <h3 className="text-4xl font-bold text-white leading-tight">
                    {cardHeading}
                  </h3>
                  <div className="text-white/60 font-light leading-relaxed">
                    {cardDescription}
                  </div>
                </div>

                {/* Removed App Store and Google Play buttons */}
              </div>

              {/* Floating Phone Mockup */}
              <div
                ref={phoneRef}
                className="absolute -right-20 -bottom-20 w-[400px] h-[600px] bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-[60px] border border-white/10 backdrop-blur-3xl shadow-2xl rotate-12 group-hover:rotate-6 transition-transform duration-700"
              >
                <div className="absolute inset-4 rounded-[44px] bg-black/40 border border-white/5 overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl" />
                  <div className="p-8 pt-12 space-y-6">
                    <div className="w-full h-32 rounded-2xl bg-white/5 animate-pulse" />
                    <div className="space-y-3">
                      <div className="w-3/4 h-4 rounded-full bg-white/10" />
                      <div className="w-1/2 h-4 rounded-full bg-white/5" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-square rounded-2xl bg-white/5" />
                      <div className="aspect-square rounded-2xl bg-white/5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
