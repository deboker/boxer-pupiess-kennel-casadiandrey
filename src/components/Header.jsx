import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import Logo from "../assets/CASADIANDREY-logo.svg";
import LogoW from "../assets/CASADIANDREYWHITE-logo.svg";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import "react-toggle-dark-mode/dist/toggle-style.css";

export default function Header(props) {
  return (
    <div>
      <header className={props.darkMode ? "dark-mode" : ""}>
        <div className="container header">
          <h1>
            <img
              src={props.darkMode ? LogoW : Logo}
              alt="Logo"
              className="logo"
            />
            German Boxer Puppies for Sale!
            <div className="toggler">
              <DarkModeSwitch
                style={{ marginBottom: "2rem" }}
                size={40}
                checked={props.darkMode}
                onClick={props.handleClick}
              />
            </div>
          </h1>
          <span className="subheading">
            "CASA DI ANDREY" Breeders of European Top Quality Boxer Puppies
          </span>
        </div>
      </header>
    </div>
  );
}
