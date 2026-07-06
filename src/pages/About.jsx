import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import { kennelInfo } from "../data/kennel";
import familyMomentsImage from "../assets/casa_di_andrey_Family_moments.webp";

export default function About() {
  return (
    <>
      <Meta
        title="About"
        description="Casa di Andrey kennel story, experience, Boxer breed connection, and philosophy."
        path="/about"
      />
      <section className="page-hero">
        <p className="eyebrow">About the kennel</p>
        <h1>Almost three decades with European Boxers.</h1>
        <p>{kennelInfo.introText}</p>
      </section>

      <section className="section editorial-columns">
        <article>
          <p className="eyebrow">Story</p>
          <h2>Casa di Andrey</h2>
          <p>
            Casa di Andrey is built around European Boxers with strong
            character, correct type, and the steady temperament expected from
            family companions and exhibition dogs. Good health, responsible
            pairing, and quality for future breeding are central goals of the
            kennel.
          </p>
        </article>
        <article>
          <p className="eyebrow">Philosophy</p>
          <h2>Character, care, and family life.</h2>
          <p>
            We value health-tested parents, thoughtful pairings, early family
            socialization, and honest communication with every future owner.
          </p>
        </article>
        <figure className="editorial-columns__image">
          <img
            src={familyMomentsImage}
            alt="Casa di Andrey family moment with Boxer dogs"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="section cta-section">
        <h2>Want to learn more about Casa di Andrey?</h2>
        <Link className="button button--primary" to="/contact">
          Send an inquiry
        </Link>
      </section>
    </>
  );
}
