import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, GraduationCap, Building2, Smartphone, Database, Telescope } from 'lucide-react';

export const Pricing = () => {
  const plans = [
    {
      id: 1,
      title: "1. Astronomy Courses",
      subtitle: "(Primary Focus)",
      description: "Paid online courses in telescope operation, astrophotography, and space science.",
      price: "₹499 — ₹2,999",
      unit: "per course",
      icon: GraduationCap,
      color: "blue"
    },
    {
      id: 2,
      title: "2. School & Institutional Packages",
      subtitle: "(Primary Focus)",
      description: "STEAM astronomy kits including courses, node software, teacher training, and curriculum integration.",
      price: "~₹9,999",
      unit: "per school/year",
      icon: Building2,
      color: "purple"
    },
    {
      id: 3,
      title: "3. Pro Research Subscription",
      description: "Advanced AI detection tools, research features, and premium node capabilities for serious amateurs.",
      price: "~₹499",
      unit: "per month",
      icon: Zap,
      color: "orange"
    },
    {
      id: 4,
      title: "4. Data API Access",
      description: "Paid access to crowdsourced astronomical datasets for universities and research organizations.",
      icon: Database,
      color: "green"
    },
    {
      id: 5,
      title: "5. Smart Telescope Hardware",
      subtitle: "(Future Revenue)",
      description: "Affordable Made-in-India smart telescopes sold to households and schools through education procurement programs.",
      icon: Telescope,
      color: "cyan"
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 text-3xl font-bold mb-4 uppercase tracking-wider">Revenue Strategy</h2>
          <p className="text-white/60 max-w-3xl mx-auto text-lg">
            CosmoConnect follows a multi-revenue model (EdTech + SaaS + B2B + API + Hardware) to ensure long-term sustainability while keeping entry affordable for students and educators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center gap-4 hover:border-orange-500/30 transition-colors text-center"
            >
              <div className={`p-3 rounded-2xl bg-${plan.color}-500/10 text-${plan.color}-400`}>
                <plan.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex flex-col">
                  {plan.title}
                  {plan.subtitle && <span className="text-sm text-white/40 font-normal">{plan.subtitle}</span>}
                </h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                {plan.description}
              </p>
              {plan.price && (
                <div className="mt-auto pt-6 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">{plan.price}</span>
                  <span className="text-xs text-white/40">{plan.unit}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
