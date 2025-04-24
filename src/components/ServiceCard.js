import Link from 'next/link';
import Image from 'next/image';
import * as motion from "motion/react-client"
import { 
  FaChartLine, 
  FaCode, 
  FaLightbulb, 
  FaMicrochip,
  FaPen,
  FaSearch,
  FaShareAlt,
  FaEnvelope,
  FaAd,
  FaRobot
} from 'react-icons/fa';
import styles from '/public/styles/Home.module.css';

export default function ServiceCard({ service }) {
  return (
    <div className={`${styles.serviceCard} ${service.featured ? styles.featuredService : ''}`}>
      {service.featured && (
        <div className={styles.featuredBadge}>Featured</div>
      )}
      <div className={styles.serviceIcon}>
        {service.icon === 'chart-line' && <FaChartLine />}
        {service.icon === 'code' && <FaCode />}
        {service.icon === 'lightbulb' && <FaLightbulb />}
        {service.icon === 'pen' && <FaPen />}
        {service.icon === 'search' && <FaSearch />}
        {service.icon === 'share-alt' && <FaShareAlt />}
        {service.icon === 'envelope' && <FaEnvelope />}
        {service.icon === 'ad' && <FaAd />}
        {service.icon === 'robot' && <FaRobot />}
      </div>
      <h3 className={styles.serviceTitle}>{service.title}</h3>
      <p className={styles.serviceDescription}>{service.description}</p>
      
      {service.path && (
        <Link href={service.path} className={styles.serviceLink}>
          Learn More
        </Link>
      )}

      {service.image && (
        <div className={styles.serviceImageContainer}>
          <Image
            src={service.image}
            alt={service.title}
            layout="fill"
            objectFit="cover"
            className={styles.serviceImage}
          />
          <div className={styles.serviceOverlay}>
            <Link href="/services" className={styles.overlayButton}>
              View Details
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
