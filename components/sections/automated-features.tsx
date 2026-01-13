import React from 'react';
import Image from 'next/image';

const AutomatedWorkflow = () => {
  const features = [
    {
      title: "Customer Calls",
      description: "The AI receptionist answers instantly and understands customer needs through natural conversation.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/4W48oRupPueHTrgqGA6qH2ZCTgs-11.png",
      bgGrid: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/BpUgcKlbgozaYrDw9SLXq6Gac-10.png"
    },
    {
      title: "Intelligent routing",
      description: "Calls are smartly routed—appointments get scheduled, inquiries answered, and sales leads qualified.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/8lkgTCtebueAoaMEd5tfDYRSkO4-12.png",
      bgGrid: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/BpUgcKlbgozaYrDw9SLXq6Gac-10.png"
    },
    {
      title: "Seamless integration",
      description: "All interactions sync with your CRM, update your calendar, and provide key insights.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/LLXKhO9oWxJTrj4FNAXor1QoSOE-13.png",
      bgGrid: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/BpUgcKlbgozaYrDw9SLXq6Gac-10.png"
    },
    {
      title: "Continuous improvement",
      description: "Your AI agents keep improving with ongoing learning, feedback, and monthly optimizations.",
      // Note: Continuous improvement uses a special call UI asset as seen in screenshots, if not explicitly provided as separate, we use a placeholder or derived visual. 
      // Based on structure it uses a similar grid background.
      image: null,
      customContent: (
        <div className="relative w-full h-[200px] flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-md border border-border rounded-2xl p-4 shadow-xl flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary">
                    <img src="https://framerusercontent.com/images/rJfG75HuqSRYpn5Rifv6UnzZymc.png?width=256&height=272" alt="AI Julia" className="w-full h-full object-cover" />
                </div>
                <div>
                    <div className="text-[12px] text-muted-foreground leading-none mb-1">Sales call with <span className="text-black font-semibold">Julia</span></div>
                    <div className="flex gap-1">
                        <div className="h-1.5 w-8 bg-primary/20 rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-primary"></div>
                        </div>
                        <div className="h-1.5 w-6 bg-primary/20 rounded-full"></div>
                    </div>
                </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-y-4"></div>
        </div>
      ),
      bgGrid: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a867b8f0-757c-4109-a69b-72a951592c8b-vocalchat-ai/assets/images/BpUgcKlbgozaYrDw9SLXq6Gac-10.png"
    }
  ];

  return (
    <section className="py-[140px] px-6 bg-white" id="learnmore">
      <div className="container mx-auto">
        <div className="text-center mb-[80px]">
          <h2 className="text-[42px] md:text-[48px] font-display font-semibold text-black tracking-tight leading-[1.2]">
            Fully automated workflow
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px] mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-[#F7F7F7] border border-[#E5E5E5] rounded-[32px] overflow-hidden min-h-[500px] flex flex-col justify-between"
            >
              {/* Grid Background Layer */}
              <div className="absolute inset-0 z-0 opacity-40">
                <Image 
                  src={feature.bgGrid} 
                  alt="Grid Background" 
                  fill
                  className="object-cover"
                />
              </div>

              {/* Visual Content Area */}
              <div className="relative z-10 flex-1 flex items-center justify-center p-8 overflow-hidden">
                {feature.image ? (
                  <div className="relative w-full h-full max-h-[220px] transition-transform duration-500 group-hover:scale-105">
                    <Image 
                      src={feature.image} 
                      alt={feature.title} 
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  feature.customContent
                )}
              </div>

              {/* Text Content Area */}
              <div className="relative z-10 p-10 pt-0">
                <h3 className="text-[24px] font-display font-semibold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#666666] text-[16px] leading-[1.6]">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Corner Dots - Replicating HTML Structure */}
              <div className="absolute top-4 left-4 w-1 h-1 bg-border rounded-full opacity-50"></div>
              <div className="absolute top-4 right-4 w-1 h-1 bg-border rounded-full opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-border rounded-full opacity-50"></div>
              <div className="absolute bottom-4 right-4 w-1 h-1 bg-border rounded-full opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomatedWorkflow;