import React, { useEffect, useState, useRef } from 'react';
import { Users, GraduationCap, FileCheck, Headphones, Award, Sparkles } from 'lucide-react';

interface StatItem {
  id: string;
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const TrustStatsStrip: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    students: 0,
    faculty: 0,
    tests: 0,
    support: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters smoothly
          const duration = 1800; // ms
          const frameRate = 1000 / 60;
          const totalFrames = Math.round(duration / frameRate);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // easeOutExpo
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCounts({
              students: Math.floor(ease * 5000),
              faculty: Math.floor(ease * 50),
              tests: Math.floor(ease * 100),
              support: 24, // 24/7 constant
            });

            if (frame === totalFrames) {
              clearInterval(timer);
              setCounts({
                students: 5000,
                faculty: 50,
                tests: 100,
                support: 24,
              });
            }
          }, frameRate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      id="trust-statistics-strip"
      className="relative z-20 w-full bg-[#C99A3E] shadow-xl py-6 sm:py-7 my-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center justify-around">
          
          {/* Stat 1: 5,000+ Students Guided */}
          <div className="flex flex-col items-center text-center">
            <span className="text-[#101214] text-3xl sm:text-4xl font-bold font-georgia">
              {hasAnimated ? counts.students.toLocaleString() : '5,000'}+
            </span>
            <span className="text-[#101214]/80 text-[11px] sm:text-xs font-bold uppercase tracking-wider mt-1">
              Aspirants Trained
            </span>
          </div>

          {/* Stat 2: 50+ Expert Faculty */}
          <div className="flex flex-col items-center text-center border-l border-[#101214]/20">
            <span className="text-[#101214] text-3xl sm:text-4xl font-bold font-georgia">
              {hasAnimated ? counts.faculty : '50'}+
            </span>
            <span className="text-[#101214]/80 text-[11px] sm:text-xs font-bold uppercase tracking-wider mt-1">
              Expert Faculty
            </span>
          </div>

          {/* Stat 3: 100+ Mock Tests */}
          <div className="flex flex-col items-center text-center lg:border-l border-[#101214]/20">
            <span className="text-[#101214] text-3xl sm:text-4xl font-bold font-georgia">
              {hasAnimated ? counts.tests : '100'}+
            </span>
            <span className="text-[#101214]/80 text-[11px] sm:text-xs font-bold uppercase tracking-wider mt-1">
              Mock Tests
            </span>
          </div>

          {/* Stat 4: 90%+ Success Rate */}
          <div className="flex flex-col items-center text-center border-l border-[#101214]/20">
            <span className="text-[#101214] text-3xl sm:text-4xl font-bold font-georgia">
              90%+
            </span>
            <span className="text-[#101214]/80 text-[11px] sm:text-xs font-bold uppercase tracking-wider mt-1">
              Success Rate
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
