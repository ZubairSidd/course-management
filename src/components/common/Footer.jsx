import React from "react";

function Footer(props) {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Course Website. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
