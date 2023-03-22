import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navleft">
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="navright">
        <ul className="lists">
          <li className="listItem">Service</li>
          <li className="listItem">Projects</li>
          <li className="listItem">Know-More</li>
        </ul>
        <button className="contactUs">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
