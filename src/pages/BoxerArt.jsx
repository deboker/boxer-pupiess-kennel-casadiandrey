import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import heroImage from "../assets/aria-vlajko-meet-new.webp";
import puppyImage from "../assets/aria_puppy.webp";

export default function BoxerArt() {
  return (
    <>
      <Meta
        title="Boxer Art"
        description="The first Casa di Andrey Boxer Art page for future custom Boxer portraits and portrait inquiries."
        path="/boxer-art"
      />
      <section className="hero hero--art">
        <img src={heroImage} alt="Casa di Andrey Boxer photograph used as art inspiration" />
        <div className="hero__content">
          <p className="eyebrow">Boxer Art by Casa di Andrey</p>
          <h1>Portraits inspired by real Boxers and their stories.</h1>
          <p>
            A future creative section for custom Boxer portraits, puppy artwork,
            memorial portraits, and breeder-focused visual pieces.
          </p>
          <Link className="button button--primary" to="/contact">
            Ask about a portrait
          </Link>
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Concept</p>
          <h2>Photography first, artwork later.</h2>
          <p>
            The current visuals are real Casa di Andrey Boxer photographs. Finished
            artwork and portfolio examples should be added only when real artwork
            exists.
          </p>
        </div>
        <img src={puppyImage} alt="Casa di Andrey Boxer puppy photograph" loading="lazy" />
      </section>

      <section className="section process-grid">
        {[
          "The client sends several clear photographs.",
          "We select a visual direction.",
          "A custom artwork is created.",
          "The client receives the approved digital version.",
        ].map((step, index) => (
          <article key={step}>
            <span>{index + 1}</span>
            <p>{step}</p>
          </article>
        ))}
      </section>

      <section className="section cta-section">
        <h2>Custom portraits, puppy artwork, memorial portraits, and breeder services can grow here.</h2>
        <p>Pricing is not finalized in the repository, so it is intentionally not displayed yet.</p>
        <Link className="button button--secondary" to="/contact">
          Send an inquiry
        </Link>
      </section>
    </>
  );
}
