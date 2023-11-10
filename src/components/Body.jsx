import React, { useEffect } from "react";
import meting from "../assets/meting.jpg";
import Cornelius from "../assets/1694111226823.jpg";
import Caesar from "../assets/1693313389728.jpg";
import Claudius from "../assets/1694111209281.jpg";
import Commodus from "../assets/1694111174036.jpg";
import Allfour from "../assets/1693593267855.jpg";
import arrow from "../assets/arrow-up.svg";
import "../index.css";
import { FaViber, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

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
          <h2>Thrilling News from "CASA DI ANDREY": Introducing Litter C </h2>
          <img src={meting} alt="Meeting" className="main-image" />
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
              href="https://www.pedigreedatabase.com/boxer/dog.html?id=2916967-aleksandar-serbian-diamond?_v=20230820162815"
            >
              Aleksandar Serbian Diamond
            </a>
            <span style={{ margin: "0 5px" }}>and</span>
            <a
              target="_blank"
              href="https://www.pedigreedatabase.com/boxer/dog.html?id=3233248-aprillia-von-der-drachenwiese?_v=20230820163345"
            >
              Aprillia Von der Drachenwiese
            </a>
            .
          </p>
        </div>
      </section>

      <section className={`section-two ${props.darkMode ? "dark-mode" : ""}`}>
        <div className="container">
          <h2>
            Discover our selection of charming fawn male puppies ready to bring
            joy and companionship into your life.
          </h2>
          <img src={Allfour} alt="all fawn male" className="feature-image" />
          <div className="section-two-image-container">
            <div className="feature-item">
              <img
                src={Caesar}
                alt="Caesar fawn male"
                className="feature-image"
              />
              <p>Caesar Casa di Andrey</p>
            </div>
            <div className="feature-item">
              <img
                src={Cornelius}
                alt="Cornelius fawn male"
                className="feature-image"
              />
              <p>Cornelius Casa di Andrey</p>
            </div>
            <div className="feature-item">
              <img
                src={Claudius}
                alt="Claudius fawn male"
                className="feature-image"
              />
              <p>Claudius Casa di Andrey</p>
            </div>
            <div className="feature-item">
              <img
                src={Commodus}
                alt="Commodus fawn male"
                className="feature-image"
              />
              <p>Commodus Casa di Andrey</p>
            </div>
          </div>
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
            Reserve Your Puppy Now! Contact us for more photos and adorable
            short videos showcasing our puppies. Discover Your New Furry Friend
            Explore our available puppies and get ready to welcome a new member
            to your family. Stay tuned for our upcoming litters too!
          </p>
          <a href="#top" className="back-to-top" title="Back to Top">
            <img src={arrow} alt="Back to Top" class="back-to-top__image" />
          </a>
        </div>
      </section>
    </div>
  );
}
