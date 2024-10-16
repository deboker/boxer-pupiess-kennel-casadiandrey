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
              <form name="contact" netlify>
                <p>
                  <label>
                    Name <input type="text" name="name" />
                  </label>
                </p>
                <p>
                  <label>
                    Email <input type="email" name="email" />
                  </label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
