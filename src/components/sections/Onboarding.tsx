import React from 'react';
import { OnboardingChecklist } from '../ui/onboarding-checklist';

export const Onboarding = () => {
  const checklistData = {
    title: "Get Started - It only takes 10 minutes",
    description: "Prepare your CosmoConnect Node for the first observation mission.",
    items: [
      { id: 1, text: "CosmoConnect Node Hardware" },
      { id: 2, text: "Telescope with 1.25\" or 2\" Eyepiece" },
      {
        id: 3,
        text: "CosmoConnect Mobile App",
        helperText: "Don't have the app yet?",
        helperLink: { href: "#", text: "Download here" },
      },
      {
        id: 4,
        text: "Stable WiFi or 4G/5G Connection",
        helperText: "Need help with connectivity?",
        helperLink: { href: "#", text: "Support" },
      },
      { id: 5, text: "Clear Sky Visibility" },
    ],
    videoThumbnailUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200",
    videoUrl: "https://www.youtube.com/embed/8pbpg9Yr4rs",
  };

  return (
    <section id="onboarding" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <OnboardingChecklist
          title={checklistData.title}
          description={checklistData.description}
          items={checklistData.items}
          videoThumbnailUrl={checklistData.videoThumbnailUrl}
          videoUrl={checklistData.videoUrl}
        />
      </div>
    </section>
  );
};
