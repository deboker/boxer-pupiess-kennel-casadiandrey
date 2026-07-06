import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import ariaImage from "../assets/aria_08.01.2024.webp";
import elysiaImage from "../assets/elysia_nova_relaxing_sofa.jpeg";

const dogs = [
  {
    name: "Aria Casa di Andrey",
    role: "Family dog",
    litter: "Litter A",
    image: ariaImage,
    alt: "Aria Casa di Andrey Boxer portrait",
    description:
      "Aria is part of the Casa di Andrey family story and comes from our first litter. She represents the temperament, character, and family presence we value in our Boxers.",
  },
  {
    name: "Elysia Nova Casa di Andrey",
    role: "In our kennel",
    litter: "Litter E",
    image: elysiaImage,
    alt: "Elysia Nova Casa di Andrey Boxer portrait",
    description:
      "Elysia Nova stays in the Casa di Andrey kennel. She is still young, so her full profile, health information, and future role will be added only when confirmed.",
  },
];

export default function OurBoxers() {
  return (
    <>
      <Meta
        title="Our Boxers"
        description="Meet the Casa di Andrey Boxers currently presented on the website, including Aria and Elysia Nova."
        path="/our-boxers"
      />
      <section className="page-hero">
        <p className="eyebrow">Our Dogs</p>
        <h1>The Boxers living the Casa di Andrey story.</h1>
        <p>
          A careful introduction to our own Boxers. We list only confirmed
          information and keep titles, pedigrees, and health details for when
          they are ready to publish accurately.
        </p>
      </section>

      <section className="section dog-profile-grid">
        {dogs.map((dog) => (
          <article className="dog-profile-card" key={dog.name}>
            <img src={dog.image} alt={dog.alt} loading="lazy" />
            <div>
              <p className="eyebrow">{dog.role}</p>
              <h2>{dog.name}</h2>
              <p className="lead">{dog.litter}</p>
              <p>{dog.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="section cta-section">
        <h2>Want to know more about our Boxers?</h2>
        <p>
          Contact us for current information, photos, and confirmed details
          about Aria, Elysia Nova, and future Casa di Andrey dogs.
        </p>
        <Link className="button button--primary" to="/contact">
          Contact Casa di Andrey
        </Link>
      </section>
    </>
  );
}
