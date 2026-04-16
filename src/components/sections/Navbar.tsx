import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/button';
import { auth, googleProvider, signInWithPopup, signOut } from '../../firebase';
import { User } from 'firebase/auth';
import { Telescope } from 'lucide-react';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 50], ['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']);
  const backdropBlur = useTransform(scrollY, [0, 50], ['blur(0px)', 'blur(12px)']);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => setUser(u));
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const navLinks = [
    { name: 'Technology', href: '#technology' },
    { name: 'Product', href: '#product' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Research', href: '#research' },
    { name: 'Courses', href: '#courses' },
    { name: 'Vision', href: '#vision' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-8 py-3 flex items-center justify-between rounded-full border border-white/10 liquid-glass"
    >
      <div className="flex items-center gap-12">
        <a href="#" className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-lg overflow-hidden liquid-glass flex items-center justify-center group-hover:scale-110 transition-transform tech-border">
            <img 
              src="/input_file_1.png" 
              alt="CosmoConnect Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-white font-bold tracking-tighter text-xl uppercase font-display hidden xl:block">CosmoConnect</span>
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/40 hover:text-white text-[9px] font-bold transition-colors uppercase tracking-[0.3em] font-mono"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-3 px-3 py-1 rounded-sm bg-blue-500/5 border border-blue-500/10">
          <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[8px] font-mono text-blue-400 font-bold uppercase tracking-widest">Live_Feed_Active</span>
        </div>
        <button className="group relative px-6 py-2 bg-white text-black text-[10px] font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 font-space uppercase tracking-widest">
           Join Network
        </button>
      </div>
    </motion.nav>
  );
};
