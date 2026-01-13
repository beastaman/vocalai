import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * FAQItem Component
 * Handles the individual accordion logic and styling.
 */
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="w-full border border-[#E5E5E5] rounded-[24px] mb-4 overflow-hidden transition-all duration-300 ease-in-out bg-white"
      style={{ boxShadow: 'none' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-[#fafafa] transition-colors"
      >
        <span className="text-[18px] md:text-[20px] font-medium text-[#000000] leading-tight pr-4">
          {question}
        </span>
        <div className={cn(
          "flex-shrink-0 transition-transform duration-300",
          isOpen ? "rotate-45" : "rotate-0"
        )}>
          <Plus className="w-6 h-6 text-[#000000]" strokeWidth={1.5} />
        </div>
      </button>
      
      <div 
        className={cn(
          "transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-8 pb-6 text-[#666666] text-[16px] leading-[1.6]">
          {answer}
        </div>
      </div>
    </div>
  );
};

/**
 * FAQ Section Component
 * Displays a list of frequently asked questions in an accordion format.
 */
const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What exactly does VocalAI do?",
      answer: "VocalAI provides advanced AI voice agents that handle your inbound and outbound business calls. It can answer customer inquiries, schedule appointments, qualify leads, and sync everything directly with your CRM and calendar, operating 24/7 without fatigue."
    },
    {
      question: "How do you ensure the AI doesn’t mess up a conversation?",
      answer: "Our AI is built on sophisticated large language models with strictly defined guardrails and custom scripts tailored to your business. We implement sentiment analysis and complex logic to ensure professional, accurate, and helpful interactions every time."
    },
    {
      question: "Do I need to change my phone system or CRM?",
      answer: "No, VocalAI is designed to integrate seamlessly with your existing infrastructure. We support a wide range of popular CRMs and can route calls through your current business phone system or provide high-quality virtual numbers."
    },
    {
      question: "How much does this cost?",
      answer: "We offer flexible pricing models based on the volume of calls and the complexity of the custom logic required. Generally, our solutions costs significantly less than hiring a full-time human receptionist or sales representative while providing 24/7 coverage."
    },
    {
      question: "What is the projected return on investment (ROI) and how fast will I see results?",
      answer: "Most businesses see an immediate ROI by capturing missed calls that previously would have gone to voicemail. By automating lead qualification and booking, you'll likely notice an increase in conversion rates and team efficiency within the first month."
    },
    {
      question: "Do you offer support and training?",
      answer: "Absolutely. We provide full implementation support, custom agent training, and ongoing monthly optimizations to ensure your AI agents continue to improve and adapt to your changing business needs."
    },
    {
      question: "Can I customize how the AI sounds and speaks?",
      answer: "Yes. You can choose from various high-quality voice profiles and even customize the personality, tone, and specific vocabulary used by the AI to match your brand's unique voice."
    },
    {
      question: "What if I want to go back to human-only interactions?",
      answer: "Our system is fully customizable. You can set specific rules for when a call should be escalated to a human team member, ensuring you always have the right balance between automation and personal touch."
    },
    {
      question: "How can AI automation specifically address the unique challenges of my business?",
      answer: "We start with a deep-dive consultation to understand your specific pain points. Whether it's high call volume during peak hours, complex scheduling requirements, or lead nurture follow-ups, we tailer the agent's logic to solve your specific bottleneck."
    },
    {
      question: "What measurable improvements can we expect in customer engagement and satisfaction?",
      answer: "You can expect zero hold times, instant responses to inquiries, and consistent service quality. We provide real-time analytics and sentiment insights so you can track improvements in customer satisfaction and engagement levels."
    },
    {
      question: "How does the implementation of AI voice agents and chatbots integrate with our current systems and processes?",
      answer: "We utilize robust API connections to sync data in real-time. When an AI agent handles a call, the details are immediately logged in your CRM, appointments appear on your Google or Outlook calendar, and notifications can be sent via Slack or Email."
    },
    {
      question: "How scalable is the AI solution to accommodate future growth or changes in business needs?",
      answer: "VocalAI is built for scale. Unlike human teams, our AI can handle an unlimited number of concurrent calls. As your business grows, your AI infrastructure scales instantly without the need for additional hiring or training phases."
    }
  ];

  return (
    <section className="py-[140px] px-6 bg-white w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[42px] md:text-[48px] font-semibold text-[#000000] font-display tracking-tight">
            Questions you may have
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-[1000px]">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;