import Image from 'next/image';
import * as motion from "motion/react-client"
import styles from '/public/styles/Home.module.css';

export default function CompanyLogos() {
  const companies = [
    { id: 1, name: 'Company 1', logo: '/images/companies/company1.png' },
    { id: 2, name: 'Company 2', logo: '/images/companies/company2.jpg' },
    { id: 3, name: 'Company 3', logo: '/images/companies/company3.png' },
    { id: 4, name: 'Company 4', logo: '/images/companies/company4.png' },
    { id: 5, name: 'Company 5', logo: '/images/companies/company5.png' },
    { id: 6, name: 'Company 6', logo: '/images/companies/company6.png' },
  ];

  return (
    <section className={styles.companyLogosSection}>
      <div className={styles.companyLogosContent}>
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

        <div className={styles.logosGrid}>
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              className={styles.logoWrapper}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={150}
                height={80}
                className={styles.companyLogo}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}