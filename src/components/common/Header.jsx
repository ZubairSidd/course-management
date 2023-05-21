import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../css/style.css";

function Header() {
  return (
    <>
      <header className="header">
        <h1 className="header-title">air.ish</h1>
      </header>
      <nav className="navigation">
        <ul className="nav-list">
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
