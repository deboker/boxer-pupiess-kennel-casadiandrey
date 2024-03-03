import React, { useEffect } from "react";
import meting from "../assets/cartier&free.webp";
import AdamHead from "../assets/adam-head.webp";
import AdamSide from "../assets/adam-side.webp";
import AdamRuns from "../assets/adam-runs.webp";
import AdamPuppy1 from "../assets/adam-puppy.webp";
import AdamVideo from "../assets/video-adam.mp4";
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
    <div className={props.darkMode ? "dark-mode" : ""}>
      <section>
        <div className="container">
          <h2>
            Thrilling News from "CASA DI ANDREY": Introducing Litter A born
            18.12.2022.{" "}
          </h2>
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
            puppies to loving families. Whether destined for show or a cozy
            home, our puppies are chosen from the best European bloodlines. With
            health-tested sires and dams, we prioritize the well-being of each
            pup. Feel free to explore our pedigre database:
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
        </div>
      </section>

      <section className={`section-two ${props.darkMode ? "dark-mode" : ""}`}>
        <div className="container">
          <h2>
            Meet Adam d'Black, our exceptional Boxer dog ready for a loving
            home. His dark golden brindle coat with white markings showcases the
            Boxer breed's strength and grace. More than his striking appearance,
            Adam brings joy and companionship, ready to be a loyal friend. A
            descendant of champions, he offers intelligence, vitality, and a
            daily adventure. Embrace the unique joy, protection, and love Adam
            d'Black brings into your life.
          </h2>
          {/* <img
            src={Allfour}
            alt="all fawn male"
            className={`feature-image ${props.darkMode ? "dark-mode" : ""}`}
          /> */}
          <div
            className={`section-two-image-container ${
              props.darkMode ? "dark-mode" : ""
            }`}
          >
            <div
              className={`feature-item ${props.darkMode ? "dark-mode" : ""}`}
            >
              <video
                className="feature-image"
                autoPlay
                loop
                muted
                playsInline
                src={AdamVideo} // Replace with the actual path to your video file
                alt="Adam d'black Casa di Andrey"
              ></video>
              {/* <p className="reserved-label">Puppy Reserved</p> */}
              <p className="available-label">Available</p>
              <p>Adam d'black Casa di Andrey</p>
            </div>
            <div
              className={`feature-item ${props.darkMode ? "dark-mode" : ""}`}
            >
              <img
                src={AdamHead}
                alt="Adam d black head"
                className="feature-image"
              />
              {/* <p className="reserved-label">Puppy Reserved</p> */}
              <p className="available-label">Available</p>
              <p>Adam d'black Casa di Andrey</p>
            </div>
            <div
              className={`feature-item ${props.darkMode ? "dark-mode" : ""}`}
            >
              <img
                src={AdamSide}
                alt="Adam d black side"
                className="feature-image"
              />
              {/* <p className="reserved-label">Puppy Reserved</p> */}
              <p className="available-label">Available</p>
              <p>Adam d'black Casa di Andrey</p>
            </div>
            <div
              className={`feature-item ${props.darkMode ? "dark-mode" : ""}`}
            >
              <img
                src={AdamRuns}
                alt="Adam d black runs"
                className="feature-image"
              />
              {/* <p className="reserved-label">Puppy Reserved</p> */}
              <p className="available-label">Available</p>
              <p>Adam d'black Casa di Andrey</p>
            </div>
            <div
              className={`feature-item ${props.darkMode ? "dark-mode" : ""}`}
            >
              <img
                src={AdamPuppy1}
                alt="Adam d black puppy1"
                className="feature-image"
              />
              {/* <p className="reserved-label">Puppy Reserved</p> */}
              {/* <p className="available-label">Available</p> */}
              <p>Puppy Adam d'black Casa di Andrey</p>
            </div>
          </div>
          <a
            target="_blank"
            href="mailto:casadiandrey@gmail.com"
            className="btn btn-mess"
          >
            <FaEnvelope /> Email Us
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/messages/t/andrej.andrasik.7"
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
          <p>
            Reserve Your Dog Now! Contact us for more photos, short videos
            showcasing the dog, health certificates, and a rating list from
            exhibitions. We also offer images of prize cups our champions have
            won. Discover Your New Furry Friend and embark on a journey.
          </p>
          <p>Stay tuned for our upcoming litters too!</p>
          <a href="#top" className="back-to-top" title="Back to Top">
            <img src={arrow} alt="Back to Top" class="back-to-top__image" />
          </a>
        </div>
      </section>
    </div>
  );
}
