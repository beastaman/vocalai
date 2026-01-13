import React from 'react';
import Image from 'next/image';

const WhatIsVoiceAI = () => {
  return (
    <section className="relative w-full py-[100px] bg-white flex flex-col items-center overflow-hidden">
      {/* Container wraps the entire section content */}
      <div className="container px-6 flex flex-col items-center">
        
        {/* Section Heading */}
        <h2 className="text-[42px] md:text-[48px] font-semibold text-center text-black mb-16 tracking-tight leading-tight">
          What are Voice AI Agents?
        </h2>

        {/* Dynamic Island Call Visuals Wrapper */}
        <div className="relative flex flex-col items-center w-full max-w-[600px] mb-20">
          
          {/* Central Connecting Line */}
          <div className="absolute top-[60px] bottom-[-40px] w-[1.5px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent z-0" />

          {/* 1. Dynamic Island: Incoming Call */}
          <div className="relative z-10 w-fit h-[68px] bg-black rounded-[34px] p-2 pr-4 flex items-center gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-in fade-in zoom-in duration-700">
            <div className="w-[52px] h-[52px] rounded-full overflow-hidden border border-white/10 shrink-0">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/w2hyXovpoCcfHZkjR4Hmr53RA5o-4.jpg"
                alt="Incoming Call User"
                width={52}
                height={52}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col min-w-[100px]">
              <span className="text-[11px] text-[#666666] font-medium leading-none mb-1">Incoming Call</span>
              <span className="text-[14px] text-white font-semibold leading-none">Sales Client</span>
            </div>
            
            {/* Call Action Buttons */}
            <div className="flex items-center gap-2 ml-4">
              <button className="w-10 h-10 rounded-full bg-[#FF453A] flex items-center justify-center hover:opacity-90 transition-opacity">
                {/* Custom SVG for Reject (Decline phone) */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67 19.42 19.42 0 0 1-2.67-3.33 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" transform="rotate(135 12 12)"/>
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-[#34C759] flex items-center justify-center hover:opacity-90 transition-opacity">
                {/* Custom SVG for Accept (Phone) */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.11-2.11a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.88 1.87z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Spacing between the two elements */}
          <div className="h-[60px]" />

          {/* 2. AI Answered Notification Bubble */}
          <div className="relative z-10 w-[240px] bg-white rounded-[24px] p-4 flex items-center gap-3 border border-border shadow-[0_15px_30px_rgba(0,0,0,0.06)] animate-in slide-in-from-bottom-5 duration-1000">
            <div className="w-[48px] h-[48px] rounded-2xl overflow-hidden border-2 border-primary/10 bg-[#f7f7f7] shrink-0">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/rJfG75HuqSRYpn5Rifv6UnzZymc-5.png"
                alt="AI Julia"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-[#666666]">Answered by</span>
              </div>
              <span className="text-[14px] text-primary font-bold">AI Julia</span>
              {/* Voice wave indicator visual */}
              <div className="mt-1.5 flex items-center gap-0.5 h-3">
                <div className="w-[2px] h-[4px] bg-primary/40 rounded-full animate-pulse capitalize" />
                <div className="w-[2px] h-[8px] bg-primary/70 rounded-full animate-[pulse_1s_infinite]" />
                <div className="w-[2px] h-[10px] bg-primary rounded-full animate-[pulse_1.2s_infinite]" />
                <div className="w-[2px] h-[6px] bg-primary/60 rounded-full animate-[pulse_0.8s_infinite]" />
                <div className="w-[2px] h-[4px] bg-primary/40 rounded-full animate-pulse" />
              </div>
            </div>
            {/* Trailing arrow/chevron icon */}
            <div className="shrink-0 text-zinc-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Background Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(107,70,255,0.05)_0%,transparent_70%)] pointer-events-none -z-1" />

        {/* Bento/Problem Grid Section (Lower half of this block) */}
        <div className="w-full max-w-[1200px] bg-neutral-dark rounded-[32px] overflow-hidden p-8 md:p-14 relative border border-white/10">
          
          {/* Subtle Dot Grid Background overlay for the dark card */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
          />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 mb-12">
              <span className="text-white text-[13px] font-medium">Stop losing money everyday</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B46FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 17-5-5 5-5M2 7l10 10 4-4"/>
              </svg>
            </div>

            {/* Bento Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              
              {/* Card 1: Questions left hanging */}
              <div className="bg-[#111] rounded-[24px] p-10 border border-white/5 flex flex-col items-start relative overflow-hidden group">
                <h3 className="text-white text-[24px] font-semibold mb-3">Questions left hanging</h3>
                <p className="text-[#666] text-[16px] leading-relaxed mb-10 max-w-[200px]">Customers want immediate answers, not voicemail</p>
                {/* Visual Asset 1: Question Mark Pattern */}
                <div className="absolute bottom-0 right-0 w-[140px] h-auto opacity-30 select-none pointer-events-none">
                   <Image 
                    src="https://framerusercontent.com/images/EZvauozvHLkR6AksP24PznYohY4.png?width=411&height=635"
                    alt="Question visual"
                    width={140}
                    height={200}
                    className="object-contain transform translate-x-4 translate-y-4"
                  />
                </div>
              </div>

              {/* Card 2: Missed calls (Featured/Primary) */}
              <div className="bg-gradient-to-br from-[#1A162C] to-[#0A0A0A] rounded-[24px] p-10 border border-primary/20 flex flex-col items-center text-center relative overflow-hidden shadow-[inset_0_0_20px_rgba(107,70,255,0.05)]">
                <h3 className="text-white text-[24px] font-semibold leading-tight mb-3">Missed calls = <br/> missed revenue</h3>
                <p className="text-zinc-400 text-[16px] leading-relaxed mb-8">Every unanswered call is potential business walking away</p>
                
                <a href="#learn-more" className="mt-auto group bg-white text-black px-6 py-2.5 rounded-xl font-semibold text-[14px] flex items-center gap-2 hover:bg-zinc-200 transition-all">
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </a>
              </div>

              {/* Card 3: Scheduling headaches */}
              <div className="bg-[#111] rounded-[24px] p-10 border border-white/5 flex flex-col items-start relative overflow-hidden">
                <h3 className="text-white text-[24px] font-semibold mb-3">Scheduling headaches</h3>
                <p className="text-[#666] text-[16px] leading-relaxed mb-10">Manual appointment booking is error-prone and time-consuming</p>
                {/* Visual Asset 3: Bell graphic */}
                <div className="absolute bottom-[-20px] right-[-20px] w-[180px] h-auto opacity-20 select-none pointer-events-none">
                  <Image 
                    src="https://framerusercontent.com/images/aj7yPrnFvA6GeLzIkRQY1tj2U0.png?width=670&height=760"
                    alt="Bell visual"
                    width={180}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatIsVoiceAI;