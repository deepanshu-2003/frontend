import Link from 'next/link';
import Image from 'next/image';
import * as motion from "motion/react-client"
import styles from '/public/styles/Home.module.css';

export default function HeroSection() {
  // Animation variants
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
      
      {/* Animated background elements */}
      <div className={styles.heroBgElements}>
        <motion.div 
          className={`${styles.heroBgCircle} ${styles.circle1}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        <motion.div 
          className={`${styles.heroBgCircle} ${styles.circle2}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
        <motion.div 
          className={`${styles.heroBgCircle} ${styles.circle3}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
        />
      </div>
      
      <div className={styles.heroContent}>
        <motion.div
          className={styles.heroText}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>
            <span className={styles.heroTitleTop}>Innovative</span>
            <span className={styles.heroTitleMain}>Digital Solutions</span>
            <span className={styles.heroTitleBottom}>That Create A Buzz</span>
          </motion.h1>
          
          <motion.p variants={itemVariants}>
            At <span className={styles.accentText}>Beehive Amore</span>, we help businesses transform their digital presence with innovative strategies and 
            creative solutions that drive growth and engagement in today's competitive market.
          </motion.p>
          
          <motion.div className={styles.heroCta} variants={itemVariants}>
            <Link href="/contact" className={`${styles.primaryButton} ${styles.pulseButton}`}>
              Get Started
            </Link>
            <Link href="/services" className={styles.secondaryButton}>
              Learn More
            </Link>
          </motion.div>
        </motion.div>

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
            <div className={styles.heroImage} style={{ position: 'relative', height: '500px', width: '100%' }}>
              <Image
                src="https://images.unsplash.com/photo-1675119717007-ad04bd2a9d10?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Digital Business Solutions"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className={styles.imageDecoration}></div>
          </motion.div>
        </motion.div>
      </div>

            

      <motion.div 
        className={styles.heroPattern}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Image
          src="/images/dots-pattern.svg"
          alt="Decorative Pattern"
          width={300}
          height={300}
        />
      </motion.div>
    </section>
  );
}
