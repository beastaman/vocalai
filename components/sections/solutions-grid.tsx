import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

const SolutionsGrid = () => {
  const outboundFeatures = [
    'Automated call campaigns for lead generation & follow-ups',
    'Custom scripting & personalization',
    'CRM integration & workflow automation',
    'Real-time analytics & performance tracking',
    'AI-driven responses for dynamic conversations',
  ];

  const inboundFeatures = [
    '24/7 AI receptionist to handle calls',
    'Intelligent call routing & FAQ handling',
    'Custom call flow design & escalation logic',
    'CRM & scheduling system integration',
    'Sentiment analysis & customer insights',
  ];

  const customWorkflowFeatures = [
    'In-depth discussion on business pain points',
    'Analysis of potential AI automation opportunities',
    'Custom roadmap for AI implementation',
    'Recommendations for tools & integrations',
    'Follow-up strategy session for execution',
  ];

  return (
    <section className="py-[140px] px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[42px] md:text-[48px] font-semibold tracking-tight text-black leading-[1.2] mb-4">
            Custom AI Solutions,<br />Tailored to Your Business
          </h2>
        </div>

        {/* Top Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Outbound Voice Agents */}
          <div className="bg-white rounded-[32px] border border-[#e5e5e5] p-10 flex flex-col items-start shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-[60px] h-[60px] relative shrink-0">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/Rke3qF1l01wldwb9V0VouZnFe6U-15.png"
                  alt="Outbound"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-[24px] font-semibold text-black leading-[1.4] mb-2 flex items-center gap-2">
                  <span className="text-[#6b46ff]">Outbound</span> voice agents
                </h3>
                <p className="text-[#666666] text-lg leading-relaxed">
                  Automate calls for engagement, follow-ups, and sales.
                </p>
              </div>
            </div>

            <a 
              href="https://calendly.com/nawazaman-25/30min"
              className="w-full bg-[#0a0a0a] text-white py-4 rounded-xl flex items-center justify-center font-mono tracking-widest text-sm font-bold uppercase hover:bg-black transition-colors mb-10"
            >
              BOOK A CALL
            </a>

            <ul className="space-y-5">
              {outboundFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 shrink-0">
                    <Check size={18} className="text-[#6b46ff]" strokeWidth={3} />
                  </div>
                  <span className="text-[#666666] text-[15px] leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Inbound Voice Agents */}
          <div className="bg-white rounded-[32px] border border-[#e5e5e5] p-10 flex flex-col items-start shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-[60px] h-[60px] relative shrink-0">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/YoJRY6fZiyOvD3IbID1NaWds4-16.png"
                  alt="Inbound"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-[24px] font-semibold text-black leading-[1.4] mb-2 flex items-center gap-2">
                  <span className="text-[#6b46ff]">Inbound</span> voice agents
                </h3>
                <p className="text-[#666666] text-lg leading-relaxed">
                  Handle customer inquiries and bookings automatically.
                </p>
              </div>
            </div>

            <a 
              href="https://calendly.com/nawazaman-25/30min"
              className="w-full bg-[#0a0a0a] text-white py-4 rounded-xl flex items-center justify-center font-mono tracking-widest text-sm font-bold uppercase hover:bg-black transition-colors mb-10"
            >
              BOOK A CALL
            </a>

            <ul className="space-y-5">
              {inboundFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 shrink-0">
                    <Check size={18} className="text-[#6b46ff]" strokeWidth={3} />
                  </div>
                  <span className="text-[#666666] text-[15px] leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Wide Bottom Card */}
        <div className="bg-white rounded-[32px] border border-[#e5e5e5] p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col md:flex-row gap-12 md:items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-[24px] font-semibold text-black leading-[1.4] mb-4">
                <span className="text-[#666666] font-medium">Custom</span> Workflow
              </div>
              <p className="text-[#666666] text-lg leading-relaxed mb-8 max-w-md">
                Ideal for businesses seeking tailored AI solutions to streamline operations and improve efficiency.
              </p>
              <div className="w-[180px] h-[50px] relative">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/Ay3omJYU8jBN1OaA2Kbe4FG1QU-17.png"
                  alt="Workflow Pattern"
                  width={180}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-8">
              <a 
                href="https://calendly.com/nawazaman-25/30min"
                className="w-full bg-white border border-[#e5e5e5] text-black py-4 rounded-xl flex items-center justify-center font-mono tracking-widest text-sm font-bold uppercase hover:bg-[#f7f7f7] transition-all"
              >
                CONTACT SALES
              </a>

              <ul className="space-y-5">
                {customWorkflowFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 shrink-0">
                      <Check size={18} className="text-[#6b46ff]" strokeWidth={3} />
                    </div>
                    <span className="text-[#666666] text-[15px] leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;