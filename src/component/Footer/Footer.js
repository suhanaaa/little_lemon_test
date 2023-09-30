import React from "react";
import Logo from "../assets/icons_assets/Logo .svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>
        <div>
          <h3>
            <a href="#"> Doormat Navigation</a>
          </h3>
          <p>
            <a href="#">Home</a>
          </p>
          <p>
            <a href="#">About</a>
          </p>
          <p>
            <a href="#">Menu</a>
          </p>
          <p>
            <a href="#">Reservations</a>
          </p>
          <p>
            <a href="#">Order Online</a>
          </p>
          <p>
            <a href="#">=Login</a>
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Adress</p>
          <p>Phone number</p>
          <p>Email</p>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <p>Adress</p>
          <p>Phone number</p>
          <p>Email</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
