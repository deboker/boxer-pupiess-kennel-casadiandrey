import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import introLogo from "../assets/CASADIANDREY-logo.svg";
import heroImage from "../assets/banner_aria_puppy.webp";
import boxerImage from "../assets/aria_08.01.2024.webp";
import puppyImage from "../assets/aria-vlajko-meet-new.webp";
import adamPoseImage from "../assets/adam_dblack_pose_fhotosuting.jpg";
import { kennelInfo } from "../data/kennel";
import { litters } from "../data/litters";
import { currentPuppies } from "../data/puppies";

export default function Home() {
  const currentLitter = litters[0];
  const getStatusClass = (status) =>
    `preview-status preview-status--${status.toLowerCase().replace(/\s+/g, "-")}`;
  const puppyPreview = [
    {
      name: "Eros Titan Casa di Andrey",
      status: "Available",
    },
    {
      name: "Elysia Nova Casa di Andrey",
      status: "Stays in kennel",
      note: "Selected to stay with Casa di Andrey.",
    },
    {
      name: "Egon Imperius Casa di Andrey",
      status: "In Zaxhaus kennel",
      note: "Now part of Zaxhaus kennel.",
    },
  ]
    .map((preview) => {
      const puppy = currentPuppies.find((item) => item.name === preview.name);
      return puppy ? { ...puppy, ...preview } : null;
    })
    .filter(Boolean);

  return (
    <>
      <Meta
        title="Casa di Andrey | German Boxer Kennel"
        description="Casa di Andrey is a German Boxer kennel presenting Litter E, available puppy information, Boxer photographs, and contact details."
        path="/"
      />

      <section className="hero" id="meeting">
        <img src={heroImage} alt="Casa di Andrey German Boxer dogs" />
        <div className="hero__content">
          <p className="eyebrow">European Boxer Kennel</p>
          <h1>Bred with purpose. Raised as family.</h1>
          <p>Health-tested German Boxers from carefully selected European bloodlines.</p>
          <div className="button-row">
            <Link className="button button--primary" to="/puppies">
              Discover our puppies
            </Link>
            <Link className="button button--secondary" to="/about">
              About the kennel
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--intro">
        <div className="section__intro-mark">
          <div className="section__eyebrow">Casa di Andrey</div>
          <img
            className="section__intro-logo"
            src={introLogo}
            alt="Casa di Andrey logo"
            loading="lazy"
          />
        </div>
        <div className="editorial-text">
          <h2>{kennelInfo.shippingHeadline}</h2>
          <p>{kennelInfo.introText}</p>
        </div>
      </section>

      <section className="section split-section section--soft">
        <div>
          <p className="eyebrow">Current litter</p>
          <h2>{currentLitter.name}</h2>
          <p className="lead">Born {currentLitter.birthDate}</p>
          <p>{currentLitter.parentInformation}</p>
          <Link className="text-link" to="/litters">
            View litter details
          </Link>
        </div>
        <img src={puppyImage} alt="Casa di Andrey Boxer puppy" loading="lazy" />
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Available puppies</p>
          <h2>A concise view of the current puppies.</h2>
          <Link className="text-link" to="/puppies">
            See full puppy page
          </Link>
        </div>
        <div className="preview-grid">
          {puppyPreview.map((puppy) => (
            <article
              className={`preview-item ${
                puppy.status === "Available" ? "preview-item--available" : ""
              }`}
              key={puppy.name}
            >
              <span className={getStatusClass(puppy.status)}>{puppy.status}</span>
              <h3>{puppy.name}</h3>
              <p>{puppy.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section split-section--reverse section--boxers-preview">
        <img src={boxerImage} alt="Casa di Andrey adult Boxers" loading="lazy" />
        <div>
          <p className="eyebrow">Our Boxers</p>
          <h2>Adult Boxer and parent information, handled with care.</h2>
          <p>
            The repository currently confirms adult Boxer imagery and the Litter E
            parent statement, but not detailed dog profiles, titles, or pedigrees.
          </p>
          <Link className="text-link" to="/our-boxers">
            View our Boxers
          </Link>
        </div>
      </section>

      <section className="section philosophy-band">
        <p className="eyebrow">Kennel philosophy</p>
        <h2>Health-tested parents, top European bloodlines, and family companions.</h2>
        <p>
          Casa di Andrey presents Boxer puppies as future companions as well as
          representatives of the breed: temperament, care, and family life stay
          close to the center of the kennel story.
        </p>
      </section>

      <section className="section gallery-preview">
        <div className="section-heading">
          <p className="eyebrow">Gallery</p>
          <h2>Selected moments from Casa di Andrey.</h2>
          <Link className="text-link" to="/gallery">
            Open gallery
          </Link>
        </div>
        <div className="gallery-strip">
          <img src={adamPoseImage} alt="Adam D Black posing during photoshooting" loading="lazy" />
          <img src={heroImage} alt="Casa di Andrey dogs together" loading="lazy" />
          <img src={puppyImage} alt="Casa di Andrey puppy portrait" loading="lazy" />
          <img src={boxerImage} alt="Casa di Andrey Boxer portrait" loading="lazy" />
        </div>
      </section>

      <section className="section art-preview">
        <div>
          <p className="eyebrow">Boxer Art by Casa di Andrey</p>
          <h2>Portraits inspired by real Boxers, their character, and their stories.</h2>
          <p>
            A future creative section for custom Boxer portraits and artwork,
            kept inside the Casa di Andrey world.
          </p>
        </div>
        <Link className="button button--secondary" to="/boxer-art">
          Explore Boxer Art
        </Link>
      </section>

      <section className="section cta-section">
        <p className="eyebrow">Contact</p>
        <h2>Interested in a future litter or one of our Boxers?</h2>
        <Link className="button button--primary" to="/contact">
          Send us a message
        </Link>
      </section>
    </>
  );
}
