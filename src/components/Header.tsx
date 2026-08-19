import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  Menu, 
  X, 
  ChevronDown, 
  BookOpen, 
  Award, 
  PhoneCall, 
  GraduationCap, 
  FileText, 
  User, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface HeaderProps {
  onOpenAuth: () => void;
  onOpenCounselling: () => void;
  onOpenMockTest: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenAuth, 
  onOpenCounselling, 
  onOpenMockTest 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Alert Strip */}
      <div id="top-announcement-strip" className="bg-[#14171C] border-b border-[#C99A3E]/20 py-2 px-4 text-xs sm:text-sm text-center text-[#E5C36A] flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 bg-[#C99A3E]/20 text-[#E5C36A] px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider">
          <Sparkles className="w-3 h-3 text-[#E5C36A]" /> New Batch
        </span>
        <span className="text-[#FFFFFF]/90">
          State Judiciary & Foundation 2026 Batch Enrollment is Now Open.
        </span>
        <button 
          id="btn-announcement-counselling"
          onClick={onOpenCounselling}
          className="underline hover:text-white font-medium ml-1 transition-colors cursor-pointer hidden md:inline"
        >
          Book 1-on-1 Mentorship Session →
        </button>
      </div>

      {/* Main Sticky Header */}
      <header 
        id="main-navigation-header"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#171A1F]/95 backdrop-blur-md border-b border-[#C99A3E]/30 shadow-2xl py-3.5' 
            : 'bg-[#171A1F] border-b border-[#C99A3E]/30 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Section */}
          <a 
            href="#" 
            className="flex items-center gap-3.5 group"
            id="brand-logo-link"
          >
            <div className="w-10 h-10 rounded-sm bg-[#101214] border border-[#C99A3E]/50 flex items-center justify-center shadow-lg group-hover:border-[#C99A3E] transition-all">
              <Scale className="w-5 h-5 text-[#C99A3E]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#C99A3E] font-bold text-2xl tracking-tighter" style={{ fontFamily: 'Georgia, serif' }}>
                LEX MAGISTRATE
              </span>
              <span className="text-[#9B9B9B] text-[10px] font-bold tracking-[0.2em] uppercase">
                PREPARE • PRACTICE • PREVAIL
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white">
            <button 
              id="nav-home" 
              onClick={() => scrollToSection('hero')} 
              className="hover:text-[#C99A3E] border-b-2 border-[#C99A3E] pb-1 cursor-pointer transition-colors"
            >
              Home
            </button>

            {/* Courses Dropdown */}
            <div className="relative group" onMouseLeave={() => setCoursesDropdownOpen(false)}>
              <button 
                id="nav-courses-dropdown-toggle"
                onClick={() => {
                  setCoursesDropdownOpen(!coursesDropdownOpen);
                  scrollToSection('courses');
                }}
                className="flex items-center gap-1 hover:text-[#C99A3E] transition-colors cursor-pointer py-1"
              >
                Courses <ChevronDown className="w-4 h-4 text-[#C99A3E] group-hover:rotate-180 transition-transform" />
              </button>

              <div className="absolute top-full left-0 mt-2 w-64 bg-[#171A1F] border-t-2 border-[#C99A3E] border-x border-b border-[#C99A3E]/30 rounded-sm p-3 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="space-y-1">
                  <button 
                    onClick={() => scrollToSection('courses')}
                    className="w-full text-left p-2.5 rounded hover:bg-[#202124] text-white hover:text-[#C99A3E] transition-colors flex items-start gap-2.5 cursor-pointer"
                  >
                    <GraduationCap className="w-4 h-4 text-[#C99A3E] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold">Judiciary Foundation</div>
                      <div className="text-[11px] text-[#9B9B9B]">18-Month Comprehensive Batch</div>
                    </div>
                  </button>

                  <button 
                    onClick={() => scrollToSection('courses')}
                    className="w-full text-left p-2.5 rounded hover:bg-[#202124] text-white hover:text-[#C99A3E] transition-colors flex items-start gap-2.5 cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-[#C99A3E] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold">State Judiciary Prep</div>
                      <div className="text-[11px] text-[#9B9B9B]">UP, Delhi, MP, Rajasthan & more</div>
                    </div>
                  </button>

                  <button 
                    onClick={() => scrollToSection('courses')}
                    className="w-full text-left p-2.5 rounded hover:bg-[#202124] text-white hover:text-[#C99A3E] transition-colors flex items-start gap-2.5 cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#C99A3E] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold">PCS (J) Dedicated Batch</div>
                      <div className="text-[11px] text-[#9B9B9B]">Prelims-cum-Mains Accelerator</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <button 
              id="nav-test-series" 
              onClick={() => scrollToSection('courses')} 
              className="hover:text-[#C99A3E] transition-colors cursor-pointer py-1"
            >
              Test Series
            </button>
            <button 
              id="nav-state-prep" 
              onClick={() => scrollToSection('state-judiciary')} 
              className="hover:text-[#C99A3E] transition-colors cursor-pointer py-1"
            >
              State Syllabus
            </button>
            <button 
              id="nav-study-material" 
              onClick={() => scrollToSection('free-resources')} 
              className="hover:text-[#C99A3E] transition-colors cursor-pointer py-1"
            >
              Study Material
            </button>
            <button 
              id="nav-results" 
              onClick={() => scrollToSection('results')} 
              className="hover:text-[#C99A3E] transition-colors cursor-pointer py-1"
            >
              Results
            </button>
            <button 
              id="nav-why-us" 
              onClick={() => scrollToSection('why-us')} 
              className="hover:text-[#C99A3E] transition-colors cursor-pointer py-1"
            >
              Why Us
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button 
              id="btn-header-mock-test"
              onClick={onOpenMockTest}
              className="px-4 py-2 text-xs font-bold text-[#C99A3E] bg-transparent hover:bg-[#C99A3E]/10 border border-[#C99A3E] rounded-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              Free Mock Test
            </button>

            <button 
              id="btn-header-login-register"
              onClick={onOpenAuth}
              className="px-6 py-2.5 text-xs font-bold text-[#101214] bg-[#C99A3E] hover:bg-[#E5C36A] rounded-sm shadow-[0_0_15px_rgba(201,154,62,0.2)] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-[#101214]" />
              <span>Login / Register</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            id="mobile-hamburger-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#171A1F] border border-[#C99A3E]/30 text-[#E5C36A] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#14171C] border-b border-[#C99A3E]/30 px-5 pt-3 pb-6 space-y-3 mt-3 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 text-sm text-[#E0E0E0]">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left py-2.5 px-3 rounded bg-[#1A1E24] hover:text-[#E5C36A]"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('courses')}
                className="text-left py-2.5 px-3 rounded bg-[#1A1E24] hover:text-[#E5C36A]"
              >
                Courses
              </button>
              <button 
                onClick={() => scrollToSection('state-judiciary')}
                className="text-left py-2.5 px-3 rounded bg-[#1A1E24] hover:text-[#E5C36A]"
              >
                State Exams
              </button>
              <button 
                onClick={() => scrollToSection('free-resources')}
                className="text-left py-2.5 px-3 rounded bg-[#1A1E24] hover:text-[#E5C36A]"
              >
                Study Material
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="text-left py-2.5 px-3 rounded bg-[#1A1E24] hover:text-[#E5C36A]"
              >
                Results & Rankers
              </button>
              <button 
                onClick={() => scrollToSection('why-us')}
                className="text-left py-2.5 px-3 rounded bg-[#1A1E24] hover:text-[#E5C36A]"
              >
                Why Choose Us
              </button>
            </div>

            <div className="pt-3 border-t border-[#C99A3E]/20 flex flex-col gap-2.5">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMockTest();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-[#1A1E24] border border-[#C99A3E]/40 text-[#E5C36A] font-semibold text-sm flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Take Free Mock Test
              </button>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCounselling();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-[#171A1F] border border-[#C99A3E]/30 text-white font-medium text-sm flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#E5C36A]" />
                Book Free Counselling Session
              </button>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#C99A3E] to-[#E5C36A] text-[#101214] font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <User className="w-4 h-4 text-[#101214]" />
                Login / Register Portal
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
