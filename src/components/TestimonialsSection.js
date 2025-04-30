"use client"

import { useState, useEffect } from 'react';
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
      name: 'Anita Mittal',
      position: 'Student at Beehive Amore',
      image: '/images/testimonials/Anita_Mittal.jpg',
      content: 'Learning Digital Marketing, SEO, Full stack Web development, AI and Machine Learning, Graphics Designing, and All at Beehive Amore was a transformative experience. The comprehensive curriculum and expert instructors provided me with the skills and knowledge to excel in the industry.'
    },
    {
      id: 2,
      name: 'Deepak Kumar',
      position: 'Student at Beehive Amore',
      image: '/images/testimonials/Deepak_Kumar.jpg',
      content: 'Beehive Amore offers an exceptional learning environment. The hands-on approach to Digital Marketing, SEO, Full stack Web development, AI and Machine Learning, Graphics Designing, and All helped me grasp complex concepts easily and build practical skills.'
    },
    {
      id: 3,
      name: 'Karan Garg',
      position: 'Student at Beehive Amore',
      image: '/images/testimonials/Karan_Garg.jpeg',
      content: 'I am incredibly grateful for the education I received at Beehive Amore. The courses in Digital Marketing, SEO, Full stack Web development, AI and Machine Learning, Graphics Designing, and All were thorough and directly applicable to real-world scenarios.'
    },
    {
      id: 4,
      name: 'Kavita Sharma',
      position: 'Student at Beehive Amore',
      image: '/images/testimonials/Kavita_Sharma.jpg',
      content: 'Beehive Amore is the best place to learn Digital Marketing, SEO, Full stack Web development, AI and Machine Learning, Graphics Designing, and All. The instructors are highly knowledgeable and supportive, making the learning journey enjoyable and effective.'
    },
    {
      id: 5,
      name: 'Komal Sharma',
      position: 'Student at Beehive Amore',
      image: '/images/testimonials/Komal_Sharma.jpg',
      content: 'The comprehensive programs at Beehive Amore in Digital Marketing, SEO, Full stack Web development, AI and Machine Learning, Graphics Designing, and All equipped me with a diverse skill set that is highly valued in the current job market.'
    },
    {
      id: 6,
      name: 'Rashmi Kaur',
      position: 'Student at Beehive Amore',
      image: '/images/testimonials/Rashmi_Kaur.jpg',
      content: 'I highly recommend Beehive Amore for anyone looking to gain expertise in Digital Marketing, SEO, Full stack Web development, AI and Machine Learning, Graphics Designing, and All. The quality of education and the career guidance provided are outstanding.'
    },
    {
      id: 7,
      name: 'Rohan Kumar',
      position: 'Student at Beehive Amore',
      image: '/images/testimonials/Rohan_Kumar.jpeg',
      content: 'Beehive Amore provided me with a strong foundation in Digital Marketing, SEO, Full stack Web development, AI and Machine Learning, Graphics Designing, and All. The practical projects and industry insights were invaluable.'
    },
    {
      id: 8,
      name: 'Rohit Gaur',
      position: 'Student at Beehive Amore',
      image: '/images/testimonials/Rohit_Gaur.jpeg',
      content: 'The learning experience at Beehive Amore was exceptional. The courses in Digital Marketing, SEO, Full stack Web development, AI and Machine Learning, Graphics Designing, and All are well-structured and delivered by experienced professionals.'
    },
    {
      id: 9,
      name: 'Saurabh Patel',
      position: 'Student at Beehive Amore',
      image: '/images/testimonials/Saurabh_Patel.jpg',
      content: 'Beehive Amore is a fantastic institution for anyone serious about a career in Digital Marketing, SEO, Full stack Web development, AI and Machine Learning, Graphics Designing, and All. The support and resources available to students are top-notch.'
    },
    {
      id: 10,
      name: 'Sunita Aggrawal',
      position: 'Student at Beehive Amore',
      image: '/images/testimonials/Sunita_Aggrawal.jpg',
      content: 'I am very satisfied with the training I received at Beehive Amore. The courses in Digital Marketing, SEO, Full stack Web development, AI and Machine Learning, Graphics Designing, and All are comprehensive and up-to-date with the latest industry trends.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex, testimonials.length]); // Re-run effect if currentIndex or testimonials change

  return (
    <section className={styles.testimonialsSection}>
      <SectionHeading
        title="What Students say"
        subtitle="Success Stories of Beehive Amore"
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
      </div>
    </section>
  );
}
