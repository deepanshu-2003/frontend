import Image from 'next/image';
import styles from '/public/styles/Home.module.css';
import * as motion from "motion/react-client"


const CompanyLogos = () => {
  const logos = [
    '/images/companies/company1.png',
    '/images/companies/company2.png',
    '/images/companies/company3.png',
    '/images/companies/company4.png',
    '/images/companies/company5.png',
    '/images/companies/company6.png',
    '/images/companies/company7.png',
    '/images/companies/company8.png',
    '/images/companies/company9.png',
    '/images/companies/company10.png',
    '/images/companies/company11.png',
    '/images/companies/company12.png',
  ];

  // Duplicate logos to create seamless infinite scroll effect
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className={styles.companyLogosSection}>
      



      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.sectionHeading}
        >
          <h2 className={styles.headingTitle}>Trusted by Leading Companies</h2>
          <p className={styles.headingSubtitle}>Our partners in delivering excellence</p>
        </motion.div>





      <div className={styles.companyLogosContent}>
        <div className={styles.logosGrid}>
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className={styles.logoWrapper}>
              <Image
                src={logo}
                alt={`Company ${index + 1}`}
                width={150}
                height={84}
                className={styles.companyLogo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;