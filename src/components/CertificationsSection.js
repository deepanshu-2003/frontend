import styles from '../../public/styles/Home.module.css';
import Image from 'next/image';

const CertificationsSection = () => {
  return (
    <section className={styles.certificationsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <h2 className={styles.headingTitle}>Certifications</h2>
          <p className={styles.headingSubtitle}>Proudly certified by industry-leading organizations.</p>
          <div className={styles.headingDivider}></div>
        </div>
        <div className={styles.certificationsContent}>
          <div className={styles.certificationItem}>
            <Image
              src="/images/certification-icon.svg" // Replace with actual icon if available
              alt="MSME Certified"
              width={80}
              height={80}
              priority
            />
            <h3>MSME Certified</h3>
            <p>Recognized as a Micro, Small, and Medium Enterprise.</p>
          </div>
          <div className={styles.certificationItem}>
            <Image
              src="/images/certification-icon.svg" // Replace with actual icon if available
              alt="ISO Certified"
              width={80}
              height={80}
              priority
            />
            <h3>ISO Certified</h3>
            <p>Adhering to international standards for quality management.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
