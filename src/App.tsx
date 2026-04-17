import React, { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
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
import { SquishyPricing } from './components/ui/squishy-pricing';
import { Contact } from './components/sections/Contact';
import { WorldMap } from './components/ui/map';
import { CinematicFooter } from './components/ui/motion-footer';
import { ThemeProvider } from 'next-themes';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setIsAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  if (!isAuthReady) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className="relative bg-black min-h-screen overflow-x-hidden selection:bg-blue-500/30">
        <Navbar />
        
        <div className="relative z-10 bg-black rounded-b-[48px] shadow-2xl border-b border-white/5">
          <Hero />
          <Guide />
          <Onboarding />
          <Technology />
          <Product />
          
          <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto text-center mb-12">
               <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4 uppercase">
                Global <span className="text-blue-500">Observation Network</span>
              </h2>
              <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
                Connecting amateur astronomers across continents to create a giant distributed eye on the cosmos.
              </p>
            </div>
            <WorldMap
              dots={[
                {
                  start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
                  end: { lat: 19.076, lng: 72.8777, label: "Mumbai" },
                },
                {
                  start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
                  end: { lat: 12.9716, lng: 77.5946, label: "Bengaluru" },
                },
                {
                  start: { lat: 51.5074, lng: -0.1278, label: "London" },
                  end: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
                },
                {
                  start: { lat: 34.0522, lng: -118.2437, label: "Los Angeles" },
                  end: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
                },
                {
                  start: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
                  end: { lat: 12.9716, lng: 77.5946, label: "Bengaluru" },
                },
              ]}
            />
          </section>

          <Features />
          <AppFeatures />
          <AppDownload />
          <SquishyPricing />
          <Research />
          <Courses />
          <Vision />
          <Contact />
        </div>

        <CinematicFooter />
      </main>
    </ThemeProvider>
  );
}
