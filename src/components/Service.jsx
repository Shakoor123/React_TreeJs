import React from "react";
import Cube from "./Cube";
import Development from "./Development";
import Product from "./Product";
import "./Service.css";
import SocialMedia from "./SocialMedia";
const Service = () => {
  return (
    <div className="service">
      <div className="serviceLeft">
        <ul className="serviceLists">
          <li className="servicelistItem">Web Development</li>
          <li className="servicelistItem">Web Disigning</li>
          <li className="servicelistItem">Product Design</li>
          <li className="servicelistItem">Social Media</li>
        </ul>
      </div>
      <div className="serviceRight">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Service;
