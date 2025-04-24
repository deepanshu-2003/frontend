"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import * as motion from "motion/react-client"
import styles from '/public/styles/Home.module.css';

export default function Navbar({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.logoContainer} onClick={isMenuOpen ? toggleMenu : undefined}>
            <div className={styles.logo}>
              <div className={styles.logoImage}>
                <Image 
                  src="/images/beehive-logo-proper.png" 
                  alt="Beehive Amore Logo" 
                  width={60} 
                  height={60} 
                  priority
                  style={{width: 'auto', height: 'auto'}}
                />
              </div>
            </div>
        </Link>

        <div className={styles.desktopMenu}>
          <ul className={styles.navLinks}>
            <li className={pathname === '/' ? styles.active : ''}>
              <Link href="/">Home</Link>
            </li>
            <li className={pathname === '/services' ? styles.active : ''}>
              <Link href="/services">Services</Link>
            </li>
            {/* <li>
              <a href="https://learn.beehiveamore.com" target="_blank" rel="noopener noreferrer">Learn</a>
            </li> */}
            <li className={pathname === '/about' ? styles.active : ''}>
              <Link href="/about">About</Link>
            </li>
            <li className={pathname === '/contact' ? styles.active : ''}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <Link href="/contact" className={styles.navButton}>Get Started</Link>
        </div>

        <button className={styles.mobileMenuButton} onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className={styles.mobileMenu}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className={styles.mobileNavLinks}>
            <li className={pathname === '/' ? styles.active : ''}>
              <Link href="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className={pathname === '/services' ? styles.active : ''}>
              <Link href="/services" onClick={toggleMenu}>Services</Link>
            </li>
            {/* <li>
              <a href="https://learn.beehiveamore.com" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Learn</a>
            </li> */}
            <li className={pathname === '/about' ? styles.active : ''}>
              <Link href="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li className={pathname === '/contact' ? styles.active : ''}>
              <Link href="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
          <Link href="/contact" className={styles.mobileNavButton} onClick={toggleMenu}>Get Started</Link>
        </motion.div>
      )}
    </nav>
  );
}
