import React from "react";
import Logo from "../assets/icons_assets/Logo .svg";
import "../../index.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="" srcset="" />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
        <li>
          <a href="#">Order online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
