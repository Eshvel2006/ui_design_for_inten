import React from 'react';
import { 
  Award, 
  BookOpenCheck, 
  BarChart3, 
  UserCheck, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Scale,
  GraduationCap
} from 'lucide-react';
import { FACULTY_TEAM } from '../data/judiciaryData';

interface WhyChooseUsProps {
  onOpenCounselling: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenCounselling }) => {
  const benefits = [
    {
      id: 1,
      title: 'Expert Faculty',
      subtitle: 'Learn from experienced legal educators.',
      description: 'Our pedagogy is led by former High Court judges, retired District Judges, Public Prosecutors, and National Law University (NLU) gold medalists with decades of courtroom and academic mastery.',
      icon: GraduationCap,
      stat: '50+ Law Mentors'
    },
    {
      id: 2,
      title: 'Updated Curriculum',
      subtitle: 'Content aligned with changing examination patterns.',
      description: 'Comprehensive integration of Bharatiya Nyaya Sanhita (BNS), BNSS, and BSA alongside transition tables from IPC, CrPC, and IEA, with full coverage of recent landmark Supreme Court verdicts.',
      icon: BookOpenCheck,
      stat: '100% 2026 Ready'
    },
    {
      id: 3,
      title: 'Performance Analytics',
      subtitle: 'Understand your strengths and weaknesses through data.',
      description: 'Comprehensive test diagnostic engine measuring sectional accuracy, negative marking penalty rates, time per legal question, and state-wise rank prediction against 5,000+ active peers.',
      icon: BarChart3,
      stat: 'All-India Ranking'
    },
    {
      id: 4,
      title: 'Personalized Mentorship',
      subtitle: 'Get guidance throughout your preparation journey.',
      description: 'Dedicated 1-on-1 mentors to review your Mains answer writing copies within 72 hours, refine judgment writing frameworks, and conduct realistic mock interview panels.',
      icon: UserCheck,
      stat: '1:1 Doubt Support'
    }
  ];

  return (
    <section 
      id="why-us" 
      className="py-24 bg-[#14171D] relative overflow-hidden border-t border-[#C99A3E]/15"
    >
      {/* Decorative background geometry */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C99A3E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E5C36A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Headline & High Impact Stat */}
          <div className="lg:col-span-5 space-y-8 sticky top-28">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1E26] border border-[#C99A3E]/30 text-[#E5C36A] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#C99A3E]" />
                <span>ACADEMIC INTEGRITY & RIGOR</span>
              </div>

              {/* Decorative gold line */}
              <div className="w-16 h-1 bg-gradient-to-r from-[#C99A3E] to-[#E5C36A] rounded-full" />

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading leading-tight">
                Why Serious Aspirants Choose Us
              </h2>

              <p className="text-base text-[#9B9B9B] leading-relaxed font-sans">
                Cracking the Judiciary exam demands more than passive memorization. It requires judicial temperament, statutory articulation, and precise Mains answer structure.
              </p>
            </div>

            {/* Premium Gold Satisfaction Metric Block */}
            <div className="rounded-2xl bg-gradient-to-br from-[#1A1E25] to-[#12151A] border border-[#C99A3E]/35 p-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-[#C99A3E]/10 rounded-full blur-xl group-hover:bg-[#C99A3E]/20 transition-all" />
              
              <div className="flex items-center gap-4">
                <div className="text-4xl sm:text-5xl font-bold font-serif text-gold-gradient tracking-tight">
                  90%+
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-serif">
                    Student Satisfaction Rate
                  </h4>
                  <p className="text-xs text-[#9B9B9B] mt-0.5">
                    Based on verified post-batch surveys across 14 state cohorts.
                  </p>
                </div>
              </div>

              {/* Subtle list */}
              <div className="mt-4 pt-4 border-t border-[#C99A3E]/15 grid grid-cols-2 gap-2 text-[11px] text-[#E0E0E0]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C36A]" />
                  <span>Transparent Evaluation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C36A]" />
                  <span>No Fluff Notes</span>
                </div>
              </div>
            </div>

            {/* Quick Mentorship Callout Button */}
            <div className="pt-2">
              <button
                onClick={onOpenCounselling}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#1A1E25] hover:bg-[#222832] text-[#E5C36A] border border-[#C99A3E]/40 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Scale className="w-4 h-4 text-[#C99A3E]" />
                <span>Talk with an Academic Advisor</span>
              </button>
            </div>

          </div>

          {/* Right Column: 4 Benefit Blocks */}
          <div className="lg:col-span-7 space-y-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.id}
                  id={`benefit-block-${benefit.id}`}
                  className="rounded-2xl bg-[#171A20] border border-[#C99A3E]/25 hover:border-[#C99A3E]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C99A3E]/10 group"
                >
                  <div className="flex items-start gap-4">
                    {/* Number and Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#101214] border border-[#C99A3E]/30 flex items-center justify-center text-[#E5C36A] group-hover:border-[#C99A3E] group-hover:scale-105 transition-all shrink-0">
                      <Icon className="w-6 h-6 text-[#E5C36A]" />
                    </div>

                    {/* Content */}
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white font-serif group-hover:text-[#E5C36A] transition-colors">
                          {benefit.title}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#101214] border border-[#C99A3E]/20 text-[#E5C36A]">
                          {benefit.stat}
                        </span>
                      </div>

                      <p className="text-xs font-semibold text-[#E5C36A]/90 font-sans">
                        {benefit.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-[#9B9B9B] leading-relaxed pt-1 font-sans">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Lead Faculty Dossier Teaser */}
            <div className="p-6 rounded-2xl bg-[#101214] border border-[#C99A3E]/25 mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5C36A] mb-3">
                Featured Faculty & Advisory Board:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FACULTY_TEAM.slice(0, 2).map((fac, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#171A20] border border-[#C99A3E]/15">
                    <div className="text-xs font-bold text-white">{fac.name}</div>
                    <div className="text-[11px] text-[#E5C36A]">{fac.role}</div>
                    <div className="text-[10px] text-[#9B9B9B] mt-0.5">{fac.experience}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
