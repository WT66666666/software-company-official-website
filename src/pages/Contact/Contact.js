import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Here you would typically send the data to a server
      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // Show success message for 3 seconds
      setTimeout(() => setSubmitStatus(""), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with our team</p>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <h3>📍 Address</h3>
            <p>123 Tech Street</p>
            <p>Silicon Valley, CA 94025</p>
          </div>
          <div className="info-item">
            <h3>📞 Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="info-item">
            <h3>✉️ Email</h3>
            <p>contact@techsoft.com</p>
          </div>
          <div className="info-item">
            <h3>🕒 Business Hours</h3>
            <p>Monday - Friday: 9AM - 6PM</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? "error" : ""}
            />
            {errors.subject && (
              <span className="error-message">{errors.subject}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={errors.message ? "error" : ""}
            ></textarea>
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>

          {submitStatus === "success" && (
            <div className="success-message">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
