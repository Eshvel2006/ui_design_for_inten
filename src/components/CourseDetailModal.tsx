import React from 'react';
import { Course } from '../types';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  User, 
  BookOpen, 
  ShieldCheck, 
  GraduationCap, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnroll
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#14171E] border border-[#C99A3E]/40 rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative">
        
        {/* Header */}
        <div className="p-6 border-b border-[#C99A3E]/20 flex items-start justify-between bg-[#101216] sticky top-0 z-10">
          <div>
            {course.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C99A3E]/20 text-[#E5C36A] border border-[#C99A3E]/30 mb-2 inline-block">
                {course.badge}
              </span>
            )}
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
              {course.title}
            </h3>
            <p className="text-xs text-[#E5C36A] font-semibold mt-0.5">
              {course.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#9B9B9B] hover:text-white hover:bg-[#202530] transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#101214] border border-[#C99A3E]/20 text-xs">
            <div>
              <span className="text-[#9B9B9B] block">Course Duration</span>
              <span className="font-bold text-white flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#C99A3E]" />
                {course.duration}
              </span>
            </div>
            <div>
              <span className="text-[#9B9B9B] block">Delivery Mode</span>
              <span className="font-bold text-white flex items-center gap-1 mt-0.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#C99A3E]" />
                {course.mode}
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[#9B9B9B] block">Batch Schedule</span>
              <span className="font-bold text-[#E5C36A] flex items-center gap-1 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-[#C99A3E]" />
                {course.batchStartDate}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-[#E5C36A] uppercase tracking-wider mb-2">
              Program Overview
            </h4>
            <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Key Syllabus Modules */}
          <div>
            <h4 className="text-xs font-bold text-[#E5C36A] uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#C99A3E]" />
              <span>Core Curriculum & Modules</span>
            </h4>
            <div className="space-y-2">
              {course.syllabusHighlights.map((mod, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#181C24] border border-[#C99A3E]/15 text-xs text-[#E0E0E0]">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C36A] mt-0.5 shrink-0" />
                  <span>{mod}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Faculty Mentor */}
          <div className="p-4 rounded-xl bg-[#101214] border border-[#C99A3E]/20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1E232B] border border-[#C99A3E] flex items-center justify-center text-[#E5C36A] shrink-0">
              <User className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <span className="text-[#9B9B9B] block">Lead Faculty In-Charge:</span>
              <span className="font-bold text-white">{course.facultyLead}</span>
            </div>
          </div>

          {/* Target Exams */}
          <div>
            <span className="text-[11px] font-bold text-[#9B9B9B] uppercase tracking-wider block mb-2">
              Mapped State Examinations:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {course.targetExams.map((ex, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-[#1A1E26] border border-[#C99A3E]/25 text-[11px] text-[#E5C36A]">
                  {ex}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="pt-4 border-t border-[#C99A3E]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-[#9B9B9B] line-through">{course.priceOriginal}</span>
                <span className="text-2xl font-bold text-white font-serif">{course.priceDiscounted}</span>
                <span className="text-xs text-emerald-400 font-semibold">(Inclusive of GST & Materials)</span>
              </div>
              <span className="text-[11px] text-[#9B9B9B]">EMI Options Available from ₹4,500/mo</span>
            </div>

            <button
              onClick={() => onEnroll(course)}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-[#C99A3E] via-[#E5C36A] to-[#C99A3E] text-[#101214] font-bold text-sm shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enroll In Program Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
