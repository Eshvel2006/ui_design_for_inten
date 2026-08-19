import React, { useState } from 'react';
import { RESULTS_DATA } from '../data/judiciaryData';
import { ResultItem } from '../types';
import { Award, Sparkles, ArrowRight, Quote, CheckCircle2, ChevronRight, Scale } from 'lucide-react';

interface ResultsSuccessStoriesProps {
  onViewAllResults?: () => void;
  onOpenCounselling: () => void;
}

export const ResultsSuccessStories: React.FC<ResultsSuccessStoriesProps> = ({ 
  onViewAllResults,
  onOpenCounselling
}) => {
  const [selectedResult, setSelectedResult] = useState<ResultItem | null>(null);

  return (
    <section 
      id="results" 
      className="py-24 bg-[#101214] relative overflow-hidden border-t border-[#C99A3E]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171A1F] border border-[#C99A3E]/30 text-[#E5C36A] text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#C99A3E]" />
            <span>PROVEN SELECTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading tracking-tight">
            From Preparation to the Bench
          </h2>

          <p className="text-base sm:text-lg text-[#9B9B9B] max-w-2xl mx-auto font-sans">
            Hear from aspirants who transformed their judicial dream into reality with disciplined mentoring and high-precision Mains answer writing.
          </p>
        </div>

        {/* Results Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESULTS_DATA.slice(0, 3).map((item) => (
            <div
              key={item.id}
              id={`result-card-${item.id}`}
              className="rounded-2xl bg-gradient-to-b from-[#171A20] to-[#121418] border border-[#C99A3E]/25 hover:border-[#C99A3E]/70 p-6 sm:p-7 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#C99A3E]/15 flex flex-col justify-between group relative"
            >
              {/* Gold Rank Ribbon */}
              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 rounded-full bg-[#C99A3E]/15 border border-[#C99A3E]/40 text-[#E5C36A] font-bold text-xs font-serif tracking-wide">
                  {item.rankOrStatus}
                </span>
                <span className="text-[11px] text-[#9B9B9B] font-mono">
                  {item.year} • {item.state}
                </span>
              </div>

              {/* Student Header */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#232832] to-[#14171C] border-2 border-[#C99A3E] flex items-center justify-center text-sm font-bold text-[#E5C36A] shadow-md group-hover:scale-105 transition-transform">
                  {item.avatarInitials}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-serif group-hover:text-[#E5C36A] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#B0B0B0] font-sans">
                    {item.exam}
                  </p>
                </div>
              </div>

              {/* Quote & Review */}
              <div className="relative mb-6 pt-2">
                <Quote className="w-6 h-6 text-[#C99A3E]/20 absolute -top-1 -left-1 pointer-events-none" />
                <p className="text-xs sm:text-sm text-[#9B9B9B] italic leading-relaxed pl-3 border-l-2 border-[#C99A3E]/30 font-serif">
                  "{item.quote}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#C99A3E]/15 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-[#E5C36A]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-semibold">{item.scoreHighlight || 'Verified Selection'}</span>
                </div>
                <button
                  onClick={() => setSelectedResult(item)}
                  className="text-xs text-[#E5C36A] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <span>Strategy</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Results CTA Bar */}
        <div className="mt-12 text-center">
          <button
            id="btn-view-all-results"
            onClick={onViewAllResults || onOpenCounselling}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#171A1F] hover:bg-[#20252D] text-white border border-[#C99A3E]/40 hover:border-[#C99A3E] text-sm font-semibold transition-all shadow-lg cursor-pointer"
          >
            <span>View All Results & Ranker Interviews</span>
            <ArrowRight className="w-4 h-4 text-[#E5C36A]" />
          </button>
        </div>

        {/* Modal for Ranker Strategy */}
        {selectedResult && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#171A1F] border border-[#C99A3E]/40 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative">
              <button
                onClick={() => setSelectedResult(null)}
                className="absolute top-4 right-4 text-[#9B9B9B] hover:text-white text-lg font-bold"
              >
                ✕
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#101214] border-2 border-[#C99A3E] flex items-center justify-center font-bold text-[#E5C36A]">
                  {selectedResult.avatarInitials}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-serif">{selectedResult.name}</h3>
                  <p className="text-xs text-[#E5C36A]">{selectedResult.rankOrStatus} • {selectedResult.exam}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#101214] border border-[#C99A3E]/20 space-y-2 text-xs text-[#E0E0E0]">
                <div className="font-bold text-[#E5C36A] uppercase tracking-wider">Key Preparation Takeaway:</div>
                <p className="leading-relaxed">
                  "For Mains, the biggest hurdle is time management during judgment writing. JurisBench's 3-hour weekly mock tests gave me the exact muscle memory required to frame issues, appreciate facts, and apply relevant case laws effortlessly."
                </p>
              </div>

              <div className="text-right pt-2">
                <button
                  onClick={() => {
                    setSelectedResult(null);
                    onOpenCounselling();
                  }}
                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#C99A3E] to-[#E5C36A] text-[#101214] font-bold text-xs shadow-md"
                >
                  Book Counselling to Follow This Strategy
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
