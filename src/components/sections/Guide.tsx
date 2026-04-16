import React from 'react';
import { motion } from 'framer-motion';
import { Bluetooth, Search, Cloud, Globe, Zap, Cpu, MousePointer2 } from 'lucide-react';
import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from '../ui/progressive-carousel';

export const Guide = () => {
  const steps = [
    {
      id: 'hardware',
      title: "01. Hardware Integration",
      description: "Securely integrate the CosmoConnect AI Node with your telescope's optical assembly using our precision 1.25\" universal adapter.",
      icon: Cpu,
      img: "/input_file_0.png"
    },
    {
      id: 'neural',
      title: "02. Neural Link",
      description: "Establish an encrypted high-bandwidth connection between the node and the mobile application for real-time data streaming.",
      icon: Bluetooth,
      img: "/input_file_1.png"
    },
    {
      id: 'mission',
      title: "03. Mission Selection",
      description: "Deploy your node to active research missions, ranging from near-earth asteroid tracking to deep-sky spectral mapping.",
      icon: MousePointer2,
      img: "/input_file_2.png"
    },
    {
      id: 'capture',
      title: "04. Automated Acquisition",
      description: "The node assumes autonomous control of image acquisition, utilizing multi-spectral sensors for high-fidelity data capture.",
      icon: Zap,
      img: "/input_file_3.png"
    },
    {
      id: 'edge',
      title: "05. Edge AI Processing",
      description: "On-device neural networks perform real-time plate solving and initial object classification directly at the observation site.",
      icon: Search,
      img: "/input_file_4.png"
    },
    {
      id: 'sync',
      title: "06. Cloud Synchronization",
      description: "Processed astronomical data is securely uploaded to our global cloud network for distributed scientific validation.",
      icon: Cloud,
      img: "/input_file_5.png"
    },
    {
      id: 'active',
      title: "07. Research Node Active",
      description: "Your telescope is now a verified node in India's first distributed observatory, contributing to global scientific research.",
      icon: Globe,
      img: "/input_file_6.png"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full liquid-glass mb-4"
          >
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] font-space">The Transformation</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4 uppercase font-display">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">CosmoConnect Works</span>
          </h2>
          <p className="text-white/40 text-lg font-light max-w-2xl mx-auto font-sans">
            A simple 7-step process to transform your amateur telescope into a scientific research node.
          </p>
        </div>

        <div className="relative">
          <ProgressSlider vertical={false} activeSlider='hardware' className="w-full">
            <SliderContent className="relative w-full aspect-[16/9] md:aspect-[21/8] overflow-hidden rounded-[32px] border border-white/10 liquid-glass">
              {steps.map((step) => (
                <SliderWrapper key={step.id} value={step.id}>
                  <div className="relative w-full h-full">
                    <img
                      className='w-full h-full object-cover opacity-30 scale-105 hover:scale-100 transition-transform duration-[2000ms]'
                      src={step.img}
                      alt={step.description}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row md:items-end gap-6"
                      >
                        <span className="text-8xl md:text-[12rem] font-bold text-white/10 font-display leading-[0.7] tracking-tighter">
                          0{steps.indexOf(step) + 1}
                        </span>
                        <div className="space-y-4">
                          <h3 className="text-4xl md:text-5xl font-bold text-white font-display uppercase tracking-tighter">{step.title.split('. ')[1] || step.title}</h3>
                          <p className="text-lg md:text-xl text-white/60 font-light max-w-xl font-sans leading-relaxed border-l border-blue-500/30 pl-6">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </SliderWrapper>
              ))}
            </SliderContent>

            <SliderBtnGroup className='mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3'>
              {steps.map((step, index) => (
                <SliderBtn
                  key={step.id}
                  value={step.id}
                  className='text-left cursor-pointer p-4 rounded-2xl liquid-glass transition-all hover:bg-white/5 group'
                  progressBarClass='bg-blue-500/30 h-full rounded-2xl'
                >
                  <div className="relative z-10">
                    <h4 className='text-[8px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-1 font-space'>
                      Step 0{index + 1}
                    </h4>
                    <p className='text-xs text-white/80 font-bold font-display group-hover:text-white transition-colors truncate'>{step.id.charAt(0).toUpperCase() + step.id.slice(1)}</p>
                  </div>
                </SliderBtn>
              ))}
            </SliderBtnGroup>
          </ProgressSlider>
        </div>
      </div>
    </section>
  );
};
