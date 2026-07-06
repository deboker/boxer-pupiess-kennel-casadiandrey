import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/CASADIANDREY-logo.svg";
import LogoWhite from "../../assets/CASADIANDREYWHITE-logo.svg";
import { kennelInfo } from "../../data/kennel";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Our Boxers", to: "/our-boxers" },
  { label: "Litters", to: "/litters" },
  { label: "Puppies", to: "/puppies" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Boxer Art", to: "/boxer-art" },
  { label: "Contact", to: "/contact" },
];

export default function Header({ isHome }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isMenuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const logoSrc = isHome && !isScrolled && !isMenuOpen ? LogoWhite : Logo;

  return (
    <header
      className={`site-header ${isHome ? "site-header--home" : ""} ${
        isScrolled || isMenuOpen ? "site-header--solid" : ""
      }`}
    >
      <div className="site-header__inner">
        <Link className="brand" to="/" onClick={closeMenu}>
          <img src={logoSrc} alt="Casa di Andrey Kennel Logo" />
          <span>
            <strong>{kennelInfo.displayName}</strong>
            <small>German Boxer Kennel</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`site-nav ${isMenuOpen ? "site-nav--open" : ""}`}
          id="site-navigation"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"
              }
              to={item.to}
              onClick={closeMenu}
              key={item.to}
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
