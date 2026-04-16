import React from 'react';
import { ScrollGlobe } from '../ui/landing-page';

export const Features = () => {
  const sections = [
    {
      id: "why-choose",
      badge: "Why CosmoConnect",
      title: "Why Choose",
      subtitle: "CosmoConnect?",
      description: "CosmoConnect is India's first cloud-connected distributed telescope network that transforms small amateur telescopes into intelligent AI powered space observation nodes.",
      align: "left" as const,
      features: [
        { title: "AI Powered Sky Observation", description: "Advanced AI image processing for real-time celestial object identification." },
        { title: "Connect in Minutes", description: "Easy-to-use hardware and software integration for any amateur telescope." }
      ],
      actions: [
        { label: "Explore Technology", variant: "primary" as const, onClick: () => console.log("Explore clicked") }
      ]
    },
    {
      id: "network",
      badge: "Global Network",
      title: "Distributed",
      subtitle: "Observation Nodes",
      description: "Connect your telescope to a national network of observation nodes. By distributing the workload, we can achieve high-fidelity imaging that was previously only possible with professional observatories.",
      align: "center" as const,
      features: [
        { title: "Cloud Sync", description: "Real-time synchronization of astronomical data across the network." },
        { title: "Edge Processing", description: "Local AI processing reduces bandwidth and improves response time." }
      ]
    },
    {
      id: "science",
      badge: "Citizen Science",
      title: "Real Scientific",
      subtitle: "Contribution",
      description: "Amateur astronomers contribute to real scientific discoveries, from asteroid tracking to supernova detection. Your observations help build a massive database for researchers across India.",
      align: "left" as const,
      features: [
        { title: "Research Data", description: "Contribute to peer-reviewed astronomical datasets." },
        { title: "Collaboration", description: "Work with professional astronomers on specific research projects." }
      ]
    },
    {
      id: "future",
      badge: "Future Ready",
      title: "The Future of",
      subtitle: "Space Exploration",
      description: "CosmoConnect is building the future of distributed space observation. Join a community of thousands of enthusiasts and researchers dedicated to exploring the final frontier together.",
      align: "center" as const,
      actions: [
        { label: "Download App", variant: "primary" as const, onClick: () => console.log("Download clicked") },
        { label: "Join the Community", variant: "secondary" as const, onClick: () => console.log("Join clicked") }
      ]
    }
  ];

  return (
    <section id="features" className="relative">
      <ScrollGlobe 
        sections={sections}
        className="bg-black"
      />
    </section>
  );
};
