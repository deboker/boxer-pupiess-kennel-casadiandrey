import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import litterMeetingImage from "../assets/aria-vlajko-meet-new.webp";
import { litters } from "../data/litters";

export default function Litters() {
  const currentLitter = litters[0];
  const previousLitters = litters.slice(1);

  return (
    <>
      <Meta
        title="Litters"
        description="Casa di Andrey litter information, current Litter E details, update videos, and puppy links."
        path="/litters"
      />
      <section className="page-hero">
        <p className="eyebrow">Litters</p>
        <h1>Current litter information</h1>
        <p>
          A clear archive-ready structure for current and future Casa di Andrey
          litters.
        </p>
      </section>

      <section className="section litter-detail">
        <div>
          <p className="eyebrow">Current litter</p>
          <h2>{currentLitter.name}</h2>
          <p className="lead">Born {currentLitter.birthDate}</p>
          <p>{currentLitter.parentInformation}</p>
          <Link className="button button--secondary" to="/puppies">
            View puppies
          </Link>
        </div>
        <div className="litter-meeting-card">
          <div className="litter-copy">
            <h3>Litter E pedigree meeting</h3>
            <p>
              A family banner for Litter E, connecting the current puppy
              story with the Casa di Andrey parents and bloodline.
            </p>
          </div>
          <img
            src={litterMeetingImage}
            alt="Casa di Andrey Litter E pedigree meeting banner"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section litter-archive">
        <div className="section-heading">
          <p className="eyebrow">Previous litters</p>
          <h2>Casa di Andrey litter archive</h2>
          <p>
            A look back at previous Casa di Andrey litters, their pairings, and
            birth dates.
          </p>
        </div>
        <div className="litter-archive__grid">
          {previousLitters.map((litter) => (
            <article className="litter-archive__item" key={litter.slug}>
              {litter.banner && (
                <img
                  src={litter.banner}
                  alt={litter.bannerAlt}
                  loading="lazy"
                />
              )}
              <p className="eyebrow">Previous litter</p>
              <h3>{litter.name}</h3>
              <p className="lead">Born {litter.birthDate}</p>
              <p>{litter.parentInformation}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
