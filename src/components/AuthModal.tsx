import React, { useState } from 'react';
import { 
  X, 
  User, 
  Mail, 
  Lock, 
  Phone, 
  Scale, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Shield
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    targetExam: 'UP PCS (J)'
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleReset = () => {
    setIsLoggedIn(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#14171E] border border-[#C99A3E]/40 rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[#9B9B9B] hover:text-white hover:bg-[#202530] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isLoggedIn ? (
          <div className="space-y-5">
            
            {/* Header */}
            <div className="text-center space-y-1">
              <div className="w-11 h-11 rounded-xl bg-[#1E232B] border border-[#C99A3E]/30 text-[#E5C36A] mx-auto flex items-center justify-center mb-2">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-serif">
                {isLogin ? 'Judiciary Student Portal' : 'Register Aspirant Account'}
              </h3>
              <p className="text-xs text-[#9B9B9B]">
                {isLogin 
                  ? 'Access live classes, test series analytics & notes' 
                  : 'Join 5,000+ serious judicial aspirants today'}
              </p>
            </div>

            {/* Toggle Login/Register */}
            <div className="grid grid-cols-2 p-1 rounded-xl bg-[#101216] border border-[#C99A3E]/20 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`py-2 rounded-lg transition-all ${
                  isLogin ? 'bg-[#C99A3E] text-[#101214]' : 'text-[#9B9B9B] hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`py-2 rounded-lg transition-all ${
                  !isLogin ? 'bg-[#C99A3E] text-[#101214]' : 'text-[#9B9B9B] hover:text-white'
                }`}
              >
                Register New
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {!isLogin && (
                <div>
                  <label className="block text-xs font-medium text-[#D1D5DB] mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#9B9B9B] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adv. Raghav Sinha"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#161920] border border-[#C99A3E]/30 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-[#C99A3E]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-[#D1D5DB] mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#9B9B9B] absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="aspirant@judicialprep.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#161920] border border-[#C99A3E]/30 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-[#C99A3E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#D1D5DB] mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#9B9B9B] absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full bg-[#161920] border border-[#C99A3E]/30 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-[#C99A3E]"
                  />
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-xs font-medium text-[#D1D5DB] mb-1">Target Exam</label>
                  <select
                    value={formData.targetExam}
                    onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
                    className="w-full bg-[#161920] border border-[#C99A3E]/30 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C99A3E]"
                  >
                    <option>UP PCS (J)</option>
                    <option>Delhi Judicial Service (DJS)</option>
                    <option>MP Civil Judge</option>
                    <option>Rajasthan Judicial Service (RJS)</option>
                    <option>Bihar Judicial Services (BPSC-J)</option>
                  </select>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C99A3E] via-[#E5C36A] to-[#C99A3E] text-[#101214] font-bold text-xs shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>{isLogin ? 'Sign In to Student Dashboard' : 'Create Free Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center space-y-4 py-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-lg font-bold text-white font-serif">
                Welcome to JurisBench Portal
              </h4>
              <p className="text-xs text-[#9B9B9B] mt-1">
                Signed in as <span className="text-[#E5C36A] font-semibold">{formData.email || 'aspirant@judicialprep.in'}</span>.
              </p>
            </div>

            <div className="p-3 bg-[#101216] rounded-xl border border-[#C99A3E]/20 text-xs text-[#E0E0E0] space-y-1 text-left">
              <div className="text-[#E5C36A] font-bold">Active Benefits:</div>
              <div>• Free Access to Diagnostic Mock Test Engine</div>
              <div>• 1-on-1 Mentorship Booking Unlocked</div>
              <div>• BNS & BNSS Transition Comparative Chart Downloaded</div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-2.5 rounded-xl bg-[#C99A3E] text-[#101214] font-bold text-xs cursor-pointer"
            >
              Continue to Portal
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
