import React, { useState } from 'react';
import { 
  Video, 
  PlaySquare, 
  FileCheck2, 
  BookMarked, 
  UserCheck, 
  ArrowRight, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface FeaturedServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({ onSelectService }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Live Classes',
      tag: 'Interactive',
      description: 'Interactive classes with experienced faculty, two-way audio-video doubt clearing, and daily case law discussions.',
      icon: Video,
      highlights: 'Daily 2-Hour Live Batches'
    },
    {
      id: 2,
      title: 'Recorded Lectures',
      tag: 'Flexible Access',
      description: 'Learn anytime at your own pace with unlimited 1080p recorded archives, 1.5x/2x playback, and indexed chapter bookmarks.',
      icon: PlaySquare,
      highlights: 'Full Validity Till Exam'
    },
    {
      id: 3,
      title: 'Test Series',
      tag: 'Exam Simulation',
      description: 'Real exam-style questions and performance analysis with state-wise negative marking and Mains copy checking.',
      icon: FileCheck2,
      highlights: '100+ Prelims & Mains Tests'
    },
    {
      id: 4,
      title: 'Study Materials',
      tag: 'Comprehensive',
      description: 'Updated notes, case laws, bare acts and revision resources incorporating 2024–2026 criminal law transitions.',
      icon: BookMarked,
      highlights: 'Curated Bare Act Mind Maps'
    },
    {
      id: 5,
      title: 'Personal Mentorship',
      tag: '1-on-1 Guidance',
      description: 'Personalized academic guidance, personalized study timetable design, and dedicated doubt solving by top rankers.',
      icon: UserCheck,
      highlights: 'Weekly Progress Review'
    }
  ];

  return (
    <section 
      id="featured-services" 
      className="py-20 bg-[#101214] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171A1F] border border-[#C99A3E]/30 text-[#E5C36A] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A3E]" />
            <span>LEARNING ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading tracking-tight">
            Everything You Need to Prepare With Confidence
          </h2>

          <p className="text-base sm:text-lg text-[#9B9B9B] max-w-2xl mx-auto font-sans">
            A comprehensive, battle-tested learning framework structured specifically for state judicial services and PCS (J) requirements.
          </p>
        </div>

        {/* 5 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = activeCard === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => onSelectService && onSelectService(service.title)}
                id={`feature-card-${service.id}`}
                className={`group relative rounded-sm p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer border-t-2 border-[#C99A3E] border-x border-b ${
                  isHovered 
                    ? 'bg-[#202124] border-[#C99A3E] shadow-xl shadow-[#C99A3E]/10 -translate-y-1' 
                    : 'bg-[#171A1F] border-[#C99A3E]/20 hover:border-[#C99A3E]/50'
                }`}
              >
                {/* Top icon and tag */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-sm bg-[#101214] border border-[#C99A3E]/30 flex items-center justify-center text-[#C99A3E] group-hover:bg-[#C99A3E]/15 group-hover:border-[#C99A3E] transition-all">
                      <Icon className="w-6 h-6 text-[#C99A3E] group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-[#101214] border border-[#C99A3E]/20 text-[#C99A3E]">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white font-georgia group-hover:text-[#C99A3E] transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#9B9B9B] leading-relaxed group-hover:text-[#D1D5DB] transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Bottom link & highlight */}
                <div className="pt-5 mt-4 border-t border-[#C99A3E]/15 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#C99A3E]">
                    {service.highlights}
                  </span>
                  <div className="w-7 h-7 rounded-sm bg-[#101214] border border-[#C99A3E]/30 flex items-center justify-center text-[#C99A3E] group-hover:bg-[#C99A3E] group-hover:text-[#101214] transition-all">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
