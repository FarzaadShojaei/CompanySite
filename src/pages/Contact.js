import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    subscribe: false,
    priority: 'medium',
    contactMethod: 'email'
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [feedbackForm, setFeedbackForm] = useState({
    rating: '5',
    feedback: '',
    recommend: 'yes'
  });

  const [submissionResults, setSubmissionResults] = useState({
    contact: '',
    newsletter: '',
    feedback: ''
  });

  const handleContactChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setSubmissionResults(prev => ({
        ...prev,
        contact: 'Error: Please fill in all required fields (Name, Email, Message)'
      }));
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      setSubmissionResults(prev => ({
        ...prev,
        contact: 'Error: Please enter a valid email address'
      }));
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setSubmissionResults(prev => ({
        ...prev,
        contact: `Success! Thank you ${contactForm.name}, your message has been sent. We'll contact you via ${contactForm.contactMethod}.`
      }));
      
      // Reset form
      setContactForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        subscribe: false,
        priority: 'medium',
        contactMethod: 'email'
      });
    }, 1000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    
    if (!newsletterEmail) {
      setSubmissionResults(prev => ({
        ...prev,
        newsletter: 'Error: Please enter your email address'
      }));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      setSubmissionResults(prev => ({
        ...prev,
        newsletter: 'Error: Please enter a valid email address'
      }));
      return;
    }

    setTimeout(() => {
      setSubmissionResults(prev => ({
        ...prev,
        newsletter: `Success! ${newsletterEmail} has been subscribed to our newsletter.`
      }));
      setNewsletterEmail('');
    }, 800);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    
    if (!feedbackForm.feedback.trim()) {
      setSubmissionResults(prev => ({
        ...prev,
        feedback: 'Error: Please provide your feedback'
      }));
      return;
    }

    setTimeout(() => {
      setSubmissionResults(prev => ({
        ...prev,
        feedback: `Success! Thank you for your ${feedbackForm.rating}-star rating and feedback. We appreciate your input!`
      }));
      
      setFeedbackForm({
        rating: '5',
        feedback: '',
        recommend: 'yes'
      });
    }, 1000);
  };

  const clearResults = () => {
    setSubmissionResults({
      contact: '',
      newsletter: '',
      feedback: ''
    });
  };

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-description">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </section>

      <div className="forms-container">
        {/* Main Contact Form */}
        <section className="contact-form-section">
          <h2>Contact Us</h2>
          <form onSubmit={handleContactSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleContactChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={contactForm.company}
                  onChange={handleContactChange}
                  placeholder="Your company name"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={contactForm.subject}
                onChange={handleContactChange}
                placeholder="What is this regarding?"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <select
                  id="priority"
                  name="priority"
                  value={contactForm.priority}
                  onChange={handleContactChange}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Preferred Contact Method</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={contactForm.contactMethod === 'email'}
                      onChange={handleContactChange}
                    />
                    Email
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      checked={contactForm.contactMethod === 'phone'}
                      onChange={handleContactChange}
                    />
                    Phone
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleContactChange}
                required
                rows="5"
                placeholder="Please describe your inquiry in detail..."
              ></textarea>
            </div>

            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={contactForm.subscribe}
                  onChange={handleContactChange}
                />
                Subscribe to our newsletter for updates and special offers
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

          {submissionResults.contact && (
            <div className={`form-result ${submissionResults.contact.includes('Error') ? 'error' : 'success'}`}>
              {submissionResults.contact}
            </div>
          )}
        </section>

        {/* Newsletter Signup Form */}
        <section className="newsletter-section">
          <h2>Newsletter Signup</h2>
          <p>Stay updated with our latest news and offers</p>
          
          <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
            <div className="newsletter-input-group">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </div>
          </form>

          {submissionResults.newsletter && (
            <div className={`form-result ${submissionResults.newsletter.includes('Error') ? 'error' : 'success'}`}>
              {submissionResults.newsletter}
            </div>
          )}
        </section>

        {/* Feedback Form */}
        <section className="feedback-section">
          <h2>Leave Feedback</h2>
          <p>Help us improve our services</p>
          
          <form onSubmit={handleFeedbackSubmit} className="feedback-form">
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <select
                id="rating"
                name="rating"
                value={feedbackForm.rating}
                onChange={handleFeedbackChange}
              >
                <option value="1">1 Star - Poor</option>
                <option value="2">2 Stars - Fair</option>
                <option value="3">3 Stars - Good</option>
                <option value="4">4 Stars - Very Good</option>
                <option value="5">5 Stars - Excellent</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="feedback">Your Feedback</label>
              <textarea
                id="feedback"
                name="feedback"
                value={feedbackForm.feedback}
                onChange={handleFeedbackChange}
                rows="4"
                placeholder="Tell us about your experience..."
              ></textarea>
            </div>

            <div className="form-group">
              <label>Would you recommend us?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="recommend"
                    value="yes"
                    checked={feedbackForm.recommend === 'yes'}
                    onChange={handleFeedbackChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="recommend"
                    value="no"
                    checked={feedbackForm.recommend === 'no'}
                    onChange={handleFeedbackChange}
                  />
                  No
                </label>
                <label>
                  <input
                    type="radio"
                    name="recommend"
                    value="maybe"
                    checked={feedbackForm.recommend === 'maybe'}
                    onChange={handleFeedbackChange}
                  />
                  Maybe
                </label>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Submit Feedback
            </button>
          </form>

          {submissionResults.feedback && (
            <div className={`form-result ${submissionResults.feedback.includes('Error') ? 'error' : 'success'}`}>
              {submissionResults.feedback}
            </div>
          )}
        </section>
      </div>

      <section className="contact-info">
        <h2>Other Ways to Reach Us</h2>
        <div className="contact-methods">
          <div className="contact-method">
            <h3>📧 Email</h3>
            <p>info@techcorp.com</p>
            <p>support@techcorp.com</p>
          </div>
          <div className="contact-method">
            <h3>📞 Phone</h3>
            <p>+1 (555) 123-4567</p>
            <p>Mon-Fri: 9AM-6PM EST</p>
          </div>
          <div className="contact-method">
            <h3>📍 Address</h3>
            <p>123 Tech Street</p>
            <p>Innovation City, IC 12345</p>
          </div>
        </div>
      </section>

      {(submissionResults.contact || submissionResults.newsletter || submissionResults.feedback) && (
        <div className="clear-results">
          <button onClick={clearResults} className="clear-btn">
            Clear All Messages
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;
