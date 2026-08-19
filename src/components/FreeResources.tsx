import React, { useState } from 'react';
import { FREE_RESOURCES_DATA } from '../data/judiciaryData';
import { FreeResource } from '../types';
import { 
  FileText, 
  Download, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  CheckCircle, 
  Calendar, 
  Layers,
  FileCheck2
} from 'lucide-react';

interface FreeResourcesProps {
  onOpenMockTest: () => void;
  onOpenResourceDetail: (resource: FreeResource) => void;
}

export const FreeResources: React.FC<FreeResourcesProps> = ({ 
  onOpenMockTest,
  onOpenResourceDetail
}) => {
  return (
    <section 
      id="free-resources" 
      className="py-24 bg-[#F7F4EE] text-[#202124] relative overflow-hidden"
    >
      {/* Decorative Warm Accent Watermark */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C99A3E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C99A3E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE5D8] border border-[#C99A3E]/40 text-[#8C6418] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#A47B2C]" />
            <span>OPEN ACCESS LEGAL VAULT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171A1F] font-heading tracking-tight">
            Start Preparing for Free
          </h2>

          <p className="text-base sm:text-lg text-[#555860] max-w-2xl mx-auto font-sans">
            Access curated high-yield Bare Act mind maps, all-India diagnostic mock tests, and monthly constitutional verdict compendiums at zero cost.
          </p>
        </div>

        {/* 3 Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FREE_RESOURCES_DATA.map((res) => {
            const isMockTest = res.id === 'mock-test';

            return (
              <div
                key={res.id}
                id={`free-resource-card-${res.id}`}
                className="rounded-sm bg-white border-t-2 border-[#C99A3E] border-x border-b border-[#E2DDD3] p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Tag & Format */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider bg-[#F5EEDD] text-[#8C6418] border border-[#C99A3E]/30">
                      {res.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-[#9B9B9B] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C99A3E]" />
                      {res.updatedDate}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-sm bg-[#F7F4EE] border border-[#C99A3E]/30 flex items-center justify-center text-[#C99A3E] group-hover:bg-[#C99A3E] group-hover:text-white transition-all shrink-0">
                      {isMockTest ? (
                        <FileCheck2 className="w-5 h-5" />
                      ) : (
                        <BookOpen className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#202124] uppercase tracking-tight group-hover:text-[#C99A3E] transition-colors leading-snug">
                        {res.title}
                      </h3>
                      <span className="text-xs text-[#C99A3E] font-semibold">
                        {res.pagesOrCount}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#9B9B9B] leading-relaxed mb-6">
                    {res.description}
                  </p>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4 border-t border-[#EAE5D8]">
                  {isMockTest ? (
                    <button
                      onClick={onOpenMockTest}
                      className="w-full py-2.5 px-4 rounded-sm bg-[#101214] hover:bg-[#1E222A] text-[#C99A3E] font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer uppercase tracking-wider"
                    >
                      <FileCheck2 className="w-4 h-4" />
                      <span>START TESTING →</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => onOpenResourceDetail(res)}
                      className="w-full py-2.5 px-4 rounded-sm bg-[#F7F4EE] hover:bg-[#EDE8DC] text-[#202124] border border-[#C99A3E]/40 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer uppercase tracking-wider"
                    >
                      <Download className="w-4 h-4 text-[#C99A3E]" />
                      <span>DOWNLOAD COMPANION →</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Explore Free Resources Hub Banner */}
        <div className="mt-12 p-6 rounded-sm bg-white border-t-2 border-[#C99A3E] border-x border-b border-[#E0D9CB] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-[#202124] font-georgia">
              Looking for 15-Year Solved Judicial Papers?
            </h3>
            <p className="text-xs text-[#9B9B9B]">
              Access state-wise PYQs with model judicial answers and case law ratio analysis in our student repository.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              id="btn-explore-free-resources"
              onClick={onOpenMockTest}
              className="px-6 py-3 rounded-sm bg-[#C99A3E] hover:bg-[#E5C36A] text-[#101214] font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              <span>Explore Free Resources Hub</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
