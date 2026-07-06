import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const revealSelector = [
  ".page-hero > *",
  ".section-heading",
  ".editorial-text",
  ".section__intro-mark",
  ".split-section > div",
  ".preview-item",
  ".philosophy-band > *",
  ".gallery-preview .gallery-strip",
  ".art-preview > *",
  ".cta-section > *",
  ".contact-section__copy",
  ".contact-form",
  ".compact-media",
  ".media-grid figure",
  ".video-grid figure",
].join(",");

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(revealSelector));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    elements.forEach((element) => element.classList.add("reveal-on-scroll"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div id="top" className={isHome ? "site site--home" : "site"}>
      <Header isHome={isHome} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
