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
      description: 'Boost your online presence with our specialized digital marketing strategies and campaigns, including SEO, content creation, and brand strategy.',
      icon: <FaChartLine />,
      path: '/services',
      featured: true
    },
    {
      id: 2,
      title: 'Advanced Coding',
      description: 'Custom software solutions and advanced programming services for complex business needs, including web development, app development, and AI/ML.',
      icon: <FaLaptopCode />,
      path: '/services',
      featured: true
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'Create stunning, responsive websites that provide exceptional user experience.',
      icon: <FaCode />,
      path: '/services'
    },
    {
      id: 4,
      title: 'Brand Strategy',
      description: 'Develop a compelling brand identity that resonates with your target audience.',
      icon: <FaLightbulb />,
      path: '/services'
    },
    {
      id: 5,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website.',
      icon: <FaSearch />,
      path: '/services'
    },
    {
      id: 6,
      title: 'Content Creation',
      description: 'Engage your audience with compelling content that tells your brand story.',
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
