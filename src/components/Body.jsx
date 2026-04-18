import React, { useEffect } from "react";
import Lottie from "lottie-react";
import ContactForm from "./Form/ContactForm";
import meting from "../assets/aria-vlajko-meet-new.webp";
import maleFawnVideo from "../assets/egon_5weeks.mp4";
import femaleBrindleVideo from "../assets/aurora_5weeks.mp4";
import femaleFawnVideo from "../assets/nova_5weeks.mp4";
import maleBrindleVideo from "../assets/titan_5weeks.mp4";
import maleBrindleWhiteMaskVideo from "../assets/magnus_5weeks.mp4";
import oneMonthClipOne from "../assets/video_1_18.4.26.mp4";
import oneMonthClipTwo from "../assets/WhatsApp Video 2026-04-18 at 12.09.13.mp4";
import oneMonthClipThree from "../assets/WhatsApp Video 2026-04-18 at 12.09.18.mp4";

import facebookIconAnimation from "../assets/lottieflow-social-networks-15-3-000000-easey.json";
import intstagramIconAnimation from "../assets/lottieflow-social-networks-15-5-000000-easey.json";
import arrow from "../assets/arrow-up.svg";
import "../index.css";
import {
  FaViber,
  FaWhatsapp,
  FaFacebookMessenger,
  FaEnvelope,
  FaMars,
  FaVenus,
} from "react-icons/fa";

export default function Body(props) {
  const puppies = [
    {
      name: "Egon Imperius Casa di Andrey",
      note: "male fawn, wide white blaze, white chest, white socks",
      video: maleFawnVideo,
      reserved: true,
      gender: "male",
    },
    {
      name: "Eos Aurora Casa di Andrey",
      note: "female dark brindle with a white chest",
      video: femaleBrindleVideo,
      reserved: true,
      gender: "female",
    },
    {
      name: "Elysia Nova Casa di Andrey",
      note: "female fawn, white blaze and white chest",
      video: femaleFawnVideo,
      reserved: true,
      gender: "female",
    },
    {
      name: "Eros Titan Casa di Andrey",
      note: "male golden brindle, white blaze and white chest",
      video: maleBrindleVideo,
      gender: "male",
    },
    {
      name: "Eros Magnus Casa di Andrey",
      note: "male golden brindle, wide white blaze, white chest, white socks",
      video: maleBrindleWhiteMaskVideo,
      gender: "male",
    },
  ];

  const oneMonthUpdateVideos = [
    oneMonthClipOne,
    oneMonthClipTwo,
    oneMonthClipThree,
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
        <h2>Casa di Andrey · Litter E born 26.02.2026</h2>
        <img
          src={meting}
          alt="Meeting"
          className={`main-image ${props.darkMode ? "dark-mode" : ""}`}
        />
        <h3>Shipping available worldwide!</h3>
        <p>
          Welcome to Casa di Andrey Kennel. For almost three decades we have
          raised European boxer champions and loving family companions. Litter E
          comes from fully health-tested parents and top European bloodlines.
          Shipping available worldwide.
        </p>
      </section>

      <section
        id="available"
        className={`available ${props.darkMode ? "dark-mode" : ""}`}
      >
        <h1>SOON AVAILABLE FOR RESERVATION</h1>
        <p className="available-lead">
          Watch the newest puppy clips and get to know each of our five pups,
          now 5 weeks old; reservations open soon.
        </p>

        <div className="puppy-grid">
          {puppies.map((puppy) => (
            <div
              className={`puppy-card ${props.darkMode ? "dark-mode" : ""}`}
              key={puppy.name}
            >
              <span className="reserved-badge">Soon</span>
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
              <span
                className="gender-icon"
                aria-label={puppy.gender === "female" ? "Female" : "Male"}
              >
                {puppy.gender === "female" ? <FaVenus /> : <FaMars />}
              </span>
              <p className="puppy-note">{puppy.note}</p>
            </div>
          ))}
        </div>

        <div
          className={`litter-video-block ${props.darkMode ? "dark-mode" : ""}`}
        >
          <div className="litter-copy">
            <h3>7-weeks Pup Update</h3>
            <p>
              Our little ones are 7 weeks old, curious and growing fast, with
              more of their sweet personalities showing every day.
            </p>
          </div>
          <div className="litter-video-row">
            {oneMonthUpdateVideos.map((video, index) => (
              <video
                key={video}
                className="litter-video"
                src={video}
                controls
                autoPlay
                muted
                loop
                playsInline
                aria-label={`One-month puppy update clip ${index + 1}`}
              />
            ))}
          </div>
          <div className="litter-copy litter-copy-bottom">
            <p>
              Three fresh clips below capture their playful energy, calm
              temperaments and how nicely they are developing.
            </p>
          </div>
        </div>

        <div className="reserve-text">
          <p>
            Interested in a puppy? Write us for fresh photos, short videos,
            health certificates, and show ratings. We’ll confirm availability
            and next steps.
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
            target="_blank"
            rel="noopener noreferrer"
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
            target="_blank"
            rel="noopener noreferrer"
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
