import React from 'react';
import './Contact.css';
import Swal from 'sweetalert2';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "58708324-6772-4414-8cdb-5112a750c941"); 

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message Sent Successfully",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
        event.target.reset();
      } else {
        throw new Error(data.message || "Form submission failed");
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message || "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-text">
            <h2>Have a Sketch in Mind? Let's Talk!</h2>
            <p>Bring your vision to life with a custom sketch! Reach out, and we'll get back to you within 24 hours.</p>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="Enter your full name"
                className="form-input"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone number</label>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Enter your phone number"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea 
                name="message"
                placeholder="Leave a message..."
                className="form-input"
                rows="4"
                required
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
