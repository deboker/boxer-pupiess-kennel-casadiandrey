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
            The confirmed repository copy presents Casa di Andrey as a kennel
            focused on European boxer champions and loving family companions.
          </p>
        </article>
        <article>
          <p className="eyebrow">Philosophy</p>
          <h2>Character, care, and family life.</h2>
          <p>
            The current site emphasizes fully health-tested parents, top European
            bloodlines, transport guidance, and careful communication with future
            families.
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
