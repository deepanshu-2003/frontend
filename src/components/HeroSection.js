import Link from 'next/link';
import Image from 'next/image';
import * as motion from "motion/react-client"
import styles from '/public/styles/Home.module.css';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBgOverlay}></div>
      <div className={styles.heroContent}>
        <motion.div
          className={styles.heroImageContainer}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div 
            className={styles.heroImageWrapper}
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut"
            }}
          >
            <div className={styles.heroImage}>
              <Image
                src="/images/hero-image.png"
                alt="Digital Business Solutions"
                width={500}
                height={500}
                layout="responsive"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.heroText}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>
          Empowering Learners for Success in Digital Marketing
          </motion.h1>
          
          <motion.p variants={itemVariants}>
          With expert-led courses and practical insights, we help you master the art of digital marketing and launch a thriving career in the digital world.
          </motion.p>
          
          <motion.div className={styles.heroCta} variants={itemVariants}>
            <Link href="/contact" className={`${styles.primaryButton} ${styles.pulseButton}`}>
              Get Started
            </Link>
            <Link href="/services" className={styles.secondaryButton}>
              Explore Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
