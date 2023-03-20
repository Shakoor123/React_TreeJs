import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navleft">logo</div>
      <div className="navright">
        <ul className="lists">
          <li className="listItem">About</li>
          <li className="listItem">Projects</li>
          <li className="listItem">sss</li>
          <li className="listItem">aaa</li>
        </ul>
        <button className="contactUs">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
