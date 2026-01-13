import React from 'react';
import Image from 'next/image';

const AutomationFeatures = () => {
  const features = [
    {
      title: "Customer Calls",
      description: "The AI receptionist answers instantly and understands customer needs through natural conversation.",
      illustration: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/4W48oRupPueHTrgqGA6qH2ZCTgs-11.png",
      alt: "Customer calling illustration"
    },
    {
      title: "Intelligent routing",
      description: "Calls are smartly routed—appointments get scheduled, inquiries answered, and sales leads qualified.",
      illustration: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/8lkgTCtebueAoaMEd5tfDYRSkO4-12.png",
      alt: "Intelligent routing visualization"
    },
    {
      title: "Seamless integration",
      description: "All interactions sync with your CRM, update your calendar, and provide key insights.",
      illustration: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/LLXKhO9oWxJTrj4FNAXor1QoSOE-13.png",
      alt: "Integration ecosystem illustration"
    },
    {
      title: "Continuous improvement",
      description: "Your AI agents keep improving with ongoing learning, feedback, and monthly optimizations.",
      illustration: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/4rqrvJvwUlSEXZAfaVUwFX9i0Aw-14.png",
      alt: "AI learning and optimization visualization"
    }
  ];

  return (
    <section id="learnmore" className="py-[120px] bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-semibold text-[#1A1A1A] leading-[1.2] mb-4 font-display">
            Fully automated workflow
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-[32px] border border-[#EEEEEE] overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] h-full"
            >
              {/* Illustration Area with Dot Grid */}
              <div className="relative h-[300px] w-full dot-grid flex items-center justify-center p-8">
                {/* Background Grid Image Asset */}
                <div className="absolute inset-0 opacity-40 z-0">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/BpUgcKlbgozaYrDw9SLXq6Gac-10.png"
                    alt="Grid Background"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Technical Illustration */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-full max-w-[320px] max-h-[220px]">
                    <Image 
                      src={feature.illustration}
                      alt={feature.alt}
                      fill
                      className="object-contain"
                      priority={index < 2}
                    />
                  </div>
                </div>

                {/* Corner Accents (Subtle UI details from screenshots) */}
                <div className="absolute top-4 left-4 w-1.5 h-1.5 bg-[#EEEEEE] rounded-full" />
                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-[#EEEEEE] rounded-full" />
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-[#EEEEEE] rounded-full" />
                <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-[#EEEEEE] rounded-full" />
              </div>

              {/* Content Area */}
              <div className="p-10 pt-8 flex flex-col items-start text-left">
                <h3 className="text-[24px] font-semibold text-[#1A1A1A] mb-4 font-display">
                  {feature.title}
                </h3>
                <p className="text-[18px] text-[#666666] leading-[1.6]">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Border Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#7C5CFF]/10 rounded-[32px] pointer-events-none transition-colors" />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .dot-grid {
          background-image: radial-gradient(#EEEEEE 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </section>
  );
};

export default AutomationFeatures;