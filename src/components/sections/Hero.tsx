import React from 'react';
import { CinematicHero } from '../ui/cinematic-hero';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen">
      <CinematicHero 
        brandName="CosmoConnect"
        tagline1="India's First AI Powered"
        tagline2="Distributed Telescope Network"
        cardHeading="CosmoConnect, redefined."
        cardDescription={
          <>
            <span className="text-white font-semibold">CosmoConnect</span> transforms small amateur telescopes into intelligent AI powered space observation nodes, building a national cloud-connected network.
          </>
        }
        metricValue={1000}
        metricLabel="Active Nodes"
        ctaHeading="Join the Network."
        ctaDescription="Connect your telescope to India's first distributed observation network and contribute to real scientific discoveries."
      />
    </section>
  );
};
