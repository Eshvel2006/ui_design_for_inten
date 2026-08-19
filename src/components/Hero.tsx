import React from 'react';
import { 
  ArrowRight, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Compass, 
  FileCheck2, 
  Gavel, 
  Scale, 
  Shield, 
  Sparkles, 
  Star, 
  Users 
} from 'lucide-react';

interface HeroProps {
  onExploreCourses: () => void;
  onTakeMockTest: () => void;
  onOpenCounselling: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCourses,
  onTakeMockTest,
  onOpenCounselling
}) => {
  return (
    <section 
      id="hero" 
      className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-[#101214] via-[#14171D] to-[#101214]"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C99A3E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E5C36A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#C99A3E_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Eyebrow with gold left border */}
            <div className="bg-[#C99A3E]/10 border-l-2 border-[#C99A3E] px-3 py-1 mb-2 w-fit">
              <span className="text-[#C99A3E] text-xs font-bold tracking-widest uppercase">
                Judiciary Exam Preparation
              </span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6 font-georgia">
              Your Journey to the <span className="text-[#C99A3E] italic">Bench</span> Begins Here
            </h1>

            {/* Supporting Subtext */}
            <p className="text-[#9B9B9B] text-base sm:text-lg max-w-xl leading-relaxed">
              Prepare smarter with expert guidance, structured courses, and personalized mentorship designed for serious Judiciary aspirants.
            </p>

            {/* Key Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-[#E0E0E0]">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#C99A3E]/20 text-[#E5C36A] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Updated with BNS, BNSS & BSA 2024–2026 Laws</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#C99A3E]/20 text-[#E5C36A] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Daily Mains Answer Writing & Evaluation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#C99A3E]/20 text-[#E5C36A] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Mentorship by Former Judicial Officers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#C99A3E]/20 text-[#E5C36A] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>State-Specific Local Laws Modules</span>
              </div>
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button 
                id="btn-hero-explore-courses"
                onClick={onExploreCourses}
                className="bg-[#C99A3E] text-[#101214] px-8 py-4 font-bold text-base hover:bg-[#E5C36A] flex items-center justify-center group rounded-sm shadow-[0_0_15px_rgba(201,154,62,0.2)] cursor-pointer transition-all"
              >
                <span>Explore Courses</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button 
                id="btn-hero-free-mock-test"
                onClick={onTakeMockTest}
                className="border border-[#C99A3E] text-[#C99A3E] px-8 py-4 font-bold text-base hover:bg-[#C99A3E]/10 rounded-sm cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                <FileCheck2 className="w-5 h-5 text-[#C99A3E]" />
                <span>Take Free Mock Test</span>
              </button>
            </div>

            {/* Trust statement & Social Proof */}
            <div className="mt-8 flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-[#101214] bg-[#202124] flex items-center justify-center text-[10px] font-bold text-[#E5C36A]">AS</div>
                <div className="w-8 h-8 rounded-full border-2 border-[#101214] bg-[#303134] flex items-center justify-center text-[10px] font-bold text-[#E5C36A]">PV</div>
                <div className="w-8 h-8 rounded-full border-2 border-[#101214] bg-[#404144] flex items-center justify-center text-[10px] font-bold text-[#E5C36A]">RK</div>
              </div>
              <span className="text-[#9B9B9B] text-xs">
                Trusted by <span className="text-white font-bold">5,000+</span> ambitious law aspirants across India
              </span>
            </div>
          </div>

          {/* Right Column: Premium Legal Visual Box with Geometric Polygon Accent */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-1.5 rounded-sm bg-gradient-to-tr from-[#C99A3E]/30 via-[#E5C36A]/15 to-transparent blur-sm -z-10" />

              {/* Main Cinematic Visual Box */}
              <div className="relative rounded-sm bg-[#202124] border border-[#C99A3E]/20 shadow-2xl overflow-hidden p-6 sm:p-8">
                
                {/* Courtroom / Gavel / Scales Presentation */}
                <div className="relative rounded-sm bg-[#171A1F] border border-[#C99A3E]/20 p-6 flex flex-col items-center justify-center min-h-[360px] text-center overflow-hidden">
                  
                  {/* Subtle dot pattern background */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C99A3E 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />

                  {/* Golden Gavel & Scales Emblem */}
                  <div className="relative z-10 mb-6">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#101214] border-2 border-[#C99A3E] flex items-center justify-center shadow-[0_0_20px_rgba(201,154,62,0.25)] group">
                      <div className="relative flex items-center justify-center">
                        <Scale className="w-12 h-12 sm:w-14 sm:h-14 text-[#C99A3E]" />
                        <Gavel className="w-6 h-6 text-[#E5C36A] absolute -bottom-1 -right-1" />
                      </div>
                    </div>
                  </div>

                  {/* Legal Education Crest Title */}
                  <div className="relative z-10 space-y-2">
                    <span className="text-[11px] font-bold tracking-[0.25em] text-[#C99A3E] uppercase font-cinzel">
                      ACADEMY OF JUDICIAL EXCELLENCE
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                      Rigorous Legal Pedagogy
                    </h3>
                    <p className="text-xs text-[#9B9B9B] max-w-xs">
                      Structured curriculum encompassing Major Procedural Acts, Substantive Law, Judgment Writing & Mock Courts.
                    </p>
                  </div>

                  {/* Subject Badges */}
                  <div className="relative z-10 flex flex-wrap justify-center gap-1.5 mt-6">
                    <span className="px-2.5 py-1 rounded-sm bg-[#101214] border border-[#C99A3E]/30 text-[11px] text-[#E5C36A]">
                      BNS • BNSS • BSA
                    </span>
                    <span className="px-2.5 py-1 rounded-sm bg-[#101214] border border-[#C99A3E]/30 text-[11px] text-[#E0E0E0]">
                      CPC 1908
                    </span>
                    <span className="px-2.5 py-1 rounded-sm bg-[#101214] border border-[#C99A3E]/30 text-[11px] text-[#E0E0E0]">
                      Constitutional Law
                    </span>
                    <span className="px-2.5 py-1 rounded-sm bg-[#101214] border border-[#C99A3E]/30 text-[11px] text-[#E5C36A]">
                      State Local Acts
                    </span>
                  </div>
                </div>

                {/* Overlaid Floating Glassmorphism Statistic Card 1 (Top Right) */}
                <div className="absolute -top-2 -right-2 sm:-right-3 bg-black/85 backdrop-blur-md border-t-2 border-[#C99A3E] border-x border-b border-[#C99A3E]/30 p-4 shadow-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#C99A3E]/15 border border-[#C99A3E]/30 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-[#E5C36A]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#C99A3E] font-georgia leading-none">
                      5,000+
                    </div>
                    <div className="text-[10px] text-white uppercase tracking-widest font-semibold mt-1">
                      Students Guided
                    </div>
                  </div>
                </div>

                {/* Overlaid Floating Glassmorphism Card 2 (Bottom Left) */}
                <div className="absolute -bottom-2 -left-2 sm:-left-3 bg-black/85 backdrop-blur-md border-t-2 border-[#C99A3E] border-x border-b border-[#C99A3E]/30 p-4 shadow-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#C99A3E]/15 border border-[#C99A3E]/30 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[#E5C36A]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-[#C99A3E]">Top Ranks 2025</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="text-xs text-white font-georgia font-semibold mt-0.5">
                      AIR 07, AIR 18 & AIR 42
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
