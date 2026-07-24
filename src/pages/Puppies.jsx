import { useEffect, useState } from "react";
import { FaImage, FaVideo } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Meta from "../components/Meta";
import PuppyCard from "../components/home/PuppyCard";
import puppyMeetingImage from "../assets/aria-vlajko-meet-new.webp";
import erosTitanGrassImage from "../assets/eros_titan_gras_relax.jpg";
import erosTitanVideo from "../assets/eros_title_video.mp4";
import titanFourMonthsVideo from "../assets/Titan_4_months.mp4";
import titanStandingWindVideo from "../assets/titan_standing_wind.mp4";
import titanChairSitVideo from "../assets/titan_chair_sit.mp4";
import titanLeashTrainingVideo from "../assets/titan_leache_tranning.mp4";
import titanChairRelaxImage from "../assets/titan_chair_relax.jpeg";
import { kennelInfo } from "../data/kennel";
import { currentPuppies, sevenWeekPuppies } from "../data/puppies";

const titanFirst = (puppies) =>
  [
    ...puppies.filter((puppy) => puppy.name === "Eros Titan Casa di Andrey"),
    ...puppies.filter((puppy) => puppy.name !== "Eros Titan Casa di Andrey"),
  ];

export default function Puppies() {
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState(null);
  const erosTitan = currentPuppies.find(
    (puppy) => puppy.name === "Eros Titan Casa di Andrey"
  );
  const erosGallery = [
    {
      src: puppyMeetingImage,
      alt: "Casa di Andrey Boxer puppy family moment",
    },
    {
      type: "video",
      src: titanLeashTrainingVideo,
      alt: "Eros Titan Casa di Andrey leash training",
      date: "20.07.2026",
    },
    {
      type: "video",
      src: titanChairSitVideo,
      alt: "Eros Titan Casa di Andrey sitting on a chair",
      date: "10.07.2026",
    },
    {
      type: "video",
      src: titanFourMonthsVideo,
      alt: "Eros Titan Casa di Andrey at four months",
      poster: erosTitanGrassImage,
      date: "01.07.2026",
    },
    {
      type: "video",
      src: titanStandingWindVideo,
      alt: "Eros Titan Casa di Andrey standing in the wind",
      date: "19.06.2026",
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
              Eros Titan is a golden brindle male from Litter E, born
              26.02.2026, now 4 months old. He is gentle, smart, playful, eats
              well, loves ball play, and is friendly with other dogs. When a dog
              is behind a fence on the street, he already shows a young guardian
              instinct: he raises his coat and gives a bark. His white blaze is
              now softer, visible mainly as a few lighter hairs.
            </p>
            <Link className="button button--primary" to="/contact">
              Ask about Eros Titan
            </Link>
          </div>
          <div className="puppy-available-feature__media">
            <video
              src={erosTitanVideo}
              controls
              muted
              playsInline
              preload="metadata"
              poster={titanChairRelaxImage}
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
                <span className="puppy-available-gallery__type" aria-hidden="true">
                  {image.type === "video" ? <FaVideo /> : <FaImage />}
                </span>
                {image.date && (
                  <time
                    className="puppy-available-gallery__date"
                    dateTime={image.date.split(".").reverse().join("-")}
                  >
                    {image.date}
                  </time>
                )}
                {image.type === "video" ? (
                  <video
                    src={image.src}
                    muted
                    playsInline
                    preload="metadata"
                    poster={image.poster}
                  />
                ) : (
                  <img src={image.src} alt={image.alt} loading="lazy" />
                )}
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
          {selectedImage.type === "video" ? (
            <video
              src={selectedImage.src}
              controls
              autoPlay
              playsInline
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              onClick={(event) => event.stopPropagation()}
            />
          )}
        </div>
      )}

      <section className="section puppy-updates-highlight" id="available">
        <div className="section-heading">
          <p className="eyebrow">8-week gallery</p>
          <h2>Puppy videos from their 8-week update</h2>
          <p>
            A gallery-style look at what already happened: the puppies at 8
            weeks old, growing beautifully and ready for their next chapter.
          </p>
          <div className="status-badge-list" aria-label="Puppy status options">
            <span className="status-badge status-badge--available">
              Available
            </span>
            <span className="status-badge status-badge--reserved">
              Reserved
            </span>
            <span className="status-badge status-badge--new-owner">
              New owner
            </span>
            <span className="status-badge status-badge--kennel">
              In our kennel
            </span>
          </div>
        </div>
        <div className="puppy-grid" id="available-8weeks">
          {titanFirst(currentPuppies).map((puppy) => (
            <PuppyCard puppy={puppy} key={puppy.name} />
          ))}
        </div>
      </section>

      <section className="section puppy-updates-highlight">
        <div className="section-heading">
          <p className="eyebrow">Earlier updates</p>
          <h2>7-week puppy videos</h2>
          <p>
            Earlier clips are preserved for families who want to see how each
            puppy has developed.
          </p>
        </div>
        <div className="compact-list">
          {titanFirst(sevenWeekPuppies).map((puppy) => (
            <article className="compact-media" key={puppy.name}>
              <video
                src={puppy.video}
                controls
                muted
                playsInline
                preload="metadata"
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
