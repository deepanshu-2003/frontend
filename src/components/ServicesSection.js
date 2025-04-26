import Link from 'next/link';
import * as motion from "motion/react-client"
import { FaChartLine, FaLightbulb, FaCode, FaPen, FaSearch, FaShareAlt, FaLaptopCode } from 'react-icons/fa';
import styles from '/public/styles/Home.module.css';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: 'Digital Marketing',
      description: 'Boost your online presence.',
      icon: <FaChartLine />,
      path: '/services',
      featured: true
    },
    {
      id: 2,
      title: 'Advanced Coding',
      description: 'Custom software solutions.',
      icon: <FaLaptopCode />,
      path: '/services',
      featured: true
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'Create stunning websites.',
      icon: <FaCode />,
      path: '/services'
    },
    {
      id: 4,
      title: 'Brand Strategy',
      description: 'Develop a compelling brand.',
      icon: <FaLightbulb />,
      path: '/services'
    },
    {
      id: 5,
      title: 'SEO Optimization',
      description: 'Improve search engine rankings.',
      icon: <FaSearch />,
      path: '/services'
    },
    {
      id: 6,
      title: 'Content Creation',
      description: 'Engage your audience.',
      icon: <FaPen />,
      path: '/services'
    }
  ];

  return (
    <section className={styles.servicesSection}>
      <SectionHeading
        title="Our Services"
        subtitle="What We Can Do For You"
      />

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.servicesCtaContainer}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/services" className={styles.servicesCta}>
          View All Services
        </Link>
      </motion.div>
    </section>
  );
}
