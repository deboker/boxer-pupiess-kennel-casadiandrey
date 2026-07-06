import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import LitterVideoSection from "../components/home/LitterVideoSection";
import { litters } from "../data/litters";

export default function Litters() {
  const currentLitter = litters[0];

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
        <LitterVideoSection litter={currentLitter} />
      </section>
    </>
  );
}
