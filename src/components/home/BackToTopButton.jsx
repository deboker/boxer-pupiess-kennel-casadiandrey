import { useEffect, useRef } from "react";
import arrow from "../../assets/arrow-up.svg";

export default function BackToTopButton() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleFirstTab = (e) => {
      if (e.key === "Tab") {
        document.body.classList.add("user-is-tabbing");
        window.removeEventListener("keydown", handleFirstTab);
        window.addEventListener("mousedown", handleMouseDownOnce);
      }
    };

    const handleMouseDownOnce = () => {
      document.body.classList.remove("user-is-tabbing");
      window.removeEventListener("mousedown", handleMouseDownOnce);
      window.addEventListener("keydown", handleFirstTab);
    };

    const alterStyles = (isBackToTopRendered) => {
      if (!buttonRef.current) return;

      buttonRef.current.style.visibility = isBackToTopRendered
        ? "visible"
        : "hidden";
      buttonRef.current.style.opacity = isBackToTopRendered ? 1 : 0;
      buttonRef.current.style.transform = isBackToTopRendered
        ? "scale(1)"
        : "scale(0)";
    };

    const handleScroll = () => {
      alterStyles(window.scrollY > 700);
    };

    window.addEventListener("keydown", handleFirstTab);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("keydown", handleFirstTab);
      window.removeEventListener("mousedown", handleMouseDownOnce);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#top" className="back-to-top" title="Back to Top" ref={buttonRef}>
      <img src={arrow} alt="Back to Top" className="back-to-top__image" />
    </a>
  );
}
