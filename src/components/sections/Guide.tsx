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
      id: 'attach',
      title: "Step 1: Attach",
      description: "Attach the CosmoConnect Node to your telescope eyepiece.",
      icon: Cpu,
      img: "/input_file_0.png"
    },
    {
      id: 'connect',
      title: "Step 2: Connect",
      description: "Connect the device to the mobile app via Bluetooth.",
      icon: Bluetooth,
      img: "/input_file_1.png"
    },
    {
      id: 'select',
      title: "Step 3: Select",
      description: "Select observation mode or scheduled capture.",
      icon: MousePointer2,
      img: "/input_file_2.png"
    },
    {
      id: 'capture',
      title: "Step 4: Capture",
      description: "Device captures sky images automatically.",
      icon: Zap,
      img: "/input_file_3.png"
    },
    {
      id: 'analyze',
      title: "Step 5: Analyze",
      description: "AI analyzes celestial objects.",
      icon: Search,
      img: "/input_file_4.png"
    },
    {
      id: 'upload',
      title: "Step 6: Sync",
      description: "Data uploads to cloud network.",
      icon: Cloud,
      img: "/input_file_5.png"
    },
    {
      id: 'network',
      title: "Step 7: Join",
      description: "You become part of India's distributed observatory.",
      icon: Globe,
      img: "/input_file_6.png"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4 uppercase">
            How <span className="text-blue-400">CosmoConnect Works</span>
          </h2>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
            A simple 7-step process to transform your amateur telescope into a scientific research node.
          </p>
        </div>

        <div className="relative">
          <ProgressSlider vertical={false} activeSlider='attach' className="w-full">
            <SliderContent className="relative w-full aspect-[21/9] md:aspect-[21/7] overflow-hidden rounded-[40px] border border-white/10">
              {steps.map((step) => (
                <SliderWrapper key={step.id} value={step.id}>
                  <div className="relative w-full h-full">
                    <img
                      className='w-full h-full object-cover opacity-60'
                      src={step.img}
                      alt={step.description}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute bottom-12 left-12 right-12">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                          <step.icon size={24} />
                        </div>
                        <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-xl text-white/80 font-light max-w-2xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </SliderWrapper>
              ))}
            </SliderContent>

            <SliderBtnGroup className='mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4'>
              {steps.map((step) => (
                <SliderBtn
                  key={step.id}
                  value={step.id}
                  className='text-left cursor-pointer p-4 rounded-2xl bg-white/5 border border-white/10 transition-all hover:bg-white/10'
                  progressBarClass='bg-blue-500/20 h-full rounded-2xl'
                >
                  <div className="relative z-10">
                    <h4 className='text-xs font-bold text-blue-400 uppercase tracking-widest mb-1'>
                      {step.id}
                    </h4>
                    <p className='text-sm text-white/60 font-medium line-clamp-1'>{step.title}</p>
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
