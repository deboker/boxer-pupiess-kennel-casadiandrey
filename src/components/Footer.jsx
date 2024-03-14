import React from "react";

export default function Footer(props) {
  return (
    <footer className={`footer-container ${props.darkMode ? "dark-mode" : ""}`}>
      <p>Copyright &copy; 2024 by Andrey | All Rights Reserved.</p>
    </footer>
  );
}
