import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import Logo from "../assets/CASADIANDREY-logo.svg";
import LogoW from "../assets/CASADIANDREYWHITE-logo.svg";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Header(props) {
  return (
    <header className={`header ${props.darkMode ? "dark-mode" : ""}`}>
      <div className="header-container">
        <img
          src={props.darkMode ? LogoW : Logo}
          alt="Casa di Andrey Kennel Logo"
          className="logo"
        />
        <div>
          <h1 className="kennel-name">CASA DI ANDREY</h1>
          <p className="subheading">
            Breeders of European Top Quality Boxer Dogs
          </p>
        </div>
        <div className="toggle-container">
          <DarkModeSwitch
            size={40}
            checked={props.darkMode}
            onClick={props.handleClick}
            aria-label="Toggle dark mode"
          />
        </div>
      </div>
    </header>
  );
}
