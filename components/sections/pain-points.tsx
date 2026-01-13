import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const PainPoints = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="bg-[#0A0A0A] rounded-[40px] p-8 md:p-14 overflow-hidden relative">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <span className="text-white text-sm font-medium tracking-tight">Stop losing money everyday</span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="opacity-60"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Card 1: Questions left hanging */}
            <div className="bg-[#141414] rounded-[32px] p-10 flex flex-col h-[480px] border border-white/5 overflow-hidden group">
              <h3 className="text-white text-2xl md:text-[28px] font-semibold leading-[1.3] mb-4">
                Questions left hanging
              </h3>
              <p className="text-[#666666] text-lg leading-relaxed mb-auto">
                Customers want immediate answers, not voicemail
              </p>
              <div className="relative w-full h-40 mt-8 flex justify-center">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/EZvauozvHLkR6AksP24PznYohY4-6.png"
                  alt="Question Mark Graphic"
                  width={200}
                  height={300}
                  className="object-contain opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Card 2: Missed calls = missed revenue (The Central Highlighted Card) */}
            <div className="bg-[#1C1A2E] rounded-[32px] p-10 flex flex-col h-[480px] border border-[#6B46FF]/30 relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-white text-2xl md:text-[28px] font-semibold leading-[1.2] mb-4">
                  Missed calls =<br /> missed revenue
                </h3>
                <p className="text-[#999999] text-lg leading-relaxed mb-8">
                  Every unanswered call is potential business walking away
                </p>
                
                <div className="mt-auto">
                  <a 
                    href="#learnmore" 
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-2xl font-semibold text-base transition-transform hover:scale-[1.02]"
                  >
                    Learn More
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
              
              {/* Background Graphic for Center Card */}
              <div className="absolute bottom-0 right-0 left-0 h-1/2 overflow-hidden pointer-events-none">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/nWpYmE4CbpJcW5fZ1Al8Jugfo2M-7.png"
                  alt="Revenue Graphic"
                  width={400}
                  height={300}
                  className="object-cover object-top opacity-50 group-hover:opacity-70 transition-opacity duration-500 translate-y-10"
                />
              </div>
            </div>

            {/* Card 3: Scheduling headaches */}
            <div className="bg-[#141414] rounded-[32px] p-10 flex flex-col h-[480px] border border-white/5 overflow-hidden group">
              <h3 className="text-white text-2xl md:text-[28px] font-semibold leading-[1.3] mb-4">
                Scheduling headaches
              </h3>
              <p className="text-[#666666] text-lg leading-relaxed mb-auto">
                Manual appointment booking is error-prone and time-consuming
              </p>
              <div className="relative w-full h-40 mt-8 flex justify-center">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/aj7yPrnFvA6GeLzIkRQY1tj2U0-8.png"
                  alt="Scheduling Graphic"
                  width={240}
                  height={300}
                  className="object-contain opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                />
              </div>
            </div>
          </div>

          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6B46FF]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;