import React from 'react';
import { TESTIMONIALS_DATA } from '../data/judiciaryData';
import { Star, Quote, Sparkles, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section 
      id="testimonials" 
      className="py-24 bg-[#12151B] relative overflow-hidden border-t border-[#C99A3E]/15"
    >
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#C99A3E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1E26] border border-[#C99A3E]/30 text-[#E5C36A] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A3E]" />
            <span>ALUMNI VOICES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading tracking-tight">
            Endorsements from the Judicial Service
          </h2>

          <p className="text-base sm:text-lg text-[#9B9B9B] max-w-2xl mx-auto font-sans">
            Read authentic feedback from serving Civil Judges and Metropolitan Magistrates who prepared with JurisBench.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className="rounded-2xl bg-[#161920] border border-[#C99A3E]/25 hover:border-[#C99A3E]/70 p-7 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#C99A3E]/15 flex flex-col justify-between group relative"
            >
              {/* Gold Quote Mark & Star Rating */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#C99A3E] gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C99A3E]" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#C99A3E]/30 group-hover:text-[#C99A3E]/60 transition-colors" />
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed mb-6 italic font-serif">
                  "{t.content}"
                </p>
              </div>

              {/* Student Details */}
              <div className="pt-4 border-t border-[#C99A3E]/15 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white font-serif group-hover:text-[#E5C36A] transition-colors">
                    {t.name}
                  </h3>
                  <p className="text-xs text-[#E5C36A] font-semibold mt-0.5">
                    {t.currentRole}
                  </p>
                  <p className="text-[11px] text-[#9B9B9B]">
                    {t.exam} • {t.location}
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#101214] border border-[#C99A3E]/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
