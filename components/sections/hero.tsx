import React from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

/**
 * Hero component for VocalAI AI
 * Clones the header section with centered heading, subtext, and action buttons.
 */
const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-[150px] pb-[50px]">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24 mb-16 max-w-[1240px] mx-auto">
          {/* Left Column: Heading & CTA */}
          <div className="flex flex-col max-w-[1200px] w-full">
            <h1 className="text-[#000000] font-display font-bold text-[40px] md:text-[60px] lg:text-[72px] leading-[1.1] tracking-[-0.03em] mb-8 max-w-[800px]">
              Innovative AI Solutions for Forward Thinking Businesses
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
              <p className="text-[#666666] font-sans text-lg md:text-[20px] leading-[1.6] max-w-[480px]">
                Focus on growing your business, while our AI Receptionist & Sales Agent handle inbound and outbound calls.
              </p>
              
              <div className="flex items-center gap-4 flex-wrap">
                <a 
                  href="#learnmore" 
                  className="bg-[#6b46ff] text-white px-6 py-3.5 rounded-[12px] font-semibold text-[16px] transition-all hover:scale-[1.02] hover:brightness-110 flex items-center gap-2 group shadow-sm active:scale-95"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                
                <a 
                  href="https://calendly.com/nawazaman-25/30min"
                  className="border border-[#e5e5e5] bg-transparent text-black px-6 py-3.5 rounded-[12px] font-semibold text-[16px] transition-all hover:bg-[#f7f7f7] flex items-center gap-2 active:scale-95"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4 text-[#000000]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Assets: Masked Agent Portraits Section */}
        <div className="relative mt-8 md:mt-16 w-full max-w-[1200px] mx-auto min-h-[400px] md:min-h-[600px] flex items-center justify-center">
          <div className="relative flex justify-center items-end w-full">
            {/* Agent 1 (Left - Faded) */}
            <div className="relative w-1/3 opacity-30 blur-[2px] scale-90 translate-x-12 hidden lg:block">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/dytp933FzpOspVNxBsIFtSsI-1.png" 
                alt="AI Agent" 
                className="w-full object-contain agent-mask"
              />
            </div>

            {/* Main Agent (Center - Julia) */}
            <div className="relative w-full md:w-1/2 lg:w-2/5 z-10 flex flex-col items-center">
              <div className="relative w-full">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/AlETzUjSDNpRfwLePuNfTBVa4-2.png" 
                  alt="Julia - Receptionist Agent" 
                  className="w-full object-contain agent-mask relative z-0"
                />
                
                {/* Floating ID Label */}
                <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-white/80 backdrop-blur-md border border-[#e5e5e5] px-6 py-2.5 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap">
                    <span className="text-black font-semibold text-sm">Julia - Receptionist Agent</span>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                  <button className="w-10 h-10 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center hover:bg-black/20 transition-colors">
                    <ChevronRight className="w-5 h-5 text-white rotate-180" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center hover:bg-black/20 transition-colors">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Agent 3 (Right - Faded) */}
            <div className="relative w-1/3 opacity-30 blur-[2px] scale-90 -translate-x-12 hidden lg:block">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/cDD1n4h3SKDyBW67BEdtrSfys-3.png" 
                alt="AI Agent" 
                className="w-full object-contain agent-mask"
              />
            </div>
          </div>
          
          {/* Subtle bottom gradient for image bleed */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10 opacity-[0.4] dot-grid"></div>
    </section>
  );
};

export default HeroSection;