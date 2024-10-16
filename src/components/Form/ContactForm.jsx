import React from "react";

const ContactForm = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h2 class="heading">
          Contact <span>Me!</span>
        </h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit="submit"
          id="contact-form"
          netlify
        >
          <input class="d-none" name="bot-field" />

          <div class="input-box">
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
            />
          </div>
          <div class="input-box">
            <input
              type="number"
              name="user_phone"
              placeholder="Mobile Number"
            />
            <input
              type="text"
              name="email_subject"
              placeholder="Email Subject"
            />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <input type="submit" value="Send Message" class="btn" />
        </form>
      </section>
    </>
  );
};

export default ContactForm;
