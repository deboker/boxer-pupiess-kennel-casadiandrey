import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import Logo from "../assets/CASADIANDREY-logo.svg";

export default function Header() {
  return (
    <div>
      <header>
        <div className="container header">
          <h1>
            <img src={Logo} alt="Logo" className="logo" />
            German Boxer Puppies for Sale!
            <a href="https://www.facebook.com/andrej.andrasik.7">
              <AiFillFacebook />
            </a>
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
