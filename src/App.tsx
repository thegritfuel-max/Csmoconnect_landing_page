import React, { useEffect, useState } from 'react';
import { Starfield } from './components/ui/starfield-1';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Technology } from './components/sections/Technology';
import { Product } from './components/sections/Product';
import { Features } from './components/sections/Features';
import { AppFeatures } from './components/sections/AppFeatures';
import { AppDownload } from './components/sections/AppDownload';
import { Guide } from './components/sections/Guide';
import { Onboarding } from './components/sections/Onboarding';
import { Research } from './components/sections/Research';
import { Vision } from './components/sections/Vision';
import { Courses } from './components/sections/Courses';
import { Contact } from './components/sections/Contact';
import { Dashboard } from './components/sections/Dashboard';
import { auth } from './firebase';
import { User } from 'firebase/auth';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
      setIsAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isAuthReady) {
      // GSAP Reveal animations for sections
      gsap.utils.toArray('section').forEach((section: any) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }
  }, [isAuthReady]);

  if (!isAuthReady) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="relative bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <Guide />
        <Onboarding />
        <Technology />
        <Product />
        <Features />
        <AppFeatures />
        <AppDownload />
        <Research />
        {user && <Dashboard />}
        <Courses />
        <Vision />
        <Contact />
      </div>

      <footer className="py-12 px-6 border-t border-white/5 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-white font-bold tracking-tighter text-2xl uppercase">CosmoConnect</span>
            <p className="text-white/40 text-sm font-light">© 2026 CosmoConnect. India's First AI Powered Distributed Telescope Network.</p>
          </div>
          <div className="flex items-center gap-8">
            {['Privacy', 'Terms', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-white/40 hover:text-white text-sm transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
