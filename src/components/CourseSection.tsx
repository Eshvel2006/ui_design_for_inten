import React, { useState } from 'react';
import { Course } from '../types';
import { COURSES_DATA } from '../data/judiciaryData';
import { 
  BookOpen, 
  Check, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  GraduationCap, 
  FileText, 
  ShieldCheck, 
  Award,
  Layers,
  ChevronRight
} from 'lucide-react';

interface CourseSectionProps {
  onSelectCourse: (course: Course) => void;
  onOpenCounselling: () => void;
}

export const CourseSection: React.FC<CourseSectionProps> = ({ 
  onSelectCourse, 
  onOpenCounselling 
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'foundation' | 'state' | 'pcs-j' | 'test-series'>('all');

  const filteredCourses = activeFilter === 'all' 
    ? COURSES_DATA 
    : COURSES_DATA.filter(c => c.id === activeFilter || (activeFilter === 'state' && c.id === 'state-judiciary') || (activeFilter === 'pcs-j' && c.id === 'pcs-j-crash'));

  const getCourseIcon = (id: string) => {
    switch (id) {
      case 'foundation':
        return GraduationCap;
      case 'state-judiciary':
        return BookOpen;
      case 'pcs-j-crash':
        return ShieldCheck;
      case 'test-series':
        return FileText;
      default:
        return Award;
    }
  };

  return (
    <section 
      id="courses" 
      className="py-24 bg-[#121418] relative overflow-hidden border-t border-[#C99A3E]/15"
    >
      {/* Subtle background ambient gold wash */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#C99A3E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#E5C36A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title & Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1E24] border border-[#C99A3E]/30 text-[#E5C36A] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A3E]" />
            <span>CHOOSE YOUR PATH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading tracking-tight">
            Courses Designed for Every Aspirant
          </h2>

          <p className="text-base sm:text-lg text-[#9B9B9B] max-w-2xl mx-auto font-sans">
            From comprehensive foundational mastery to targeted state-specific crash programs and high-precision test series.
          </p>
        </div>

        {/* Course Filters Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Programs' },
            { id: 'foundation', label: 'Judiciary Foundation' },
            { id: 'state', label: 'State Specific (PCS-J / DJS / MP / RJS)' },
            { id: 'test-series', label: 'All-India Test Series' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-sm text-xs font-bold transition-all cursor-pointer uppercase tracking-wider ${
                activeFilter === tab.id
                  ? 'bg-[#C99A3E] text-[#101214] shadow-[0_0_15px_rgba(201,154,62,0.2)]'
                  : 'bg-[#171A1F] text-[#B0B0B0] hover:text-white border border-[#C99A3E]/30 hover:border-[#C99A3E]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 4 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => {
            const Icon = getCourseIcon(course.id);
            const isFeatured = course.id === 'foundation';

            return (
              <div
                key={course.id}
                id={`course-card-${course.id}`}
                className={`relative rounded-sm p-6 transition-all duration-300 flex flex-col justify-between border-t-2 border-[#C99A3E] border-x border-b group ${
                  isFeatured 
                    ? 'bg-[#171A1F] border-x-[#C99A3E]/40 border-b-[#C99A3E]/40 shadow-2xl shadow-[#C99A3E]/10' 
                    : 'bg-[#171A1F] border-x-[#C99A3E]/20 border-b-[#C99A3E]/20 hover:border-x-[#C99A3E]/50 hover:border-b-[#C99A3E]/50 shadow-lg'
                } hover:-translate-y-1`}
              >
                {/* Badge if available */}
                {course.badge && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider bg-[#C99A3E] text-[#101214] shadow-md">
                      {course.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Icon & Duration */}
                  <div className="flex items-center justify-between mb-4 pt-1">
                    <div className="w-12 h-12 rounded-sm bg-[#101214] border border-[#C99A3E]/40 flex items-center justify-center text-[#C99A3E] group-hover:scale-105 group-hover:border-[#C99A3E] transition-all">
                      <Icon className="w-6 h-6 text-[#C99A3E]" />
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-[#9B9B9B] bg-[#101214] px-2.5 py-1 rounded-sm border border-[#C99A3E]/20 font-mono">
                      <Clock className="w-3 h-3 text-[#C99A3E]" />
                      <span>{course.duration.split(' ')[0]} {course.duration.split(' ')[1]}</span>
                    </div>
                  </div>

                  {/* Course Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white font-georgia group-hover:text-[#C99A3E] transition-colors leading-snug mb-1">
                    {course.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#C99A3E] mb-3">
                    {course.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs text-[#9B9B9B] leading-relaxed mb-5">
                    {course.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-[#C99A3E]/15">
                    {course.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#E0E0E0]">
                        <Check className="w-3.5 h-3.5 text-[#C99A3E] mt-0.5 shrink-0" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Pricing & CTA Button */}
                <div className="pt-4 border-t border-[#C99A3E]/20 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-[#9B9B9B] line-through mr-1.5">{course.priceOriginal}</span>
                      <span className="text-xl font-bold text-white font-georgia">{course.priceDiscounted}</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded-sm border border-emerald-500/30">
                      Save 35%
                    </span>
                  </div>

                  <button
                    id={`btn-course-action-${course.id}`}
                    onClick={() => onSelectCourse(course)}
                    className={`w-full py-3 px-4 rounded-sm text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider ${
                      isFeatured
                        ? 'bg-[#C99A3E] text-[#101214] shadow-[0_0_15px_rgba(201,154,62,0.2)] hover:bg-[#E5C36A]'
                        : 'bg-transparent hover:bg-[#C99A3E]/10 text-[#C99A3E] border border-[#C99A3E]'
                    }`}
                  >
                    <span>{course.ctaText} →</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guidance Strip Below Courses */}
        <div className="mt-12 p-6 rounded-2xl bg-[#171A1F] border border-[#C99A3E]/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-[#C99A3E]/15 border border-[#C99A3E]/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#E5C36A]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Not sure which Judiciary program matches your target state exam?
              </h4>
              <p className="text-xs text-[#9B9B9B]">
                Speak with our Senior Legal Mentors to get a personalized state-wise preparation roadmap.
              </p>
            </div>
          </div>

          <button
            id="btn-course-counselling-cta"
            onClick={onOpenCounselling}
            className="px-5 py-2.5 rounded-lg bg-[#101214] hover:bg-[#1A1E24] text-[#E5C36A] border border-[#C99A3E]/40 text-xs font-bold transition-all whitespace-nowrap cursor-pointer"
          >
            Get Free Personalized Roadmap →
          </button>
        </div>

      </div>
    </section>
  );
};
