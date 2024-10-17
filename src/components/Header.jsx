import React, { useEffect, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import Logo from "../assets/CASADIANDREY-logo.svg";
import LogoW from "../assets/CASADIANDREYWHITE-logo.svg";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Header(props) {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const handleNavClick = () => {
    setIsNavActive(false); // This will hide the navbar
  };

  useEffect(() => {
    const handleScroll = () => {
      const meetingSection = document.querySelector(".meeting");

      if (window.scrollY > 0) {
        setIsSticky(true);
        if (meetingSection) {
          meetingSection.style.paddingTop = "12rem";
        }
      } else {
        setIsSticky(false);
        if (meetingSection) {
          meetingSection.style.paddingTop = "2rem";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${props.darkMode ? "dark-mode" : ""} ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="header-container">
        <div className="logo-container">
          <a href="#top" onClick={handleNavClick}>
            <img
              src={props.darkMode ? LogoW : Logo}
              alt="Casa di Andrey Kennel Logo"
              className="logo"
            />
          </a>
        </div>

        <div>
          <h1 className="kennel-name">CASA DI ANDREY</h1>
          <p className="subheading">
            Breeders of European Top Quality Boxer Dogs
          </p>
        </div>

        <div className="toggle-container">
          <DarkModeSwitch
            size={25}
            checked={props.darkMode}
            onClick={props.handleClick}
            aria-label="Toggle dark mode"
          />
        </div>
        <i
          className={`bx bx-menu ${isNavActive ? "bx-x" : ""}`}
          id="menu-icon"
          onClick={toggleNav}
        ></i>

        <nav className={`navbar ${isNavActive ? "active" : ""}`}>
          <a href="#meeting" className="active" onClick={handleNavClick}>
            Home
          </a>
          <a href="#available" onClick={handleNavClick}>
            Services
          </a>
          <a href="#contact" onClick={handleNavClick}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
