import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from '/public/styles/Home.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <div className={styles.footerLogo}>
              <img 
                src="/images/beehive-logo-proper.png" 
                alt="Beehive Amore Logo" 
                width={60} 
                height={60} 
                style={{width: 'auto', height: 'auto'}}
              />
            </div>
            <p className={styles.footerDescription}>
              Innovative digital solutions for businesses of all sizes. We help you grow and thrive in the digital landscape.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Services</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/services">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/services">Web Development</Link>
              </li>
              <li>
                <Link href="/services">Advance Coding</Link>
              </li>
              <li>
                <Link href="/services">Brand Strategy</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Contact Info</h3>
            <ul className={styles.contactInfo}>
              <li>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>Laxmi complex, 2nd floor, Near Bus Stand, Sonipat - 131001</span>
              </li>
              <li>
                <FaPhoneAlt className={styles.contactIcon} />
                <span>+918571946962 / +918571942962</span>
              </li>
              <li>
                <FaEnvelope className={styles.contactIcon} />
                <span>beehiveamore@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          &copy; {currentYear} Beehive Amore. All Rights Reserved.
        </div>
        
      </div>
    </footer>
  );
}
