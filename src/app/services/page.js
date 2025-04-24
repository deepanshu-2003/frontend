import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import * as motion from "motion/react-client"
import styles from '/public/styles/Services.module.css';
import SectionHeading from '../../components/SectionHeading';
import ServiceCard from '../../components/ServiceCard';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Digital Marketing',
      description: 'Boost your online presence with our comprehensive digital marketing strategies tailored to your business needs.',
      icon: 'chart-line',
      image: 'https://images.unsplash.com/photo-1444653389962-8149286c578a'
    },
    {
      id: 2,
      title: 'Brand Strategy',
      description: 'Develop a compelling brand identity that resonates with your target audience and sets you apart from competitors.',
      icon: 'lightbulb',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'Create stunning, responsive websites that provide exceptional user experience and drive conversions.',
      icon: 'code',
      image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89'
    },
    {
      id: 4,
      title: 'Content Creation',
      description: 'Engage your audience with compelling content that tells your brand story and drives engagement.',
      icon: 'pen',
      image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa'
    },
    {
      id: 5,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website with our SEO strategies.',
      icon: 'search',
      image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88'
    },
    {
      id: 6,
      title: 'Social Media Management',
      description: 'Build and grow your social media presence with strategic planning, content creation, and community engagement.',
      icon: 'share-alt',
      image: 'https://images.unsplash.com/photo-1656164630621-8974e3a7e85c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 7,
      title: 'Email Marketing',
      description: 'Create targeted email campaigns that drive engagement and conversions with personalized content.',
      icon: 'envelope',
      image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 8,
      title: 'PPC Advertising',
      description: 'Maximize ROI with data-driven pay-per-click campaigns across search engines and social platforms.',
      icon: 'ad',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
    },
    {
      id: 9,
      title: 'AI/ML Development',
      description: 'Implement cutting-edge artificial intelligence and machine learning solutions for business automation.',
      icon: 'robot',
      image: 'https://images.unsplash.com/photo-1573164574230-db1d5e960238'
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Beehive Amore | Services</title>
        <meta name="description" content="Professional services offered by Beehive Amore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.heroSection}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroContent}
          >
            <h1>Our Services</h1>
            <p>Comprehensive solutions tailored for your business success</p>
          </motion.div>
        </div>

        <section className={styles.servicesSection}>
          <SectionHeading
            title="What We Offer"
            subtitle="Explore our range of professional services"
          />
          
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.processSection}>
          <SectionHeading
            title="Our Process"
            subtitle="How we work with you to achieve success"
          />
          
          <div className={styles.processSteps}>
            <motion.div 
              className={styles.processStep}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.stepNumber}>01</div>
              <h3>Discovery</h3>
              <p>We start by understanding your business, goals, and challenges to create a tailored strategy.</p>
            </motion.div>
            
            <motion.div 
              className={styles.processStep}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={styles.stepNumber}>02</div>
              <h3>Strategy</h3>
              <p>Our team develops a comprehensive plan aligned with your business objectives.</p>
            </motion.div>
            
            <motion.div 
              className={styles.processStep}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className={styles.stepNumber}>03</div>
              <h3>Implementation</h3>
              <p>We execute the strategy with precision, keeping you informed throughout the process.</p>
            </motion.div>
            
            <motion.div 
              className={styles.processStep}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className={styles.stepNumber}>04</div>
              <h3>Evaluation</h3>
              <p>Regular monitoring and analysis ensure we achieve the desired results and make adjustments as needed.</p>
            </motion.div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Grow Your Business?</h2>
            <p>Let's discuss how our services can help you achieve your goals.</p>
            <Link className={styles.ctaButton} href="/contact">Contact Us</Link>
          </div>
          <div className={styles.ctaImageContainer}>
            <Image 
              src="https://images.unsplash.com/photo-1730382624761-af8112d26209?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Business growth"
              layout="fill"
              objectFit="cover"
              className={styles.ctaImage}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
