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
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between border-b border-white/5"
    >
      <div className="flex items-center gap-8">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Telescope className="text-white" size={18} />
          </div>
          <span className="text-white font-bold tracking-tighter text-xl uppercase">CosmoConnect</span>
        </a>
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/60 hover:text-white text-xs font-medium transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Removed Sign In and Download App buttons */}
      </div>
    </motion.nav>
  );
};
