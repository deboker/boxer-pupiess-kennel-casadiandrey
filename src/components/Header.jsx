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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
        setIsNavActive(false);
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
          <a href="#top">
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
          <a href="#home" className="active">
            Home
          </a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
