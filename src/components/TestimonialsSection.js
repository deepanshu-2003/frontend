"use client"

import { useState } from 'react';
import Image from 'next/image';
import * as motion from "motion/react-client"
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from '/public/styles/Home.module.css';
import SectionHeading from './SectionHeading';
import TestimonialCard from './TestimonialCard';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Swati Mishra',
      position: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
      content: 'Beehive Amore transformed our digital presence completely. Their strategic approach to our marketing challenges resulted in a 200% increase in qualified leads within just three months.'
    },
    {
      id: 2,
      name: 'Amit Shubhankar',
      position: 'Founder of an Institute',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
      content: 'Working with the Beehive Amore team has been a game-changer for our business. Their creativity, attention to detail, and commitment to our success exceeded all expectations.'
    },
    {
      id: 3,
      name: 'Naina Kumar',
      position: 'HOD Management',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
      content: 'As a small business owner, I needed a partner who understood my vision and could help bring it to life digitally. Beehive Amore delivered exactly that, with professionalism and expertise.'
    },
    {
      id: 4,
      name: 'Rohan Sharma',
      position: 'Sales Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
      content: "The level of service and expertise provided by Beehive Amore is truly exceptional. They don't just deliver results; they become an extension of your team, invested in your success."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className={styles.testimonialsSection}>
      <SectionHeading
        title="What Clients Say"
        subtitle="Success Stories from Our Partners"
      />

      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsFeatured}>
          <motion.div
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.featuredTestimonial}
          >
            <div className={styles.quoteIcon}>
              <FaQuoteLeft />
            </div>
            <p className={styles.testimonialContent}>{testimonials[currentIndex].content}</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImage}>
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={60}
                  height={60}
                  style={{ objectFit: 'cover' }}
                  className={styles.authorAvatar}
                />
              </div>
              <div className={styles.authorInfo}>
                <h4>{testimonials[currentIndex].name}</h4>
                <p>{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </motion.div>

          <div className={styles.testimonialControls}>
            <button
              className={styles.testimonialControl}
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button
              className={styles.testimonialControl}
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className={styles.testimonialsList}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${styles.testimonialCard} ${index === currentIndex ? styles.activeCard : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <TestimonialCard testimonial={testimonial} isActive={index === currentIndex} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
