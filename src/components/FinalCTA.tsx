import React from 'react';
import { ArrowRight, PhoneCall, Scale, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onExploreCourses: () => void;
  onOpenCounselling: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ 
  onExploreCourses, 
  onOpenCounselling 
}) => {
  return (
    <section 
      id="final-cta" 
      className="py-24 bg-[#101214] relative overflow-hidden border-t border-[#C99A3E]/30"
    >
      {/* Subtle gold glow behind container */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,154,62,0.12)_0%,rgba(16,18,20,1)_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C99A3E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Subtle Crest / Emblem */}
        <div className="inline-flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1F242C] to-[#12151A] border-2 border-[#C99A3E]/60 flex items-center justify-center shadow-2xl shadow-[#C99A3E]/20">
            <Scale className="w-8 h-8 text-[#E5C36A]" />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading leading-tight tracking-tight">
            Your Judicial Career Starts With{' '}
            <span className="text-gold-gradient italic font-bold">One Decision.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#B0B3BD] leading-relaxed max-w-2xl mx-auto font-sans">
            Start your preparation today with a structured learning system built for serious aspirants.
          </p>
        </div>

        {/* Benefits reminder pill row */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-[#E0E0E0] pt-2">
          <span className="flex items-center gap-1.5 bg-[#171A20] px-3.5 py-1.5 rounded-full border border-[#C99A3E]/20">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C36A]" />
            Free 1-on-1 Mentorship Session
          </span>
          <span className="flex items-center gap-1.5 bg-[#171A20] px-3.5 py-1.5 rounded-full border border-[#C99A3E]/20">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C36A]" />
            Instant Syllabus Blueprint
          </span>
          <span className="flex items-center gap-1.5 bg-[#171A20] px-3.5 py-1.5 rounded-full border border-[#C99A3E]/20">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C36A]" />
            Scholarship Diagnostic Test
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            id="btn-final-cta-explore-courses"
            onClick={onExploreCourses}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#C99A3E] via-[#E5C36A] to-[#C99A3E] text-[#101214] font-bold text-base shadow-2xl shadow-[#C99A3E]/30 hover:brightness-110 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer font-sans"
          >
            <span>Explore Courses</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            id="btn-final-cta-book-counselling"
            onClick={onOpenCounselling}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#171A20] hover:bg-[#222730] text-white border border-[#C99A3E]/50 hover:border-[#C99A3E] font-semibold text-base transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <PhoneCall className="w-4 h-4 text-[#E5C36A]" />
            <span>Book a Free Counselling Session</span>
          </button>
        </div>

        {/* Subtle trust footer */}
        <p className="text-xs text-[#7E828E] pt-2">
          No obligation. Talk directly with senior legal faculty and ex-rankers.
        </p>

      </div>
    </section>
  );
};
