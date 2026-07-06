import { useState } from "react";
import { kennelInfo } from "../../data/kennel";

const ContactForm = () => {
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("idle");

  const encodeFormData = (formData) =>
    new URLSearchParams(formData).toString();

  const validate = (form) => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();
    const nextErrors = {};

    if (!name) nextErrors.name = "Name is required.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) nextErrors.email = "Email is required.";
    else if (!emailRegex.test(email)) nextErrors.email = "Please enter a valid email.";

    if (!phone) nextErrors.phone = "Phone is required.";
    if (!message) nextErrors.message = "Message is required.";

    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const nextErrors = validate(form);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitStatus("idle");
      return;
    }

    setErrors({});
    setSubmitStatus("submitting");

    try {
      const formData = new FormData(form);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(formData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      form.reset();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__copy">
        <p className="eyebrow">{kennelInfo.contactTitle}</p>
        <h2>Send us a message</h2>
        <p>{kennelInfo.contactText}</p>
      </div>

      {submitStatus === "success" ? (
        <div className="contact-success" role="status">
          <p className="eyebrow">Message sent</p>
          <h2>Thank you for contacting Casa di Andrey.</h2>
          <p>
            We received your message and will contact you shortly with the next
            information.
          </p>
        </div>
      ) : (
        <form
          name="contact"
          method="POST"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          id="contact-form"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don&apos;t fill this out if you&apos;re human:{" "}
              <input name="bot-field" />
            </label>
          </p>

          <div className="form-field">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Full Name" type="text" id="name" required />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input
                name="email"
                placeholder="Email Address"
                type="email"
                id="email"
                required
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone Number</label>
              <input
                name="phone"
                placeholder="Phone Number"
                type="tel"
                id="phone"
                required
              />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="8"
              id="message"
              required
            ></textarea>
            {errors.message && <p className="error-text">{errors.message}</p>}
          </div>

          {submitStatus === "error" && (
            <p className="error-text" role="alert">
              The message could not be sent. Please try again or contact us on
              social media.
            </p>
          )}

          <button
            type="submit"
            className="button button--primary"
            disabled={submitStatus === "submitting"}
          >
            {submitStatus === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
