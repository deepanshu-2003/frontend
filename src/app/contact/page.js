"use client"

import Head from 'next/head';
import * as motion from "motion/react-client"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import styles from '/public/styles/Contact.module.css';
import SectionHeading from '../../components/SectionHeading';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beehive Amore | Contact Us</title>
        <meta name="description" content="Get in touch with Beehive Amore" />
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
            <h1>Contact Us</h1>
            <p>We'd love to hear from you. Reach out to us with any questions or inquiries.</p>
          </motion.div>
        </div>

        <section className={styles.contactSection}>
          <div className={styles.contactGrid}>
            <motion.div
              className={styles.contactInfo}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                title="Get In Touch"
                subtitle="We're here to help you succeed"
              />
              
              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <FaMapMarkerAlt />
                  </div>
                  <div className={styles.infoContent}>
                    <h3>Our Location</h3>
                    <p>Laxmi complex, 2nd floor,</p>
                    <p>Near Bus Stand, Sonipat - 131001</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <FaPhoneAlt />
                  </div>
                  <div className={styles.infoContent}>
                    <h3>Phone Number</h3>
                    <p>+918571946962 / +918571942962</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <FaEnvelope />
                  </div>
                  <div className={styles.infoContent}>
                    <h3>Email Address</h3>
                    <p>beehiveamore@gmail.com</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <FaClock />
                  </div>
                  <div className={styles.infoContent}>
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className={styles.formContainer}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </section>

        <section className={styles.mapSection}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.704596689241!2d77.022634!3d28.996123400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db1d8e3d55591%3A0x3695f865a70a7e91!2sBeehive%20Amore!5e0!3m2!1sen!2sin!4v1745403504361!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.map}
          ></iframe>
        </section>

        <section className={styles.faqSection}>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions"
          />
          
          <div className={styles.faqGrid}>
            <motion.div 
              className={styles.faqItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3>What services do you offer?</h3>
              <p>We offer a comprehensive range of digital services including digital marketing, advanced coding, web development, brand strategy, content creation, SEO optimization, and social media management.</p>
            </motion.div>
            
            <motion.div 
              className={styles.faqItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>How do I request a quote?</h3>
              <p>You can request a quote by filling out our contact form, calling us directly, or sending us an email with details about your project.</p>
            </motion.div>
            
            <motion.div 
              className={styles.faqItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Do you work with small businesses?</h3>
              <p>Absolutely! We work with businesses of all sizes, from startups to large corporations. Our solutions are tailored to meet your specific needs and budget.</p>
            </motion.div>
            
            <motion.div 
              className={styles.faqItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>What is your typical project timeline?</h3>
              <p>Project timelines vary depending on scope and complexity. During our initial consultation, we'll provide you with an estimated timeline based on your specific requirements.</p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
