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
  const puppies = [
    {
      name: "Brindle boy",
      note: "male brindle, more white chest & socks",
      video: "/videos/puppy1.mp4",
    },
    {
      name: "Flashy fawn girl",
      note: "female fawn, flashy white blaze",
      video: "/videos/puppy2.mp4",
    },
    {
      name: "Dark brindle girl",
      note: "female brindle, minimal white",
      video: "/videos/puppy3.mp4",
    },
    {
      name: "Classic fawn boy",
      note: "male fawn, black mask",
      video: "/videos/puppy4.mp4",
    },
    {
      name: "Brindle girl",
      note: "female brindle, white chest spot",
      video: "/videos/puppy5.mp4",
    },
  ];

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
        <p className="available-lead">
          Pozrite si nové videá šteniatok. Dve videá vedľa seba, pod nimi info o
          každom z piatich šteniat.
        </p>

        <div className="video-grid">
          {puppies.slice(0, 2).map((puppy) => (
            <div className="video-card" key={puppy.name}>
              <video
                className="feature-video"
                src={puppy.video}
                poster={meting}
                autoPlay
                muted
                loop
                playsInline
                controls
              />
              <p className="video-caption">{puppy.name}</p>
            </div>
          ))}
        </div>

        <div className="puppy-grid">
          {puppies.map((puppy) => (
            <div
              className={`puppy-card ${props.darkMode ? "dark-mode" : ""}`}
              key={puppy.name}
            >
              <img src={meting} alt={puppy.name} className="feature-image" />
              <p className="puppy-name">{puppy.name}</p>
              <p className="puppy-note">{puppy.note}</p>
            </div>
          ))}
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
