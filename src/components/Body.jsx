import React, { useEffect } from "react";
import Lottie from "lottie-react";
import ContactForm from "./Form/ContactForm";
import meting from "../assets/aria_vlajko.webp";

import facebookIconAnimation from "../assets/lottieflow-social-networks-15-3-000000-easey.json";
import intstagramIconAnimation from "../assets/lottieflow-social-networks-15-5-000000-easey.json";
import arrow from "../assets/arrow-up.svg";
import "../index.css";
import {
  FaViber,
  FaWhatsapp,
  FaFacebookMessenger,
  FaEnvelope,
} from "react-icons/fa";

export default function Body(props) {
  useEffect(() => {
    const handleFirstTab = (e) => {
      if (e.key === "Tab") {
        document.body.classList.add("user-is-tabbing");
        window.removeEventListener("keydown", handleFirstTab);
        window.addEventListener("mousedown", handleMouseDownOnce);
      }
    };

    const handleMouseDownOnce = () => {
      document.body.classList.remove("user-is-tabbing");
      window.removeEventListener("mousedown", handleMouseDownOnce);
      window.addEventListener("keydown", handleFirstTab);
    };

    window.addEventListener("keydown", handleFirstTab);

    const backToTopButton = document.querySelector(".back-to-top");
    let isBackToTopRendered = false;

    let alterStyles = (isBackToTopRendered) => {
      backToTopButton.style.visibility = isBackToTopRendered
        ? "visible"
        : "hidden";
      backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
      backToTopButton.style.transform = isBackToTopRendered
        ? "scale(1)"
        : "scale(0)";
    };

    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        isBackToTopRendered = true;
        alterStyles(isBackToTopRendered);
      } else {
        isBackToTopRendered = false;
        alterStyles(isBackToTopRendered);
      }
    });

    return () => {
      window.removeEventListener("keydown", handleFirstTab);
      window.removeEventListener("mousedown", handleMouseDownOnce);
    };
  }, []);

  return (
    <div>
      {/* First Section - Meeting */}
      <section
        className={`meeting ${props.darkMode ? "dark-mode" : ""}`}
        id="meeting"
      >
        <h2>From "CASA DI ANDREY": Introducing Litter E born 26.02.2026.</h2>
        <img
          src={meting}
          alt="Meeting"
          className={`main-image ${props.darkMode ? "dark-mode" : ""}`}
        />
        <h3>Shipping available worldwide!</h3>
        <p>
          Thank you for gracing Casa di Andrey Kennel with your presence. For
          nearly three decades, we've poured our love into these magnificent
          creatures. Our commitment is unwavering, offering exceptional boxer
          puppies to loving families. Whether destined for show or a cozy home,
          our puppies are chosen from the best European bloodlines. With
          health-tested sires and dams, we prioritize the well-being of each
          pup..
        </p>
      </section>

      <section className={`available ${props.darkMode ? "dark-mode" : ""}`}>
        <h1>AVAILABLE PUPPIES</h1>
        <div className="video-galery">
          <h2>Meet Adam d'Black.</h2>

          <img
            className="feature-video"
            src={meting}
            alt="Adam d'Black Casa di Andrey"
          />
          {/* <p className="available-label">Available</p> */}
        </div>

        <div className={`feature-item ${props.darkMode ? "dark-mode" : ""}`}>
          <img src={meting} alt="Adam d black head" className="feature-image" />

          {/* <p className="reserved-label">Puppy Reserved</p> */}
          {/* <p className="available-label">Available</p> */}
          <p className="image-text"> Casa di Andrey</p>
        </div>
        <div className={`feature-item ${props.darkMode ? "dark-mode" : ""}`}>
          <img src={meting} alt="Adam d black side" className="feature-image" />
          {/* <p className="reserved-label">Puppy Reserved</p> */}
          {/* <p className="available-label">Available</p> */}
          <p className="image-text"> Casa di Andrey</p>
        </div>
        <div className={`feature-item ${props.darkMode ? "dark-mode" : ""}`}>
          <img src={meting} alt="Adam d black runs" className="feature-image" />
          {/* <p className="reserved-label">Puppy Reserved</p> */}
          {/* <p className="available-label">Available</p> */}
          <p className="image-text"> Casa di Andrey</p>
        </div>
        <div className={`feature-item ${props.darkMode ? "dark-mode" : ""}`}>
          <img
            src={meting}
            alt="Adam d black puppy1"
            className="feature-image"
          />
          {/* <p className="reserved-label">Puppy Reserved</p> */}
          {/* <p className="available-label">Available</p> */}
          <p className="image-text">Puppy Casa di Andrey</p>
        </div>
        <div className="reserve-text">
          <p>
            Reserve Your Dog Now! Contact us for more photos, short videos
            showcasing the dog, health certificates, and a rating list from
            exhibitions. We also offer images of prize cups our champions have
            won. Discover your new furry friend and embark on a journey.
          </p>
          <p>Stay tuned for our upcoming litters too!</p>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Social Media Links */}
      <div className={`social-media ${props.darkMode ? "dark-mode" : ""}`}>
        <p>Follow us</p>
        <div className="social-links">
          <a
            href="https://www.facebook.com/andrej.andrasik.7/"
            className="facebook-icon"
            aria-label="Follow us on Facebook"
          >
            <Lottie
              animationData={facebookIconAnimation}
              style={{ width: 20, height: 20 }}
              loop={true}
            />
          </a>
          <a
            href="https://www.instagram.com/casa_di_andrey/"
            className="facebook-icon"
            aria-label="Follow us on Instagram"
          >
            <Lottie
              animationData={intstagramIconAnimation}
              style={{ width: 20, height: 20 }}
              loop={true}
            />
          </a>
        </div>
      </div>

      {/* Back to Top Button */}
      <a href="#top" className="back-to-top" title="Back to Top">
        <img src={arrow} alt="Back to Top" className="back-to-top__image" />
      </a>
    </div>
  );
}
