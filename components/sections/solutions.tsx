import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const Solutions = () => {
  const outboundFeatures = [
    "Automated call campaigns for lead generation & follow-ups",
    "Custom scripting & personalization",
    "CRM integration & workflow automation",
    "Real-time analytics & performance tracking",
    "AI-driven responses for dynamic conversations"
  ];

  const inboundFeatures = [
    "24/7 AI receptionist to handle calls",
    "Intelligent call routing & FAQ handling",
    "Custom call flow design & escalation logic",
    "CRM & scheduling system integration",
    "Sentiment analysis & customer insights"
  ];

  const customFeatures = [
    "In-depth discussion on business pain points",
    "Analysis of potential AI automation opportunities",
    "Custom roadmap for AI implementation",
    "Recommendations for tools & integrations",
    "Follow-up strategy session for execution"
  ];

  return (
    <section className="py-[120px] bg-white overflow-hidden">
      <div className="container px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-semibold tracking-tight text-[#1A1A1A] leading-[1.2] mb-6 max-w-[800px] mx-auto">
            Custom AI Solutions, Tailored to Your Business
          </h2>
        </div>

        {/* Top Two Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Outbound Voice Agents Card */}
          <div className="bg-white rounded-[32px] border border-[#EEEEEE] p-10 flex flex-col h-full shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 relative w-[80px] h-[80px]">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/YoJRY6fZiyOvD3IbID1NaWds4-16.png" 
                  alt="Outbound Icon" 
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-[24px] font-semibold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <span className="text-[#7C5CFF]">Outbound</span> voice agents
                </h3>
                <p className="text-[#666666] text-[16px] leading-[1.5]">
                  Automate calls for engagement, follow-ups, and sales.
                </p>
              </div>
            </div>

            <a 
              href="https://calendly.com/nawazaman-25/30min"
              className="w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white text-[14px] font-bold tracking-[0.1em] py-5 rounded-[16px] text-center mb-10 transition-colors uppercase font-mono"
            >
              BOOK A CALL
            </a>

            <ul className="space-y-5">
              {outboundFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="w-4 h-4 text-[#666666]" strokeWidth={3} />
                  </div>
                  <span className="text-[#4D4D4D] text-[16px] leading-[1.4]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Inbound Voice Agents Card */}
          <div className="bg-white rounded-[32px] border border-[#EEEEEE] p-10 flex flex-col h-full shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 relative w-[80px] h-[80px]">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/Ay3omJYU8jBN1OaA2Kbe4FG1QU-17.png" 
                  alt="Inbound Icon" 
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-[24px] font-semibold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <span className="text-[#56C6FF]">Inbound</span> voice agents
                </h3>
                <p className="text-[#666666] text-[16px] leading-[1.5]">
                  Handle customer inquiries and bookings automatically.
                </p>
              </div>
            </div>

            <a 
              href="https://calendly.com/nawazaman-25/30min"
              className="w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white text-[14px] font-bold tracking-[0.1em] py-5 rounded-[16px] text-center mb-10 transition-colors uppercase font-mono"
            >
              BOOK A CALL
            </a>

            <ul className="space-y-5">
              {inboundFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="w-4 h-4 text-[#666666]" strokeWidth={3} />
                  </div>
                  <span className="text-[#4D4D4D] text-[16px] leading-[1.4]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Wide Card */}
        <div className="bg-white rounded-[32px] border border-[#EEEEEE] p-10 flex flex-col md:flex-row gap-12 shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
          <div className="flex-1">
            <div className="mb-6">
              <h3 className="text-[24px] font-semibold text-[#1A1A1A] mb-2">
                Custom <span className="text-[#1A1A1A]">Workflow</span>
              </h3>
              <p className="text-[#666666] text-[18px] leading-[1.6] max-w-[450px]">
                Ideal for businesses seeking tailored AI solutions to streamline operations and improve efficiency.
              </p>
            </div>
            <div className="relative w-full h-[80px] mt-8">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/EYdFrEtBMtfkTGNmGX2TEx4CFI-18.png" 
                alt="Dot Grid Visualization" 
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <a 
              href="mailto:sales@vocalchat-ai"
              className="w-full bg-white border border-[#EEEEEE] hover:bg-[#F7F7F7] text-[#1A1A1A] text-[14px] font-bold tracking-[0.1em] py-5 rounded-[16px] text-center mb-10 transition-colors uppercase font-mono"
            >
              CONTACT SALES
            </a>
            <ul className="space-y-5">
              {customFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="w-4 h-4 text-[#666666]" strokeWidth={3} />
                  </div>
                  <span className="text-[#4D4D4D] text-[16px] leading-[1.4]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;