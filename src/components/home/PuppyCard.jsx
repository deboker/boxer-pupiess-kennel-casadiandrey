import { FaMars, FaVenus } from "react-icons/fa";
import meetingImage from "../../assets/aria-vlajko-meet-new.webp";

export default function PuppyCard({ puppy, darkMode }) {
  const isReserved = puppy.reserved === true;

  return (
    <article className={`puppy-card ${darkMode ? "dark-mode" : ""}`}>
      <span
        className={`reserved-badge ${
          isReserved ? "reserved-badge--reserved" : "reserved-badge--available"
        }`}
      >
        {puppy.status || (isReserved ? "Reserved" : "Available")}
      </span>
      {puppy.video ? (
        <video
          className="card-video"
          src={puppy.video}
          poster={meetingImage}
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
