import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import Logo from "../assets/CASADIANDREY-logo.svg";
import LogoW from "../assets/CASADIANDREYWHITE-logo.svg";

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
            <div>
              <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.handleClick}>
                  <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
              </div>
              {/* <a
                target="_blank"
                href="https://www.facebook.com/andrej.andrasik.7"
              >
                <AiFillFacebook />
              </a> */}
            </div>
          </h1>
          <span className="subheading">
            "CASA DI ANDREY" Breeders of European Top Quality Boxer Puppies
          </span>

          {/* <nav>
            <ul>
              <li>
                <a href="https://www.facebook.com/andrej.andrasik.7">
                  <img
                    className="fb-logo"
                    src="src/assets/facebook.png"
                    alt="facebook logo"
                  />
                </a> 
              </li>
            </ul>
          </nav> */}
        </div>
      </header>
    </div>
  );
}
