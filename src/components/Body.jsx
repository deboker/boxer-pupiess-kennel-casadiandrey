import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import facebookIconAnimation from "../assets/lottieflow-social-networks-15-3-000000-easey.json";
import intstagramIconAnimation from "../assets/lottieflow-social-networks-15-5-000000-easey.json";
import ContactForm from "./Form/ContactForm";
import meting from "../assets/cartier&free.jpg";
import AdamHead from "../assets/adam-head.webp";
import AdamSide from "../assets/adam-side.webp";
import AdamRuns from "../assets/adam-runs.webp";
import AdamPuppy1 from "../assets/adam-puppy.webp";
import AdamVideo from "../assets/VID_20240914_114922.mp4";
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
      <section
        className={`meeting ${props.darkMode ? "dark-mode" : ""}`}
        id="meeting"
      >
        <h2>From "CASA DI ANDREY": Introducing Litter A born 18.12.2022.</h2>
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
          pup.
        </p>
        <p>
          Feel free to explore pedigre database:
          <a
            target="_blank"
            href="https://www.pedigreedatabase.com/boxer/dog.html?id=3123121-cartier-vaf-e-pluribus-unium?_v=20220707113256"
          >
            Cartier Vaf E Pluribus Unium
          </a>
          <span style={{ margin: "0 5px" }}>and</span>
          <a
            target="_blank"
            href="https://www.pedigreedatabase.com/boxer/dog.html?id=3216115-free-v-zaxhaus?_v=20240108034706"
          >
            Free von Zaxhaus
          </a>
          .
        </p>
      </section>

      <section
        className={`available ${props.darkMode ? "dark-mode" : ""}`}
        id="available"
      >
        <h1>AVAILABLE DOG</h1>
        <div className="video-galery">
          <h2>
            Meet Adam d'Black, born 18.12.2022, our exceptional Boxer dog ready
            for a loving home. His dark golden brindle coat with white markings
            showcases the Boxer breed's strength and grace. More than his
            striking appearance, Adam brings joy, companionship, and unwavering
            loyalty. A natural guardian, Adam is well-behaved, never causing a
            mess in the yard, and he respects the space of your home garden. As
            a descendant of champions, he offers intelligence, vitality, and a
            daily sense of adventure. Adam has also passed all essential health
            tests with flying colors: his heart is rated A (Heart - 0), his hips
            are in excellent condition (HD-A), and he has no signs of
            spondylosis (Spon. - 0). Embrace the unique joy, protection, and
            love Adam d'Black brings into your life.
          </h2>

          <video
            className="feature-video"
            autoPlay
            loop
            muted
            playsInline
            src={AdamVideo}
            alt="Adam d'black Casa di Andrey"
          ></video>
          {/* <p className="available-label">Available</p> */}
        </div>

        <div className={`feature-item ${props.darkMode ? "dark-mode" : ""}`}>
          <img
            src={AdamHead}
            alt="Adam d black head"
            className="feature-image"
          />

          {/* <p className="reserved-label">Puppy Reserved</p> */}
          {/* <p className="available-label">Available</p> */}
          <p className="image-text">Adam d'black Casa di Andrey</p>
        </div>
        <div className={`feature-item ${props.darkMode ? "dark-mode" : ""}`}>
          <img
            src={AdamSide}
            alt="Adam d black side"
            className="feature-image"
          />
          {/* <p className="reserved-label">Puppy Reserved</p> */}
          {/* <p className="available-label">Available</p> */}
          <p className="image-text">Adam d'black Casa di Andrey</p>
        </div>
        <div className={`feature-item ${props.darkMode ? "dark-mode" : ""}`}>
          <img
            src={AdamRuns}
            alt="Adam d black runs"
            className="feature-image"
          />
          {/* <p className="reserved-label">Puppy Reserved</p> */}
          {/* <p className="available-label">Available</p> */}
          <p className="image-text">Adam d'black Casa di Andrey</p>
        </div>
        <div className={`feature-item ${props.darkMode ? "dark-mode" : ""}`}>
          <img
            src={AdamPuppy1}
            alt="Adam d black puppy1"
            className="feature-image"
          />
          {/* <p className="reserved-label">Puppy Reserved</p> */}
          {/* <p className="available-label">Available</p> */}
          <p className="image-text">Puppy Adam d'black Casa di Andrey</p>
        </div>
        {/* <div className="reserve-text">
          <p>
            Reserve Your Dog Now! Contact us for more photos, short videos
            showcasing the dog, health certificates, and a rating list from
            exhibitions. We also offer images of prize cups our champions have
            won. Discover Your New Furry Friend and embark on a journey.
          </p>
          <p>Stay tuned for our upcoming litters too!</p>
        </div>*/}
      </section>

      {/* <div
        className={`contact ${props.darkMode ? "dark-mode" : ""}`}
        id="contact"
      >
        <h1>Contact us</h1>
        <a
          target="_blank"
          href="mailto:casadiandrey@gmail.com"
          className="btn btn-mess"
        >
          <FaEnvelope /> Email Us
        </a>
        <a
          target="_blank"
          href="https://m.me/andrej.andrasik.7"
          className="btn btn-mess"
        >
          <FaFacebookMessenger /> Messanger
        </a>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=+381638878655&text=Hi%20There!"
          className="btn btn-light"
        >
          <FaWhatsapp /> WhatsApp
        </a>
        <a
          target="_blank"
          href="viber://contact?number=%2B381638878655"
          className="btn btn-mid"
        >
          <FaViber /> Viber
        </a>
      </div> */}

      <ContactForm />

      <div className={`social-media ${props.darkMode ? "dark-mode" : ""}`}>
        <p>Folow us</p>
        <div className="social-links">
          <a
            href="https://www.facebook.com/andrej.andrasik.7/"
            className="facebook-icon"
            aria-label="Follow us on Facebook"
          >
            <Lottie
              animationData={facebookIconAnimation}
              style={{ width: 20, height: 20 }} // Set icon size
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
              style={{ width: 20, height: 20 }} // Set icon size
              loop={true}
            />
          </a>
        </div>
      </div>

      <a href="#top" className="back-to-top" title="Back to Top">
        <img src={arrow} alt="Back to Top" className="back-to-top__image" />
      </a>
    </div>
  );
}
