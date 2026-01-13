import React from 'react';
import Image from 'next/image';

const WorkflowSection = () => {
  const benefitsLeft = [
    '24/7 Availability',
    'Seamless Appointment Booking',
    'Automated Pricing Estimates',
    'Lower Costs & Higher Efficiency',
  ];

  const benefitsRight = [
    'Instant Customer Assistance',
    'Lead Nurturing & Follow Ups',
    'Consistent Service Quality',
  ];

  return (
    <section className="relative w-full py-[120px] bg-white overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Header and Benefits List */}
          <div className="w-full lg:w-1/2 z-10">
            <h2 
              className="text-[#1A1A1A] text-[48px] font-semibold leading-[1.2] mb-12 tracking-[-0.02em]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Perfect workflow <br />
              for your business
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Left Column of Benefits */}
              <div className="flex flex-col gap-6">
                {benefitsLeft.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="2.5" fill="#EEEEEE" />
                        <circle cx="18" cy="6" r="2.5" fill="#EEEEEE" />
                        <circle cx="6" cy="18" r="2.5" fill="#EEEEEE" />
                        <circle cx="18" cy="18" r="2.5" fill="#EEEEEE" />
                      </svg>
                    </div>
                    <p className="text-[#666666] text-[18px] font-medium leading-[1.4]">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Column of Benefits */}
              <div className="flex flex-col gap-6">
                {benefitsRight.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="2.5" fill="#EEEEEE" />
                        <circle cx="18" cy="6" r="2.5" fill="#EEEEEE" />
                        <circle cx="6" cy="18" r="2.5" fill="#EEEEEE" />
                        <circle cx="18" cy="18" r="2.5" fill="#EEEEEE" />
                      </svg>
                    </div>
                    <p className="text-[#666666] text-[18px] font-medium leading-[1.4]">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Background Illustration */}
          <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-[60%] pointer-events-none opacity-40">
            <div className="relative aspect-[2478/1896] w-full">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/JrBKj2Nj9Wo2Jxljc9mVewgo7s-9.png"
                alt="System Workflow Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Mobile Illustration - shown below content on tablets/phones if needed */}
          <div className="lg:hidden w-full mt-16 flex justify-center opacity-60">
            <div className="relative w-full max-w-[600px] aspect-[2478/1896]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/JrBKj2Nj9Wo2Jxljc9mVewgo7s-9.png"
                alt="System Workflow Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Dot Grid Background Pattern Overlay (Optional, matches High level design) */}
      <div className="absolute inset-0 dot-grid -z-10 opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default WorkflowSection;