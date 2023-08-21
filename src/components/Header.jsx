import React from "react";
import fb from "../assets/facebook.png";

export default function Header() {
  return (
    <div>
      <header>
        <div className="container header">
          <h1>
            German Boxer Puppies for Sale!
            <a href="https://www.facebook.com/andrej.andrasik.7">
              <img className="fb-logo" src={fb} alt="facebook logo" />
            </a>
          </h1>
          <span className="subheading">
            "CASA DI ANDREY" Breeders of European Top Quality Boxer Puppies
          </span>

          <nav>
            <ul>
              <li>
                {/* <a href="https://www.facebook.com/andrej.andrasik.7">
                  <img
                    className="fb-logo"
                    src="src/assets/facebook.png"
                    alt="facebook logo"
                  />
                </a> */}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
