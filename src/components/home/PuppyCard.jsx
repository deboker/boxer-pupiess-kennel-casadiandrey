import { FaMars, FaVenus } from "react-icons/fa";

export default function PuppyCard({ puppy, darkMode }) {
  const isReserved = puppy.reserved === true;
  const isAvailable = puppy.status === "Available" || !isReserved;
  const statusClass =
    puppy.status === "In our kennel"
      ? "reserved-badge--kennel"
      : isReserved
        ? "reserved-badge--reserved"
        : "reserved-badge--available";

  return (
    <article
      className={`puppy-card ${isAvailable ? "puppy-card--available" : ""} ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      <span
        className={`reserved-badge ${statusClass}`}
      >
        {puppy.status || (isReserved ? "New owner" : "Available")}
      </span>
      {puppy.video ? (
        <video
          className="card-video"
          src={puppy.video}
          muted
          playsInline
          controls
          preload="metadata"
        />
      ) : (
        <div
          className={`card-video card-video-placeholder ${
            darkMode ? "dark-mode" : ""
          }`}
          aria-label={`${puppy.name} 8 weeks video placeholder`}
        >
          <span>8 weeks video coming soon</span>
        </div>
      )}
      <p className="puppy-name">{puppy.name}</p>
      <span
        className="gender-icon"
        aria-label={puppy.gender === "female" ? "Female" : "Male"}
      >
        {puppy.gender === "female" ? <FaVenus /> : <FaMars />}
      </span>
      <p className="puppy-note">{puppy.note}</p>
    </article>
  );
}
