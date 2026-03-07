import React, { useEffect } from "react";
import Lottie from "lottie-react";
import ContactForm from "./Form/ContactForm";
import meting from "../assets/aria_vlajko.webp";
import maleFawnVideo from "../assets/male_fawn.mp4";
import femaleBrindleVideo from "../assets/female_brindle.mp4";
import femaleFawnVideo from "../assets/female_fawn.mp4";
import maleBrindleVideo from "../assets/male_brindle.mp4";
import maleBrindleWhiteMaskVideo from "../assets/male_brindle_white_mask.mp4";

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
      name: "Male fawn",
      note: "male fawn, clean lines",
      video: maleFawnVideo,
    },
    {
      name: "Female brindle",
      note: "female brindle, white chest & socks",
      video: femaleBrindleVideo,
    },
    {
      name: "Flashy fawn girl",
      note: "female fawn, flashy white blaze",
      video: femaleFawnVideo,
    },
    {
      name: "Male brindle",
      note: "male brindle, black mask",
      video: maleBrindleVideo,
    },
    {
      name: "Male brindle white mask",
      note: "male brindle, white mask detail",
      video: maleBrindleWhiteMaskVideo,
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

      <section
        id="available"
        className={`available ${props.darkMode ? "dark-mode" : ""}`}
      >
        <h1>AVAILABLE PUPPIES</h1>
        <p className="available-lead">
          Watch the newest puppy clips and get to know each of our five pups.
        </p>

        <div className="puppy-grid">
          {puppies.map((puppy) => (
            <div
              className={`puppy-card ${props.darkMode ? "dark-mode" : ""}`}
              key={puppy.name}
            >
              <video
                className="card-video"
                src={puppy.video}
                poster={meting}
                autoPlay
                muted
                loop
                playsInline
                controls
              />
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
