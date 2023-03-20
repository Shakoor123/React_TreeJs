import React from "react";
import "./Hero.css";
import hero from "../assets/hero.jpg";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="heroBody">
        <div className="heroLeft"> dddd</div>
        <div className="heroRight">
          <img src={hero} alt="" className="heroImage" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
