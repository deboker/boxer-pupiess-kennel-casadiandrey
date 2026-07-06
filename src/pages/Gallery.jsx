import { useEffect, useState } from "react";
import Meta from "../components/Meta";
import puppyImage from "../assets/aria_puppy.webp";
import ariaAdamExhibitionImage from "../assets/aria_adam_exsibition.webp";
import adamPoseImage from "../assets/adam_dblack_pose_fhotosuting.jpg";
import ariaVideo from "../assets/aria_video_14.09.2024.mp4";
import egonFourMonthsVideo from "../assets/egon_4_months.mp4";
import titanNovaPlayVideo from "../assets/titan&nova_play.mp4";
import daenerysExhibitionImage from "../assets/Daenerys_Khaleesi_Casa_di_Andrey_exsibition.webp";
import galleryImage2034 from "../assets/1000082034.jpg";
import galleryImage491 from "../assets/491736440_3417355075068771_8053323267358177835_n.jpg";

const galleryImages = [
  { src: galleryImage491, alt: "Casa di Andrey Boxer outdoor portrait" },
  { src: galleryImage2034, alt: "Casa di Andrey Boxer family moment" },
  { src: adamPoseImage, alt: "Adam D Black posing during a Casa di Andrey photoshooting" },
  { src: daenerysExhibitionImage, alt: "Daenerys Khaleesi Casa di Andrey exhibition moment" },
  { src: ariaAdamExhibitionImage, alt: "Aria and Adam Casa di Andrey exhibition moment" },
  { src: puppyImage, alt: "Casa di Andrey Boxer puppy" },
];

const galleryVideos = [
  { src: egonFourMonthsVideo, title: "Egon Imperius Casa di Andrey" },
  { src: ariaVideo, title: "Aria Casa di Andrey" },
  { src: titanNovaPlayVideo, title: "Titan and Nova playing" },
];

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const selectedImage =
    selectedImageIndex === null ? null : galleryImages[selectedImageIndex];

  const closeLightbox = () => setSelectedImageIndex(null);
  const showPreviousImage = () =>
    setSelectedImageIndex((currentIndex) =>
      currentIndex === null
        ? null
        : (currentIndex - 1 + galleryImages.length) % galleryImages.length
    );
  const showNextImage = () =>
    setSelectedImageIndex((currentIndex) =>
      currentIndex === null ? null : (currentIndex + 1) % galleryImages.length
    );

  useEffect(() => {
    if (selectedImageIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <>
      <Meta
        title="Gallery"
        description="A curated gallery of Casa di Andrey Boxer photographs and selected puppy videos."
        path="/gallery"
      />
      <section className="page-hero">
        <p className="eyebrow">Gallery</p>
        <h1>Moments from Casa di Andrey.</h1>
        <p>Selected photographs and quiet video previews from the kennel.</p>
      </section>

      <section className="section media-grid">
        {galleryImages.map((image, index) => (
          <figure key={image.src}>
            <button
              className="media-grid__button"
              type="button"
              onClick={() => setSelectedImageIndex(index)}
              aria-label={`Open larger view: ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </button>
          </figure>
        ))}
      </section>

      {selectedImage && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={closeLightbox}
        >
          <button
            className="image-lightbox__close"
            type="button"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            Close
          </button>
          <button
            className="image-lightbox__nav image-lightbox__nav--previous"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
          <button
            className="image-lightbox__nav image-lightbox__nav--next"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Selected videos from the kennel</p>
          <h2>Latest clips with manual playback.</h2>
        </div>
        <div className="video-grid">
          {galleryVideos.map((video) => (
            <figure key={video.src}>
              <video
                src={video.src}
                controls
                muted
                playsInline
                preload="metadata"
              />
              <figcaption>{video.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
