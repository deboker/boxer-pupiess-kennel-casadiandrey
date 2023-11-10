import React from "react";

export default function Footer(props) {
  return (
    <div>
      <h3>
        <footer className={props.darkMode ? "dark-mode" : ""}>
          <p>&copy; 2023 Andrey</p>
        </footer>
      </h3>
    </div>
  );
}
