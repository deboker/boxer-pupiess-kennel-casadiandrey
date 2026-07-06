import meetingImage from "../../assets/aria-vlajko-meet-new.webp";
import { kennelInfo } from "../../data/kennel";

export default function MeetingSection({ darkMode }) {
  return (
    <section className={`meeting ${darkMode ? "dark-mode" : ""}`} id="meeting">
      <h2>{kennelInfo.meetingTitle}</h2>
      <img
        src={meetingImage}
        alt={kennelInfo.heroImageAlt}
        className={`main-image ${darkMode ? "dark-mode" : ""}`}
      />
      <h3>{kennelInfo.shippingHeadline}</h3>
      <p>{kennelInfo.introText}</p>
    </section>
  );
}
