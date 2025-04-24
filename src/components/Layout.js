import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '/public/styles/Home.module.css';

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.layout}>
      <Navbar isScrolled={isScrolled} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
