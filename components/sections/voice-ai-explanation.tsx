import React from 'react';
import Image from 'next/image';
import { ChevronRight, ArrowUpRight, PhoneOff, PhoneCall, AudioLines, BellRing, Activity } from 'lucide-react';

export default function VoiceAiExplanation() {
  return (
    <section className="bg-white py-14 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#1A1A1A] leading-tight font-display">
            What are Voice AI Agents?
          </h2>
        </div>

        {/* Dynamic Island Visual Area */}
        <div className="relative flex flex-col items-center mb-28">
          {/* Top Dynamic Island: Incoming Call */}
          <div className="relative z-10 w-full max-w-[340px] md:max-w-[380px] bg-black rounded-[40px] p-4 shadow-2xl flex items-center gap-4 border border-white/10">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/w2hyXovpoCcfHZkjR4Hmr53RA5o-4.jpg" 
                alt="Sales Client" 
                width={48} 
                height={48}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">Incoming Call</p>
              <p className="text-white text-base font-medium">Sales Client</p>
            </div>
            <div className="flex gap-2">
              <div className="w-9 h-9 bg-[#FF3B30] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <PhoneOff className="text-white w-5 h-5" />
              </div>
              <div className="w-9 h-9 bg-[#34C759] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <PhoneCall className="text-white w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Connection Line */}
          <div className="w-[2px] h-16 bg-gradient-to-b from-[#7C5CFF] to-[#7C5CFF]/30 my-2"></div>

          {/* Bottom Dynamic Island: Answered by AI */}
          <div className="relative z-10 w-fit min-w-[300px] bg-white rounded-[24px] p-4 shadow-[0_10px_40px_rgba(124,92,255,0.15)] flex items-center gap-4 border border-[#EEEEEE]">
            <div className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0 border border-[#EEEEEE]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/rJfG75HuqSRYpn5Rifv6UnzZymc-5.png" 
                alt="AI Julia" 
                width={48} 
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[14px] text-[#666666]">
                Answered by <span className="text-[#7C5CFF] font-semibold">AI Julia</span>
              </p>
              <div className="mt-1 flex items-center gap-1">
                <AudioLines className="text-[#FFB347] w-12 h-4" />
              </div>
            </div>
          </div>

          {/* Decorative Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#7C5CFF]/5 blur-[100px] rounded-full -z-10"></div>
        </div>

        {/* The Pain Points Grid (Dark Section) */}
        <div className="bg-[#0D0D0D] rounded-[32px] md:rounded-[48px] p-8 md:p-12 relative overflow-hidden">
          {/* Header Badge */}
          <div className="flex justify-center mb-12">
            <div className="bg-[#1A1A1A] border border-white/10 rounded-full py-2 px-6 flex items-center gap-2">
              <span className="text-white text-sm">Stop losing money everyday</span>
              <Activity className="text-white/40 w-4 h-4" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {/* Column 1: Questions Left Hanging */}
            <div className="flex flex-col">
              <h3 className="text-white text-[24px] font-semibold mb-4">Questions left hanging</h3>
              <p className="text-white/60 text-[16px] leading-[1.6] mb-8 max-w-[280px]">
                Customers want immediate answers, not voicemail
              </p>
              <div className="mt-auto relative w-full h-[180px]">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/EZvauozvHLkR6AksP24PznYohY4-6.png" 
                  alt="Missed questions illustration" 
                  fill
                  className="object-contain opacity-40"
                />
              </div>
            </div>

            {/* Column 2: Missed Revenue (Active Highlight) */}
            <div className="bg-[#1A1A1A] rounded-[24px] p-8 border border-white/5 shadow-2xl flex flex-col items-center text-center">
              <h3 className="text-white text-[24px] font-semibold mb-2">Missed calls =</h3>
              <h3 className="text-white text-[24px] font-semibold mb-4 leading-none">missed revenue</h3>
              <p className="text-white/60 text-[16px] leading-[1.6] mb-8">
                Every unanswered call is potential business walking away
              </p>
              
              <a href="#learn-more" className="group bg-white rounded-full py-3 px-6 flex items-center gap-2 text-[#1A1A1A] font-semibold text-base transition-all hover:bg-[#F0F0F0] mb-8">
                Learn More
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <div className="relative w-full h-[140px]">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/nWpYmE4CbpJcW5fZ1Al8Jugfo2M-7.png" 
                  alt="Potential business walking away" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Column 3: Scheduling Headaches */}
            <div className="flex flex-col text-right items-end md:items-start md:text-left">
              <h3 className="text-white text-[24px] font-semibold mb-4">Scheduling headaches</h3>
              <p className="text-white/60 text-[16px] leading-[1.6] mb-8 max-w-[280px]">
                Manual appointment booking is error-prone and time-consuming
              </p>
              <div className="mt-auto relative w-full h-[180px]">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/aj7yPrnFvA6GeLzIkRQY1tj2U0-8.png" 
                  alt="Notification bell illustration" 
                  fill
                  className="object-contain opacity-40 scale-x-[-1] md:scale-x-100"
                />
              </div>
            </div>
          </div>

          {/* Background effects for dark section */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#7C5CFF]/10 blur-[120px] rounded-full -z-0"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full -z-0"></div>
          <div className="absolute inset-0 dot-grid opacity-[0.05] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}