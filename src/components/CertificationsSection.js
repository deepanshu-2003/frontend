import styles from '../../public/styles/Home.module.css';
import Image from 'next/image';
import * as motion from "motion/react-client"

const CertificationsSection = () => {
  // Placeholder image paths for certifications
  const certifications = [
    '/images/certification/certificate1.png', // Replace with actual certification logo paths
    '/images/certification/certificate2.png',
    '/images/certification/certificate3.png',
    '/images/certification/certificate4.png',
    '/images/certification/certificate5.png',
  ];

  // Duplicate certifications to create seamless infinite scroll effect
  const duplicatedCertifications = [...certifications, ...certifications];

  return (
    <section className={styles.companyLogosSection}> {/* Using companyLogosSection styles for layout */}
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.sectionHeading}
        >
          <h2 className={styles.headingTitle}>Certifications</h2>
          <p className={styles.headingSubtitle}>Proudly certified by industry-leading organizations.</p>
        </motion.div>

      <div className={styles.companyLogosContent}> {/* Using companyLogosContent styles */}
        <div className={styles.logosGrid}> {/* Using logosGrid styles for animation */}
          {duplicatedCertifications.map((certification, index) => (
            <div key={index} className={styles.logoWrapper}> {/* Using logoWrapper styles */}
              <Image
                src={certification}
                alt={`Certification ${index + 1}`}
                width={150} // Adjust width and height as needed
                height={84}
                className={styles.companyLogo} // Using companyLogo styles
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
