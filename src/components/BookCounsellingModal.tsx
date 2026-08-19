import React, { useState } from 'react';
import { STATE_EXAMS_DATA } from '../data/judiciaryData';
import { 
  PhoneCall, 
  User, 
  Mail, 
  Calendar, 
  GraduationCap, 
  CheckCircle2, 
  X, 
  Sparkles,
  Scale,
  ShieldCheck
} from 'lucide-react';

interface BookCounsellingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookCounsellingModal: React.FC<BookCounsellingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    targetState: 'UP',
    academicStage: 'Law Graduate (LL.B / B.A. LL.B)',
    preferredSlot: 'Morning (10:00 AM - 1:00 PM)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#14171E] border border-[#C99A3E]/40 rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl relative">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#C99A3E]/20 flex items-center justify-between bg-[#101216] sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E232B] border border-[#C99A3E]/30 flex items-center justify-center text-[#E5C36A]">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-serif">
                1-on-1 Academic Mentorship
              </h3>
              <p className="text-xs text-[#9B9B9B]">
                Free Session with Former Judges & Top Rankers
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#9B9B9B] hover:text-white hover:bg-[#202530] transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-[#181C24] border border-[#C99A3E]/20 text-xs text-[#D1D5DB] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E5C36A] shrink-0" />
                <span>
                  Get a personalized state syllabus checklist, Bare Act strategy, and fee scholarship assessment.
                </span>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-[#E0E0E0] mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#9B9B9B] absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Adv. Siddharth Malhotra"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#161920] border border-[#C99A3E]/25 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-[#707070] focus:outline-none focus:border-[#C99A3E]"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#E0E0E0] mb-1.5">
                    WhatsApp / Contact No. *
                  </label>
                  <div className="relative">
                    <PhoneCall className="w-4 h-4 text-[#9B9B9B] absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#161920] border border-[#C99A3E]/25 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-[#707070] focus:outline-none focus:border-[#C99A3E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E0E0E0] mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#9B9B9B] absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="name@lawfirm.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#161920] border border-[#C99A3E]/25 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-[#707070] focus:outline-none focus:border-[#C99A3E]"
                    />
                  </div>
                </div>
              </div>

              {/* Target State */}
              <div>
                <label className="block text-xs font-semibold text-[#E0E0E0] mb-1.5">
                  Target State Judiciary Exam
                </label>
                <select
                  value={formData.targetState}
                  onChange={(e) => setFormData({ ...formData, targetState: e.target.value })}
                  className="w-full bg-[#161920] border border-[#C99A3E]/25 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C99A3E]"
                >
                  <option value="UP">Uttar Pradesh PCS (J)</option>
                  <option value="DJS">Delhi Judicial Service (DJS)</option>
                  <option value="MP">Madhya Pradesh Civil Judge (MP CJ)</option>
                  <option value="RJS">Rajasthan Judicial Service (RJS)</option>
                  <option value="BPSC">Bihar Judicial Services (BPSC-J)</option>
                  <option value="HCS">Haryana Civil Services (Judicial)</option>
                  <option value="ALL">Multi-State Judicial Aspirant</option>
                </select>
              </div>

              {/* Academic Background */}
              <div>
                <label className="block text-xs font-semibold text-[#E0E0E0] mb-1.5">
                  Current Academic Background
                </label>
                <select
                  value={formData.academicStage}
                  onChange={(e) => setFormData({ ...formData, academicStage: e.target.value })}
                  className="w-full bg-[#161920] border border-[#C99A3E]/25 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C99A3E]"
                >
                  <option value="LL.B Final Year">LL.B / B.A. LL.B Final Year</option>
                  <option value="Law Graduate (LL.B)">Law Graduate (0-2 Years Exp.)</option>
                  <option value="Practicing Advocate">Practicing Advocate (Bar Council Enrolled)</option>
                  <option value="LL.M Candidate">LL.M Candidate / Research Scholar</option>
                </select>
              </div>

              {/* Preferred Slot */}
              <div>
                <label className="block text-xs font-semibold text-[#E0E0E0] mb-1.5">
                  Preferred Counselling Time
                </label>
                <select
                  value={formData.preferredSlot}
                  onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                  className="w-full bg-[#161920] border border-[#C99A3E]/25 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C99A3E]"
                >
                  <option value="Morning (10:00 AM - 1:00 PM)">Morning Slot (10:00 AM – 1:00 PM)</option>
                  <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon Slot (2:00 PM – 5:00 PM)</option>
                  <option value="Evening (6:00 PM - 9:00 PM)">Evening Slot (6:00 PM – 9:00 PM)</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#C99A3E] via-[#E5C36A] to-[#C99A3E] text-[#101214] font-bold text-sm shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confirm Free Counselling Appointment</span>
                </button>
                <p className="text-[11px] text-[#7A7E89] text-center mt-2">
                  Our Senior Academic Counselor will call you at your preferred slot.
                </p>
              </div>
            </form>
          ) : (
            /* Confirmation View */
            <div className="text-center space-y-4 py-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white font-serif">
                  Session Scheduled Successfully!
                </h4>
                <p className="text-xs text-[#9B9B9B]">
                  Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Your 1-on-1 mentorship call is confirmed.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#101216] border border-[#C99A3E]/30 text-left space-y-2 text-xs text-[#E0E0E0]">
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-[#9B9B9B]">Target Exam:</span>
                  <span className="font-bold text-[#E5C36A]">{formData.targetState} Judiciary</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-[#9B9B9B]">Contact:</span>
                  <span className="font-mono text-white">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9B9B9B]">Assigned Mentor:</span>
                  <span className="font-semibold text-white">Senior Judiciary Faculty Board</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl bg-[#C99A3E] text-[#101214] font-bold text-xs hover:bg-[#E5C36A] transition-colors cursor-pointer"
              >
                Back to Homepage
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
