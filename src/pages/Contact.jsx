import Meta from "../components/Meta";
import ContactForm from "../components/forms/ContactForm";
import { socialLinks } from "../data/socialLinks";

export default function Contact() {
  return (
    <>
      <Meta
        title="Contact"
        description="Contact Casa di Andrey about puppies, future litters, Boxer information, photos, videos, and reservation next steps."
        path="/contact"
      />
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Write to Casa di Andrey.</h1>
        <p>
          Ask about current availability, future litters, transport, photos,
          videos, health certificates, and show ratings.
        </p>
      </section>

      <ContactForm />

      <section className="section social-section">
        <p className="eyebrow">Social</p>
        <div className="social-text-links">
          {socialLinks.map((link) => (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              key={link.name}
            >
              {link.name}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
