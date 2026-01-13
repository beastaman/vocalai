import React from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';

const CtaFooterBanner = () => {
  return (
    <section className="w-full px-6 py-20 bg-white">
      <div className="container mx-auto max-w-[1240px]">
        {/* Main Dark Card Container */}
        <div className="relative bg-[#0A0A0A] rounded-[40px] p-10 md:p-20 overflow-hidden min-h-[520px] flex flex-col justify-between">
          
          {/* Decorative Purple Glow Gradient */}
          <div 
            className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] blur-[120px] opacity-40 rounded-full"
            style={{
              background: 'radial-gradient(circle, #6B46FF 0%, transparent 70%)'
            }}
          />

          {/* Top Content: Icon & Headlines */}
          <div className="relative z-10">
            {/* Phone Icon with Dotted Stylization */}
            <div className="mb-10 text-[#666666]">
              <Phone size={32} strokeWidth={1.5} className="rotate-[-15deg]" />
            </div>

            {/* Typography */}
            <div className="space-y-2">
              <h3 className="text-[#666666] text-3xl font-display font-semibold tracking-tight leading-tight">
                Let's talk.
              </h3>
              <h2 className="text-white text-4xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.1]">
                Book a free<br />consultation
              </h2>
            </div>

            {/* Loading/Indicator Dots - visual recreation of the animated sequence in screenshots */}
            <div className="flex gap-2 mt-8">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full ${
                    i === 3 ? 'bg-[#6B46FF] shadow-[0_0_8px_#6B46FF]' : 
                    i === 2 || i === 4 ? 'bg-[#6B46FF]/60' : 
                    'bg-[#1a1a1a]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Action: CTA Button */}
          <div className="relative z-10 pt-10">
            <a 
              href="https://calendly.com/nawazaman-25/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-2xl font-semibold text-base transition-all hover:scale-[1.03] hover:shadow-lg group"
            >
              Book a Call
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Subtle Grid Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CtaFooterBanner;