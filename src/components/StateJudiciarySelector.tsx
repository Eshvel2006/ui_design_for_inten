import React, { useState } from 'react';
import { STATE_EXAMS_DATA } from '../data/judiciaryData';
import { MapPin, BookOpen, Layers, CheckCircle2, ChevronRight, Sparkles, Scale, FileText } from 'lucide-react';

interface StateJudiciarySelectorProps {
  onOpenCounselling: () => void;
}

export const StateJudiciarySelector: React.FC<StateJudiciarySelectorProps> = ({ onOpenCounselling }) => {
  const [selectedStateCode, setSelectedStateCode] = useState<string>('UP');

  const currentState = STATE_EXAMS_DATA.find(s => s.code === selectedStateCode) || STATE_EXAMS_DATA[0];

  return (
    <section 
      id="state-judiciary" 
      className="py-20 bg-[#101214] relative border-t border-[#C99A3E]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171A1F] border border-[#C99A3E]/30 text-[#E5C36A] text-xs font-semibold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#C99A3E]" />
              <span>PAN-INDIA STATE EXAMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Tailored State Judiciary Preparation
            </h2>
            <p className="text-sm text-[#9B9B9B] max-w-xl mt-1">
              Every state judiciary has distinct local laws, languages, and marking schemes. We provide state-dedicated modules.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#E5C36A] font-semibold">Select Target State:</span>
          </div>
        </div>

        {/* State Selection Bar */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {STATE_EXAMS_DATA.map((state) => (
            <button
              key={state.code}
              onClick={() => setSelectedStateCode(state.code)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 border cursor-pointer ${
                selectedStateCode === state.code
                  ? 'bg-[#1D2129] border-[#C99A3E] text-white shadow-lg shadow-[#C99A3E]/15 ring-1 ring-[#C99A3E]/40'
                  : 'bg-[#14171C] border-[#C99A3E]/20 text-[#A0A0A0] hover:text-white hover:border-[#C99A3E]/40'
              }`}
            >
              <Scale className={`w-4 h-4 ${selectedStateCode === state.code ? 'text-[#E5C36A]' : 'text-[#9B9B9B]'}`} />
              <span>{state.shortName}</span>
            </button>
          ))}
        </div>

        {/* State Detail Display Box */}
        <div className="rounded-2xl bg-[#171A1F] border border-[#C99A3E]/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: State Title and Stages */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-1">
                <div className="text-xs font-semibold text-[#E5C36A] uppercase tracking-wider">
                  Official Exam Blueprint
                </div>
                <h3 className="text-2xl font-bold text-white font-serif">
                  {currentState.name}
                </h3>
              </div>

              {/* Exam Stages */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-[#E0E0E0] uppercase tracking-wider">
                  Examination Stages & Format:
                </div>
                <div className="space-y-2">
                  {currentState.examStages.map((stage, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#101214] border border-[#C99A3E]/20 text-xs text-[#E0E0E0]">
                      <div className="w-6 h-6 rounded-full bg-[#C99A3E]/15 border border-[#C99A3E]/30 text-[#E5C36A] flex items-center justify-center font-bold text-[11px]">
                        0{idx + 1}
                      </div>
                      <span className="font-medium">{stage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vacancy / Cycle Alert */}
              <div className="p-4 rounded-xl bg-[#101214]/80 border border-[#C99A3E]/20 flex items-center justify-between text-xs">
                <div>
                  <div className="text-[#9B9B9B]">Estimated Vacancies</div>
                  <div className="text-sm font-bold text-white font-serif">{currentState.totalVacancies}</div>
                </div>
                <div className="text-right">
                  <div className="text-[#9B9B9B]">Upcoming Notification</div>
                  <div className="text-xs font-bold text-[#E5C36A]">{currentState.nextExamExpected}</div>
                </div>
              </div>
            </div>

            {/* Right: State Specific Syllabus & Local Laws */}
            <div className="lg:col-span-7 space-y-6 bg-[#121418] p-6 rounded-xl border border-[#C99A3E]/20">
              
              {/* Core Syllabus Focus */}
              <div>
                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#E5C36A]" />
                  <span>Key Syllabus Focus for {currentState.shortName}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentState.syllabusFocus.map((subj, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#181C23] border border-[#C99A3E]/15 text-xs text-[#D1D5DB]">
                      <CheckCircle2 className="w-4 h-4 text-[#E5C36A] mt-0.5 shrink-0" />
                      <span>{subj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local Laws Coverage */}
              <div>
                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#E5C36A]" />
                  <span>State Local Acts & Specialized Bare Acts Covered:</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentState.localLaws.map((law, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 rounded-lg bg-[#1E232B] border border-[#C99A3E]/30 text-xs font-medium text-[#E5C36A]"
                    >
                      {law}
                    </span>
                  ))}
                </div>
              </div>

              {/* State CTA Action */}
              <div className="pt-4 border-t border-[#C99A3E]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#9B9B9B]">
                  Includes dedicated Hindi/English language papers and state judgment writing modules.
                </div>
                <button
                  onClick={onOpenCounselling}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#C99A3E] to-[#E5C36A] text-[#101214] font-bold text-xs shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
                >
                  <span>Join {currentState.shortName} Batch</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
