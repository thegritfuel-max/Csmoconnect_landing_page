import React from 'react';
import { motion } from 'framer-motion';

export const SquishyPricing = () => {
  return (
    <section className="bg-black px-4 py-24 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4 uppercase">
          REVENUE & <span className="text-purple-500">SUSTAINABILITY</span>
        </h2>
        <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
          Multi-revenue model designed for long-term growth and scientific impact.
        </p>
      </div>
      <div className="mx-auto flex w-fit flex-wrap justify-center gap-6">
          <PricingCard
            label="Astronomy Courses"
            monthlyPrice="₹499 — ₹2,999"
            description="Paid online courses in telescope operation, astrophotography, and space science."
            cta="Explore Courses"
            background="bg-purple-900/40 dark:bg-purple-900/40"
            BGComponent={BGComponent1}
            priceLabel="Per Course"
          />
          <PricingCard
            label="Institutional Packages"
            monthlyPrice="₹9,999"
            description="STEAM astronomy kits including courses, node software, teacher training, and curriculum integration."
            cta="Partner with us"
            background="bg-purple-600/40 dark:bg-purple-600/40"
            BGComponent={BGComponent2}
            priceLabel="Per Year"
          />
          <PricingCard
            label="Pro Research Subscription"
            monthlyPrice="₹499"
            description="Advanced AI detection tools, research features, and premium node capabilities for serious amateurs."
            cta="Subscribe"
            background="bg-purple-400/40 dark:bg-purple-400/40"
            BGComponent={BGComponent3}
            priceLabel="Per Month"
          />
        </div>
        
        <div className="max-w-4xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="p-8 rounded-[32px] bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">Data API Access</h3>
              <p className="text-white/40 text-sm font-light">Paid access to crowdsourced astronomical datasets for universities and research organizations.</p>
           </div>
           <div className="p-8 rounded-[32px] bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">Smart Telescope Hardware</h3>
              <p className="text-white/40 text-sm font-light">Affordable Made-in-India smart telescopes sold to households and schools (Future Revenue).</p>
           </div>
        </div>
      </section>
  );
};

const PricingCard = ({ label, monthlyPrice, description, cta, background, BGComponent, priceLabel }) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{ duration: 1, ease: "backInOut" }}
      variants={{ hover: { scale: 1.05 } }}
      className={`relative h-[450px] w-80 shrink-0 overflow-hidden rounded-[40px] p-8 ${background} border border-white/10 shadow-lg hover:shadow-xl transition-shadow`}
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-white border border-white/20">
          {label}
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{ hover: { scale: 1 } }}
          transition={{ duration: 1, ease: "backInOut" }}
          className="my-4 block origin-top-left font-bold text-3xl leading-[1.2]"
        >
          {monthlyPrice}<br />
          <span className="text-sm text-white/60 font-medium">{priceLabel}</span>
        </motion.span>
        <p className="text-sm text-white/70 font-light leading-relaxed">{description}</p>
      </div>
      <button className="absolute bottom-8 left-8 right-8 z-20 rounded-2xl border border-white/20 bg-white/10 py-3 text-center font-bold text-sm uppercase tracking-widest text-white backdrop-blur-md transition-all duration-200 hover:bg-white hover:text-black focus:outline-none">
        {cta}
      </button>
      <BGComponent />
    </motion.div>
  );
};

const BGComponent1 = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.5 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0"
  >
    <motion.circle
      variants={{ hover: { scaleY: 0.5, y: -25 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
      cx="160.5"
      cy="114.5"
      r="101.5"
      fill="rgba(255, 255, 255, 0.05)"
    />
    <motion.ellipse
      variants={{ hover: { scaleY: 2.25, y: -25 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
      cx="160.5"
      cy="265.5"
      rx="101.5"
      ry="43.5"
      fill="rgba(255, 255, 255, 0.05)"
    />
  </motion.svg>
);

const BGComponent2 = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.05 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0"
  >
    <motion.rect
      x="14"
      width="153"
      height="153"
      rx="15"
      fill="rgba(255, 255, 255, 0.05)"
      variants={{ hover: { y: 219, rotate: "90deg", scaleX: 2 } }}
      style={{ y: 12 }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
    />
    <motion.rect
      x="155"
      width="153"
      height="153"
      rx="15"
      fill="rgba(255, 255, 255, 0.05)"
      variants={{ hover: { y: 12, rotate: "90deg", scaleX: 2 } }}
      style={{ y: 219 }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
    />
  </motion.svg>
);

const BGComponent3 = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.25 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0"
  >
    <motion.path
      variants={{ hover: { y: -50 } }}
      transition={{ delay: 0.3, duration: 1, ease: "backInOut" }}
      d="M148.893 157.531C154.751 151.673 164.249 151.673 170.107 157.531L267.393 254.818C273.251 260.676 273.251 270.173 267.393 276.031L218.75 324.674C186.027 357.397 132.973 357.397 100.25 324.674L51.6068 276.031C45.7489 270.173 45.7489 260.676 51.6068 254.818L148.893 157.531Z"
      fill="rgba(255, 255, 255, 0.05)"
    />
    <motion.path
      variants={{ hover: { y: -50 } }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
      d="M148.893 99.069C154.751 93.2111 164.249 93.2111 170.107 99.069L267.393 196.356C273.251 202.213 273.251 211.711 267.393 217.569L218.75 266.212C186.027 298.935 132.973 298.935 100.25 266.212L51.6068 217.569C45.7489 211.711 45.7489 202.213 51.6068 196.356L148.893 99.069Z"
      fill="rgba(255, 255, 255, 0.05)"
    />
    <motion.path
      variants={{ hover: { y: -50 } }}
      transition={{ delay: 0.1, duration: 1, ease: "backInOut" }}
      d="M148.893 40.6066C154.751 34.7487 164.249 34.7487 170.107 40.6066L267.393 137.893C273.251 143.751 273.251 153.249 267.393 159.106L218.75 207.75C186.027 240.473 132.973 240.473 100.25 207.75L51.6068 159.106C45.7489 153.249 45.7489 143.751 51.6068 137.893L148.893 40.6066Z"
      fill="rgba(255, 255, 255, 0.05)"
    />
  </motion.svg>
);
