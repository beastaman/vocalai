import React from 'react';
import { Check, X, ArrowUpRight } from 'lucide-react';

const ComparisonTable = () => {
  return (
    <section className="py-[140px] px-6 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-[600px]">
            <h2 className="text-[42px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.03em] font-display text-[#000000]">
              Vocal AI <span className="text-[#9a89ff]">vs.</span>
              <br />
              Traditional Hiring
            </h2>
          </div>
          <div>
            <a 
              href="https://calendly.com/nawazaman-25/30min"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E5E5E5] rounded-xl text-[14px] font-semibold text-[#2F2D2D] hover:bg-[#F7F7F7] transition-all"
            >
              Book a Call
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Comparison Card Container */}
        <div className="relative bg-[#FBFBFF] rounded-[40px] border border-[#E5E5E5] p-4 md:p-8 flex flex-col md:flex-row gap-8 items-stretch shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
          
          {/* Vocalchat AI Side (Dark Card) */}
          <div className="flex-1 bg-[#0A0A0A] rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden group">
            {/* Subtle Gradient Glow in Background */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#6B46FF]/10 blur-[100px] pointer-events-none" />
            
            {/* Logo/Icon Header */}
            <div className="mb-12 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-6 h-6 flex items-center justify-center">
                {/* SVG Logo Placeholder for Vocalchat */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#6B46FF"/>
                  <path d="M11 7H13V17H11V7ZM7 10H9V14H7V10ZM15 10H17V14H15V10Z" fill="#6B46FF"/>
                </svg>
              </div>
            </div>

            <ul className="space-y-8">
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-white/10">
                  <Check className="w-4 h-4 text-[#6B46FF]" strokeWidth={3} />
                </div>
                <span className="text-[17px] font-medium tracking-tight">24/7, never off duty</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-white/10">
                  <Check className="w-4 h-4 text-[#6B46FF]" strokeWidth={3} />
                </div>
                <span className="text-[17px] font-medium tracking-tight">Instant replies, no hold time</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-white/10">
                  <Check className="w-4 h-4 text-[#6B46FF]" strokeWidth={3} />
                </div>
                <span className="text-[17px] font-medium tracking-tight">Low cost, no salaries or training</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-white/10">
                  <Check className="w-4 h-4 text-[#6B46FF]" strokeWidth={3} />
                </div>
                <span className="text-[17px] font-medium tracking-tight">Handles unlimited calls</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-white/10">
                  <Check className="w-4 h-4 text-[#6B46FF]" strokeWidth={3} />
                </div>
                <span className="text-[17px] font-medium tracking-tight">100% accurate, no mood swings</span>
              </li>
            </ul>
          </div>

          {/* Traditional Hiring Side (Light List) */}
          <div className="flex-1 py-4 md:py-12 px-6">
            <div className="mb-12">
              <span className="inline-block px-4 py-1.5 rounded-xl bg-white border border-[#E5E5E5] text-[15px] font-medium text-[#000000]">
                Traditional
              </span>
            </div>

            <ul className="space-y-8">
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6">
                  <X className="w-4 h-4 text-[#666666]/40" strokeWidth={2} />
                </div>
                <span className="text-[17px] font-medium text-[#666666] tracking-tight">Limited to business hours</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6">
                  <X className="w-4 h-4 text-[#666666]/40" strokeWidth={2} />
                </div>
                <span className="text-[17px] font-medium text-[#666666] tracking-tight">Customers wait on hold</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6">
                  <X className="w-4 h-4 text-[#666666]/40" strokeWidth={2} />
                </div>
                <span className="text-[17px] font-medium text-[#666666] tracking-tight">High cost, salaries + overhead</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6">
                  <X className="w-4 h-4 text-[#666666]/40" strokeWidth={2} />
                </div>
                <span className="text-[17px] font-medium text-[#666666] tracking-tight">Limited by team size</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6">
                  <X className="w-4 h-4 text-[#666666]/40" strokeWidth={2} />
                </div>
                <span className="text-[17px] font-medium text-[#666666] tracking-tight">Varies by employee</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;