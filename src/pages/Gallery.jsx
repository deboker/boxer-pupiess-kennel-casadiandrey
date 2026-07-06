import Meta from "../components/Meta";
import heroImage from "../assets/aria-vlajko-meet-new.webp";
import puppyImage from "../assets/aria_puppy.webp";
import boxerImage from "../assets/aria-vlajko-meet.webp";
import ariaImage from "../assets/aria_vlajko.webp";
import cartierImage from "../assets/cartier&free.webp";
import adamPoseImage from "../assets/adam_dblack_pose_fhotosuting.jpg";
import { currentPuppies } from "../data/puppies";

const galleryImages = [
  { src: adamPoseImage, alt: "Adam D Black posing during a Casa di Andrey photoshooting" },
  { src: heroImage, alt: "Casa di Andrey Boxers together" },
  { src: puppyImage, alt: "Casa di Andrey Boxer puppy" },
  { src: boxerImage, alt: "Casa di Andrey adult Boxer photograph" },
  { src: ariaImage, alt: "Casa di Andrey Boxer portrait" },
  { src: cartierImage, alt: "Casa di Andrey Boxer pair" },
];

export default function Gallery() {
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
        {galleryImages.map((image) => (
          <figure key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </figure>
        ))}
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Selected puppy videos</p>
          <h2>Latest clips with manual playback.</h2>
        </div>
        <div className="video-grid">
          {currentPuppies.slice(0, 4).map((puppy) => (
            <figure key={puppy.name}>
              <video
                src={puppy.video}
                controls
                muted
                playsInline
                preload="none"
                poster="/aria_puppy.webp"
              />
              <figcaption>{puppy.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
