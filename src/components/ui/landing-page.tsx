import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Globe from "./globe";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface Action {
  label: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
}

interface Section {
  id: string;
  badge?: string;
  title: string;
  subtitle?: string;
  description: string;
  align?: "left" | "center" | "right";
  features?: Feature[];
  actions?: Action[];
}

interface ScrollGlobeProps {
  sections: Section[];
  className?: string;
}

export const ScrollGlobe = ({ sections, className }: ScrollGlobeProps) => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div ref={containerRef} className={cn("relative min-h-screen", className)}>
      {/* Fixed Globe Background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1200px] h-[1200px] opacity-30">
            <Globe />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => { sectionRefs.current[index] = el; }}
            className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className={cn(
                "max-w-2xl w-full space-y-8",
                section.align === "center" && "mx-auto text-center",
                section.align === "right" && "ml-auto text-right"
              )}
            >
              {section.badge && (
                <div className={cn(
                  "inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass",
                  section.align === "center" && "mx-auto"
                )}>
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] font-space">
                    {section.badge}
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] font-display">
                  {section.title}
                  {section.subtitle && (
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{section.subtitle}</span>
                  )}
                </h2>
                <p className="text-xl text-white/40 font-light leading-relaxed font-sans max-w-xl">
                  {section.description}
                </p>
              </div>

              {section.features && (
                <div className={cn(
                  "grid grid-cols-1 md:grid-cols-2 gap-8 pt-12",
                  section.align === "center" && "text-left"
                )}>
                  {section.features.map((feature, i) => (
                    <div key={i} className="space-y-3 p-6 rounded-3xl liquid-glass group hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-3 text-blue-400">
                        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                          <CheckCircle2 size={16} />
                        </div>
                        <span className="font-bold text-white font-display">{feature.title}</span>
                      </div>
                      <p className="text-sm text-white/40 leading-relaxed font-sans">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {section.actions && (
                <div className={cn(
                  "flex flex-wrap gap-6 pt-12",
                  section.align === "center" && "justify-center"
                )}>
                  {section.actions.map((action, i) => (
                    <button
                      key={i}
                      onClick={action.onClick}
                      className={cn(
                        "px-10 py-5 rounded-full font-bold transition-all flex items-center gap-3 font-space uppercase tracking-widest text-sm hover:scale-105 active:scale-95",
                        action.variant === "primary"
                          ? "bg-white text-black hover:bg-white/90"
                          : "liquid-glass text-white hover:bg-white/5"
                      )}
                    >
                      {action.label}
                      {action.variant === "primary" && <ArrowRight size={18} />}
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Navigation Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 space-y-4 hidden md:block">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => {
              sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-4 focus:outline-none"
          >
            <span className={cn(
              "text-xs font-bold uppercase tracking-widest transition-all opacity-0 group-hover:opacity-100",
              activeSection === index ? "text-blue-400 opacity-100" : "text-white/40"
            )}>
              {section.badge || section.id}
            </span>
            <div className={cn(
              "w-2 h-2 rounded-full transition-all",
              activeSection === index ? "bg-blue-500 scale-150" : "bg-white/20 group-hover:bg-white/40"
            )} />
          </button>
        ))}
      </div>
    </div>
  );
};
