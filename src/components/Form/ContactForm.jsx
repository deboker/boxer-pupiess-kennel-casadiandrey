import React, { useState } from "react";

const ContactForm = () => {
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    const nextErrors = validate(e.target);
    if (Object.keys(nextErrors).length > 0) {
      e.preventDefault();
      setErrors(nextErrors);
    } else {
      setErrors({});
    }
  };

  return (
    <>
      <section
        className="bg-tw-gradient-top dark:bg-tw-gradient-top-dark"
        id="contact"
      >
        <div className="bg-tw-gradient-top dark:bg-tw-gradient-top-dark mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <div className="mt-8 text-center">
                <a
                  href="#"
                  className="text-2xl font-bold text-text-color dark:text-text-color-dark"
                >
                  Contact us
                </a>
              </div>
              <p className="max-w-xl text-lg text-text-color dark:text-text-color-dark">
                Reserve Your Dog Now! Contact us for more photos, short videos,
                health certificates, and a rating list from exhibitions. We also
                offer images of prize cups our champions have won.
              </p>
            </div>

            <div className="rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                id="contact-form"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="w-full mx-auto pb-8">
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    name="name"
                    className="w-full rounded-lg border-gray-200 p-3 text-sm bg-primary dark:bg-primary-dark dark:text-white"
                    placeholder="Full Name"
                    type="text"
                    id="name"
                    required
                  />
                  {errors.name && <p className="error-text">{errors.name}</p>}
                </div>

                <div className="w-full pb-8 mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      name="email"
                      className="w-full rounded-lg border-gray-200 p-3 text-sm bg-primary dark:bg-primary-dark dark:text-white"
                      placeholder="Email Address"
                      type="email"
                      id="email"
                      required
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      name="phone"
                      className="w-full rounded-lg border-gray-200 p-3 text-sm bg-primary dark:bg-primary-dark dark:text-white"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      required
                    />
                    {errors.phone && <p className="error-text">{errors.phone}</p>}
                  </div>
                </div>

                <div className="w-full mx-auto">
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="resize-none w-full rounded-lg p-3 text-sm bg-secondary dark:bg-primary-dark dark:text-white"
                    placeholder="Your Message"
                    rows="8"
                    id="message"
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="error-text">{errors.message}</p>
                  )}
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-btn-color px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
