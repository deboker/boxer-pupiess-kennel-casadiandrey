import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Meta from "../components/Meta";
import PuppyCard from "../components/home/PuppyCard";
import puppyImage from "../assets/aria_puppy.webp";
import puppyMeetingImage from "../assets/aria-vlajko-meet-new.webp";
import puppyFamilyImage from "../assets/1000082034.jpg";
import { kennelInfo } from "../data/kennel";
import { currentPuppies, sevenWeekPuppies } from "../data/puppies";

export default function Puppies() {
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState(null);
  const erosTitan = currentPuppies.find(
    (puppy) => puppy.name === "Eros Titan Casa di Andrey"
  );
  const erosGallery = [
    {
      src: puppyImage,
      alt: "Eros Titan Casa di Andrey puppy portrait",
    },
    {
      src: puppyMeetingImage,
      alt: "Casa di Andrey Boxer puppy family moment",
    },
    {
      src: puppyFamilyImage,
      alt: "Casa di Andrey puppy outdoor moment",
    },
  ];

  useEffect(() => {
    if (location.hash === "#available-8weeks" || location.hash === "#eros-titan") {
      const targetId =
        location.hash === "#eros-titan" ? "eros-titan" : "available-8weeks";

      document
        .getElementById(targetId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  useEffect(() => {
    if (!selectedImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <Meta
        title="Puppies"
        description="Current Casa di Andrey puppy availability, puppy videos, notes, and reservation contact information."
        path="/puppies"
      />
      <section className="page-hero">
        <p className="eyebrow">Puppies</p>
        <h1>Current Casa di Andrey puppies</h1>
        <p>
          Watch the latest puppy videos, review availability, and send an inquiry
          for fresh photos, health certificates, show ratings, and next steps.
        </p>
      </section>

      {erosTitan && (
        <section className="section puppy-available-feature" id="eros-titan">
          <div className="puppy-available-feature__copy">
            <p className="eyebrow">Available now</p>
            <h2>{erosTitan.name}</h2>
            <p className="lead">{erosTitan.note}</p>
            <p>
              Eros Titan is a golden brindle male Boxer puppy from Litter E,
              with a white blaze and white chest. He is still available for a
              carefully selected family that understands the breed, values
              character, and wants a loyal companion raised inside the Casa di
              Andrey world.
            </p>
            <Link className="button button--primary" to="/contact">
              Ask about Eros Titan
            </Link>
          </div>
          <div className="puppy-available-feature__media">
            <video
              src={erosTitan.video}
              controls
              muted
              playsInline
              preload="metadata"
              poster="/aria_puppy.webp"
            />
          </div>
          <div className="puppy-available-gallery">
            {erosGallery.map((image) => (
              <button
                className="puppy-available-gallery__button"
                type="button"
                key={image.src}
                onClick={() => setSelectedImage(image)}
                aria-label={`Open larger view: ${image.alt}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </section>
      )}

      {selectedImage && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="image-lightbox__close"
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            Close
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      <section className="section" id="available">
        <div className="section-heading">
          <p className="eyebrow">Current availability</p>
          <h2>8 weeks old puppies</h2>
          <p>The puppies are now 8 weeks old and growing beautifully.</p>
        </div>
        <div className="puppy-grid" id="available-8weeks">
          {currentPuppies.map((puppy) => (
            <PuppyCard puppy={puppy} key={puppy.name} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Earlier updates</p>
          <h2>7-week puppy videos</h2>
          <p>
            Earlier clips are preserved for families who want to see how each
            puppy has developed.
          </p>
        </div>
        <div className="compact-list">
          {sevenWeekPuppies.map((puppy) => (
            <article className="compact-media" key={puppy.name}>
              <video
                src={puppy.video}
                controls
                muted
                playsInline
                preload="none"
                poster="/aria_puppy.webp"
              />
              <div>
                <span>{puppy.weekGroup}</span>
                <h3>{puppy.name}</h3>
                <p>{puppy.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <h2>{kennelInfo.reserveText}</h2>
        <p>{kennelInfo.upcomingLittersText}</p>
        <Link className="button button--primary" to="/contact">
          Contact us
        </Link>
      </section>
    </>
  );
}
