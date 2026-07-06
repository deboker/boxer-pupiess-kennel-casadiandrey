import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Meta from "../components/Meta";
import PuppyCard from "../components/home/PuppyCard";
import { kennelInfo } from "../data/kennel";
import { currentPuppies, sevenWeekPuppies } from "../data/puppies";

export default function Puppies() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#available-8weeks") {
      document
        .getElementById("available-8weeks")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <>
      <Meta
        title="Puppies"
        description="Current Casa di Andrey puppy availability, puppy videos, notes, and reservation contact information."
        path="/puppies"
      />
      <section className="page-hero">
        <p className="eyebrow">Puppies</p>
        <h1>Current Casa di Andrey puppies</h1>
        <p>
          Watch the latest puppy videos, review availability, and send an inquiry
          for fresh photos, health certificates, show ratings, and next steps.
        </p>
      </section>

      <section className="section" id="available">
        <div className="section-heading">
          <p className="eyebrow">Current availability</p>
          <h2>8 weeks old puppies</h2>
          <p>The puppies are now 8 weeks old and growing beautifully.</p>
        </div>
        <div className="puppy-grid" id="available-8weeks">
          {currentPuppies.map((puppy) => (
            <PuppyCard puppy={puppy} key={puppy.name} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Earlier updates</p>
          <h2>7-week puppy videos</h2>
          <p>
            Earlier clips are preserved for families who want to see how each
            puppy has developed.
          </p>
        </div>
        <div className="compact-list">
          {sevenWeekPuppies.map((puppy) => (
            <article className="compact-media" key={puppy.name}>
              <video
                src={puppy.video}
                controls
                muted
                playsInline
                preload="none"
                poster="/aria_puppy.webp"
              />
              <div>
                <span>{puppy.weekGroup}</span>
                <h3>{puppy.name}</h3>
                <p>{puppy.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <h2>{kennelInfo.reserveText}</h2>
        <p>{kennelInfo.upcomingLittersText}</p>
        <Link className="button button--primary" to="/contact">
          Contact us
        </Link>
      </section>
    </>
  );
}
