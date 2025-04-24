"use client"

import '/public/styles/globals.css';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Beehive Amore - Digital Marketing & Advanced Coding Agency</title>
        <meta name="description" content="Beehive Amore is a digital marketing agency providing digital marketing services and teaching advanced coding including web development, app development, and AI/ML." />
      </head>
      <body>
        <div>
          <Navbar isScrolled={isScrolled} />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
