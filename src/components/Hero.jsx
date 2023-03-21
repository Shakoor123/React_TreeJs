import React from "react";
import "./Hero.css";
import hero from "../assets/hero.jpg";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="heroBody">
        <div className="heroLeft">
          <span className="title">Full Stack Developer</span>
          <span className="text">
            ━ I design and code beautifully simple things,<br></br> and I love
            what I do.
          </span>
          <button className="contactUs">Know More</button>
        </div>
        <div className="heroRight">
          <img src={hero} alt="" className="heroImage" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
