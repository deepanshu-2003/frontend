import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as motion from "motion/react-client"
import styles from '/public/styles/Contact.module.css';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      // In a real application, this would send the form data to your backend
      // For now, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', data);
      reset();
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <h2>Send Us a Message</h2>
      <p>Fill out the form below and we'll get back to you as soon as possible, or reach us directly at <strong>beehiveamore@gmail.com</strong> or call <strong>+918571946962</strong>.</p>

      {submitSuccess && (
        <motion.div 
          className={styles.successMessage}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Thank you for your message! We'll be in touch soon.
        </motion.div>
      )}

      {submitError && (
        <motion.div 
          className={styles.errorMessage}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          There was an error submitting your message. Please try again later.
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            className={errors.name ? styles.inputError : ''}
            placeholder="Your full name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            className={errors.email ? styles.inputError : ''}
            placeholder="Your email address"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && <span className={styles.errorText}>{errors.email.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number (Optional)</label>
          <input
            id="phone"
            type="tel"
            placeholder="Your phone number"
            {...register('phone')}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            className={errors.subject ? styles.inputError : ''}
            placeholder="Subject of your message"
            {...register('subject', { required: 'Subject is required' })}
          />
          {errors.subject && <span className={styles.errorText}>{errors.subject.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            className={errors.message ? styles.inputError : ''}
            placeholder="Your message"
            {...register('message', { required: 'Message is required' })}
          ></textarea>
          {errors.message && <span className={styles.errorText}>{errors.message.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
}
