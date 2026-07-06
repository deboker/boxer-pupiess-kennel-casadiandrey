import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import boxerImage from "../assets/aria-vlajko-meet.webp";
import secondBoxerImage from "../assets/cartier&free.webp";

export default function OurBoxers() {
  return (
    <>
      <Meta
        title="Our Boxers"
        description="Adult Boxer and parent imagery from Casa di Andrey, with confirmed kennel information and no invented dog profiles."
        path="/our-boxers"
      />
      <section className="page-hero">
        <p className="eyebrow">Our Boxers</p>
        <h1>The Boxers behind the Casa di Andrey story.</h1>
        <p>
          Detailed dog profiles are not yet structured in the repository, so this
          page uses confirmed imagery and a careful introduction only.
        </p>
      </section>

      <section className="section split-section">
        <img src={boxerImage} alt="Casa di Andrey adult Boxers" loading="lazy" />
        <div>
          <p className="eyebrow">Confirmed information</p>
          <h2>Parents and adult dogs will be presented here with verified details.</h2>
          <p>
            Litter E is confirmed as coming from fully health-tested parents and
            top European bloodlines. Names, titles, pedigrees, and health result
            details should be added only after they are confirmed.
          </p>
          <Link className="text-link" to="/contact">
            Ask about our Boxers
          </Link>
        </div>
      </section>

      <section className="section gallery-strip">
        <img src={boxerImage} alt="Casa di Andrey Boxer pair" loading="lazy" />
        <img src={secondBoxerImage} alt="Casa di Andrey Boxer photograph" loading="lazy" />
      </section>
    </>
  );
}
