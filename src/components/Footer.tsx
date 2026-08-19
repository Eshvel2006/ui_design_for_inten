import React from 'react';
import { 
  Scale, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Shield, 
  BookOpen, 
  Send,
  Linkedin,
  Youtube,
  Instagram,
  Twitter
} from 'lucide-react';

interface FooterProps {
  onOpenMockTest: () => void;
  onOpenCounselling: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMockTest, onOpenCounselling }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer 
      id="footer" 
      className="bg-[#101214] text-[#FFFFFF] border-t-2 border-[#C99A3E] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#C99A3E]/15">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#C99A3E] flex items-center justify-center text-[#101214] font-georgia font-bold text-base rounded-sm">
                §
              </div>
              <div>
                <span className="font-georgia text-xl font-bold tracking-tight text-white">
                  LEX <span className="text-[#C99A3E]">MAGISTRATE</span>
                </span>
                <p className="text-[9px] tracking-[0.2em] uppercase font-semibold text-[#9B9B9B]">
                  ACADEMY OF JUDICIAL EXCELLENCE
                </p>
              </div>
            </div>

            <p className="text-xs text-[#9B9B9B] leading-relaxed pr-4">
              India’s premier judiciary and legal competitive examination preparation platform. Providing high-standard pedagogy, state-specific curriculum, Bare Act frameworks, and evaluation by retired judges.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a href="#" className="w-8 h-8 rounded-sm bg-[#171A1F] border border-[#C99A3E]/25 hover:border-[#C99A3E] flex items-center justify-center text-[#C99A3E] hover:bg-[#C99A3E] hover:text-[#101214] transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-sm bg-[#171A1F] border border-[#C99A3E]/25 hover:border-[#C99A3E] flex items-center justify-center text-[#C99A3E] hover:bg-[#C99A3E] hover:text-[#101214] transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-sm bg-[#171A1F] border border-[#C99A3E]/25 hover:border-[#C99A3E] flex items-center justify-center text-[#C99A3E] hover:bg-[#C99A3E] hover:text-[#101214] transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-sm bg-[#171A1F] border border-[#C99A3E]/25 hover:border-[#C99A3E] flex items-center justify-center text-[#C99A3E] hover:bg-[#C99A3E] hover:text-[#101214] transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#C99A3E] uppercase tracking-wider font-georgia">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#B0B3BC]">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-[#C99A3E] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('courses')} className="hover:text-[#C99A3E] transition-colors cursor-pointer">
                  Courses & Batches
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('courses')} className="hover:text-[#C99A3E] transition-colors cursor-pointer">
                  All-India Test Series
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('state-judiciary')} className="hover:text-[#C99A3E] transition-colors cursor-pointer">
                  State PCS (J) Syllabi
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('results')} className="hover:text-[#C99A3E] transition-colors cursor-pointer">
                  Results & Selections
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('why-us')} className="hover:text-[#C99A3E] transition-colors cursor-pointer">
                  About Our Pedagogy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#C99A3E] uppercase tracking-wider font-georgia">
              Free Legal Vault
            </h4>
            <ul className="space-y-2 text-xs text-[#B0B3BC]">
              <li>
                <button onClick={onOpenMockTest} className="hover:text-[#C99A3E] transition-colors flex items-center gap-1 cursor-pointer">
                  <span>Diagnostic Mock Test</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C99A3E]" />
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('free-resources')} className="hover:text-[#C99A3E] transition-colors cursor-pointer">
                  Bare Act Mind Maps (BNS/BNSS/BSA)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('free-resources')} className="hover:text-[#C99A3E] transition-colors cursor-pointer">
                  Landmark Judgments Digest
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('free-resources')} className="hover:text-[#C99A3E] transition-colors cursor-pointer">
                  Legal Current Affairs 2026
                </button>
              </li>
              <li>
                <button onClick={onOpenCounselling} className="hover:text-[#C99A3E] transition-colors cursor-pointer">
                  15-Year Solved Mains Question Bank
                </button>
              </li>
              <li>
                <button onClick={onOpenCounselling} className="hover:text-[#C99A3E] transition-colors cursor-pointer">
                  Judicial Service FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#C99A3E] uppercase tracking-wider font-georgia">
              Headquarters & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#B0B3BC]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C99A3E] shrink-0 mt-0.5" />
                <span>
                  Supreme Court Enclave, Barakhamba Road, Connaught Place, New Delhi — 110001
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C99A3E] shrink-0" />
                <a href="tel:+911145678900" className="hover:text-white transition-colors">
                  +91 (011) 4567-8900 / +91 98765-43210
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C99A3E] shrink-0" />
                <a href="mailto:admissions@jurisbench.in" className="hover:text-white transition-colors">
                  admissions@jurisbench.in
                </a>
              </div>
            </div>

            {/* Quick newsletter / alert box */}
            <div className="pt-2">
              <div className="text-[11px] text-[#C99A3E] font-semibold mb-1.5 uppercase tracking-wider">
                Judiciary Exam Notification Alerts
              </div>
              <div className="flex items-center">
                <input 
                  type="email" 
                  placeholder="Enter email address"
                  className="bg-[#171A1F] border border-[#C99A3E]/30 rounded-l-sm px-3 py-2 text-xs text-white placeholder-[#707070] focus:outline-none focus:border-[#C99A3E] w-full"
                />
                <button 
                  onClick={onOpenCounselling}
                  className="bg-[#C99A3E] hover:bg-[#E5C36A] text-[#101214] font-bold px-3 py-2 rounded-r-sm text-xs transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Legal links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7E89]">
          <div>
            © 2026 LEX MAGISTRATE Legal Academy LLP. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#C99A3E] transition-colors">Privacy Policy</a>
            <span className="text-[#333]">•</span>
            <a href="#" className="hover:text-[#C99A3E] transition-colors">Terms & Conditions</a>
            <span className="text-[#333]">•</span>
            <a href="#" className="hover:text-[#C99A3E] transition-colors">Refund & Enrollment Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
