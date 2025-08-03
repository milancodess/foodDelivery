import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="Logo" />

      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>
          <Link to="/" onClick={() => setMenu("home")}>
            Home
          </Link>
        </li>
        <li className={menu === "menu" ? "active" : ""}>
          <a href="#explore-menu" onClick={() => setMenu("menu")}>
            Menu
          </a>
        </li>
        <li className={menu === "mobile-app" ? "active" : ""}>
          <a href="#app-download" onClick={() => setMenu("mobile-app")}>
            Mobile App
          </a>
        </li>
        <li className={menu === "contact-us" ? "active" : ""}>
          <a href="#footer" onClick={() => setMenu("contact-us")}>
            Contact Us
          </a>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket icon" />
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
