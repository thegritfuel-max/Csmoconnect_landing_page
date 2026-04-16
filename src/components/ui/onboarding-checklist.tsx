"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, PlayCircle } from "lucide-react";
import { cn } from "../../lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";

// Define the type for a single checklist item
interface ChecklistItem {
  id: number | string;
  text: string;
  helperText?: string;
  helperLink?: {
    href: string;
    text: string;
  };
}

// Define the props for the main component
export interface OnboardingChecklistProps {
  title: string;
  description: string;
  items: ChecklistItem[];
  videoThumbnailUrl: string;
  videoUrl: string;
  className?: string;
}

/**
 * A responsive and animated onboarding checklist component.
 * @param title - The main heading for the checklist.
 * @param description - A short description displayed below the title.
 * @param items - An array of checklist items to display.
 * @param videoThumbnailUrl - The URL for the video thumbnail image.
 * @param videoUrl - The URL for the video to be played in a modal.
 * @param className - Optional additional class names for the container.
 */
export const OnboardingChecklist = ({
  title,
  description,
  items,
  videoThumbnailUrl,
  videoUrl,
  className,
}: OnboardingChecklistProps) => {
  const containerVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(
        "w-full max-w-4xl mx-auto bg-black/40 backdrop-blur-md text-white border border-white/10 rounded-2xl shadow-2xl p-8 overflow-hidden",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Title and Checklist */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold tracking-tight text-blue-400">{title}</h2>
          <p className="mt-2 text-white/60">{description}</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {items.map((item) => (
              <motion.li key={item.id} variants={itemVariants} className="flex flex-col">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-sm font-medium">{item.text}</span>
                </div>
                {item.helperText && item.helperLink && (
                  <div className="ml-8 mt-1 text-xs text-white/40">
                    {item.helperText}{" "}
                    <a
                      href={item.helperLink.href}
                      className="text-blue-400 underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm"
                    >
                      {item.helperLink.text}
                    </a>
                  </div>
                )}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Side: Video Thumbnail */}
        <motion.div
          variants={itemVariants} // Re-using item variant for a nice slide-in effect
          className="relative group rounded-lg overflow-hidden cursor-pointer w-full aspect-video border border-white/10"
        >
          <Dialog>
            <DialogTrigger asChild>
              <div className="w-full h-full">
                <img
                  src={videoThumbnailUrl}
                  alt="Video guide thumbnail"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <PlayCircle className="h-16 w-16 text-white/80 transform transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 border-0 bg-black">
              <div className="aspect-video">
                <iframe
                  src={videoUrl}
                  title="Onboarding Video Guide"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </motion.div>
  );
};
