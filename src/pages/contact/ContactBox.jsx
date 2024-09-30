import React, { useState } from "react";
import "../../style/contactLayout/contact.scss";
import emailjs from "emailjs-com";

const ContactBox = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_tk4sflr",
        "template_071c7q5",
        templateParams,
        "XlUwAte7CY-nvQw-m"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert(
            "Thank you for your message! I will do my best to reply to you within 12 hours. Looking forward to it! :)"
          );
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message.");
        }
      );

    setFormData({
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="form-container">
        <form className="form" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">How Can We Help You?</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="10"
              cols="50"
              required
              placeholder="Your message"
            />
          </div>

          <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactBox;
