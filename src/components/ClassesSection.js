import styles from '../../public/styles/Home.module.css';
import Image from 'next/image';

const ClassesSection = () => {
  const offlineFeatures = [
    'Interactive classroom sessions',
    'Direct mentor guidance',
    'Industry-standard equipment',
    'Networking events',
    'Structured learning path'
  ];

  const onlineFeatures = [
    'Learn at your pace',
    'Flexible schedule',
    'Cost-effective',
    'Global resources',
    'One-on-one mentoring'
  ];

  return (
    <section className={styles.classesSection}>
      <div className={styles.classesContent}>
        <div className={styles.classesHeading}>
          <h2>Online & Offline<br />Training Options</h2>
          <p>Choose the learning format that best fits your schedule and preferences.</p>
        </div>
        <div className={styles.classesTypes}>
          <div className={styles.classType}>
            <div className={styles.classTypeIcon}>
              <Image 
                src="/images/window-icon.svg" 
                alt="Offline Classes" 
                width={60} 
                height={60}
                priority
              />
            </div>
            <h3>Offline Classes</h3>
            <ul className={styles.featuresList}>
              {offlineFeatures.map((feature, index) => (
                <li key={index}>
                  <span className={styles.checkIcon}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.classType}>
            <div className={styles.classTypeIcon}>
              <Image 
                src="/images/globe-icon.svg" 
                alt="Online Classes" 
                width={60} 
                height={60}
                priority
              />
            </div>
            <h3>Online Classes</h3>
            <ul className={styles.featuresList}>
              {onlineFeatures.map((feature, index) => (
                <li key={index}>
                  <span className={styles.checkIcon}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;