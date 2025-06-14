
import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DynamicBlueBackground from '@/components/DynamicBlueBackground';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import MissionSection from '@/components/MissionSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import AnimatedUserQueries from '@/components/AnimatedUserQueries';

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Page enter animation
    document.body.classList.add('page-enter');
    setTimeout(() => {
      document.body.classList.add('page-enter-active');
    }, 100);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <DynamicBlueBackground />

      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        
        {/* User Queries Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="scroll-reveal text-center mb-8">
              <h2 className="text-4xl font-light tracking-tight text-white mb-8">Realistic User Queries</h2>
              <AnimatedUserQueries />
            </div>
          </div>
        </section>

        <FeaturesSection />
        <MissionSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
