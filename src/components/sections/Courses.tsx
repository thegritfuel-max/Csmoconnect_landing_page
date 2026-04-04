import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Clock, Star, PlayCircle } from 'lucide-react';
import { Button } from '../ui/button';

export const Courses = () => {
  const courses = [
    {
      title: "Introduction to Observational Astronomy",
      level: "Beginner",
      duration: "4 Weeks",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&q=80"
    },
    {
      title: "Telescope Optics and Maintenance",
      level: "Intermediate",
      duration: "6 Weeks",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80"
    },
    {
      title: "Digital Astrophotography Masterclass",
      level: "Advanced",
      duration: "8 Weeks",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="courses" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
              <GraduationCap size={14} />
              <span>CosmoConnect Academy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
              LEARN <span className="text-purple-400">ASTRONOMY</span>
            </h2>
            <p className="text-white/60 text-lg font-light">
              Master the skills of space observation through our structured learning modules designed for students and enthusiasts.
            </p>
          </div>
          <Button variant="ghost" className="border-white/10 text-white hover:bg-white/5">
            View All Courses
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-[32px] bg-white/5 border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="text-white" size={48} />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-widest">
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={12} fill="currentColor" />
                    <span className="text-xs font-bold">{course.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors">
                  {course.title}
                </h3>
                <div className="flex items-center gap-6 text-white/40 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} />
                    <span>12 Modules</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
