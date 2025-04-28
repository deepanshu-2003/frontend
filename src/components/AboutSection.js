import Link from 'next/link';
import Image from 'next/image';
import * as motion from "motion/react-client"
import styles from '/public/styles/About.module.css'; // Changed import to About.module.css
import SectionHeading from './SectionHeading';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <SectionHeading
        title="About Beehive Amore"
        subtitle="Who We Are & What We Do"
      />

      <div className={styles.aboutContent}>
        <motion.div
          className={styles.aboutImageContainer}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.aboutImage}>
            <Image
              src="https://images.unsplash.com/photo-1726594703316-fc9f35c7d80f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Beehive Amore Team"
              width={500}
              height={600}
              style={{ objectFit: 'cover' }}
            />
          </div>
          
        </motion.div>

        <motion.div
          className={styles.aboutText}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Building Digital Success Since 2015</h3>
          <p>
            At Beehive Amore, we're passionate about helping businesses thrive in the digital landscape. As a leading digital marketing agency, we provide comprehensive digital marketing services and also offer advanced coding education in areas like web development, app development, and AI/ML. Just like a beehive represents community, productivity, and sweet results, we work collaboratively to deliver solutions that help our clients succeed.
          </p>
          <p>
            Our team of experienced digital marketing and coding professionals brings together diverse skills and perspectives, allowing us to approach each project with creativity and innovation. We believe in building lasting partnerships with our clients, understanding their unique challenges in the digital landscape, and delivering tailored solutions that exceed expectations.
          </p>
          
          <div className={styles.aboutFeatures}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#FDB515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01L9 11.01" stroke="#FDB515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h4>Client-Focused Approach</h4>
                <p>We prioritize your business goals and tailor our solutions accordingly.</p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FDB515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="#FDB515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="#FDB515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h4>Industry Expertise</h4>
                <p>Our team brings years of experience across various industries.</p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#FDB515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#FDB515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="#FDB515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h4>Innovative Solutions</h4>
                <p>We stay ahead of trends to deliver cutting-edge strategies.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
