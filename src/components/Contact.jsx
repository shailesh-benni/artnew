import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-text">
            <h2>Have a Sketch in Mind? Let's Talk!</h2>
            <p>Bring your vision to life with a custom sketch! Reach out, and we'll get back to you within 24 hours.</p>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                placeholder="Enter your full name"
                className="form-input"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Phone number</label>
                <input 
                  type="tel" 
                  placeholder="Enter your phone number"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea 
                placeholder="Leave a message..."
                className="form-input"
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 