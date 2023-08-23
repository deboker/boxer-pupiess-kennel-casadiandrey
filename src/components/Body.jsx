import React, { useEffect } from "react";
import meting from "../assets/meting.webp";
import Cornelius from "../assets/Cornelius.jpg";
import Caesar from "../assets/Caesar.jpg";
import Claudius from "../assets/Claudius.jpg";
import Commodus from "../assets/Commodus.jpg";
import arrow from "../assets/arrow-up.svg";
import "../index.css";

export default function Body() {
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
            <a href="https://www.pedigreedatabase.com/boxer/dog.html?id=2916967-aleksandar-serbian-diamond?_v=20230820162815">
              Aleksandar Serbian Diamond
            </a>
            and
            <a href="https://www.pedigreedatabase.com/boxer/dog.html?id=3233248-aprillia-von-der-drachenwiese?_v=20230820163345">
              Aprillia Von der Drachenwiese
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section-two">
        <div className="container">
          <h2>Available Adorable Puppies: Fawn Males.</h2>
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
            href="https://www.facebook.com/messages/t/andrej.andrasik.7"
            className="btn btn-mess"
          >
            Messanger
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+381638878655&text=Hi%20There!"
            className="btn btn-light"
          >
            WhatsApp
          </a>
          <a
            href="viber://contact?number=%2B381638878655"
            className="btn btn-mid"
          >
            Viber
          </a>
          <p>
            We have puppies available and upcoming litters. Reservations are now
            open.
          </p>
          <a href="#top" class="back-to-top" title="Back to Top">
            <img src={arrow} alt="Back to Top" class="back-to-top__image" />
          </a>
        </div>
      </section>
    </div>
  );
}
