import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import ariaImage from "../assets/aria_08.01.2024.webp";
import elysiaImage from "../assets/elysia_nova_relaxing_sofa.jpeg";
import litterAMeetingImage from "../assets/cartier&free.jpg";
import litterEMeetingImage from "../assets/aria-vlajko-meet-new.webp";

const calculateAge = (birthDate) => {
  if (!birthDate) return null;

  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();

  if (today.getDate() < birthDate.getDate()) {
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "month" : "months"}`);

  return parts.length > 0 ? parts.join(" ") : "Less than 1 month";
};

const dogs = [
  {
    name: "Aria Casa di Andrey",
    role: "In our kennel",
    litter: "Litter A",
    born: "18 December 2022",
    birthDate: new Date(2022, 11, 18),
    breed: "German Boxer",
    image: ariaImage,
    alt: "Aria Casa di Andrey Boxer portrait",
    description:
      "Aria is part of the Casa di Andrey family story and comes from our first litter. She represents the temperament, character, movement, and family presence we value in our Boxers.",
    health: [
      "Hip examination: class A",
      "Spondylosis: grade 0",
      "Heart examination: grade 0",
      "Heart testing: no signs of pulmonic or aortic stenosis",
    ],
    showResults: [
      "20.05.2023 CAC Zmajevo 2023: Baby class, VP 1 - Very Promising 1",
      "26.08.2023 CAC Kovin 2023: Puppy class, Very Promising",
      "02.09.2023 Bokser Club Serbia 2023: Puppy class, Very Promising, 3rd place",
      "14.04.2024 CAC Zmajevo 2024: Junior class, Excellent in Junior Class",
    ],
    litterMeeting: {
      image: litterAMeetingImage,
      alt: "Litter A parent meeting at Casa di Andrey",
      caption: "Litter A meeting",
    },
    profileUrl: "https://aria-casadiandrey.netlify.app/",
  },
  {
    name: "Elysia Nova Casa di Andrey",
    role: "In our kennel",
    litter: "Litter E",
    born: "26 February 2026",
    birthDate: new Date(2026, 1, 26),
    breed: "German Boxer",
    image: elysiaImage,
    alt: "Elysia Nova Casa di Andrey Boxer portrait",
    description:
      "Elysia Nova stays in the Casa di Andrey kennel. She is still young, with her first confirmed DNA health result already recorded and her future presentation planned carefully.",
    health: [
      "ARVC DNA analysis: mutation was not detected",
      "STRN gene result: N/N",
    ],
    showResults: [
      "Preparing for Special Boxer Show Palić on 30.08.2026",
    ],
    litterMeeting: {
      image: litterEMeetingImage,
      alt: "Litter E parent meeting at Casa di Andrey",
      caption: "Litter E meeting",
    },
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
          A careful introduction to our own Boxers. Aria has a fuller profile
          with health and show information, while Elysia Nova is being
          documented as she grows in our kennel.
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
              <div className="dog-profile-facts">
                {dog.born && (
                  <span>
                    <strong>Born</strong>
                    {dog.born}
                  </span>
                )}
                {dog.birthDate && (
                  <span>
                    <strong>Age</strong>
                    {calculateAge(dog.birthDate)}
                  </span>
                )}
                {dog.breed && (
                  <span>
                    <strong>Breed</strong>
                    {dog.breed}
                  </span>
                )}
              </div>
              {dog.health && (
                <div className="dog-profile-detail">
                  <h3>Verified health</h3>
                  <ul>
                    {dog.health.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {dog.showResults && (
                <div className="dog-profile-detail">
                  <h3>Show results</h3>
                  <ul>
                    {dog.showResults.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {dog.litterMeeting && (
                <figure className="dog-profile-meeting">
                  <img
                    src={dog.litterMeeting.image}
                    alt={dog.litterMeeting.alt}
                    loading="lazy"
                  />
                  <figcaption>{dog.litterMeeting.caption}</figcaption>
                </figure>
              )}
              {dog.profileUrl && (
                <a
                  className="text-link"
                  href={dog.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View full Aria profile
                </a>
              )}
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
