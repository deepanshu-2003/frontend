import React, { useState, useEffect } from 'react'; // Import useEffect
import styles from '/public/styles/EnrollmentForm.module.css';

const EnrollmentForm = ({ courses, onClose, selectedCourse }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    selectedCourse: selectedCourse ? selectedCourse.title : ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission success

  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      selectedCourse: selectedCourse ? selectedCourse.title : ''
    }));
  }, [selectedCourse]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to a backend or handle it further
    console.log('Form submitted:', formData);
    // Simulate a successful submission
    setIsSubmitted(true);
    // Optionally, you could add a delay before closing the form
    // setTimeout(onClose, 3000);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {isSubmitted ? (
          <div className={styles.successMessage}>
            <h2>Thank You!</h2>
            <p>Your enrollment request has been submitted successfully.</p>
            <button type="button" className={styles.closeButton} onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <h2>Enroll Now</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="mobileNumber">Mobile Number:</label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="selectedCourse">Select Course:</label>
                <select
                  id="selectedCourse"
                  name="selectedCourse"
                  value={formData.selectedCourse}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">-- Select a Course --</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course.title}>{course.title}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className={styles.submitButton}>Submit</button>
              <button type="button" className={styles.closeButton} onClick={onClose}>Close</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EnrollmentForm;
