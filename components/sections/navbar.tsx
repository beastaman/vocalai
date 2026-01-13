import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-[#e5e5e5]/50 h-[75px] flex items-center"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      }}
    >
      <div className="container flex items-center justify-between px-6 lg:px-12 max-w-[1240px]">
        {/* Logo Section */}
        <a 
          href="/" 
          className="flex items-center gap-2 group cursor-pointer transition-opacity hover:opacity-80"
          style={{
            height: '32px',
            textDecoration: 'none'
          }}
        >
          <div className="flex items-center justify-center w-[45px] h-[32px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/svgs/OSDoLG3timO1V056htUsz6j5iHs-1.svg"
              alt="VocalAI Logo"
              width={45}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <p 
            className="text-[20px] font-bold tracking-tight text-black"
            style={{
              fontFamily: '"Be Vietnam Pro", sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.02em'
            }}
          >
            VocalAI
          </p>
        </a>

        {/* Action Section */}
        <div className="flex items-center">
          <a
            href="https://calendly.com/nawazaman-25/30min"
            className="group relative transition-all duration-200 active:scale-95"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '16px',
              padding: '2px', // Border wrapper space
              backgroundColor: 'transparent',
              textDecoration: 'none'
            }}
          >
            {/* Outlined Button Body */}
            <div 
              className="flex items-center justify-center border border-[#e5e5e5] px-[14px] py-[10px] transition-colors group-hover:bg-[#f7f7f7]"
              style={{
                width: '146px',
                height: '39px',
                borderRadius: '14px',
                backgroundColor: 'white'
              }}
            >
              <span 
                className="text-[16px] font-semibold text-[#2f2d2d]"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  whiteSpace: 'nowrap'
                }}
              >
                Book a Call
              </span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;