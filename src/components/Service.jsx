import React, { useState } from "react";
import Cube from "./Cube";
import Development from "./Development";
import Product from "./Product";
import "./Service.css";
import SocialMedia from "./SocialMedia";
const Service = () => {
  const [current, setCurrent] = useState("Web Disigning");
  return (
    <div className="service">
      <div className="serviceLeft">
        <ul className="serviceLists">
          <li
            className="servicelistItem"
            onClick={(e) => {
              setCurrent("Web Disigning");
            }}
          >
            Web Disigning
          </li>
          <li
            className="servicelistItem"
            onClick={(e) => {
              setCurrent("Web Development");
            }}
          >
            Web Development
          </li>
          <li
            className="servicelistItem"
            onClick={(e) => {
              setCurrent("Product Design");
            }}
          >
            Product Design
          </li>
          <li
            className="servicelistItem"
            onClick={(e) => {
              setCurrent("Social Media");
            }}
          >
            Social Media
          </li>
        </ul>
      </div>
      <div className="serviceRight">
        {current === "Web Disigning" && <Cube />}
        {current === "Web Development" && <Development />}
        {current === "Product Design" && <Product />}
        {current === "Social Media" && <SocialMedia />}
      </div>
    </div>
  );
};

export default Service;
