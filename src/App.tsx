import React, { useState } from 'react';
import { Course, FreeResource } from './types';
import { COURSES_DATA, FREE_RESOURCES_DATA } from './data/judiciaryData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStatsStrip } from './components/TrustStatsStrip';
import { FeaturedServices } from './components/FeaturedServices';
import { CourseSection } from './components/CourseSection';
import { StateJudiciarySelector } from './components/StateJudiciarySelector';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ResultsSuccessStories } from './components/ResultsSuccessStories';
import { Testimonials } from './components/Testimonials';
import { FreeResources } from './components/FreeResources';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { InteractiveMockTestModal } from './components/InteractiveMockTestModal';
import { BookCounsellingModal } from './components/BookCounsellingModal';
import { CourseDetailModal } from './components/CourseDetailModal';
import { FreeResourceModal } from './components/FreeResourceModal';
import { AuthModal } from './components/AuthModal';

export default function App() {
  // Modal states
  const [isMockTestOpen, setIsMockTestOpen] = useState(false);
  const [isCounsellingOpen, setIsCounsellingOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedResource, setSelectedResource] = useState<FreeResource | null>(null);

  const handleExploreCourses = () => {
    const el = document.getElementById('courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectService = (serviceName: string) => {
    if (serviceName.includes('Test Series')) {
      setIsMockTestOpen(true);
    } else if (serviceName.includes('Mentorship')) {
      setIsCounsellingOpen(true);
    } else {
      const el = document.getElementById('courses');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnrollFromModal = (course: Course) => {
    setSelectedCourse(null);
    setIsCounsellingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#101214] text-white flex flex-col selection:bg-[#C99A3E]/30 selection:text-[#E5C36A]">
      {/* 1. Header Navigation */}
      <Header
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenCounselling={() => setIsCounsellingOpen(true)}
        onOpenMockTest={() => setIsMockTestOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreCourses={handleExploreCourses}
          onTakeMockTest={() => setIsMockTestOpen(true)}
          onOpenCounselling={() => setIsCounsellingOpen(true)}
        />

        {/* 3. Trust / Statistics Strip */}
        <TrustStatsStrip />

        {/* 4. Featured Services (5 Cards) */}
        <FeaturedServices onSelectService={handleSelectService} />

        {/* 5. Course Section (4 Cards + Modals) */}
        <CourseSection
          onSelectCourse={(course) => setSelectedCourse(course)}
          onOpenCounselling={() => setIsCounsellingOpen(true)}
        />

        {/* 6. State Judiciary Specific Preparation (Interactive Tabbed Selector) */}
        <StateJudiciarySelector
          onOpenCounselling={() => setIsCounsellingOpen(true)}
        />

        {/* 7. Why Choose Us (Asymmetric Editorial + 90%+ Stat) */}
        <WhyChooseUs
          onOpenCounselling={() => setIsCounsellingOpen(true)}
        />

        {/* 8. Results / Success Stories ("From Preparation to the Bench") */}
        <ResultsSuccessStories
          onOpenCounselling={() => setIsCounsellingOpen(true)}
        />

        {/* 9. Testimonials (3 Minimal 5-Star Cards) */}
        <Testimonials />

        {/* 10. Free Resources Section (Warm Ivory / Cream Contrast Section) */}
        <FreeResources
          onOpenMockTest={() => setIsMockTestOpen(true)}
          onOpenResourceDetail={(res) => setSelectedResource(res)}
        />

        {/* 11. Final CTA Section (Dark Full-Width with Ambient Gold Glow) */}
        <FinalCTA
          onExploreCourses={handleExploreCourses}
          onOpenCounselling={() => setIsCounsellingOpen(true)}
        />
      </main>

      {/* 12. Footer (4-Column Professional Legal Layout) */}
      <Footer
        onOpenMockTest={() => setIsMockTestOpen(true)}
        onOpenCounselling={() => setIsCounsellingOpen(true)}
      />

      {/* Modals & Interactive Overlays */}
      <InteractiveMockTestModal
        isOpen={isMockTestOpen}
        onClose={() => setIsMockTestOpen(false)}
        onOpenCounselling={() => {
          setIsMockTestOpen(false);
          setIsCounsellingOpen(true);
        }}
      />

      <BookCounsellingModal
        isOpen={isCounsellingOpen}
        onClose={() => setIsCounsellingOpen(false)}
      />

      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={handleEnrollFromModal}
      />

      <FreeResourceModal
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />
    </div>
  );
}
