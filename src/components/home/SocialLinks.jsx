import Lottie from "lottie-react";
import { socialLinks } from "../../data/socialLinks";

export default function SocialLinks({ darkMode }) {
  return (
    <div className={`social-media ${darkMode ? "dark-mode" : ""}`}>
      <p>Follow us</p>
      <div className="social-links">
        {socialLinks.map((link) => (
          <a
            href={link.href}
            className="facebook-icon"
            aria-label={link.ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
            key={link.name}
          >
            <Lottie
              animationData={link.animationData}
              style={{ width: 20, height: 20 }}
              loop={true}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
