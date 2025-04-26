import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ClassesSection from '@/components/ClassesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TeamSection from '../components/TeamSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <WhyChooseUs />
      <ClassesSection />
      <TestimonialsSection />
      <TeamSection />
    </main>
  );
}
