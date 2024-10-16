import React from "react";

const ContactForm = () => {
  return (
    <>
      <section
        className="bg-gradient-top dark:bg-gradient-top-dark"
        id="contact"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <div className="mt-8 text-center">
                <a href="#" className="text-2xl font-bold text-pink-600">
                  Contact us
                </a>
              </div>
              <p className="max-w-xl text-lg text-red-700">
                Reserve Your Dog Now! Contact us for more photos, short videos,
                health certificates, and a rating list from exhibitions. We also
                offer images of prize cups our champions have won.
              </p>
            </div>

            <div className="rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form
                name="contact"
                netlify
                method="POST"
                action="/thank-you"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                id="contact-form"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="w-9/12 mx-auto">
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    name="name"
                    className="w-full rounded-lg border-gray-200 p-3 text-sm bg-white dark:bg-gray-900 dark:text-white"
                    placeholder="Full Name"
                    type="text"
                    id="name"
                    required
                  />
                </div>

                <div className="w-9/12 mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      name="email"
                      className="w-full rounded-lg border-gray-200 p-3 text-sm bg-white dark:bg-gray-900 dark:text-white"
                      placeholder="Email Address"
                      type="email"
                      id="email"
                      required
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      name="phone"
                      className="w-full rounded-lg border-gray-200 p-3 text-sm bg-white dark:bg-gray-900 dark:text-white"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div className="w-9/12 mx-auto">
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="resize-none w-full rounded-lg border-gray-200 p-3 text-sm bg-gradient-top dark:bg-gradient-top-dark dark:text-white"
                    placeholder="Your Message"
                    rows="8"
                    id="message"
                    required
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-btn-color px-5 py-3 font-medium text-white dark:bg-gray-700 sm:w-auto"
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
