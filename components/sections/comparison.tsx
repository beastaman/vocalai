import React from 'react';
import { Check, X, ArrowUpRight } from 'lucide-react';

/**
 * ComparisonSection Component
 * 
 * Clones the "Vocalchat AI vs. Traditional Hiring" comparison section.
 * Features a high-contrast split layout with a dark AI card and a light traditional list.
 */
const ComparisonSection: React.FC = () => {
  const aiBenefits = [
    "24/7, never off duty",
    "Instant replies, no hold time",
    "Low cost, no salaries or training",
    "Handles unlimited calls",
    "100% accurate, no mood swings"
  ];

  const traditionalDrawbacks = [
    "Limited to business hours",
    "Customers wait on hold",
    "High cost, salaries + overhead",
    "Limited by team size",
    "Varies by employee"
  ];

  return (
    <section className="py-[120px] bg-white flex flex-col items-center overflow-hidden">
      <div className="container max-w-[1200px] px-6">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-[48px] font-semibold leading-[1.2] text-[#1A1A1A] tracking-[-0.02em] font-display">
            Vocal AI <span className="text-[#7C5CFF]/40 italic">vs.</span>
            <br />
            Traditional Hiring
          </h2>
          
          <a 
            href="https://calendly.com/nawazaman-25/30min"
            className="group flex items-center justify-between gap-2 px-5 py-3 border border-[#EEEEEE] rounded-[16px] hover:bg-[#F7F7F7] transition-all bg-white"
          >
            <span className="text-[16px] font-semibold text-[#1A1A1A]">Book a Call</span>
            <ArrowUpRight className="w-4 h-4 text-[#1A1A1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Comparison Card Container */}
        <div className="relative bg-[#FBFBFF] rounded-[32px] p-4 md:p-8 flex flex-col md:flex-row gap-12 items-center border border-[#EEEEEE] shadow-sm">
          
          {/* AI Side (Dark Card) */}
          <div className="w-full md:w-1/2 bg-[#0D0D0D] rounded-[24px] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group">
            {/* Subtle Gradient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C5CFF] opacity-10 blur-[80px] -mr-32 -mt-32 pointer-events-none" />
            
            {/* Logo Badge */}
            <div className="mb-10 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#7C5CFF]">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <ul className="space-y-6">
              {aiBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-4 group/item">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#7C5CFF] flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[18px] font-medium tracking-tight text-white/90 group-hover/item:text-white transition-colors">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Traditional Side (Light List) */}
          <div className="w-full md:w-1/2 flex flex-col px-4 md:px-8">
            <div className="inline-block mb-10">
              <span className="px-4 py-1.5 rounded-full bg-[#F2F2F2] text-[#666666] text-[14px] font-medium border border-[#EBEBEB]">
                Traditional
              </span>
            </div>

            <ul className="space-y-6">
              {traditionalDrawbacks.map((drawback, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F2F2F2] flex items-center justify-center">
                    <X className="w-4 h-4 text-[#666666]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[18px] font-medium tracking-tight text-[#666666]">
                    {drawback}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Background Decorative Element */}
          <div className="hidden lg:block absolute -top-8 -right-8 w-16 h-16 pointer-events-none opacity-50">
             <img 
               src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/Rke3qF1l01wldwb9V0VouZnFe6U-15.png" 
               alt="" 
               className="w-full h-full object-contain"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;