import React from 'react';
import Image from 'next/image';

/**
 * PerfectWorkflowSection - A pixel-perfect clone of the "Perfect workflow for your business" section.
 * Featuring a two-column layout: feature list with dot grid icons on the left
 * and a diagrammatic schematic illustration on the right.
 */
const PerfectWorkflowSection: React.FC = () => {
  // Feature list data
  const featuresColumn1 = [
    { text: "24/7 Availability" },
    { text: "Seamless Appointment Booking" },
    { text: "Automated Pricing Estimates" },
    { text: "Lower Costs & Higher Efficiency" },
  ];

  const featuresColumn2 = [
    { text: "Instant Customer Assistance" },
    { text: "Lead Nurturing & Follow Ups" },
    { text: "Consistent Service Quality" },
  ];

  // Dot Grid Icon Component (4-dot pattern as seen in screenshots)
  const DotGridIcon = () => (
    <div className="flex flex-wrap w-4 h-4 gap-1 items-center justify-center mr-4">
      <div className="w-1.5 h-1.5 rounded-full bg-[#E5E5E5]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#E5E5E5]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#E5E5E5]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#E5E5E5]" />
    </div>
  );

  return (
    <section 
      className="framer-r5htui relative w-full overflow-hidden bg-white"
      style={{
        paddingTop: '140px',
        paddingBottom: '140px',
      }}
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-0">
          
          {/* Left Column: Text Content & Feature List */}
          <div className="w-full lg:w-5/12 z-10">
            <h2 
              className="text-[#000000] font-display font-semibold mb-12 tracking-tight"
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                lineHeight: '1.2',
              }}
            >
              Perfect workflow <br /> for your business
            </h2>

            <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
              {/* Column 1 of features */}
              <div className="flex flex-col gap-6">
                {featuresColumn1.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <DotGridIcon />
                    <span className="text-[#000000] font-sans text-[16px] font-normal leading-6">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 2 of features */}
              <div className="flex flex-col gap-6">
                {featuresColumn2.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <DotGridIcon />
                    <span className="text-[#000000] font-sans text-[16px] font-normal leading-6">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Workflow Illustration */}
          <div className="w-full lg:w-7/12 relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-[800px]">
              {/* Faded schematic illustration image from assets */}
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/JrBKj2Nj9Wo2Jxljc9mVewgo7s-9.png"
                alt="Workflow Illustration"
                width={2478}
                height={1896}
                className="w-full h-auto object-contain opacity-80"
                priority
              />
              
              {/* Subtle background glow effect if needed - but prioritizing original asset looks */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(107, 70, 255, 0.05) 0%, transparent 70%)',
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PerfectWorkflowSection;