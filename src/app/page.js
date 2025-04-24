import * as motion from "motion/react-client"
import styles from '/public/styles/Home.module.css';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TeamSection from '../components/TeamSection';
import StatsSection from '../components/StatsSection';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HeroSection />
        
        
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ServicesSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <StatsSection />
        </motion.div>
       
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <TestimonialsSection />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <TeamSection />
        </motion.div>
      </main>
    </div>
  );
}
