import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  // Asset from the provided list
  const logoIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/svgs/OSDoLG3timO1V056htUsz6j5iHs-1.svg";

  return (
    <footer className="w-full bg-white pt-[140px] pb-12 overflow-hidden">
      <div className="container px-6 mx-auto max-w-[1200px]">
        {/* Massive Watermark Text */}
        <div className="relative w-full flex justify-center items-center mb-16 md:mb-24">
          <h2 
            className="text-[clamp(80px,20vw,360px)] font-bold text-[#F7F7F7] select-none leading-none tracking-tight font-display"
            style={{
              // Based on high-level design and screenshots
              fontFamily: "'Manrope', 'Inter', sans-serif",
              letterSpacing: '-0.04em'
            }}
          >
            VocalAI
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-[#E5E5E5] pt-10 gap-8 md:gap-0">
          
          {/* Logo and Privacy Section */}
          <div className="flex items-center gap-6">
            <div className="w-8 h-8 relative">
              <Image 
                src={logoIcon} 
                alt="Vocalchat Logo" 
                width={32} 
                height={32} 
                className="object-contain"
              />
            </div>
            <a 
              href="/privacy-policy" 
              className="text-[#666666] text-sm md:text-[16px] font-medium hover:text-black transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Privacy Policy
            </a>
          </div>

          {/* Bottom CTA Link */}
          <div className="flex items-center">
            <a 
              href="https://calendly.com/nawazaman-25/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-black text-sm md:text-[16px] font-semibold hover:opacity-70 transition-all"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Book a Call
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;