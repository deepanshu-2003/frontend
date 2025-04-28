import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/CoursesSection';
import StatsSection from '@/components/StatsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ClassesSection from '@/components/ClassesSection';
import CertificationsSection from '@/components/CertificationsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TeamSection from '../components/TeamSection';
import CompanyLogos from '@/components/CompanyLogos';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <WhyChooseUs />
      <ClassesSection />
      <CertificationsSection />
      <TestimonialsSection />
      <CompanyLogos/>
      <TeamSection />
    </main>
  );
}
